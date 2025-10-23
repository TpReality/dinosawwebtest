<template>
    <div class="special-machine-layout">
        <div class="projects-banner">
            <div class="banner-background">
                <div class="banner-image">
                    <NuxtImg src="https://framerusercontent.com/images/CfZQsuUNaR78HVx3Yprs0X082s.jpg"
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(255, 255, 255); flex-shrink: 0; cursor: auto;"><g color="rgb(255, 255, 255)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
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
                            <div class="breadcrumb-link">
                                <div class="breadcrumb-text">
                                    <div class="text-container separator">
                                        <span class="breadcrumb-separator">/</span>
                                    </div>
                                </div>
                                <div class="breadcrumb-text">
                                    <div class="text-container">
                                        <span> {{ productDetail.category_name }}</span>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19">
                                        <path d="M 15.23 17.219 L 10.005 17.219 C 8.402 17.219 7.125 15.913 7.125 14.339 L 7.125 13.478 C 7.125 11.875 8.431 10.598 10.005 10.598 L 15.23 10.598 C 16.833 10.598 18.109 11.905 18.109 13.478 L 18.109 14.339 C 18.109 15.913 16.803 17.219 15.23 17.219 Z" fill="rgb(242, 203, 104)"></path>
                                        <path d="M 14.339 16.002 L 4.067 16.002 C 2.642 16.002 1.514 14.844 1.514 13.448 L 1.514 5.255 C 1.514 3.83 2.672 2.702 4.067 2.702 L 14.309 2.702 C 15.734 2.702 16.863 3.859 16.863 5.255 L 16.863 13.419 C 16.892 14.844 15.734 16.002 14.339 16.002 Z M 4.067 3.533 C 3.117 3.533 2.345 4.305 2.345 5.255 L 2.345 13.419 C 2.345 14.369 3.117 15.141 4.067 15.141 L 14.309 15.141 C 15.259 15.141 16.031 14.369 16.031 13.419 L 16.031 5.255 C 16.031 4.305 15.259 3.533 14.309 3.533 Z" fill="rgb(158, 116, 11)"></path>
                                        <path d="M 5.492 4.869 C 5.255 4.869 5.077 4.691 5.077 4.453 L 5.077 1.484 C 5.077 1.247 5.255 1.069 5.492 1.069 C 5.73 1.069 5.908 1.247 5.908 1.484 L 5.908 4.453 C 5.908 4.691 5.73 4.869 5.492 4.869 Z M 12.617 4.869 C 12.38 4.869 12.202 4.691 12.202 4.453 L 12.202 1.484 C 12.202 1.247 12.38 1.069 12.617 1.069 C 12.855 1.069 13.033 1.247 13.033 1.484 L 13.033 4.453 C 13.033 4.691 12.855 4.869 12.617 4.869 Z M 16.328 7.095 L 2.078 7.095 C 1.841 7.095 1.663 6.917 1.663 6.68 C 1.663 6.442 1.841 6.264 2.078 6.264 L 16.328 6.264 C 16.566 6.264 16.744 6.442 16.744 6.68 C 16.744 6.917 16.566 7.095 16.328 7.095 Z M 6.264 9.767 L 3.414 9.767 C 3.177 9.767 2.998 9.589 2.998 9.352 C 2.998 9.114 3.177 8.936 3.414 8.936 L 6.264 8.936 C 6.502 8.936 6.68 9.114 6.68 9.352 C 6.68 9.589 6.472 9.767 6.264 9.767 Z M 10.539 9.767 L 7.719 9.767 C 7.481 9.767 7.303 9.589 7.303 9.352 C 7.303 9.114 7.481 8.936 7.719 8.936 L 10.569 8.936 C 10.806 8.936 10.984 9.114 10.984 9.352 C 10.984 9.589 10.777 9.767 10.539 9.767 Z M 14.844 9.767 L 11.994 9.767 C 11.756 9.767 11.578 9.589 11.578 9.352 C 11.578 9.114 11.756 8.936 11.994 8.936 L 14.844 8.936 C 15.081 8.936 15.259 9.114 15.259 9.352 C 15.259 9.589 15.081 9.767 14.844 9.767 Z M 6.264 12.736 L 3.414 12.736 C 3.177 12.736 2.998 12.558 2.998 12.32 C 2.998 12.083 3.177 11.905 3.414 11.905 L 6.264 11.905 C 6.502 11.905 6.68 12.083 6.68 12.32 C 6.68 12.558 6.472 12.736 6.264 12.736 Z M 10.539 12.736 L 7.719 12.736 C 7.481 12.736 7.303 12.558 7.303 12.32 C 7.303 12.083 7.481 11.905 7.719 11.905 L 10.569 11.905 C 10.806 11.905 10.984 12.083 10.984 12.32 C 10.984 12.558 10.777 12.736 10.539 12.736 Z" fill="rgb(158, 116, 11)"></path>
                                    </svg>
                                    <!-- <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <circle cx="14.5" cy="14.5" r="14.5" fill="#FFB800" />
                                        <path
                                            d="M14.5 8L16.5 13H22L17.5 16.5L19.5 22L14.5 18.5L9.5 22L11.5 16.5L7 13H12.5L14.5 8Z"
                                            fill="white" />
                                    </svg> -->
                                </div>
                                <div class="badge-text">
                                    <span class="badge-title">{{ productDetail.last_update_date_text }}</span>
                                    <div class="badge-title">{{ productDetail.last_update_date_value }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="title-section">
                        <h1 class="main-title">
                            {{ productDetail.hero_main_title }}
                        </h1>
                    </div>
                    <div class="description-section">
                        <p class="description-text" v-if="productDetail.hero_main_description"></p>
                    </div>
                    <div class="material-types">
                        <template v-for="(item, index) in productDetail.hero_circle_background_images"  :key="index">
                            <div class="material-item">
                                <div class="material-icon">
                                    <NuxtImg :src="item.banner_img.url" />
                                </div>
                                <span class="material-name">{{ item.banner_text}}</span>
                            </div>
                            
                        </template>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Dynamic Content Section -->
        <div class="dynamic-content-section">
            <div class="content-wrapper">
                <!-- 标题部分 -->
                <div class="cnc-title-section">
                    <h2 class="cnc-title">{{ productDetail.cnc_mono_wire_saw_machine_title }}</h2>
                </div>
                
                <!-- 描述内容部分 -->
                <div class="cnc-description-section" v-html="productDetail.cnc_mono_wire_saw_machine_description">
                </div>
                
                <!-- 动态产品图片展示区域 -->
                <div class="dynamic-product-section" v-if="productDetail.cnc_mono_wire_saw_machine_products && productDetail.cnc_mono_wire_saw_machine_products.length">
                    <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                    <div v-if="productDetail.cnc_mono_wire_saw_machine_products.length === 1" class="layout-single">
                        <NuxtLink :to="'/Products/'+productDetail.cnc_mono_wire_saw_machine_products[0].url" target="_blank">
                        <div class="single-container">
                            <div class="single-link">
                                <div class="single-image">
                                    <NuxtImg :src="productDetail.cnc_mono_wire_saw_machine_products[0].first_image_url" />
                                </div>
                                <div class="single-content">
                                    <div class="single-text-section">
                                        <div class="single-title-wrapper">
                                            <h3 class="single-title">{{ productDetail.cnc_mono_wire_saw_machine_products[0].h1_page_inner_title }}</h3>
                                        </div>
                                        <div class="single-date-wrapper" v-if="productDetail.cnc_mono_wire_saw_machine_products[0].date">
                                            <p class="single-date">{{ productDetail.cnc_mono_wire_saw_machine_products[0].date }}</p>
                                        </div>
                                    </div>
                                    <div class="single-button" v-if="productDetail.buy_now_text">
                                        <div class="single-button-content">
                                            <span class="button-text">{{ productDetail.buy_now_text }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </NuxtLink>
                    </div>
                    
                    <!-- 2张图片布局：左右布局 -->
                    <div v-else-if="productDetail.cnc_mono_wire_saw_machine_products.length === 2" class="layout-double">
                        <template v-for="(product, index) in productDetail.cnc_mono_wire_saw_machine_products" 
                            :key="index">
                        <NuxtLink :to="'/Products/'+product.url" target="_blank">
                        <div 
                            
                            class="double-item"
                            :class="product.layout || 'vertical'"
                        >
                            <!-- 垂直布局：上面图片，下面标题 -->
                            <template v-if="!product.layout || product.layout === 'vertical'">
                                <div class="double-image">
                                    <NuxtImg :src="product.first_image_url" :alt="product.h1_page_inner_title" />
                                </div>
                                <div class="double-content">
                                    <h3 class="double-title">{{ product.h1_page_inner_title }}</h3>
                                </div>
                            </template>
                            
                            <!-- 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 -->
                            <template v-else-if="product.layout === 'horizontal'">
                                <div class="horizontal-container">
                                    <div class="horizontal-link">
                                        <div class="horizontal-image">
                                            <NuxtImg :src="product.first_image_url" :alt="product.h1_page_inner_title" />
                                        </div>
                                        <div class="horizontal-content">
                                            <div class="horizontal-text-section">
                                                <div class="horizontal-title-wrapper">
                                                    <h3 class="horizontal-title">{{ product.h1_page_inner_title }}</h3>
                                                </div>
                                                <div class="horizontal-date-wrapper" v-if="product.date">
                                                    <p class="horizontal-date">{{ product.date }}</p>
                                                </div>
                                            </div>
                                            <div class="horizontal-button" v-if="product.buttonText">
                                                <div class="horizontal-button-content">
                                                    <span class="button-text">{{ product.buttonText }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        </NuxtLink>
                        </template>
                    </div>
                    
                    <!-- 4张图片布局：2x2网格 -->
                    <div v-else-if="productDetail.cnc_mono_wire_saw_machine_products.length === 4" class="layout-quad">
                        <template v-for="(product, index) in productDetail.cnc_mono_wire_saw_machine_products" 
                            :key="index">
                            <NuxtLink :to="'/Products/'+product.url" target="_blank">
                        <div 
                           
                            class="quad-item"
                        >
                            <div class="quad-image">
                                <NuxtImg :src="product.first_image_url" />
                            </div>
                            <div class="quad-content">
                                <h3 class="quad-title">{{ product.h1_page_inner_title }}</h3>
                            </div>
                        </div>
                        </NuxtLink>
                        </template>
                    </div>
                    
                    <!-- 5张图片布局：左边1个大图，右边4个小图 -->
                    <div v-else-if="productDetail.cnc_mono_wire_saw_machine_products.length === 5" class="layout-five">
                       
                        <div class="five-left">
                             
                            <div class="five-main-image">
                                <NuxtLink :to="'/Products/'+productDetail.cnc_mono_wire_saw_machine_products[0].url" target="_blank"><NuxtImg :src="productDetail.cnc_mono_wire_saw_machine_products[0].first_image_url" /></NuxtLink>
                            </div>
                            <NuxtLink :to="'/Products/'+productDetail.cnc_mono_wire_saw_machine_products[0].url" target="_blank">
                            <div class="five-main-content">
                                <h3 class="five-main-title">{{ productDetail.cnc_mono_wire_saw_machine_products[0].h1_page_inner_title }}</h3>
                                <p class="five-main-date" v-if="productDetail.cnc_mono_wire_saw_machine_products[0].date">{{ productDetail.cnc_mono_wire_saw_machine_products[0].date }}</p>
                                <div class="five-main-info" v-if="productDetail.flagship_products_2025_text">
                                    <h3 class="five-subtitle">{{ productDetail.flagship_products_2025_text }}</h3>
                                    <p class="five-description" v-if="productDetail.flagship_products_2025_description">{{ productDetail.cnc_mono_wire_saw_machine_products[0].description }}</p>
                                    <button class="buy-now-btn">{{productDetail.buy_now_text}}</button>
                                </div>
                            </div>
                            </NuxtLink>
                        </div>
                        <div class="five-right">
                            <div 
                                v-for="(product, index) in productDetail.cnc_mono_wire_saw_machine_products.slice(1)" 
                                :key="index + 1"
                                class="five-grid-item"
                            >
                                <div class="five-grid-image">
                                    <NuxtLink :to="'/Products/'+product.url" target="_blank">
                                        <NuxtImg :src="product.first_image_url" />
                                    </NuxtLink>
                                </div>
                                <h3 class="five-grid-title">
                                    <NuxtLink :to="'/Products/'+product.url" target="_blank">{{ product.h1_page_inner_title }}</NuxtLink>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dynamic-content-section" v-if="productDetail.cnc_multi_wire_saw_machine_title">
            <div class="content-wrapper">
                <!-- 标题部分 -->
                <div class="cnc-title-section">
                    <h2 class="cnc-title">{{ productDetail.cnc_multi_wire_saw_machine_title }}</h2>
                </div>
                
                <!-- 描述内容部分 -->
                <div class="cnc-description-section" v-html="productDetail.cnc_multi_wire_saw_machine_description">
                </div>
                
                <!-- 动态产品图片展示区域 -->
                <div class="dynamic-product-section" v-if="productDetail.cnc_multi_wire_saw_machine_products && productDetail.cnc_multi_wire_saw_machine_products.length">
                    <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                    <div v-if="productDetail.cnc_multi_wire_saw_machine_products.length === 1" class="layout-single">
                        <NuxtLink :to="'/Products/'+productDetail.cnc_multi_wire_saw_machine_products[0].url">
                            <div class="single-container">
                                <div class="single-link">
                                    <div class="single-image">
                                        <NuxtImg :src="productDetail.cnc_multi_wire_saw_machine_products[0].first_image_url" />
                                    </div>
                                    <div class="single-content">
                                        <div class="single-text-section">
                                            <div class="single-title-wrapper">
                                                <h3 class="single-title">{{ productDetail.cnc_multi_wire_saw_machine_products[0].h1_page_inner_title }}</h3>
                                            </div>
                                            <div class="single-date-wrapper" v-if="productDetail.cnc_multi_wire_saw_machine_products[0].date">
                                                <p class="single-date">{{ productDetail.cnc_multi_wire_saw_machine_products[0].date }}</p>
                                            </div>
                                        </div>
                                        <div class="single-button" v-if="productDetail.cnc_multi_wire_saw_machine_products[0].buttonText">
                                            <div class="single-button-content">
                                                <span class="button-text">{{ productDetail.cnc_multi_wire_saw_machine_products[0].buttonText }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    
                    <!-- 2张图片布局：左右布局 -->
                    <div v-else-if="productDetail.cnc_multi_wire_saw_machine_products.length === 2" class="layout-double">
                        <template v-for="(product, index) in productDetail.cnc_multi_wire_saw_machine_products" 
                            :key="index">
                            <NuxtLink :to="'/Products/'+product.url">
                                    <div 
                                    class="double-item"
                                    :class="product.layout || 'vertical'"
                                >
                                
                                    <!-- 垂直布局：上面图片，下面标题 -->
                                    <template v-if="!product.layout || product.layout === 'vertical'">
                                        <div class="double-image">
                                            <NuxtImg :src="product.first_image_url" />
                                        </div>
                                        <div class="double-content">
                                            <h3 class="double-title">{{ product.h1_page_inner_title }}</h3>
                                        </div>
                                    </template>
                                    
                                    <!-- 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 -->
                                    <template v-else-if="product.layout === 'horizontal'">
                                        <div class="horizontal-container">
                                            <div class="horizontal-link">
                                                <div class="horizontal-image">
                                                    <NuxtImg :src="product.first_image_url" />
                                                </div>
                                                <div class="horizontal-content">
                                                    <div class="horizontal-text-section">
                                                        <div class="horizontal-title-wrapper">
                                                            <h3 class="horizontal-title">{{ product.h1_page_inner_title }}</h3>
                                                        </div>
                                                        <div class="horizontal-date-wrapper" v-if="product.date">
                                                            <p class="horizontal-date">{{ product.date }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="horizontal-button" v-if="product.buttonText">
                                                        <div class="horizontal-button-content">
                                                            <span class="button-text">{{ product.buttonText }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                                </NuxtLink>
                        </template>
                        
                    </div>
                    
                    <!-- 4张图片布局：2x2网格 -->
                    <div v-else-if="productDetail.cnc_multi_wire_saw_machine_products.length === 4" class="layout-quad">
                        <template v-for="(product, index) in productDetail.cnc_multi_wire_saw_machine_products" 
                            :key="index">
                            <NuxtLink :to="'/Products/'+product.url">
                            <div 
                                
                                class="quad-item"
                            >
                                <div class="quad-image">
                                    <NuxtImg :src="product.first_image_url" />
                                </div>
                                <div class="quad-content">
                                    <h3 class="quad-title">{{ product.h1_page_inner_title }}</h3>
                                </div>
                            </div>
                            </NuxtLink>
                        </template>
                    </div>
                    
                    <!-- 5张图片布局：左边1个大图，右边4个小图 -->
                    <div v-else-if="productDetail.cnc_multi_wire_saw_machine_products.length === 5" class="layout-five">
                        <div class="five-left">
                            <div class="five-main-image">
                                <NuxtLink :to="'/Products/'+productDetail.cnc_multi_wire_saw_machine_products[0].url">
                                    <NuxtImg :src="productDetail.cnc_multi_wire_saw_machine_products[0].first_image_url" />
                                </NuxtLink>
                            </div>
                            <div class="five-main-content">
                                <h3 class="five-main-title">{{ productDetail.cnc_multi_wire_saw_machine_products[0].h1_page_inner_title }}</h3>
                                <p class="five-main-date" v-if="productDetail.cnc_multi_wire_saw_machine_products[0].date">{{ productDetail.cnc_multi_wire_saw_machine_products[0].date }}</p>
                                <div class="five-main-info" v-if="productDetail.flagship_products_2025_text">
                                    <h3 class="five-subtitle">{{ productDetail.flagship_products_2025_text }}</h3>
                                    <p class="five-description" v-if="productDetail.flagship_products_2025_description">{{ productDetail.cnc_mono_wire_saw_machine_products[0].description }}</p>
                                    <button class="buy-now-btn">{{productDetail.buy_now_text}}</button>
                                </div>
                            </div>
                        </div>
                        <div class="five-right">
                            <div 
                                v-for="(product, index) in productDetail.cnc_multi_wire_saw_machine_products.slice(1)" 
                                :key="index + 1"
                                class="five-grid-item"
                            >
                                <div class="five-grid-image">
                                    <NuxtImg :src="product.first_image_url" />
                                </div>
                                <h3 class="five-grid-title">{{ product.h1_page_inner_title }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dynamic-content-section" v-if="productDetail.what_is_a_wire_saw_machine_title">
            <div class="content-wrapper">
                <!-- 标题部分 -->
                <div class="cnc-title-section">
                    <h2 class="cnc-title">{{ productDetail.what_is_a_wire_saw_machine_title }}</h2>
                </div>
                
                <!-- 描述内容部分 -->
                <div class="cnc-description-section" v-html="productDetail.what_is_a_wire_saw_machine_description">
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
                    <h2 class="processing-cases-title">
                        {{ item.title }}<br>
                        <div class="c-black" v-html="item.subTitle"></div>
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
                                    <template v-for="(blogs, j) in item.blogs" :key="j">
                                        <NuxtLink :to="blogs.category_link" target="_blank">
                                            <div class="processing-case-item">
                                                <div class="case-background" :class="index != 2 ? 'yellow' : ''">
                                                    <div class="case-ipad">
                                                        <div class="case-image-container">
                                                            <div class="case-main-image cement-case">
                                                                <NuxtImg :src="blogs.first_image_url" />
                                                            </div>
                                                        </div>
                                                        <div class="case-content-container">
                                                            <div class="case-link">
                                                                <div class="case-info-container">
                                                                    <div class="case-youtube-link">
                                                                        <div class="case-title-frame">
                                                                            <h3 class="case-title">
                                                                                <span class="case-title-line">{{ blogs.title }}</span>
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
                                                                            <span class="case-date">{{ blogs.date }}</span>
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
                        <div class="processing-cases-more-button">
                            <div class="more-button-container">
                                <div class="more-button-wrapper">
                                    <span class="more-button-text">{{productDetail.more_text  }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Comprehensive Guide Section -->
        <div class="comprehensive-guide-section">
            <div class="guide-container">
                <!-- Header Section -->
                <div class="guide-header">
                    <div class="guide-title-section">
                        <div class="guide-title-wrapper">
                            <h2 class="guide-main-title">
                                {{productDetail.select_machine_guide_title}}
                            </h2>
                        </div>
                    </div>
                    <div class="guide-image-section">
                        <NuxtImg 
                            :src="productDetail.select_machine_guide_background_image.url" 
                            class="guide-image"
                        />
                    </div>
                </div>
                
                <div class="guide-content" v-html="productDetail.select_machine_guide_description"></div>
                 <NuxtImg 
                    class="guide-image-mobile"
                    :src="productDetail.select_machine_guide_background_image.url" 
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatDate, formatDateEN } from '~/utils/dateUtils';

const props = defineProps({
    slug: {
        type: String,
        required: true
    },
    topProduct:{
        type: Array,
        default: () => []
    }
});

// 添加 emit 定义
const emit = defineEmits(['headdata-loaded']);



// 在模板中可以直接使用 props.slug 或者创建响应式引用
const { slug } = toRefs(props);
let processingCase = []
let productDetail = {}

// 导入日期格式化工具函数
import { formatArrayDatesLong, formatArrayDatesShort } from '~/utils/dateFormatter'

// 或者直接使用 props.slug
// console.log('Current slug in component:', props.slug);

const { data: productDetailRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=wire-saw-machine&populate=all')
watch(productDetailRes, (newPosts) => {
    if (newPosts) {
        console.log(newPosts)
        
        let data = newPosts.data[0]

        productDetail = data.wire_saw_machine

        // 格式化产品数组中的日期 (Jan 11, 2025 格式)
        if (productDetail.cnc_mono_wire_saw_machine_products) {
            productDetail.cnc_mono_wire_saw_machine_products = formatArrayDatesLong(
                productDetail.cnc_mono_wire_saw_machine_products
            )
        }
        
        if (productDetail.cnc_multi_wire_saw_machine_products) {
            productDetail.cnc_multi_wire_saw_machine_products = formatArrayDatesLong(
                productDetail.cnc_multi_wire_saw_machine_products
            )
        }

        // console.log(productDetail)

        processingCase = [
            { 
                id: 1, 
                title: productDetail.wire_saw_machine_customer_cases_title, 
                subTitle: productDetail.wire_saw_machine_customer_cases_subtitle, 
                blogs: formatArrayDatesShort(productDetail.wire_saw_machine_customer_cases_blogs)
            },
            { 
                id: 2, 
                title: productDetail.wire_saw_operation_videos_title, 
                subTitle: productDetail.wire_saw_operation_videos_subtitle, 
                blogs: formatArrayDatesShort(productDetail.wire_saw_operation_videos_blogs)
            },
            { 
                id: 3, 
                title: productDetail.wire_saw_technology_news_title, 
                subTitle: productDetail.wire_saw_technology_news_subtitle, 
                blogs: formatArrayDatesShort(productDetail.wire_saw_technology_news_blogs)
            }
        ]
        // 通知父组件数据已加载
        emit('headdata-loaded', data.wire_saw_machine);
    }

}, { immediate: true })

watch(error, (newError) => {
     throw createError({ statusCode: 404, statusMessage: '文章不存在' });
})


// 根据slug获取面包屑导航数据
const productData = computed(() => {
    // 这里可以根据slug从API或静态数据中获取产品信息
    const products = {
        'profiling-machine': {
            title: 'CNC Stone Profiling Machines for Marble & Granite Processing',
            description: `Dinosaw's profiling machines are engineered to meet the demands of complex stone shaping tasks. With options including bridge profiling machines, vertical models, and horizontal models, these machines cater to various production scales and materials. From Roman columns to intricate decorative moldings, our profiling machines deliver precision and efficiency.`,
            materials: [
                { name: 'Granite', icon: '/images/granite-icon.svg' },
                { name: 'Marble', icon: '/images/marble-icon.svg' },
                { name: 'cement', icon: '/images/cement-icon.svg' },
                { name: 'foamed ceramic', icon: '/images/ceramic-icon.svg' }
            ]
        },
        // 可以添加更多产品数据
        'default': {
            title: productDetail.value.title || 'Product Title',
            description: 'Product description goes here...',
            materials: [
                { name: 'Material 1', icon: '' },
                { name: 'Material 2', icon: '' },
                { name: 'Material 3', icon: '' },
                { name: 'Material 4', icon: '' }
            ]
        }
    };

    return products[slug] || products['default'];
});
</script>

<style scoped lang="scss">
.special-machine-layout {
    width: 100%;
    min-height: 100vh;
}

.breadcrumb-container{
    .breadcrumb-separator,
    .breadcrumb-text,
    .breadcrumb-home,
    .breadcrumb-products{
        color:#fff;
    }
    
}
.title-section{
    margin-bottom:30px;
    .main-title{
        color:#fff;
    }
}
.description-section{
    max-width:990px;
    height:auto;
    margin-bottom:10px;
}

/* 主要内容区域 */
.main-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100%;
    justify-content: center;
}

/* 产品标题 */
.product-title {
    width: 100%;
    max-height: 125px;
    display: flex;
    align-items: stretch;
}

.title-text {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    color: #FFFFFF;
    max-width: 1058px;
    margin: 0;
}

/* 产品描述 */
.product-description {
    width: 100%;
    max-height: 76px;
    display: flex;
    align-items: stretch;
}

.description-text {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    color: #FFFFFF;
    max-width: 1089px;
    margin: 0;
}

/* 材料类型图标 */
.material-types {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    width: 290px;
    height: 83px;
}

.material-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1;
}

.material-icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.material-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.material-name {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.25em;
    color: #FFFFFF;
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .content-overlay {
        padding-left: 20px;
        padding-right: 20px;
    }

    .breadcrumb-container {
        left: 20px;
    }

    .title-text {
        font-size: 32px;
        max-width: 100%;
    }

    .description-text {
        font-size: 16px;
        max-width: 100%;
    }

    .material-types {
        width: 100%;
        justify-content: space-between;
    }

    .product-page {
        height: auto;
        min-height: 461px;
    }
}

@media (max-width: 480px) {
    .title-text {
        font-size: 24px;
    }

    .description-text {
        font-size: 14px;
    }

    .material-types {
        justify-content:flex-start;
        flex-wrap: wrap;
        height: auto;
    }

    .material-item {
        flex: none;
        margin-bottom: 10px;
    }
}

/* CNC Mono Wire Saw Machine Section Styles */
.cnc-mono-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 60px 32px;
    background-color: #ffffff;
}

.cnc-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    max-width: 1376px;
}

/* 标题部分样式 */
.cnc-title-section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 1200px;
    height: 58px;
    margin:0 auto 30px;
}

.cnc-title {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.1875em;
    text-align: center;
    color: #000000;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 描述内容部分样式 */
.cnc-description-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1212px;
    gap: 0;
    margin:0 auto 30px;
}

.cnc-description-text {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    text-align: center;
    color: #3D3D3D;
    margin: 0;
    padding: 18px 0;
}

.cnc-description-text:first-child {
    padding-top: 0;
    height: 76px;
    display: flex;
    align-items: center;
}

.cnc-description-text:not(:first-child) {
    height: 101px;
    display: flex;
    align-items: center;
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .cnc-content-wrapper {
        max-width: 100%;
        padding: 0 20px;
    }
    
    .cnc-title-section {
        max-width: 100%;
        height:auto;
        margin-bottom:15px;
    }
    
    .cnc-description-section {
        max-width: 100%;
    }
    .processing-cases-section {
        width: 100%;
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
        text-align:left;
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
    }

    .case-background {
        width: 100%;
        height: 230px;
        border-radius:8px;
    }

    .case-ipad {
        width: 100%;
        height: 280px;
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
    .cnc-mono-section {
        padding: 40px 20px;
    }
    
    .cnc-title {
        font-size: 36px;
        line-height: 1.2em;
    }
    
    .cnc-description-text {
        font-size: 16px;
        line-height: 1.4em;
        padding: 15px 0;
    }
    
    .cnc-description-text:first-child,
    .cnc-description-text:not(:first-child) {
        height: auto;
        min-height: 60px;
    }
}

@media (max-width: 480px) {
    .cnc-mono-section {
        padding: 30px 16px;
    }
    
    .cnc-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .cnc-description-text {
        font-size: 14px;
        font-weight:400;
        line-height: 1.5em;
        padding: 12px 0;
    }
}

/* Product Showcase Section Styles */
.product-showcase-section {
    width: 100%;
    background-color: #ffffff;
    padding: 40px;
}

.showcase-container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

/* 上方区域：左右布局 */
.top-section {
    display: flex;
    gap: 24px;
    align-items: stretch;
}

/* 左侧特色产品 */
.left-featured-product {
    flex: 1;
    max-width: 696px;
    background-color: #ffffff;
    border-radius: 0px 24px 0px 24px;
    overflow: hidden;
}

.featured-image-wrapper {
    background-color: #f6f6f6;
    border-radius: 24px 24px 0px 0px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.featured-image-wrapper img {
    width: 100%;
    max-width: 646px;
    height: auto;
    object-fit: cover;
}

.featured-text-wrapper {
    background-color: #f6f6f6;
    border-radius: 0px 0px 24px 24px;
    padding: 20px;
    text-align: center;
}

.featured-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #333333;
    margin: 0 0 10px 0;
}

.featured-date {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    color: rgba(61, 61, 61, 0.7);
    margin: 0 0 20px 0;
}

.flagship-info {
    text-align: left;
    margin-top: 20px;
}

.flagship-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #000000;
    margin: 0 0 10px 0;
}

.flagship-subtitle {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.1428571428571428em;
    color: #3d3d3d;
    margin: 0;
}

/* 右侧产品网格 */
.right-product-grid {
    flex: 1;
    max-width: 680px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
}

.grid-item {
    background-color: #f6f6f6;
    border-radius: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.grid-image {
    width: 100%;
    max-width: 273px;
    height: 192px;
    margin-bottom: 16px;
}

.grid-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.grid-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    color: #333333;
    margin: 0;
}

/* 下方区域：横向布局 */
.bottom-section {
    display: flex;
    gap: 249px;
    align-items: center;
    background-color: #f6f6f6;
    border-radius: 30px;
    padding: 20px;
    max-width: 1400px;
    margin: 0 auto;
}

.bottom-image {
    flex-shrink: 0;
    width: 573px;
    height: 313px;
    border-radius: 8px;
    overflow: hidden;
}

.bottom-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.bottom-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #333333;
    margin: 0;
}

.bottom-date {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    color: rgba(61, 61, 61, 0.7);
    margin: 0;
}

.discover-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 150px;
    height: 40px;
    background-color: #000000;
    border-radius: 21px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.discover-button:hover {
    background-color: #333333;
}

.button-text {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2142857142857142em;
    color: #ffffff;
}

/* 响应式设计 */
@media (max-width: 1200px) {
    .product-showcase-section {
        padding: 30px 20px;
    }
    
    .top-section {
        flex-direction: column;
        gap: 30px;
    }
    
    .left-featured-product,
    .right-product-grid {
        max-width: 100%;
    }
    
    .bottom-section {
        gap: 50px;
        flex-direction: column;
        text-align: center;
    }
    
    .bottom-image {
        width: 100%;
        max-width: 500px;
        height: auto;
    }
}

@media (max-width: 768px) {
    .product-showcase-section {
        padding: 20px 15px;
    }
    
    .right-product-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .grid-title {
        font-size: 18px;
        line-height: 1.3em;
    }
    
    .featured-title,
    .flagship-title,
    .bottom-title {
        font-size: 20px;
        line-height: 1.2em;
    }
    
    .bottom-section {
        gap: 30px;
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .product-showcase-section {
        padding: 15px 10px;
    }
    
    .showcase-container {
        gap: 30px;
    }
    
    .featured-title,
    .flagship-title,
    .bottom-title {
        font-size: 18px;
    }
    
    .grid-title {
        font-size: 16px;
    }
    
    .featured-date,
    .bottom-date {
        font-size: 14px;
    }
    
    .discover-button {
        width: 130px;
        height: 36px;
        padding: 12px;
    }
    
    .button-text {
        font-size: 12px;
    }
}

/* Dynamic Content Section Styles */
.dynamic-content-section {
    width: 100%;
    background-color: #ffffff;
    padding: 50px 40px;
}

.content-wrapper {
    max-width: 1376px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}


/* 响应式设计 */
@media (max-width: 1200px) {
    .dynamic-content-section {
        padding: 40px 20px;
    }
    
    .layout-single {
        height: auto;
        min-height: 300px;
        padding: 20px;
    }
    
    .single-container {
        width: 100%;
        height: auto;
    }
    
    .single-link {
        flex-direction: column;
        gap: 30px;
        text-align: center;
    }
    
    .single-image {
        width: 100%;
        max-width: 500px;
        height: auto;
        position: relative;
    }
    
    .single-image img {
        position: static;
        left: auto;
        width: 100%;
        max-width: 400px;
        height: auto;
    }
    
    .single-content {
        width: 100%;
        height: auto;
        gap: 30px;
    }
    
    .single-text-section {
        height: auto;
        text-align: center;
    }
    
    .single-title-wrapper {
        height: auto;
    }
    
    .single-title {
        width: 100%;
        height: auto;
        top: 0;
        text-align: center;
    }
    
    .single-date-wrapper {
        width: 100%;
        height: auto;
        text-align: center;
    }
    
    .single-date {
        width: 100%;
        height: auto;
        top: 0;
        text-align: center;
    }
    
    .layout-double {
        flex-direction: column;
        gap: 30px;
        &>a{
            flex:1;
        }
    }
    
    .double-item.horizontal {
        width: 100%;
        height: auto;
        min-height: 280px;
        padding: 15px 0;
    }
    
    .horizontal-container {
        width: 100%;
        height: auto;
    }
    
    .horizontal-link {
        flex-direction: column;
        gap: 20px;
        text-align: center;
        padding: 20px;
    }
    
    .horizontal-image {
        width: 100%;
        max-width: 300px;
        height: auto;
        position: relative;
        margin: 0 auto;
    }
    
    .horizontal-image img {
        position: static;
        left: auto;
        width: 100%;
        max-width: 250px;
        height: auto;
    }
    
    .horizontal-content {
        width: 100%;
        height: auto;
        gap: 30px;
    }
    
    .horizontal-text-section {
        height: auto;
        text-align: center;
    }
    
    .horizontal-title-wrapper {
        height: auto;
    }
    
    .horizontal-title {
        width: 100%;
        height: auto;
        top: 0;
        text-align: center;
    }
    
    .horizontal-date-wrapper {
        width: 100%;
        height: auto;
        text-align: center;
    }
    
    .horizontal-date {
        width: 100%;
        height: auto;
        top: 0;
        text-align: center;
    }
    
    .layout-five {
        flex-direction: column;
        gap: 30px;
    }
    
    .five-left,
    .five-right {
        max-width: 100%;
    }
}


/* Comprehensive Guide Section Styles */
.comprehensive-guide-section {
    width: 1076px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    background-color: #ffffff;
}

.guide-container {
    width: 1076px;
    height: 1523.36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

/* Header Section */
.guide-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 150px;
}

.guide-title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.guide-title-wrapper {
    width: 828px;
    height: 115.19px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
}

.guide-main-title {
    width: 784px;
    height: 114px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.1875em;
    text-align: left;
    color: #000000;
    margin: 0;
    position: relative;
    top: -43px;
}

.guide-image-section {
    width: 278px;
    height: 154px;
    position: relative;
}

.guide-image {
    width: 278px;
    height: 154px;
    object-fit: cover;
    border-radius: 8px;
}
.guide-image-mobile{
    display:none;
    width:100%;
}
/* Content Section */
.guide-content {
    width: 1076px;
    height: 1360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10.67px;
}

.guide-intro {
    width: 100%;
    height: 51.19px;
    display: flex;
    align-items: center;
}

.guide-intro-text {
    width: 1141px;
    height: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    color: #666666;
    margin: 0;
}

.guide-section {
    width: 100%;
    margin-bottom: 10.67px;
}

.guide-section-title {
    width: 100%;
    height: 34px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2083em;
    text-align: left;
    color: #000000;
    margin: 0 0 10.67px 0;
    position: relative;
    top: 2px;
}

.guide-section-desc {
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    text-align: left;
    color: #666666;
    margin: 0 0 10.67px 0;
    position: relative;
    top: 2px;
}

.guide-paragraph {
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    text-align: left;
    color: #666666;
    margin: 0 0 10.67px 0;
    min-height: 20px;
}

.guide-steps {
    display: flex;
    flex-direction: column;
    gap: 10.67px;
}

.guide-conclusion {
    width: 100%;
}

.guide-conclusion .guide-paragraph {
    width: 1138px;
    line-height:1.5;
    position: relative;
}

/* Responsive Design */
@media (max-width: 1240px) {
    .guide-container {
        width: 100%;
        height: auto;
        padding: 0 20px;
    }
    
    .guide-header {
        flex-direction: column;
        gap: 40px;
    }
    
    .guide-title-section {
        width: 100%;
        height: auto;
    }
    
    .guide-title-wrapper {
        width: 100%;
        height: auto;
    }
    
    .guide-main-title {
        width: 100%;
        height: auto;
        font-size: 36px;
        text-align: center;
        top: 0;
    }
    
    .guide-content {
        width: 100%;
        height: auto;
    }
    
    .guide-intro-text {
        width: 100%;
        height: auto;
        top: 0;
    }
    
    .guide-conclusion .guide-paragraph {
        width: 100%;
        height: auto;
        top: 0;
    }
    
    .layout-five{
        flex-direction:column;
        gap:30px;
    }
}

/* 小于1024px的响应式样式 - 根据Figma设计 */
@media (max-width: 1024px) {
    .comprehensive-guide-section {
        width: 100%;
        max-width: 390px;
        margin: 0 auto;
        padding: 32px 0;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    .guide-container {
        width: 100%;
        max-width: 390px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 0;
    }
    
    /* Header Section - 对应Figma节点标题部分 */
    .guide-header {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;
        align-self: stretch;
        gap: 10px;
        order: 1;
    }
    
    .guide-title-section {
        width: 354px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    .guide-title-wrapper {
        width: 354px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
    }
    
    .guide-main-title {
        width: 350px;
        height: auto;
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        font-size: 24px;
        line-height: 1.2083333333333333em;
        text-align: center;
        color: #333333;
        margin: 0;
    }
    
    .guide-image-section {
        display:none;
    }
    
    /* Content Section - 对应Figma节点内容部分 */
    .guide-content {
        width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 17.41px;
        order: 2;
        margin: 0 auto;
    }
    
    .guide-intro {
        width: 100%;
        height: auto;
        display: flex;
    }
    
    .guide-intro-text {
        width: 336px;
        height: auto;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.2142857142857142em;
        color: #666666;
        margin: 0;
    }
    
    .guide-section {
        width: 100%;
        margin-bottom: 17.41px;
    }
    
    .guide-section-title {
        width: 100%;
        height:auto;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.25em;
        color: #000000;
        margin: 0 0 17.41px 0;
    }
    
    .guide-section-desc {
        width: 100%;
        height:auto;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.2142857142857142em;
        color: #666666;
        margin: 0 0 17.41px 0;
        position: relative;
    }
    
    .guide-paragraph {
        width: 100%;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.2142857142857142em;
        color: #666666;
        display: flex;
        align-items: center;
        position: relative;
    }
    
    .guide-steps {
        display: flex;
        flex-direction: column;
        gap: 17.41px;
    }
    .guide-conclusion {
        width: 100%;
    }
    
    .guide-conclusion .guide-paragraph {
        width: 100%;
        line-height: 1.2142857142857142em;
        position: relative;
    }
    
    /* 隐藏桌面端的间距元素 */
    .guide-section:empty {
        display: none;
    }
}

@media (max-width: 768px) {
    .title-section {
        margin:40px 0 5px;
        .main-title{
            font-size:32px;
        }
    }
    .comprehensive-guide-section {
        padding: 10px 20px 20px;
    }
    
    .guide-main-title {
        font-size: 28px;
        line-height: 1.4em;
    }
    
    .guide-section-title {
        font-size: 20px;
    }
    
    .guide-intro-text,
    .guide-section-desc,
    .guide-paragraph {
        font-size: 14px;
        line-height: 1.4em;
    }
    
    .guide-image {
        width: 100%;
        max-width: 300px;
        height: auto;
    }
}

@media (max-width: 480px) {
    .guide-main-title {
        font-size: 24px;
    }
    
    .guide-section-title {
        font-size: 18px;
    }
    
    .guide-intro-text,
    .guide-section-desc,
    .guide-paragraph {
        font-size: 13px;
    }
}
</style>