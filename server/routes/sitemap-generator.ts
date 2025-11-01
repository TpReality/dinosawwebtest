// server/routes/sitemap-generator.ts

import { $fetch } from 'ofetch';

const base = 'https://www.dinosawmachine.com';
const defaultLocale = 'en';

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
  const token = config.public.apiToken || '8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708';
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

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
    { loc: '/support/user-manual', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/support/faqs', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: '/blog/news-events', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/blog/industry-news', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/wire-saw-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/diamond-tools', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/circle-saw-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/drilling-and-engraving-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/mining-and-quarry-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/grinding-and-polishing-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/profiling-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/Products/other-industrial-machine', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/projects/marble-projects', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/projects/granite-projects', lastmod: today, changefreq: 'weekly', priority: '0.6' },
    { loc: '/projects/other-hard-materials-projects', lastmod: today, changefreq: 'weekly', priority: '0.6' }
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

  // 生成 XML 内容 - 移除所有 xhtml 内容
  const urlsXml = allRoutes
    .map(data => {
      // 获取当前语言的正确 URL 路径
      const isDefaultLocale = currentLocaleCode === defaultLocale;
      const locPath = isDefaultLocale ? data.loc : `/${currentLocaleCode}${data.loc}`;

      // 确保 lastmod 格式正确 (YYYY-MM-DD)
      const lastmodDate = data.lastmod.split('T')[0];

      // 生成简单的 URL 条目，不包含 xhtml 标签
      let urlXml = '<url>\n';
      urlXml += `  <loc>${base}${locPath}</loc>\n`;
      urlXml += `  <lastmod>${lastmodDate}</lastmod>\n`;
      urlXml += `  <changefreq>${data.changefreq}</changefreq>\n`;
      urlXml += `  <priority>${data.priority}</priority>\n`;
      urlXml += '</url>';
      
      return urlXml;
    })
    .join('\n');

  // XML 头部 - 移除 xhtml 命名空间
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return xml;
}