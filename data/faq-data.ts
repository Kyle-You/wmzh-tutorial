export interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQCategories {
  [key: string]: FAQ[];
}

export const faqCategories = {
  basic: '基础知识',
  vaccination: '接种相关',
  special: '特殊情况'
};

export const faqList: FAQCategories = {
  basic: [
    {
      question: '什么是国家免疫规划？',
      answer: '国家免疫规划是国家为预防和控制特定传染病而制定的公共卫生项目，通过为公民提供免费疫苗接种来预防疾病，保护公众健康。'
    },
    {
      question: '国家免疫规划包含哪些疫苗？',
      answer: '目前国家免疫规划疫苗包括乙肝疫苗、卡介苗、脊灰疫苗、百白破疫苗、麻腮风疫苗、乙脑疫苗、甲肝疫苗等。这些疫苗可以预防多种传染病。'
    },
    {
      question: '为什么要进行疫苗接种？',
      answer: '疫苗接种是预防传染病最经济、最有效的措施之一。通过接种疫苗可以使机体产生免疫力，预防相应传染病的发生，从而保护个人和群体健康。'
    }
  ],
  vaccination: [
    {
      question: '疫苗接种前需要注意什么？',
      answer: '接种前应进行健康状况评估，如有发热等症状应暂缓接种。同时需要了解被接种者的过敏史和既往接种反应等情况。'
    },
    {
      question: '不同疫苗之间需要间隔多久？',
      answer: '一般情况下，不同种类的减毒活疫苗之间需要间隔28天以上。灭活疫苗之间或灭活疫苗与活疫苗之间可以同时接种，但需要在不同的部位进行。'
    },
    {
      question: '漏种或延迟接种怎么办？',
      answer: '如果未能按时完成接种，应当及时进行补种。补种时应遵医嘱，按照规定的免疫程序完成接种。'
    }
  ],
  special: [
    {
      question: '早产儿如何接种疫苗？',
      answer: '早产儿应按照实际月龄（即出生后的时间）进行接种，不需要校正胎龄。但建议在健康状况稳定后再进行接种。'
    },
    {
      question: '有过敏史的人可以接种疫苗吗？',
      answer: '对疫苗成分过敏者禁止接种相应疫苗。其他过敏史者应当在接种前告知医生，由医生评估后决定是否接种。'
    },
    {
      question: '患有慢性疾病的人可以接种疫苗吗？',
      answer: '慢性病患者是否可以接种疫苗需要根据具体情况评估。建议在疾病稳定期接种，并事先咨询主治医生的意见。'
    }
  ]
}; 