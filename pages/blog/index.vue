<template>
    <div class="main">
        <DinosawHeader />
        <div class="projects-banner">
            <div class="banner-background">
                <div class="banner-image">
                    <NuxtImg src="https://framerusercontent.com/images/1IQhbMthgQhIHvbOCcL313GnGU.webp"
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
                                                <span class="breadcrumb-products"><a href="/blog" target="_blank">Blogs</a></span>
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
                                            <a href="/blog/news-events" target="_blank" >News Events</a>
                                        </p>
                                        <p>
                                            <a href="/blog/industry-news" target="_blank" >Industry News</a>
                                        </p>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none"><path d="M 23.245 26.281 L 15.27 26.281 C 12.823 26.281 10.875 24.288 10.875 21.886 L 10.875 20.572 C 10.875 18.125 12.869 16.177 15.27 16.177 L 23.245 16.177 C 25.692 16.177 27.641 18.17 27.641 20.572 L 27.641 21.886 C 27.641 24.288 25.647 26.281 23.245 26.281 Z" fill="rgb(242, 203, 104)"></path><path d="M 21.886 24.423 L 6.208 24.423 C 4.033 24.423 2.311 22.656 2.311 20.527 L 2.311 8.02 C 2.311 5.845 4.078 4.123 6.208 4.123 L 21.841 4.123 C 24.016 4.123 25.738 5.891 25.738 8.02 L 25.738 20.481 C 25.783 22.656 24.016 24.423 21.886 24.423 Z M 6.208 5.392 C 4.758 5.392 3.58 6.57 3.58 8.02 L 3.58 20.481 C 3.58 21.931 4.758 23.109 6.208 23.109 L 21.841 23.109 C 23.291 23.109 24.469 21.931 24.469 20.481 L 24.469 8.02 C 24.469 6.57 23.291 5.392 21.841 5.392 Z" fill="rgb(158, 116, 11)"></path><path d="M 8.383 7.431 C 8.02 7.431 7.748 7.159 7.748 6.797 L 7.748 2.266 C 7.748 1.903 8.02 1.631 8.383 1.631 C 8.745 1.631 9.017 1.903 9.017 2.266 L 9.017 6.797 C 9.017 7.159 8.745 7.431 8.383 7.431 Z M 19.258 7.431 C 18.895 7.431 18.623 7.159 18.623 6.797 L 18.623 2.266 C 18.623 1.903 18.895 1.631 19.258 1.631 C 19.62 1.631 19.892 1.903 19.892 2.266 L 19.892 6.797 C 19.892 7.159 19.62 7.431 19.258 7.431 Z M 24.922 10.83 L 3.172 10.83 C 2.809 10.83 2.538 10.558 2.538 10.195 C 2.538 9.833 2.809 9.561 3.172 9.561 L 24.922 9.561 C 25.284 9.561 25.556 9.833 25.556 10.195 C 25.556 10.558 25.284 10.83 24.922 10.83 Z M 9.561 14.908 L 5.211 14.908 C 4.848 14.908 4.577 14.636 4.577 14.273 C 4.577 13.911 4.848 13.639 5.211 13.639 L 9.561 13.639 C 9.923 13.639 10.195 13.911 10.195 14.273 C 10.195 14.636 9.878 14.908 9.561 14.908 Z M 16.086 14.908 L 11.781 14.908 C 11.419 14.908 11.147 14.636 11.147 14.273 C 11.147 13.911 11.419 13.639 11.781 13.639 L 16.131 13.639 C 16.494 13.639 16.766 13.911 16.766 14.273 C 16.766 14.636 16.448 14.908 16.086 14.908 Z M 22.656 14.908 L 18.306 14.908 C 17.944 14.908 17.672 14.636 17.672 14.273 C 17.672 13.911 17.944 13.639 18.306 13.639 L 22.656 13.639 C 23.019 13.639 23.291 13.911 23.291 14.273 C 23.291 14.636 23.019 14.908 22.656 14.908 Z M 9.561 19.439 L 5.211 19.439 C 4.848 19.439 4.577 19.167 4.577 18.805 C 4.577 18.442 4.848 18.17 5.211 18.17 L 9.561 18.17 C 9.923 18.17 10.195 18.442 10.195 18.805 C 10.195 19.167 9.878 19.439 9.561 19.439 Z M 16.086 19.439 L 11.781 19.439 C 11.419 19.439 11.147 19.167 11.147 18.805 C 11.147 18.442 11.419 18.17 11.781 18.17 L 16.131 18.17 C 16.494 18.17 16.766 18.442 16.766 18.805 C 16.766 19.167 16.448 19.439 16.086 19.439 Z" fill="rgb(158, 116, 11)"></path></svg>
                                </div>
                                <div class="badge-text">
                                    <span class="badge-title">Last Updated:</span>
                                    <div class="badge-title">2025-09-05</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title-section">
                        <h1 class="main-title">
                            Find & Explore Most PopularIdeal<br/>
                            <span class="title">Industry Machining Articles</span> of 2025
                        </h1>
                    </div>
                    <div class="description-section">
                        <p class="description-text">
                            Discover and dive into expert articles and trending blog posts for 2025 covering CNC wire saw machines, bridge saws, engraving equipment, drilling tools, waterjets, polishing machines, diamond tools, and more. Keep up with the latest industry developments, practical tips, and innovations to enhance your equipment usage and project outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Processing Cases 部分 - 对应Figma 19:13136 -->
        <div class="processing-cases-section" :class="index == 0 ? 'processing-cases-section-first' : ''" v-for="(item, index) in processingCase" :key="index">
            <!-- 背景图片 -->
            <div class="processing-cases-background" v-if="index != 1">
                <div class="background-image"></div>
            </div>

            <!-- 标题部分 -->
            <div class="processing-cases-title-section">
                <div class="processing-cases-title-frame">
                    <h2 class="processing-cases-title" v-if="i == 0">
                        {{ item.title }}<br>
                        <div class="c-black">{{ item.subTitle }}</div>
                    </h2>
                    <h2 class="processing-cases-title" v-else>
                        <div class="c-black">{{ item.title }}</div>
                        {{ item.subTitle }}
                    </h2>
                </div>
            </div>
            <div class="processing-cases-description-section">
                {{item.text}}
            </div>
            <!-- 案例展示部分 -->
            <div class="processing-cases-content">
                <div class="processing-cases-container">
                    <div class="processing-cases-wrapper">
                        <div class="processing-cases-grid">
                            <div class="processing-cases-section-inner">
                                <div class="processing-cases-list">
                                    <!-- 案例1 -->
                                    <div class="processing-case-item">
                                        <div class="case-background">
                                            <div class="case-ipad">
                                                <div class="case-image-container">
                                                    <div class="case-main-image cement-case"></div>
                                                </div>
                                                <div class="case-content-container">
                                                    <div class="case-link">
                                                        <div class="case-info-container">
                                                            <div class="case-youtube-link">
                                                                <div class="case-title-frame">
                                                                    <h3 class="case-title">
                                                                        <span class="case-title-line">Cement Product
                                                                            Cutting Case - CNC Wire</span>
                                                                        <span class="case-title-line">Saw Machine
                                                                            Supports Spanish Factory</span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="case-date-section">
                                                                <div class="case-date-container">
                                                                    <span class="case-date">5/14/24</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 案例2 -->
                                    <div class="processing-case-item">
                                        <div class="case-background">
                                            <div class="case-ipad">
                                                <div class="case-image-container">
                                                    <div class="case-main-image marble-case"></div>
                                                </div>
                                                <div class="case-content-container">
                                                    <div class="case-link">
                                                        <div class="case-info-container">
                                                            <div class="case-youtube-link">
                                                                <div class="case-title-frame">
                                                                    <h3 class="case-title">
                                                                        <span class="case-title-line">Marble Block Slab
                                                                            Cutting Case - CNC Wire</span>
                                                                        <span class="case-title-line">Saw Machine
                                                                            Supports Spanish Factory</span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="case-date-section">
                                                                <div class="case-date-container">
                                                                    <span class="case-date">12/11/24</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 案例3 -->
                                    <div class="processing-case-item">
                                        <div class="case-background">
                                            <div class="case-ipad">
                                                <div class="case-image-container">
                                                    <div class="case-main-image granite-case"></div>
                                                </div>
                                                <div class="case-content-container">
                                                    <div class="case-link">
                                                        <div class="case-info-container">
                                                            <div class="case-youtube-link">
                                                                <div class="case-title-frame">
                                                                    <h3 class="case-title">
                                                                        <span class="case-title-line">Granite Tombstone
                                                                            Case - CNC Wire Saw</span>
                                                                        <span class="case-title-line">Machine Supports
                                                                            Chongqing Factory</span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="case-date-section">
                                                                <div class="case-date-container">
                                                                    <span class="case-date">8/10/24</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 案例3 -->
                                    <div class="processing-case-item">
                                        <div class="case-background">
                                            <div class="case-ipad">
                                                <div class="case-image-container">
                                                    <div class="case-main-image granite-case"></div>
                                                </div>
                                                <div class="case-content-container">
                                                    <div class="case-link">
                                                        <div class="case-info-container">
                                                            <div class="case-youtube-link">
                                                                <div class="case-title-frame">
                                                                    <h3 class="case-title">
                                                                        <span class="case-title-line">Granite Tombstone
                                                                            Case - CNC Wire Saw</span>
                                                                        <span class="case-title-line">Machine Supports
                                                                            Chongqing Factory</span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div class="case-date-section">
                                                                <div class="case-date-container">
                                                                    <span class="case-date">8/10/24</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- More 按钮 -->
                        <div class="processing-cases-more-button">
                            <div class="more-button-container">
                                <div class="more-button-wrapper">
                                    <span class="more-button-text">More</span>
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
const processingCase = [
    { id: 1, title: "Industry Machinery News ", subTitle: "Latest Innovations & Trends", text: "Welcome to the Industrial Machinery News Center! Here, you'll discover the latest updates on processing techniques and machinery for industries such as natural stone, engineered stone, construction materials, metals, semiconductors, carbon fiber, rubber, and other composites. From cutting and grinding to drilling and engraving,stay informed and keep your business a step ahead in the competitive market!" },
    { id: 2, title: "The practical videos on", subTitle: "How to install, use, and maintain industrial", text: "Diamond Tools" },
    { id: 3, title: "Worth-reading articles on", subTitle: "industrial processing Machinery Cases", text: "Diamond Tools" },
     { id: 4, title: "Worth-reading articles on", subTitle: "industrial processing Machinery Cases", text: "Diamond Tools" }
]

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
.main {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
}

.projects-banner {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
}

.banner-background {
    position: absolute;
    top: -70px;
    left: 0;
    width: 100%;
    height: 590px;
    z-index: 1;
}

.banner-image {
    width: 100%;
    height: 100%;
    position: relative;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.banner-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.content-wrapper {
    width: 100%;
    max-width: 1114px;
    height: 397px;
    position: relative;
}

.breadcrumb-section {
    position: absolute;
    top: 35px;
    left: 0;
    width: 167px;
    height: 41px;
}

/* Projects Badge - 对应Figma节点 20:59943 */
.projects-badge {
    position: absolute;
    top: 45px;
    left: 0;
    height: 41px;
    border-radius: 6px;
}

.title-section {
    width: 100%;
    max-width: 1030px;
    margin-top: 50px;
}

.main-title {
    color: #000;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1em;
    margin: 0 0 30px;
}

.description-section {
    width: 100%;
    max-width: 790px;
    height: 151px;
}

.description-text {
    color: #3d3d3d;
    font-size: 18px;
    line-height: 1.5em;
    margin: 0;
}
.processing-cases-section-first{
    background: url(https://framerusercontent.com/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp?width=554&height=750) no-repeat;
    background-size:100% 100%;
}

/* Processing Cases 部分样式 - 对应Figma 19:13136 */
// .processing-cases-section {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 32px;
//     padding: 31.3px 32px;
//     width: 100%;
//     margin: 32px auto;
//     position: relative;
// }

// .processing-cases-background {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height:100%;
// }

// .background-image {
//     width: 100%;
//     height: 100%;
//     background-color: #F8F9FA;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// }

// .processing-cases-title-section {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 1149px;
//     z-index: 2;
// }
// .processing-cases-description-section{
//     max-width:1149px;
//     margin:0 auto;
//     z-index: 1;
//     font-size:14px;
//     color:#3d3d3d;
//     text-align:center;
// }

// .processing-cases-title-frame {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     align-self: stretch;
// }

// .processing-cases-title {
//     font-family: 'Inter', sans-serif;
//     font-weight: 800;
//     font-size: 48px;
//     line-height: 1.2em;
//     text-align: center;
//     background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     margin: 0;

//     .c-black {
//         color: #000;
//         background: none;
//         -webkit-text-fill-color: #000;
//     }
// }

// .processing-cases-content {
//     display: flex;
//     flex-direction: column;
//     align-self: stretch;
//     z-index: 2;
// }

// .processing-cases-container {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     align-self: stretch;
// }

// .processing-cases-wrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 24px;
//     width: 1440px;
// }

// .processing-cases-grid {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-self: stretch;
// }

// .processing-cases-section-inner {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     padding: 10px 80px;
//     width: 1440px;
// }

// .processing-cases-list {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 32px;
//     align-items: center;
//     align-self: stretch;
//     justify-items: center;
// }

// .processing-case-item {
//     display: flex;
//     flex-direction: column;
//     min-width: 378px;
// }

// .case-background {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 378px;
//     height: 440px;
//     background: linear-gradient(90deg, #f9fafe, #faf4dc);
//     border-radius: 24px;
//     overflow: hidden;
//     position: relative;
// }

// .case-ipad {
//     display: flex;
//     flex-direction: column;
//     width: 378px;
//     height: 461px;
//     gap: 24px;
//     position: relative;
// }

// .case-image-container {
//     width: 378px;
// }

// .case-main-image {
//     width: 378px;
//     height: 277px;
//     background-color: #F5F5F5;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     border-radius: 24px 24px 0px 0px;
// }

// .cement-case {
//     background-color: #E8E8E8;
// }

// .marble-case {
//     background-color: #E8E8E8;
// }

// .granite-case {
//     background-color: #E8E8E8;
// }

// .case-content-container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// }

// .case-link {
//     display: flex;
//     flex-direction: row;
//     justify-content: stretch;
//     align-items: stretch;
// }


// .cement-overlay {
//     background-color: #D0D0D0;
// }

// .marble-overlay {
//     background-color: #D0D0D0;
// }

// .granite-overlay {
//     background-color: #D0D0D0;
// }

// .case-youtube-link {
//     width: 344px;
// }

// .case-title-frame {
//     width: 100%;
//     height: 50.38px;
//     position: relative;
// }

// .case-title {
//     font-family: 'Inter', sans-serif;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 1.4em;
//     letter-spacing: -0.04em;
//     text-align: center;
//     color: #000000;
//     margin: 0;
//     display: flex;
//     flex-direction: column;
// }

// .case-title-line {
//     width: 334.77px;
//     height: 26px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .case-date-section {
//     position: absolute;
//     bottom: 20px;
//     left: 50%;
//     transform: translate(-50%, 0);
//     font-size: 12px;
// }

// .case-date-container {
//     display: flex;
//     flex-direction: column;
//     align-self: stretch;
//     padding: 0px 0px 0.8px;
// }

// .case-date {
//     font-family: 'Inter', sans-serif;
//     font-size: 12px;
//     line-height: 1em;
//     color: #3D3D3D;
//     width: 100%;
// }

// .calendar-icon-container {
//     width: 16px;
//     height: 16px;
// }

// .calendar-icon-wrapper {
//     width: 16px;
//     height: 16px;
// }

// .calendar-icon {
//     width: 16px;
//     height: 16px;
// }

// .processing-cases-more-button {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     width: 400px;
//     height: 65px;
//     background: rgba(0, 0, 0, 0.8);
//     border-radius: 33px;
//     cursor: pointer;
//     transition: all 0.3s ease;
// }

// .processing-cases-more-button:hover {
//     background: rgba(0, 0, 0, 0.9);
//     transform: translateY(-2px);
// }

// .more-button-container {
//     display: flex;
//     flex-direction: column;
// }

// .more-button-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-self: stretch;
// }

// .more-button-text {
//     font-family: 'Inter', sans-serif;
//     font-weight: 700;
//     font-size: 24px;
//     line-height: 1em;
//     color: #FFFFFF;
// }

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

    .processing-cases-section {
        padding: 20px;
        gap:15px;
    }

    .processing-cases-wrapper {
        width: 100%;
        max-width: 1440px;
    }

    .processing-cases-section-inner {
        width: 100%;
        padding: 10px 20px;
        height: auto;
    }

    .processing-cases-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .processing-case-item {
        min-width: 320px;
    }

    .case-background {
        width: 320px;
        height: 400px;
    }

    .case-ipad {
        width: 320px;
        height: 400px;
    }

    .case-main-image {
        width: 320px;
        height: 234px;
    }

    .case-image-container {
        width: auto;
    }

    .case-image-overlay {
        width: 320px;
        height: 234px;
    }

    .case-overlay-container {
        width: 320px;
    }

    .case-overlay-image {
        height: 234px;
    }

}

@media (max-width: 1200px) {
    .processing-cases-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}

@media (max-width: 1024px) {
    .projects-banner {
        height: 453px;
    }

    .banner-background {
        top: -50px;
        height: 450px;
        .background-image{
            height:150%;
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
        font-weight:400;
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

@media (max-width: 768px) {

    .banner-background {
        top: 0;
        height: 360px;
    }

    .content-wrapper {
        margin:0 auto;
        height: auto;
    }

    .title-section {
        top: 60px;
        height: auto;
        margin-bottom:10px;
    }

    .main-title {
        font-size: 22px;
        line-height:1.4;
        .title{
            font-size:22px;
        }
    }

    .description-section {
        top: 140px;
        height: auto;
    }

    .description-text {
        font-size: 14px;
        font-weight:400;
        line-height: 1.4em;
        color: #666;
    }

    .navigation-section {
        display: none;
    }

    .breadcrumb-section {
        top: 20px;
    }
}
</style>