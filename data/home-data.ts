import type { VaccineInfo } from './vaccine-info';
import { vaccineList } from './vaccine-info';

export interface Feature {
  title: string;
  description: string;
}

export interface Overview {
  title: string;
  description: string;
  features: string[];
}

export interface Development {
  title: string;
  description: string;
}

export const overview: Overview = {
  title: '什么是国家免疫规划？',
  description: '国家免疫规划是一项重要的公共卫生政策，通过提供免费疫苗接种服务，帮助公民预防多种传染病。目前包含多种疫苗，可预防多种传染病。',
  features: [
    '国家免费提供',
    '全国统一实施',
    '经过严格论证',
    '持续动态调整'
  ]
};

export const developments: Development[] = [
  {
    title: '历史发展',
    description: '国家免疫规划经过多年发展和完善，根据疾病预防控制需要，不断调整优化接种方案。'
  },
  {
    title: '实施情况',
    description: '目前我国免疫规划工作已经取得显著成效，多种传染病的发病率大幅下降。'
  },
  {
    title: '未来展望',
    description: '国家将继续完善免疫规划政策，根据疾病预防控制需要适时调整疫苗种类。'
  }
];

// 从 vaccineList 中提取简化的疫苗信息
export const vaccines = vaccineList.map(vaccine => ({
  name: vaccine.name,
  disease: vaccine.diseases.join('、')
})); 