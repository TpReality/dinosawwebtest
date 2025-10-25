import { createError } from 'h3'
import type { FetchContext } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
  const fetcher = $fetch.create({
    onResponse(ctx: FetchContext) {
      const { response, options } = ctx
      // 仅当 2xx 时检查“空数据”情况，自动转 404（可通过选项跳过）
      if (response.status >= 200 && response.status < 300) {
        const data = (response as any)._data
        const ignoreEmpty = (options as any)?.allowEmpty === true || (options as any)?.ignoreEmpty404 === true
        const isEmpty =
          data == null ||
          (Array.isArray(data) && data.length === 0) ||
          (Array.isArray((data as any)?.data) && (data as any).data.length === 0)
        if (!ignoreEmpty && isEmpty) {
          throw createError({ statusCode: 404, statusMessage: 'Not Found' })
        }
      }
    },
    onResponseError(ctx: FetchContext) {
      const status = ctx.response?.status || 500
      // 将 5xx/404 统一转成 404，让 Nuxt 使用 404 页面
      if (status >= 500 || status === 404) {
        throw createError({ statusCode: 404, statusMessage: 'Not Found' })
      }
      throw createError({ statusCode: status, statusMessage: ctx.response?.statusText || 'Fetch Error' })
    }
  })

  // 覆盖 nuxtApp.$fetch 与全局 $fetch，使 useFetch/useLazyFetch/直接 $fetch 都生效
  ;(nuxtApp as any).$fetch = fetcher
  ;(globalThis as any).$fetch = fetcher
})
