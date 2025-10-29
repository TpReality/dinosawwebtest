import { readonly, computed } from 'vue'
import { useI18n } from 'vue-i18n'
// 让内容详情在 SSR 阶段就获取并序列化到 payload，同时用 useState 做全局缓存
export const useContentDetail = () => {
  const contentDetail = useState('contentDetail', () => ({}))
   const { locale } = useI18n()
  const initializeContentDetail = async () => {
    // 已有缓存则直接返回，避免重复请求（客户端导航也不再请求）
    // if (Object.keys(contentDetail.value).length > 0) return contentDetail.value

    const config = useRuntimeConfig()
    let url = '/public-page-infos?'
    const baseUrl = config.public.apiBase || 'https://cms.stoneboss.vip/api'
    const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
    if(locale.value === 'zh'){
        url += 'locale=zh-Hans'
    }else{
        url += locale.value == 'en'?'':"locale="+locale.value
    }
// console.log(url)
    const { data: res } = await useAsyncData(
      // () => 'content:detail',
      () => $fetch(url,
        { 
          baseURL: baseUrl,
          headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
        },
      ),
      { default: () => ({ data: [] }), allowEmpty: true }
    )
    
    // 确保结构安全：对象或数组首项
    const value = Array.isArray(res.value?.data)
      ? (res.value.data[0] ?? {})
      : (res.value ?? {})

      // console.log('contentDetail', contentDetail)
    contentDetail.value = value
    return contentDetail.value
  }

  initializeContentDetail()

  return {
    contentDetail: readonly(contentDetail),
    isLoaded: computed(() => Object.keys(contentDetail.value).length > 0),
    initializeContentDetail
  }
}
