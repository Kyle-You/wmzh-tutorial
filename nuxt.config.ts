// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-29',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: '国家免疫规划科普网站',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: '国家免疫规划科普，提供疫苗接种信息查询、接种时间表、疫苗知识等'
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:site_name', content: '国家免疫规划科普' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_CN' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})