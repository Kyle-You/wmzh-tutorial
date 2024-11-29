<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题 -->
    <div class="bg-green-50 rounded-lg p-8 mb-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">相关资源</h1>
      <p class="text-gray-600">
        为您提供国家免疫规划相关的政策文件、技术指南及其他参考资源
      </p>
    </div>

    <!-- 资源列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 政策文件 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 px-6 py-3">
          <h2 class="text-white font-bold">政策文件</h2>
        </div>
        <div class="p-6">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documents.policies" :key="index" 
                class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <a :href="doc.url" target="_blank" 
                 class="group hover:bg-gray-50 p-2 rounded block relative">
                <div class="pr-24">
                  <h3 class="font-medium text-gray-800 group-hover:text-green-600">
                    {{ doc.title }}
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">{{ doc.description }}</p>
                </div>
                <div class="absolute top-2 right-2 text-sm text-gray-400 w-20 text-right">
                  {{ doc.date }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 技术指南 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 px-6 py-3">
          <h2 class="text-white font-bold">技术指南</h2>
        </div>
        <div class="p-6">
          <ul class="space-y-4">
            <li v-for="(guide, index) in documents.guidelines" :key="index" 
                class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <a :href="guide.url" target="_blank" 
                 class="group hover:bg-gray-50 p-2 rounded block relative">
                <div class="pr-24">
                  <h3 class="font-medium text-gray-800 group-hover:text-green-600">
                    {{ guide.title }}
                  </h3>
                  <p class="text-sm text-gray-500 mt-1">{{ guide.description }}</p>
                </div>
                <div class="absolute top-2 right-2 text-sm text-gray-400 w-20 text-right">
                  {{ guide.date }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 相关网站 -->
    <div class="mt-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="bg-green-600 px-6 py-3">
          <h2 class="text-white font-bold">相关网站</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(site, index) in websites" :key="index" 
                 class="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <a :href="site.url" target="_blank" class="block">
                <h3 class="font-medium text-gray-800 mb-2">{{ site.name }}</h3>
                <p class="text-sm text-gray-500">{{ site.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系方式 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">常用咨询电话</h2>
        <ul class="space-y-3">
          <li v-for="(contact, index) in contacts" :key="index" 
              class="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <span class="text-gray-700">{{ contact.name }}</span>
            <span class="text-gray-600">{{ contact.phone }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-green-700 mb-4">其他资源</h2>
        <ul class="space-y-3">
          <li v-for="(resource, index) in otherResources" :key="index" 
              class="flex items-start">
            <span class="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            <span class="text-gray-600">{{ resource }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 补充说明 -->
    <div class="bg-green-50 rounded-lg p-6 mt-8">
      <p class="text-sm text-gray-600">
        注：本页面提供的资源链接均来自官方渠道，如遇链接失效或内容更新，请以相关部门官方发布为准。
      </p>
    </div>

    <!-- 添加参考文献 -->
    <References />
  </div>
</template>

<script setup lang="ts">
import { documents, websites, contacts, otherResources } from '~/data/resource-data';
import References from '~/components/References.vue';
</script> 