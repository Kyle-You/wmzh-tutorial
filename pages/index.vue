<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 头部横幅 -->
    <div class="bg-green-50 rounded-lg p-8 mb-12">
      <h1 class="text-3xl font-bold text-green-800 mb-4">了解国家免疫规划</h1>
      <p class="text-gray-600">
        国家免疫规划是国家为预防和控制特定传染病而制定的公共卫生项目，通过为公民提供免费疫苗接种来预防疾病，保护公众健康。
      </p>
    </div>

    <!-- 主要内容区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- 左侧：概述 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">{{ overview.title }}</h2>
        <p class="text-gray-600 mb-4">{{ overview.description }}</p>
        <div class="bg-green-50 rounded p-4">
          <h3 class="font-bold text-green-700 mb-2">主要特点：</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li v-for="feature in overview.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧：疫苗列表 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">包含的疫苗种类</h2>
        <ul class="space-y-3">
          <li v-for="vaccine in vaccines" :key="vaccine.name" class="flex items-start">
            <span class="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            <div>
              <span class="font-medium text-gray-800">{{ vaccine.name }}</span>
              <span class="text-sm text-gray-500 ml-2">预防{{ vaccine.disease.join('、') }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 补充说明 -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-12">
      <h2 class="text-xl font-bold text-green-700 mb-4">重要说明</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="dev in developments" 
             :key="dev.title" 
             class="border-l-4 border-green-500 pl-4">
          <h3 class="font-bold text-gray-800 mb-2">{{ dev.title }}</h3>
          <p class="text-gray-600 text-sm">{{ dev.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { overview, developments, vaccines } from '~/data/home-data';
</script> 