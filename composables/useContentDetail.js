import { readonly, computed } from 'vue'

// 让内容详情在 SSR 阶段就获取并序列化到 payload，同时用 useState 做全局缓存
export const useContentDetail = () => {
  const contentDetail = useState('contentDetail', () => ({}))

  const initializeContentDetail = async () => {
    // 已有缓存则直接返回，避免重复请求（客户端导航也不再请求）
    if (Object.keys(contentDetail.value).length > 0) return contentDetail.value

    const { data: res } = await useAsyncData(
      () => 'content:detail',
      () => $fetch('/public-page-infos?filters[get_a_free_quote_btn_text][$eq]=Get A Free Quote'),
      { default: () => ({ data: [] }), allowEmpty: true }
    )

    // 确保结构安全：对象或数组首项
    const value = Array.isArray(res.value?.data)
      ? (res.value.data[0] ?? {})
      : (res.value ?? {})

    contentDetail.value = value
    return contentDetail.value
  }

  return {
    contentDetail: readonly(contentDetail),
    isLoaded: computed(() => Object.keys(contentDetail.value).length > 0),
    initializeContentDetail
  }
}
