// server/api/sitemap-routes.get.ts
const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
export default defineEventHandler(async (event) => {
  // 1. 获取所有博客文章的 slug
  // ⚠️ 确保这个函数能快速、高效地运行，可以直接从数据库或 CMS 索引获取。
  const blogSlugs = await getBlogSlugs() 
  const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)

  // 2. 获取所有产品页面的 slug
  const productSlugs = await getProductSlugs() 
  const productRoutes = productSlugs.map((slug) => `/Products/${slug}`)

  // 3. 组合静态路由和动态路由
  const allRoutes = [
    ...blogRoutes,
    ...productRoutes,
  ];

  // 4. 设置此 API 接口的缓存头（非常重要！）
  // 这个接口的结果可以缓存较长时间，因为它更新频率低
  event.node.res.setHeader(
    'Cache-Control', 
    'public, max-age=0, s-maxage=3600' // 缓存 1 小时
  )

  // 返回 JSON 格式的路由数组
  return allRoutes
})

// --- 假设的异步函数（您需要根据实际的数据源实现） ---
async function getBlogSlugs(): Promise<string[]> {
    
    const blogs = await $fetch('/blogs?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
    let list = []
    for (const blog of blogs.data) {
        list.push(blog.slug)
    }
    
    // 实际中：高效查询您的 CMS 或数据库，只返回 slug 字段
    return list

}

async function getProductSlugs(): Promise<string[]> {
    const products = await $fetch('/products?pagination[pageSize]=100000', { baseURL: 'https://cms.stoneboss.vip/api', headers: { Authorization: `Bearer ${authToken}` } });
     let list = []
    for (const product of products.data) {
       list.push(product.url)
    }
    // 实际中：高效查询您的 CMS 或数据库
    return list
}