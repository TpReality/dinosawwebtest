// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开发模式优化
  dev: process.env.NODE_ENV !== 'production',
  
  // 启用更快的构建
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  routeRules: {
    '/api/**': {
      proxy: 'https://zsbzj1zv.p2link.483n.com/api/**', // 将所有 /api 请求代理到您的后端
    },
  },
  css: [
    '~/assets/main.scss'
  ]
})