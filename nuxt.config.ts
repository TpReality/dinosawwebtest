// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';

export default defineNuxtConfig({
  
  // 开发模式优化
  // dev: process.env.NODE_ENV !== 'production',
  
  // 启用更快的构建
  nitro: {
    prerender: {
      concurrency: 1,
      // 告诉 Nitro 从 '/' 开始爬取
      crawlLinks: false,
      routes: [
        '/Products/wire-saw-machine',
        '/Products/diamond-tools',
        '/Products/circle-saw-machine',
        '/Products/sintered-continuous-rim-blade',
        '/Products/mining-and-quarry-machine',
        '/Products/grinding-and-polishing-machine',
        '/Products/profiling-machine',
        '/Products/other-industrial-machine',
        '/projects/marble-projects',
        '/projects/granite-projects',
        '/projects/other-hard-materials-projects',
        '/support/user-manual',
        '/support/faqs',
        '/blog/news-events',
        '/blog/industry-news'
        
      ], // 必须至少有一个起始路由
    },
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
    '/Products': { prerender: true }, // Products预渲染
    '/projects': { prerender: true }, // projects预渲染
    '/support': { prerender: true }, // support预渲染'
    '/blog': { prerender: true }, // blog预渲染
    '/About-us': { prerender: true }, // About-us预渲染
    '/video': { prerender: true }, // video预渲染
    '/contact': { prerender: true }, // contact-us预渲染
    '/stoneidentification': { prerender: true }, // stoneidentification预渲染
    '/ai': { prerender: true }, // ai预渲染
    '/api/**': {
      proxy: 'https://cms.stoneboss.vip/api/**', // 将所有 /api 请求代理到您的后端
      headers: { 'cache-control': 's-maxage=60' } // 添加缓存
    },
    
  },
  
  css: [
    '~/assets/main.scss'
  ]
})