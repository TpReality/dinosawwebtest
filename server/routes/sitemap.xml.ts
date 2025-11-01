// server/routes/sitemap.xml.ts
import { generateSitemapXml } from './sitemap-generator';

export default defineEventHandler(async (event) => {
    try {
        // 调用生成函数，传入默认语言代码 'en'
        const xml = await generateSitemapXml('en');
        
        // 设置正确的响应头
        setHeader(event, 'Content-Type', 'application/xml; charset=UTF-8');
        setHeader(event, 'X-Content-Type-Options', 'nosniff');
        setHeader(event, 'Cache-Control', 'public, max-age=3600');
        
        // 确保返回的是字符串
        return String(xml);
    } catch (error) {
        console.error('Sitemap generation error:', error);
        
        // 返回一个简单的 sitemap 作为后备
        const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.dinosawmachine.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.1</priority>
  </url>
</urlset>`;
        
        setHeader(event, 'Content-Type', 'application/xml; charset=UTF-8');
        return fallbackXml;
    }
});