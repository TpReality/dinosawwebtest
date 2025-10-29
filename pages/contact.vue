<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
        <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
                <div class="breadcrumb-link">
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span class="breadcrumb-home"><NuxtLink :to="localePath('/')" target="_blank">{{ contentDetail.home_text }}</NuxtLink></span>
                        </div>
                    </div>
                    <div class="breadcrumb-text">
                        <div class="text-container separator">
                            <span class="breadcrumb-separator">/</span>
                        </div>
                    </div>
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span>{{ contentDetail.contact_text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <GetEasySolution :contentDetail="contentDetail" :getEasySolutionType="3" :isContact="true" />
       <div class="sales-support-section">
            <div class="sales-container">
                <div class="sales-wrapper">
                    <div class="sales-inner">
                        <!-- 标题部分 -->
                        <div class="sales-title-section">
                            <h2 class="sales-main-title">{{ contact.how_our_sales_team_title }}</h2>
                        </div>
                        
                        <!-- 第一行卡片 -->
                        <div class="sales-cards-row-1">
                            <div class="sales-card consultation-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ contact.how_our_sales_team_left_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="contact.how_our_sales_team_left_top_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card quick-response-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ contact.how_our_sales_team_right_top_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="contact.how_our_sales_team_rigth_top_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 第二行卡片 -->
                        <div class="sales-cards-row-2">
                            <div class="sales-card tailored-solutions-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ contact.how_our_sales_team_left_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="contact.how_our_sales_team_left_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">{{ contact.how_our_sales_team_rigth_bottom_title }}</h3>
                                    </div>
                                    <div class="card-description">
                                        <div v-html="contact.how_our_sales_team_rigth_bottom_description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Lang :contentDetail="contentDetail" />
        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

// 使用 useFetch 获取数据
const { data: contactRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=contact&populate=all')
const contact = ref({})
watch(contactRes, (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        let data = newPosts.data[0].contact
        contact.value = data
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
.breadcrumb-container{
    max-width:1200px;
    margin:0 auto -40px;
}
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
         background: url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/EA0hAwWXnxwTm2ynJ8GkgRuQQ.webp) no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/8Xyo0guGcyuA1iAYSGphyTdZeKo.webp) no-repeat center;
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
            background: url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp) no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/l1UN323mVHUNwHQvD9bpZ9MutM.webp) no-repeat center;
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

/* 响应式设计 - 小于1440px */
@media (max-width: 1439px) {
    .breadcrumb-container{
        padding:0 30px;
    }
    .sales-support-section {
        padding: 32px 20px;
    }
    
    .sales-wrapper {
        position: static;
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
    }
    
    .sales-inner {
        position: static;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
    }
    
    .sales-title-section {
        width: 100%;
        margin: 0;
    }
    
    .sales-main-title {
        font-size: 24px;
        line-height: 1.2083333333333333em;
        // max-width: 278px;
        margin: 0 auto;
    }
    
    .sales-cards-row-1,
    .sales-cards-row-2 {
        width: 100%;
        max-width: 358px;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }
    
    .sales-cards-row-1 {
        margin-bottom: 0;
    }
    
    .sales-card {
        width: 100%;
        max-width: 358px;
        padding: 32px;
        box-sizing: border-box;
    }
    
    .card-title {
        font-size: 18px;
        line-height: 1.1666666666666667em;
        margin-bottom: 16px;
    }
    
    .card-description {
        padding: 0;
        width: 100%;
    }
    
    .card-description p {
        font-size: 14px;
        font-weight:400;
        line-height: 1.2em;
    }
    
    /* 移动端背景图片调整 */
    .sales-cards-row-1 .sales-card:first-child {
        background-size: cover;
        min-height: 227px;
    }
    
    .sales-cards-row-1 .sales-card:nth-child(2) {
        background-size: cover;
        min-height: 192px;
    }
    
    .sales-cards-row-2 .sales-card:first-child {
        background-size: cover;
        min-height: 210px;
    }
    
    .sales-cards-row-2 .sales-card:nth-child(2) {
        background-size: cover;
        min-height: 140px;
    }
}
</style>