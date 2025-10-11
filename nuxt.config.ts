// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  routeRules: {
    '/api/**': {
      proxy: 'http://localhost:1337/api/**', // 将所有 /api 请求代理到您的后端
    },
  },
  css: [
    '~/assets/main.scss'
  ]
})