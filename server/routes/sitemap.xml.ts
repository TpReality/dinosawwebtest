// server/routes/sitemap.xml.ts
import { generateSitemapXml } from './sitemap-generator';

export default defineEventHandler(async (event) => {
    // 调用生成函数，传入默认语言代码 'en'
    const xml = await generateSitemapXml('en');
    
    setHeader(event, 'content-type', 'application/xml; charset=UTF-8');
    return xml;
});