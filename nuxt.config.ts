// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch';
import { createHash } from 'node:crypto'

// --- 最佳实践: 将语言配置提取出来，方便在多处复用 ---
const defaultLocale = 'en';
const locales = [
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
];
const localeCodes = locales.filter(l => l.code !== defaultLocale).map(l => l.code);

type SitemapUrl = {
  loc: string;
  lastmod?: string | Date; // 使用 `?` 表示这个属性是可选的
  // 你还可以添加其他 sitemap 属性
  // changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  // priority?: number;
}


export default defineNuxtConfig({
  
  // +++ 新增: 为 sitemap 提供网站的根 URL +++
  site: {
    url: 'https://www.dinosawmachine.com', // 请确保这是你网站的正确域名
  },
  // ssr:true,
  runtimeConfig: {
    public: {
      gtmId: 'GTM-P9KQZ4XV',
      apiBase: 'https://cms.stoneboss.vip/api',
      apiToken: '8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708'
    }
  },

  hooks: {
    async 'prerender:routes'(ctx) {
      const addLocalized = (path: string) => {
        ctx.routes.add(path)
        for (const code of localeCodes) {
          ctx.routes.add(`/${code}${path}`)
        }
      }
      const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
      const blogs = await $fetch('/blogs?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
      for (const blog of blogs.data) {
        addLocalized(`/blog/${blog.slug}`)
      }
      const products = await $fetch('/products?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
      for (const product of products.data) {
        addLocalized(`/Products/${product.url}`)
      }
    }
  },

  nitro: {
    prerender: {
      concurrency: 10,
      crawlLinks: false,
      failOnError: false,
      routes: (() => {
        const paths = [
          '/', // 添加根路径
          '/Products', '/projects', '/support', '/blog', '/About-us', '/video', '/contact', '/stoneidentification', '/ai',
          '/Products/wire-saw-machine', '/Products/diamond-tools', '/Products/circle-saw-machine', '/Products/drilling-and-engraving-machine',
          '/Products/mining-and-quarry-machine', '/Products/grinding-and-polishing-machine', '/Products/profiling-machine', '/Products/other-industrial-machine',
          '/projects/marble-projects', '/projects/granite-projects', '/projects/other-hard-materials-projects', '/support/user-manual',
          '/support/faqs', '/blog/news-events', '/blog/industry-news'
        ];
        const out = [...paths];
        for (const code of localeCodes) {
          for (const p of paths) out.push(`/${code}${p === '/' ? '' : p }`);
        }
        return out;
      })(),
    },
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
    '@nuxtjs/i18n', 
    '@nuxtjs/sitemap' // +++ 新增 sitemap 模块 +++
  ],

   
  
  routeRules: {
    '/blog/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },
    '/Products/**': { headers: { 'cache-control': 'public, max-age=1, s-maxage=60, stale-while-revalidate=59' } },
    '/': { prerender: true }, '/Products': { prerender: true }, '/projects': { prerender: true }, '/support': { prerender: true },
    '/blog': { prerender: true }, '/About-us': { prerender: true }, '/video': { prerender: true }, '/contact': { prerender: true },
    '/stoneidentification': { prerender: true }, '/ai': { prerender: true },
    '/zh/**': { prerender: true }, '/tr/**': { prerender: true }, '/pt/**': { prerender: true }, '/es/**': { prerender: true },
    '/ru/**': { prerender: true }, '/de/**': { prerender: true }, '/ar/**': { prerender: true }, '/vi/**': { prerender: true },
    '/fr/**': { prerender: true }, '/pl/**': { prerender: true },
    '/api/**': { proxy: 'https://cms.stoneboss.vip/api/**', headers: { 'cache-control': 's-maxage=60' } },
  },

  i18n: {
    strategy: 'prefix_except_default',
    locales: locales, // 使用上面定义的常量
    defaultLocale: defaultLocale, // 使用上面定义的常量
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    }
  },

  // +++ 新增: sitemap 模块的完整配置 +++
  sitemap: {
    // 手动定义多个 sitemaps，为每个语言生成一个
    sitemaps: locales.reduce((acc, locale) => {
      const pathPrefix = locale.code === defaultLocale ? '/' : `/${locale.code}/`;
      const fileName = locale.code === defaultLocale ? 'sitemap.xml' : `${locale.code}/sitemap.xml`;

      acc[locale.code] = {
        fileName: fileName,
        // 包含此语言的所有 URL
        include: [`${pathPrefix}**`],
        // 如果是默认语言, 则排除所有其他语言的 URL
        exclude: locale.code === defaultLocale 
          ? localeCodes.map(code => `/${code}/**`)
          : [],
      };
      return acc;
    }, {}),

    // 为所有 sitemaps 提供动态 URL
    // 这个函数只会运行一次，其结果会被缓存和过滤，效率很高
    async urls() {
        const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708";
        const baseURL = 'https://cms.stoneboss.vip/api';
         const dynamicRoutes: SitemapUrl[] = [];

        const [blogs, products] = await Promise.all([
            $fetch('/blogs?pagination[pageSize]=100000', { baseURL, headers: { Authorization: `Bearer ${authToken}` } }),
            $fetch('/products?pagination[pageSize]=100000', { baseURL, headers: { Authorization: `Bearer ${authToken}` } })
        ]);

        // 为每篇文章和每种语言生成 URL
        blogs.data.forEach(blog => {
            dynamicRoutes.push({ loc: `/blog/${blog.slug}`, lastmod: blog.updatedAt }); // 默认语言
            localeCodes.forEach(code => {
                dynamicRoutes.push({ loc: `/${code}/blog/${blog.slug}`, lastmod: blog.updatedAt });
            });
        });

        // 为每个产品和每种语言生成 URL
        products.data.forEach(product => {
         
            dynamicRoutes.push({ loc: `/Products/${product.url}`, lastmod: product.updatedAt }); // 默认语言
            localeCodes.forEach(code => {
                dynamicRoutes.push({ loc: `/${code}/Products/${product.url}`, lastmod: product.updatedAt });
            });
        });
//  console.log(dynamicRoutes)
        return dynamicRoutes;
    }
  },
  
  css: [
    '~/assets/main.scss'
  ]
})