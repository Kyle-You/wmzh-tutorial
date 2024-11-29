<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- 左侧导航链接 -->
          <div class="flex space-x-4">
            <NuxtLink 
              v-for="(item, path) in navItems" 
              :key="path"
              :to="path"
              class="px-3 py-2 rounded-md text-sm font-medium hover:text-green-600"
              :class="route.path === path ? 'text-green-600' : 'text-gray-700'"
            >
              {{ item }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- 页面内容 -->
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// 导航项目
const navItems = {
  '/': '首页',
  '/schedule': '接种程序',
  '/vaccines': '疫苗介绍',
  '/faq': '常见问题',
  '/centers': '相关资源'
};
</script> 