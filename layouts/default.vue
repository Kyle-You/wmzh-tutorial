<template>
  <div class="min-h-screen bg-white">
    <!-- 固定导航栏 -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0">
            <Logo />
          </NuxtLink>

          <!-- 导航链接 -->
          <div class="flex space-x-4">
            <NuxtLink 
              v-for="(item, path) in navItems" 
              :key="path"
              :to="path"
              class="px-3 py-2 rounded-md text-sm font-medium hover:text-green-600 transition-colors"
              :class="route.path === path ? 'text-green-600' : 'text-gray-700'"
            >
              {{ item }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- 页面内容 - 添加上边距以避免被固定导航栏遮挡 -->
    <div class="pt-16">
      <slot />
    </div>

    <!-- 页脚 -->
    <footer class="bg-gray-100 mt-8">
      <div class="container mx-auto px-4 py-8">
        <p class="text-center text-gray-500">
          文明之痕：期末课程作业 - Kyle You
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const navItems = {
  '/': '首页',
  '/schedule': '接种程序',
  '/vaccines': '疫苗介绍',
  '/faq': '常见问题',
  '/centers': '相关资源'
};
</script> 