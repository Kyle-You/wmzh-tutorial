import type { VaccineInfo } from './vaccine-info';
import { vaccineList } from './vaccine-info';

export interface Vaccine {
  name: string;
  dose: string;
  info?: VaccineInfo;  // 关联疫苗详细信息
}

export interface Schedule {
  age: string;
  vaccines: Vaccine[];
}

// 通过ID查找疫苗信息的辅助函数
const findVaccineInfo = (name: string): VaccineInfo | undefined => {
  return vaccineList.find(v => v.name === name);
};

export const vaccinationSchedules: Schedule[] = [
  {
    age: '出生后24小时内',
    vaccines: [
      { 
        name: '卡介苗', 
        dose: '1剂',
        info: findVaccineInfo('卡介苗')
      },
      { 
        name: '乙肝疫苗', 
        dose: '1剂',
        info: findVaccineInfo('乙肝疫苗')
      }
    ]
  },
  {
    age: '1月龄',
    vaccines: [
      { 
        name: '乙肝疫苗', 
        dose: '2剂',
        info: findVaccineInfo('乙肝疫苗')
      }
    ]
  },
  {
    age: '2月龄',
    vaccines: [
      { 
        name: '脊灰灭活疫苗', 
        dose: '1剂',
        info: findVaccineInfo('脊灰灭活疫苗')
      },
      { 
        name: '百白破疫苗', 
        dose: '1剂',
        info: findVaccineInfo('百白破疫苗')
      }
    ]
  },
  {
    age: '3月龄',
    vaccines: [
      { 
        name: '脊灰灭活疫苗', 
        dose: '2剂',
        info: findVaccineInfo('脊灰灭活疫苗')
      },
      { 
        name: '百白破疫苗', 
        dose: '2剂',
        info: findVaccineInfo('百白破疫苗')
      }
    ]
  },
  {
    age: '4月龄',
    vaccines: [
      { 
        name: '脊灰灭活疫苗', 
        dose: '3剂',
        info: findVaccineInfo('脊灰灭活疫苗')
      },
      { 
        name: '百白破疫苗', 
        dose: '3剂',
        info: findVaccineInfo('百白破疫苗')
      }
    ]
  },
  {
    age: '5月龄',
    vaccines: [
      { 
        name: '乙肝疫苗', 
        dose: '3剂',
        info: findVaccineInfo('乙肝疫苗')
      }
    ]
  },
  {
    age: '6月龄',
    vaccines: [
      { 
        name: '麻腮风疫苗', 
        dose: '1剂',
        info: findVaccineInfo('麻腮风疫苗')
      }
    ]
  },
  {
    age: '8月龄',
    vaccines: [
      { 
        name: '乙脑减毒活疫苗', 
        dose: '1剂',
        info: findVaccineInfo('乙脑减毒活疫苗')
      }
    ]
  },
  {
    age: '18月龄',
    vaccines: [
      { 
        name: '百白破疫苗', 
        dose: '4剂',
        info: findVaccineInfo('百白破疫苗')
      },
      { 
        name: '脊灰灭活疫苗', 
        dose: '4剂',
        info: findVaccineInfo('脊灰灭活疫苗')
      }
    ]
  },
  {
    age: '2岁',
    vaccines: [
      { 
        name: '乙脑减毒活疫苗', 
        dose: '2剂',
        info: findVaccineInfo('乙脑减毒活疫苗')
      }
    ]
  },
  {
    age: '3岁',
    vaccines: [
      { 
        name: '麻腮风疫苗', 
        dose: '2剂',
        info: findVaccineInfo('麻腮风疫苗')
      }
    ]
  },
  {
    age: '6岁',
    vaccines: [
      { 
        name: '白破疫苗', 
        dose: '1剂',
        info: findVaccineInfo('白破疫苗')
      }
    ]
  }
];

export const basicPrinciples = [
  "建议在推荐年龄及时完成接种",
  "不同疫苗可同时接种，但需在不同部位进行",
  "如未能按时完成接种，建议及时进行补种",
  "接种前需进行健康状况评估"
];

export const specialNotes = [
  "早产儿按实际月龄接种，无需校正胎龄",
  "低出生体重儿在健康状况良好时可按常规程序接种",
  "如有特殊情况需调整接种时间，请遵医嘱进行",
  "具体接种事宜请咨询接种单位"
]; 