import type { VaccineInfo } from './vaccine-info';

export interface VaccineCategory {
  id: string;
  name: string;
  description: string;
  vaccines: VaccineInfo[];
}

export const vaccineCategories: VaccineCategory[] = [
  {
    id: 'virus',
    name: '病毒疫苗',
    description: '通过灭活或减毒的病毒制成，用于预防病毒引起的传染病，如乙肝疫苗、脊灰疫苗等。',
    vaccines: [
      {
        id: 'hepb',
        name: '乙型肝炎疫苗',
        type: '免费',
        diseases: ['乙型肝炎'],
        description: '用于预防乙型肝炎病毒感染，是新生儿出生后首先接种的疫苗之一'
      },
      {
        id: 'ipv',
        name: '脊髓灰质炎灭活疫苗',
        type: '免费',
        diseases: ['脊髓灰质炎'],
        description: '用于预防脊髓灰质炎，是全球消灭脊髓灰质炎的重要工具'
      },
      {
        id: 'mmr',
        name: '麻腮风联合疫苗',
        type: '免费',
        diseases: ['麻疹', '流行性腮腺炎', '风疹'],
        description: '用于预防麻疹、流行性腮腺炎和风疹三种传染病'
      },
      {
        id: 'jev',
        name: '乙型脑炎疫苗',
        type: '免费',
        diseases: ['流行性乙型脑炎'],
        description: '用于预防乙型脑炎病毒感染引起的流行性乙型脑炎'
      },
      {
        id: 'hepa',
        name: '甲型肝炎疫苗',
        type: '免费',
        diseases: ['甲型肝炎'],
        description: '用于预防甲型肝炎病毒感染'
      }
    ]
  },
  {
    id: 'bacterial',
    name: '细菌疫苗',
    description: '由灭活或减毒的细菌制成，用于预防细菌性传染病，如百日咳疫苗等。',
    vaccines: [
      {
        id: 'bcg',
        name: '卡介苗',
        type: '免费',
        diseases: ['结核病'],
        description: '用于预防结核病，是新生儿常规接种的疫苗之一'
      },
      {
        id: 'menA',
        name: 'A群脑膜炎球菌疫苗',
        type: '免费',
        diseases: ['流行性脑脊髓膜炎'],
        description: '用于预防A群脑膜炎球菌引起的流行性脑脊髓膜炎'
      }
    ]
  },
  {
    id: 'toxoid',
    name: '类毒素疫苗',
    description: '由细菌产生的毒素经处理后制成，用于预防由细菌毒素引起的疾病，如白破疫苗等。',
    vaccines: [
      {
        id: 'dpt',
        name: '百白破联合疫苗',
        type: '免费',
        diseases: ['白喉', '破伤风', '百日咳'],
        description: '用于预防白喉、破伤风和百日咳三种疾病'
      },
      {
        id: 'dt',
        name: '白破疫苗',
        type: '免费',
        diseases: ['白喉', '破伤风'],
        description: '用于预防白喉和破伤风，是学龄期儿童加强免疫的疫苗'
      }
    ]
  }
]; 