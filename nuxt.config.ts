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
  // 添加预加载策略
  experimental: {
    payloadExtraction: false, // 减少 payload 大小
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  routeRules: {
    '/': { prerender: true }, // 首页预渲染
    '/api/**': {
      proxy: 'http://192.168.1.9:1337/api/**', // 将所有 /api 请求代理到您的后端
      headers: { 'cache-control': 's-maxage=60' } // 添加缓存
    },
  },
  css: [
    '~/assets/main.scss'
  ]
})