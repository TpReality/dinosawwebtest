// server/routes/test-sitemap.xml.ts
export default defineEventHandler(async (event) => {
    // 创建一个简单的测试 XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.dinosawmachine.com/</loc>
    <lastmod>2025-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    // 设置正确的响应头
    setHeader(event, 'Content-Type', 'application/xml; charset=UTF-8');
    setHeader(event, 'X-Content-Type-Options', 'nosniff');
    
    return xml;
});