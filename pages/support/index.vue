<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" @showWx="showWx" />
        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
        <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
                <div class="breadcrumb-link">
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span class="breadcrumb-home"><NuxtLink :to="localePath('/')" target="_blank">{{ support.home_text }}</NuxtLink></span>
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
                                    <span class="breadcrumb-products"><NuxtLink :to="localePath('/support')" target="_blank">{{ support.products_btn_text }}</NuxtLink></span>
                                </div>
                            </div>
                            <div class="dropdown-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="breadcrumb-outer">
                        <div class="bg" v-if="Array.isArray(safeChildren) && safeChildren.length">
  <template v-for="(menu, i) in safeChildren" :key="i">
    <p v-if="menu && typeof menu.link === 'string' && menu.link.length">
      <NuxtLink :to="menu?.link ? localePath('/support' + menu.link) : localePath('/')" target="_blank">{{ menu?.text || '' }}</NuxtLink>
    </p>
  </template>
</div>
                      </div>
                </div>
            </div>
        </div>
        <h1 class="title">{{ support.hero_main_title }}
        </h1>
        <GetEasySolution :contentDetail="contentDetail" :getEasySolutionType="1" />
        <div class="sales-support-section">
            <div class="sales-container">
                <div class="sales-wrapper">
                    <div class="sales-inner">
                        <!-- 标题部分 -->
                        <div class="sales-title-section">
                            <h2 class="sales-main-title">{{ support.how_our_sales_team_title }}</h2>
                        </div>
                        
                        <!-- 第一行卡片 -->
                        <div class="sales-cards-row-1">
                            <div class="sales-card consultation-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_sales_team_left_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_sales_team_left_top_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card quick-response-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_sales_team_right_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_sales_team_rigth_top_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 第二行卡片 -->
                        <div class="sales-cards-row-2">
                            <div class="sales-card tailored-solutions-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{support.how_our_sales_team_left_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_sales_team_left_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_sales_team_rigth_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_sales_team_rigth_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sales Team Support Section - 对应Figma节点 20:63517 -->
         <GetEasySolution :contentDetail="contentDetail" :getEasySolutionType="2" />
        <div class="sales-support-section">
            <div class="sales-container">
                <div class="sales-wrapper">
                    <div class="sales-inner">
                        <!-- 标题部分 -->
                        <div class="sales-title-section">
                            <h2 class="sales-main-title">{{ support.how_our_technical_experts_keep_title }}</h2>
                        </div>
                        
                        <!-- 第一行卡片 -->
                        <div class="sales-cards-row-1">
                            <div class="sales-card consultation-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_technical_experts_keep_left_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_technical_experts_keep_left_top_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card quick-response-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_technical_experts_keep_right_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_technical_experts_keep_rigth_top_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 第二行卡片 -->
                        <div class="sales-cards-row-2">
                            <div class="sales-card tailored-solutions-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_technical_experts_keep_left_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_technical_experts_keep_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ support.how_our_technical_experts_keep_rigth_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="support.how_our_technical_experts_keep_rigth_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Wxpic ref="wxpicRef"></Wxpic>
        <Lang :contentDetail="contentDetail" />
        <ContactType :contentDetail="contentDetail" @showWx="showWx" />
        <WhatsApp :contentDetail="contentDetail" @showWx="showWx" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" @showWx="showWx" />
    </div>
</template>

<script setup>
import Wxpic from '~/components/Wxpic.vue'
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
const wxpicRef = ref(null)

const showWx = ()=>{
    wxpicRef.value.showPanel()
}
// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()
const curMenuItems = computed(() => menuItems.value.filter(item => item.title === 'Support'))
const safeChildren = computed(() => {
  const first = Array.isArray(curMenuItems.value) && curMenuItems.value[0] ? curMenuItems.value[0] : null
  const arr = Array.isArray(first?.children) ? first.children : []
  return arr.filter(m => m && typeof m.link === 'string' && m.link.length)
})
// 初始化菜单数据
await initializeMenuData()
// 使用全局 contentDetail
const { contentDetail, isLoaded, initializeContentDetail } = useContentDetail();

// 在服务端和客户端首次加载时都执行数据获取
await initializeContentDetail();
const support = ref({})
const { data: supportRes, pending, error } = await useApi('/support-main-pages?filters[products_btn_text][$eq]=Support')
// 首字母大写函数
// const capitalizeFirstLetter = (string) => {
//     if (!string) return '';
//     return string.charAt(0).toUpperCase() + string.slice(1);
// };

watch(supportRes, (newPosts) => {
    if (newPosts) {
        // // console.log(newPosts)
        let data = newPosts.data[0]
        support.value = data
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

</script>

<style scoped lang="scss">

.main {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    .title{
        width:1200px;
        margin:0 auto;
        font-size:52px;
    }
    .breadcrumb-container{
        max-width:1258px;
        margin:0 auto;
    }
}

/* Sales Team Support Section - 对应Figma节点 20:63517 */
.sales-support-section {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto 30px;
    background-color: #ffffff;
    padding: 0 20px;
    box-sizing: border-box;
}

.sales-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
}

.sales-wrapper {
    position: relative;
    left: 15px;
    top: 0;
    width: 1336px;
}

.sales-inner {
    position: relative;
    left: 0;
    top: 0;
    width: 1336px;
    background-color: #ffffff;
}

/* 标题部分 - 对应Figma节点 20:63581 */
.sales-title-section {
    width: 1336px;
    margin:0 auto 50px;
    text-align: center;
}

.sales-main-title {
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.4em;
    color: #000000;
    margin: 0;
    text-align: center;
}

/* 第一行卡片 - 对应Figma节点 20:63582 */
.sales-cards-row-1 {
    width: 1253px;
    margin:0 auto;
    background-color: #ffffff;
    display: flex;
    gap: 22px;
    .sales-card{
        &:first-child{
            background: url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/EA0hAwWXnxwTm2ynJ8GkgRuQQ.webp') no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/8Xyo0guGcyuA1iAYSGphyTdZeKo.webp') no-repeat center;
            background-size: 100%;
        }
    }
}
.sales-cards-row-1{
    margin-bottom:30px;
}

/* 第二行卡片 - 对应Figma节点 20:63583 */
.sales-cards-row-2 {
    width: 1253px;
    margin:0 auto;
    background-color: #ffffff;
    display: flex;
    gap: 22px;
    .sales-card{
        &:first-child{
            background: url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp') no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/l1UN323mVHUNwHQvD9bpZ9MutM.webp') no-repeat center;
            background-size: 100%;
        }   
    }
}

/* 卡片通用样式 */
.sales-card {
    width: 619px;
    padding:50px 0 40px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
   
}

.card-content {
    width: 100%;
    z-index: 2;
}

.card-title-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
}

.card-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    color: #000000;
    margin: 0;
    text-align: center;
}

.card-description {
    position: relative;
    width: 100%;
    padding: 0 89px;
    margin:0 auto;
}

.card-description p {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.4;
    color: #3D3D3D;
    margin: 0;
    text-align: center;
}
@media (max-width: 1440px) {
    .main{
        width:390px;
        margin:0 auto;
        .title{
            width:370px;
            margin:0 auto;
            font-size:24px;
        }
        .sales-container{
            .sales-wrapper{
                left:0;
            }
            .sales-wrapper,
            .sales-inner,
            .sales-title-section,
            .sales-cards-row-1,
            .sales-cards-row-2{
                width:100%;
                .sales-card{
                    width:100%;
                    padding:30px 0;
                }
            }
            .sales-cards-row-1,
            .sales-cards-row-2{
                flex-direction:column;
                .card-description{
                    height:auto;
                    padding:0 20px;
                }
            }
        }
    }
    .sales-main-title {
        font-size: 24px;
    }
    
    .sales-cards-row-1,
    .sales-cards-row-2 {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    
    .card-title {
        padding:0 20px;
        font-size: 18px;
    }
    
    .card-description p {
        font-size: 14px;
        font-weight:400;
    }
}
</style>