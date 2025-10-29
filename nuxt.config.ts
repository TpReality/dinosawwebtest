// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';
import { createHash } from 'node:crypto'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtmId: 'GTM-P9KQZ4XV',  // 改成你的实际 GTM ID
      apiBase: 'https://cms.stoneboss.vip/api',
      apiToken: '8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708'
    }
  },
  // 开发模式优化
  // dev: process.env.NODE_ENV !== 'production',
  hooks: {
    // 在预渲染开始前，获取动态路由并添加到上下文中
    async 'prerender:routes'(ctx) {
  // i18n 本地化路由前缀设置（默认语言无前缀，其它语言加 /{code} 前缀）
  const defaultLocale = 'en'
  const localeCodes = ['zh','tr','pt','es','ru','de','ar','vi','fr','pl']
  const addLocalized = (path: string) => {
    ctx.routes.add(path)                  // 默认语言
    for (const code of localeCodes) {
      ctx.routes.add(`/${code}${path}`)   // 其它语言前缀
    }
  }

  // blogs
  let authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
  const blogs = await $fetch('/blogs?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc',
    {
      baseURL: 'https://cms.stoneboss.vip/api',
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }
  ); 
  for (const blog of blogs.data) {
    addLocalized(`/blog/${blog.slug}`)
  }

  // products
  const products = await $fetch('/products?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc',
    {
      baseURL: 'https://cms.stoneboss.vip/api',
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }
  ); 
  
  for (const product of products.data) {
    addLocalized(`/Products/${product.url}`)
  }
}

  },
  // 启用更快的构建
  // ssr: true,
  nitro: {
    // output: {
    //   publicDir: '.output/public-retry'  // 你也可以换成绝对路径
    // },
    // preset: 'cloudflare-pages',
    prerender: {
  concurrency: 5,
  crawlLinks: false,
  failOnError: false,
  routes: (() => {
    const localeCodes = ['zh','tr','pt','es','ru','de','ar','vi','fr','pl'] // 默认语言 en 无前缀
    const paths = [
      '/Products/wire-saw-machine',
      '/Products/diamond-tools',
      '/Products/circle-saw-machine',
      '/Products/drilling-and-engraving-machine',
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
    ]
    const out = [...paths]
    for (const code of localeCodes) {
      for (const p of paths) out.push(`/${code}${p}`)
    }
    return out
  })(), // 必须至少有一个起始路由
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
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'preconnect', href: 'https://framerusercontent.com', crossorigin: '' },
  //       { rel: 'dns-prefetch', href: 'https://framerusercontent.com' },
  //       { rel: 'preconnect', href: 'https://cms.stoneboss.vip', crossorigin: '' },
  //       { rel: 'dns-prefetch', href: 'https://cms.stoneboss.vip' },
  //       { rel: 'preconnect', href: 'https://honghaieim.obs.cn-east-3.myhuaweicloud.com', crossorigin: '' },
  //       { rel: 'dns-prefetch', href: 'https://honghaieim.obs.cn-east-3.myhuaweicloud.com' },
  //     ]
  //   }
  // },
  modules: ['@nuxt/image', '@nuxtjs/i18n'],
  // image: {
  //   domains: ['framerusercontent.com', 'cms.stoneboss.vip', 'honghaieim.obs.cn-east-3.myhuaweicloud.com'],
  //   formats: ['webp', 'avif'],
  //   quality: 70,
  //   staticFilename: ({ src, format, width, quality }) => {
  //     const hash = createHash('sha1').update([src, width, quality].join(':')).digest('hex')
  //     return `_ipx/${quality ? `q_${quality}/` : ''}${hash}.${format || 'jpg'}`
  //   }
  // },
  routeRules: {
  '/blog/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },
  '/Products/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },

  // 顶层入口（默认语言无前缀，其它语言使用 /{code} 前缀）
  '/': { prerender: true },
  '/Products': { prerender: true },
  '/projects': { prerender: true },
  '/support': { prerender: true },
  '/blog': { prerender: true },
  '/About-us': { prerender: true },
  '/video': { prerender: true },
  '/contact': { prerender: true },
  '/stoneidentification': { prerender: true },
  '/ai': { prerender: true },

  // 多语言入口前缀（与 i18n.strategy = 'prefix_except_default' 保持一致）
  '/zh/**': { prerender: true },
  '/tr/**': { prerender: true },
  '/pt/**': { prerender: true },
  '/es/**': { prerender: true },
  '/ru/**': { prerender: true },
  '/de/**': { prerender: true },
  '/ar/**': { prerender: true },
  '/vi/**': { prerender: true },
  '/fr/**': { prerender: true },
  '/pl/**': { prerender: true },

  // 代理与缓存规则保持不变
  '/api/**': { proxy: 'https://cms.stoneboss.vip/api/**', headers: { 'cache-control': 's-maxage=60' } },
},


  i18n: {
    strategy: 'prefix_except_default', // <--- 添加这一行
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'zh', iso: 'zh-CN', name: '中文' },
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe' },
      { code: 'pt', iso: 'pt-BR', name: 'Português' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
      { code: 'ar', iso: 'ar-AR', name: 'العربية' },
      { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
      { code: 'pl', iso: 'pl-PL', name: 'Polski' },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      // 开启此功能
      useCookie: true,
      
      // 当检测到语言后，存储在 cookie 中的键名
      cookieKey: 'i18n_redirected',
      
      // 仅在访问根路径时 (/) 进行重定向
      redirectOn: 'root',
      
      // 如果设置为 true，则总是保存 cookie，即使是默认语言
      // 如果为 false，则只有在检测到的语言不是默认语言时才保存
      alwaysRedirect: false,
    }
    // vueI18n: {
    //   fallbackLocale: 'en',
    // }
  },
  
  css: [
    '~/assets/main.scss'
  ]
})