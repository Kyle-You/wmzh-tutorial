<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6">接种时间表</h1>
    <div class="w-full overflow-x-auto rounded-lg shadow">
      <table class="w-full min-w-[800px] bg-white divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="bg-blue-50 py-3 px-4 text-left w-[180px]">年龄</th>
            <th class="bg-blue-50 py-3 px-4 text-left w-[420px]">疫苗</th>
            <th class="bg-blue-50 py-3 px-4 text-left w-[200px]">剂量</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(schedule, index) in schedules" 
              :key="index" 
              class="hover:bg-gray-50 transition-colors">
            <td class="py-3 px-4 font-medium">
              {{ schedule.age }}
            </td>
            <td class="py-3 px-4">
              <div v-for="(vaccine, vIndex) in schedule.vaccines" 
                   :key="vIndex"
                   class="flex items-center py-1.5">
                <div class="w-2 h-2 rounded-full bg-blue-500 mr-2.5"></div>
                <span>{{ vaccine.name }}</span>
              </div>
            </td>
            <td class="py-3 px-4 text-gray-600">
              <div v-for="(vaccine, vIndex) in schedule.vaccines" 
                   :key="vIndex"
                   class="py-1.5">
                {{ vaccine.dose }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vaccinationSchedules } from '~/data/vaccination-schedule';

const schedules = ref(vaccinationSchedules);
</script>

<style scoped>
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E0 #EDF2F7;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #EDF2F7;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #CBD5E0;
  border-radius: 4px;
  border: 2px solid #EDF2F7;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background-color: #A0AEC0;
}
</style> 