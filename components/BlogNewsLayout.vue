<template>
  <div>
    <!-- Banner Section -->
    <div class="projects-banner">
      <div class="banner-background">
        <div class="banner-image">
          <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/1IQhbMthgQhIHvbOCcL313GnGU.webp"
            alt="Projects Banner Background" class="background-image" />
        </div>
      </div>
      <div class="banner-content">
        <div class="content-wrapper">
          <!-- 面包屑导航 -->
          <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
              <div class="breadcrumb-link">
                <div class="breadcrumb-text">
                  <div class="text-container">
                    <span class="breadcrumb-home"><NuxtLink :to="localePath('/')" target="_blank">{{ news.home_text }}</NuxtLink></span>
                  </div>
                </div>
                <div class="breadcrumb-text">
                  <div class="text-container separator">
                    <span class="breadcrumb-separator">/</span>
                  </div>
                </div>
                <div class="breadcrumb-dropdown">
                <div class="dropdown-collapsed">
                  <div class="dropdown-link">
                    <div class="dropdown-container">
                      <div class="dropdown-text-container">
                        <span class="breadcrumb-products"><NuxtLink :to="localePath('/blog')" target="_blank">{{ news.products_btn_text }}</NuxtLink></span>
                      </div>
                    </div>
                    <div class="dropdown-icon-container">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                    </div>
                  </div>
                </div>
                <div class="breadcrumb-outer">
                        <div class="bg">
                            <p v-for="(menu, i) in menuItems" :key="i">
                                <NuxtLink :to="localePath('/blog/'+menu.category_value)" target="_blank">{{ menu.category_name }}</NuxtLink>
                            </p>
                        </div>
                      </div>
              </div>
                <div class="breadcrumb-text">
                  <div class="text-container separator">
                    <span class="breadcrumb-separator">/</span>
                  </div>
                </div>
              </div>
              <div class="breadcrumb-dropdown">
                <div class="dropdown-collapsed">
                  <div class="dropdown-link">
                    <div class="dropdown-container">
                      <div class="dropdown-text-container">
                        <span class="breadcrumb-products">{{ news.category_btn_text }}</span>
                      </div>
                    </div>
                    <div class="dropdown-icon-container">
                      <!-- 下拉箭头图标位置 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Badge -->
          <div class="projects-badge">
            <div class="badge-background">
              <div class="badge-content">
                <div class="badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19">
                                        <path d="M 15.23 17.219 L 10.005 17.219 C 8.402 17.219 7.125 15.913 7.125 14.339 L 7.125 13.478 C 7.125 11.875 8.431 10.598 10.005 10.598 L 15.23 10.598 C 16.833 10.598 18.109 11.905 18.109 13.478 L 18.109 14.339 C 18.109 15.913 16.803 17.219 15.23 17.219 Z" fill="rgb(242, 203, 104)"></path>
                                        <path d="M 14.339 16.002 L 4.067 16.002 C 2.642 16.002 1.514 14.844 1.514 13.448 L 1.514 5.255 C 1.514 3.83 2.672 2.702 4.067 2.702 L 14.309 2.702 C 15.734 2.702 16.863 3.859 16.863 5.255 L 16.863 13.419 C 16.892 14.844 15.734 16.002 14.339 16.002 Z M 4.067 3.533 C 3.117 3.533 2.345 4.305 2.345 5.255 L 2.345 13.419 C 2.345 14.369 3.117 15.141 4.067 15.141 L 14.309 15.141 C 15.259 15.141 16.031 14.369 16.031 13.419 L 16.031 5.255 C 16.031 4.305 15.259 3.533 14.309 3.533 Z" fill="rgb(158, 116, 11)"></path>
                                        <path d="M 5.492 4.869 C 5.255 4.869 5.077 4.691 5.077 4.453 L 5.077 1.484 C 5.077 1.247 5.255 1.069 5.492 1.069 C 5.73 1.069 5.908 1.247 5.908 1.484 L 5.908 4.453 C 5.908 4.691 5.73 4.869 5.492 4.869 Z M 12.617 4.869 C 12.38 4.869 12.202 4.691 12.202 4.453 L 12.202 1.484 C 12.202 1.247 12.38 1.069 12.617 1.069 C 12.855 1.069 13.033 1.247 13.033 1.484 L 13.033 4.453 C 13.033 4.691 12.855 4.869 12.617 4.869 Z M 16.328 7.095 L 2.078 7.095 C 1.841 7.095 1.663 6.917 1.663 6.68 C 1.663 6.442 1.841 6.264 2.078 6.264 L 16.328 6.264 C 16.566 6.264 16.744 6.442 16.744 6.68 C 16.744 6.917 16.566 7.095 16.328 7.095 Z M 6.264 9.767 L 3.414 9.767 C 3.177 9.767 2.998 9.589 2.998 9.352 C 2.998 9.114 3.177 8.936 3.414 8.936 L 6.264 8.936 C 6.502 8.936 6.68 9.114 6.68 9.352 C 6.68 9.589 6.472 9.767 6.264 9.767 Z M 10.539 9.767 L 7.719 9.767 C 7.481 9.767 7.303 9.589 7.303 9.352 C 7.303 9.114 7.481 8.936 7.719 8.936 L 10.569 8.936 C 10.806 8.936 10.984 9.114 10.984 9.352 C 10.984 9.589 10.777 9.767 10.539 9.767 Z M 14.844 9.767 L 11.994 9.767 C 11.756 9.767 11.578 9.589 11.578 9.352 C 11.578 9.114 11.756 8.936 11.994 8.936 L 14.844 8.936 C 15.081 8.936 15.259 9.114 15.259 9.352 C 15.259 9.589 15.081 9.767 14.844 9.767 Z M 6.264 12.736 L 3.414 12.736 C 3.177 12.736 2.998 12.558 2.998 12.32 C 2.998 12.083 3.177 11.905 3.414 11.905 L 6.264 11.905 C 6.502 11.905 6.68 12.083 6.68 12.32 C 6.68 12.558 6.472 12.736 6.264 12.736 Z M 10.539 12.736 L 7.719 12.736 C 7.481 12.736 7.303 12.558 7.303 12.32 C 7.303 12.083 7.481 11.905 7.719 11.905 L 10.569 11.905 C 10.806 11.905 10.984 12.083 10.984 12.32 C 10.984 12.558 10.777 12.736 10.539 12.736 Z" fill="rgb(158, 116, 11)"></path>
                                    </svg>
                </div>
                <div class="badge-text">
                  <span class="badge-title">{{ news.last_update_date_text }}</span>
                  <div class="badge-title">{{ news.last_update_date_value }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="title-section">
            <h1 class="main-title" v-if="slug == 'news-events'">
              {{ news.hero_main_head_title }} <span class="title">{{ news.hero_main_center_title }}</span>{{ news.hero_main_after_title }}
            </h1>
            <h1 class="main-title" v-if="slug == 'industry-news'">
              {{ news.hero_main_head_title }} <span class="title">{{ news.hero_main_center_1_title }}</span>
              {{ news.hero_main_center_2_title }} <span class="title">{{ news.hero_main_after_title }}</span>
            </h1>
          </div>
          <div class="description-section">
            <div class="description-text" v-html="news.hero_description"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Processing Cases Section -->
    <div class="processing-cases-section">
      <!-- 背景图片 -->
      <!-- <div class="processing-cases-background" v-if="index != 1">
        <div class="background-image"></div>
      </div> -->

      <!-- 标题部分 -->
      <div class="processing-cases-title-section">
        <div class="processing-cases-title-frame">
          <h2 class="processing-cases-title">
            {{ processingCase.title }}<br>
            <div class="c-black">{{ processingCase.subTitle }}</div>
          </h2>
        </div>
      </div>

      <!-- 案例展示部分 -->
      <div class="processing-cases-content">
        <div class="processing-cases-container">
          <div class="processing-cases-wrapper">
            <div class="processing-cases-grid">
              <div class="processing-cases-section-inner">
                <div class="processing-cases-list">
                  <!-- 动态渲染案例项 -->
                  <template v-for="(caseItem, caseIndex) in blogList" :key="caseIndex">
                    <NuxtLink :to="localePath('/blog/'+caseItem.slug)" target="_blank">
                      <div class="processing-case-item">
                        <div class="case-background">
                          <div class="case-ipad">
                            <div class="case-image-container">
                              <div class="case-main-image" :class="caseItem.imageClass">
                                <NuxtImg sizes="sm:100vw" :src="caseItem.first_image_url" />
                              </div>
                            </div>
                            <div class="case-content-container">
                              <div class="case-link">
                                <div class="case-info-container">
                                  <div class="case-youtube-link">
                                    <div class="case-title-frame">
                                      <h3 class="case-title">
                                        {{caseItem.title}}
                                          <!-- <span class="case-title-line" v-for="(line, lineIndex) in caseItem.titleLines" :key="lineIndex">
                                            {{ line }}
                                          </span> -->
                                      </h3>
                                    </div>
                                  </div>
                                  <div class="case-date-section">
                                    <div class="case-date-container">
                                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
                                                                                <path d="M 12.825 14.5 L 8.425 14.5 C 7.075 14.5 6 13.4 6 12.075 L 6 11.35 C 6 10 7.1 8.925 8.425 8.925 L 12.825 8.925 C 14.175 8.925 15.25 10.025 15.25 11.35 L 15.25 12.075 C 15.25 13.4 14.15 14.5 12.825 14.5 Z" fill="rgb(135, 135, 135)"></path>
                                                                                <path d="M 12.075 13.475 L 3.425 13.475 C 2.225 13.475 1.275 12.5 1.275 11.325 L 1.275 4.425 C 1.275 3.225 2.25 2.275 3.425 2.275 L 12.05 2.275 C 13.25 2.275 14.2 3.25 14.2 4.425 L 14.2 11.3 C 14.225 12.5 13.25 13.475 12.075 13.475 Z M 3.425 2.975 C 2.625 2.975 1.975 3.625 1.975 4.425 L 1.975 11.3 C 1.975 12.1 2.625 12.75 3.425 12.75 L 12.05 12.75 C 12.85 12.75 13.5 12.1 13.5 11.3 L 13.5 4.425 C 13.5 3.625 12.85 2.975 12.05 2.975 Z" fill="rgb(0, 0, 0)"></path>
                                                                                <path d="M 4.625 4.1 C 4.425 4.1 4.275 3.95 4.275 3.75 L 4.275 1.25 C 4.275 1.05 4.425 0.9 4.625 0.9 C 4.825 0.9 4.975 1.05 4.975 1.25 L 4.975 3.75 C 4.975 3.95 4.825 4.1 4.625 4.1 Z M 10.625 4.1 C 10.425 4.1 10.275 3.95 10.275 3.75 L 10.275 1.25 C 10.275 1.05 10.425 0.9 10.625 0.9 C 10.825 0.9 10.975 1.05 10.975 1.25 L 10.975 3.75 C 10.975 3.95 10.825 4.1 10.625 4.1 Z M 13.75 5.975 L 1.75 5.975 C 1.55 5.975 1.4 5.825 1.4 5.625 C 1.4 5.425 1.55 5.275 1.75 5.275 L 13.75 5.275 C 13.95 5.275 14.1 5.425 14.1 5.625 C 14.1 5.825 13.95 5.975 13.75 5.975 Z M 5.275 8.225 L 2.875 8.225 C 2.675 8.225 2.525 8.075 2.525 7.875 C 2.525 7.675 2.675 7.525 2.875 7.525 L 5.275 7.525 C 5.475 7.525 5.625 7.675 5.625 7.875 C 5.625 8.075 5.45 8.225 5.275 8.225 Z M 8.875 8.225 L 6.5 8.225 C 6.3 8.225 6.15 8.075 6.15 7.875 C 6.15 7.675 6.3 7.525 6.5 7.525 L 8.9 7.525 C 9.1 7.525 9.25 7.675 9.25 7.875 C 9.25 8.075 9.075 8.225 8.875 8.225 Z M 12.5 8.225 L 10.1 8.225 C 9.9 8.225 9.75 8.075 9.75 7.875 C 9.75 7.675 9.9 7.525 10.1 7.525 L 12.5 7.525 C 12.7 7.525 12.85 7.675 12.85 7.875 C 12.85 8.075 12.7 8.225 12.5 8.225 Z M 5.275 10.725 L 2.875 10.725 C 2.675 10.725 2.525 10.575 2.525 10.375 C 2.525 10.175 2.675 10.025 2.875 10.025 L 5.275 10.025 C 5.475 10.025 5.625 10.175 5.625 10.375 C 5.625 10.575 5.45 10.725 5.275 10.725 Z M 8.875 10.725 L 6.5 10.725 C 6.3 10.725 6.15 10.575 6.15 10.375 C 6.15 10.175 6.3 10.025 6.5 10.025 L 8.9 10.025 C 9.1 10.025 9.25 10.175 9.25 10.375 C 9.25 10.575 9.075 10.725 8.875 10.725 Z" fill="rgb(0, 0, 0)"></path>
                                                                            </svg>
                                      <span class="case-date">{{ caseItem.date }}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </div>

            <!-- More 按钮 -->
            <div class="processing-cases-more-button" @click="loadMore">
              <div class="more-button-container">
                <div class="more-button-wrapper">
                  <span class="more-button-text">{{ news.load_more_text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from '#i18n'
import { navigateTo404 } from '~/utils/navigation'
import { useI18n } from 'vue-i18n'
const { locale, defaultLocale } = useI18n()
const localePath = useLocalePath()
// Props
const props = defineProps({
   slug: {
      type: String,
      required: true
    }
})
const news = ref({})

const { data: newsRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]='+props.slug+'&populate=all')
let processingCase = {}

watch(newsRes, (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        
    let data = {}
        

        if(props.slug == 'industry-news'){
          data = newPosts.data[0].industry_new
          processingCase = { 
              title: data.industry_machinery_news_title, 
              subTitle: data.industry_machinery_news_subtitle, 
              text:"", 
            }
        }else{
          data = newPosts.data[0].news_event
          processingCase = { 
              title: data.company_news_title, 
              subTitle: data.company_news_subtitle, 
              text:""
            }
        }
        
        news.value = data

        useHead({
            title: data.meta_title,
            meta: [
                {
                    name: 'description',
                    content: data.meta_description
                }
            ],
        })
  
        
        
    }

}, { immediate: true })
watch(error, (newError) => {
    //  throw createError({ statusCode: 404, statusMessage: '文章不存在' });
    navigateTo404(locale.value, defaultLocale)
})

const page = ref(1)
const blogList = ref([])
const isLoading = ref(false)
const hasMore = ref(true)

// 初始加载
let blogUrl ='https://cms.stoneboss.vip/api/blogs?pagination[page]=1&pagination[pageSize]=6&sort[0]=date:desc'
if(props.slug == 'industry-news'){
  blogUrl +='&filters[category][$eq]=Industry News'
}else{
  blogUrl +='&filters[category][$eq]=Company News'
}
const { data: blogRes, blogPending, blogError } = await useApi(blogUrl)
  watch(blogRes, (newPosts) => {
    if (newPosts) {
        // // console.log(newPosts)
        let data = newPosts.data

        data.forEach(item => {
          item.date = formatDateShort(item.date)
          blogList.value.push(item)
        })
        
        // 如果返回的数据少于页面大小，说明没有更多数据了
        if(data.length < 6){
          hasMore.value = false
        }
    }
}, { immediate: true })

// loadMore 函数
const loadMore = async () => {
    if (isLoading.value || !hasMore.value) return
    
    isLoading.value = true
    page.value++
    
    try {
        let moreUrl = `https://cms.stoneboss.vip/api/blogs?pagination[page]=${page.value}&pagination[pageSize]=6&sort[0]=date:desc`
        const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
        if(props.slug == 'industry-news'){
          moreUrl +='&filters[category][$eq]=Industry News'
        }else{
          moreUrl +='&filters[category][$eq]=Company News'
        }
        // if(locale.value === 'zh'){
        //     moreUrl += '&locale=zh-Hans'
        // }else{
        //     moreUrl += locale.value == 'en'?'':"&locale="+locale.value
        // }
        const moreData = await $fetch(moreUrl, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        })
        
        if (moreData && moreData.data) {
            const newItems = moreData.data
            
            newItems.forEach(item => {
                item.date = formatDateShort(item.date)
                blogList.value.push(item)
            })
            
            // 检查是否还有更多数据
            if (newItems.length < 6) {
                hasMore.value = false
            }
        }
    } catch (error) {
        console.error('加载更多数据失败:', error)
        page.value-- // 回退页码
    } finally {
        isLoading.value = false
    }
}

const menuItems = ref([])
const { data: menuItemsRes, menuItemsPending, menuItemsError } = await useApi('/product-categories?filters[parent_category_value][$eq]=blog&populate=all')

watch(menuItemsRes, (newPosts) => {
    if (newPosts) {
        // // console.log(newPosts)
        menuItems.value = newPosts.data
    }
}, { immediate: true })

</script>

<style scoped lang="scss">
/* 这里可以添加组件特定的样式，或者从父组件继承样式 */
.projects-banner .title-section{
  max-width:930px;
}
 @media (max-width: 1024px) {
    .projects-banner {
        min-height: 453px;
        .main-title{
            font-size:22px;
            .title{
              font-size:22px;
            }
        }
    }

    .banner-background {
        top: -50px;
        height: 450px;
        .background-image{
            height:130%;
        }
    }

    .content-wrapper {
        max-width: 100%;
        margin:0 auto;
    }

    .main-title {
        font-size: 36px;
    }

    .description-text {
        font-size: 14px;
    }

    .processing-cases-section {
        width: 390px;
        padding: 16px;
        box-sizing: border-box;
        background: none;
        position: relative;
    }

    .processing-cases-background {
        display: none;
    }

    .processing-cases-title-section {
        width: 100%;
    }
    .processing-cases-description-section{
        text-align:center;
        color:#666;
    }

    .processing-cases-title {
        font-size: 24px;
        line-height: 1.5em;
        text-align: center;
    }

    .processing-cases-wrapper {
        width: 100%;
    }

    .processing-cases-section-inner {
        width: 100%;
        padding: 0;
        height: auto;
    }

    .processing-cases-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        overflow: visible;
    }

    .processing-case-item {
        min-width: auto;
        max-width:none;
        width: 175px;
        
        .case-youtube-link {
            width: 100%;

            .case-title-line {
                width: 100%;
                height: auto;
            }
        }

        .case-date-section {
            display: none;
        }
    }

    .case-background {
        width: 100%;
        height: 240px;
        border-radius:8px;
    }

    .case-ipad {
        width: 100%;
        height: 240px;
        gap:12px;
    }

    .case-main-image {
        width: 100%;
        height: 105px;
        object-fit: cover;
    }

    .case-image-overlay {
        width: 100%;
        height: 105px;
    }

    .case-overlay-container {
        width: 100%;
    }

    .case-overlay-image {
        height: 105px;
        object-fit: cover;
    }

    .case-title {
        font-size: 14px;
        line-height: 1.3em;
        text-align: center;
        padding: 8px;
    }

    .processing-cases-more-button {
        width: 200px;
        height: 40px;
        margin: 16px auto;
    }

    .more-button-text {
        font-size: 14px;
    }

}
</style>