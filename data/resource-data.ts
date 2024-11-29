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

export const documents = {
  policies: [
    {
      title: '国家免疫规划疫苗儿童免疫程序及说明（2021年版）',
      description: '最新版国家免疫规划疫苗接种程序及相关说明',
      date: '2021-06',
      url: 'http://www.nhc.gov.cn/jkj/s7915/202106/f3037d3c5f464c01b8c4155ac328b4d8.shtml'
    },
    {
      title: '疫苗管理法实施条例',
      description: '关于疫苗管理的法律实施细则',
      date: '2021-03',
      url: 'http://www.gov.cn/zhengce/content/2021-03/27/content_5596378.htm'
    },
    {
      title: '预防接种异常反应补偿方案',
      description: '接种异常反应的处理和补偿政策',
      date: '2020-12',
      url: 'http://www.nhc.gov.cn/jkj/s7915/202012/e8c1ce75f6594c0a97a1be156d135147.shtml'
    }
  ],
  guidelines: [
    {
      title: '预防接种工作规范',
      description: '详细的预防接种操作指南和规范要求',
      date: '2022-01',
      url: 'http://www.nhc.gov.cn/jkj/s7915/202201/93886c3e88c64a5b940f4f0a08b8f5e7.shtml'
    },
    {
      title: '儿童预防接种咨询指南',
      description: '针对儿童预防接种的专业咨询指导文件',
      date: '2022-03',
      url: 'http://www.chinacdc.cn/jkzt/ymyjz/ymyjzgz/202203/t20220315_258987.html'
    },
    {
      title: '疫苗储存和运输管理指南',
      description: '关于疫苗冷链储存和运输的标准规范',
      date: '2021-09',
      url: 'http://www.chinacdc.cn/jkzt/ymyjz/ymyjzgz/202109/t20210920_251234.html'
    }
  ]
};

export const websites: Website[] = [
  {
    name: '中国疾病预防控制中心',
    description: '国家级疾病预防控制机构官方网站',
    url: 'http://www.chinacdc.cn'
  },
  {
    name: '世界卫生组织',
    description: '世界卫生组织官方网站中文版',
    url: 'https://www.who.int/zh'
  },
  {
    name: '中华人民共和国国家卫生健康委员会',
    description: '国家卫健委官方网站',
    url: 'http://www.nhc.gov.cn'
  },
  {
    name: '北京市卫生健康委员会',
    description: '北京市卫健委官方网站',
    url: 'http://wjw.beijing.gov.cn'
  }

];

export const contacts: Contact[] = [
  {
    name: '全国免疫规划咨询热线',
    phone: '12320'
  },
  {
    name: '成都市疾控中心咨询电话',
    phone: '028-12320'
  },
  {
    name: '成都市预防接种咨询热线',
    phone: '028-85586198'
  },
  {
    name: '成都市卫生监督所',
    phone: '028-61881064'
  }
];

export const otherResources = [
  '各省市疾控中心网站导航',
  '预防接种门诊查询系统',
  '电子预防接种证查询',
  '疫苗相关科普材料下载',
  '预防接种知识宣传手册'
]; 