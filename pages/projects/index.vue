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
                                        <span class="breadcrumb-home"><NuxtLink to="/">Home</NuxtLink></span>
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
                                                <span>Projects</span>
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
                                            <a href="/projects/marble-projects" target="_blank">Marble Projects</a>
                                        </p>
                                        <p>
                                            <a href="/projects/granite-projects" target="_blank">Granite Projects</a>
                                        </p>
                                        <p>
                                            <a href="/projects/other-hard-materials-projects" target="_blank">Other Hard Materials Projects</a>
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
                            Proven Solutions:<br/>
                            <span class="title">Best Practices in Processing Hard Materials</span>
                        </h1>
                    </div>
                    <div class="description-section">
                        <p class="description-text">
                            Discover how Dinosaw’s advanced machines, including wire saw machines, carving machines, block machines and dozens of machines, are transforming the processing of hard materials worldwide. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Processing Cases 部分 - 对应Figma 19:13136 -->
        <div class="processing-cases-section" v-for="(item, index) in processingCase" :key="index">
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
                Discover how Dinosaw’s wire saw machines, carving machines, and block machines bring precision and
                efficiency to marble processing.
                From pure cutting to intricate carving for decorative columns, countertops, and wall panels, our
                advanced solutions empower businesses to achieve flawless results.
                Explore case studies showcasing how our equipment transforms raw marble into stunning, high-value
                products.
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
                                        <div class="case-background green">
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
                                        <div class="case-background green">
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
                                        <div class="case-background green">
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
    { id: 1, title: "The most popular related processing cases", subTitle: "You Can Refer To", text: "Diamond Tools" },
    { id: 2, title: "The practical videos on", subTitle: "How to install, use, and maintain industrial", text: "Diamond Tools" },
    { id: 3, title: "Worth-reading articles on", subTitle: "industrial processing Machinery Cases", text: "Diamond Tools" }
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

.breadcrumb-section {
    position: absolute;
    top: 35px;
    left: 0;
    width: 167px;
    height: 41px;
}

/* 响应式设计 */
@media (max-width: 1440px) {
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
        width: 375px;
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
        justify-content: flex-start;
        gap: 12px;
        overflow: visible;
    }

    .processing-case-item {
        min-width: auto;
        width: calc(50% - 6px);
        flex: 0 0 calc(50% - 6px);
        max-width: calc(50% - 6px);

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
        height: 220px;
        border-radius:8px;
    }

    .case-ipad {
        width: 100%;
        height: 220px;
    }

    .case-main-image {
        width: 100%;
        height: 104px;
        object-fit: cover;
    }

    .case-image-overlay {
        width: 100%;
        height: 104px;
    }

    .case-overlay-container {
        width: 100%;
    }

    .case-overlay-image {
        height: 104px;
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
        top: -30px;
        height: 360px;
    }

    .content-wrapper {
        margin:0 auto;
        height: auto;
    }

    .title-section {
        top: 60px;
        height: auto;
        margin-bottom:20px;
    }

    .main-title {
        font-size: 28px;
        .title{
            font-size:28px;
        }
    }

    .description-section {
        top: 140px;
        height: auto;
    }

    .description-text {
        font-size: 14px;
        line-height: 1.4em;
    }

    .navigation-section {
        display: none;
    }

    .breadcrumb-section {
        top: 20px;
    }
}
</style>