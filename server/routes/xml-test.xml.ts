// server/routes/xml-test.xml.ts
export default defineEventHandler(async (event) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.dinosawmachine.com/</loc>
    <lastmod>2025-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    // 尝试不同的 Content-Type
    setHeader(event, 'Content-Type', 'text/xml');
    
    return xml;
});