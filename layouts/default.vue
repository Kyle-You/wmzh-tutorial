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

          <!-- 桌面端导航链接 -->
          <div class="hidden md:flex space-x-4">
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

          <!-- 移动端菜单按钮 -->
          <button 
            class="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- 移动端导航菜单 -->
        <div 
          v-show="isMenuOpen"
          class="md:hidden"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink 
              v-for="(item, path) in navItems" 
              :key="path"
              :to="path"
              class="block px-3 py-2 rounded-md text-base font-medium hover:text-green-600 hover:bg-gray-50 transition-colors"
              :class="route.path === path ? 'text-green-600 bg-gray-50' : 'text-gray-700'"
              @click="isMenuOpen = false"
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
const isMenuOpen = ref(false);

const navItems = {
  '/': '首页',
  '/schedule': '接种程序',
  '/vaccines': '疫苗介绍',
  '/faq': '常见问题',
  '/centers': '相关资源'
};

// 监听路由变化，关闭移动端菜单
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);
</script> 