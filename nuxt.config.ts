// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';

export default defineNuxtConfig({
  hooks: {
      async 'prerender:routes'(ctx) {
        // 1. 调用你的 API 来获取所有有效的文章 slug
        // 假设你的 API 返回 [{ slug: 'post-a' }, { slug: 'post-b' }, ...]
        let authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
        const posts = await $fetch('https://cms.stoneboss.vip/api/blogs?pagination[page]=1&pagination[pageSize]=20',{
            timeout: 50000,
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        }); 
        console.log('prerender.routes1', posts)

        // 2. 遍历结果并将完整的路由路径添加到预渲染列表
        for (const post of posts.data) {
          ctx.routes.add(`/blog/${post.slug}`);
        }

        const productPosts = await $fetch('https://cms.stoneboss.vip/api/products?pagination[page]=1&pagination[pageSize]=20',{
           timeout: 50000,
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        }); 
        console.log('prerender.routes2', productPosts.data)

        // 2. 遍历结果并将完整的路由路径添加到预渲染列表
        for (const post of productPosts.data) {
          ctx.routes.add(`/Products/${post.url}`);
        }
      }
    },
  // 开发模式优化
  // dev: process.env.NODE_ENV !== 'production',
  
  // 启用更快的构建
  nitro: {
    prerender: {
      // concurrency: 20,
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