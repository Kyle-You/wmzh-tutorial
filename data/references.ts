export interface Reference {
  id: string;
  title: string;
  source: string;
  url?: string;
  date: string;
}

export const references: Reference[] = [
  {
    id: 'ref1',
    title: '国家免疫规划疫苗儿童免疫程序及说明（2021年版）',
    source: '中华人民共和国国家卫生健康委员会',
    url: 'http://www.nhc.gov.cn/',
    date: '2021'
  },
  {
    id: 'ref2',
    title: '中国疫苗和免疫规划技术指南',
    source: '中国疾病预防控制中心',
    url: 'http://www.chinacdc.cn/',
    date: '2021'
  }
]; 