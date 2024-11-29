<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="vaccine">
      <!-- 疫苗详情头部 -->
      <div class="bg-green-50 rounded-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-green-800 mb-2">{{ vaccine.name }}</h1>
            <p class="text-gray-600">{{ vaccine.description }}</p>
          </div>
          <div class="text-right w-32">
            <span class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              {{ vaccine.type }}疫苗
            </span>
          </div>
        </div>
      </div>

      <!-- 疫苗信息卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- 基本信息 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-green-700 mb-4">基本信息</h2>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="font-medium text-gray-700 w-24">预防疾病：</span>
              <div class="flex-1 flex flex-wrap gap-2">
                <span v-for="disease in vaccine.diseases" 
                      :key="disease"
                      class="inline-flex items-center bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm">
                  {{ disease }}
                </span>
              </div>
            </li>
            <li v-if="scheduleInfo" class="flex items-start">
              <span class="font-medium text-gray-700 w-24">接种剂次：</span>
              <span class="text-gray-600">{{ scheduleInfo.doses }}</span>
            </li>
          </ul>
        </div>

        <!-- 接种时间 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-green-700 mb-4">接种时间安排</h2>
          <div class="space-y-4">
            <div v-for="(schedule, index) in vaccineSchedules" 
                :key="schedule.age"
                class="flex items-start bg-gray-50 rounded-lg p-4"
            >
              <span class="w-6 h-6 rounded-full bg-green-100 text-green-800 text-xs flex items-center justify-center font-medium mr-3">
                {{ index + 1 }}
              </span>
              <div>
                <span class="font-medium text-gray-900">{{ schedule.age }}</span>
                <div class="mt-1 text-sm text-gray-600">
                  接种剂次：{{ getVaccineDose(schedule) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 注意事项 -->
      <div v-if="vaccine.sideEffects?.length" class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-bold text-green-700 mb-4">注意事项</h2>
        <ul class="space-y-3">
          <li v-for="(effect, index) in vaccine.sideEffects" 
              :key="index" 
              class="flex items-start">
            <span class="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            <span class="text-gray-600">{{ effect }}</span>
          </li>
        </ul>
      </div>

      <!-- 添加参考文献 -->
      <References />

      <!-- 返回按钮 -->
      <div class="mt-8">
        <NuxtLink 
          to="/schedule" 
          class="inline-flex items-center text-green-600 hover:text-green-800"
        >
          <span class="mr-2">←</span>
          返回接种程序
        </NuxtLink>
      </div>
    </div>

    <!-- 找不到疫苗时显示的内容 -->
    <div v-else class="bg-red-50 rounded-lg p-8">
      <h1 class="text-2xl font-bold text-red-800 mb-4">未找到疫苗信息</h1>
      <p class="text-gray-600 mb-6">
        抱歉，未能找到您要查看的疫苗信息。请检查链接是否正确。
      </p>
      <NuxtLink 
        to="/schedule" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
      >
        <span class="mr-2">←</span>
        返回接种程序
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vaccineList } from '~/data/vaccine-info';
import { vaccinationSchedules } from '~/data/vaccination-schedule';
import type { Schedule } from '~/data/vaccination-schedule';
import References from '~/components/References.vue';

const route = useRoute();
const vaccineId = route.params.id as string;

// 获取疫苗信息
const vaccine = computed(() => vaccineList.find(v => v.id === vaccineId));

// 获取该疫苗的接种时间表
const vaccineSchedules = computed(() => {
  if (!vaccine.value) return [];
  return vaccinationSchedules.filter(schedule => 
    schedule.vaccines.some(v => v.name === vaccine.value?.name)
  );
});

// 获取该疫苗的接种信息
const scheduleInfo = computed(() => {
  if (!vaccineSchedules.value.length) return null;
  
  return {
    doses: `共需接种 ${vaccineSchedules.value.length} 剂`
  };
});

// 获取特定疫苗的剂量信息
interface ScheduleVaccine {
  name: string;
  dose: string;
}

const getVaccineDose = (schedule: Schedule): string => {
  const vaccineItem = schedule.vaccines.find((v: ScheduleVaccine) => v.name === vaccine.value?.name);
  return vaccineItem?.dose || '';
};
</script> 