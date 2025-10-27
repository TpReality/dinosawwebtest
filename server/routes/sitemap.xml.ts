import { serverQueryContent } from '#content'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const base = 'https://www.dinosawmachine.com'
  const today = new Date().toISOString().split('T')[0]
  const apiBase = config.public.apiBase || 'https://cms.stoneboss.vip/api'
  const token = config.public.apiToken || ''

  const headers = token ? { Authorization: `Bearer ${token}` } : undefined

  // 固定路由
  const staticRoutes = [
    '/',
    '/About-us',
    '/ai',
    '/contact',
    '/stoneidentification',
    '/video',
    '/Products',
    '/projects',
    '/support',
    '/support/user-manual',
    '/support/faqs',
    '/blog',
    '/blog/news-events',
    '/blog/industry-news',
    '/Products/wire-saw-machine',
    '/Products/diamond-tools',
    '/Products/circle-saw-machine',
    '/Products/drilling-and-engraving-machine',
    '/Products/mining-and-quarry-machine',
    '/Products/grinding-and-polishing-machine',
    '/Products/profiling-machine',
    '/Products/other-industrial-machine',
    '/projects/marble-projects',
    '/projects/granite-projects',
    '/projects/other-hard-materials-projects'
  ]

  // 动态路由：产品与博客
  const [blogs, products] = await Promise.all([
    $fetch<any>(`/blogs?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc`, { baseURL: apiBase, headers }).catch(() => ({ data: [] })),
    $fetch<any>(`/products?pagination[page]=1&pagination[pageSize]=100000&sort[0]=date:desc`, { baseURL: apiBase, headers }).catch(() => ({ data: [] }))
  ])

  const dynamicBlog = Array.isArray(blogs?.data) ? blogs.data.map((b: any) => `/blog/${b.slug}`) : []
  const dynamicProducts = Array.isArray(products?.data) ? products.data.map((p: any) => `/Products/${p.url}`) : []

  const routes = Array.from(new Set([...staticRoutes, ...dynamicBlog, ...dynamicProducts]))

  const urls = routes
    .map((path) => `  <url>\n    <loc>${base}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n    <lastmod>${today}</lastmod>\n  </url>`) 
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')
  return xml
})
