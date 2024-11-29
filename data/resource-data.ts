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
      date: '2021-02',
      url: 'http://www.nhc.gov.cn/jkj/s3581/202103/590a8c7915054aa682a8d2ae8199e222/files/7559f978e6be4ec585a9a1fe0d9224f6.pdf'
    },
    {
      title: '中华人民共和国疫苗管理法',
      description: '关于疫苗管理的法律实施细则',
      date: '2019-07',
      url: 'https://gdidc.gd.gov.cn/attach/yimiaofa.pdf'
    },
    {
      title: '关于印发《四川省预防接种异常反应补偿办法》的通知',
      description: '接种异常反应的处理和补偿政策',
      date: '2011-07',
      url: 'https://www.yascdc.com/Article/View?id=11709'
    }
  ],
  guidelines: [
    {
      title: '预防接种工作规范（2023年版）',
      description: '详细的预防接种操作指南和规范要求',
      date: '2023-12',
      url: 'https://www.gov.cn/zhengce/zhengceku/202312/P020231214424277335809.pdf'
    },
    {
      title: ' 疫苗储存和运输管理规范（2017年版）',
      description: '关于疫苗冷链储存和运输的标准规范',
      date: '2017-12',
      url: 'http://www.nhc.gov.cn/ewebeditor/uploadfile/2017/12/20171228151946998.pdf'
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
];

export const contacts: Contact[] = [
  {
    name: '全国免疫规划咨询热线',
    phone: '12320'
  },
  {
    name: '中华人民共和国国家卫生健康委员会',
    phone: '010-68797979'
  }
];

export const otherResources = [
  '各省市疾控中心网站导航',
  '预防接种门诊查询系统',
  '电子预防接种证查询',
  '疫苗相关科普材料下载',
  '预防接种知识宣传手册'
]; 