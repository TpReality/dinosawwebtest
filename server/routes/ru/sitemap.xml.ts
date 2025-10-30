// server/routes/zh/sitemap.xml.ts
import { generateSitemapXml } from '../sitemap-generator';

export default defineEventHandler(async (event) => {
    // 调用生成函数，传入 'zh' 语言代码
    const xml = await generateSitemapXml('ru');
    
    setHeader(event, 'Content-Type', 'application/xml; charset=UTF-8');
    setHeader(event, 'X-Content-Type-Options', 'nosniff');
    return xml;
});