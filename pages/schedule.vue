<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题 -->
    <div class="bg-green-50 rounded-lg p-8 mb-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">国家免疫规划疫苗接种程序</h1>
      <p class="text-gray-600">
        根据《国家免疫规划疫苗儿童免疫程序及说明（2021年版）》整理，帮助您了解国家免疫规划疫苗的接种安排。
      </p>
    </div>

    <!-- 接种时间表 -->
    <div class="space-y-8">
      <div v-for="(group, key) in ageGroups" :key="key" 
           class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 px-6 py-3">
          <h2 class="text-white font-bold">{{ group.title }}</h2>
        </div>
        <div class="p-6">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead>
                <tr class="bg-green-50">
                  <th class="px-4 py-3 text-left text-sm font-semibold text-green-700 w-1/6 min-w-[80px]">
                    {{ group.ageLabel }}
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-green-700 w-2/6 min-w-[100px]">
                    应种疫苗
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-green-700 w-1/6 min-w-[70px]">
                    剂次
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="schedule in schedulesByAgeGroup[key]" 
                    :key="schedule.age" 
                    class="hover:bg-gray-50">
                  <td class="px-4 py-4 text-sm font-medium text-gray-900">
                    {{ schedule.age }}
                  </td>
                  <td class="px-4 py-4 text-sm text-gray-600">
                    <span v-for="(vaccine, index) in schedule.vaccines" :key="index">
                      <NuxtLink 
                        :to="`/vaccines/${getVaccineId(vaccine.name)}`" 
                        class="text-green-600 hover:text-green-800 hover:underline"
                      >
                        {{ vaccine.name }}
                      </NuxtLink>
                      <span v-if="index < schedule.vaccines.length - 1">、</span>
                    </span>
                  </td>
                  <td class="px-4 py-4 text-sm text-gray-600">
                    <span v-for="(vaccine, index) in schedule.vaccines" :key="index">
                      {{ vaccine.dose }}
                      <span v-if="index < schedule.vaccines.length - 1">、</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 基本原则和特殊情况说明 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">基本原则</h2>
        <ul class="space-y-3 text-gray-600">
          <li v-for="(principle, index) in basicPrinciples" 
              :key="index" 
              class="flex items-start">
            <span class="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            <span>{{ principle }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">特殊情况说明</h2>
        <ul class="space-y-3 text-gray-600">
          <li v-for="(note, index) in specialNotes" 
              :key="index" 
              class="flex items-start">
            <span class="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            <span>{{ note }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 补充提示 -->
    <div class="bg-green-50 rounded-lg p-6 mt-8">
      <p class="text-sm text-gray-600">
        注：本表仅供参考，具体接种安排请以接种单位通知为准。国家免疫规划会根据疾病预防控制需要进行动态调整，请关注最新的官方通知。
      </p>
    </div>

    <!-- 添加参考文献 -->
    <References />
  </div>
</template>

<script setup lang="ts">
import { vaccinationSchedules, basicPrinciples, specialNotes } from '~/data/vaccination-schedule';
import { vaccineList } from '~/data/vaccine-info';
import type { Schedule } from '~/data/types';
import References from '~/components/References.vue';

// 年龄组配置
const ageGroups = {
  '0-6': {
    title: '出生至6月龄阶段',
    ageLabel: '月龄',
    filter: (age: string) => age.includes('出生') || (age.includes('月龄') && parseInt(age) <= 6)
  },
  '8-24': {
    title: '8月龄至2周岁阶段',
    ageLabel: '月龄',
    filter: (age: string) => (age.includes('月龄') && parseInt(age) > 6 && parseInt(age) <= 24) || age === '2岁'
  },
  '3-6': {
    title: '3周岁至6周岁阶段',
    ageLabel: '年龄',
    filter: (age: string) => age.includes('岁') && parseInt(age) >= 3
  }
};

// 将时间表按年龄段分组
const schedulesByAgeGroup = computed(() => {
  const groups: Record<string, Schedule[]> = {};
  
  for (const [key, group] of Object.entries(ageGroups)) {
    groups[key] = vaccinationSchedules.filter(s => group.filter(s.age));
  }
  
  return groups;
});

// 获取疫苗ID
const getVaccineId = (name: string): string => {
  const vaccine = vaccineList.find(v => v.name === name);
  return vaccine?.id || 'unknown';
};
</script> 