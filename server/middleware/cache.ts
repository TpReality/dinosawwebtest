// server/middleware/cache.ts

// 导入工具函数，用于设置响应头
import { defineEventHandler, setResponseHeader } from 'h3'; 

// 定义默认的 ISR 缓存策略：
// s-maxage=60: CDN 缓存 60 秒
// stale-while-revalidate=59: 缓存过期后，接下来的 59 秒内返回旧内容并在后台重新生成
const CACHE_CONTROL_HEADER = 'public, max-age=1, s-maxage=60, stale-while-revalidate=59';

export default defineEventHandler((event) => {

  if (event.node.req.method !== 'GET' && event.node.req.method !== 'HEAD') {
    return;
  }
  
  // 检查请求是否是 API 路由 (例如 /api/...)
  // 如果是 API 路由，通常使用不同的、更短的缓存时间或不缓存。
  if (event.node.req.url?.startsWith('/api')) {
    return;
  }
  
  // 对所有 Nuxt 页面设置默认的 Cache-Control 头
  setResponseHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER);
  // 仅对 GET 请求（页面请求）和 HEAD 请求应用缓存策略
  // event.node.res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60')

  // // 2. 告诉 Cloudflare Pages 应该缓存
  // // 这对于 Pages/Workers 来说非常重要
  // event.node.res.setHeader('Cloudflare-CDN-Cache-Control', 'max-age=60')

  // return {
  //   data: '这是动态内容，但被缓存了 60 秒',
  //   timestamp: new Date().toISOString(), // 每次缓存不命中时更新
  // }
});