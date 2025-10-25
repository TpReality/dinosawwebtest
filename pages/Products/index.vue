<template>
    <div class="main">
        <!-- 导航栏 -->
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail"/>

        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
        <div class="breadcrumb-container">
            <div class="breadcrumb-wrapper">
                <div class="breadcrumb-link">
                    <div class="breadcrumb-text">
                        <div class="text-container">
                            <NuxtLink to="/" target="_blank"><span class="breadcrumb-home">{{ productDetail.home_text }}</span></NuxtLink>
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
                                    <NuxtLink to="/Products" target="_blank">
                                        <span class="breadcrumb-products">{{ productDetail.products_btn_text }}</span>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="dropdown-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                            </div>
                        </div>
                    </div>
                   
                     <div class="breadcrumb-outer">
                        <div class="bg">
                            <p v-for="(item) in topProduct" :key="item.id">
                                <a :href="'/Products/'+item.category_value" target="_blank">{{ item.category_name }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第一个容器 - 对应Figma节点 19:11701 -->
        <div class="first-container">
            <!-- 轮播图容器 - 对应 19:11702 -->
            <div class="carousel-container">
                <div class="carousel-section">
                    <div class="carousel-list">
                        <Swiper 
                            :slides-per-view="swiperConfig.slidesPerView" 
                            :slides-per-group="swiperConfig.slidesPerGroup" 
                            :space-between="20" 
                            :modules="modules" 
                            :navigation="{
                                nextEl: '.carousel-button-next',
                                prevEl: '.carousel-button-prev',
                            }"
                            :breakpoints="swiperBreakpoints">
                            <SwiperSlide v-for="(image, i) in topProduct" :key="i">
                                <div class="carousel-group">
                                    <NuxtLink :to="'/Products/'+image.category_value" target="_blank"> 
                                        <NuxtImg v-if="image.head_image" :src="image.head_image.url" />
                                        <p class="text">{{ image.category_name }}</p>
                                    </NuxtLink>
                                    
                                </div>

                            </SwiperSlide>
                        </Swiper>
                        <!-- Navigation Arrows -->
                        <div class="carousel-button-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="carousel-button-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <!-- 轮播图控制器 - 对应 19:11777 -->
                    <div class="carousel-controls">
                        <!-- 分页控制器 -->
                    </div>
                </div>
            </div>
        </div>

        <h1 class="title">{{ productDetail.affordable_industrial_machine_for_sale_title }}</h1>
<!-- <ClientOnly> -->
        <!-- CNC Wire Saw Machine 部分 - 对应Figma 19:11796 -->
        <template v-for="(item) in wireSawMachineSectionList">
            <div class="wire-saw-machine-section">
                <div class="wire-saw-container">
                    <div class="wire-saw-frame">
                        <div class="content-container">
                            <div class="main-content">
                                <div class="content-wrapper">
                                    <div class="materials-section">
                                        <!-- 可加工材料标题部分 -->
                                        <div class="materials-overlay">
                                            <div class="materials-header">
                                                <div class="materials-title-container">
                                                    <div class="materials-image-container">
                                                        <div class="materials-icon-wrapper">
                                                            <div class="materials-icon">
                                                                <!-- 使用SVG图标替代图片 -->
                                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                                    <path
                                                                        d="M8.5 1L10.5 6H16L11.5 9.5L13.5 15L8.5 11.5L3.5 15L5.5 9.5L1 6H6.5L8.5 1Z"
                                                                        fill="#439DF1" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="materials-text-container">
                                                        <div class="materials-title-wrapper">
                                                            <p class="materials-title tl">{{ productDetail[`machinable_materials_${item}_title`] }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- 材料网格展示 -->
                                         
                                        <div class="materials-grid">
                                            <div class="materials-row">
                                                <div class="material-item" v-for="(product, j) in productDetail[`machinable_materials_${item}_cicly_img`]">
                                                    <div class="material-category">
                                                        <div class="material-text-container">
                                                            <div class="material-title-wrapper">
                                                                <p class="material-title">{{ product.banner_text }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="material-image-mask">
                                                            <div class="material-image-container">
                                                                <div class="material-image granite-image">
                                                                    <NuxtImg v-if="product.banner_img" :src="product.banner_img.url" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 主标题部分 -->
                                    <div class="main-title-section">
                                        <div class="main-title-frame">
                                            <h2 class="main-title tl">{{ productDetail[`machinable_materials_${item}_subtitle`] }}</h2>
                                        </div>
                                    </div>
                                </div>

                                <!-- 描述文本部分 -->
                                <div class="description-section">
                                    <div class="description-frame">
                                        <div class="description-paragraph">
                                            <div class="description-text" v-html="productDetail[`machinable_materials_${item}_description`]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 轮播图背景 -->
                            <div class="carousel-background">
                                <div class="carousel-background-container">
                                    <div class="carousel-background-list" v-if="productDetail[`machinable_materials_right_${item}_banners`]">
                                        <Swiper :slides-per-view="1" :space-between="20" :modules="modules"
                                            :navigation="{
                                                prevEl: '.background-button-prev-'+item,
                                                nextEl: '.background-button-next-'+item,
                                            }">
                                            <SwiperSlide v-for="(carousel, j) in productDetail[`machinable_materials_right_${item}_banners`]" :key="carousel.id">
                                                <div class="carousel-item">
                                                    <div class="carousel-item-container">
                                                        <div class="carousel-item-wrapper">
                                                            <div class="carousel-item-image">
                                                                <NuxtImg
                                                                v-if="carousel.banner_img"
                                                                    :src="carousel.banner_img.url">
                                                                </NuxtImg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <!-- 轮播图项目 -->
                                        <!-- 轮播图控制按钮 -->
                                        <div class="carousel-pagination-controls">
                                            <div class="background-button-prev" :class="'background-button-prev-'+item">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="background-button-next" :class="'background-button-next-'+item">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 产品展示部分 -->
                <div class="products-showcase">
                    <div class="products-container">
                        <template v-for="(product, j) in productDetail[`machinable_materials_${item}_products`]" :key="j">
                            <NuxtLink :to="'/Products/'+product.url" target="_blank">
                            <div class="product-card">
                                <div class="product-card-container">
                                    <div class="product-info-section">
                                        <div class="product-link">
                                            <div class="product-icon-container">
                                                <div class="product-icon-wrapper">
                                                    <NuxtImg :src="product.first_image_url" />
                                                </div>
                                            </div>
                                            <div class="product-title-section">
                                                <div class="product-title-frame">
                                                    <h3 class="product-title">{{product.h1_page_inner_title}}</h3>
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

                <!-- Discover More 按钮 -->
                <div class="discover-more-section">
                    <NuxtLink :to="productDetail[`machinable_materials_${item}_discover_more_url`]" target="_blank">
                    <div class="discover-more-button">
                        <div class="discover-more-container">
                            <div class="discover-more-wrapper">
                                <span class="discover-more-text">{{ productDetail.discover_more_btn_text }}</span>
                            </div>
                        </div>
                    </div>
                    </NuxtLink>
                </div>
            </div>
        </template>
<!-- </ClientOnly> -->
        <!-- What Is An Industry Machine 部分 - 对应Figma 19:13123 -->
        <div class="industry-machine-section">
            <div class="industry-machine-container">
                <!-- 标题部分 -->
                <div class="industry-machine-title-section">
                    <div class="industry-machine-title-frame">
                        <h2 class="industry-machine-title">{{productDetail.what_is_an_industry_machine}}</h2>
                    </div>
                </div>

                <!-- 内容部分 -->
                <div class="industry-machine-content" v-html="productDetail.what_is_an_industry_machine_description">
                    
                </div>
            </div>
        </div>

        <div class="blog-section">
        <!-- Profiling Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content biger">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">
                                            <div class="title">
                                            {{ productDetail.the_most_popular_related_process_cases_title }}
                                            <div class="c-black">{{ productDetail.you_can_refer_to_title }}</div>
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 产品展示部分 -->
            
            <div class="processing-cases-content">
                <div class="processing-cases-container">
                    <div class="processing-cases-wrapper">
                        <div class="processing-cases-grid">
                            <div class="processing-cases-section-inner">
                                <div class="processing-cases-list">
                                    <!-- 案例1 -->
                                     <template v-for="(blog, j) in productDetail.the_most_popular_related_process_cases_blogs" :key="j">
                                        <NuxtLink class="processing-case-item-link" :to="'/blog/' + blog.slug" target="_blank">
                                            <div class="processing-case-item">
                                                <div class="case-background green">
                                                    <div class="case-ipad">
                                                        <div class="case-image-container">
                                                            <div class="case-main-image cement-case">
                                                                <NuxtImg :src="blog.first_image_url" />
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

                        <!-- More 按钮 -->
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <NuxtLink :to="'/projects'" target="_blank">
                    <div class="discover-more-button">
                        <div class="discover-more-container">
                            <div class="discover-more-wrapper">
                                <span class="discover-more-text">{{productDetail.more_text}}</span>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Mining and Quarry Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content biger">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">
                                            <div class="title">
                                            <div class="c-black">{{ productDetail.the_most_popular_related_process_cases_title }}</div>
                                            {{ productDetail.how_to_install_use_maintain_industr_title }}
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 产品展示部分 -->
            
            <div class="processing-cases-content">
                <div class="processing-cases-container">
                    <div class="processing-cases-wrapper">
                        <div class="processing-cases-grid">
                            <div class="processing-cases-section-inner">
                                <div class="processing-cases-list">
                                    <!-- 案例1 -->
                                     <template v-for="(blog, j) in productDetail.the_practical_videos_on_blogs" :key="j">
                                        <NuxtLink class="processing-case-item-link" :to="'/blog/' + blog.slug" target="_blank">
                                            <div class="processing-case-item">
                                                <div class="case-background green">
                                                    <div class="case-ipad">
                                                        <div class="case-image-container">
                                                            <div class="case-main-image cement-case">
                                                                <NuxtImg :src="blog.first_image_url" />
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
                    </div>
                </div>
            </div>
            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <NuxtLink :to="'/video'" target="_blank">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                             
                                <span class="discover-more-text">{{productDetail.more_text}}</span>
                        </div>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Other Industry Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content biger">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">
                                            <div class="title">
                                                <div class="c-black">{{ productDetail.worth_read_articles_on_title }}</div>
                                                {{ productDetail.industrial_process_machinery_cases_title }}
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 产品展示部分 -->
            

            <div class="processing-cases-content">
                <div class="processing-cases-container">
                    <div class="processing-cases-wrapper">
                        <div class="processing-cases-grid">
                            <div class="processing-cases-section-inner">
                                <div class="processing-cases-list">
                                    <!-- 案例1 -->
                                     <template v-for="(blog, j) in productDetail.worth_reading_articles_on_blogs" :key="j">
                                        <NuxtLink class="processing-case-item-link" :to="'/blog/' + blog.slug" target="_blank">
                                            <div class="processing-case-item">
                                                <div class="case-background green">
                                                    <div class="case-ipad">
                                                        <div class="case-image-container">
                                                            <div class="case-main-image cement-case">
                                                                <NuxtImg :src="blog.first_image_url" />
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
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <NuxtLink :to="'/blog/industry-news'" target="_blank">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">{{productDetail.more_text}}</span>
                        </div>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
        </div>

        <!-- Expert Guide 部分 - 对应Figma 19:13396 -->
        <div class="expert-guide-section">
            <div class="expert-guide-container">
                <div class="expert-guide-content">
                    <div class="expert-guide-wrapper">
                        <!-- 主标题和图片部分 -->
                        <div class="expert-guide-header">
                            <div class="expert-guide-title-section">
                                <div class="expert-guide-title-frame">
                                    <h2 class="expert-guide-main-title">{{ productDetail.select_machine_guide_title }}</h2>
                                </div>
                            </div>
                            <div class="expert-guide-image-section">
                                <div class="expert-guide-image-container">
                                    <div class="expert-guide-image">
                                        <NuxtImg src="https://framerusercontent.com/images/7p45OXHfHH4pRmHd3kl2v7DaA.webp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 文章内容部分 -->
                        <div class="expert-guide-article" v-html="productDetail.select_machine_guide_description">
                            
                        </div>
            </div>
        </div>

        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode' // ✅ 引入 free-mode 的样式

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

const modules = [Navigation];

// 响应式 Swiper 配置
const swiperConfig = computed(() => {
    if (process.client) {
        const screenWidth = window.innerWidth
        if (screenWidth < 1440) {
            return {
                slidesPerView: 3,
                slidesPerGroup: 3
            }
        }
    }
    return {
        slidesPerView: 5,
        slidesPerGroup: 3
    }
})

// Swiper 断点配置
const swiperBreakpoints = {
    320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15
    },
    1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
    },
    1440: {
        slidesPerView: 5,
        slidesPerGroup: 3,
        spaceBetween: 20
    }
}
// 使用 useFetch 获取数据
const productDetail = ref({})
const productDetailUrl = `/product-categories?filters[category_value][$eq]=Products&populate[product_main_page][fields]=*
&populate[product_main_page][populate][machinable_materials_eight_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_eight_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_five_cicly_imgs][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_five_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_four_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_four_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_one_cicly_imgs][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_one_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_seven_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_seven_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_six_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_six_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_three_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_three_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_two_cicly_img][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_two_products][fields]=h1_page_inner_title,first_image_url, url
&populate[product_main_page][populate][machinable_materials_right_two_banners][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_right_three_banners][populate][banner_img][fields]=*
&populate[product_main_page][populate][machinable_materials_right_six_banners][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_right_seven_banners][populate][banner_img][fields]=*
&populate[product_main_page][populate][machinable_materials_right_one_banners][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_right_four_banners][populate][banner_img][fields]=*
&populate[product_main_page][populate][machinable_materials_right_five_banners][populate][banner_img][fields]=*&populate[product_main_page][populate][machinable_materials_right_eight_banners][populate][banner_img][fields]=*
&populate[product_main_page][populate][select_machine_guide_image][fields]=*&populate[product_main_page][populate][the_most_popular_related_process_cases_blogs][fields]=*
&populate[product_main_page][populate][the_practical_videos_on_blogs][fields]=*&populate[product_main_page][populate][worth_reading_articles_on_blogs][fields]=*`


const { data: productDetailRes, pending, error } = await useApi(productDetailUrl)
const topProduct = ref([])
const { data: topProductDetailRes, topPending, topError } = await useApi('/product-categories?filters[parent_category_value][$eq]=Products&populate[fields]=category_name,category_value,id&populate[head_image][fields]=*')
const wireSawMachineSectionList = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

watch(productDetailRes, (newPosts) => {
    if (newPosts) {
        let data = newPosts.data[0].product_main_page

        data.the_most_popular_related_process_cases_blogs = formatArrayDatesLong(
            data.the_most_popular_related_process_cases_blogs
        )
        data.the_practical_videos_on_blogs = formatArrayDatesLong(
            data.the_practical_videos_on_blogs
        )
        data.worth_reading_articles_on_blogs = formatArrayDatesLong(
            data.worth_reading_articles_on_blogs
        )

        productDetail.value = data
        // console.log(newPosts)
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

watch(topProductDetailRes, (newPosts) => {
    if (newPosts) {
        let data = newPosts.data
        
        // 根据 sort 字段从小到大排序
        if (Array.isArray(data)) {
            data = data.sort((a, b) => {
                // 确保 sort 字段存在，如果不存在则视为最大值
                const sortA = a.sort !== undefined ? a.sort : Number.MAX_SAFE_INTEGER
                const sortB = b.sort !== undefined ? b.sort : Number.MAX_SAFE_INTEGER
                return sortA - sortB
            })
        }

        data.forEach(item => {
            if(item.home_page_is_show){
                topProduct.value.push(item)
            }
        })
        
        // 确保 productDetail 已经加载完成后再处理关联逻辑
        // if (productDetail.value && Object.keys(productDetail.value).length > 0) {
        //     data.forEach(item => {  
        //         wireSawMachineSectionList.forEach(key=>{
        //             let subTitle = productDetail.value[`machinable_materials_${key}_subtitle`]?.trim()
        //             if(subTitle == item.category_name){
        //                 wireSawMachineSectionUrl.value[subTitle] = item.category_value
        //             }
        //         })
        //     })
        // }
        
        // console.log('topP',topProduct)
        // // console.log(wireSawMachineSectionUrl)
    }
}, { immediate: true })


// 将 topProduct 按每5个分成一组的计算属性
// const imageList = computed(() => {
//     if (!topProduct.value || !Array.isArray(topProduct.value)) {
//         return []
//     }
    
//     const groups = []
//     const items = topProduct.value
    
//     for (let i = 0; i < items.length; i += 5) {
//         groups.push(items.slice(i, i + 5))
//     }
    
//     return groups
// })

// 监听窗口大小变化
const windowWidth = ref(0)

onMounted(() => {
    if (process.client) {
        windowWidth.value = window.innerWidth
        
        const handleResize = () => {
            windowWidth.value = window.innerWidth
        }
        
        window.addEventListener('resize', handleResize)
        
        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })
    }
})

</script>
<style scoped lang="scss">
.main {
    width: 100%;
    background: #FFFFFF;
    .breadcrumb-container{
        width: 1200px;
        margin:0 auto;
    }
    .blog-section{
        .wire-saw-machine-section{
            .wire-saw-frame,
            .products-showcase{
                background:transparent;
            }
        }
        
        .wire-saw-machine-section:nth-child(odd){
            padding:30px 0;
            background:url(https://framerusercontent.com/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp) no-repeat center center;
            background-size: 100% auto;
        }
    }
}

.title{
    width:1200px;
    margin:0 auto;
    font-size:52px;
}


/* 第一个容器 - 对应Figma 19:11701 */
.first-container {
    position: relative;
    width: 1344px;
    height: 136px;
    margin: 0 auto 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 32px;
}

/* 轮播图容器 - 对应Figma 19:11702 */
.carousel-container {
    position: absolute;
    left: 54px;
    top: 0;
    width: 1236px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
}

.carousel-section {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    padding: 4px;
    width: 100%;
    height: 100%;
}

.carousel-list {
    width: 100%;
    height: 100%;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        width:200px !important;

        .carousel-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 258px;
            height: 100%;
            background: #fcfcfc;
            border-radius: 16px;
            a{
                text-align:center;
                color:#000;
            }
        }

        &.swiper-slide:nth-child(1),
        &.swiper-slide:nth-child(2),
        &.swiper-slide:nth-child(3) {
            width:185px !important;
            .carousel-group {
                 width:185px;
            }
           
        }

        &.swiper-slide:nth-child(4),
        &.swiper-slide:nth-child(5),
        &.swiper-slide:nth-child(6) {
            width:300px !important;
            .carousel-group {
                 width:300px;
            }
           
        }

        img {
            margin-top:10px;
            width: 100px;
            height:81px;
            object-fit: contain;
        }

        .text {
            display: block;
            font-size: 18px;
            font-weight: bold;
        }
    }
}

/* 轮播图控制器 - 对应Figma 19:11777 */
.carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 163px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.carousel-button-prev,
.carousel-button-next,
.background-button-prev,
.background-button-next{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;

    &:active {
        transform: translateY(-50%) scale(0.8);
    }

    svg {
        width: 24px;
        height: 24px;
    }
}

.carousel-button-prev,
.background-button-prev{
    left: 10px;
}

.carousel-button-next,
.background-button-next{
    right: 10px;
}

/* 空容器 - 对应Figma 19:11783 */
.empty-container {
    position: absolute;
    left: 660px;
    top: 351.78px;
    width: 24px;
    height: 24px;
}

/* 标题容器 - 对应Figma 19:11784 */
.title-container {
    position: absolute;
    left: 72px;
    top: 195px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heading-wrapper {
    width: 100%;
    height: 124.78px;
    position: relative;
}

.title-container h1 {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.2em;
    text-align: center;

    .title-part1 {
        position: absolute;
        left: 16.28px;
        top: -1px;
        width: 1179.11px;
        height: 63px;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-part2 {
        position: absolute;
        left: 383.17px;
        top: 61.39px;
        width: 434.03px;
        height: 63px;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* 响应式设计 */
@media (max-width: 1440px) {
    .first-container {
        width: 100%;
        height: auto;
        position: relative;
    }

    .carousel-container {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 150px;
        margin-bottom: 10px;
        .carousel-button-prev,
        .carousel-button-next{
            width:20px;
            height:20px;
            svg{
                width:100%;
                height:100%;
            }
        }
        .swiper-slide{
            .text{
                font-size:12px;
                font-weight:normal;
            }
        }
    }
    .title-container {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;

        h1 {
            position: relative;

            .title-part1,
            .title-part2 {
                position: relative;
                left: 0;
                top: 0;
                width: auto;
                height: auto;
                display: inline;
            }
        }
    }
    

    .empty-container {
        display: none;
    }
}

/* 小于1440px的响应式样式 */
@media (max-width: 1439px) {
    .first-container{
        .carousel-container {
            width: 100%;
            max-width: 900px;
            .carousel-list {
                .swiper-slide {
                    width:100px !important;
                    .carousel-group {
                        width: 100px !important;
                        color:#333;
                        text-align:center;
                    }
                }
            }
        }
    }
    

    .first-container {
        padding: 0 20px;
    }
}

/* 小于1440px的响应式样式 */
@media (max-width: 1439px) {
    .carousel-container {
        width: 100%;
        max-width: 900px;
    }

    .carousel-list {
        .swiper-slide {
            .carousel-group {
                width: 100px;
            }

            &.swiper-slide:nth-child(4),
            &.swiper-slide:nth-child(5),
            &.swiper-slide:nth-child(6) {
                .carousel-group {
                    width: 100px;
                }
            }
        }
    }

    .first-container {
        padding: 0 20px;
    }
}

@media (max-width: 768px) {
    .title-container h1 {
        font-size: 32px;
    }

    .carousel-list {
        width: 100%;

        .swiper {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            justify-content: flex-start;

            .carousel-group {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100px;
                height: 116px;
                background: #fcfcfc;
                border-radius: 8px;
                flex-shrink: 0;
            }

            img {
                width: 100px;
                height: 60px;
                object-fit: cover;
            }

            .text {
                display: block;
                font-size: 12px;
                font-weight: bold;
                text-align: center;
                padding: 8px 4px;
                line-height: 1.2;
            }
        }
    }
}

/* CNC Wire Saw Machine 部分样式 */
.wire-saw-machine-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top:48px;
    .text-wrap{
        max-width:1440px;
        margin:0 auto;
        text-align:center;
        .description{
            margin-top:24px;
            color:rgb(61, 61, 61);
            font-size:18px;
            font-weight:300;
            font-family: "Inter", "Inter Placeholder", sans-serif;
        }
    }
}

.wire-saw-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1440px;
}

.wire-saw-frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background: #FFFFFF;
}

.content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 42px;
    width: 1440px;
}

.main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 720px;
    &.biger{
        width:1200px;
        .content-wrapper {
            width: 1200px;
        }
    }
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 720px;
}

.materials-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    gap: 10px;
}
.materials-overlay{
    display:flex;
    justify-content:flex-start;
}
.materials-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding:4px 8px;
    background: rgba(67, 157, 241, 0.1);
    border-radius: 4px;
}

.materials-title-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.materials-image-container {
    display: flex;
    flex-direction: column;
    width: 23px;
    height: 23px;
    position: relative;
}

.materials-icon-wrapper {
    position: absolute;
    left: 4px;
    top: 2.59px;
    width: 17px;
    height: 16.89px;
}

.materials-icon {
    width: 17px;
    height: 16.89px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.materials-text-container {
    display: flex;
    flex-direction: column;
}

.materials-title-wrapper {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 0px 0px 0.8px;
}

.materials-title {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2em;
    color: #439DF1;
    margin: 0;
}

.materials-grid {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    align-self: stretch;
    gap: 16px;
}

.materials-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
}

.material-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 4.09px 0px 5.11px;
    height: 83px;
    min-width: 70px;
}

.material-category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.material-text-container {
    display: flex;
    flex-direction: column;
}

.material-title-wrapper {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 0px 0px 0.8px;
}

.material-title {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.4em;
    color: #000000;
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin: 0;
}

.material-image-mask {
    width: 46px;
    height: 46px;
    position: relative;
}

.material-image-container {
    width: 46px;
    height: 46px;
    position: absolute;
    top: 0;
    left: 0;
}

.material-image {
    width: 100%;
    height: 46px;
    border-radius: 46px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* 材料图片背景 */
.granite-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.marble-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.luxurystone-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.concrete-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.carbon-fiber-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.resin-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.graphite-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.rubber-image {
    background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop');
}

.main-title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 678px;
    margin-bottom:10px;
    .main-title.tl{
        text-align:left;
    }
}

.main-title-frame {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.main-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.2em;
    color: #000000;
    margin: 0;
    text-align:center;
    width: 100%;
    &.tl{
        text-align:left;
    }
}

.description-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 678px;
}

.description-frame {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: -0.4px;
}

.description-paragraph {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.description-text {
    font-family: "Inter", "Inter Placeholder", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.4em;
    color: #000000;
    margin: 0;
}

.carousel-background {
    width: 539px;
    height: 359px;
    background: #FFFFFF;
    border-radius: 24px;
    position: relative;
}

.carousel-background-container {
    width: 539px;
}

.carousel-background-section {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    padding: 10px;
}

.carousel-background-list {
    width: 100%;
    height: 359px;
    position: relative;
}

.carousel-item {
    width: 539px;
    height: 359px;
}

.carousel-item.active {
    opacity: 1;
}

.carousel-item-container {
    width: 539px;
    height: 359px;
}

.carousel-item-wrapper {
    width: 539px;
    height: 359px;
}

.carousel-item-image {
    width: 539px;
    height: 359px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
    }
}

.carousel-pagination-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 163px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.carousel-button-prev,
.carousel-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.5);
        transform: translateY(-50%) scale(1.1);
    }

    svg {
        width: 24px;
        height: 24px;
    }
}

/* 产品展示部分 */
.products-showcase {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border-radius: 16px;
    margin-top: 32px;
    &.biger{
        .product-card,
        .product-link{
            width:389px;
        }
        .product-title-section{
            width:100%;
            padding:0 5px;
        }
    }
}

.products-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 1440px;
    height: 323px;
    margin:10px auto;
}

.product-card {
    width: 259px;
    height: 308px;
    position: relative;
    border:2px solid rgb(242, 242, 242);
    border-radius:16px;
}

.product-info-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 259px;
}

.product-icon-container {
    width: 100%;
    height: 224px;
    border-radius: 8px;
}

.product-icon-wrapper {
    width: 100%;
    height: 224px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
}

.product-icon {
    width: 100%;
    height: 224px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
}

.product-title-section {
    display: flex;
    flex-direction: column;
    width: 200px;
}

.product-title-frame {
    width: 100%;
    height: 50.38px;
    position: relative;
}

.product-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4em;
    letter-spacing: -0.04em;
    text-align: center;
    color: #000000;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-title-line {
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Discover More 按钮 */
.discover-more-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 65px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 33px;
    margin-top: 32px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.discover-more-section:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
}

.discover-more-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.discover-more-container {
    display: flex;
    flex-direction: column;
}

.discover-more-wrapper {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.discover-more-text {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #FFFFFF;
}

/* 响应式设计 */
@media (max-width: 1440px) {

    .wire-saw-container,
    .content-container,
    .products-container {
        width: 100%;
        max-width: 1440px;
    }

    .main-content,
    .content-wrapper {
        width: 100% !important;
        max-width: 720px;
    }

    .materials-overlay {
        width: 100%;
        max-width: 676px;
    }

    .materials-grid {
        flex-wrap: wrap;
    }

    .material-item {
        min-width: 80px;
    }

    .products-container {
        flex-wrap: wrap;
        height: auto;
        gap: 16px;
    }

    .product-card {
        flex: 1;
        min-width: 250px;
    }
}





/* 响应式设计 */
@media (max-width: 3560px) {
    .processing-cases-section {
        width: 100%;
        max-width: 3560px;
    }

    .processing-cases-background {
        width: 100%;
    }
}

@media (max-width: 1440px) {
    .processing-cases-section {
        padding: 20px;
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

@media (max-width: 768px) {
    .processing-cases-title {
        font-size: 32px;
    }

    .processing-cases-section-inner {
        padding: 10px;
    }

    .processing-cases-list {
        gap: 16px;
    }

    .processing-case-item {
        min-width: 280px;
    }

    .case-background {
        width: 280px;
        height: 350px;
    }

    .case-ipad {
        width: 280px;
        height: 350px;
    }

    .case-main-image {
        width: 280px;
        height: 205px;
    }

    .case-image-container {
        width: auto;
    }

    .case-image-overlay {
        width: 280px;
        height: 205px;
    }

    .case-overlay-container {
        width: 280px;
    }

    .case-overlay-image {
        height: 205px;
    }

    .case-title {
        font-size: 16px;
    }

    .processing-cases-more-button {
        width: 300px;
        height: 50px;
    }

    .more-button-text {
        font-size: 18px;
    }
}
/* 响应式设计 */
@media (max-width: 1200px) {
    .productivity-container {
        width: 100%;
        padding: 0 20px;
    }

    .productivity-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .productivity-title {
        font-size: 32px;
    }

    .productivity-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .productivity-item-title {
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .productivity-grid {
        grid-template-columns: 1fr;
    }
}

/* Expert Guide 部分样式 - 对应Figma 19:13396 */
.expert-guide-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 20px;
}

.expert-guide-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1344px;
    max-width: 100%;
}

.expert-guide-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 1200px;
    max-width: 100%;
}

.expert-guide-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1200px;
    max-width: 100%;
}

.expert-guide-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 100%;
}

.expert-guide-title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 828px;
    max-width: 100%;
}

.expert-guide-title-frame {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.expert-guide-main-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.2em;
    text-align: left;
    color: #000000;
    margin: 0;
}

.expert-guide-image-section {
    display: flex;
    flex-direction: column;
    width: 278px;
    height: 153.61px;
    margin-top: 20px;
}

.expert-guide-image-container {
    display: flex;
    flex-direction: column;
    width: 278px;
}

.expert-guide-image {
    width: 278px;
    height: 153.61px;
    border-radius: 8px;
    img{
        width:100%;
    }
}

.expert-guide-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1076px;
    max-width: 100%;
    margin-top: 40px;
}

.article-section {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-bottom: 20px;
}

.article-heading-3 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4em;
    letter-spacing: -0.04em;
    text-align: left;
    color: #000000;
    margin: 0;
}

.article-heading-3-margin {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 20px 0px 0px;
}

.article-heading-4 {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4em;
    letter-spacing: -0.04em;
    text-align: left;
    color: #000000;
    margin: 0;
}

.article-heading-4-margin {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 40px 0px 0px;
}

.article-margin {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 7px 0px 0px;
}

.article-conclusion-margin {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 7.095px 0px 0px;
}

.article-text {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6em;
    letter-spacing: -0.02em;
    text-align: left;
    color: #666666;
    margin: 0;
    padding: 0px 0px 0.59px;
}

/* 响应式设计 */
@media (max-width: 1344px) {
    .expert-guide-container {
        width: 100%;
        padding: 0 20px;
    }

    .expert-guide-content {
        width: 100%;
    }

    .expert-guide-wrapper {
        width: 100%;
        flex-direction: column;
        gap: 20px;
    }

    .expert-guide-header {
        width: 100%;
    }

    .expert-guide-title-section {
        width: 100%;
    }

    .expert-guide-article {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .expert-guide-section {
        padding: 20px 10px;
    }

    .expert-guide-main-title {
        font-size: 32px;
        text-align: center;
    }

    .expert-guide-image-section {
        width: 100%;
        max-width: 278px;
        margin: 20px auto 0;
    }

    .expert-guide-image-container {
        width: 100%;
    }

    .expert-guide-image {
        width: 100%;
        height: auto;
        aspect-ratio: 278/153.61;
    }

    .article-heading-3 {
        font-size: 20px;
    }

    .article-heading-4 {
        font-size: 16px;
    }

    .article-text {
        font-size: 14px;
    }

    .article-heading-4-margin {
        padding: 30px 0px 0px;
    }
}

/* What Is An Industry Machine 部分样式 - 对应Figma 19:13123 */
.industry-machine-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24.01px;
    padding: 24px 0px 0px;
    width: 1376px;
    margin: 32px auto;
}

.industry-machine-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1200px;
    gap: 24px;
}

.industry-machine-title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
}

.industry-machine-title-frame {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.industry-machine-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.2em;
    text-align: center;
    color: #000000;
    margin: 0 0 30px 0;
    width: 100%;
}

.industry-machine-content {
    display: flex;
    flex-direction: column;
    gap: -0.01px;
    width: 1212px;
    margin: 0 auto;
}

.industry-machine-paragraph {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    position: relative;
}

.industry-machine-paragraph:first-child {
    // height: 125.94px;
}

.industry-machine-paragraph:last-child {
    gap: -0.62px;
    padding: 0px 2.02px 0px 7.08px;
}

.industry-machine-text {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4em;
    text-align: center;
    color: #3D3D3D;
    margin: 0;
}

.industry-machine-paragraph:first-child .industry-machine-text {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
}

/* 响应式设计 */
@media (max-width: 1440px) {
    .industry-machine-section {
        width: 100%;
        max-width: 1376px;
        padding: 24px 20px 0px;
    }

    .industry-machine-container {
        width: 100%;
        max-width: 1200px;
    }

    .industry-machine-content {
        width: 100%;
        max-width: 1212px;
    }

    .industry-machine-paragraph:first-child .industry-machine-text {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        text-align:center;
    }
}

@media (max-width: 768px) {
    .industry-machine-section {
        padding: 20px 16px 0px;
    }

    .industry-machine-title {
        font-size: 32px;
    }

    .industry-machine-text {
        font-size: 16px;
        line-height: 1.5em;
    }

    .industry-machine-paragraph:first-child {
        height: auto;
    }
}

/* 响应式设计 - 小于1440px时的移动端布局 */
@media (max-width: 1440px) {
    .main {
        width: 390px;
        margin: 0 auto;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    .dinosaw-head {
        .dinosaw-head-con {
            width: 390px;
            padding: 8px 40px 0px;
        }
    }

    /* 面包屑导航适配 */
    .breadcrumb-container {
        width: 390px;
        padding: 4px 16px;
        box-sizing: border-box;
    }

    /* 第一个容器适配 - 根据Figma设计 */
    .first-container {
        width: 375px;
        height: auto;
        margin-bottom: 16px;
        padding: 0px 15px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carousel-container {
        width: 100%;
        left: 0;
        position: relative;
    }

    .title {
        width: 100%;
        font-size: 30px;
        text-align: center;
        line-height: 1.2em;
        margin-bottom: 16px;
    }

    /* Wire Saw Machine部分适配 */
    .wire-saw-container {
        width: 390px;
        padding: 0 16px;
        box-sizing: border-box;
    }

    .content-container {
        width: 100%;
        flex-direction: column;
        gap: 16px;
        padding: 0 6px;
        box-sizing: border-box;
    }

    .main-content {
        width: 100%;
    }

    .content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    /* 调整元素顺序：main-title-section在materials-section上方 */
    .materials-section {
        order: 2;
    }

    .main-title-section {
        order: 1;
        width:100%;
    }

    .main-title {
        font-size: 20px;
        text-align: center;
        line-height: 1.2em;
    }
    .description-section{
        width:100%;
         .description-text {
            font-size: 14px;
            text-align: left;
            line-height: 1.4em;
            font-weight:400;
            color:#666;
            margin-top:25px;
        }
    }

    .wire-saw-machine-section{
        .text-wrap{
            .description{
                font-size:14px;
                text-align:left;
            }
        }
    }

    /* 材料网格适配 - 4列布局 */
    .machinable-materials-section {
        width: 100%;
        padding: 12px 0;
    }

    .materials-overlay{
        justify-content:center;
    }
    .materials-title-container {
        width: 100%;
    }

    .materials-title {
        font-size: 16px;
        text-align: center;
    }

    .materials-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        width: 100%;
        justify-items: center;
    }

    .materials-row {
        display: contents;
    }

    .material-item {
        min-width: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .material-category{
        padding:10px 0; 
    }
    .material-image-mask {
        
        width: 46px;
        height: 46px;
    }

    .material-title {
        font-size: 9px;
        line-height: 1.2em;
        text-align: center;
        margin-top: 4px;
    }

    /* 轮播图背景适配 */
    .carousel-background {
        width: 100%;
        height: 180px;
        margin: 16px auto;
    }

    .carousel-background-container {
        width: 100%;
    }

    .carousel-background-list {
        width: 100%;
        height: 180px;
    }

    .carousel-item {
        width: 100%;
        height: 180px;
    }

    .carousel-item-container {
        width: 100%;
        height: 180px;
    }

    .carousel-item-wrapper {
        width: 100%;
        height: 180px;
    }

    .carousel-item-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }

    /* 产品展示部分适配 - 2列网格布局 */
    .products-showcase{
        margin-top:0;
    }
    .products-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        width: 100%;
        height: auto;
        padding: 16px 20px;
    }

    .product-card {
        min-width:auto;
        width: 180px;
        height:auto;
        padding:5px 0;
        border-width:1px;
        .product-title-section{
            width:100%;
        }
        .product-link{
            width:auto;
        }
        .product-title-frame{
            height:64px;
        }
    }

    .product-icon-container {
        height: 140px;
    }

    .product-icon-wrapper {
        height: 140px;
    }

    .product-icon {
        height: 140px;
    }

    .product-main-image {
        width: 100%;
        height: 140px;
        object-fit: cover;
    }

    .product-title {
        font-size: 12px;
        line-height: 1.3em;
        text-align: center;
        padding: 8px;
        letter-spacing:0;
    }

    /* Discover More按钮适配 */
    .discover-more-section {
        width: 280px;
        height: 40px;
        margin: 16px auto;
    }

    .discover-more-text {
        font-size: 14px;
    }

    /* Processing Cases部分适配 */
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

    .processing-cases-title {
        font-size: 20px;
        line-height: 1.2em;
        text-align: center;
        margin-bottom: 16px;
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
        width: 175px;
        .case-youtube-link{
            width: 100%;
            .case-title-line{
                width:100%;
                height:auto;
            }
        }
        .case-date-section{
            display:none;
        }
    }

    .case-background {
        width: 100%;
        height: 280px;
    }

    .case-ipad {
        width: 100%;
        height: 280px;
    }

    .case-main-image {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }

    .case-image-overlay {
        width: 100%;
        height: 160px;
    }

    .case-overlay-container {
        width: 100%;
    }

    .case-overlay-image {
        height: 160px;
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

    /* Expert Guide部分适配 */
    .expert-guide-section {
        width: 390px;
        padding: 16px;
        box-sizing: border-box;
    }

    .expert-guide-container {
        width: 100%;
    }

    .expert-guide-content {
        width: 100%;
    }

    .expert-guide-wrapper {
        width: 100%;
        flex-direction: column;
        gap: 16px;
    }

    .expert-guide-header {
        width: 100%;
    }

    .expert-guide-title-section {
        width: 100%;
    }

    .expert-guide-main-title {
        font-size: 20px;
        line-height: 1.2em;
        text-align: left;
        margin-bottom: 16px;
    }

    .expert-guide-image-section {
        display:none;
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 0 auto;
    }

    .expert-guide-image-container {
        width: 100%;
    }

    .expert-guide-image {
        width: 100%;
        height: auto;
        aspect-ratio: 278/153.61;
        object-fit: cover;
    }

    .expert-guide-article {
        width: 100%;
        margin-top: 16px;
    }

    .article-heading-3 {
        font-size: 16px;
        line-height: 1.3em;
    }

    .article-heading-4 {
        font-size: 14px;
        line-height: 1.3em;
    }

    .article-text {
        font-size: 12px;
        line-height: 1.4em;
    }

    .article-heading-4-margin {
        padding: 16px 0px 0px;
    }

    .article-heading-3-margin {
        padding: 12px 0px 0px;
    }

    /* Industry Machine部分适配 */
    .industry-machine-section {
        width: 390px;
        padding: 16px;
        box-sizing: border-box;
    }

    .industry-machine-container {
        width: 100%;
    }

    .industry-machine-content {
        width: 100%;
        text-align:left;
    }

    .industry-machine-title {
        font-size: 20px;
        line-height: 1.2em;
        text-align: center;
        margin-bottom: 16px;
    }

    .industry-machine-text {
        font-size: 14px;
        line-height: 1.4em;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        text-align:center;
    }

    .industry-machine-paragraph:first-child .industry-machine-text {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
    }
}

/* 移动端响应式设计 - 小于768px */
@media (max-width: 768px) {
    .main {
        max-width: 100%;
    }

    .title {
        font-size: 30px;
    }

    .main-title {
        font-size: 30px;
    }

    .processing-cases-title {
        font-size: 24px;
    }

    .expert-guide-main-title {
        font-size: 24px;
    }

    .industry-machine-title {
        font-size: 24px;
    }

    .processing-cases-list {
        flex-direction: column;
        align-items: center;
    }

    .processing-case-item {
        max-width: 100%;
    }

    .case-background {
        width: 100%;
        max-width: 320px;
    }

    .case-ipad {
        width: 100%;
        max-width: 320px;
    }

    .case-main-image {
        width: 100%;
        height: 160px;
    }

    .products-container {
        flex-direction: column;
        align-items: center;
    }

    .product-card {
        width: auto;
        max-width: 280px;
    }
}
@media (max-width: 768px) {
    .wire-saw-container{
        padding:0 5px;
    }
    .content-container {
        flex-direction: column;
        gap: 20px;
        padding:0;
    }

    .main-title {
        font-weight:700;
        font-size: 32px;
        &.tl{
            text-align:center !important;
        }

        .title{
            font-weight:700;
        }
    }

    .materials-grid {
        gap: 8px;
    }

    .material-item {
        min-width: 60px;
        height: 70px;
    }

    .material-image-mask {
        width: 36px;
        height: 36px;
    }

    .material-title {
        font-size: 10px;
    }

    .products-container {
        flex-direction: column;
        align-items: center;
    }

    .product-card {
        width: 100%;
        max-width: 300px;
    }

    .discover-more-section {
        width: 300px;
        height: 50px;
    }

    .discover-more-text {
        font-size: 18px;
    }
}
</style>