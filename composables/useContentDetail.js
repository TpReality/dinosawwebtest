import { ref, watch, readonly, computed } from 'vue'

// 全局状态
const contentDetail = ref({})
let isInitialized = false

export const useContentDetail = () => {
  // 如果还没有初始化，则进行初始化
  if (!isInitialized) {
    const initContentDetail = async () => {
      try {
        const { data: contentDetailRes } = await useApi('/public-page-infos?filters[get_a_free_quote_btn_text][$eq]=Get A Free Quote')
        
        watch(contentDetailRes, (newData) => {
          if (newData && newData.data && newData.data[0]) {
            contentDetail.value = newData.data[0]
            console.log('Global contentDetail updated:', contentDetail.value)
            
            // 设置全局 SEO
            // useHead(() => ({
            //   title: contentDetail.value.meta_title || contentDetail.value.h1_page_inner_title,
            //   meta: [
            //     {
            //       name: 'description',
            //       content: contentDetail.value.meta_description || contentDetail.value.product_overview || ''
            //     }
            //   ]
            // }))
          }
        }, { immediate: true })
        
        isInitialized = true
      } catch (error) {
        console.error('Error fetching contentDetail:', error)
      }
    }
    
    initContentDetail()
  }
  
  return {
    contentDetail: readonly(contentDetail), // 返回只读版本，防止外部直接修改
    isLoaded: computed(() => Object.keys(contentDetail.value).length > 0)
  }
}