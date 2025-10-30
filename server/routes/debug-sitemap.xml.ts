// server/routes/debug-sitemap.xml.ts
export default defineEventHandler(async (event) => {
    // 最简单的 XML 测试
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.dinosawmachine.com/</loc>\n  </url>\n</urlset>';
    
    setHeader(event, 'Content-Type', 'text/xml; charset=UTF-8');
    
    return xml;
});