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
                                        <span class="breadcrumb-home"><NuxtLink :to="localePath('/')" target="_blank">{{faqs.home_text}}</NuxtLink></span>
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
                                                <span class="breadcrumb-products"><NuxtLink :to="localePath('/support')">{{faqs.products_btn_text}}</NuxtLink></span>
                                            </div>
                                        </div>
                                        <div class="dropdown-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="breadcrumb-outer">
                                    <div class="bg" v-if="curMenuItems?.length && Array.isArray(curMenuItems[0]?.children)">
                                        <template v-for="(menu, i) in curMenuItems[0].children" :key="i">
                                            <p v-if="menu && menu.link">
                                                <NuxtLink :to="localePath('/support'+menu.link)" target="_blank" >{{ menu.text }}</NuxtLink>
                                            </p>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="breadcrumb-link">
                                 <div class="breadcrumb-text">
                                    <div class="text-container separator">
                                        <span class="breadcrumb-separator">/</span>
                                    </div>
                                </div>
                                <div class="breadcrumb-text">
                                    <div class="text-container">
                                        <span class="breadcrumb-home">{{ faqs.category_btn_text }}</span>
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
                                    <span class="badge-title">{{ faqs.last_update_date_text }}</span>
                                    <div class="badge-title">{{ faqs.last_update_date_value }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title-section">
                        <h1 class="main-title">
                            {{ faqs.hero_main_title }}
                        </h1>
                    </div>
                    <div class="description-section">
                        <div class="description-text" v-html="faqs.hero_description"></div>
                    </div>
                </div>
            </div>
      </div>
        
        <!-- DINOSAW Industrial Machinery Content Section -->
        <div class="dinosaw-content-section">
            <div class="content-container">
                <div class="content-wrapper-main">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.trusted_choice_for_industrial_machinery_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.trusted_choice_for_industrial_machinery_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.which_industries_are_dinosaw_machines_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.which_industries_are_dinosaw_machines_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.which_industries_are_dinosaw_machines_description"></div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.how_to_buy_the_Best_industria_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.how_to_buy_the_Best_industria_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.how_to_buy_the_Best_industria_description"></div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_provide_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_provide_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_provide_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.is_there_service_center_my_area_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.is_there_service_center_my_area_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.is_there_service_center_my_area_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.what_payment_methods_does_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.what_payment_methods_does_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.what_payment_methods_does_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.what_makesServices_right_for_me_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.what_makesServices_right_for_me_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.what_makesServices_right_for_me_description"></div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.how_long_will_it_take_Industry_machine_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.how_long_will_it_take_Industry_machine_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.how_long_will_it_take_Industry_machine_description"></div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.how_to_ship_industry_machines_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.how_to_ship_industry_machines_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.how_to_ship_industry_machines_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.are_dinosaw_industry_to_operate_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.are_dinosaw_industry_to_operate_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.are_dinosaw_industry_to_operate_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.how_much_does_an_industry_machines_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.how_much_does_an_industry_machines_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.how_much_does_an_industry_machines_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_offer_warranty_industry_machines_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_offer_warranty_industry_machines_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_offer_warranty_industry_machines_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.are_dinosaw_machines_suitable_for_the_materials_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.are_dinosaw_machines_suitable_for_the_materials_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.are_dinosaw_machines_suitable_for_the_materials_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_provide_oem_or_odm_services_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_provide_oem_or_odm_services_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_provide_oem_or_odm_services_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_also_sell_machine_and_diamond_tools_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_also_sell_machine_and_diamond_tools_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_also_sell_machine_and_diamond_tools_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_offer_training_for_machine_peration_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_offer_training_for_machine_peration_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_offer_training_for_machine_peration_description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container">
                 <div class="content-wrapper-main" v-if="faqs.does_dinosaw_provide_for_industry_machines_title">
                    <div class="header-section">
                        <div class="title-container">
                            <h2 class="section-main-title">{{ faqs.does_dinosaw_provide_for_industry_machines_title }}</h2>
                        </div>
                    </div>
                    
                    <div class="content-body">
                        <div class="text-content">
                            <div class="paragraph-group" v-html="faqs.does_dinosaw_provide_for_industry_machines_description"></div>
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
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()
const curMenuItems = computed(() => menuItems.value.filter(item => item.title === 'Support'))
// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

// 使用 useFetch 获取数据
const { data: faqsRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=faqs&populate=all')
const faqs = ref({})
watch(faqsRes, (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        let data = newPosts.data[0].faq
        faqs.value = data
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
     .description-text{
        color:rgb(102, 102, 102);
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
        font-size: 32px;
    }
    
    .sales-cards-row-1,
    .sales-cards-row-2 {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    
    .card-title {
        font-size: 16px;
    }
    
    .card-description p {
        font-size: 14px;
    }
}

/* DINOSAW Industrial Machinery Content Section */
.dinosaw-content-section {
    width: 100%;
    max-width: 1440px;
    margin: 60px auto;
    background-color: #ffffff;
    padding: 0 20px;
    box-sizing: border-box;
}

.content-container {
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 1px 31px;
    box-sizing: border-box;
    border:1px solid rgba(136, 136, 136, 0.1);
}
.content-container+.content-container{
    margin-top:30px;
}
.content-wrapper-main {
    width: 100%;
    padding: 10px 0;
}

.header-section {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 10px;
    padding: 10px 0;
    margin-bottom: 26px;
}

.title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    min-height: 44px;
    background-color: #ffffff;
}

.section-main-title {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.18;
    color: #000000;
    text-align: left;
    margin: 0;
}

.content-body {
    padding: 0 0 25px;
}

.text-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.paragraph-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 17px;
}

.content-paragraph {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    color: #666666;
    text-align: left;
    margin: 0;
}

.section-subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.19;
    color: #000000;
    text-align: left;
    margin: 36px 0 17px 0;
}

.contact-link {
    color: #000000;
    text-decoration: underline;
    font-weight: 400;
}

.contact-link:hover {
    color: #333333;
}

/* 响应式设计 */
@media (max-width: 1440px) {
    .dinosaw-content-section {
        width: 390px;
        margin: 40px auto;
        padding: 0 10px;
    }
    .title-section{
        margin-bottom:10px;
        .main-title{
            font-size:20px;
        }
    }

    
    .description-text{
        font-size:14px;
    }
    
    .content-container {
        width: 100%;
        padding: 1px 15px;
    }
    
    .section-main-title {
        font-size: 18px;
    }
    
    .section-subtitle {
        font-size: 22px;
        margin: 24px 0 12px 0;
    }
    
    .content-paragraph {
        font-size: 13px;
        line-height: 1.3;
    }
    
    .paragraph-group {
        gap: 12px;
    }
}

@media (max-width: 480px) {
    .section-main-title {
        font-size: 16px;
    }
    
    .section-subtitle {
        font-size: 20px;
    }
    
    .content-paragraph {
        font-size: 12px;
    }
}
</style>