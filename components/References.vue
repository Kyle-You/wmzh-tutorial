<template>
  <div class="bg-gray-50 rounded-lg p-6 mt-8">
    <h2 class="text-lg font-bold text-gray-900 mb-4">参考文献</h2>
    <ul class="space-y-3">
      <li v-for="(ref, index) in references" 
          :key="ref.id" 
          class="text-sm text-gray-600"
      >
        <div class="flex items-start">
          <span class="mr-2">[{{ index + 1 }}]</span>
          <div>
            <span class="font-medium">{{ ref.title }}.</span>
            <span class="ml-1">{{ ref.source }}, {{ ref.date }}.</span>
            <a 
              v-if="ref.url" 
              :href="ref.url" 
              target="_blank"
              class="ml-2 text-green-600 hover:text-green-800 hover:underline"
            >
              [链接]
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { references } from '~/data/references';
</script> 