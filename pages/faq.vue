<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题 -->
    <div class="bg-green-50 rounded-lg p-8 mb-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">了解更多</h1>
      <p class="text-gray-600">
        关于国家免疫规划的常见问题解答和重要知识
      </p>
    </div>

    <!-- 搜索框 -->
    <div class="max-w-3xl mx-auto mb-8">
      <div class="relative">
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="搜索问题..." 
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
        <span class="absolute right-3 top-3 text-gray-400">
          <SearchIcon />
        </span>
      </div>
    </div>

    <!-- FAQ分类列表 -->
    <div class="max-w-3xl mx-auto">
      <!-- 分类标签 -->
      <div class="flex space-x-4 mb-6">
        <button 
          v-for="(category, key) in faqCategories" 
          :key="key"
          @click="activeCategory = key"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          :class="[
            activeCategory === key 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- 问答列表 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="divide-y divide-gray-100">
          <div 
            v-for="(qa, index) in filteredQuestions[activeCategory]" 
            :key="index"
            class="group"
          >
            <button 
              @click="toggleAnswer(qa)"
              class="w-full px-6 py-4 text-left hover:bg-gray-50"
            >
              <div class="flex justify-between items-center">
                <h3 class="font-medium text-gray-900 group-hover:text-green-600">
                  {{ qa.question }}
                </h3>
                <ChevronIcon 
                  :isOpen="qa.isOpen"
                  class="text-gray-400 group-hover:text-green-600 ml-4"
                />
              </div>
              <Transition
                @enter="onEnter"
                @leave="onLeave"
                @before-enter="beforeEnter"
                @before-leave="beforeLeave"
              >
                <div 
                  v-show="qa.isOpen"
                  class="mt-3 text-gray-600 text-sm leading-relaxed overflow-hidden"
                >
                  {{ qa.answer }}
                </div>
              </Transition>
            </button>
          </div>
        </div>
      </div>

      <!-- 补充说明 -->
      <div class="bg-green-50 rounded-lg p-6 mt-8">
        <p class="text-sm text-gray-600">
          如果您的问题未在此处找到答案，建议咨询当地疾病预防控制中心或接种单位。本页面信息仅供参考，具体情况请以专业医疗机构意见为准。
        </p>
      </div>
    </div>

    <!-- 添加参考文献 -->
    <References />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '~/components/icons/SearchIcon.vue';
import ChevronIcon from '~/components/icons/ChevronIcon.vue';
import { faqCategories, faqList } from '~/data/faq-data';
import type { FAQ } from '~/data/faq-data';
import References from '~/components/References.vue';

const searchQuery = ref('');
const activeCategory = ref('basic');

// 使用 reactive 包装 FAQ 列表以保持响应性
const questions = reactive(JSON.parse(JSON.stringify(faqList)));

// 根据搜索词过滤问题
const filteredQuestions = computed(() => {
  if (!searchQuery.value) return questions;

  const filterQA = (qaList: FAQ[]) => {
    return qaList.filter(qa => 
      qa.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      qa.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  };

  return {
    basic: filterQA(questions.basic),
    vaccination: filterQA(questions.vaccination),
    special: filterQA(questions.special)
  };
});

// 切换问题答案的显示状态
const toggleAnswer = (qa: FAQ) => {
  qa.isOpen = !qa.isOpen;
};

// 添加过渡动画的处理函数
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.height = '0';
  (el as HTMLElement).style.opacity = '0';
};

const onEnter = (el: Element) => {
  const height = el.scrollHeight;
  (el as HTMLElement).style.height = height + 'px';
  (el as HTMLElement).style.opacity = '1';
};

const beforeLeave = (el: Element) => {
  (el as HTMLElement).style.height = el.scrollHeight + 'px';
  (el as HTMLElement).style.opacity = '1';
};

const onLeave = (el: Element) => {
  (el as HTMLElement).style.height = '0';
  (el as HTMLElement).style.opacity = '0';
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  height: 0;
  opacity: 0;
}
</style> 