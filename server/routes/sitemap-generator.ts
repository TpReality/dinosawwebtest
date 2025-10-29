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

    // 2. 转换为 XML 字符串
    const urlsXml = allRoutes
        .map(data => {
            // 获取当前语言的正确 URL 路径
            // 默认语言 (en) 不带前缀，其他语言带前缀
            const isDefaultLocale = currentLocaleCode === defaultLocale;
            const locPath = isDefaultLocale ? data.loc : `/${currentLocaleCode}${data.loc}`;

            // <loc> 标签
            let urlXml = `  <url>\n    <loc>${base}${locPath}</loc>\n`;
            
            // <lastmod>, <changefreq>, <priority> 标签
            urlXml += `    <lastmod>${data.lastmod}</lastmod>\n`;
            urlXml += `    <changefreq>${data.changefreq}</changefreq>\n`;
            urlXml += `    <priority>${data.priority}</priority>\n`;

            // <xhtml:link> 标签 (hreflang)
            locales.forEach(locale => {
                 // 构建替代链接的完整 URL
                 const altPath = locale.code === defaultLocale ? data.loc : `/${locale.code}${data.loc}`;
                 const altHref = `${base}${altPath}`;
                 // hreflang 属性：默认语言使用 'x-default'
                 const langCode = locale.code === defaultLocale ? 'x-default' : locale.code; 
                 
                 urlXml += `    <xhtml:link rel="alternate" hreflang="${langCode}" href="${altHref}"/>\n`;
            });

            urlXml += '  </url>';
            return urlXml;
        })
        .join('\n');

    // XML 头部和命名空间
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlsXml}\n</urlset>`;

    return xml;
}