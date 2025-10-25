// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtmId: 'GTM-P9KQZ4XV'  // 改成你的实际 GTM ID
    }
  },
  // 开发模式优化
  // dev: process.env.NODE_ENV !== 'production',
  hooks: {
    // 在预渲染开始前，获取动态路由并添加到上下文中
    async 'prerender:routes'(ctx) {
      // 假设这是从 API 获取所有文章 slug 的函数
      let authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
      const blogs = await $fetch('/blogs?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc',
        {
          baseURL: 'https://cms.stoneboss.vip/api',
          headers: {
            Authorization: `Bearer ${authToken}`,
          }
        }
      ); 
// console.log(blogs)
      for (const blog of blogs.data) {
        // 添加具体的动态路由路径
        ctx.routes.add(`/blog/${blog.slug}`);
      }

      const products = await $fetch('/products?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc',
        {
          baseURL: 'https://cms.stoneboss.vip/api',
          headers: {
            Authorization: `Bearer ${authToken}`,
          }
        }
      ); 
// console.log(blogs)
      for (const product of products.data) {
        // 添加具体的动态路由路径
        ctx.routes.add(`/Products/${product.url}`);
      }
    },
  },
  // 启用更快的构建
  nitro: {
    // output: {
    //   publicDir: '.output/public-retry'  // 你也可以换成绝对路径
    // },
    prerender: {
      concurrency: 5,
      // 告诉 Nitro 从 '/' 开始爬取
      crawlLinks: false,
      failOnError: false,
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