// 疫苗相关的基础信息
import type { BaseInfo } from './types';

export interface VaccineInfo extends BaseInfo {
  type: '免费' | '自费';
  diseases: string[];  // 预防疾病
  sideEffects?: string[];  // 可能的副作用
}

export const vaccineList: VaccineInfo[] = [
  {
    id: 'bcg',
    name: '卡介苗',
    type: '免费',
    diseases: ['结核病'],
    description: '用于预防结核病，建议在出生后尽早接种',
    sideEffects: ['接种部位可能会形成小疤痕']
  },
  {
    id: 'hepb', 
    name: '乙肝疫苗',
    type: '免费',
    diseases: ['乙型肝炎'],
    description: '预防乙型肝炎，新生儿必须接种'
  },
  {
    id: 'ipv',
    name: '脊灰灭活疫苗',
    type: '免费',
    diseases: ['脊髓灰质炎'],
    description: '预防脊髓灰质炎'
  },
  {
    id: 'dtap',
    name: '百白破疫苗',
    type: '免费',
    diseases: ['白喉', '破伤风', '百日咳'],
    description: '预防白喉、破伤风和百日咳'
  },
  {
    id: 'mmr',
    name: '麻腮风疫苗',
    type: '免费',
    diseases: ['麻疹', '流行性腮腺炎', '风疹'],
    description: '预防麻疹、流行性腮腺炎和风疹',
    sideEffects: ['可能出现发热', '皮疹']
  },
  {
    id: 'jev',
    name: '乙脑减毒活疫苗',
    type: '免费',
    diseases: ['乙型脑炎'],
    description: '预防乙型脑炎',
    sideEffects: ['可能出现轻微发热']
  },
  {
    id: 'hpv',
    name: 'HPV疫苗',
    type: '自费',
    diseases: ['宫颈癌', '生殖器疣'],
    description: '预防人乳头瘤病毒感染，降低宫颈癌风险',
    sideEffects: ['接种部位疼痛', '轻微发热']
  },
  {
    id: 'rv',
    name: '轮状病毒疫苗',
    type: '自费',
    diseases: ['轮状病毒感染'],
    description: '预防由轮状病毒引起的腹泻',
    sideEffects: ['可能出现轻微腹泻']
  },
  {
    id: 'pc',
    name: '肺炎球菌疫苗',
    type: '自费',
    diseases: ['肺炎球菌感染'],
    description: '预防肺炎球菌引起的肺炎、脑膜炎等疾病',
    sideEffects: ['接种部位红肿', '发热']
  },
  {
    id: 'va',
    name: '水痘疫苗',
    type: '自费',
    diseases: ['水痘'],
    description: '预防水痘病毒感染',
    sideEffects: ['可能出现轻微皮疹', '发热']
  },
  {
    id: 'hepa',
    name: '甲肝疫苗',
    type: '自费',
    diseases: ['甲型肝炎'],
    description: '预防甲型肝炎',
    sideEffects: ['可能出现轻微发热']
  },
  {
    id: 'menA',
    name: 'A群流脑疫苗',
    type: '自费',
    diseases: ['A群流脑'],
    description: '用于预防A群脑膜炎球菌引起的流行性脑脊髓膜炎'
  },
  {
    id: 'dpt',
    name: '百白破疫苗',
    type: '免费',
    diseases: ['白喉', '破伤风', '百日咳'],
    description: '预防白喉、破伤风和百日咳'
  },
  {
    id: 'dt',
    name: '白破疫苗',
    type: '免费',
    diseases: ['白喉', '破伤风'],
    description: '用于预防白喉和破伤风，是学龄期儿童加强免疫的疫苗',
  }
];
