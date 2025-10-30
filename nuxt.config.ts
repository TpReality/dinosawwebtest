// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';
import { createHash } from 'node:crypto'

// --- 最佳实践: 将语言配置提取出来，方便在多处复用 ---
const defaultLocale = 'en';
const locales = [
  { code: 'en', iso: 'en-US', name: 'English' },
  // { code: 'zh', iso: 'zh-CN', name: '中文' },
  // { code: 'ru', iso: 'ru-RU', name: 'Русский' },
  // { code: 'tr', iso: 'tr-TR', name: 'Türkçe' },
  // { code: 'pt', iso: 'pt-BR', name: 'Português' },
  // { code: 'es', iso: 'es-ES', name: 'Español' },
  // { code: 'de', iso: 'de-DE', name: 'Deutsch' },
  // { code: 'ar', iso: 'ar-AR', name: 'العربية' },
  // { code: 'vi', iso: 'vi-VN', name: 'Tiếng Việt' },
  // { code: 'fr', iso: 'fr-FR', name: 'Français' },
  // { code: 'pl', iso: 'pl-PL', name: 'Polski' },
];
const localeCodes = locales.filter(l => l.code !== defaultLocale).map(l => l.code);

export default defineNuxtConfig({
  
  // +++ 新增: 为 sitemap 提供网站的根 URL +++
  // site: {
  //   url: 'https://www.dinosawmachine.com', // 请确保这是你网站的正确域名
  // },
  ssr:true,
  runtimeConfig: {
    public: {
      gtmId: 'GTM-P9KQZ4XV',
      apiBase: 'https://cms.stoneboss.vip/api',
      apiToken: '8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708'
    }
  },

  // hooks: {
  //   async 'prerender:routes'(ctx) {
  //     const addLocalized = (path: string) => {
  //       ctx.routes.add(path)
  //       for (const code of localeCodes) {
  //         ctx.routes.add(`/${code}${path}`)
  //       }
  //     }
  //     const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
  //     const blogs = await $fetch('/blogs?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
  //     for (const blog of blogs.data) {
  //       addLocalized(`/blog/${blog.slug}`)
  //     }
  //     const products = await $fetch('/products?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
  //     for (const product of products.data) {
  //       addLocalized(`/Products/${product.url}`)
  //     }
  //   }
  // },

  nitro: {
    preset: 'cloudflare_pages',
    publicAssets: [
      {
        baseURL: '/',
        dir: 'public', // 假设您的 _routes.json 放在 public/ 目录下
        // 这里的配置是 Nuxt 默认行为，确保静态文件被复制
      }
    ],
    routeRules: {
       '/blog/**': {
      // max-age=1 确保浏览器不缓存，s-maxage=60 确保 CDN 缓存 60 秒。
      isr: true,
      swr: 600
    },

    '/Products/**': {
      isr: true,
      swr: 600
    },
    '/': { prerender: true }, 
    '/Products': {  isr: true, swr: 600 }, 
    '/projects': {  isr: true, swr: 600 }, 
    '/support': {  isr: true, swr: 600 },
    '/blog': {  isr: true, swr: 600 }, 
    '/About-us': {  isr: true, swr: 600 }, 
    '/video': {  isr: true, swr: 600 }, 
    '/contact': {  isr: true, swr: 600 },
    '/stoneidentification': {  isr: true, swr: 600 }, 
    '/ai': {  isr: true, swr: 600 },
    // '/zh/**': {  isr: true, swr: 600 },
    // '/ru/**': {  isr: true, swr: 600 }, 
    // '/tr/**': {  isr: true, swr: 600 }, 
    // '/pt/**': {  isr: true, swr: 600 }, 
    // '/es/**': {  isr: true, swr: 600 },
    //  '/de/**': {  isr: true, swr: 600 }, '/ar/**': {  isr: true, swr: 600 }, '/vi/**': {  isr: true, swr: 600 },
    // '/fr/**': {  isr: true, swr: 600 }, '/pl/**': {  isr: true, swr: 600 },
    '/api/**': { proxy: 'https://cms.stoneboss.vip/api/**', headers: { 'cache-control': 's-maxage=60' } },
    '/sitemap.xml': {  isr: true, swr: 600 }, 
    // '/zh/sitemap.xml': { prerender: true }, 
    // '/ru/sitemap.xml': { prerender: true },
  },
    // prerender: {
    //   concurrency: 10,
    //   crawlLinks: false,
    //   failOnError: false,
    //   routes: (() => {
    //     const paths = [
    //       '/', // 添加根路径
    //       '/Products', '/projects', '/support', '/blog', '/About-us', '/video', '/contact', '/stoneidentification', '/ai',
    //       '/Products/wire-saw-machine', '/Products/diamond-tools', '/Products/circle-saw-machine', '/Products/drilling-and-engraving-machine',
    //       '/Products/mining-and-quarry-machine', '/Products/grinding-and-polishing-machine', '/Products/profiling-machine', '/Products/other-industrial-machine',
    //       '/projects/marble-projects', '/projects/granite-projects', '/projects/other-hard-materials-projects', '/support/user-manual',
    //       '/support/faqs', '/blog/news-events', '/blog/industry-news'
    //     ];
    //     const out = [...paths];
    //     for (const code of localeCodes) {
    //       for (const p of paths) out.push(`/${code}${p === '/' ? '' : p }`);
    //     }
    //     return out;
    //   })(),
    // },
    esbuild: {
      options: { target: 'esnext' }
    }
  },

  experimental: {
    payloadExtraction: false,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // --- 修改: modules 数组 ---
  modules: [
    '@nuxt/image', 
    '@nuxtjs/i18n'
  ],

   
  
  // routeRules: {
  //   '/blog/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },
  //   '/Products/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },
  //   '/': { prerender: true }, '/Products': { prerender: true }, '/projects': { prerender: true }, '/support': { prerender: true },
  //   '/blog': { prerender: true }, '/About-us': { prerender: true }, '/video': { prerender: true }, '/contact': { prerender: true },
  //   '/stoneidentification': { prerender: true }, '/ai': { prerender: true },
  //   '/zh/**': { prerender: true }, '/tr/**': { prerender: true }, '/pt/**': { prerender: true }, '/es/**': { prerender: true },
  //   '/ru/**': { prerender: true }, '/de/**': { prerender: true }, '/ar/**': { prerender: true }, '/vi/**': { prerender: true },
  //   '/fr/**': { prerender: true }, '/pl/**': { prerender: true },
  //   '/api/**': { proxy: 'https://cms.stoneboss.vip/api/**', headers: { 'cache-control': 's-maxage=60' } },
  //   '/sitemap.xml': { prerender: true }, 
  //   '/zh/sitemap.xml': { prerender: true }, 
  //   '/ru/sitemap.xml': { prerender: true },
  // },

  i18n: {
    strategy: 'prefix_except_default',
    locales: locales, // 使用上面定义的常量
    defaultLocale: defaultLocale, // 使用上面定义的常量
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      useRedirect: true,
      alwaysRedirect: false,
    }
  },

  
  css: [
    '~/assets/main.scss'
  ]
})