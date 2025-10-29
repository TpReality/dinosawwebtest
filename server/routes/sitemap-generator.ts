// server/routes/sitemap-generator.ts

import { $fetch } from 'ofetch';

const base = 'https://www.dinosawmachine.com';
const defaultLocale = 'en';

// 定义你的语言配置 (与 nuxt.config.ts 保持一致)
const locales = [
  { code: 'en', iso: 'en-US', name: 'English' },
  { code: 'zh', iso: 'zh-CN', name: '中文' },
  { code: 'ru', iso: 'ru-RU', name: 'Русский' },
];

interface RouteData {
  loc: string; // 默认语言的路径 (如 /blog/post)
  lastmod: string;
  changefreq: 'weekly';
  priority: string;
}

// --- 核心生成函数 ---
export async function generateSitemapXml(currentLocaleCode: string): Promise<string> {
  const config = useRuntimeConfig();
  const today = new Date().toISOString().split('T')[0];
  const apiBase = config.public.apiBase || 'https://cms.stoneboss.vip/api';
  const token = config.public.apiToken || '';
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  // 1. 获取所有路由的【默认语言路径】和【最后修改时间】

  // 固定路由 (只写默认语言路径)
  const staticRoutes: RouteData[] = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/About-us', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/ai', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/contact', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/stoneidentification', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/video', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/Products', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/projects', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/support', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    // ... (二级静态路由)
    { loc: '/support/user-manual', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/support/faqs', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/blog/news-events', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/blog/industry-news', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    // ... (所有 Products 和 projects 的二级静态路由)
    { loc: '/Products/wire-saw-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/projects/marble-projects', lastmod: today, changefreq: 'weekly', priority: '0.6' }
  ];

  // 动态路由：产品与博客
  const [blogs, products] = await Promise.all([
    $fetch<any>(`/blogs?pagination[page]=1&pagination[pageSize]=100000&sort[0]=updatedAt:desc`, { baseURL: apiBase, headers }).catch(() => ({ data: [] })),
    $fetch<any>(`/products?pagination[page]=1&pagination[pageSize]=100000&sort[0]=updatedAt:desc`, { baseURL: apiBase, headers }).catch(() => ({ data: [] }))
  ]);

  const dynamicRoutes: RouteData[] = [];

  if (Array.isArray(blogs?.data)) {
    blogs.data.forEach((b: any) => {
      dynamicRoutes.push({
        loc: `/blog/${b.slug}`,
        lastmod: b.updatedAt?.split('T')[0] || today,
        changefreq: 'weekly',
        priority: '0.5'
      });
    });
  }

  if (Array.isArray(products?.data)) {
    products.data.forEach((p: any) => {
      dynamicRoutes.push({
        loc: `/Products/${p.url}`,
        lastmod: p.updatedAt?.split('T')[0] || today,
        changefreq: 'weekly',
        priority: '0.5'
      });
    });
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // server/routes/sitemap-generator.ts 中 urlsXml 的生成部分

  const urlsXml = allRoutes
    .map(data => {
      // 获取当前语言的正确 URL 路径
      const isDefaultLocale = currentLocaleCode === defaultLocale;
      const locPath = isDefaultLocale ? data.loc : `/${currentLocaleCode}${data.loc}`;

      // 确保 lastmod 格式正确 (YYYY-MM-DD)
      const lastmodDate = data.lastmod.split('T')[0];

      // *** 修正 XML 拼接：移除所有多余的空格，只用 \n 换行 ***
      let urlXml = '<url>\n';

      // 2.1. <loc> 标签
      urlXml += `<loc>${base}${locPath}</loc>\n`;

      // 2.2. <lastmod>, <changefreq>, <priority> 标签
      urlXml += `<lastmod>${lastmodDate}</lastmod>\n`;
      urlXml += `<changefreq>${data.changefreq}</changefreq>\n`;
      urlXml += `<priority>${data.priority}</priority>\n`;

      // 2.3. <xhtml:link> 标签 (hreflang)
      locales.forEach(locale => {
        // 构建替代链接的完整 URL
        const altPath = locale.code === defaultLocale ? data.loc : `/${locale.code}${data.loc}`;
        const altHref = `${base}${altPath}`;

        // 1. 添加该语言本身的 hreflang 标签
        // 注意：这里没有多余的空格
        urlXml += `<xhtml:link rel="alternate" hreflang="${locale.code}" href="${altHref}"/>\n`;
      });
      const defaultUrl = `${base}${allRoutes.find(r => r.loc === data.loc)?.loc || data.loc}`;
      // **添加 x-default 标签** const defaultUrl = `${base}${allRoutes.find(r => r.loc === data.loc)?.loc || data.loc}`;
      urlXml += `<xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>\n`;

      urlXml += '</url>';
      return urlXml;
    })
    .join('\n'); // 使用 \n 连接每个 <url> 块

  // 3. XML 头部和命名空间 (确保包含 xhtml 命名空间)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>`;
              

  return xml;
}