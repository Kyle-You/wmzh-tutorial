<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题 -->
    <div class="bg-green-50 rounded-lg p-8 mb-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">国家免疫规划疫苗介绍</h1>
      <p class="text-gray-600">
        了解国家免疫规划中包含的各种疫苗及其预防作用
      </p>
    </div>

    <!-- 疫苗分类列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in vaccineCategories" 
           :key="category.id" 
           class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 px-6 py-3">
          <h2 class="text-white font-bold">{{ category.name }}</h2>
        </div>
        <div class="p-6">
          <ul class="space-y-4">
            <li v-for="vaccine in category.vaccines" 
                :key="vaccine.id" 
                class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <NuxtLink :to="`/vaccines/${vaccine.id}`" 
                       class="block hover:bg-gray-50 p-2 rounded">
                <h3 class="font-medium text-green-700">{{ vaccine.name }}</h3>
                <p class="text-sm text-gray-600 mt-1">{{ vaccine.description }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 补充说明 -->
    <div class="bg-green-50 rounded-lg p-6 mt-8">
      <h2 class="text-lg font-bold text-green-800 mb-4">疫苗分类说明</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="category in vaccineCategories" :key="category.id">
          <h3 class="font-medium text-green-700 mb-2">{{ category.name }}</h3>
          <p class="text-sm text-gray-600">
            {{ category.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vaccineCategories } from '~/data/vaccine-categories';
</script> 