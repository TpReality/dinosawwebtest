<template>
    <div class="main">
        <DinosawHeader />
        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
        <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
                <div class="breadcrumb-link">
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span class="breadcrumb-home"><NuxtLink to="/">Home</NuxtLink></span>
                        </div>
                    </div>
                    <div class="breadcrumb-text">
                        <div class="text-container separator">
                            <span class="breadcrumb-separator">/</span>
                        </div>
                    </div>
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <GetEasySolution :getEasySolutionType="3" />
       <div class="sales-support-section">
            <div class="sales-container">
                <div class="sales-wrapper">
                    <div class="sales-inner">
                        <!-- 标题部分 -->
                        <div class="sales-title-section">
                            <h2 class="sales-main-title">How Our Sales Team Supports Your Success</h2>
                        </div>
                        
                        <!-- 第一行卡片 -->
                        <div class="sales-cards-row-1">
                            <div class="sales-card consultation-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Consultation and Recommendations</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>Our sales team helps you identify the most suitable equipment and solutions <span class="c-blue">for your specific needs</span>. We analyze your requirements and provide recommendations based on similar successful cases, ensuring you make informed decisions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card quick-response-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Quick Response</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>We prioritize timely communication, responding to all inquiries <span class="c-blue">within 24 hours</span>. Whether by phone, email, online chat, or WhatsApp, our team is always accessible to address your concerns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 第二行卡片 -->
                        <div class="sales-cards-row-2">
                            <div class="sales-card tailored-solutions-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Tailored Solutions</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>We take the time to understand your processing needs, offering <span class="c-blue">personalized product recommendations</span>. Detailed specifications, operation videos, and technical advice are all part of our comprehensive support.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Transparent Pricing and Offers</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>Enjoy a <span class="c-blue">clear and transparent</span> pricing process, with detailed quotes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactType />
        <WhatsApp />
        <DinosawFooter />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const { data: productDetailRes, pending, error } = await useApi('/cnc-diamond-wire-saw-cutting-machine-pro-for-sales?populate=all')


watch(productDetailRes, (newPosts) => {
    if (newPosts) {
        console.log(newPosts)
        useHead({
            title: newPosts.metaTitle,
            meta: [
                {
                    name: 'description',
                    content: newPosts.metaDescription
                }
            ],
        })
    }

}, { immediate: true })



// 组件挂载后开始打字机效果
onMounted(() => {

})

// 使用 useFetch 获取数据
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
         background: url(https://framerusercontent.com/images/EA0hAwWXnxwTm2ynJ8GkgRuQQ.webp) no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url(https://framerusercontent.com/images/8Xyo0guGcyuA1iAYSGphyTdZeKo.webp) no-repeat center;
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
            background: url(https://framerusercontent.com/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp) no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url(https://framerusercontent.com/images/l1UN323mVHUNwHQvD9bpZ9MutM.webp) no-repeat center;
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