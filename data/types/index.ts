// 基础类型定义
export interface BaseInfo {
  id: string;
  name: string;
  description?: string;
}

// 疫苗相关接口
export interface VaccineInfo extends BaseInfo {
  type: "免费" | "自费";
  diseases: string[];
  sideEffects?: string[];
}

// 接种时间表相关接口
export interface Vaccine {
  name: string;
  dose: string;
  info?: VaccineInfo;
}

export interface Schedule {
  age: string;
  vaccines: Vaccine[];
}

// FAQ相关接口
export interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQCategories {
  [key: string]: FAQ[];
}

// 资源相关接口
export interface Document {
  title: string;
  description: string;
  date: string;
  url: string;
}

export interface Website {
  name: string;
  description: string;
  url: string;
}

export interface Contact {
  name: string;
  phone: string;
}

// 疫苗分类相关接口
export interface VaccineCategory {
  id: string;
  name: string;
  description: string;
  vaccines: VaccineInfo[];
}

// 首页相关接口
export interface Overview {
  title: string;
  description: string;
  features: string[];
}

export interface Development {
  title: string;
  description: string;
}

export interface TimeInfo {
  startTime: string;
  endTime: string;
  duration: string;
}
