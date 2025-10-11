<template>
    <div class="main">
        <DinosawHeader />
        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
        <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
                <div class="breadcrumb-link">
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <span class="breadcrumb-home"><a href="/" target="_blank">Home</a></span>
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
                                    <span class="breadcrumb-products"><a href="/support" target="_blank">Support</a></span>
                                </div>
                            </div>
                            <div class="dropdown-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                            </div>
                        </div>
                    </div>
                    <div class="breadcrumb-outer">
                        <div class="bg">
                            <p>
                                <a href="/support/user-manual" target="_blank">User-Manual</a>
                            </p>
                            <p>
                                <a href="/support/faqs" target="_blank">FAQs</a>
                            </p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <h1 class="title">
            Comprehensive Service & Expert Support for Your Machines and Systems
        </h1>
        <GetEasySolution />
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
                                        <p>We take the time to understand your processing needs, offering <span>personalized product recommendations</span>. Detailed specifications, operation videos, and technical advice are all part of our comprehensive support.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Transparent Pricing and Offers</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>Enjoy a clear and transparent pricing process, with detailed quotes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sales Team Support Section - 对应Figma节点 20:63517 -->
         <GetEasySolution :getEasySolutionType="2" />
        <div class="sales-support-section">
            <div class="sales-container">
                <div class="sales-wrapper">
                    <div class="sales-inner">
                        <!-- 标题部分 -->
                        <div class="sales-title-section">
                            <h2 class="sales-main-title">How Our Technical Experts Keep You Running</h2>
                        </div>
                        
                        <!-- 第一行卡片 -->
                        <div class="sales-cards-row-1">
                            <div class="sales-card consultation-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Equipment Installation and Commissioning</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>Our technical team ensures your <span class="c-blue">equipment is installed correctly and ready to operate.</span> On-site installation services or remote guidance are provided to get your machines up and running smoothly.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card quick-response-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Operation Training</h3>
                                    </div>
                                    <div class="card-description">
                                        <p><span class="c-blue">We offer comprehensive training for your team</span>, covering everything from equipment operation to maintenance best practices. User manuals, video tutorials, and live Q&A support ensure your operators feel confident and prepared.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 第二行卡片 -->
                        <div class="sales-cards-row-2">
                            <div class="sales-card tailored-solutions-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">Fault Diagnosis and Repairs</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>Our experts provide <span class="c-blue">24/7 online</span> support to diagnose and resolve any equipment issues quickly. For urgent cases, we arrange on-site service <span class="c-blue">within 4 hours to minimize downtime.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="sales-card transparent-pricing-card">
                                <div class="card-content">
                                    <div class="card-title-wrapper">
                                        <h3 class="card-title">System Upgrades and Optimization</h3>
                                    </div>
                                    <div class="card-description">
                                        <p>We deliver <span class="c-blue">regular system updates to ensure your equipment</span> performs at its best. Additionally, we provide tailored optimization suggestions to meet evolving production needs.</p>
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
            background: url('https://framerusercontent.com/images/EA0hAwWXnxwTm2ynJ8GkgRuQQ.webp') no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url('https://framerusercontent.com/images/8Xyo0guGcyuA1iAYSGphyTdZeKo.webp') no-repeat center;
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
            background: url('https://framerusercontent.com/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp') no-repeat center;
            background-size: 100%;
        }
        &:nth-child(2){
            background: url('https://framerusercontent.com/images/l1UN323mVHUNwHQvD9bpZ9MutM.webp') no-repeat center;
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