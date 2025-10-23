<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
        <div>
            <div class="index-banner">
                <div class="banner-text">
                    <h1>
                        <span class="title">{{ indexDetail.hero_main_before_title }}</span> {{
                            indexDetail.hero_main_after_title }}
                    </h1>
                    <div v-html="indexDetail.hero_description"></div>
                    <div class="banner-single">
                        <NuxtImg v-if="indexDetail.head_banner_images?.[0]?.banner_img?.url" :src="indexDetail.head_banner_images[0].banner_img.url" />
                    </div>
                    <!-- Figma设计的按钮容器 -->
                    <div class="banner-buttons">
                        <div class="button-primary">
                            <a href="/Products" class="btn-learn-more">
                                <span>{{ indexDetail.learn_more_products_btn_text }}</span>
                            </a>
                        </div>
                        <div class="button-secondary">
                            <a href="/About-us" class="btn-meet-us">
                                <span>{{ indexDetail.meet_us_btn_text }}</span>
                            </a>
                        </div>
                    </div>

                </div>

                <!-- Banner Machine Image for 1024px-1440px -->
                <!-- <div class="banner-machine">
                    <NuxtImg src="https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp" alt="Dinosaw CNC Wire Saw Machine" />
                </div> -->

                <div class="banner-swiper">
                    <!-- :space-between="20" -->
                    <!-- :pagination="{ clickable: true }" -->
                    <Swiper :modules="modules" :free-mode="true" :slides-per-view="1" :space-between="20" :loop="true"
                        :autoplay="{
                            delay: 0,
                            disableOnInteraction: false
                        }" :speed="5000">
                        <SwiperSlide v-for="image in indexDetail.head_banner_images" :key="image.id">
                            <NuxtImg v-if="image.banner_img?.url" :src="image.banner_img.url" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <div v-if="indexDetail.show_activity_text" class="banner-activety" :style="indexDetail.show_activity_image?.url?'background:url('+indexDetail.show_activity_image.url+') no-repeat center center':''">
                <nuxtLink :to="indexDetail.show_activity_url">
                    <div v-html="indexDetail.show_activity_text"></div>
                </nuxtLink>
            </div>
            <div class="index-part">
                <h2 class="default-title">{{ indexDetail.what_we_do_title }}</h2>
                <div class="dinosaw-text" v-html="indexDetail.what_we_do_description"></div>
            </div>



            <!-- Products Section -->
            <div class="products-section">
                <div class="products-content pc-view">
                    <Swiper :slides-per-view="1" :loop="true" :navigation="{
                        nextEl: '.products-button-next',
                        prevEl: '.products-button-prev',
                    }" :modules="modules" class="product-swiper">
                        <SwiperSlide v-for="(group, groupIndex) in groupedProducts" :key="groupIndex">
                            
                            <div class="products-grid">
                                <div v-for="product in group" :key="product.id" class="product-card">
                                    <NuxtLink :to="product.link" target="_blank">
                                    <div class="tip" :class="product.tip?'':'visible-hidden'">
                                        <svg width="20" height="20" viewBox="0 0 22 22" id="svg11753066115">
                                            <g>
                                                <path d="M 0 22 L 0 0 L 22 0 L 22 22 Z" fill="transparent"></path>
                                                <path
                                                    d="M 21.313 11 C 21.313 11.88 20.231 12.605 20.015 13.417 C 19.791 14.255 20.357 15.424 19.932 16.158 C 19.501 16.904 18.203 16.993 17.598 17.598 C 16.993 18.203 16.904 19.501 16.158 19.932 C 15.424 20.357 14.255 19.791 13.417 20.015 C 12.605 20.231 11.88 21.313 11 21.313 C 10.12 21.313 9.395 20.231 8.583 20.015 C 7.745 19.791 6.576 20.357 5.842 19.932 C 5.096 19.501 5.007 18.203 4.402 17.598 C 3.797 16.993 2.499 16.904 2.068 16.158 C 1.643 15.424 2.209 14.255 1.985 13.417 C 1.769 12.605 0.688 11.88 0.688 11 C 0.688 10.12 1.769 9.395 1.985 8.583 C 2.209 7.745 1.643 6.576 2.068 5.842 C 2.499 5.096 3.797 5.007 4.402 4.402 C 5.007 3.797 5.096 2.499 5.842 2.068 C 6.576 1.643 7.745 2.209 8.583 1.985 C 9.395 1.769 10.12 0.688 11 0.688 C 11.88 0.688 12.605 1.769 13.417 1.985 C 14.255 2.209 15.424 1.643 16.158 2.068 C 16.904 2.499 16.993 3.797 17.598 4.402 C 18.203 5.007 19.501 5.096 19.932 5.842 C 20.357 6.576 19.791 7.745 20.015 8.583 C 20.231 9.395 21.313 10.12 21.313 11 Z"
                                                    fill="var(--token-79961501-ba44-4ee3-8c49-6bc6cf488241, rgb(67, 157, 241)) /* {&quot;name&quot;:&quot;1&quot;} */">
                                                </path>
                                                <path
                                                    d="M 13.98 7.927 L 10.055 11.853 L 8.02 9.819 C 7.578 9.378 6.861 9.378 6.42 9.819 C 5.978 10.261 5.978 10.978 6.42 11.419 L 9.274 14.274 C 9.704 14.704 10.402 14.704 10.832 14.274 L 15.579 9.527 C 16.02 9.085 16.02 8.369 15.579 7.927 C 15.137 7.485 14.422 7.485 13.98 7.927 Z"
                                                    fill="rgb(255, 255, 255)"></path>
                                            </g>
                                        </svg>
                                        <span>{{ product.tip }}</span>
                                    </div>
                                    <h3 v-html="product.title"></h3>
                                    <NuxtImg v-if="product.image&&product.image.url" :src="product.image.url" />
                                    <p>{{ product.materials }}</p>
                                    <!-- 新增的圆形图片展示区域 -->
                                    <div class="features-section">
                                        <div class="features-container" v-if="product.columnList" >
                                            <template v-for="(item, j) in product.columnList.hero_circle_background_images" :key="j">
                                                <div class="feature-item" v-if="j < 4">
                                                    <div class="feature-image" v-if="item.banner_img">
                                                        <NuxtImg :src="item.banner_img.url"
                                                            />
                                                    </div>
                                                    <div class="feature-label">{{ item.banner_text }}</div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <a class="product-button">{{indexDetail.discover_more_btn_text}}</a>
                                    </NuxtLink>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    </Swiper>

                    <!-- Products Navigation Arrows -->
                    <div class="products-button-prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="products-button-next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="products-content mobile-view">
                    <div class="product-swiper"> 
                 
                     <div class="products-grid">
                                
                                            
                    <template v-for="(product, index) in productsList" :key="index">
                        <div class="product-card">
                                    <NuxtLink :to="product.link" target="_blank">
                                    <div class="tip" :class="product.tip?'':'visible-hidden'">
                                        <svg width="20" height="20" viewBox="0 0 22 22" id="svg11753066115">
                                            <g>
                                                <path d="M 0 22 L 0 0 L 22 0 L 22 22 Z" fill="transparent"></path>
                                                <path
                                                    d="M 21.313 11 C 21.313 11.88 20.231 12.605 20.015 13.417 C 19.791 14.255 20.357 15.424 19.932 16.158 C 19.501 16.904 18.203 16.993 17.598 17.598 C 16.993 18.203 16.904 19.501 16.158 19.932 C 15.424 20.357 14.255 19.791 13.417 20.015 C 12.605 20.231 11.88 21.313 11 21.313 C 10.12 21.313 9.395 20.231 8.583 20.015 C 7.745 19.791 6.576 20.357 5.842 19.932 C 5.096 19.501 5.007 18.203 4.402 17.598 C 3.797 16.993 2.499 16.904 2.068 16.158 C 1.643 15.424 2.209 14.255 1.985 13.417 C 1.769 12.605 0.688 11.88 0.688 11 C 0.688 10.12 1.769 9.395 1.985 8.583 C 2.209 7.745 1.643 6.576 2.068 5.842 C 2.499 5.096 3.797 5.007 4.402 4.402 C 5.007 3.797 5.096 2.499 5.842 2.068 C 6.576 1.643 7.745 2.209 8.583 1.985 C 9.395 1.769 10.12 0.688 11 0.688 C 11.88 0.688 12.605 1.769 13.417 1.985 C 14.255 2.209 15.424 1.643 16.158 2.068 C 16.904 2.499 16.993 3.797 17.598 4.402 C 18.203 5.007 19.501 5.096 19.932 5.842 C 20.357 6.576 19.791 7.745 20.015 8.583 C 20.231 9.395 21.313 10.12 21.313 11 Z"
                                                    fill="var(--token-79961501-ba44-4ee3-8c49-6bc6cf488241, rgb(67, 157, 241)) /* {&quot;name&quot;:&quot;1&quot;} */">
                                                </path>
                                                <path
                                                    d="M 13.98 7.927 L 10.055 11.853 L 8.02 9.819 C 7.578 9.378 6.861 9.378 6.42 9.819 C 5.978 10.261 5.978 10.978 6.42 11.419 L 9.274 14.274 C 9.704 14.704 10.402 14.704 10.832 14.274 L 15.579 9.527 C 16.02 9.085 16.02 8.369 15.579 7.927 C 15.137 7.485 14.422 7.485 13.98 7.927 Z"
                                                    fill="rgb(255, 255, 255)"></path>
                                            </g>
                                        </svg>
                                        <span>{{ product.tip }}</span>
                                    </div>
                                    <h3 v-html="product.title"></h3>
                                    <NuxtImg v-if="product.image&&product.image.url" :src="product.image.url" />
                                    <p>{{ product.materials }}</p>
                                    <!-- 新增的圆形图片展示区域 -->
                                    <div class="features-section">
                                        <div class="features-container" v-if="product.columnList" >
                                            <template v-for="(item, j) in product.columnList.hero_circle_background_images" :key="j">
                                                <div class="feature-item" v-if="j < 4">
                                                    <div class="feature-image" v-if="item.banner_img">
                                                        <NuxtImg :src="item.banner_img.url"
                                                            />
                                                    </div>
                                                    <div class="feature-label">{{ item.banner_text }}</div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <a class="product-button">{{indexDetail.discover_more_btn_text}}</a>
                                    </NuxtLink>
                                </div>
                    </template>
                    </div>
                    </div>
                    <!-- Products Navigation Arrows -->
                    <div class="products-button-prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="products-button-next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Our Capabilities & Presence Section -->
            <section class="capabilities-section">
                <div class="capabilities-container">
                    <div class="capabilities-header">
                        <h2 class="capabilities-title">{{ indexDetail.our_capabilities_presence_title }}</h2>
                    </div>

                    <div class="capabilities-carousel">
                        <Swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000 }" :navigation="{
                            nextEl: '.capabilities-button-next',
                            prevEl: '.capabilities-button-prev',
                        }" :pagination="{
                            el: '.capabilities-pagination',
                            clickable: true,
                        }" :modules="modules" class="capabilities-swiper">
                            <SwiperSlide v-for="(num) in 4" :key="num">
                                <div class="capability-slide">
                                    <div class="capability-image">
                                        <NuxtImg
                                            v-if="indexDetail[`our_capabilities_presence_banner_${num}_image`]?.url"
                                            :src="indexDetail[`our_capabilities_presence_banner_${num}_image`].url" />
                                    </div>
                                    <div class="capability-content" :class="'capability-content-' + (num - 1)">
                                        <!-- Achievements Header -->
                                        <div class="achievements-header">
                                            <h2 class="achievements-title">{{
                                                indexDetail[`our_capabilities_presence_banner_${num}_title`] }}</h2>
                                        </div>

                                        <!-- Achievement Items -->
                                        <div class="achievement-items">
                                            <div class="achievement-item">
                                                <div class="achievement-icon">
                                                    <NuxtImg v-if="num == 1"
                                                        src="https://framerusercontent.com/images/xoGVNejjgAGaSlUX1bMECmG31io.webp" />
                                                    <NuxtImg v-if="num == 2"
                                                        src="https://framerusercontent.com/images/QDBUwmDJVuYtV8yYKwuDhyFZm4.webp" />
                                                    <NuxtImg v-if="num == 3"
                                                        src="https://framerusercontent.com/images/a0VTve0ozqUp4ydiH2LhbXxpFk.webp" />
                                                    <NuxtImg v-if="num == 4"
                                                        src="https://framerusercontent.com/images/iLqxZDIinbYNiaH60YjXleFrM.webp" />
                                                </div>
                                                <div class="achievement-text" v-if="num != 4">
                                                    <p>{{
                                                        indexDetail[`our_capabilities_presence_banner_${num}_content_one`]
                                                        }}</p>
                                                </div>
                                                <div class="achievement-text" v-else>
                                                    <p>
                                                        <span class="bold">{{
                                                            indexDetail.our_capabilities_presence_banner_4_content_before_one
                                                            }}</span>{{
                                                                indexDetail.our_capabilities_presence_banner_4_content_after_one
                                                        }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="achievement-item">
                                                <div class="achievement-icon">
                                                    <NuxtImg v-if="num == 1"
                                                        src="https://framerusercontent.com/images/qpNN6TQEZVtVKhOUiWz4VlquVKk.webp" />
                                                    <NuxtImg v-if="num == 2"
                                                        src="https://framerusercontent.com/images/iLqxZDIinbYNiaH60YjXleFrM.webp" />
                                                    <NuxtImg v-if="num == 3"
                                                        src="https://framerusercontent.com/images/Vy8HBxy08u8QLJK2Ba8RMv8zzI0.webp" />
                                                    <NuxtImg v-if="num == 4"
                                                        src="https://framerusercontent.com/images/MVf2W9AQ98rRTyUfKjyE6nkxNxs.webp" />
                                                </div>
                                                <div class="achievement-text" v-if="num != 4">
                                                    <p>{{
                                                        indexDetail[`our_capabilities_presence_banner_${num}_content_two`]
                                                        }}</p>
                                                </div>
                                                <div class="achievement-text" v-else>
                                                    <p>
                                                        <span class="bold">{{
                                                            indexDetail.our_capabilities_presence_banner_4_content_before_two
                                                            }}</span>{{
                                                                indexDetail.our_capabilities_presence_banner_4_content_after_two
                                                        }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="achievement-item">
                                                <div class="achievement-icon">
                                                    <NuxtImg v-if="num == 1"
                                                        src="https://framerusercontent.com/images/F5tURIf7d7cBnIxEUvSc86BA1k.webp" />
                                                    <NuxtImg v-if="num == 2"
                                                        src="https://framerusercontent.com/images/F5tURIf7d7cBnIxEUvSc86BA1k.webp" />
                                                    <NuxtImg v-if="num == 3"
                                                        src="https://framerusercontent.com/images/xoGVNejjgAGaSlUX1bMECmG31io.webp" />
                                                    <NuxtImg v-if="num == 4"
                                                        src="https://framerusercontent.com/images/qpNN6TQEZVtVKhOUiWz4VlquVKk.webp" />
                                                </div>
                                                <div class="achievement-text" v-if="num != 4">
                                                    <p>{{
                                                        indexDetail[`our_capabilities_presence_banner_${num}_content_three`]
                                                        }}</p>
                                                </div>
                                                <div class="achievement-text" v-else>
                                                    <p>
                                                        <span class="bold">{{
                                                            indexDetail.our_capabilities_presence_banner_4_content_before_three
                                                            }}</span>{{
                                                                indexDetail.our_capabilities_presence_banner_4_content_after_three
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Action Buttons -->
                                        <div class="achievement-actions">
                                            <a :href="indexDetail[`our_capabilities_presence_banner_${num}_left_btn_url`]" class="btn-primary" target="_blank">{{
                                                indexDetail[`our_capabilities_presence_banner_${num}_left_btn_text`]
                                                }}</a>
                                            <a :href="indexDetail[`our_capabilities_presence_banner_${num}_right_btn_url`]" class="btn-secondary" target="_blank">
                                                {{ indexDetail[`our_capabilities_presence_banner_${num}_right_btn_text`] }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <!-- Navigation Arrows -->
                        <div class="capabilities-button-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="capabilities-button-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>

                        <!-- Pagination Dots -->
                        <div class="capabilities-pagination">
                            <div class="swiper-pagination-bullet" v-for="(i) in 4" :key="i"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- What You Need Section -->
            <section class="what-you-need-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">{{ indexDetail.what_you_need_title }}</h2>
                        <div class="section-description" v-html="indexDetail.what_you_need_description"></div>
                    </div>

                    <div class="blog-cards-container" ref="blogCardsContainer">
                        <div class="blog-cards-grid" ref="blogCardsGrid">
                            <!-- Blog Card 1 -->
                            <div class="blog-card" v-for="(item, i) in indexDetail.what_you_need_blogs" :key="i">
                                <div class="blog-image">
                                    <NuxtImg :src="item.first_image_url"
                                      ></NuxtImg>
                                </div>
                                <div class="blog-content">
                                    <h3 class="blog-title">{{ item.title }}</h3>
                                    <div class="blog-date">{{ item.date }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Navigation Buttons for 1024-1440px -->
                        <div class="blog-navigation-prev" @click="scrollBlogCards('prev')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="blog-navigation-next" @click="scrollBlogCards('next')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <GetEasySolution :contentDetail="contentDetail" />

            <!-- Your Guide to Choosing Machines Section -->
            <section class="guide-section">
                <div class="container">
                    <div class="guide-header">
                        <h2 class="guide-title">{{ indexDetail.your_guide_to_choos_title }}</h2>
                        <div class="guide-description" v-html="indexDetail.your_guide_to_choos_description"></div>
                    </div>

                    <div class="guide-steps">
                        <!-- Step 1: See Best Practice Cases -->
                        <div class="step-card">
                            <div class="step-overlay">
                                <div class="step-content">
                                    <h3 class="step-title">{{ indexDetail.your_guide_to_choos_pannel_title_1 }}</h3>
                                    <p class="step-description"
                                        v-html="indexDetail.your_guide_to_choos_pannel_description_1"></p>
                                </div>
                            </div>
                            <div class="step-background">
                                <NuxtImg v-if="indexDetail.your_guide_to_choos_pannel_image_1?.url" :src="indexDetail.your_guide_to_choos_pannel_image_1.url" />
                            </div>
                        </div>

                        <!-- Step 2: Dive Into the Details -->
                        <div class="step-card">
                            <div class="step-overlay">
                                <div class="step-content">
                                    <h3 class="step-title">{{ indexDetail.your_guide_to_choos_pannel_title_2 }}</h3>
                                    <p class="step-description"
                                        v-html="indexDetail.your_guide_to_choos_pannel_description_2"></p>
                                </div>
                            </div>
                            <div class="step-background">
                                <NuxtImg v-if="indexDetail.your_guide_to_choos_pannel_image_2?.url" :src="indexDetail.your_guide_to_choos_pannel_image_2.url" />
                            </div>
                        </div>

                        <!-- Step 3: Get A Free Quote -->
                        <div class="step-card">
                            <div class="step-overlay">
                                <div class="step-content">
                                    <h3 class="step-title">{{ indexDetail.your_guide_to_choos_pannel_title_3 }}</h3>
                                    <p class="step-description"
                                        v-html="indexDetail.your_guide_to_choos_pannel_description_3"></p>
                                </div>
                            </div>
                            <div class="step-background">
                                <NuxtImg v-if="indexDetail.your_guide_to_choos_pannel_image_3?.url" :src="indexDetail.your_guide_to_choos_pannel_image_3.url" />
                            </div>
                        </div>

                        <!-- Step 4: Enjoy Full Support -->
                        <div class="step-card">
                            <div class="step-overlay">
                                <div class="step-content">
                                    <h3 class="step-title">{{ indexDetail.your_guide_to_choos_pannel_title_4 }}</h3>
                                    <p class="step-description"
                                        v-html="indexDetail.your_guide_to_choos_pannel_description_4"></p>
                                </div>
                            </div>
                            <div class="step-background">
                                <NuxtImg v-if="indexDetail.your_guide_to_choos_pannel_image_4?.url" :src="indexDetail.your_guide_to_choos_pannel_image_4.url" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Customer Favorites Section -->
            <section class="customer-favorites-section">
                <div class="container">
                    <!-- Section Header -->
                    <div class="section-header">
                        <h2 class="section-title">{{ indexDetail.customer_favorites_title }}</h2>
                        <div class="section-description" v-html="indexDetail.customer_favorites_description"></div>
                    </div>

                    <!-- Product Categories -->
                    <div class="product-categories">
                        <!-- Flagship Tech Category -->
                        <div class="category-variant">
                            <div class="category-header">
                                <div class="category-background">
                                    <div class="category-container">
                                        <h3 class="category-title">{{ indexDetail.flagship_tech_title }}</h3>
                                    </div>
                                    <div class="category-line"></div>
                                </div>
                            </div>
                            <!-- 动态产品图片展示区域 -->
                            <div class="dynamic-product-section" v-if="indexDetail.flagship_tech_products && indexDetail.flagship_tech_products.length">
                                <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                                <div v-if="indexDetail.flagship_tech_products.length === 1" class="layout-single">
                                    <NuxtLink :to="'/Products/'+indexDetail.flagship_tech_products[0].url">
                                        <div class="single-container">
                                            <div class="single-link">
                                                <div class="single-image">
                                                    <NuxtImg :src="indexDetail.flagship_tech_products[0].first_image_url" />
                                                </div>
                                                <div class="single-content">
                                                    <div class="single-text-section">
                                                        <div class="single-title-wrapper">
                                                            <h3 class="single-title">{{ indexDetail.flagship_tech_products[0].h1_page_inner_title }}</h3>
                                                        </div>
                                                        <div class="single-date-wrapper" v-if="indexDetail.flagship_tech_products[0].date">
                                                            <p class="single-date">{{ indexDetail.flagship_tech_products[0].date }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="single-button" v-if="indexDetail.flagship_tech_products[0].buttonText">
                                                        <div class="single-button-content">
                                                            <span class="button-text">{{ indexDetail.flagship_tech_products[0].buttonText }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </div>
                                
                                <!-- 2张图片布局：左右布局 -->
                                <div v-else-if="indexDetail.flagship_tech_products.length === 2" class="layout-double">
                                    
                                    <div 
                                        v-for="(product, index) in indexDetail.flagship_tech_products" 
                                        :key="index"
                                        class="double-item"
                                        :class="product.layout || 'vertical'"
                                    >
                                        
                                            <!-- 垂直布局：上面图片，下面标题 -->
                                            <template v-if="!product.layout || product.layout === 'vertical'">
                                                <div class="double-image">
                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                                </div>
                                                <div class="double-content">
                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="double-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
                                                </div>
                                            </template>
                                            
                                            <!-- 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 -->
                                            <template v-else-if="product.layout === 'horizontal'">
                                                <div class="horizontal-container">
                                                    <div class="horizontal-link">
                                                        <div class="horizontal-image">
                                                            <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                                        </div>
                                                        <div class="horizontal-content">
                                                            <div class="horizontal-text-section">
                                                                <div class="horizontal-title-wrapper">
                                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="horizontal-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
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
                                </div>
                                
                                <!-- 4张图片布局：2x2网格 -->
                                <div v-else-if="indexDetail.flagship_tech_products.length === 4" class="layout-quad">
                                    <div 
                                        v-for="(product, index) in indexDetail.flagship_tech_products" 
                                        :key="index"
                                        class="quad-item"
                                    >
                                        
                                            <div class="quad-image">
                                                <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                            </div>
                                            <div class="quad-content">
                                                <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="quad-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
                                            </div>
                                        
                                    </div>
                                </div>
                                
                                <!-- 5张图片布局：左边1个大图，右边4个小图 -->
                                <div v-else-if="indexDetail.flagship_tech_products.length === 5" class="layout-five">
                                    
                                    <div class="five-left">
                                        
                                        <div class="five-main-image">
                                            <NuxtLink :to="'/Products/'+indexDetail.flagship_tech_products[0].url" target="_blank"><NuxtImg :src="indexDetail.flagship_tech_products[0].first_image_url" /></NuxtLink>
                                        </div>
                                        <NuxtLink :to="'/Products/'+indexDetail.flagship_tech_products[0].url" target="_blank">
                                        <div class="five-main-content">
                                             
                                                <h3 class="five-main-title">{{ indexDetail.flagship_tech_products[0].h1_page_inner_title }}</h3>
                                                <p class="five-main-date" v-if="indexDetail.flagship_tech_products[0].date">{{ indexDetail.flagship_tech_products[0].date }}</p>
                                                <div class="five-main-info" v-if="indexDetail.flagship_tech_products[0].subtitle">
                                                   <h3 class="five-subtitle">{{ indexDetail.flagship_roducts_2025 }}</h3>
                                                    <p class="five-description" v-if="indexDetail.flagship_products_2025_description">{{ indexDetail.flagship_products_2025_description }}</p>
                                                    <button class="buy-now-btn">{{indexDetail.buy_now_text}}</button>
                                                </div>
                                        </div>
                                        </NuxtLink>
                                    </div>
                                   
                                    <div class="five-right">
                                        <div 
                                            v-for="(product, index) in indexDetail.flagship_tech_products.slice(1)" 
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

                        <!-- Mature Products Category -->
                        <div class="category-variant">
                            <div class="category-header">
                                <div class="category-background">
                                    <div class="category-container">
                                        <h3 class="category-title">{{ indexDetail.mature_products_title }}</h3>
                                    </div>
                                    <div class="category-line"></div>
                                </div>
                            </div>
                            <!-- 动态产品图片展示区域 -->
                            <div class="dynamic-product-section" v-if="indexDetail.mature_products_products && indexDetail.mature_products_products.length">
                                <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                                <div v-if="indexDetail.mature_products_products.length === 1" class="layout-single">
                                    <NuxtLink :to="'/Products/'+indexDetail.mature_products_products[0].url">
                                        <div class="single-container">
                                            <div class="single-link">
                                                <div class="single-image">
                                                    <NuxtImg :src="indexDetail.mature_products_products[0].first_image_url" />
                                                </div>
                                                <div class="single-content">
                                                    <div class="single-text-section">
                                                        <div class="single-title-wrapper">
                                                            <h3 class="single-title">{{ indexDetail.mature_products_products[0].h1_page_inner_title }}</h3>
                                                        </div>
                                                        <div class="single-date-wrapper" v-if="indexDetail.mature_products_products[0].date">
                                                            <p class="single-date">{{ indexDetail.mature_products_products[0].date }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="single-button" v-if="indexDetail.mature_products_products[0].buttonText">
                                                        <div class="single-button-content">
                                                            <span class="button-text">{{ indexDetail.mature_products_products[0].buttonText }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </div>
                                
                                <!-- 2张图片布局：左右布局 -->
                                <div v-else-if="indexDetail.mature_products_products.length === 2" class="layout-double">
                                    
                                    <div 
                                        v-for="(product, index) in indexDetail.mature_products_products" 
                                        :key="index"
                                        class="double-item"
                                        :class="product.layout || 'vertical'"
                                    >
                                        
                                            <!-- 垂直布局：上面图片，下面标题 -->
                                            <template v-if="!product.layout || product.layout === 'vertical'">
                                                <div class="double-image">
                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                                </div>
                                                <div class="double-content">
                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="double-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
                                                </div>
                                            </template>
                                            
                                            <!-- 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 -->
                                            <template v-else-if="product.layout === 'horizontal'">
                                                <div class="horizontal-container">
                                                    <div class="horizontal-link">
                                                        <div class="horizontal-image">
                                                            <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                                        </div>
                                                        <div class="horizontal-content">
                                                            <div class="horizontal-text-section">
                                                                <div class="horizontal-title-wrapper">
                                                                    <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="horizontal-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
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
                                </div>
                                
                                <!-- 4张图片布局：2x2网格 -->
                                <div v-else-if="indexDetail.mature_products_products.length === 4" class="layout-quad">
                                    <div 
                                        v-for="(product, index) in indexDetail.mature_products_products" 
                                        :key="index"
                                        class="quad-item"
                                    >
                                        
                                            <div class="quad-image">
                                                <NuxtLink :to="'/Products/'+product.url" target="_blank"><NuxtImg :src="product.first_image_url" /></NuxtLink>
                                            </div>
                                            <div class="quad-content">
                                                <NuxtLink :to="'/Products/'+product.url" target="_blank"><h3 class="quad-title">{{ product.h1_page_inner_title }}</h3></NuxtLink>
                                            </div>
                                        
                                    </div>
                                </div>
                                
                                <!-- 5张图片布局：左边1个大图，右边4个小图 -->
                                <div v-else-if="indexDetail.mature_products_products.length === 5" class="layout-five">
                                    
                                    <div class="five-left">
                                        
                                        <div class="five-main-image">
                                            <NuxtLink :to="'/Products/'+indexDetail.mature_products_products[0].url" target="_blank"><NuxtImg :src="indexDetail.mature_products_products[0].first_image_url" /></NuxtLink>
                                        </div>
                                        <div class="five-main-content">
                                             <NuxtLink :to="'/Products/'+indexDetail.mature_products_products[0].url" target="_blank">
                                                <h3 class="five-main-title">{{ indexDetail.mature_products_products[0].h1_page_inner_title }}</h3>
                                                <p class="five-main-date" v-if="indexDetail.mature_products_products[0].date">{{ indexDetail.mature_products_products[0].date }}</p>
                                                <div class="five-main-info" v-if="indexDetail.flagship_roducts_2025">
                                                    <h3 class="five-subtitle">{{ indexDetail.flagship_roducts_2025 }}</h3>
                                                    <p class="five-description" v-if="indexDetail.flagship_products_2025_description">{{ indexDetail.flagship_products_2025_description }}</p>
                                                    <button class="buy-now-btn">{{indexDetail.buy_now_text}}</button>
                                                    <!-- <p class="five-description" v-if="indexDetail.mature_products_products[0].description">{{ indexDetail.mature_products_products[0].description }}</p> -->
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                   
                                    <div class="five-right">
                                        <div 
                                            v-for="(product, index) in indexDetail.mature_products_products.slice(1)" 
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

                        <!-- Smart Value Category -->
                        <div class="category-variant">
                            <div class="category-header">
                                <div class="category-background">
                                    <div class="category-container">
                                        <h3 class="category-title">{{ indexDetail.smart_value_title }}</h3>
                                    </div>
                                    <div class="category-line"></div>
                                </div>
                            </div>
                            <!-- 动态产品图片展示区域 -->
                            <div class="dynamic-product-section" v-if="indexDetail.smart_value_products && indexDetail.smart_value_products.length">
                                <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                                <div v-if="indexDetail.smart_value_products.length === 1" class="layout-single">
                                    <NuxtLink :to="'/Products/'+indexDetail.smart_value_products[0].url">
                                        <div class="single-container">
                                            <div class="single-link">
                                                <div class="single-image">
                                                    <NuxtImg :src="indexDetail.smart_value_products[0].first_image_url" />
                                                </div>
                                                <div class="single-content">
                                                    <div class="single-text-section">
                                                        <div class="single-title-wrapper">
                                                            <h3 class="single-title">{{ indexDetail.smart_value_products[0].h1_page_inner_title }}</h3>
                                                        </div>
                                                        <div class="single-date-wrapper" v-if="indexDetail.smart_value_products[0].date">
                                                            <p class="single-date">{{ indexDetail.smart_value_products[0].date }}</p>
                                                        </div>
                                                    </div>
                                                    <div class="single-button" v-if="indexDetail.smart_value_products[0].buttonText">
                                                        <div class="single-button-content">
                                                            <span class="button-text">{{ indexDetail.smart_value_products[0].buttonText }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </div>
                                
                                <!-- 2张图片布局：左右布局 -->
                                <div v-else-if="indexDetail.smart_value_products.length === 2" class="layout-double">
                                    <template v-for="(product, index) in indexDetail.smart_value_products" 
                                        :key="index">
                                        <NuxtLink :to="'/Products/'+product.url" target="_blank">
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
                                <div v-else-if="indexDetail.smart_value_products.length === 4" class="layout-quad">
                                    <template v-for="(product, index) in indexDetail.smart_value_products" 
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
                                <div v-else-if="indexDetail.smart_value_products.length === 5" class="layout-five">
                                    
                                    <div class="five-left">
                                        
                                        <div class="five-main-image">
                                            <NuxtLink :to="'/Products/'+indexDetail.smart_value_products[0].url" target="_blank"><NuxtImg :src="indexDetail.smart_value_products[0].first_image_url" /></NuxtLink>
                                        </div>
                                        <div class="five-main-content">
                                             <NuxtLink :to="'/Products/'+indexDetail.smart_value_products[0].url" target="_blank">
                                                <h3 class="five-main-title">{{ indexDetail.smart_value_products[0].h1_page_inner_title }}</h3>
                                                <p class="five-main-date" v-if="indexDetail.smart_value_products[0].date">{{ indexDetail.smart_value_products[0].date }}</p>
                                                <div class="five-main-info" v-if="indexDetail.flagship_roducts_2025">
                                                    <h3 class="five-subtitle">{{ indexDetail.flagship_roducts_2025 }}</h3>
                                                    <p class="five-description" v-if="indexDetail.flagship_products_2025_description">{{ indexDetail.flagship_products_2025_description }}</p>
                                                    <button class="buy-now-btn">{{indexDetail.buy_now_text}}</button>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                   
                                    <div class="five-right">
                                        <div 
                                            v-for="(product, index) in indexDetail.smart_value_products.slice(1)" 
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

                    <!-- Bottom Section -->
                    <div class="bottom-section">
                        <div class="bottom-container">
                            <div class="bottom-title">
                                <div class="title-part">
                                    <span class="title-text">{{ indexDetail.continuously_text }}</span>
                                </div>
                                <span class="title-highlight" ref="typewriterText">{{ currentText }}</span>
                                <div class="title-part">
                                    <span class="title-text">{{ indexDetail.for_user_text }}</span>
                                </div>
                            </div>
                            <div class="bottom-description">
                                <div class="description-container" v-html="indexDetail.continuously_for_user_description"></div>
                            </div>
                            <div class="bottom-cta">
                                <div class="cta-button">
                                    <div class="cta-container">
                                        <div class="cta-content">
                                            <NuxtLink to="/contact" target="_blank">
                                                <span class="cta-text">{{ indexDetail.get_a_auote_btn_text }}</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Customer Testimonials Section -->
            <section class="testimonials-section">
                <div class="testimonials-background"></div>
                <div class="testimonials-container">
                    <div class="testimonials-header">
                        <h2>{{ indexDetail.what_our_customers_say_title }}</h2>
                        <div class="testimonials-description" v-html="indexDetail.what_our_customers_say_description"></div>
                    </div>

                    <div class="testimonials-cards">
                        <!-- Testimonial Card 1 -->
                        <div class="testimonial-card">
                            <div class="testimonial-header">
                                <div class="customer-info">
                                    <div class="customer-avatar">
                                        <NuxtImg v-if="indexDetail.what_our_customers_say_panel_1_head_pic" :src="indexDetail.what_our_customers_say_panel_1_head_pic" />
                                        <!-- Placeholder for customer image -->
                                    </div>
                                    <div class="customer-details">
                                        <div class="customer-name-section">
                                            <h4>{{ indexDetail.what_our_customers_say_panel_1_user_name }}</h4>
                                            <div class="company-flag">
                                                 <NuxtImg v-if="indexDetail.what_our_customers_say_panel_1_country_icon" :src="indexDetail.what_our_customers_say_panel_1_country_icon" />
                                            </div>
                                        </div>
                                        <p class="customer-title">{{ indexDetail.what_our_customers_say_panel_1_position }}</p>
                                    </div>
                                </div>
                                <div class="divider"></div>
                            </div>

                            <div class="testimonial-content">
                                <div class="testimonial-stats">
                                    <div class="stat-item">
                                        <div class="stat-value">{{ indexDetail.what_our_customers_say_panel_1_advantage_data }}</div>
                                        <div class="stat-label">{{ indexDetail.what_our_customers_say_panel_1_advantage_description }}</div>
                                    </div>
                                    <div class="material-icon">
                                        <NuxtImg src="https://framerusercontent.com/images/4lSnkyg8nN5Oax5Ygirc0zHLqIU.webp?scale-down-to=512" />
                                    </div>
                                </div>

                                <div class="testimonial-text" v-html="indexDetail.what_our_customers_say_panel_1_product_description"></div>
                            </div>
                        </div>

                        <!-- Testimonial Card 2 -->
                        <div class="testimonial-card">
                            <div class="testimonial-header">
                                <div class="customer-info">
                                    <div class="customer-avatar">
                                        <NuxtImg v-if="indexDetail.what_our_customers_say_panel_2_head_pic" :src="indexDetail.what_our_customers_say_panel_2_head_pic" />
                                        <!-- Placeholder for customer image -->
                                    </div>
                                    <div class="customer-details">
                                        <div class="customer-name-section">
                                            <h4>{{ indexDetail.what_our_customers_say_panel_2_user_name }}</h4>
                                            <div class="company-flag">
                                                 <NuxtImg v-if="indexDetail.what_our_customers_say_panel_2_country_icon" :src="indexDetail.what_our_customers_say_panel_2_country_icon" />
                                            </div>
                                        </div>
                                        <p class="customer-title">{{ indexDetail.what_our_customers_say_panel_2_position }}</p>
                                    </div>
                                </div>
                                <div class="divider"></div>
                            </div>

                            <div class="testimonial-content">
                                <div class="testimonial-stats">
                                    <div class="stat-item">
                                        <div class="stat-value">{{ indexDetail.what_our_customers_say_panel_2_advantage_data }}</div>
                                        <div class="stat-label">{{ indexDetail.what_our_customers_say_panel_2_advantage_description }}</div>
                                    </div>
                                    <div class="material-icon">
                                        <NuxtImg src="https://framerusercontent.com/images/n2yDCQkYZTICvRg5HV7GhrbTM.webp" />
                                    </div>
                                </div>

                                <div class="testimonial-text" v-html="indexDetail.what_our_customers_say_panel_2_product_description"></div>
                            </div>
                        </div>

                        <!-- Testimonial Card 3 -->
                        <div class="testimonial-card">
                            <div class="testimonial-header">
                                <div class="customer-info">
                                    <div class="customer-avatar">
                                         <NuxtImg v-if="indexDetail.what_our_customers_say_panel_3_head_pic" :src="indexDetail.what_our_customers_say_panel_3_head_pic" />
                                    </div>
                                    <div class="customer-details">
                                        <div class="customer-name-section">
                                            <h4>{{ indexDetail.what_our_customers_say_panel_3_user_name }}</h4>
                                            <div class="company-flag">
                                                 <NuxtImg v-if="indexDetail.what_our_customers_say_panel_3_country_icon" :src="indexDetail.what_our_customers_say_panel_3_country_icon" />
                                            </div>
                                        </div>
                                        <p class="customer-title">{{ indexDetail.what_our_customers_say_panel_3_position }}</p>
                                    </div>
                                </div>
                                <div class="divider"></div>
                            </div>

                            <div class="testimonial-content">
                                <div class="testimonial-stats">
                                    <div class="stat-item">
                                        <div class="stat-value">{{ indexDetail.what_our_customers_say_panel_3_advantage_data }}</div>
                                        <div class="stat-label">{{ indexDetail.what_our_customers_say_panel_3_advantage_description }}</div>
                                    </div>
                                    <div class="material-icon-side">
                                        <NuxtImg src="https://framerusercontent.com/images/RrPj6zcL1pUWUtZuRN7dx7fU0jg.webp" />
                                    </div>
                                </div>

                                <div class="testimonial-text" v-html="indexDetail.what_our_customers_say_panel_3_product_description"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Business Partners Section -->
                <section class="partners-section">
                    <div class="partners-container">
                        <div class="partners-header">
                            <h2>{{ indexDetail.business_partners_title }}</h2>
                            <div class="partners-description" v-html="indexDetail.business_partners_description"></div>
                        </div>

                        <div class="partners-logos">
                            <div class="partner-logo">
                                <!-- 中核集团 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                    <NuxtImg src="https://framerusercontent.com/images/FpnleAPIN4IV2mdwRpgLUNOF6w.png"/>
                                </div>
                            </div>
                            <div class="partner-logo">
                                <!-- 中科院 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                <NuxtImg src="https://framerusercontent.com/images/rInXR99BqGLsBVSIPaPJptiTDg.png"/>
                            </div>
                            </div>
                            <div class="partner-logo">
                                <!-- 中国铁建 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                    <NuxtImg src="https://framerusercontent.com/images/c70mHQa1rmYYq4W7A8C4llFHLg.png"/>
                                </div>
                            </div>
                            <div class="partner-logo">
                                <!-- 紫金矿业 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                    <NuxtImg src="https://framerusercontent.com/images/np5kOQAu61pepHdnoZ7YJErn3I.png"/>
                                </div>
                            </div>
                            <div class="partner-logo">
                                <!-- 太平洋石英 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                    <NuxtImg src="https://framerusercontent.com/images/P5O06HfmGvkisFNWLPp8TYR4o4.png"/>
                                </div>
                            </div>
                            <div class="partner-logo">
                                <!-- 圣戈班 logo placeholder -->
                                <div class="logo-placeholder"
                                    style="width: 110px; height: 51px; background: #fff; border-radius: 4px;">
                                    <NuxtImg src="https://framerusercontent.com/images/dXyve2roEON0UKlKgJTigYaqmY.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper'
import qs from 'qs'
import 'swiper/css'
import 'swiper/css/free-mode' // ✅ 引入 free-mode 的样式
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()
const indexDetail = ref({})
// 定义capabilities数据
// +'&populate=all'

// 构建复杂的populate查询
// const populateQuery = qs.stringify({
//   populate: {
    
//     flagship_tech_products:{
//         fields: ['url', 'first_image_url', 'h1_page_inner_title', 'date']
//     }
//   }
// }, { encodeValuesOnly: true })
let populateQuery = `populate[flagship_tech_products][fields]=first_image_url, first_image_alt,h1_page_inner_title,date`

populateQuery += `&populate[head_banner_images][populate][banner_img][fields]=*`
populateQuery += `&populate[mature_products_products][fields]=first_image_url, first_image_alt,h1_page_inner_title,date`
populateQuery += `&populate[smart_value_products][fields]=first_image_url, first_image_alt,h1_page_inner_title,date`
populateQuery += `&populate[what_you_need_blogs][fields]=first_image_url,title,date`
populateQuery += `&populate[our_capabilities_presence_banner_1_image][fields]=*&populate[our_capabilities_presence_banner_2_image][fields]=*&populate[our_capabilities_presence_banner_3_image][fields]=*&populate[our_capabilities_presence_banner_4_image][fields]=*`
populateQuery += `&populate[your_guide_to_choos_pannel_image_1][fields]=*&populate[your_guide_to_choos_pannel_image_2][fields]=*&populate[your_guide_to_choos_pannel_image_3][fields]=*&populate[your_guide_to_choos_pannel_image_4][fields]=*`

// console.log(`/home-pages?${populateQuery}`)
const { data: indexRes, pending, error } = await useApi(`/home-pages?${populateQuery}`)

watch(indexRes, (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        let data = newPosts.data[0]
        data.what_you_need_blogs.forEach(val=>{
            val.date = formatDateShort(val.date)
        })
        data.flagship_tech_products.forEach(val=>{
            val.date = formatDateLong(val.date)
        })
        data.mature_products_products.forEach(val=>{
            val.date = formatDateLong(val.date)
        })
        data.smart_value_products.forEach(val=>{
            val.date = formatDateLong(val.date)
        })
        indexDetail.value = data
        useHead({
            title: data.meta_title,
            meta: [
                {
                    name: 'description',
                    content: data.meta_description
                }
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LocalBusiness",
                                "name": "STYLECNC",
                                "legalName": "Jinan Style Machinery Co., Ltd.",
                                "description": "Jinan Style Machinery Co., Ltd. (STYLECNC) is a world-leading CNC machine manufacturer, offering CNC routers, milling machines, laser machines, plasma cutters, lathes, edge banders, digital cutters.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Rongsheng Times International, 16F, Building A, 9 Beiyuan Street",
                                    "addressLocality": "Jinan",
                                    "addressRegion": "Shandong",
                                    "postalCode": "250131",
                                    "addressCountry": "CN"
                                },
                                "image": [
                                    "https://www.dinosawmachine.com/uploads/logo.jpg",
                                    "https://www.dinosawmachine.com/assets/img/hero-img/stylecnc.svg"
                                ],
                                "email": "info@stylecnc.com",
                                "telePhone": "+86-531-83161518",
                                "url": "https://www.dinosawmachine.com",
                                "paymentAccepted": ["cash", "check", "credit card", "invoice", "paypal"],
                                "openingHours": "Mo,Tu,We,Th,Fr,Sa 08:00-18:00",
                                "openingHoursSpecification": [
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "opens": "08:00",
                                        "closes": "18:00"
                                    }
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/stylecnc/",
                                    "https://twitter.com/stylecnc/",
                                    "https://www.linkedin.com/company/jinan-style-machinery-co-ltd/",
                                    "https://www.pinterest.com/stylecncmachine/",
                                    "https://www.instagram.com/stylecnc/",
                                    "https://www.youtube.com/@stylecnc"
                                ],
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": "36.68607",
                                    "longitude": "117.03293"
                                },
                                "priceRange": "$$$"
                            },
                            {
                                "@type": "Organization",
                                "name": "DINOSAW",
                                "url": "https://www.dinosawmachine.com/",
                                "logo": "https://www.dinosawmachine.com//stylecnc-logo.png",
                                "description": "Jinan Style Machinery Co., Ltd. (STYLECNC) is a world-leading CNC machine manufacturer, offering CNC routers, milling machines, laser machines, plasma cutters, lathes, edge banders, digital cutters."
                            },
                            {
                                "@type": "WebSite",
                                "name": "DINOSAW",
                                "url": "https://www.dinosawmachine.com/",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": {
                                        "@type": "EntryPoint",
                                        "urlTemplate": "/search/?q={search_term_string}"
                                    },
                                    "query-input": "required name=search_term_string"
                                }
                            }
                        ]
                    })
                }
            ]
        })
    }

}, { immediate: true })


const modules = [Autoplay, FreeMode, Navigation, Pagination];


const productsList = ref([])
const { data: productsRes, productPending, productError } = await useApi(`/product-categories?filters[parent_category_value][$eq]=Products&fileds=category_name,column_attr_name,head_image,category_value,menu_select_down_panel_is_show`)
const productsTips = ref(["Most Trusted","Established","Innovative","New Trend", "","","","Outstanding"])
watch(productsRes, (newPosts) => {
    if (newPosts) {
        let data = newPosts.data
        
        if (Array.isArray(data)) {
            data = data.sort((a, b) => {
                // 确保 sort 字段存在，如果不存在则视为最大值
                const sortA = a.sort !== undefined ? a.sort : Number.MAX_SAFE_INTEGER
                const sortB = b.sort !== undefined ? b.sort : Number.MAX_SAFE_INTEGER
                return sortA - sortB
            })
            
            for (let i = 0; i < data.length; i++) {
                if(data[i].menu_select_down_panel_is_show){
                        let columnList = data[i][data[i].column_attr_name]
                        productsList.value.push({
                        id: i+1,
                        tip: productsTips.value[i],
                        title: data[i].category_name,
                        image: data[i].head_image,
                        materials: 'Machinable Materials',
                        columnList:columnList,
                        link: '/Products/'+data[i].category_value
                    })
                }
                
            }
            
        } 
        // console.log('productList',productsList)
    }

}, { immediate: true })

// 将产品列表分组为每组4个
const groupedProducts = computed(() => {
    const groups = []
    for (let i = 0; i < productsList.value.length; i += 4) {
        groups.push(productsList.value.slice(i, i + 4))
    }

    // // console.log('groupedProducts',groups)
    return groups
})



// 打字机效果
const typewriterTexts = computed(() => [
    indexDetail.craft_top_quality_device_text || 'Craft Top-Quality Device',
    indexDetail.improve_productivity_text || 'Improve Productivity',
    'Forge Best Cutting Solution'
])

const typeWriter = () => {


    const fullText = typewriterTexts.value[currentIndex.value]

    if (isDeleting.value) {
        // 删除字符
        currentText.value = fullText.substring(0, currentText.value.length - 1)
        typeSpeed.value = 50
    } else {
        // 添加字符
        currentText.value = fullText.substring(0, currentText.value.length + 1)
        typeSpeed.value = 100
    }

    // 如果完成了当前文本的打字
    if (!isDeleting.value && currentText.value === fullText) {
        // 暂停一下然后开始删除
        setTimeout(() => {
            isDeleting.value = true
            typeWriter()
        }, 2000)
        return
    } else if (isDeleting.value && currentText.value === '') {
        // 删除完成，切换到下一个文本
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % typewriterTexts.value.length
        // 删除完成后稍微暂停一下再开始下一个文本
        setTimeout(typeWriter, 300)
        return
    }

    setTimeout(typeWriter, typeSpeed.value)
}

const currentText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const typeSpeed = ref(100)



// 组件挂载后开始打字机效果
onMounted(() => {
    setTimeout(typeWriter, 1000) // 延迟1秒开始
})

// Blog cards scroll functionality
const blogCardsContainer = ref(null)
const blogCardsGrid = ref(null)

const scrollBlogCards = (direction) => {
    if (!blogCardsGrid.value) return

    const cardWidth = 288 + 16 // card width + gap
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth

    blogCardsGrid.value.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    })
}

// 使用 useFetch 获取数据
</script>
<style scoped lang="scss">
.index-banner {
    position: relative;
    width: 1440px;
    height: 646px;
    margin: 0 auto;
    padding-top: 135px;
    font-size: 0;

    .banner-text {
        position: relative;
        display: inline-block;
        width: 683px;
        vertical-align: top;
        top: -20px;
        right: -50px;

        h1 {
            .title {
                font-size: 48px;
            }

            margin-bottom:24px;
            line-height:1.2em;
            font-size:48px;
            font-weight:800;
        }

        p {
            width: 525px;
            font-size: 18px;
            font-weight: 300;
            line-height: 1em;
        }

        // Figma设计的按钮样式
        .banner-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 120px;
            width: 500px;
        }

        .button-primary {
            flex: 1;
            height: 65px;
            background: linear-gradient(142deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
            border-radius: 33px;
            display: flex;
            justify-content: center;
            align-items: center;

            .btn-learn-more {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                padding: 7px 0px 8px;

                span {
                    font-family: Inter;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 1em;
                    color: #FFFFFF;
                    text-align: center;
                }
            }
        }

        .button-secondary {
            width: 197px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;

            .btn-meet-us {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                padding: 7px 0px 8px;

                span {
                    font-family: Inter;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 1em;
                    color: #000000;
                    text-align: center;
                    padding: 2.5px 0px;
                }
            }
        }
    }

    .banner-swiper {
        display: inline-block;
        width: 716px;
        height: 572px;
        vertical-align: top;
        mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%);
    }

    .banner-single {
        display: none;
        padding: 30px 0;
    }
}
.banner-activety{
    width:100%;
    padding:15px 30px;
    margin:30px 0;
    text-align:center;
}

.index-part {
    max-width: 1440px;
    margin: 0 auto;

    .default-title {
        margin-bottom: 24px;
    }

    .dinosaw-text {
        line-height: 25px;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
    }
}

/* Products Section */
.products-section {
    .products-content {
        position: relative;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
        display:none;
        &.pc-view{
            display:block;
        }

        // Products Navigation Arrows
        .products-button-prev,
        .products-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;

            &:active {
                background: rgba(0, 0, 0, 0.2);
                transform: translateY(-50%) scale(0.8);
            }

            svg {
                width: 24px;
                height: 24px;
            }
        }

        .products-button-prev {
            left: -25px;
        }

        .products-button-next {
            right: -25px;
        }
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }

    /* 响应式布局 - 768-1440px范围保持4个一排，但缩小间距和尺寸 */
    @media (max-width: 1440px) and (min-width: 768px) {
        .products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
    }

    /* 768px以下显示2个一组 */
    @media (max-width: 767px) {
        .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
    }

    .product-card {
        background: #f6f6f6;
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        transition: transform 0.3s;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    // .product-card:hover {
    //     transform: translateY(-5px);
    // }

    .product-card .tip {
        position: relative;
        top: -25px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        margin: 0 auto;
        padding: 8px 16px 8px 8px;
        border-radius: 40px;
        color: rgb(67, 157, 241);
        font-weight: bold;
        background-color: rgba(67, 157, 241, 0.1);

        span {
            margin-left: 8px;
        }

    }

    .product-card img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        border-radius: 15px;
        margin-bottom: 20px;
    }

    .product-card h3 {
        font-size: 18px;
        font-weight: 700;
        color: #333;
        margin-bottom: 15px;
    }

    .product-card p {
        color: #666;
        flex-grow: 1;
    }

    .product-button {
        background: black;
        color: white;
        padding: 12px 30px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        transition: background 0.3s;
        margin-top: auto;
    }

    .product-button:hover {
        background: #333;
    }

    .product-swiper {
        padding: 40px 0 32px;
    }

    // 新增的features-section样式
    .features-section {
        margin: 25px 0;

        .features-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 10px;
            margin: 0 -15px;
        }

        .feature-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50px;
        }

        .feature-image {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .feature-label {
            font-size: 12px;
            text-align: center;
            color: #666;
        }
    }
}



// Responsive Design
@media (max-width: 768px) {
    .products-section {
        .products-content {

            .products-button-prev,
            .products-button-next {
                width: 40px;
                height: 40px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            .products-button-prev {
                left: 5px;
            }

            .products-button-next {
                right: 5px;
            }
        }
    }

    .get-solution-section {
        padding: 40px 0;

        .solution-content {
            gap: 40px;
        }

        .product-showcase {
            .product-image-container {
                height: 250px;
            }
        }

        .form-contact-wrapper {
            gap: 30px;
        }

        .inquiry-form {
            padding: 16px;

            .form-container {
                padding: 16px;

                .form-content {
                    gap: 12px;
                }

                .form-group {

                    .form-title,
                    .form-label {
                        font-size: 16px;
                        margin-bottom: 6px;
                    }

                    .select-container,
                    .input-container {
                        height: 44px;
                    }

                    .textarea-container {
                        .form-textarea {
                            min-height: 80px;
                        }
                    }

                    .submit-btn {
                        padding: 12px 0 13px;
                        font-size: 13px;
                    }
                }
            }
        }

        .contact-info {
            .contact-header {
                margin-bottom: 30px;

                .contact-title {
                    font-size: 32px;
                    margin-bottom: 16px;
                }

                .contact-description {
                    p {
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                }
            }

            .contact-methods {
                gap: 16px;

                .contact-card {
                    padding: 8px;
                    gap: 16px;

                    .contact-icon {
                        width: 28px;
                        height: 28px;

                        &.whatsapp svg {
                            width: 28px;
                            height: 28px;
                        }
                    }

                    .contact-details {
                        .contact-method-title {
                            font-size: 16px;
                            margin-bottom: 2px;
                        }

                        .contact-method-desc,
                        .contact-link {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

// Capabilities Section Styles
.capabilities-section {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    overflow: hidden;

    .capabilities-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .capabilities-header {
        text-align: center;
        margin-bottom: 60px;

        .capabilities-title {
            font-size: 48px;
            font-weight: 800;
            color: #000;
            margin: 0;
            line-height: 1.2;
        }
    }

    // Navigation Arrows


    // Pagination Dots
    .capabilities-pagination {
        width: auto;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        padding: 10px 5px;
        gap: 5px;
        z-index: 2;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50px;

        :global(.swiper-pagination-bullet) {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            opacity: 1;
        }

        :global(.swiper-pagination-bullet-active) {
            background: #fff;
        }
    }

    .capabilities-carousel {
        position: relative;
        overflow: hidden;

        .capabilities-swiper {
            overflow: visible;

        }



        .capability-slide {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            background: white;
            border-radius: 20px;
            transition: all 0.3s ease;

            .capability-image {
                flex-shrink: 0;
                width: 576px;
                height: 576px;
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                border-radius: 32px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
            }

            .capability-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 48px;
                width: 430px;
                height: 576px;
                padding-left: 40px;
                border-radius: 32px;

                &.capability-content-0 {
                    background: linear-gradient(142deg, rgb(255, 255, 255) 0%, rgb(240, 244, 255) 81.4242%);
                }

                &.capability-content-1 {
                    background: linear-gradient(142deg, rgb(255, 255, 255) 0%, rgb(243, 240, 255) 86.0378%);
                }

                &.capability-content-2 {
                    background: linear-gradient(142deg, rgb(255, 255, 255) 0%, rgb(240, 252, 255) 87.9012%);
                }

                &.capability-content-3 {
                    background: linear-gradient(142deg, rgb(255, 255, 255) 0%, rgb(255, 252, 240) 82.4096%);
                }

                .achievements-header {
                    .achievements-title {
                        font-family: Inter;
                        font-size: 30px;
                        font-weight: 600;
                        line-height: 1.2em;
                        color: #000000;
                        margin: 0;
                    }
                }

                .achievement-items {
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                    width: 428px;

                    .achievement-item {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        .achievement-icon {
                            width: 48px;
                            height: 48px;
                            flex-shrink: 0;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .achievement-text {
                            flex: 1;
                            width: 370px;

                            p {
                                font-family: Inter;
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 1.2em;
                                color: #333333;
                                margin: 0;
                            }
                        }
                    }
                }

                .achievement-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    .btn-primary {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 240px;
                        height: 48px;
                        background: linear-gradient(145deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
                        border-radius: 33px;
                        text-decoration: none;
                        font-family: Inter;
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 1.2em;
                        color: #FFFFFF;
                        transition: all 0.3s ease;

                        &:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(67, 157, 241, 0.3);
                        }
                    }

                    .btn-secondary {
                        font-family: Inter;
                        min-width: 200px;
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 1.2em;
                        color: #000000;
                        text-decoration: none;
                        text-align: center;
                        transition: all 0.3s ease;

                        &:hover {
                            color: #3b82f6;
                        }
                    }
                }
            }
        }
    }
}

.capabilities-button-prev,
.capabilities-button-next {
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
        background: rgba(0, 0, 0, 0.2);
        transform: translateY(-50%) scale(0.8);
    }

    svg {
        width: 24px;
        height: 24px;
    }
}

.capabilities-button-prev {
    left: 10px;
}

.capabilities-button-next {
    right: 10px;
}

// Responsive Design for Capabilities
@media (max-width: 1024px) {
    .capabilities-section {
        .capabilities-container {
            max-width: 100%;
            padding: 0 16px;
        }

        .capabilities-carousel {
            .capabilities-button-prev {
                left: 10px;
            }

            .capabilities-button-next {
                right: 10px;
            }
        }

        .capability-slide {
            gap: 30px;
            padding: 30px;

            .capability-image {
                width: 100%;
                height: 400px;
                max-width: 576px;
            }

            .capability-content {
                text-align: center;

                .capability-title {
                    font-size: 28px;
                }

                .capability-description {
                    font-size: 16px;
                }

                .capability-stats {
                    justify-content: center;
                    gap: 30px;

                    .stat-item {
                        text-align: center;

                        .stat-number {
                            font-size: 28px;
                        }
                    }
                }

                .capability-features {
                    align-items: center;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .capabilities-section {
        padding: 60px 0;

        .capabilities-header {
            margin-bottom: 40px;

            .capabilities-title {
                font-size: 32px;
            }
        }

        .capabilities-carousel {

            .capabilities-button-prev,
            .capabilities-button-next {
                width: 40px;
                height: 40px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            .capabilities-button-prev {
                left: 5px;
            }

            .capabilities-button-next {
                right: 5px;
            }

            .capabilities-pagination {
                :global(.swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                }
            }
        }

        .capability-slide {
            padding: 20px;
            gap: 20px;
            flex-direction: column;

            .capability-image {
                height: 300px;
                width: 100%;
                order: 1;
            }

            .capability-content {
                order: 2;
                width: 100%;

                .capability-title {
                    font-size: 24px;
                    margin-bottom: 15px;
                }

                .capability-description {
                    font-size: 14px;
                    margin-bottom: 20px;
                }

                .capability-stats {
                    gap: 20px;
                    margin-bottom: 20px;

                    .stat-item {
                        .stat-number {
                            font-size: 24px;
                        }

                        .stat-label {
                            font-size: 14px;
                        }
                    }
                }

                .capability-features {
                    gap: 8px;

                    .feature-item {
                        .feature-text {
                            font-size: 14px;
                        }
                    }
                }

                .achievement-actions {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    width: 100%;

                    .btn-primary,
                    .btn-secondary {
                        width: 100%;
                        max-width: 280px;
                        display: block;
                        text-align: center;
                    }

                    .btn-primary {
                        height: 48px;
                        background: linear-gradient(145deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
                        border-radius: 33px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.2em;
                        color: #FFFFFF;
                    }

                    .btn-secondary {
                        min-width: auto;
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.2em;
                        color: #000000;
                        text-decoration: none;
                        padding: 12px 0;
                    }
                }
            }
        }
    }
}

// What You Need Section Styles
.what-you-need-section {
    padding: 32px 0;
    background: #f6f6f6;

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .section-header {
        text-align: center;
        margin-bottom: 60px;

        .section-title {
            font-size: 48px;
            font-weight: 800;
            color: #000;
            margin: 0 0 24px 0;
            line-height: 1.4;
        }

        .section-description {
            max-width: 1212px;
            margin: 0 auto;

            p {
                font-size: 18px;
                font-weight: 300;
                color: #333333;
                line-height: 1.5;
                text-align: center;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .blog-cards-container {
        display: flex;
        justify-content: center;

        .blog-cards-grid {
            display: flex;
            gap: 32px;
            align-items: center;

            .blog-card {
                flex-shrink: 0;
                width: 380px;
                height: 469px;
                background: #fcfcfc;
                border-radius: 32px;
                overflow: hidden;
                transition: all 0.3s ease;
                cursor: pointer;

                .blog-image {
                    width: 100%;
                    height: 285px;
                    overflow: hidden;
                    border-radius: 24px 24px 0 0;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }
                }

                .blog-content {
                    padding: 40px 40px 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: calc(469px - 285px);

                    .blog-title {
                        font-size: 22px;
                        font-weight: 600;
                        color: #333333;
                        line-height: 1.2;
                        margin: 0 0 auto 0;
                        text-align: center;
                    }

                    .blog-date {
                        font-size: 15px;
                        font-weight: 500;
                        color: #666666;
                        text-align: center;
                        letter-spacing: -0.02em;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
}

.guide-section {
    width: 1440px;
    margin: 0 auto;
    padding: 32px 0;
    background: #ffffff;

    .container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 32px;
    }

    .guide-header {
        text-align: center;
        margin-bottom: 32px;

        .guide-title {
            font-family: 'Inter', sans-serif;
            font-size: 48px;
            font-weight: 800;
            color: #000;
            margin-bottom: 30px;
            line-height: 1.4;
        }

        .guide-description {
            max-width: 1212px;
            margin: 0 auto;

            p {
                font-family: 'Inter', sans-serif;
                font-size: 18px;
                font-weight: 300;
                color: #3D3D3D;
                line-height: 1.2;
                margin: 0;
                text-align: center;
            }
        }
    }

    .guide-steps {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 20px;
        max-width: 1395px;
        margin: 0 auto;

        .step-card {
            position: relative;
            width: 322px;
            height: 600px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;

            .step-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
            }

            .step-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding: 30px 28px;
            }

            .step-content {
                color: white;
                width: 252px;

                .step-title {
                    font-family: 'Inter', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    color: #000;
                    padding: 0 12px 8px;
                    line-height: 1;
                    border-radius: 4px;
                    display: inline-block;
                }

                .step-description {
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    font-weight: 300;
                    color: #000;
                    line-height: 1.2;
                    margin: 0;
                    padding: 12px;
                    border-radius: 4px;
                    width: 233px;
                }
            }
        }
    }
}

// Responsive Design for What You Need
@media (max-width: 1024px) {
    .what-you-need-section {
        .blog-cards-container {

            .blog-cards-grid {
                gap: 20px;
                justify-content: flex-start;
            }
        }
    }
}

@media (max-width: 768px) {
    .what-you-need-section {
        padding: 60px 0;

        .section-header {
            margin-bottom: 40px;

            .section-title {
                font-size: 32px;
                margin-bottom: 20px;
            }

            .section-description {
                p {
                    font-size: 16px;
                    margin-bottom: 16px;
                }
            }
        }

        .blog-cards-container {

            .blog-cards-grid {
                gap: 16px;

                .blog-card {
                    width: 320px;
                    height: 400px;

                    .blog-image {
                        height: 240px;
                    }

                    .blog-content {
                        padding: 20px;
                        height: calc(400px - 240px);

                        .blog-title {
                            font-size: 18px;
                        }

                        .blog-date {
                            font-size: 14px;
                            margin-top: 15px;
                        }
                    }
                }
            }
        }
    }
}

// Customer Favorites Section
.customer-favorites-section {
    width: 1440px;
    margin: 0 auto;
    padding: 80px 0;
    background: #ffffff;

    .container {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .section-header {
        text-align: center;
        margin-bottom: 60px;

        .section-title {
            font-family: Inter;
            font-weight: 800;
            font-size: 48px;
            line-height: 1.2;
            color: #000000;
            margin-bottom: 30px;
        }

        .section-description {
            max-width: 1212px;
            margin: 0 auto;

            p {
                font-family: Inter;
                font-weight: 300;
                font-size: 18px;
                line-height: 1.4;
                text-align: center;
                color: #3D3D3D;
                margin-bottom: 10px;

                &:first-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .product-categories {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }

    .category-variant {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: #ffffff;

        .category-header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 0;

            .category-background {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4px;

                .category-container {
                    display: flex;
                    flex-direction: column;

                    .category-title {
                        font-family: Inter;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 1;
                        color: #000000;
                        text-align: center;
                    }
                }

                .category-line {
                    width: 100%;
                    height: 3px;
                    background: #000000;
                    border-radius: 20px;
                }
            }
        }

        .category-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            width: 1440px;
            background: #ffffff;

            .category-main {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 24px;
                padding: 20px;
                width: 1440px;
                height: 708px;
            }
        }
    }

    .featured-product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 684px;
        height: 684px;

        .featured-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4px;
            width: 684px;
            height: 684px;

            .featured-background {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                background: #ffffff;

                .featured-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0;
                    width: 684px;
                    height: 537px;
                    background: #F6F6F6;
                    border-radius: 30px;

                    .featured-link {
                        display: flex;
                        justify-content: stretch;
                        align-items: stretch;
                        width: 684px;
                        height: 537px;

                        .featured-inner {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            gap: 10px;
                            padding: 34px 0;
                            width: 100%;
                            box-sizing: border-box;

                            .featured-image-container {
                                width: 646px;
                                height: 378px;

                                .featured-image {
                                    width: 646px;

                                    .product-image {
                                        position: relative;
                                        width: 100%;
                                        height: 378px;
                                        margin: 0 auto;
                                        background: #f6f6f6;
                                        border-radius: 8px;
                                        overflow: hidden;

                                        img {
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%, -50%);
                                            width: 100%;
                                        }
                                    }
                                }
                            }

                            .featured-text {
                                width: 640px;

                                .featured-title {
                                    font-family: Inter;
                                    font-weight: 700;
                                    font-size: 24px;
                                    line-height: 1;
                                    text-transform: uppercase;
                                    text-align: center;
                                    color: #3D3D3D;
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }

            .featured-footer {
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                align-items: stretch;
                width: 100%;
                height: 142px;

                .featured-footer-link {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    width: 100%;
                    height: 100%;
                    background: #F6F6F6;
                    border-radius: 0 0 24px 24px;

                    .featured-footer-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;

                        .featured-footer-content {
                            width: 253px;
                            height: 64px;
                            position: relative;
                            transition: 0.3s all;

                            .featured-footer-inner {
                                position: absolute;
                                left: -15.61px;
                                top: 20px;
                                width: 284.22px;

                                .featured-footer-title {
                                    font-family: Inter;
                                    font-weight: 700;
                                    font-size: 24px;
                                    line-height: 1;
                                    color: #000000;
                                    text-align: left;
                                }
                            }
                        }

                        .featured-footer-description {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 17px;
                            width: 100%;
                            position: relative;

                            .featured-footer-text {
                                width: 87px;
                                height: 22px;
                                position: relative;
                                transition: opacity 0.3s ease;

                                .featured-footer-link-text {
                                    position: absolute;
                                    left: -49.72px;
                                    top: 1.6px;
                                    width: 184.69px;

                                    .featured-footer-link-container {
                                        padding: 0 0 0.79px;
                                        width: 100%;

                                        .featured-footer-link-label {
                                            font-family: Inter;
                                            font-weight: 300;
                                            font-size: 14px;
                                            line-height: 1.2;
                                            color: #3D3D3D;
                                        }
                                    }
                                }
                            }

                            .featured-footer-button {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                opacity: 0;
                                transition: opacity 0.3s ease;

                                .buy-now-btn {
                                    width: 175px;
                                    height: 44px;
                                    background: #000000;
                                    color: #ffffff;
                                    border: none;
                                    border-radius: 44px;
                                    font-family: Inter;
                                    font-weight: 500;
                                    font-size: 14px;
                                    cursor: pointer;
                                    transition: all 0.3s ease;
                                }
                            }


                        }
                    }

                    &:hover {
                        .featured-footer-text {
                            opacity: 0;
                        }

                        .featured-footer-content {
                            top: 4px;
                        }

                        .featured-footer-button {
                            opacity: 1 !important;
                        }
                    }
                }

            }
        }
    }

    .product-grid {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        gap: 12px;
        width: 680px;
        height: 706px;

        .product-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            width: 100%;
            height: 100%;

            &:last-child {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 24px;
                height: 100%;
            }
        }

        .product-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            .product-background {
                width: 330px;
                height: 326px;
                background: #F6F6F6;
                border-radius: 24px;
                position: relative;

                .product-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 330px;
                    height: 326px;

                    .product-link {
                        display: flex;
                        justify-content: stretch;
                        align-items: stretch;
                        width: 330px;
                        height: 326px;

                        .product-content {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            gap: 16px;
                            width: 100%;

                            .product-image-wrapper {
                                width: 273px;
                                height: 192px;
                                position: relative;

                                .product-image-container {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 273px;

                                    .product-image {
                                        width: 100%;
                                        height: 192px;
                                        background: #f6f6f6;
                                        border-radius: 8px;

                                        img {
                                            width: 100%;
                                        }
                                    }
                                }
                            }

                            .product-text {
                                width: 273px;

                                .product-title {
                                    font-family: Inter;
                                    font-weight: 600;
                                    font-size: 22px;
                                    line-height: 1.2;
                                    text-align: center;
                                    color: #3D3D3D;
                                    width: 100%;
                                    height: 52.78px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .bottom-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 44px;
        width: 1376px;
        margin: 60px auto 0;

        .bottom-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 44px;

            .bottom-title {
                width: 1376px;
                height: 93px;
                position: relative;
                text-align: center;

                .title-part {
                    display: inline-block;

                    .title-text {
                        font-family: Inter;
                        font-weight: 700;
                        font-size: 48px;
                        line-height: 1.83;
                        text-align: center;
                        color: #000000;
                    }

                    &:last-child {
                        left: 897.14px;
                    }
                }

                .title-highlight {
                    display: inline-block;
                    margin: 0 10px 0 15px;
                    height: 88px;
                    font-family: Inter;
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 1.83;
                    text-align: center;
                    color: #0084FF;

                    &::after {
                        content: '|';
                        color: #0084FF;
                        animation: blink 1s infinite;
                        margin-left: 2px;
                    }
                }

                @keyframes blink {

                    0%,
                    50% {
                        opacity: 1;
                    }

                    51%,
                    100% {
                        opacity: 0;
                    }
                }

                .title-separator {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    left: 878.18px;
                    top: 5px;

                    .separator-text {
                        font-family: Inter;
                        font-weight: 700;
                        font-size: 48px;
                        line-height: 1.83;
                        text-align: center;
                        color: #0084FF;
                    }
                }
            }

            .bottom-description {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: -1px;
                width: 1049px;

                .description-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 0 0.8px;
                    width: 100%;

                    .description-text {
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 1.2;
                        text-align: center;
                        color: #3D3D3D;
                        margin: 0;
                    }
                }
            }

            .bottom-cta {
                width: 350px;
                height: 51px;

                .cta-button {
                    width: 350px;
                    height: 51px;
                    background: #000000;
                    border-radius: 24px;
                    position: relative;

                    .cta-container {
                        position: absolute;
                        left: 120.85px;
                        top: 1px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .cta-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            .cta-text {
                                font-family: Inter;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 3.125;
                                text-transform: uppercase;
                                text-align: center;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
}

// Testimonials Section
.testimonials-section {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 60px 100px;
    background: #f8f9fa;

    .testimonials-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('https://framerusercontent.com/images/gsVAiN3VXSusWcCeXCJ1pu6knFU.webp') center/cover;
        opacity: 0.8;
    }

    .testimonials-container {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    .testimonials-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h2 {
            font-family: Inter;
            font-weight: 800;
            font-size: 48px;
            line-height: 1.4;
            color: #000;
            margin-bottom: 24px;
        }

        .testimonials-description {
            width: 1036px;

            p {
                font-family: Inter;
                font-weight: 300;
                font-size: 16px;
                line-height: 1.5;
                color: #000;
                text-align: center;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .testimonials-cards {
        display: flex;
        gap: 80px;
        padding: 10px 80px;
        overflow-x: auto;
        width: 100%;
        justify-content: center;
    }

    .testimonial-card {
        background: #ffffff;
        border-radius: 16px;
        padding: 40px;
        width: 360px;
        height: 470px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        flex-shrink: 0;
        // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        .testimonial-header {
            display: flex;
            flex-direction: column;
            gap: 15px;

            .customer-info {
                display: flex;
                align-items: center;
                gap: 16px;

                .customer-avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    img{
                        width:100%;
                        height:100%;
                    }
                }

                .customer-details {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    width: 200px;

                    .customer-name-section {
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        h4 {
                            font-family: Inter;
                            font-weight: 600;
                            font-size: 26px;
                            line-height: 1.2;
                            color: #000000;
                            margin: 0;
                        }

                        .company-flag {
                            width: 40px;
                            height: 28px;
                            background: #f0f0f0;
                            border-radius: 4px;
                        }
                    }

                    .customer-title {
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 1.2;
                        color: #333333;
                        margin: 0;
                    }
                }
            }

            .divider {
                width: 266px;
                height: 1px;
                background: rgba(222, 220, 220, 0.58);
            }
        }

        .testimonial-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;

            .testimonial-stats {
                position: relative;
                left:-15px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 155px;

                    .stat-value {
                        font-family: Inter;
                        font-weight: 600;
                        font-size: 48px;
                        line-height: 1.2;
                        background: linear-gradient(88deg, rgba(71, 82, 230, 1) 0%, rgba(36, 196, 255, 1) 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: 5px;
                    }

                    .stat-label {
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 1.2;
                        color: #333333;
                        text-align: center;
                    }
                }

                .material-icon {
                    width: 95px;
                    height: 47px;
                    border-radius: 4px;
                }

                .material-icon-side {
                    width: 71px;
                    height: 60px;
                    border-radius: 4px;
                }
            }

            .testimonial-text {
                flex: 1;
                display: flex;
                align-items: center;

                p {
                    font-family: Inter;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 1.2;
                    color: #333333;
                    margin: 0;
                }
            }
        }
    }
}

// Business Partners Section
.partners-section {
    position: relative;
    width: 1166px;
    margin: 0 auto;
    padding: 40px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 1;

    .partners-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .partners-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h2 {
            font-family: Inter;
            font-weight: 800;
            font-size: 48px;
            line-height: 1.2;
            color: #000000;
            margin-bottom: 20px;
        }

        .partners-description {
            width: 1049px;

            p {
                font-family: Inter;
                font-weight: 300;
                font-size: 18px;
                line-height: 1.2;
                color: #333333;
                text-align: center;
                margin: 0;
            }
        }
    }

    .partners-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        width: 894px;
        height: 60px;

        .partner-logo {
            width: 128px;
            height: 60px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}


// Medium-Large Screens (1024px to 1440px) - 设置最大宽度为1024px
@media (max-width: 1440px) and (min-width: 768px) {
    .index-banner {
        width: 750px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 60px 20px;
        margin: 0 auto;

        .banner-text {
            width: 100%;
            max-width: 750px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: static;
            top: auto;
            right: auto;

            h1 {
                font-family: Inter;
                font-size: 40px;
                font-weight: 800;
                line-height: 1.4em;
                color: #000000;
                text-align: center;
                margin-bottom: 24px;
                width: 100%;

                .title {
                    font-size: 40px;
                    display: block;
                }
            }

            p {
                width: 100%;
                max-width: 729px;
                font-family: Inter;
                font-size: 24px;
                font-weight: 300;
                line-height: 1.4em;
                color: #544141;
                text-align: center;
                margin-bottom: 24px;
            }

            .banner-buttons {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: center;
                gap: 12px;
                margin-top: 24px;
                width: 228px;
                margin: 0 auto;

                .button-primary {
                    width: 228px;
                    height: 40px;
                    background: linear-gradient(149deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
                    border-radius: 33px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .btn-learn-more {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;

                        span {
                            font-family: Inter;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 1.4em;
                            letter-spacing: -0.04em;
                            color: #FFFFFF;
                            text-align: center;
                        }
                    }
                }

                .button-secondary {
                    width: 228px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0px;

                    .btn-meet-us {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;

                        span {
                            font-family: Inter;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 1.4em;
                            letter-spacing: -0.04em;
                            color: #000000;
                            text-align: center;
                        }
                    }
                }
            }
        }

        .banner-machine {
            width: 451px;
            height: 415px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .products-section {
        width: 746px;
        margin: 0 auto;

        .products-content {
            width: 746px;

            .product-swiper {
                width: 746px;

                .products-grid {
                    width: 746px;
                    gap: 12px;

                    .product-card {
                        padding: 40px 0;

                        .tip {
                            width: 109px;
                            font-size: 10px;
                            font-weight: normal;

                            svg {
                                width: 16px;
                                height: 16px;
                            }
                        }

                        h3 {
                            width: 160px;
                            font-size: 14px;
                        }

                        img {
                            width: 95%;
                            height: auto;
                        }

                        p {
                            width: 160px;
                            font-size: 12px;
                        }

                        .features-section {
                            width: 160px;
                            margin: 15px auto 0;

                            .features-container {
                                width: 160px;
                                margin: 0 auto;

                                .feature-item {
                                    width: 50px;
                                }

                                .feature-image {
                                    width: 24px;
                                    height: 24px;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .feature-label {
                                    font-size: 10px;
                                }
                            }
                        }

                        .product-button {
                            width: 160px;
                            margin: 20px auto 0;
                            padding: 5px 0;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

    .capabilities-section {
        .capabilities-carousel {
            width: 768px;
            height: 556px;
            margin: 0 auto;
            position: relative;

            .capabilities-swiper {
                width: 768px;
                height: 556px;
                border-radius: 32px;
                overflow: hidden;

                .capability-slide {
                    width: 768px;
                    height: 556px;
                    display: flex;
                    flex-direction: row;
                    gap: 16px;
                    padding: 0;
                    border-radius: 32px;

                    .capability-image {
                        width: 296px;
                        height: 556px;
                        border-radius: 32px;
                        flex-shrink: 0;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 32px;
                        }
                    }

                    .capability-content {
                        width: 450px;
                        height: 556px;
                        border-radius: 32px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 48px;
                        padding: 42px 21.5px;
                        text-align: left;

                        .achievements-header {
                            .achievements-title {
                                font-family: Inter;
                                font-size: 30px;
                                font-weight: 600;
                                line-height: 1.2em;
                                color: #000000;
                                margin: 0;
                            }
                        }

                        .achievement-items {
                            display: flex;
                            flex-direction: column;
                            gap: 48px;
                            width: 407px;

                            .achievement-item {
                                display: flex;
                                align-items: center;
                                gap: 10px;

                                .achievement-icon {
                                    width: 48px;
                                    height: 48px;
                                    flex-shrink: 0;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                    }
                                }

                                .achievement-text {
                                    flex: 1;

                                    p {
                                        font-family: Inter;
                                        font-size: 18px;
                                        font-weight: 400;
                                        line-height: 1.2em;
                                        color: #333333;
                                        margin: 0;
                                    }
                                }
                            }
                        }

                        .achievement-actions {
                            display: flex;
                            align-items: center;
                            gap: 48px;
                            width: 423px;

                            .btn-primary {
                                width: 240px;
                                height: 48px;
                                background: linear-gradient(145deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
                                border-radius: 33px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                text-decoration: none;
                                font-family: Inter;
                                font-size: 18px;
                                font-weight: 600;
                                line-height: 1.2em;
                                color: #FFFFFF;
                                transition: all 0.3s ease;

                                &:hover {
                                    transform: translateY(-2px);
                                    box-shadow: 0 8px 25px rgba(67, 157, 241, 0.3);
                                }
                            }

                            .btn-secondary {
                                min-width: auto;
                                font-family: Inter;
                                font-size: 18px;
                                font-weight: 600;
                                line-height: 1.2em;
                                color: #000000;
                                text-decoration: none;
                                transition: all 0.3s ease;

                                &:hover {
                                    color: #3b82f6;
                                }
                            }
                        }
                    }
                }
            }

            .capabilities-button-prev,
            .capabilities-button-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;

                &:active {
                    background: rgba(0, 0, 0, 0.2);
                }

                svg {
                    width: 24px;
                    height: 24px;
                }
            }

            .capabilities-button-prev {
                left: 20px;
            }

            .capabilities-button-next {
                right: 20px;
            }

            .capabilities-pagination {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 50px;
                padding: 10px;

                :global(.swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 5px;
                    opacity: 1;
                    margin: 0 2.5px;
                    transition: all 0.3s ease;

                    &.swiper-pagination-bullet-active {
                        background: #FFFFFF;
                        opacity: 1;
                    }
                }
            }
        }
    }

    .what-you-need-section {
        width: 768px;
        margin: 0 auto;
        padding: 32px 0;
        background: #f6f6f6;

        .container {
            width: 778px;
            margin: 0 auto;
            padding: 0;
        }

        .section-header {
            text-align: center;
            margin-bottom: 24px;

            .section-title {
                font-family: Inter;
                font-size: 48px;
                font-weight: 800;
                line-height: 1.2em;
                text-transform: uppercase;
                color: #000000;
                margin: 0 0 24px 0;
            }

            .section-description {
                max-width: 965px;
                margin: 0 auto;

                p {
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 1.4em;
                    color: #333333;
                    text-align: center;
                    margin-bottom: 0;

                    &:first-child {
                        margin-bottom: 0;
                    }

                    &:nth-child(2) {
                        margin-bottom: 0;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .blog-cards-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 40px;
            position: relative;

            .blog-cards-grid {
                display: flex;
                gap: 16px;
                align-items: stretch;
                overflow-x: auto;
                scroll-behavior: smooth;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .blog-card {
                    flex-shrink: 0;
                    width: 288px;
                    height: 469px;
                    background: #fcfcfc;
                    border-radius: 32px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;

                    .blog-image {
                        width: 100%;
                        height: 285px;
                        overflow: hidden;
                        border-radius: 24px 24px 0 0;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform 0.3s ease;
                        }
                    }

                    .blog-content {
                        padding: 40px 15px 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: calc(469px - 285px);

                        .blog-title {
                            font-family: Inter;
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 1.2em;
                            color: #333333;
                            text-align: center;
                            margin: 0 0 auto 0;
                        }

                        .blog-date {
                            font-family: Inter;
                            font-size: 15px;
                            font-weight: 500;
                            line-height: 1.2em;
                            letter-spacing: -0.02em;
                            color: #666666;
                            text-align: center;
                            margin-top: 20px;
                        }
                    }
                }
            }

            .blog-navigation-prev,
            .blog-navigation-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.6);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.3s ease;
                z-index: 10;

                &:hover {
                    background: rgba(0, 0, 0, 0.8);
                }

                svg {
                    width: 24px;
                    height: 24px;
                }
            }

            .blog-navigation-prev {
                left: -60px;
            }

            .blog-navigation-next {
                right: -60px;
            }
        }

        // Navigation Button (Next)
        .blog-navigation {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;

            &:hover {
                background: rgba(0, 0, 0, 0.4);
            }

            svg {
                width: 24px;
                height: 24px;
                stroke: white;
                stroke-width: 2px;
            }
        }
    }

    .index-part {
        max-width: 768px;
    }

    .customer-favorites-section {
        width: 1024px;

        .container {
            max-width: 1024px;
        }

        .product-categories {
            max-width: 1024px;
        }

        .category-variant {
            .category-content {
                width: 1024px;

                .category-main {
                    width: 1024px;
                }
            }
        }

        .featured-product {
            width: 686px;
            /* 684 * 0.71 ≈ 486 */
            height: 486px;

            .featured-container {
                width: 686px;
                height: 486px;

                .featured-background {
                    .featured-content {
                        width: 686px;
                        height: 382px;
                        /* 537 * 0.71 ≈ 382 */

                        .featured-link {
                            width: 486px;
                            height: 382px;

                            .featured-inner {
                                .featured-image-container {
                                    width: 459px;
                                    /* 646 * 0.71 ≈ 459 */
                                    height: 269px;
                                    /* 378 * 0.71 ≈ 269 */

                                    .featured-image {
                                        width: 459px;

                                        .product-image {
                                            height: 269px;
                                        }
                                    }
                                }

                                .featured-text {
                                    width: 454px;
                                    /* 640 * 0.71 ≈ 454 */
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .guide-section {
        width: 810px;
        margin: 0 auto;
        padding: 32px 0;
        background: #ffffff;

        .container {
            width: 810px;
            margin: 0 auto;
            padding: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }

        .guide-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: stretch;
            text-align: center;

            .guide-title {
                font-family: Inter;
                font-size: 48px;
                font-weight: 800;
                line-height: 1.2em;
                text-transform: uppercase;
                text-align: center;
                color: #000000;
                margin: 0 0 32px 0;
            }

            .guide-description {
                display: flex;
                flex-direction: column;
                align-self: stretch;

                p {
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 1.4em;
                    text-align: center;
                    color: #3D3D3D;
                    margin: 0;

                    &:first-child {
                        margin-bottom: 0;
                    }

                    &:last-child {
                        margin-top: 0;
                    }
                }
            }
        }

        .guide-steps {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 810px;
            height: 600px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            padding: 0 16px;
            justify-content: flex-start;
            /* 隐藏滚动条 */
            scrollbar-width: none;
            /* Firefox */
            -ms-overflow-style: none;
            /* IE and Edge */

            &::-webkit-scrollbar {
                display: none;
                /* Chrome, Safari, Opera */
            }

            .step-card {
                position: relative;
                width: 322px;
                height: 600px;
                flex-shrink: 0;
                overflow: hidden;
                cursor: pointer;
                transition: all 0.3s ease;

                .step-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }
                }

                .step-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 30px 28px;
                }

                .step-content {
                    color: white;
                    width: 252px;

                    .step-title {
                        font-family: Inter;
                        font-size: 32px;
                        font-weight: 700;
                        line-height: 1em;
                        text-align: left;
                        color: #000000;
                        margin: 0 0 20px 0;
                        padding: 0 12px 8px;
                        border-radius: 4px;
                        display: inline-block;
                        background: rgba(255, 255, 255, 0.9);
                    }

                    .step-description {
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 1.2em;
                        text-align: left;
                        color: #3D3D3D;
                        margin: 0;
                        padding: 12px;
                        border-radius: 4px;
                        width: 233px;
                        background: rgba(255, 255, 255, 0.9);
                    }
                }
            }
        }
    }

    .testimonials-section {
        width: 810px;
        margin: 0 auto;
        padding: 60px 0;
        background: #ffffff;

        .testimonials-container {
            width: 810px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }

        .testimonials-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            .testimonials-description {
                display: flex;
                flex-direction: column;
                width: 810px;

                p {
                    font-family: Inter;
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 1.2em;
                    text-align: center;
                    color: #3D3D3D;
                    margin: 0 0 16px 0;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .testimonials-cards {
            position: relative;
            width: 810px;
            height: 490px;
            display: flex;
            align-items: stretch;
            gap: 24px;
            padding: 10px 80px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            justify-content: flex-start;

            /* 隐藏滚动条 */
            scrollbar-width: none;
            /* Firefox */
            -ms-overflow-style: none;
            /* IE and Edge */

            &::-webkit-scrollbar {
                display: none;
                /* Chrome, Safari, Opera */
            }

            .testimonial-card {
                flex-shrink: 0;
                width: 360px;
                height: 470px;
                background: #ffffff;
                border-radius: 16px;
                padding: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 40px;
                // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

                .testimonial-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;

                    .user-info {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        width: 100%;

                        .user-avatar {
                            width: 80px;
                            height: 80px;
                            border-radius: 80px;
                            overflow: hidden;
                            flex-shrink: 0;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .user-details {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            flex: 1;

                            .user-name {
                                font-family: Inter;
                                font-size: 14px;
                                font-weight: 300;
                                line-height: 1.2em;
                                color: #000000;
                                margin: 0;
                            }

                            .user-title {
                                font-family: Inter;
                                font-size: 14px;
                                font-weight: 300;
                                line-height: 1.2em;
                                color: #3D3D3D;
                                margin: 0;
                            }

                            .user-flag {
                                width: 40px;
                                height: 28px;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                    }

                    .divider {
                        width: 266px;
                        height: 1px;
                        background: rgba(222, 220, 220, 0.58);
                    }
                }

                .testimonial-stats {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    width: 266px;
                    margin: 0 auto;

                    .stat-item {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 1px;
                        flex: 1;

                        .stat-value {
                            font-family: Inter;
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 1.2em;
                            background: linear-gradient(88deg, rgba(71, 82, 230, 1) 0%, rgba(36, 196, 255, 1) 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            text-align: center;
                            margin: 0;
                        }

                        .stat-label {
                            font-family: Inter;
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 1.2em;
                            color: #3D3D3D;
                            text-align: center;
                            margin: 0;
                        }
                    }

                    .stat-icon {
                        width: 95px;
                        height: 47px;
                        background: #f0f0f0;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }
                }

                .testimonial-content {
                    height: 134px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;

                    .testimonial-text {
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 1.2em;
                        color: #3D3D3D;
                        text-align: left;
                        margin: 0;
                        flex: 1;
                    }
                }

                .material-icon {
                    position: absolute;
                    background: #f0f0f0;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }

                    &.material-icon-main {
                        width: 137px;
                        height: 40px;
                        right: 40px;
                        bottom: 150px;
                    }

                    &.material-icon-side {
                        width: 71px;
                        height: 60px;
                        right: 20px;
                        top: 40px;
                    }
                }
            }

            // Navigation Button
            .testimonial-navigation {
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(0, 0, 0, 0.4);
                }

                svg {
                    width: 24px;
                    height: 24px;
                    stroke: white;
                    stroke-width: 2px;
                }
            }
        }
    }
}

// Large Screens (1440px and below)
@media (max-width: 1440px) {
    .banner-activety{
        margin:15px 0;
        padding:5px 10px;
    }
    .index-banner {
        width: 100%;
        height: auto;
        padding: 50px 20px 0;
        box-sizing: border-box;

        .banner-text {
            display: block;
            margin: 0 auto;
            width: 100%;
        }

        .banner-swiper {
            display: none;
            margin: 0 auto;
            mask-image: none;
            width: 100%;
        }

        .banner-single {
            display: block;
            text-align: center;
        }
    }

    .capabilities-section {
        width: 100%;
    }

    .guide-section {
        .container {
            padding: 0 20px;
        }

        .guide-steps {
            max-width: 100%;
            gap: 12px;

            .step-card {
                width: calc((100vw - 120px) / 4);
            }
        }
    }

    // Customer Favorites Section
    .customer-favorites-section {
        width: 100%;

        .container {
            padding: 0 20px;
        }

        .category-variant {
            .category-content {
                width: 100%;
                padding: 30px 20px;

                .category-main {
                    width: 100%;
                    max-width: 1400px;
                    height: auto;
                    flex-direction: column;
                }
            }
        }
    }

    // Testimonials Section
    .testimonials-section {
        width: 100%;
        padding: 50px 200px;

        .testimonials-header {
            .testimonials-description {
                width: 100%;
                max-width: 900px;
            }
        }

        .testimonials-cards {
            gap: 60px;
            padding: 10px 60px;
        }
    }

    // Business Partners Section
    .partners-section {
        width: 100%;
        max-width: 1000px;

        .partners-header {
            .partners-description {
                width: 100%;
                max-width: 900px;
            }
        }

        .partners-logos {
            width: 100%;
            max-width: 800px;
        }
    }
}


/* ========================================
   UNIFIED RESPONSIVE STYLES
   ======================================== */

/*
  注意：文件中原有的分散@media查询已整理到此统一部分
  包含以下断点的响应式样式：
  - @media (max-width: 1440px) - 大屏幕
  - @media (max-width: 1200px) - 中大屏幕  
  - @media (max-width: 1024px) - 中等屏幕
  - @media (max-width: 768px) - 小屏幕
  
  建议删除文件中重复的@media查询以避免样式冲突
*/


// Medium-Large Screens (1200px and below)
@media (max-width: 1024px) {

    // Customer Favorites Section
    .customer-favorites-section {
        .container {
            padding: 0 20px;
        }

        .featured-product {
            width: 100%;

            .featured-container {
                width: 100%;

                .featured-background {
                    .featured-content {
                        width: 100%;

                        .featured-link {
                            width: 100%;

                            .featured-inner {
                                .featured-image-container {
                                    width: 100%;

                                    .featured-image {
                                        width: 100%;
                                    }
                                }

                                .featured-text {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }

        .bottom-section {
            width: 100%;
            max-width: 1300px;
        }
    }

    .index-part {
        max-width: 1024px;
    }

    .customer-favorites-section {
        width: 100%;

        .container {
            max-width: 1024px;
        }

        .product-categories {
            max-width: 1024px;
        }
    }

    .guide-section {
        width: 100%;

        .container {
            max-width: 1024px;
        }
    }

    .testimonials-section {
        .testimonials-container {
            max-width: 1024px;
        }
    }

    .customer-favorites-section {
        .category-variant {
            .category-content {
                .category-main {
                    max-width: 1024px;

                }
            }
        }

    }
}

// Medium-Large Screens (1200px and below)
@media (max-width: 1024px) {

    .guide-section {
        .guide-steps {
            gap: 10px;

            .step-card {
                width: calc((100vw - 100px) / 4);
                height: 500px;

                .step-overlay {
                    padding: 25px 20px;
                }

                .step-content {
                    width: 210px;

                    .step-title {
                        font-size: 28px;
                    }

                    .step-description {
                        font-size: 13px;
                        width: 200px;
                    }
                }
            }
        }
    }

    // Customer Favorites Section
    .customer-favorites-section {
        .section-header {
            .section-title {
                font-size: 40px;
            }
        }

        .category-variant {
            .category-content {
                .category-main {
                    flex-direction: column;
                    gap: 40px;
                    height: auto;
                }
            }
        }

        .product-grid {
            .product-row {
                display: flex;
                justify-content: center;
                gap: 20px;
            }

            .product-item {
                .product-background {
                    width: 300px;
                    height: 280px;

                    .product-container {
                        width: 300px;
                        height: 280px;

                        .product-link {
                            width: 300px;
                            height: 280px;

                            .product-content {
                                .product-image-wrapper {
                                    width: 250px;
                                    height: 150px;

                                    .product-image-container {
                                        width: 250px;

                                        .product-image {
                                            height: 150px;
                                        }
                                    }
                                }

                                .product-text {
                                    width: 250px;

                                    .product-title {
                                        font-size: 18px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .bottom-section {
            .bottom-container {
                .bottom-title {

                    .title-part,
                    .title-highlight,
                    .title-separator {

                        .title-text,
                        .separator-text {
                            font-size: 36px;
                        }
                    }

                    .title-highlight {
                        font-size: 36px;

                        &::after {
                            content: '|';
                            color: #0084FF;
                            animation: blink 1s infinite;
                            margin-left: 2px;
                        }
                    }
                }
            }
        }
    }

    // Testimonials Section
    .testimonials-section {
        padding: 40px 150px;

        .testimonials-header {
            .testimonials-description {
                width: 100%;
                max-width: 800px;

                p {
                    font-size: 16px;
                }
            }
        }

        .testimonials-cards {
            gap: 40px;
            padding: 10px 40px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .testimonial-card {
            width: 320px;
            height: 420px;
        }
    }

    // Business Partners Section
    .partners-section {
        width: 100%;
        max-width: 900px;

        .partners-header {
            h2 {
                font-size: 42px;
            }

            .partners-description {
                width: 100%;
                max-width: 800px;

                p {
                    font-size: 14px;
                    font-weight: 400;
                    color: #666;
                }
            }
        }

        .partners-logos {
            width: 100%;
            max-width: 700px;
            gap: 20px;
            flex-wrap: wrap;

            .partner-logo {
                width: 120px;
                height: 56px;
            }
        }
    }
}

// Medium Screens (1024px and below)
@media (max-width: 1024px) {

    // Get Easy Solution Section
    .get-solution-section {
        .solution-content {
            flex-direction: column;
            gap: 60px;
        }
    }

    // Capabilities Section
    .capabilities-section {
        .capabilities-container {
            max-width: 100%;
            padding: 0 16px;
        }

        .capabilities-carousel {
            .capabilities-button-prev {
                left: 10px;
            }

            .capabilities-button-next {
                right: 10px;
            }
        }

        .capability-slide {
            gap: 30px;
            padding: 30px;

            .capability-image {
                width: 100%;
                height: 400px;
                max-width: 576px;
            }

            // Customer Favorites Section
            .customer-favorites-section {
                .section-header {
                    .section-title {
                        font-size: 36px;
                    }
                }

                .category-variant {
                    .category-content {
                        .category-main {
                            flex-direction: column;
                            gap: 30px;
                        }
                    }
                }

                .featured-product {
                    width: 100%;
                    max-width: 600px;

                    .featured-container {
                        .featured-background {
                            .featured-content {
                                .featured-link {
                                    .featured-inner {
                                        .featured-image-container {
                                            width: 100%;
                                            max-width: 500px;
                                            height: 300px;

                                            .featured-image {
                                                .product-image {
                                                    height: 300px;
                                                }
                                            }
                                        }

                                        .featured-text {
                                            .featured-title {
                                                font-size: 20px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .product-grid {
                    .product-row {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }

                    .product-item {
                        .product-background {
                            width: 280px;
                            height: 260px;

                            .product-container {
                                width: 280px;
                                height: 260px;

                                .product-link {
                                    width: 280px;
                                    height: 260px;

                                    .product-content {
                                        .product-image-wrapper {
                                            width: 220px;
                                            height: 140px;

                                            .product-image-container {
                                                width: 220px;

                                                .product-image {
                                                    height: 140px;

                                                    img {
                                                        width: 100%;
                                                    }
                                                }
                                            }
                                        }

                                        .product-text {
                                            width: 220px;

                                            .product-title {
                                                font-size: 16px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .bottom-section {
                    .bottom-container {
                        .bottom-title {

                            .title-part,
                            .title-highlight,
                            .title-separator {

                                .title-text,
                                .separator-text {
                                    font-size: 32px;
                                }
                            }

                            .title-highlight {
                                font-size: 32px;

                                &::after {
                                    content: '|';
                                    color: #0084FF;
                                    animation: blink 1s infinite;
                                    margin-left: 2px;
                                }
                            }
                        }
                    }
                }
            }

            .capability-content {
                text-align: center;

                .capability-title {
                    font-size: 28px;
                }

                .capability-description {
                    font-size: 16px;
                }

                .capability-stats {
                    justify-content: center;
                    gap: 30px;

                    .stat-item {
                        text-align: center;

                        .stat-number {
                            font-size: 28px;
                        }
                    }
                }

                .capability-features {
                    align-items: center;
                }
            }
        }
    }

    // What You Need Section
    .what-you-need-section {
        padding: 60px 0;

        .section-header {
            margin-bottom: 40px;

            .section-title {
                font-size: 40px;
            }
        }

        .blog-cards-container {
            .blog-cards-grid {
                gap: 20px;

                .blog-card {
                    width: 350px;
                    height: 420px;

                    .blog-image {
                        height: 250px;
                    }

                    .blog-content {
                        padding: 24px;
                        height: calc(420px - 250px);

                        .blog-title {
                            font-size: 20px;
                        }

                        .blog-date {
                            font-size: 16px;
                            margin-top: 16px;
                        }
                    }
                }
            }
        }
    }

    .guide-section {
        .guide-steps {
            gap: 10px;

            .step-card {
                width: calc((100vw - 100px) / 4);
                height: 500px;

                .step-overlay {
                    padding: 25px 20px;
                }

                .step-content {
                    width: 210px;

                    .step-title {
                        font-size: 28px;
                    }

                    .step-description {
                        font-size: 13px;
                        width: 200px;
                    }
                }
            }
        }
    }

    .capabilities-section {
        .capabilities-carousel {
            .capability-slide {
                .capability-image {
                    width: 400px;
                }
            }
        }
    }
}

// Responsive Design for Guide Section
@media (max-width: 1440px) {
    .what-you-need-section {
        width: 100%;
        padding: 32px;
    }

    .index-part {
        max-width: 746px;
    }

    .guide-section {
        width: 100%;

        .container {
            padding: 0 20px;
        }

        .guide-steps {
            max-width: 100%;
            gap: 12px;

            .step-card {
                width: calc((100vw - 120px) / 4);
            }
        }
    }

    .customer-favorites-section {

        .bottom-section,
        .bottom-title {
            width: 100% !important;
        }
    }

    .products-section {
        .products-content {
            display:none;
            &.pc-view{
                display:none;
            }
            &.mobile-view{

                display:block;
                .products-grid{
                    overflow-x:auto;
                    grid-template-columns:repeat(8, 1fr);
                }
            }
            .products-button-prev {
                display:none;
                left: 10px;
            }

            .products-button-next {
                display:none;
                right: 10px;
            }
        }
    }
}

@media (max-width: 768px) {
    .guide-section {
        padding: 40px 0;

        .container {
            padding: 0 16px;
        }

        .guide-header {
            margin-bottom: 30px;

            .guide-title {
                font-size: 32px;
            }

            .guide-description p {
                font-size: 16px;
            }
        }

        .guide-steps {
            gap: 20px;
            padding: 0;
            justify-content: flex-start;
            overflow-x: auto;

            .step-card {
                width: 272px;
                height: 500px;
                margin: 0 auto;

                .step-overlay {
                    padding: 0;
                }

                .step-content {
                    width: 100%;

                    .step-title {
                        font-size: 24px;
                        padding: 0;
                        margin-bottom: 0;
                    }

                    .step-description {
                        font-size: 13px;
                        width: 100%;
                        padding: 0;
                    }
                }
            }
        }
    }

    .customer-favorites-section .category-variant .category-header .category-background .category-container .category-title {
        font-size: 14px;
    }

    .testimonials-section {
        padding: 40px 16px;

        .testimonials-header {
            margin-bottom: 30px;

            h2 {
                font-size: 24px;
            }

            .testimonials-description {
                width: 100%;

                p {
                    font-size: 14px;
                    font-weight: 400;
                    color: #666;
                    line-height: 1.5;
                }
            }
        }

        .testimonials-cards {
            flex-wrap: nowrap;
            flex-direction: row;
            gap: 16px;
            padding: 0;
            justify-content: flex-start;
            align-items: center;
        }

        .testimonial-card {
            width: 100%;
            max-width: 320px;
            min-height: 410px;
            padding: 20px;

            .testimonial-content {
                .testimonial-stats {
                    .stat-item {
                        align-items: flex-start;

                        .stat-value {
                            font-size: 48px;
                            font-weight: 500;
                        }
                    }

                }

                .user-info {
                    margin-bottom: 16px;

                    .user-name {
                        font-size: 16px;
                    }

                    .user-title {
                        font-size: 14px;
                    }
                }

                .user-stats {
                    margin-bottom: 16px;

                    .stat-item {
                        .stat-number {
                            font-size: 20px;
                        }

                        .stat-label {
                            font-size: 12px;
                        }
                    }
                }

                .testimonial-text {
                    p {
                        font-size: 14px;
                        line-height: 1.4;
                    }
                }
            }
        }

        .testimonials-navigation {
            display: none;
        }

        .partners-section {
            .partners-header h2 {
                margin-top: 50px;
                font-size: 24px;
            }

            .partners-logos {
                display: none;
            }
        }

    }

    .index-banner {
        padding-top: 20px;

        .banner-text {
            top: 0;
            left: 0;

            h1,
            h1 .title {
                font-size: 24px;
            }

            p {
                width: auto;
                font-size: 14px;
                color: #666;
                line-height: 1.4;
            }

            .banner-buttons {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
                width: 228px;
                margin: 30px auto 0;

                .button-primary {
                    width: 228px;
                    height: 40px;
                    background: linear-gradient(149deg, rgba(67, 157, 241, 1) 0%, rgba(71, 82, 230, 1) 100%);
                    border-radius: 33px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .btn-learn-more {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;

                        span {
                            font-family: Inter;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 1.4em;
                            letter-spacing: -0.04em;
                            color: #FFFFFF;
                            text-align: center;
                        }
                    }
                }

                .button-secondary {
                    width: 228px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0px;

                    .btn-meet-us {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        text-decoration: none;

                        span {
                            font-family: Inter;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 1.4em;
                            letter-spacing: -0.04em;
                            color: #000000;
                            text-align: center;
                        }
                    }
                }
            }
        }


    }

    // Products Section - Mobile Design
    .products-section {
        width: 100%;
        padding: 24px 15px 0;
        background: #ffffff;

        .products-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            padding: 0;

            .product-swiper {
                width: 100%;
                padding: 10px 0 15px;

                .products-grid {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    gap: 15px;
                    overflow-x: auto;
                    overflow-y: hidden;
                    scroll-behavior: smooth;
                    padding: 10px 0;

                    /* 隐藏滚动条 */
                    scrollbar-width: none;
                    /* Firefox */
                    -ms-overflow-style: none;
                    /* IE and Edge */

                    &::-webkit-scrollbar {
                        display: none;
                        /* Chrome, Safari, Opera */
                    }

                    .product-card {
                        width: 160px;
                        height: 452px;
                        background: #f6f6f6;
                        border-radius: 24px;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0;
                        position: relative;
                        flex-shrink: 0;

                        .tip {
                            position: absolute;
                            top: 15px;
                            left: 25px;
                            width: auto;
                            height: 24px;
                            background: rgba(67, 157, 241, 0.1);
                            border-radius: 40px;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            padding: 8px 16px 8px 8px;
                            z-index: 2;

                            svg {
                                width: 16px;
                                height: 16px;
                            }

                            span {
                                font-family: Inter;
                                font-size: 12px;
                                font-weight: 300;
                                line-height: 1.2;
                                color: #439df1;
                            }
                        }

                        h3 {
                            width: 100%;
                            height:39px;
                            font-family: Inter;
                            font-size: 16px;
                            font-weight: 700;
                            line-height: 1.2;
                            text-align: center;
                            color: #3d3d3d;
                            margin: 60px 0 0 0;
                            padding: 0 6px;
                            order: 2;
                        }

                        img {
                            width: 100%;
                            height:129px;
                            max-width: 129px;
                            border-radius: 8px;
                            margin: 0 auto 20px;
                            object-fit: contain;
                            order: 1;
                        }

                        p {
                            width: 100%;
                            max-width: 155px;
                            font-family: Inter;
                            font-size: 12px;
                            font-weight: 300;
                            line-height: 1.2;
                            text-align: center;
                            color: #3d3d3d;
                            margin: 0 auto 10px;
                            order: 3;
                        }

                        .features-section {
                            width: 100%;
                            max-width: 160px;
                            margin: 10px auto;
                            order: 4;

                            .features-container {
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                gap: 10px;
                                margin:0 auto;

                                .feature-item {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    gap: 9px;

                                    .feature-image {
                                        width: 24px;
                                        height: 24px;
                                        margin-bottom:0;
                                        border-radius: 50%;
                                        overflow: hidden;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            margin: 0;
                                        }
                                    }

                                    .feature-label {
                                        font-family: Inter;
                                        font-size: 8px;
                                        font-weight: 300;
                                        line-height: 1.4;
                                        text-transform: uppercase;
                                        text-align: center;
                                        color: #000000;
                                    }
                                }
                            }
                        }

                        .product-button {
                            width: 100%;
                            max-width: 150px;
                            height: 24px;
                            line-height:24px;
                            background: #000000;
                            border-radius: 21px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 20px auto 40px;
                            padding:0;
                            font-size:12px;
                            order: 5;

                            span {
                                font-family: Inter;
                                font-size: 12px;
                                font-weight: 300;
                                line-height: 1.2;
                                text-align: center;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }

        .products-button-prev,
        .products-button-next {
            display: none;
        }
    }

    // Index Part - Mobile
    .index-part {
        width: 100%;
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        .default-title {
            font-family: Inter;
            font-size: 24px;
            font-weight: 800;
            line-height: 1.4;
            text-align: center;
            color: #3d3d3d;
            margin: 0;
        }

        .dinosaw-text {
            width: 100%;
            max-width: 300px;
            font-family: Inter;
            font-size: 14.5px;
            font-weight: 400;
            line-height: 1.2;
            text-align: center;
            color: #666666;
            margin: 0;
        }
    }

    // Capabilities Section
    .capabilities-section {
        padding: 20px 0;

        .capabilities-header {
            margin-bottom: 40px;

            .capabilities-title {
                font-size: 32px;
            }
        }

        .capabilities-carousel {
            .capability-slide {
                padding: 10px;
                gap: 20px;

                .capability-image {
                    width: 100%;
                    height: 300px;
                }

                .capability-content {
                    width: 100%;
                    padding: 0 15px;
                    text-align: left;

                    .capability-title {
                        font-size: 24px;
                        margin-bottom: 15px;

                    }

                    .achievements-header .achievements-title {
                        font-size: 24px;
                        text-align: center;
                    }

                    .achievement-items {
                        width: 100%;
                        gap: 20px;

                        .achievement-text {
                            p {
                                font-size: 16px !important;
                            }
                        }
                    }

                    .capability-description {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }

                    .capability-stats {
                        gap: 20px;
                        margin-bottom: 20px;

                        .stat-item {
                            .stat-number {
                                font-size: 24px;
                            }

                            .stat-label {
                                font-size: 14px;
                            }
                        }
                    }

                    .capability-features {
                        gap: 8px;

                        .feature-item {
                            .feature-text {
                                font-size: 14px;
                            }
                        }
                    }
                }
            }

            .capabilities-button-prev,
            .capabilities-button-next {
                width: 40px;
                height: 40px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            .capabilities-button-prev {
                left: 5px;
            }

            .capabilities-button-next {
                right: 5px;
            }

            .capabilities-pagination {
                :global(.swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                }
            }
        }
    }

    // What You Need Section
    .what-you-need-section {
        padding: 50px 0;

        .container {
            padding: 0 16px;
        }

        .section-header {
            margin-bottom: 40px;

            .section-title {
                font-size: 24px;
                margin-bottom: 20px;
            }

            .section-description {
                p {
                    font-size: 14px;
                    margin-bottom: 16px;
                    font-weight: 400;
                    color: #666;
                }
            }
        }

        .blog-cards-container {
            width: 100%;

            .blog-navigation-prev,
            .blog-navigation-next {
                display: none;
            }

            .blog-cards-grid {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: stretch;
                gap: 10px;
                overflow-x: auto;
                overflow-y: hidden;
                scroll-behavior: smooth;
                padding: 10px 0;

                /* 隐藏滚动条 */
                scrollbar-width: none;
                /* Firefox */
                -ms-overflow-style: none;
                /* IE and Edge */

                &::-webkit-scrollbar {
                    display: none;
                    /* Chrome, Safari, Opera */
                }

                .blog-card {
                    width: 160px;
                    height: 202px;
                    background: #FCFCFC;
                    border-radius: 8px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;

                    .blog-image {
                        width: 100%;
                        height: 104px;
                        border-radius: 8px 8px 0 0;
                        object-fit: cover;
                        flex-shrink: 0;
                    }

                    .blog-content {
                        width: 100%;
                        height: calc(202px - 104px);
                        padding: 8px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;

                        .blog-title {
                            font-family: Inter;
                            font-size: 11px;
                            font-weight: 500;
                            line-height: 1.2;
                            color: #000000;
                            margin: 0;
                            text-align: center;
                            display: -webkit-box;
                            -webkit-line-clamp: 4;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            width: 100%;
                            max-width: 144px;
                        }

                        .blog-date {
                            display: none;
                        }
                    }
                }
            }

            .blog-button-prev,
            .blog-button-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 10;

                svg {
                    width: 24px;
                    height: 24px;
                    stroke: #FFFFFF;
                    stroke-width: 2px;
                }
            }

            .blog-button-next {
                right: 20px;
            }
        }
    }

    // Guide Section
    .guide-section {
        padding: 22px 32px 22px;
        background: #FFFFFF;

        .container {
            width: 100%;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }

        .guide-header {
            width: 100%;
            max-width: 316px;
            text-align: center;
            margin-bottom: 0;

            .guide-title {
                font-family: Inter;
                font-size: 24px;
                font-weight: 800;
                line-height: 1.4;
                color: #3D3D3D;
                margin: 0 0 32px 0;
                text-align: center;
            }

            .guide-description {
                width: 100%;
                max-width: 280px;
                margin: 0 auto;

                p {
                    font-family: Inter;
                    font-size: 14.5px;
                    font-weight: 400;
                    line-height: 1.2;
                    color: #666666;
                    text-align: center;
                    margin: 0 0 17.39px 0;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .guide-steps {
            width: 100%;
            max-width: 358px;
            height: 422px;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            gap: 10px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-behavior: smooth;
            padding: 16px 0;

            /* 隐藏滚动条 */
            scrollbar-width: none;
            /* Firefox */
            -ms-overflow-style: none;
            /* IE and Edge */

            &::-webkit-scrollbar {
                display: none;
                /* Chrome, Safari, Opera */
            }

            .step-card {
                width: 272px;
                height: 390px;
                background: #FFFFFF;
                border-radius: 16px 16px 0 0;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                position: relative;

                .step-image {
                    width: 100%;
                    height: 390px;
                    object-fit: cover;
                    border-radius: 16px 16px 0 0;
                }

                .step-overlay {
                    position: absolute;
                    top: 20px;
                    left: 28px;
                    width: 214px;
                    padding: 0;
                    background: transparent;
                    display: flex;
                    flex-direction: column;
                    gap: 21px;
                }

                .step-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 21px;

                    .step-title {
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 1;
                        color: #000000;
                        text-align: left;
                        margin: 0;
                    }

                    .step-description {
                        font-family: Inter;
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 1;
                        color: #3D3D3D;
                        text-align: left;
                        margin: 0;
                        width: 100%;
                    }
                }
            }
        }
    }

    // Customer Favorites Section
    .customer-favorites-section {
        width: 100%;
        padding: 40px 0;

        .container {
            padding: 0 16px;
        }

        .section-header {
            margin-bottom: 30px;

            .section-title {
                font-size: 24px;
                color: #3d3d3d;
            }

            .section-description {
                p {
                    font-size: 14px;
                    font-weight: 400;
                }
            }
        }

        .category-variant {
            .category-content {
                padding: 20px 10px;
                width: 100%;

                .category-main {
                    flex-direction: column;
                    gap: 20px;
                    padding: 0;
                    width: 100%;
                    height: auto;
                }
            }
        }

        .featured-product {
            width: 100%;
            height: auto;

            .featured-container {
                width: 100%;
                height: auto;
                // flex-direction:row;

                .featured-background {
                    .featured-content {
                        width: 100%;
                        height: auto;
                        padding: 15px;

                        .featured-link {
                            width: 100%;
                            height: auto;

                            .featured-inner {
                                .featured-image-container {
                                    width: 100%;
                                    height: 200px;

                                    .featured-image {
                                        width: 100%;

                                        .product-image {
                                            height: 200px;
                                        }
                                    }
                                }

                                .featured-text {
                                    width: 100%;

                                    .featured-title {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .product-grid {
            width: 100%;
            height: auto;

            .product-row {
                display: flex;
                justify-content: center;
                gap: 10px;
            }

            .product-item {
                .product-background {
                    width: 160px;
                    height: 200px;

                    .product-container {
                        width: 160px;
                        height: 200px;

                        .product-link {
                            width: 160px;
                            height: 200px;

                            .product-content {
                                gap: 8px;

                                .product-image-wrapper {
                                    width: 130px;
                                    height: 100px;

                                    .product-image-container {
                                        width: 130px;

                                        .product-image {
                                            height: 100px;
                                        }
                                    }
                                }

                                .product-text {
                                    width: 130px;

                                    .product-title {
                                        font-size: 12px;
                                        height: auto;
                                        min-height: 36px;
                                        line-height: 1.2;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .bottom-section {
            width: 100%;
            margin: 30px auto 0;

            .bottom-container {
                gap: 20px;

                .bottom-title {
                    width: 100%;
                    height: auto;
                    text-align: center;

                    .title-part,
                    .title-highlight,
                    .title-separator {
                        position: static;
                        display: block;
                        margin: 5px 0;
                        width: 100%;

                        .title-text,
                        .separator-text {
                            font-size: 20px;
                        }
                    }

                    .title-highlight {
                        font-size: 20px;
                        width: 100%;
                        height: auto;

                        &::after {
                            content: '|';
                            color: #0084FF;
                            animation: blink 1s infinite;
                            margin-left: 2px;
                        }
                    }
                }

                .bottom-description {
                    width: 100%;

                    .description-container {
                        .description-text {
                            font-size: 14px;
                        }
                    }
                }

                .bottom-cta {
                    width: 250px;

                    .cta-button {
                        width: 250px;

                        .cta-container {
                            left: 50%;
                            transform: translateX(-50%);
                            height:100%;

                            .cta-content {
                                .cta-text {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.dynamic-product-section{
    margin:30px 0;
}


</style>