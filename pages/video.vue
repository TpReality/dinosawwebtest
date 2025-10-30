<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
        <div class="projects-banner">
            <div class="banner-background">
                <div class="banner-image">
                     <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/1IQhbMthgQhIHvbOCcL313GnGU.webp"
                        alt="Projects Banner Background" class="background-image" />
                </div>
            </div>
            <div class="banner-content">
                <div class="content-wrapper">
                    <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
                    <div class="breadcrumb-container">
                        <div class="breadcrumb-wrapper">
                            <div class="breadcrumb-link">
                                <div class="breadcrumb-text">
                                    <div class="text-container">
                                        <span class="breadcrumb-home">
                                            <NuxtLink :to="localePath('/')" target="_blank">{{ videos.home_text }}</NuxtLink>
                                        </span>
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
                                                <span>{{ videos.products_btn_text }}</span>
                                            </div>
                                        </div>
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Projects Badge - 对应Figma节点 20:59943 -->
                    <div class="projects-badge">
                        <div class="badge-background">
                            <div class="badge-content">
                                <div class="badge-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none">
                                        <path
                                            d="M 23.245 26.281 L 15.27 26.281 C 12.823 26.281 10.875 24.288 10.875 21.886 L 10.875 20.572 C 10.875 18.125 12.869 16.177 15.27 16.177 L 23.245 16.177 C 25.692 16.177 27.641 18.17 27.641 20.572 L 27.641 21.886 C 27.641 24.288 25.647 26.281 23.245 26.281 Z"
                                            fill="rgb(242, 203, 104)"></path>
                                        <path
                                            d="M 21.886 24.423 L 6.208 24.423 C 4.033 24.423 2.311 22.656 2.311 20.527 L 2.311 8.02 C 2.311 5.845 4.078 4.123 6.208 4.123 L 21.841 4.123 C 24.016 4.123 25.738 5.891 25.738 8.02 L 25.738 20.481 C 25.783 22.656 24.016 24.423 21.886 24.423 Z M 6.208 5.392 C 4.758 5.392 3.58 6.57 3.58 8.02 L 3.58 20.481 C 3.58 21.931 4.758 23.109 6.208 23.109 L 21.841 23.109 C 23.291 23.109 24.469 21.931 24.469 20.481 L 24.469 8.02 C 24.469 6.57 23.291 5.392 21.841 5.392 Z"
                                            fill="rgb(158, 116, 11)"></path>
                                        <path
                                            d="M 8.383 7.431 C 8.02 7.431 7.748 7.159 7.748 6.797 L 7.748 2.266 C 7.748 1.903 8.02 1.631 8.383 1.631 C 8.745 1.631 9.017 1.903 9.017 2.266 L 9.017 6.797 C 9.017 7.159 8.745 7.431 8.383 7.431 Z M 19.258 7.431 C 18.895 7.431 18.623 7.159 18.623 6.797 L 18.623 2.266 C 18.623 1.903 18.895 1.631 19.258 1.631 C 19.62 1.631 19.892 1.903 19.892 2.266 L 19.892 6.797 C 19.892 7.159 19.62 7.431 19.258 7.431 Z M 24.922 10.83 L 3.172 10.83 C 2.809 10.83 2.538 10.558 2.538 10.195 C 2.538 9.833 2.809 9.561 3.172 9.561 L 24.922 9.561 C 25.284 9.561 25.556 9.833 25.556 10.195 C 25.556 10.558 25.284 10.83 24.922 10.83 Z M 9.561 14.908 L 5.211 14.908 C 4.848 14.908 4.577 14.636 4.577 14.273 C 4.577 13.911 4.848 13.639 5.211 13.639 L 9.561 13.639 C 9.923 13.639 10.195 13.911 10.195 14.273 C 10.195 14.636 9.878 14.908 9.561 14.908 Z M 16.086 14.908 L 11.781 14.908 C 11.419 14.908 11.147 14.636 11.147 14.273 C 11.147 13.911 11.419 13.639 11.781 13.639 L 16.131 13.639 C 16.494 13.639 16.766 13.911 16.766 14.273 C 16.766 14.636 16.448 14.908 16.086 14.908 Z M 22.656 14.908 L 18.306 14.908 C 17.944 14.908 17.672 14.636 17.672 14.273 C 17.672 13.911 17.944 13.639 18.306 13.639 L 22.656 13.639 C 23.019 13.639 23.291 13.911 23.291 14.273 C 23.291 14.636 23.019 14.908 22.656 14.908 Z M 9.561 19.439 L 5.211 19.439 C 4.848 19.439 4.577 19.167 4.577 18.805 C 4.577 18.442 4.848 18.17 5.211 18.17 L 9.561 18.17 C 9.923 18.17 10.195 18.442 10.195 18.805 C 10.195 19.167 9.878 19.439 9.561 19.439 Z M 16.086 19.439 L 11.781 19.439 C 11.419 19.439 11.147 19.167 11.147 18.805 C 11.147 18.442 11.419 18.17 11.781 18.17 L 16.131 18.17 C 16.494 18.17 16.766 18.442 16.766 18.805 C 16.766 19.167 16.448 19.439 16.086 19.439 Z"
                                            fill="rgb(158, 116, 11)"></path>
                                    </svg>
                                </div>
                                <div class="badge-text">
                                    <span class="badge-title">{{ videos.last_update_date_text }}</span>
                                    <div class="badge-title">{{ videos.last_update_date_value }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title-section">
                        <h1 class="main-title">
                            {{ videos.hero_main_head_title }} <span class="title">{{ videos.hero_main_center_title
                                }}</span><br />
                            {{ videos.hero_main_after_title }}
                        </h1>
                    </div>
                    <div class="description-section">
                        <div class="description-text" v-html="videos.hero_description"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="processing-cases-section" v-for="(item, index) in processingCase" :key="index">
            <!-- 背景图片 -->
            <div class="processing-cases-background" v-if="index != 1">
                <div class="background-image"></div>
            </div>

            <!-- 标题部分 -->
            <div class="processing-cases-title-section">
                <div class="processing-cases-title-frame">
                    <h2 class="processing-cases-title">
                        {{ item.title }} <span class="c-black">{{ item.subTitle }}</span>
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
                                    <!-- 案例1 -->
                                     <template v-for="(blog, j) in item.blogs" :key="j">
                                        <NuxtLink class="processing-case-item-link" :to="localePath('/blog/' + blog.slug)" target="_blank">
                                            <div class="processing-case-item">
                                                <div class="case-background green">
                                                    <div class="case-ipad">
                                                        <div class="case-image-container">
                                                            <div class="case-main-image cement-case">
                                                                 <NuxtImg sizes="sm:100vw" :src="blog.first_image_url" />
                                                            </div>
                                                        </div>
                                                        <div class="case-content-container">
                                                            <div class="case-link">
                                                                <div class="case-info-container">
                                                                    <div class="case-youtube-link">
                                                                        <div class="case-title-frame">
                                                                            <h3 class="case-title">
                                                                                <span class="case-title-line">{{ blog.title }}</span>
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
                                                                            <span class="case-date">{{ blog.date }}</span>
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

                        <!-- More 按钮  v-if="pageStates[categoryKeys[index]]?.hasMore"-->
                        <div class="processing-cases-more-button">
                            <div class="more-button-container">
                                <div class="more-button-wrapper" @click="loadMoreBlogs(index)" :class="{ 'loading': pageStates[categoryKeys[index]]?.loading }">
                                    <span class="more-button-text">
                                        {{ pageStates[categoryKeys[index]]?.loading ? 'Loading...' : (videos.load_more_text || 'More') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Wxpic></Wxpic>
        <Lang :contentDetail="contentDetail" />
        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
// 导入日期格式化工具函数
import {formatArrayDatesShort } from '~/utils/dateFormatter'
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()
// 使用全局 contentDetail
const { contentDetail, isLoaded, initializeContentDetail } = useContentDetail();

// 在服务端和客户端首次加载时都执行数据获取
await initializeContentDetail();
const videos = ref({})
const { data: vidoeRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=video&populate=all')

// 响应式的 processingCase 数组
const processingCase = ref([])

// 分页状态管理
const pageStates = ref({
    installation: { currentPage: 1, hasMore: true, loading: false },
    repair: { currentPage: 1, hasMore: true, loading: false },
    maintenance: { currentPage: 1, hasMore: true, loading: false }
})

// 分类映射
const categoryMapping = ['Installation Video Tutorials', 'Repair Video Tutorials', 'Maintenance Video Tutorials']
const categoryKeys = ['installation', 'repair', 'maintenance']

// 获取不同分类的 blog 数据的函数
const fetchBlogsByCategory = async (category, page = 1, pageSize = 6) => {
    const blogUrl = `/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date:desc&filters[category][$eq]=${category}`
    try {
        const { data } = await useApi(blogUrl)
        // console.log('blogs',data)
        const result = data.value?.data || []
        const pagination = data.value?.meta?.pagination || {}
        
        return {
            blogs: result,
            hasMore: pagination.page < pagination.pageCount
        }
    } catch (error) {
        console.error(`Error fetching blogs for category ${category}:`, error)
        return {
            blogs: [],
            hasMore: false
        }
    }
}

// 同时获取三个分类的 blog 数据
const fetchAllCategoryBlogs = async () => {
    try {
        // 并行请求三个不同分类的 blog
        const [installationResult, repairResult, maintenanceResult] = await Promise.all([
            fetchBlogsByCategory('Installation Video Tutorials'),
            fetchBlogsByCategory('Repair Video Tutorials'), 
            fetchBlogsByCategory('Maintenance Video Tutorials')
        ])
        
        // 更新分页状态
        pageStates.value.installation.hasMore = installationResult.hasMore
        pageStates.value.repair.hasMore = repairResult.hasMore
        pageStates.value.maintenance.hasMore = maintenanceResult.hasMore
        
        
        return {
            installation: formatArrayDatesShort(installationResult.blogs),
            repair: formatArrayDatesShort(repairResult.blogs),
            maintenance: formatArrayDatesShort(maintenanceResult.blogs)
        }
    } catch (error) {
        console.error('Error fetching category blogs:', error)
        return {
            installation: [],
            repair: [],
            maintenance: []
        }
    }
}

// 加载更多数据的函数
const loadMoreBlogs = async (categoryIndex) => {
    const categoryName = categoryMapping[categoryIndex]
    const categoryKey = categoryKeys[categoryIndex]
    const pageState = pageStates.value[categoryKey]
    
    if (!pageState.hasMore || pageState.loading) {
        return
    }
    
    pageState.loading = true
    pageState.currentPage += 1
    
    try {
        const result = await fetchBlogsByCategory(categoryName, pageState.currentPage)
        
        // 将新数据追加到现有数组中
        const newBlogs = formatArrayDatesShort(result.blogs)
        processingCase.value[categoryIndex].blogs.push(...newBlogs)
        
        // 更新分页状态
        pageState.hasMore = result.hasMore
        pageState.loading = false
    } catch (error) {
        console.error(`Error loading more blogs for category ${categoryName}:`, error)
        pageState.loading = false
    }
}

watch(vidoeRes, async (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        let data = newPosts.data[0].video
        videos.value = data
        useHead({
            title: data.meta_title,
            meta: [
                {
                    name: 'description',
                    content: data.meta_description
                }
            ],
        })

        // 获取三个分类的 blog 数据
        const categoryBlogs = await fetchAllCategoryBlogs()
        
        // 更新 processingCase，使用从 API 获取的 blog 数据
        processingCase.value = [
            { 
                id: 1, 
                title: data.installation_video_tutorials_before_title, 
                subTitle: data.installation_video_tutorials_after_title, 
                text: "", 
                blogs: categoryBlogs.installation, // 使用 API 获取的安装类 blog
            },
            { 
                id: 2, 
                title: data.repair_video_tutorials_before_title, 
                subTitle: data.repair_video_tutorials_after_title, 
                text: "", 
                blogs: categoryBlogs.repair, // 使用 API 获取的维修类 blog
            },
            { 
                id: 3, 
                title: data.maintenance_video_tutorials_before_title, 
                subTitle: data.maintenance_video_tutorials_after_title, 
                text: "", 
                blogs: categoryBlogs.maintenance, // 使用 API 获取的维护类 blog
            }
        ]
    }

}, { immediate: true })
// 使用 useFetch 获取数据

</script>
<style scoped lang="scss">
/* 响应式设计 */
@media (max-width: 1440px) {
    .content-wrapper {
        max-width: 900px;
        margin-left: 200px;
    }

    .main-title {
        font-size: 30px;

        .title {
            font-size: 30px;
        }
    }

    .description-text {
        font-size: 16px;
    }



}

@media (max-width: 1024px) {
    .projects-banner {
        min-height: 400px;
    }

    .banner-background {
        top: 0;
        height: 430px;

        .background-image {
            height: 120%;
        }
    }

    .content-wrapper {
        max-width: 100%;
        margin: 0 auto;
    }

    .main-title {
        line-height: 1.3;
        font-size: 24px;

        .title {
            font-size: 24px;
        }
    }

    .description-text {
        font-size: 14px;
        font-weight: 400;
        color: #666;
    }

    .processing-cases-section {
        width: 100%;
        padding: 16px 16px;
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

    .processing-cases-description-section {
        text-align: left;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: visible;
    }
    .processing-case-item {
        // min-width: auto;
        // width: calc(50% - 24px);
        // flex: 0 0 calc(50% - 24px);
        // max-width: calc(50% - 24px);

        .case-youtube-link {
            width: 100%;

            .case-title-frame {
                height: auto;
            }

            .case-title-line {
                width: 100%;
                height: auto;
            }
        }
        .case-date-section{
            .case-date-container{
                display:block;
                svg{
                    width:15px;
                    height:15px;
                    vertical-align:middle;
                }
                .case-date{
                    font-size:12px;
                }
            }
        }
        
    }

    .case-background {
        width: 100%;
        height: 260px;
        border-radius: 8px;
    }

    .case-ipad {
        width: 100%;
        height: 260px;
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

    .more-button-wrapper {
        cursor: pointer;
        transition: opacity 0.3s ease;

        &.loading {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:hover:not(.loading) {
            opacity: 0.8;
        }
    }

}
</style>