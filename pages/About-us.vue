<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />

        <!-- About Hero Section -->
        <div class="about-hero-section">

            <div class="hero-background">
                <div class="breadcrumb-container">
                    <div class="breadcrumb-wrapper">
                        <div class="breadcrumb-link">
                            <div class="breadcrumb-text">
                                <div class="text-container">
                                    <span class="breadcrumb-home"><NuxtLink to="/">{{ aboutUs.home_text }}</NuxtLink></span>
                                </div>
                            </div>
                            <div class="breadcrumb-text">
                                <div class="text-container separator">
                                    <span class="breadcrumb-separator">/</span>
                                </div>
                            </div>
                            <div class="breadcrumb-text">
                                <div class="text-container">
                                    <span>{{ aboutUs.products_btn_text }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content Container -->
                <div class="hero-content">
                    <!-- Main Title -->
                    <div class="hero-title-section">
                        <div class="hero-title-container">
                            <h2 class="hero-main-title">{{ aboutUs.hero_main_small_title }}</h2>
                        </div>
                    </div>

                    <!-- Subtitle -->
                    <div class="hero-subtitle-section">
                        <div class="hero-subtitle-container">
                            <h1 class="hero-subtitle">
                                {{ aboutUs.hero_main_before_big_title }}<br>
                                {{aboutUs.hero_main_after_big_title }}
                            </h1>
                        </div>
                    </div>
                    <!-- Action Buttons -->
                    <div class="hero-actions">
                        <div class="action-button learn-products">
                            <NuxtLink to="/Products" target="_blank">
                            <div class="button-content">
                                <div class="button-text-container">
                                    <span class="button-text">{{ aboutUs.learn_products_btn_text }}</span>
                                </div>
                                <div class="button-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12L12 5M19 12L12 19" stroke="#439DF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            </NuxtLink>
                        </div>
                        <div class="action-button contact-us">
                             <NuxtLink to="/contact" target="_blank">
                            <div class="button-content">
                                <div class="button-text-container">
                                    <span class="button-text">{{ aboutUs.contact_us_btn_text }}</span>
                                </div>
                            </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Statistics Section -->
        <div class="statistics-section">
            <div class="statistics-container">
                <!-- Section Title -->
                <div class="statistics-title-section">
                    <div class="statistics-title-container">
                        <h2 class="statistics-title">{{ aboutUs.continuously_improve_productivity_title }}</h2>
                    </div>
                </div>
                
                <!-- Statistics Cards -->
                <div class="statistics-cards">
                    <!-- Card 1: Countries Served -->
                    <div class="statistics-card">
                        <div class="card-content">
                            <div class="card-icon-section">
                                <div class="card-icon-container">
                                    <div class="card-icon countries-icon">
                                        <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/3WAqTA4czHSx7tLQYQumGPcHF0.webp"></NuxtImg>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text-section">
                                <div class="card-number-container">
                                    <span class="card-number">120+</span>
                                </div>
                                <div class="card-description-container">
                                    <p class="card-description">
                                        {{ aboutUs.continuously_improve_productivity_pannel_text_1 }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card 2: Technology Patents -->
                    <div class="statistics-card">
                        <div class="card-content">
                            <div class="card-icon-section">
                                <div class="card-icon-container">
                                    <div class="card-icon patents-icon">
                                        <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/l3BnqZzkI0K3eR46cShkpQHWqw.webp"></NuxtImg>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text-section">
                                <div class="card-number-container">
                                    <span class="card-number">100+</span>
                                </div>
                                <div class="card-description-container">
                                    <p class="card-description">
                                        {{ aboutUs.continuously_improve_productivity_pannel_text_2 }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card 3: Industry Expertise -->
                    <div class="statistics-card">
                        <div class="card-content">
                            <div class="card-icon-section">
                                <div class="card-icon-container">
                                    <div class="card-icon expertise-icon">
                                        <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/6APWWoW36QHSZvUE58xYEN6x0o.webp"></NuxtImg>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text-section">
                                <div class="card-number-container">
                                    <span class="card-number">20+</span>
                                </div>
                                <div class="card-description-container">
                                    <p class="card-description">
                                        {{ aboutUs.continuously_improve_productivity_pannel_text_3 }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Who We Are Section -->
        <div class="who-we-are-section">
            <div class="who-we-are-container">
                <!-- Section Title -->
                <div class="who-we-are-title-section">
                    <div class="who-we-are-title-container">
                        <h2 class="who-we-are-title">{{ aboutUs.who_we_are_title }}</h2>
                    </div>
                </div>
                
                <!-- Content Text -->
                <div class="who-we-are-content" v-html="aboutUs.who_we_are_description"></div>
            </div>
        </div>

        <!-- Certifications Section -->
        <div class="certifications-section">
            <div class="certifications-container">
                <!-- Section Title -->
                <div class="certifications-title-section">
                    <div class="certifications-title-container">
                        <h2 class="certifications-title">{{ aboutUs.certifications_title }}</h2>
                    </div>
                </div>
                
                <!-- Certifications Grid -->
                <div class="certifications-grid">
                    <!-- Row 1 -->
                    <div class="certifications-row">
                        <!-- Card 1: High-Tech Enterprise -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image high-tech-image">
                                            <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/6yAYKKmXPLJzljFds9E3zgZEU.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_1 }}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 2: Specialized & Innovative Enterprise -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image specialized-image">
                                            <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/8fLrXBgJrhsheTF9BW6HqmFeOc.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_2 }}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 3: CNC Demonstration Project -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image cnc-image">
                                           <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Q2vJCX0s2XnmOQPvFtelWgFtYNM.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_3 }}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Row 2 -->
                    <div class="certifications-row">
                        <!-- Card 4: CE Certification -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image ce-image">
                                            <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Yiho2Cb5dzAnUvfdxCniH50mk.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_4}}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 5: 100+ Patents -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image patents-image">
                                            <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Ylr0CRgiSfaNfAW4kzkACAp8Sk8.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_5 }}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 6: ISO Certification -->
                        <div class="certification-card">
                            <div class="card-content">
                                <div class="card-image-section">
                                    <div class="card-image-container">
                                        <div class="card-image iso-image">
                                            <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/XnigRDrO1VBjbKJKRd8TCFSlc.webp"></NuxtImg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text-section">
                                    <div class="card-title-container">
                                        <p class="card-title">{{ aboutUs.certifications_pannel_title_6 }}</p>
                                    </div>
                                    <div class="card-description-container">
                                        <div class="card-description" v-html="aboutUs.certifications_pannel_description_6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Why Choose DINOSAW Section -->
        <div class="why-choose-section">
            <div class="why-choose-container">
                <!-- Section Title -->
                <div class="why-choose-title-section">
                    <div class="why-choose-title-container">
                        <h2 class="why-choose-title">{{ aboutUs.why_choose_dinosaw_title }}</h2>
                    </div>
                </div>
                
                <!-- Features Grid -->
                <div class="features-grid">
                    <!-- Row 1 -->
                    <div class="features-row">
                        <!-- Feature 1: Independent R&D System -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg-1975636855_2249">
<path opacity="0.2" d="M51.4963 13.1966L44.4931 20.1955C44.2338 20.4554 43.8936 20.6192 43.5287 20.66C43.1638 20.7007 42.796 20.6159 42.4857 20.4195L42.2143 20.202L38.9846 16.9755C38.687 16.676 38.519 16.2714 38.517 15.8491C38.515 15.4268 38.6791 15.0207 38.9739 14.7183L45.9696 7.72691C39.7557 4.03306 31.5732 4.87845 26.1962 10.2512C23.9543 12.4829 22.4128 15.3205 21.7608 18.4158C21.1088 21.5112 21.3748 24.7295 22.526 27.6758L9.67293 40.5192C9.37292 40.8171 9.13454 41.1711 8.97141 41.5611C8.80827 41.9511 8.72359 42.3694 8.72219 42.7922C8.72079 43.2149 8.8027 43.6338 8.96325 44.0249C9.12379 44.4159 9.35982 44.7716 9.65786 45.0714L14.2014 49.6106C14.8077 50.2121 15.6279 50.5484 16.482 50.5457C17.336 50.5431 18.1541 50.2018 18.7568 49.5966L31.612 36.7532C34.5606 37.9034 37.7804 38.1691 40.8776 37.5178C43.9748 36.8666 46.815 35.3266 49.0506 33.0863C54.4665 27.6758 55.286 19.4201 51.4963 13.1966Z" fill="#1D78F4"></path>
<path d="M39.5048 7.66229L32.5016 14.6655C32.2252 14.9508 32.0627 15.3273 32.0449 15.7241C32.027 16.1209 32.155 16.5105 32.4047 16.8194L35.7927 20.2063C36.385 20.7803 37.3984 20.8503 37.9465 20.3032L45.0714 13.1761C48.8967 19.4438 48.0976 27.7361 42.6774 33.1563C38.0413 37.7924 30.8237 38.976 25.1785 36.7855L12.3125 49.6537C11.1645 50.8566 9.07312 50.9891 7.88743 49.8044L3.16189 45.0789C1.94927 43.8663 1.83835 41.8266 3.01219 40.6527L16.0279 27.6371C13.7179 21.7872 14.9273 14.8691 19.6582 10.1381C24.8522 4.94521 33.5753 4.11383 39.5059 7.66336L39.5048 7.66229ZM33.4008 8.88136C29.33 8.27613 24.85 9.51459 21.9424 12.4223C20.1845 14.1795 18.9651 16.4023 18.4276 18.8291C17.8902 21.2558 18.0571 23.7856 18.9087 26.1207L19.0788 26.6894L19.8111 28.4211L5.44496 42.7915L10.0714 47.4158L10.0283 47.3684L24.3837 33.0131L26.347 33.7744C31.0068 35.5815 36.8147 34.4507 40.3933 30.8721C41.8883 29.3769 42.9978 27.5409 43.6264 25.5221C44.255 23.5032 44.3839 21.362 44.002 19.2823L43.9234 18.8924L40.2296 22.5863C38.4354 24.3815 35.545 24.2889 33.684 22.6541L33.5074 22.4904L30.0053 18.9883L29.903 18.8634C28.4007 17.0251 28.4631 14.3704 30.0484 12.5655L30.2174 12.3814L33.6722 8.92552L33.4008 8.88244V8.88136Z" fill="#1D78F4"></path>
</svg>
                                <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_1 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_1"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Feature 2: Digital Factory -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg1221652121_5288">
<path opacity="0.2" d="M51.7538 46.5117H50.2033V22.4153C50.2033 18.642 47.3554 15.4492 43.9959 15.4492H34.6772V44.7754C34.6772 45.6462 33.9019 46.5169 33.1266 46.5169C32.3514 46.5169 31.5761 45.6462 31.5761 44.7754V11.9661C31.5761 8.19281 28.7283 5 25.3688 5H16.3084C12.9437 5 10.1011 8.19281 10.1011 11.9661V46.5169H8.55054C7.77527 46.5169 7 47.3877 7 48.2585C7 49.1292 7.77527 50 8.55054 50H51.7538C52.5291 50 53.3043 49.1292 53.3043 48.2585C53.3043 47.3877 52.5291 46.5117 51.7538 46.5117ZM24.0715 39.5404H17.859C17.0837 39.5404 16.3084 38.6697 16.3084 37.7989C16.3084 36.9281 17.0837 36.0574 17.859 36.0574H24.0663C24.8416 36.0574 25.6168 36.9281 25.6168 37.7989C25.622 38.9599 24.8467 39.5404 24.0715 39.5404ZM24.0715 29.3815H17.859C16.8253 29.3815 16.3084 28.5107 16.3084 27.6399C16.3084 26.7692 17.0837 25.8984 17.859 25.8984H24.0663C24.8416 25.8984 25.6168 26.7692 25.6168 27.6399C25.622 28.5107 24.8467 29.3815 24.0715 29.3815ZM24.0715 18.9271H17.859C16.8253 18.9271 16.3084 18.0563 16.3084 17.1856C16.3084 16.3148 17.0837 15.444 17.859 15.444H24.0663C24.8416 15.444 25.6168 16.3148 25.6168 17.1856C25.622 18.0563 24.8467 18.9271 24.0715 18.9271ZM45.5413 39.5404H39.334C38.5587 39.5404 37.7834 38.6697 37.7834 37.7989C37.7834 36.9281 38.5587 36.0574 39.334 36.0574H45.5413C46.3166 36.0574 47.0918 36.9281 47.0918 37.7989C47.097 38.9599 46.3217 39.5404 45.5413 39.5404ZM45.5413 29.3815H39.334C38.5587 29.3815 37.7834 28.5107 37.7834 27.6399C37.7834 26.7692 38.5587 25.8984 39.334 25.8984H45.5413C46.3166 25.8984 47.0918 26.7692 47.0918 27.6399C47.097 28.5107 46.3217 29.3815 45.5413 29.3815Z" fill="#1D78F4"></path>
<path d="M21.6168 37.7967C21.6162 37.0758 21.3029 36.4125 20.8792 35.9366C20.4621 35.4682 19.8225 35.0574 19.0663 35.0574H12.859C12.1028 35.0574 11.4632 35.4682 11.0461 35.9366C10.622 36.413 10.3084 37.0771 10.3084 37.7989C10.3084 38.5207 10.622 39.1848 11.0461 39.6612C11.4632 40.1296 12.1028 40.5404 12.859 40.5404H19.0715C19.7057 40.5404 20.3537 40.3027 20.8441 39.8119C21.3439 39.3119 21.62 38.6106 21.6168 37.7967ZM21.6168 37.7967C21.6168 37.7959 21.6168 37.7952 21.6168 37.7944L20.6168 37.7989H21.6168C21.6168 37.7982 21.6168 37.7974 21.6168 37.7967ZM43.0918 37.7967C43.0912 37.0758 42.7779 36.4125 42.3542 35.9366C41.9371 35.4682 41.2975 35.0574 40.5413 35.0574H34.334C33.5778 35.0574 32.9382 35.4682 32.5211 35.9366C32.097 36.413 31.7834 37.0771 31.7834 37.7989C31.7834 38.5207 32.097 39.1848 32.5211 39.6612C32.9382 40.1296 33.5778 40.5404 34.334 40.5404H40.5413C41.1766 40.5404 41.8259 40.3038 42.3177 39.8127C42.8189 39.3124 43.095 38.6106 43.0918 37.7967ZM43.0918 37.7967C43.0918 37.7959 43.0918 37.7952 43.0918 37.7944L42.0918 37.7989H43.0918C43.0918 37.7982 43.0918 37.7974 43.0918 37.7967ZM43.0918 27.637C43.091 26.9164 42.7777 26.2534 42.3542 25.7777C41.9371 25.3092 41.2975 24.8984 40.5413 24.8984H34.334C33.5778 24.8984 32.9382 25.3092 32.5211 25.7777C32.097 26.254 31.7834 26.9182 31.7834 27.6399C31.7834 28.3617 32.097 29.0258 32.5211 29.5022C32.9382 29.9707 33.5778 30.3815 34.334 30.3815H40.5413C41.2982 30.3815 41.9394 29.9725 42.358 29.5022C42.7827 29.0253 43.0953 28.3601 43.0918 27.637ZM43.0918 27.637C43.0918 27.636 43.0918 27.635 43.0918 27.634L42.0918 27.6399H43.0918C43.0918 27.639 43.0918 27.638 43.0918 27.637ZM44.2033 46.5117V47.5117H45.2033H46.7538C46.7708 47.5117 46.9062 47.5355 47.0716 47.7221C47.2298 47.9005 47.3043 48.109 47.3043 48.2585C47.3043 48.4075 47.2303 48.6141 47.0729 48.7908C46.9086 48.9754 46.7729 49 46.7538 49H3.55054C3.53142 49 3.39578 48.9754 3.23142 48.7908C3.07409 48.6141 3 48.4075 3 48.2585C3 48.1095 3.07409 47.9028 3.23142 47.7261C3.39578 47.5415 3.53142 47.5169 3.55054 47.5169H5.10108H6.10108V46.5169V11.9661C6.10108 8.63328 8.60157 6 11.3084 6H20.3688C23.0709 6 25.5761 8.63385 25.5761 11.9661V40C25.5761 40.1505 25.5627 40.3549 25.5448 40.628C25.5417 40.6739 25.5386 40.7217 25.5354 40.7716C25.5146 41.0935 25.4923 41.4766 25.4974 41.8407C25.5023 42.183 25.5308 42.6141 25.6649 42.9898C25.734 43.1836 25.8551 43.4321 26.0791 43.6399C26.3262 43.8692 26.6476 44 27 44C27.7988 44 28.1891 43.3957 28.3368 43.0173C28.4821 42.645 28.5246 42.2156 28.5398 41.8703C28.5558 41.504 28.5439 41.1199 28.53 40.7936C28.5259 40.6964 28.5217 40.6065 28.5179 40.5234C28.5079 40.3073 28.5 40.1368 28.5 40V22.4492C28.5 19.1355 31.1863 16.4492 34.5 16.4492H38.9959C41.6981 16.4492 44.2033 19.0831 44.2033 22.4153V46.5117ZM12.859 30.3815H19.0715L20.6168 27.6399H21.6168C21.6168 27.639 21.6168 27.638 21.6168 27.637C21.616 26.9164 21.3027 26.2534 20.8792 25.7777C20.4621 25.3092 19.8225 24.8984 19.0663 24.8984H12.859C12.1028 24.8984 11.4632 25.3092 11.0461 25.7777C10.622 26.254 10.3084 26.9182 10.3084 27.6399C10.3084 28.2592 10.49 28.9247 10.9119 29.4578C11.3544 30.0169 12.0275 30.3815 12.859 30.3815ZM12.859 19.9271H19.0715L20.6168 17.1856H21.6168C21.6168 17.1846 21.6168 17.1836 21.6168 17.1826C21.616 16.462 21.3027 15.799 20.8792 15.3233C20.4621 14.8548 19.8225 14.444 19.0663 14.444H12.859C12.1028 14.444 11.4632 14.8548 11.0461 15.3233C10.622 15.7997 10.3084 16.4638 10.3084 17.1856C10.3084 17.8049 10.49 18.4704 10.9119 19.0034C11.3544 19.5625 12.0275 19.9271 12.859 19.9271Z" stroke="#1D78F4" stroke-width="2"></path>
</svg>
                               <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_2 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_2"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Feature 3: Rapid Custom Design -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg132645252_7031">
<g clip-path="url(#svg132645252_7031_clip0_2110_10945)">
<path opacity="0.2" d="M4.4375 17.9357L4.60383 17.4627C5.15793 15.7474 6.98708 14.8097 8.68888 15.3684C9.0969 15.5029 9.47415 15.7171 9.79876 15.9985C10.1234 16.28 10.3889 16.623 10.5799 17.0079C10.8705 17.582 10.9844 18.2294 10.9074 18.8683C10.8303 19.5072 10.5657 20.1089 10.1469 20.5975C10.0461 20.7109 9.94522 20.819 9.83814 20.9557C12.2479 22.4459 14.6457 23.9117 17.0258 25.389C17.9279 25.9519 18.8339 26.5084 19.7438 27.0586C19.8346 27.1366 19.9426 27.1917 20.0591 27.2195C20.1755 27.2472 20.2968 27.2467 20.413 27.218C20.5292 27.1893 20.6368 27.1333 20.7269 27.0545C20.817 26.9758 20.887 26.8767 20.931 26.7654C23.6838 21.7115 26.4341 16.6565 29.1817 11.5999C28.6008 11.3506 28.1019 10.9429 27.7418 10.4234C27.3818 9.90384 27.1752 9.29348 27.1456 8.66208C27.1191 8.20253 27.1924 7.7427 27.3605 7.31417C27.5285 6.88564 27.7874 6.49857 28.1192 6.17955C28.4418 5.85964 28.8282 5.61128 29.2532 5.45064C29.6782 5.29 30.1322 5.22069 30.5858 5.24722C31.0393 5.27375 31.4822 5.39552 31.8855 5.60462C32.2889 5.81371 32.6437 6.10542 32.9268 6.46076C34.2917 8.15372 33.7995 10.1279 31.6268 11.6181C32.3332 12.9223 33.0219 14.2384 33.7397 15.542C35.7196 19.1981 37.7078 22.8497 39.7043 26.4967C40.1618 27.346 40.458 27.424 41.2715 26.9276C44.3543 25.0308 47.4347 23.1303 50.5129 21.226L50.9641 20.938C50.3249 20.3542 49.9357 19.5463 49.8777 18.6826C49.768 16.8784 51.1294 15.3263 52.92 15.2161C54.4326 15.1226 55.8096 16.0972 56.2348 17.5646C56.2701 17.6898 56.3236 17.8219 56.3652 17.9476V19.0901C55.8434 20.7831 54.7622 21.7645 52.9237 21.7759C52.8514 21.9729 52.7927 22.1585 52.7272 22.3742L47.3193 41.0519C47.0817 41.8653 46.8031 42.0805 45.9845 42.0805H14.8661C13.9934 42.0805 13.7262 41.8763 13.4892 41.0519C12.0234 35.9933 10.5595 30.9341 9.09743 25.8745C8.70499 24.51 8.30163 23.1461 7.90971 21.7697C7.28288 21.8089 6.65822 21.6645 6.11216 21.3542C5.5661 21.0439 5.12233 20.5812 4.83514 20.0226C4.6829 19.7184 4.55009 19.4049 4.4375 19.0839V17.9357ZM30.386 45.3469H44.9272C46.2631 45.2835 47.3978 46.3241 47.4607 47.6704C47.5173 48.8929 46.6685 49.9689 45.4735 50.1867C45.2942 50.2257 45.1112 50.2439 44.9272 50.2407H15.8449C15.3221 50.2554 14.8086 50.1007 14.3808 49.7999C13.9531 49.4991 13.634 49.0681 13.471 48.5712C13.2946 48.086 13.2834 47.5563 13.4389 47.0641C13.5945 46.5719 13.9081 46.1448 14.3312 45.849C14.8105 45.5414 15.3645 45.3699 15.9337 45.3531C20.7595 45.3168 25.5722 45.3531 30.386 45.3531V45.3469Z" fill="#1D78F4"></path>
<path d="M12.0599 25.9963C12.947 26.5498 13.8379 27.0972 14.7325 27.6385C14.927 27.7872 15.1509 27.8936 15.3897 27.9505L15.6216 26.9778L15.3898 27.9505C15.6612 28.0152 15.9443 28.0141 16.2152 27.9472C16.4862 27.8802 16.7372 27.7495 16.9474 27.5659C17.139 27.3985 17.2916 27.1915 17.3948 26.9595C20.1401 21.9195 22.8827 16.8784 25.6228 11.8357L25.9623 11.2109L26.31 11.8527C26.5877 12.3654 26.8669 12.8881 27.1479 13.414C27.5693 14.2027 27.9946 14.9987 28.4246 15.7797C30.4041 19.4351 32.392 23.0861 34.3882 26.7324C34.5144 26.9665 34.6607 27.208 34.8399 27.4114C35.0272 27.624 35.2903 27.8406 35.6535 27.9397C36.0173 28.0391 36.3541 27.9859 36.6234 27.8971C36.8816 27.812 37.1296 27.6769 37.3549 27.5395L37.358 27.5376C40.4415 25.6404 43.5227 23.7394 46.6015 21.8347L46.6016 21.8348L46.6134 21.8272L47.0646 21.5392L47.5279 21.2436C47.4548 21.447 47.3947 21.6382 47.3328 21.842L47.3328 21.8419L47.3292 21.8544L41.9219 40.5299C41.9218 40.5303 41.9217 40.5306 41.9215 40.531C41.8773 40.6823 41.8418 40.7714 41.8164 40.823C41.7666 40.8311 41.6828 40.8388 41.547 40.8388H10.4286C10.2693 40.8388 10.1717 40.8303 10.1128 40.8207C10.0885 40.7686 10.0549 40.6805 10.0127 40.5338L10.0121 40.5319C8.54651 35.4738 7.08276 30.4152 5.62089 25.3561C5.45253 24.7707 5.28393 24.1915 5.11558 23.6131C4.89192 22.8447 4.6687 22.0778 4.44706 21.3L4.87467 21.5645C5.92431 22.2136 6.96755 22.8555 8.00696 23.4951C9.36254 24.3293 10.7116 25.1594 12.0599 25.9963ZM12.0599 25.9963C12.0596 25.9961 12.0593 25.9959 12.0589 25.9957L12.5883 25.1473M12.0599 25.9963C12.0603 25.9965 12.0606 25.9967 12.061 25.9969L12.5883 25.1473M12.5883 25.1473C11.24 24.3104 9.88605 23.4773 8.52745 22.6413C7.77254 22.1767 7.0162 21.7113 6.25861 21.2439M12.5883 25.1473C13.4904 25.7102 14.3964 26.2667 15.3063 26.8169L6.25861 21.2439M6.25861 21.2439C6.2351 21.2716 6.21206 21.2997 6.18789 21.3306L5.40064 20.714L6.25861 21.2439ZM5.47705 18.5069C5.424 18.9466 5.2427 19.361 4.95584 19.6984C4.94305 19.7127 4.92921 19.7281 4.91449 19.7445C4.83241 19.8358 4.72273 19.9577 4.61339 20.0973L4.24025 20.5737L4.21346 20.4797L3.40981 20.5299C2.97701 20.557 2.54572 20.4573 2.16869 20.2431L1.67466 21.1125L2.16869 20.2431C1.79316 20.0297 1.48768 19.7119 1.28933 19.3283C1.18162 19.1126 1.08505 18.8916 1 18.6661V17.8647L1.10971 17.5527L1.11397 17.5406L1.11792 17.5284C1.50343 16.3349 2.76925 15.6931 3.93863 16.0766C4.2208 16.1696 4.4817 16.3178 4.7062 16.5124C4.93079 16.7071 5.1145 16.9445 5.24665 17.2108L5.24662 17.2108L5.25014 17.2177C5.45149 17.6156 5.53045 18.0642 5.47705 18.5069ZM23.854 7.43757L22.923 7.07247L23.854 7.43756C23.9693 7.14342 24.147 6.87772 24.3748 6.65875L24.3804 6.65338L24.3859 6.64792C24.6087 6.42691 24.8757 6.25532 25.1692 6.14435L24.8157 5.20894L25.1693 6.14435C25.4628 6.03337 25.7765 5.98549 26.0899 6.00381C26.4032 6.02214 26.7092 6.10627 26.9878 6.25072L27.445 5.36874L26.9878 6.25072C27.2665 6.39517 27.5116 6.5967 27.7072 6.84219L27.7071 6.8422L27.7108 6.84672C28.2245 7.48387 28.3333 8.08411 28.1961 8.63003C28.0499 9.21183 27.5814 9.89485 26.6237 10.5518L26.1404 10.8832L26.1465 10.8719L25.1386 10.4393C24.7302 10.264 24.3794 9.97734 24.1262 9.61206C23.8731 9.24677 23.7278 8.81762 23.7071 8.37368L23.7071 8.37367L23.7065 8.36279C23.6883 8.04735 23.7386 7.73172 23.854 7.43757ZM47.2009 19.9579C46.7529 19.5487 46.4797 18.9826 46.4382 18.3772C46.3632 17.1176 47.3129 16.0483 48.544 15.9725L48.5443 15.9725C49.5842 15.9082 50.5392 16.5779 50.8361 17.599C50.8578 17.6747 50.8962 17.7873 50.9277 17.8772V18.691C50.7103 19.332 50.4158 19.7655 50.0709 20.0451C49.712 20.3362 49.2138 20.5297 48.48 20.5342L47.8364 20.5382L47.2009 19.9579ZM26.9485 46.1114V46.1052H40.4897H40.5134L40.5371 46.1041C41.3137 46.0672 41.9866 46.6736 42.0242 47.475C42.058 48.2042 41.5525 48.8344 40.8567 48.9612L40.8401 48.9642L40.8236 48.9678C40.7193 48.9905 40.6133 49.001 40.5066 48.9992L40.4982 48.9991H40.4897H11.4074H11.3934L11.3794 48.9994C11.072 49.008 10.7701 48.9171 10.5186 48.7402L9.94335 49.5582L10.5186 48.7402C10.2671 48.5634 10.0795 48.31 9.98365 48.0178L9.97872 48.0028L9.97332 47.9879C9.87222 47.7097 9.86576 47.4059 9.95495 47.1237C10.0423 46.8474 10.2164 46.6069 10.4513 46.4379C10.7709 46.2369 11.1382 46.1242 11.5157 46.1113C14.7245 46.0872 17.9233 46.0953 21.1264 46.1033C22.7321 46.1074 24.3389 46.1114 25.9485 46.1114H26.9485Z" stroke="#1D78F4" stroke-width="2"></path>
</g>
<defs>
<clipPath id="svg132645252_7031_clip0_2110_10945">
<rect width="56" height="56" fill="white"></rect>
</clipPath>
</defs>
</svg>
                                <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_3 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Row 2 -->
                    <div class="features-row">
                        <!-- Feature 4: Fast After-Sales Service -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg-241639165_7880">
<path d="M33.4195 17.6836C31.0975 17.721 29.2537 19.6418 29.2907 21.9632V21.9632L33.5543 26.1078C35.8765 26.0704 37.7201 24.1498 37.6831 21.8283V21.8282C37.6459 19.5066 35.7419 17.6461 33.4195 17.6836ZM33.4195 17.6836L33.4356 18.6835L33.4195 17.6836ZM27.9102 44.704L27.892 44.719C27.545 44.9952 27.0687 45.075 26.6516 44.9262L26.6515 44.9261C26.2244 44.7739 25.8995 44.3982 25.8101 43.9529L25.8097 43.9505L24.7833 38.8977L24.6046 38.0184L23.7112 38.101C20.5154 38.3966 18.5129 36.8638 17.3342 35.4237L17.3342 35.4236C17.2319 35.2986 17.133 35.1701 17.0386 35.0414C15.6485 33.1415 15.267 31.0181 15.9205 28.7137L16.1621 27.8615L15.3453 27.5187L10.8015 25.6123C10.8013 25.6123 10.8011 25.6122 10.8009 25.6121C10.3892 25.4384 10.083 25.0475 10.0137 24.5896C10.0045 24.525 10 24.4615 10 24.399C10 24.0005 10.1739 23.6322 10.4769 23.3821L10.4772 23.3817L16.0991 18.7352L16.0994 18.7349C16.3436 18.5329 16.6526 18.4271 16.9717 18.4377C16.9718 18.4377 16.972 18.4377 16.9721 18.4378L23.4273 18.6642L23.8152 18.6778L24.1107 18.4261C24.7705 17.8642 25.4275 17.3205 26.1073 16.7579L26.133 16.7366C26.1332 16.7365 26.1333 16.7363 26.1335 16.7362C26.1335 16.7362 26.1336 16.7361 26.1336 16.7361C31.5071 12.2969 38.2786 10.3321 45.2179 11.2012C45.9136 11.2893 46.4123 11.8669 46.3562 12.5918L46.3557 12.599C45.8646 19.6126 42.6355 25.9127 37.2615 30.3536L37.261 30.354C36.685 30.8306 36.0744 31.3327 35.4408 31.843L35.1414 32.0841L35.0806 32.4637L33.9933 39.2505C33.9932 39.2508 33.9932 39.2511 33.9931 39.2513C33.9416 39.5693 33.7777 39.8549 33.532 40.058L27.9102 44.704Z" stroke="#1D78F4" stroke-width="2"></path>
<path d="M10.5115 44.4855L17.4427 42.8481L17.4739 42.8408C18.1002 42.6933 18.5919 42.2212 18.775 41.6134C18.9606 41.0001 18.8073 40.3359 18.3722 39.8685C18.3717 39.868 18.3712 39.8674 18.3707 39.8669L13.2623 34.3584L13.2623 34.3584L13.2599 34.3559C12.8253 33.8904 12.1748 33.6865 11.5473 33.8341C10.9184 33.9816 10.4259 34.4549 10.2432 35.0641L10.2431 35.0643L8.07667 42.2918C8.07652 42.2922 8.07638 42.2927 8.07624 42.2932C8.02387 42.4668 8 42.6418 8 42.812V42.8121V42.8121V42.8121V42.8122V42.8122V42.8122V42.8122V42.8123V42.8123V42.8123V42.8124V42.8124V42.8124V42.8125V42.8125V42.8125V42.8126V42.8126V42.8126V42.8127V42.8127V42.8127V42.8128V42.8128V42.8128V42.8129V42.8129V42.8129V42.8129V42.813V42.813V42.813V42.8131V42.8131V42.8131V42.8132V42.8132V42.8132V42.8133V42.8133V42.8133V42.8134V42.8134V42.8134V42.8135V42.8135V42.8135V42.8136V42.8136V42.8136V42.8136V42.8137V42.8137V42.8137V42.8138V42.8138V42.8138V42.8139V42.8139V42.8139V42.814V42.814V42.814V42.8141V42.8141V42.8141V42.8142V42.8142V42.8142V42.8143V42.8143V42.8143V42.8144V42.8144V42.8144V42.8144V42.8145V42.8145V42.8145V42.8146V42.8146V42.8146V42.8147V42.8147V42.8147V42.8148V42.8148V42.8148V42.8149V42.8149V42.8149V42.815V42.815V42.815V42.8151V42.8151V42.8151V42.8151V42.8152V42.8152V42.8152V42.8153V42.8153V42.8153V42.8154V42.8154V42.8154V42.8155V42.8155V42.8155V42.8156V42.8156V42.8156V42.8157V42.8157V42.8157V42.8158V42.8158V42.8158V42.8158V42.8159V42.8159V42.8159V42.816V42.816V42.816V42.8161V42.8161V42.8161V42.8162V42.8162V42.8162V42.8163V42.8163V42.8163V42.8164V42.8164V42.8164V42.8165V42.8165V42.8165V42.8166V42.8166V42.8166V42.8166V42.8167V42.8167V42.8167V42.8168V42.8168V42.8168V42.8169V42.8169V42.8169V42.817V42.817V42.817V42.8171V42.8171V42.8171V42.8172V42.8172V42.8172V42.8173V42.8173V42.8173V42.8173V42.8174V42.8174V42.8174V42.8175V42.8175V42.8175V42.8176V42.8176V42.8176V42.8177V42.8177V42.8177V42.8178V42.8178V42.8178V42.8179V42.8179V42.8179V42.818V42.818V42.818V42.8181V42.8181V42.8181V42.8181V42.8182V42.8182V42.8182V42.8183V42.8183V42.8183V42.8184V42.8184V42.8184V42.8185V42.8185V42.8185V42.8186V42.8186V42.8186V42.8187V42.8187V42.8187V42.8188V42.8188V42.8188V42.8188V42.8189V42.8189V42.8189V42.819V42.819V42.819V42.8191V42.8191V42.8191V42.8192V42.8192V42.8192V42.8193V42.8193V42.8193V42.8194V42.8194V42.8194V42.8195V42.8195V42.8195V42.8195V42.8196V42.8196V42.8196V42.8197V42.8197V42.8197V42.8198V42.8198V42.8198V42.8199V42.8199V42.8199V42.82V42.82V42.82V42.8201V42.8201V42.8201V42.8202V42.8202V42.8202V42.8203V42.8203V42.8203V42.8203V42.8204V42.8204V42.8204V42.8205V42.8205V42.8205V42.8206V42.8206V42.8206V42.8207V42.8207V42.8207V42.8208V42.8208V42.8208V42.8209V42.8209V42.8209V42.821V42.821V42.821V42.821V42.8211V42.8211V42.8211V42.8212V42.8212V42.8212V42.8213V42.8213V42.8213V42.8214V42.8214V42.8214V42.8215V42.8215V42.8215V42.8216V42.8216V42.8216V42.8217V42.8217V42.8217V42.8217V42.8218V42.8218V42.8218V42.8219V42.8219V42.8219V42.822V42.822V42.822V42.8221V42.8221V42.8221V42.8222V42.8222V42.8222V42.8223V42.8223V42.8223V42.8223V42.8224V42.8224V42.8224V42.8225V42.8225V42.8225V42.8226V42.8226V42.8226V42.8227V42.8227V42.8227V42.8228V42.8228V42.8228V42.8229V42.8229V42.8229V42.823V42.823V42.823V42.823V42.8231V42.8231V42.8231V42.8232V42.8232V42.8232V42.8233V42.8233V42.8233V42.8234V42.8234V42.8234V42.8235V42.8235V42.8235V42.8236V42.8236V42.8236V42.8237V42.8237V42.8237V42.8237V42.8238V42.8238V42.8238V42.8239V42.8239V42.8239V42.824V42.824V42.824V42.8241V42.8241V42.8241V42.8242V42.8242V42.8242V42.8243V42.8243V42.8243V42.8243V42.8244V42.8244V42.8244V42.8245V42.8245V42.8245V42.8246V42.8246V42.8246V42.8247V42.8247V42.8247V42.8248V42.8248V42.8248V42.8249V42.8249V42.8249V42.8249V42.825V42.825V42.825V42.8251V42.8251V42.8251V42.8252V42.8252V42.8252V42.8253V42.8253V42.8253V42.8254V42.8254V42.8254V42.8255V42.8255V42.8255V42.8255V42.8256V42.8256V42.8256V42.8257V42.8257V42.8257V42.8258V42.8258V42.8258V42.8259V42.8259V42.8259V42.826V42.826V42.826V42.8261V42.8261V42.8261V42.8261V42.8262V42.8262V42.8262V42.8263V42.8263V42.8263V42.8264V42.8264V42.8264V42.8265V42.8265V42.8265V42.8266V42.8266V42.8266V42.8267V42.8267V42.8267V42.8267V42.8268V42.8268V42.8268V42.8269V42.8269V42.8269V42.827V42.827V42.827V42.8271V42.8271V42.8271V42.8272V42.8272V42.8272V42.8272V42.8273V42.8273V42.8273V42.8274V42.8274V42.8274V42.8275V42.8275V42.8275V42.8276V42.8276V42.8276V42.8277V42.8277V42.8277V42.8278V42.8278V42.8278V42.8278V42.8279V42.8279V42.8279V42.828V42.828V42.828V42.8281V42.8281V42.8281V42.8282V42.8282V42.8282V42.8283V42.8283V42.8458L8.00061 42.8632C8.03455 43.8341 8.75937 44.6393 9.78695 44.6393C10.0436 44.6393 10.2891 44.5846 10.5115 44.4855Z" stroke="#1D78F4" stroke-width="2"></path>
<g opacity="0.2">
<path d="M32.5472 47.4748L38.1691 42.8288C38.6027 42.4703 38.8905 41.9668 38.9805 41.4099L40.068 34.6219C40.7066 34.1075 41.321 33.6022 41.8985 33.1245C47.4854 28.5077 50.8432 21.9533 51.3533 14.6689C51.4522 13.3888 50.5447 12.3609 49.3428 12.209C42.1306 11.3056 35.0829 13.3499 29.4961 17.9657C28.8079 18.5352 28.1369 19.0902 27.4623 19.6648L21.0057 19.4383C20.4426 19.4194 19.8947 19.6065 19.462 19.9644L13.8401 24.6109C13.3058 25.0521 13 25.7039 13 26.399C13 26.5107 13.0081 26.6227 13.0243 26.735C13.1439 27.5354 13.6755 28.223 14.4131 28.5339L18.9584 30.4409C18.2216 33.0389 18.6579 35.4815 20.2321 37.6326C20.3355 37.7736 20.4453 37.9164 20.5604 38.057C21.8781 39.6671 24.1783 41.432 27.8033 41.0968L28.8297 46.1496C28.988 46.9388 29.5573 47.5977 30.3156 47.8681C31.0722 48.1379 31.9274 47.9873 32.5472 47.4748ZM34.2906 23.9472C34.2623 22.1732 35.6704 20.7119 37.4356 20.6835C39.2009 20.655 40.6548 22.0701 40.6832 23.8442C40.7115 25.6183 39.3035 27.0795 37.5381 27.1079C35.7729 27.1364 34.319 25.7213 34.2906 23.9472Z" fill="#1D78F4"></path>
<path d="M21.2446 43.8674C21.5182 43.803 21.7365 43.5955 21.8179 43.3237C21.9009 43.0494 21.8317 42.755 21.6396 42.5492L16.529 37.0384C16.3354 36.831 16.0495 36.7432 15.7759 36.8077C15.5008 36.8721 15.2826 37.0796 15.201 37.3514L13.0338 44.5813C13.0108 44.6575 13 44.7351 13 44.812C13 44.8175 13 44.8229 13 44.8283C13.0169 45.3115 13.3474 45.6393 13.7869 45.6393C13.9268 45.6393 14.0575 45.6028 14.1712 45.5383L21.2446 43.8674H21.2446Z" fill="#1D78F4"></path>
</g>
</svg>
                                <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_4 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_4"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Feature 5: Strong Machine System -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg175286235_12989">
<mask id="svg175286235_12989_path-1-inside-1_2110_10973" fill="white">
<path d="M26.3969 4H22.6031C22.2316 3.99997 21.8715 4.12866 21.5842 4.36417C21.2968 4.59967 21.1 4.92745 21.0271 5.29174L20.0467 10.193C19.9917 10.4649 19.8674 10.7181 19.686 10.928C19.5046 11.1379 19.2722 11.2975 19.0111 11.3914C18.5645 11.5531 18.1272 11.7344 17.6993 11.9353C17.4827 12.0367 17.2464 12.0893 17.0072 12.0895C16.6907 12.0898 16.3811 11.9963 16.1177 11.8208L11.9593 9.04794C11.6501 8.84183 11.2791 8.74921 10.9093 8.78584C10.5396 8.82246 10.194 8.98607 9.93125 9.24883L7.24883 11.9312C6.98607 12.194 6.82246 12.5396 6.78584 12.9093C6.74921 13.2791 6.84183 13.6501 7.04794 13.9593L9.82076 18.1182C9.97418 18.3497 10.0653 18.6168 10.0854 18.8937C10.1054 19.1707 10.0537 19.4481 9.93527 19.6993C9.73437 20.1268 9.55324 20.5643 9.39185 21.0116C9.29798 21.2727 9.13839 21.5051 8.92848 21.6865C8.71858 21.8679 8.46544 21.9922 8.19353 22.0472L3.29174 23.0276C2.92754 23.1005 2.59982 23.2973 2.36432 23.5845C2.12883 23.8717 2.00009 24.2316 2 24.6031V28.3964C1.99997 28.7679 2.12866 29.128 2.36417 29.4153C2.59967 29.7027 2.92745 29.8995 3.29174 29.9724L8.19302 30.9528C8.46494 31.0078 8.71807 31.1321 8.92798 31.3135C9.13789 31.4949 9.29748 31.7273 9.39135 31.9884C9.55307 32.4354 9.73437 32.8728 9.93527 33.3007C10.0537 33.5519 10.1054 33.8293 10.0854 34.1063C10.0653 34.3832 9.97418 34.6503 9.82076 34.8818L7.04794 39.0407C6.84183 39.3499 6.74921 39.7209 6.78584 40.0907C6.82246 40.4604 6.98607 40.806 7.24883 41.0687L9.93125 43.7512C10.194 44.0139 10.5396 44.1775 10.9093 44.2142C11.2791 44.2508 11.6501 44.1582 11.9593 43.9521L16.1182 41.1792C16.3816 41.0037 16.6912 40.9102 17.0077 40.9105C17.2467 40.9107 17.4828 40.9633 17.6993 41.0647C18.1268 41.2656 18.5643 41.4469 19.0116 41.6087C19.2727 41.7025 19.5051 41.8621 19.6865 42.072C19.8679 42.2819 19.9922 42.5351 20.0472 42.807L21.0276 47.7083C21.1005 48.0725 21.2973 48.4002 21.5845 48.6357C21.8717 48.8712 22.2316 48.9999 22.6031 49H26.3964C26.7679 49 27.128 48.8713 27.4153 48.6358C27.7027 48.4003 27.8995 48.0725 27.9724 47.7083L28.9528 42.807C29.0078 42.5351 29.1321 42.2819 29.3135 42.072C29.4949 41.8621 29.7273 41.7025 29.9884 41.6087C30.4354 41.4469 30.8728 41.2656 31.3007 41.0647C31.5173 40.9633 31.7536 40.9107 31.9928 40.9105C32.3093 40.9102 32.6189 41.0037 32.8823 41.1792L37.0412 43.9521C37.3504 44.1582 37.7214 44.2508 38.0912 44.2142C38.4609 44.1775 38.8065 44.0139 39.0693 43.7512L41.7517 41.0687C42.0144 40.806 42.178 40.4604 42.2147 40.0907C42.2513 39.7209 42.1587 39.3499 41.9526 39.0407L39.1797 34.8818C39.0262 34.6504 38.935 34.3833 38.9149 34.1063C38.8947 33.8294 38.9463 33.5519 39.0647 33.3007C39.2656 32.8732 39.4468 32.4359 39.6081 31.9889C39.702 31.7278 39.8616 31.4954 40.0715 31.314C40.2814 31.1326 40.5346 31.0083 40.8065 30.9533L45.7078 29.9729C46.0721 29.9001 46.4 29.7033 46.6356 29.416C46.8712 29.1286 47 28.7685 47 28.3969V24.6031C47 24.2316 46.8713 23.8715 46.6358 23.5842C46.4003 23.2968 46.0725 23.1 45.7083 23.0271L40.807 22.0467C40.5351 21.9917 40.2819 21.8674 40.072 21.686C39.8621 21.5046 39.7025 21.2722 39.6087 21.0111C39.4469 20.5645 39.2656 20.1272 39.0647 19.6993C38.9463 19.4481 38.8946 19.1707 38.9146 18.8937C38.9347 18.6168 39.0258 18.3497 39.1792 18.1182L41.9521 13.9593C42.1582 13.6501 42.2508 13.2791 42.2142 12.9093C42.1775 12.5396 42.0139 12.194 41.7512 11.9312L39.0687 9.24883C38.806 8.98607 38.4604 8.82246 38.0907 8.78584C37.7209 8.74921 37.3499 8.84183 37.0407 9.04794L32.8818 11.8208C32.6184 11.9963 32.3088 12.0898 31.9923 12.0895C31.7533 12.0893 31.5172 12.0366 31.3007 11.9353C30.8732 11.7344 30.4357 11.5531 29.9884 11.3914C29.7273 11.2975 29.4949 11.1379 29.3135 10.928C29.1321 10.7181 29.0078 10.4649 28.9528 10.193L27.9729 5.29174C27.9 4.92745 27.7032 4.59967 27.4158 4.36417C27.1285 4.12866 26.7684 3.99997 26.3969 4ZM24.5 36.1429C22.2691 36.143 20.1071 35.3695 18.3825 33.9543C16.6579 32.5391 15.4774 30.5697 15.0421 28.3816C14.6067 26.1936 14.9435 23.9223 15.9951 21.9547C17.0467 19.9872 18.748 18.4451 20.809 17.5913C22.8701 16.7375 25.1635 16.6247 27.2984 17.2723C29.4333 17.9198 31.2776 19.2875 32.5171 21.1424C33.7566 22.9973 34.3146 25.2246 34.096 27.4448C33.8774 29.665 32.8958 31.7407 31.3183 33.3183C30.425 34.2166 29.3624 34.9287 28.1921 35.4135C27.0217 35.8984 25.7668 36.1463 24.5 36.1429Z"></path>
</mask>
<path d="M26.3969 4H22.6031C22.2316 3.99997 21.8715 4.12866 21.5842 4.36417C21.2968 4.59967 21.1 4.92745 21.0271 5.29174L20.0467 10.193C19.9917 10.4649 19.8674 10.7181 19.686 10.928C19.5046 11.1379 19.2722 11.2975 19.0111 11.3914C18.5645 11.5531 18.1272 11.7344 17.6993 11.9353C17.4827 12.0367 17.2464 12.0893 17.0072 12.0895C16.6907 12.0898 16.3811 11.9963 16.1177 11.8208L11.9593 9.04794C11.6501 8.84183 11.2791 8.74921 10.9093 8.78584C10.5396 8.82246 10.194 8.98607 9.93125 9.24883L7.24883 11.9312C6.98607 12.194 6.82246 12.5396 6.78584 12.9093C6.74921 13.2791 6.84183 13.6501 7.04794 13.9593L9.82076 18.1182C9.97418 18.3497 10.0653 18.6168 10.0854 18.8937C10.1054 19.1707 10.0537 19.4481 9.93527 19.6993C9.73437 20.1268 9.55324 20.5643 9.39185 21.0116C9.29798 21.2727 9.13839 21.5051 8.92848 21.6865C8.71858 21.8679 8.46544 21.9922 8.19353 22.0472L3.29174 23.0276C2.92754 23.1005 2.59982 23.2973 2.36432 23.5845C2.12883 23.8717 2.00009 24.2316 2 24.6031V28.3964C1.99997 28.7679 2.12866 29.128 2.36417 29.4153C2.59967 29.7027 2.92745 29.8995 3.29174 29.9724L8.19302 30.9528C8.46494 31.0078 8.71807 31.1321 8.92798 31.3135C9.13789 31.4949 9.29748 31.7273 9.39135 31.9884C9.55307 32.4354 9.73437 32.8728 9.93527 33.3007C10.0537 33.5519 10.1054 33.8293 10.0854 34.1063C10.0653 34.3832 9.97418 34.6503 9.82076 34.8818L7.04794 39.0407C6.84183 39.3499 6.74921 39.7209 6.78584 40.0907C6.82246 40.4604 6.98607 40.806 7.24883 41.0687L9.93125 43.7512C10.194 44.0139 10.5396 44.1775 10.9093 44.2142C11.2791 44.2508 11.6501 44.1582 11.9593 43.9521L16.1182 41.1792C16.3816 41.0037 16.6912 40.9102 17.0077 40.9105C17.2467 40.9107 17.4828 40.9633 17.6993 41.0647C18.1268 41.2656 18.5643 41.4469 19.0116 41.6087C19.2727 41.7025 19.5051 41.8621 19.6865 42.072C19.8679 42.2819 19.9922 42.5351 20.0472 42.807L21.0276 47.7083C21.1005 48.0725 21.2973 48.4002 21.5845 48.6357C21.8717 48.8712 22.2316 48.9999 22.6031 49H26.3964C26.7679 49 27.128 48.8713 27.4153 48.6358C27.7027 48.4003 27.8995 48.0725 27.9724 47.7083L28.9528 42.807C29.0078 42.5351 29.1321 42.2819 29.3135 42.072C29.4949 41.8621 29.7273 41.7025 29.9884 41.6087C30.4354 41.4469 30.8728 41.2656 31.3007 41.0647C31.5173 40.9633 31.7536 40.9107 31.9928 40.9105C32.3093 40.9102 32.6189 41.0037 32.8823 41.1792L37.0412 43.9521C37.3504 44.1582 37.7214 44.2508 38.0912 44.2142C38.4609 44.1775 38.8065 44.0139 39.0693 43.7512L41.7517 41.0687C42.0144 40.806 42.178 40.4604 42.2147 40.0907C42.2513 39.7209 42.1587 39.3499 41.9526 39.0407L39.1797 34.8818C39.0262 34.6504 38.935 34.3833 38.9149 34.1063C38.8947 33.8294 38.9463 33.5519 39.0647 33.3007C39.2656 32.8732 39.4468 32.4359 39.6081 31.9889C39.702 31.7278 39.8616 31.4954 40.0715 31.314C40.2814 31.1326 40.5346 31.0083 40.8065 30.9533L45.7078 29.9729C46.0721 29.9001 46.4 29.7033 46.6356 29.416C46.8712 29.1286 47 28.7685 47 28.3969V24.6031C47 24.2316 46.8713 23.8715 46.6358 23.5842C46.4003 23.2968 46.0725 23.1 45.7083 23.0271L40.807 22.0467C40.5351 21.9917 40.2819 21.8674 40.072 21.686C39.8621 21.5046 39.7025 21.2722 39.6087 21.0111C39.4469 20.5645 39.2656 20.1272 39.0647 19.6993C38.9463 19.4481 38.8946 19.1707 38.9146 18.8937C38.9347 18.6168 39.0258 18.3497 39.1792 18.1182L41.9521 13.9593C42.1582 13.6501 42.2508 13.2791 42.2142 12.9093C42.1775 12.5396 42.0139 12.194 41.7512 11.9312L39.0687 9.24883C38.806 8.98607 38.4604 8.82246 38.0907 8.78584C37.7209 8.74921 37.3499 8.84183 37.0407 9.04794L32.8818 11.8208C32.6184 11.9963 32.3088 12.0898 31.9923 12.0895C31.7533 12.0893 31.5172 12.0366 31.3007 11.9353C30.8732 11.7344 30.4357 11.5531 29.9884 11.3914C29.7273 11.2975 29.4949 11.1379 29.3135 10.928C29.1321 10.7181 29.0078 10.4649 28.9528 10.193L27.9729 5.29174C27.9 4.92745 27.7032 4.59967 27.4158 4.36417C27.1285 4.12866 26.7684 3.99997 26.3969 4ZM24.5 36.1429C22.2691 36.143 20.1071 35.3695 18.3825 33.9543C16.6579 32.5391 15.4774 30.5697 15.0421 28.3816C14.6067 26.1936 14.9435 23.9223 15.9951 21.9547C17.0467 19.9872 18.748 18.4451 20.809 17.5913C22.8701 16.7375 25.1635 16.6247 27.2984 17.2723C29.4333 17.9198 31.2776 19.2875 32.5171 21.1424C33.7566 22.9973 34.3146 25.2246 34.096 27.4448C33.8774 29.665 32.8958 31.7407 31.3183 33.3183C30.425 34.2166 29.3624 34.9287 28.1921 35.4135C27.0217 35.8984 25.7668 36.1463 24.5 36.1429Z" stroke="#1D78F4" stroke-width="4" mask="url(#svg175286235_12989_path-1-inside-1_2110_10973)"></path>
<path opacity="0.2" d="M33.3969 6H29.6031C29.2316 5.99997 28.8715 6.12866 28.5842 6.36417C28.2968 6.59967 28.1 6.92745 28.0271 7.29174L27.0467 12.193C26.9917 12.4649 26.8674 12.7181 26.686 12.928C26.5046 13.1379 26.2722 13.2975 26.0111 13.3914C25.5645 13.5531 25.1272 13.7344 24.6993 13.9353C24.4827 14.0367 24.2464 14.0893 24.0072 14.0895C23.6907 14.0898 23.3811 13.9963 23.1177 13.8208L18.9593 11.0479C18.6501 10.8418 18.2791 10.7492 17.9093 10.7858C17.5396 10.8225 17.194 10.9861 16.9312 11.2488L14.2488 13.9312C13.9861 14.194 13.8225 14.5396 13.7858 14.9093C13.7492 15.2791 13.8418 15.6501 14.0479 15.9593L16.8208 20.1182C16.9742 20.3497 17.0653 20.6168 17.0854 20.8937C17.1054 21.1707 17.0537 21.4481 16.9353 21.6993C16.7344 22.1268 16.5532 22.5643 16.3919 23.0116C16.298 23.2727 16.1384 23.5051 15.9285 23.6865C15.7186 23.8679 15.4654 23.9922 15.1935 24.0472L10.2917 25.0276C9.92754 25.1005 9.59982 25.2973 9.36432 25.5845C9.12883 25.8717 9.00009 26.2316 9 26.6031V30.3964C8.99997 30.7679 9.12866 31.128 9.36417 31.4153C9.59967 31.7027 9.92745 31.8995 10.2917 31.9724L15.193 32.9528C15.4649 33.0078 15.7181 33.1321 15.928 33.3135C16.1379 33.4949 16.2975 33.7273 16.3914 33.9884C16.5531 34.4354 16.7344 34.8728 16.9353 35.3007C17.0537 35.5519 17.1054 35.8293 17.0854 36.1063C17.0653 36.3832 16.9742 36.6503 16.8208 36.8818L14.0479 41.0407C13.8418 41.3499 13.7492 41.7209 13.7858 42.0907C13.8225 42.4604 13.9861 42.806 14.2488 43.0687L16.9312 45.7512C17.194 46.0139 17.5396 46.1775 17.9093 46.2142C18.2791 46.2508 18.6501 46.1582 18.9593 45.9521L23.1182 43.1792C23.3816 43.0037 23.6912 42.9102 24.0077 42.9105C24.2467 42.9107 24.4828 42.9633 24.6993 43.0647C25.1268 43.2656 25.5643 43.4469 26.0116 43.6087C26.2727 43.7025 26.5051 43.8621 26.6865 44.072C26.8679 44.2819 26.9922 44.5351 27.0472 44.807L28.0276 49.7083C28.1005 50.0725 28.2973 50.4002 28.5845 50.6357C28.8717 50.8712 29.2316 50.9999 29.6031 51H33.3964C33.7679 51 34.128 50.8713 34.4153 50.6358C34.7027 50.4003 34.8995 50.0725 34.9724 49.7083L35.9528 44.807C36.0078 44.5351 36.1321 44.2819 36.3135 44.072C36.4949 43.8621 36.7273 43.7025 36.9884 43.6087C37.4354 43.4469 37.8728 43.2656 38.3007 43.0647C38.5173 42.9633 38.7536 42.9107 38.9928 42.9105C39.3093 42.9102 39.6189 43.0037 39.8823 43.1792L44.0412 45.9521C44.3504 46.1582 44.7214 46.2508 45.0912 46.2142C45.4609 46.1775 45.8065 46.0139 46.0693 45.7512L48.7517 43.0687C49.0144 42.806 49.178 42.4604 49.2147 42.0907C49.2513 41.7209 49.1587 41.3499 48.9526 41.0407L46.1797 36.8818C46.0262 36.6504 45.935 36.3833 45.9149 36.1063C45.8947 35.8294 45.9463 35.5519 46.0647 35.3007C46.2656 34.8732 46.4468 34.4359 46.6081 33.9889C46.702 33.7278 46.8616 33.4954 47.0715 33.314C47.2814 33.1326 47.5346 33.0083 47.8065 32.9533L52.7078 31.9729C53.0721 31.9001 53.4 31.7033 53.6356 31.416C53.8712 31.1286 54 30.7685 54 30.3969V26.6031C54 26.2316 53.8713 25.8715 53.6358 25.5842C53.4003 25.2968 53.0725 25.1 52.7083 25.0271L47.807 24.0467C47.5351 23.9917 47.2819 23.8674 47.072 23.686C46.8621 23.5046 46.7025 23.2722 46.6087 23.0111C46.4469 22.5645 46.2656 22.1272 46.0647 21.6993C45.9463 21.4481 45.8946 21.1707 45.9146 20.8937C45.9347 20.6168 46.0258 20.3497 46.1792 20.1182L48.9521 15.9593C49.1582 15.6501 49.2508 15.2791 49.2142 14.9093C49.1775 14.5396 49.0139 14.194 48.7512 13.9312L46.0687 11.2488C45.806 10.9861 45.4604 10.8225 45.0907 10.7858C44.7209 10.7492 44.3499 10.8418 44.0407 11.0479L39.8818 13.8208C39.6184 13.9963 39.3088 14.0898 38.9923 14.0895C38.7533 14.0893 38.5172 14.0366 38.3007 13.9353C37.8732 13.7344 37.4357 13.5531 36.9884 13.3914C36.7273 13.2975 36.4949 13.1379 36.3135 12.928C36.1321 12.7181 36.0078 12.4649 35.9528 12.193L34.9729 7.29174C34.9 6.92745 34.7032 6.59967 34.4158 6.36417C34.1285 6.12866 33.7684 5.99997 33.3969 6ZM31.5 38.1429C29.2691 38.143 27.1071 37.3695 25.3825 35.9543C23.6579 34.5391 22.4774 32.5697 22.0421 30.3816C21.6067 28.1936 21.9435 25.9223 22.9951 23.9547C24.0467 21.9872 25.748 20.4451 27.809 19.5913C29.8701 18.7375 32.1635 18.6247 34.2984 19.2723C36.4333 19.9198 38.2776 21.2875 39.5171 23.1424C40.7566 24.9973 41.3146 27.2246 41.096 29.4448C40.8774 31.665 39.8958 33.7407 38.3183 35.3183C37.425 36.2166 36.3624 36.9287 35.1921 37.4135C34.0217 37.8984 32.7668 38.1463 31.5 38.1429Z" fill="#1D78F4"></path>
</svg>
                                <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_5 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_5"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Feature 6: Global Service Guarantee -->
                        <div class="feature-card">
                            <div class="feature-content">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" id="svg-998915173_8903">
<path d="M15.7948 21.1833L15.8581 21.0293L24.0628 14.7949C26.0602 13.3064 28.6904 12.9348 30.9641 13.8179L30.9692 13.8198L44.0888 18.8341C44.0899 18.8345 44.0909 18.8349 44.0919 18.8353C45.0871 19.2222 46.1295 19.3847 47.1081 19.3847H49.2821C49.3387 19.3847 49.3827 19.4063 49.4091 19.4313C49.4324 19.4533 49.4388 19.4729 49.4388 19.495V35.614C49.4388 35.6427 49.4266 35.6829 49.3888 35.7207C49.351 35.7585 49.3108 35.7708 49.2821 35.7708H46.4338C45.8388 35.7708 45.1737 35.9841 44.6894 36.3811L44.6894 36.3811L44.6792 36.3897L44.5357 36.5106L29.6444 18.383C28.9262 17.4872 27.7022 17.3459 26.7931 17.8454L26.793 17.8454L26.7867 17.849L19.7904 21.7597C18.6619 22.3815 17.3006 22.46 16.0828 21.9585C15.8167 21.8381 15.6639 21.5014 15.7948 21.1833Z" stroke="#1D78F4" stroke-width="2"></path>
<path d="M7.81907 33.968L7.81839 33.9689L6.38041 35.7243H4.39509C4.34658 35.7243 4.27193 35.7069 4.17648 35.6305C4.11297 35.5796 4.0516 35.5107 4 35.4297V19.5938C4 19.5717 4.00641 19.5521 4.02973 19.5301C4.05616 19.5051 4.10014 19.4835 4.15676 19.4835H11.6097C11.1446 20.5961 11.0901 21.8484 11.4277 23.0067L11.4398 23.048L11.4553 23.0882C11.9777 24.4365 13.0494 25.5903 14.5141 26.0825C16.8649 26.9528 19.4283 26.7304 21.6014 25.5325L21.6048 25.5307L27.1704 22.4345L39.3596 37.26L39.3601 37.2605L40.9059 39.1433L40.9466 39.193L40.9844 39.2286C40.9881 39.2331 40.9979 39.2452 41.0146 39.2681C41.0299 39.2893 41.0474 39.3145 41.0694 39.3468L41.1037 39.3976L41.1243 39.4279C41.5502 40.1605 41.3169 41.0735 40.5882 41.5114L40.5873 41.512C40.0135 41.8576 39.2165 41.7705 38.7238 41.2778L38.5319 41.086L38.239 40.7931H37.8248H37.7783H36.7783V41.7931V41.8396V41.938L36.7975 42.0346C36.9052 42.5763 36.6656 43.1939 36.157 43.5665C35.483 43.9801 34.6589 43.8745 34.1374 43.353L33.9456 43.1612L33.6527 42.8683H33.2385H33.192H32.192V43.8683V43.9148V44.0161L32.2123 44.1154C32.33 44.6899 32.0999 45.2959 31.6149 45.6475C30.9986 46.0467 30.1325 45.9573 29.6034 45.4282L29.4116 45.2363L29.1187 44.9435H28.7045H28.6579H27.6579V45.9435V45.9958V46.1023L27.6804 46.2065C27.7636 46.5925 27.6892 46.9896 27.4489 47.3608C27.1361 47.7929 26.6527 48.0153 26.1573 47.9997C27.0817 45.9304 26.6443 43.5317 25.0975 41.8822L25.0865 41.8704L25.0752 41.8591C24.3687 41.1527 23.4897 40.6596 22.5437 40.4209C21.9441 39.5186 21.0732 38.8901 20.1428 38.5066C19.5869 37.097 18.4722 35.9742 17.0487 35.4415C16.7048 34.5833 16.1371 33.8386 15.4705 33.2639L15.4607 33.2554L15.4506 33.2472C13.1525 31.3676 9.72518 31.6463 7.81907 33.968Z" stroke="#1D78F4" stroke-width="2"></path>
<path d="M12.8351 38.1608L13.8119 38.3752C12.8351 38.1608 12.835 38.1612 12.8349 38.1617L12.8347 38.1626L12.8343 38.1644L12.8335 38.1682L12.8318 38.1763L12.8283 38.1944C12.8259 38.2073 12.8234 38.2221 12.8209 38.2385C12.8161 38.2708 12.8112 38.3126 12.8088 38.3613C12.8045 38.4467 12.8043 38.6098 12.865 38.797C12.9309 39.0003 13.0842 39.2693 13.3976 39.4376C13.6957 39.5977 13.9923 39.5871 14.1908 39.5493L14.3441 39.5201L14.4812 39.4456C14.7592 39.2945 15.159 39.269 15.448 39.3879C16.0511 39.6535 16.3085 40.2881 16.0665 40.9045L16.0558 40.9317L16.0467 40.9596L16.9973 41.27C16.0467 40.9596 16.0465 40.9601 16.0464 40.9605L16.0461 40.9615L16.0454 40.9635L16.0441 40.9675L16.0414 40.9762L16.0356 40.9958C16.0315 41.0099 16.0271 41.0261 16.0226 41.0443C16.0139 41.08 16.0041 41.1269 15.9967 41.182C15.9839 41.2786 15.9694 41.4665 16.0322 41.6841C16.1035 41.931 16.2763 42.2093 16.5989 42.3775C16.8889 42.5286 17.1789 42.5264 17.3781 42.4989L17.4759 42.4854L17.5692 42.4531C17.7319 42.3966 17.8976 42.3676 18.066 42.3635C18.6842 42.4336 19.1611 42.9909 19.137 43.5898L19.1362 43.6099V43.63V43.6765V44.1256L19.4719 44.4239L19.4739 44.4257C19.4829 44.4338 19.5104 44.4583 19.5383 44.4808C19.57 44.5065 19.649 44.5688 19.762 44.622C19.8927 44.6835 20.0142 44.7081 20.1091 44.7174C20.1494 44.7214 20.1823 44.7224 20.1997 44.7227C20.215 44.723 20.2297 44.723 20.2342 44.723H20.2351H20.4358L20.6211 44.6455C21.1011 44.4446 21.5965 44.5414 21.9189 44.838C22.3325 45.2287 22.4241 45.8256 22.118 46.357L22.113 46.3658L22.1081 46.3746L21.8766 46.796C21.8653 46.8085 21.8531 46.8223 21.8406 46.8368C21.7991 46.8849 21.7314 46.9669 21.6663 47.0747C21.2924 47.5255 20.6027 47.6201 20.0635 47.2141L19.9811 47.152L19.9034 47.1154C19.7247 46.9533 19.5995 46.7404 19.5413 46.5029C19.52 46.1719 19.3479 45.9463 19.2408 45.8372C19.1157 45.7098 18.9739 45.6281 18.8443 45.5787C18.6643 45.5101 18.2426 45.4212 17.857 45.6805C17.4709 45.8756 17.0555 45.8281 16.6961 45.5462L16.6693 45.5252L16.6412 45.5061L16.5425 45.4389C16.2008 45.1361 16.0624 44.7511 16.1048 44.4391L16.1139 44.372V44.3043V44.2578C16.1139 43.8893 15.9256 43.6401 15.8112 43.5237C15.6861 43.3963 15.5443 43.3145 15.4147 43.2652C15.2455 43.2007 14.8624 43.1182 14.4968 43.3242C14.0361 43.5006 13.5937 43.437 13.2665 43.1804L13.2599 43.1752L13.2531 43.1701L13.0645 43.0272C12.7525 42.7859 12.5879 42.353 12.6671 41.9314L12.6843 41.8398V41.7466V41.6478V41.2336L12.3915 40.9407C12.3912 40.9405 12.3907 40.9399 12.3899 40.9391C12.3731 40.9216 12.2353 40.778 12.0375 40.6849C11.9139 40.6267 11.7096 40.5592 11.4562 40.5895C11.2893 40.6094 11.1446 40.6665 11.0243 40.7414C10.6335 40.929 10.124 40.8841 9.79078 40.623C9.79066 40.6229 9.79054 40.6228 9.79041 40.6227L9.54687 40.4313L9.33762 40.2669C9.04085 39.8877 9.01854 39.301 9.37228 38.8494L11.0586 36.7807L11.0653 36.7724L11.0719 36.7639C11.4495 36.2798 12.0653 36.1529 12.5974 36.4406C13.135 36.7513 13.2557 37.4079 12.9806 37.8193L12.8756 37.9763L12.8351 38.1608Z" stroke="#1D78F4" stroke-width="2"></path>
<path d="M18.2618 14.9226L26.5161 8.65053C28.7831 6.95899 31.7767 6.52884 34.3808 7.54028L47.5063 12.5568C48.3724 12.8939 49.2908 13.0392 50.1628 13.0392H52.3368C52.9646 13.0392 53.4935 13.5217 53.4935 14.1495V30.2685C53.4935 30.8963 52.9646 31.4253 52.3368 31.4253H49.4885C49.1048 31.4253 48.6689 31.5706 48.3782 31.809L47.7504 32.3379C47.6051 32.4832 47.3668 32.4367 47.2215 32.2914L31.922 13.667C31.5384 13.1846 30.8583 13.0857 30.3293 13.3764L23.3306 17.2884C21.9297 18.0615 20.244 18.1546 18.7443 17.5326C17.9712 17.1954 17.5875 16.277 17.9247 15.4574C17.9247 15.2597 18.07 15.0679 18.2618 14.9226Z" fill="#1D78F4" fill-opacity="0.2"></path>
<path d="M7.44977 31.3788H9.90861L11.6467 29.2571C13.1929 27.3737 15.9889 27.1354 17.8722 28.6758C18.5465 29.2571 19.0813 30.0302 19.3196 30.8963C20.8135 31.28 21.9761 32.4426 22.4063 33.9365C23.47 34.2736 24.4349 34.9479 24.9639 35.9651C25.8823 36.1105 26.7485 36.5464 27.4227 37.2207C28.8236 38.7146 29.1143 40.9351 28.0505 42.7255L27.8064 43.1615V43.208C28.9632 43.9811 30.5094 43.7369 31.329 42.5802C31.7126 41.9989 31.858 41.3246 31.7126 40.6503V40.598H31.7591L31.951 40.7898C32.8171 41.6559 34.218 41.8013 35.2352 41.127C36.0548 40.5457 36.4443 39.5342 36.2467 38.5693V38.5228H36.2932L36.485 38.7146C37.3511 39.5807 38.7055 39.7261 39.7693 39.0518C40.5889 38.4705 41.0248 37.4591 40.833 36.4941V36.4476H40.8795L41.0713 36.6394C41.8909 37.4591 43.193 37.6044 44.158 37.0231C45.367 36.2965 45.7507 34.7561 45.0241 33.547C44.9253 33.4017 44.8323 33.2564 44.7334 33.1634L43.1872 31.28L30.6896 16.0794C30.5443 15.934 30.3524 15.8875 30.1606 15.9805L24.1734 19.3113C22.2435 20.3751 19.9765 20.5669 17.9013 19.7938C16.7445 19.4101 15.8726 18.4917 15.4424 17.3814C15.1053 16.2247 15.2506 14.9691 15.8784 13.9577C16.0237 13.667 15.9249 13.3299 15.6401 13.1846C15.5413 13.1381 15.4483 13.1381 15.3494 13.1381H7.21145C6.58366 13.1381 6.05469 13.6205 6.05469 14.2483V30.3209C6.29301 30.8963 6.82198 31.3788 7.44977 31.3788Z" fill="#1D78F4" fill-opacity="0.2"></path>
<path d="M16.1398 30.2221C15.1749 29.6931 14.0181 29.9315 13.338 30.8034L11.6465 32.8786C10.9199 33.797 11.0187 35.1456 11.9371 35.8722H11.9836L12.2278 36.064C12.902 36.593 13.867 36.6453 14.5936 36.2559C14.6401 36.2094 14.6924 36.2559 14.7389 36.3024V36.4012C14.5936 37.1743 14.8842 37.9939 15.512 38.4764L15.7038 38.6217C16.3781 39.1507 17.2501 39.203 18.0232 38.8658C18.0697 38.8193 18.1685 38.8658 18.1685 38.9123V38.9588C18.0697 39.6854 18.4126 40.4062 18.9881 40.8887L19.1334 40.9875C19.8077 41.5165 20.6797 41.6153 21.4528 41.1793C21.4993 41.1328 21.5981 41.1793 21.5981 41.2258V41.2724C21.6969 41.8013 21.9817 42.2838 22.4177 42.6209L22.5165 42.6674C23.4814 43.394 24.8358 43.2487 25.5566 42.2838C25.6031 42.185 25.702 42.092 25.7485 42.0396L26.0391 41.5107C26.5681 40.5922 26.4228 39.482 25.6555 38.7612C25.0277 38.1799 24.1092 38.0346 23.2896 38.3775C23.2431 38.3775 23.2431 38.3775 23.1908 38.331V38.2845C23.2373 37.1278 22.3247 36.1105 21.1621 36.0175C20.8715 36.0175 20.5808 36.064 20.296 36.1629C19.9589 36.2094 20.0519 35.9245 20.0519 35.9245C20.4878 34.8143 20.0054 33.6052 18.8951 33.1227C18.3138 32.8786 17.593 32.9309 17.0582 33.2215C16.8141 33.268 16.8664 33.0297 16.8664 33.0297C17.4884 32.0997 17.1512 30.7976 16.1398 30.2221Z" fill="#1D78F4" fill-opacity="0.2"></path>
</svg>
                                <div class="feature-title-container">
                                    <h3 class="feature-title">{{ aboutUs.why_choose_dinosaw_labout_title_6 }}</h3>
                                </div>
                                <div class="feature-description-container">
                                    <div class="feature-description" v-html="aboutUs.why_choose_dinosaw_labout_description_6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Our Clients Section -->
        <div class="our-clients-section">
            <div class="our-clients-container">
                <!-- Title -->
                <div class="our-clients-title-section">
                    <div class="our-clients-title-container">
                        <h2 class="our-clients-title">{{ aboutUs.our_clients_title }}</h2>
                    </div>
                </div>
                
                <!-- Clients Grid -->
                <div class="clients-grid">
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-1">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/FpnleAPIN4IV2mdwRpgLUNOF6w.png" />
                            </div>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-2">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/rInXR99BqGLsBVSIPaPJptiTDg.png" />
                            </div>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-3">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/c70mHQa1rmYYq4W7A8C4llFHLg.png" />
                            </div>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-4">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/np5kOQAu61pepHdnoZ7YJErn3I.png" />
                            </div>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-5">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/P5O06HfmGvkisFNWLPp8TYR4o4.png" />
                            </div>
                        </div>
                    </div>
                    <div class="client-card">
                        <div class="client-logo-container">
                            <div class="client-logo client-logo-6">
                                <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/dXyve2roEON0UKlKgJTigYaqmY.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mission & Values Section -->
        <div class="mission-values-section">
            <div class="mission-values-container">
                <!-- Title -->
                <div class="mission-values-title-section">
                    <div class="mission-values-title-container">
                        <h2 class="mission-values-title">{{ aboutUs.mission_values_title }}</h2>
                    </div>
                </div>
                <!-- Tab Navigation -->
                        <div class="tab-navigation">
                            <div class="tab-container">
                                <div 
                                    class="tab-item"
                                    :class="{ active: activeTab === 'mission' }"
                                    @click="setActiveTab('mission')"
                                >
                                    <div class="tab-content">
                                        <span class="tab-text">{{ aboutUs.mission_values_tab_btn_text_1 }}</span>
                                    </div>
                                </div>
                                <div 
                                    class="tab-item"
                                    :class="{ active: activeTab === 'vision' }"
                                    @click="setActiveTab('vision')"
                                >
                                    <div class="tab-content">
                                        <span class="tab-text">{{ aboutUs.mission_values_tab_btn_text_2 }}</span>
                                    </div>
                                </div>
                                <div 
                                    class="tab-item"
                                    :class="{ active: activeTab === 'value' }"
                                    @click="setActiveTab('value')"
                                >
                                    <div class="tab-content">
                                        <span class="tab-text">{{ aboutUs.mission_values_tab_btn_text_3 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                <!-- Content Area -->
                <div class="mission-values-content">
                    <div class="mission-values-inner">
                        <!-- Content Display Area -->
                        <div class="content-display-area">
                            <div class="content-image-section">
                                <div class="content-image-container">
                                    <div class="content-image" :class="'content-image-' + activeTab">
                                        <NuxtImg loading="lazy" :src="currentContent.imageUrl" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-text-section">
                                <div class="content-text-container">
                                    <p class="content-text">{{ currentContent.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Products Section -->
        <div class="products-section">
            <div class="products-container">
                <!-- Title -->
                <div class="products-title-section">
                    <div class="products-title-container">
                        <h2 class="products-title">{{ aboutUs.products_title }}</h2>
                    </div>
                </div>
                 <!-- Description Text -->
                <div class="products-description">
                    <p class="description-text">
                       {{ aboutUs.products_description }}
                    </p>
                </div>
                <!-- Products Grid -->
                <div class="products-grid">
                    <!-- Row 1 -->
                    <template v-for="(group, index) in productsList" :key="index">
                        
                        <div class="products-row">
                            <template v-for="(product, j) in group" :key="j">
                                <NuxtLink :to="'/Products/' + product.category_value" target="_blank">
                                    <div class="product-card">
                                        <div class="product-content">
                                            <div class="product-header">
                                                <h3 class="product-title">{{product.about_us_category_name}}</h3>
                                            </div>
                                            <div class="product-description">
                                                <div class="product-text" v-html="product.about_us_category_description"></div>
                                            </div>
                                            <div class="product-image">
                                                <div class="image-container">
                                                    <div class="product-img" v-if="product.head_image">
                                                        <NuxtImg loading="lazy" :src="product.head_image.url" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </template>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Similar Ideas Section -->
          
        <div class="similar-ideas-section">
            
            <div class="similar-ideas-container">
                <!-- Section Title -->
                <div class="similar-ideas-title-section">
                    <h2 class="similar-ideas-title">{{ aboutUs.similar_ideas_your_creativity_title }}</h2>
                </div>
                <!-- Articles Grid -->
                <div class="articles-grid">
                    <template v-for="(blog, index) in aboutUs.similar_ideas_to_stimulate_your_creativity_blogs" :key="index">
                        <NuxtLink :to="'/blog/' + blog.slug" target="_blank" >
                            <div class="article-card" >
                                <div class="article-content">
                                    <div class="article-image">
                                        <div class="article-img">
                                            <NuxtImg loading="lazy" :src="blog.first_image_url" />
                                        </div>
                                    </div>
                                    <div class="article-text">
                                        <p class="article-title">
                                            {{ blog.title }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>

        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()
const aboutUs = ref({})
const { data: aboutusRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=About-us&populate=all')
let tabContents = {
            mission: {
                text: "",
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Pq4QoRnNoOhKtH4s1aqxFxBspc.webp"
            },
            vision: {
                text: "",
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/SQ042lGjZIHOQaaX7YTGPbU39Y.webp"
            },
            value: {
                text: "",
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/GHvO21wv1tIfrg5rUvqk7yDA8.webp"
            }
        }
// Mission & Values Tab功能
const activeTab = ref('mission')

const setActiveTab = (tab) => {
    activeTab.value = tab
}
const currentContent = computed(() => {

    // console.log(tabContents[activeTab.value])
    // console.log(activeTab.value)

    return tabContents[activeTab.value]
})

watch(aboutusRes, (newPosts) => {
    // console.log(newPosts)
    if (newPosts) {
        let data = newPosts.data[0].about_us
        aboutUs.value = data
        // console.log(aboutUs.value)
         useHead(() => ({
            title: data.meta_title,
            meta: [
                {
                    name: 'description',
                    content: data.meta_description
                }
            ]
        }));

        tabContents = {
            mission: {
                text: data.mission_values_tab_content_text_1,
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Pq4QoRnNoOhKtH4s1aqxFxBspc.webp"
            },
            vision: {
                text: data.mission_values_tab_content_text_2,
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/SQ042lGjZIHOQaaX7YTGPbU39Y.webp"
            },
            value: {
                text: data.mission_values_tab_content_text_3,
                imageUrl:"https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/GHvO21wv1tIfrg5rUvqk7yDA8.webp"
            }
        }
        
    }

}, { immediate: true })

const productsList = ref({})
const { data: productsRes, productPending, productError } = await useApi('/product-categories?filters[parent_category_value][$eq]=Products&fields=sort,about_us_category_description,about_us_category_name,category_value&populate[head_image][fields]')
watch(productsRes, (newPosts) => {
    // console.log(newPosts)
    if (newPosts) {
        let data = newPosts.data

        if (Array.isArray(data)) {
            data = data.sort((a, b) => {
                // 确保 sort 字段存在，如果不存在则视为最大值
                const sortA = a.sort !== undefined ? a.sort : Number.MAX_SAFE_INTEGER
                const sortB = b.sort !== undefined ? b.sort : Number.MAX_SAFE_INTEGER
                return sortA - sortB
            })
            
            // 将数据分成三个一组的数组
            const groupedData = []
            for (let i = 0; i < data.length; i += 3) {
                groupedData.push(data.slice(i, i + 3))
            }
            
            productsList.value = groupedData
        } else {
            productsList.value = []
        }
        
        // console.log(productsList)
    }

}, { immediate: true })

</script>
<style scoped lang="scss">
.main {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    .breadcrumb-container{
        max-width:1258px;
        margin:0 auto;
    }
}

/* About Hero Section */
.about-hero-section {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.hero-background {
    width: 100%;
    height: 100%;
    padding-top:20px;
    position: relative;
    background: linear-gradient(180deg, rgba(67, 140, 255, 0.5) 0%, rgba(255, 255, 255, 1) 69%);
}

/* Content Container */
.hero-content {
    width: 1920px;
    padding:100px 0 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    background:url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/72HfFUczwHIXRGBR7M7Wy3EXxU.png) no-repeat center 180px;
    background-size:90% auto;
}

/* Action Buttons */
.hero-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    margin-bottom: 129px;
}

.action-button {
    height: 60px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.learn-products {
    width: 400px;
    background-color: #FFFFFF;

    .button-text {
        color: #439DF1;
    }
}

.contact-us {
    width: 293px;
    background-color: transparent;

    .button-text {
        color: #000000;
    }
}

.button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    gap: 16px;
}

.button-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-text {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
    text-align: center;
}

.button-icon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
}

/* Main Title */
.hero-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 13px;
}

.hero-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 155px;
}

.hero-main-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.1875em;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
}

/* Subtitle */
.hero-subtitle-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.hero-subtitle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
}

.hero-subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 20px;
}

/* Responsive Design */
@media (max-width: 1440px) {
    .hero-content {
        width: 100%;
        max-width: 1200px;
    }
    .about-hero-section{
        .breadcrumb-container{
            display:none;
        }
    }

    .hero-image-2 {
        width: 100%;
        max-width: 1200px;
        left: 50%;
        transform: translateX(-50%);
    }

    .hero-subtitle-container {
        width: 100%;
        max-width: 800px;
    }

    .hero-subtitle {
        font-size: 42px;
    }
}

@media (max-width: 1024px) {
    .about-hero-section {
        height: 600px;
    }

    .hero-content {
        top: 200px;
        height: auto;
    }

    .hero-actions {
        flex-direction: column;
        gap: 16px;
        height: auto;
        margin-bottom: 40px;
    }

    .action-button {
        width: 300px;
        height: 50px;
    }

    .button-text {
        font-size: 24px;
    }

    .hero-main-title {
        font-size: 28px;
    }

    .hero-subtitle {
        font-size: 32px;
    }

    .hero-image-1,
    .hero-image-2 {
        display: none;
    }
}

@media (max-width: 768px) {
    .about-hero-section {
        height: auto;
    }

    .hero-content {
        top: 150px;
        padding: 0 20px 300px;
        background:url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/72HfFUczwHIXRGBR7M7Wy3EXxU.png') no-repeat center 130px;
        background-size:auto 100%;
    }

    .action-button {
        width: 250px;
        height: 45px;
    }

    .button-text {
        font-size: 18px;
    }
    .hero-background{
        padding:32px 32px 0;
    }

    .hero-main-title {
        font-size: 32px;
    }

    .hero-subtitle {
        font-size: 24px;
        line-height: 1.3em;
    }

    .hero-subtitle-container {
        width: 100%;
    }    .who-we-are-content{
        .content-text{
             font-size:14px;
             font-weight:400;
            text-align:left;
            color:#666;
        }
    }
}

/* Statistics Section */
.statistics-section {
    width: 100%;
    height: 523px;
    background: linear-gradient(180deg, rgba(240, 244, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 62px 0;
}

.statistics-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 98px;
}

/* Statistics Title */
.statistics-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.statistics-title-container {
    width: 1283px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.statistics-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Statistics Cards */
.statistics-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 43px;
    width: 100%;
    max-width: 1246px;
}

.statistics-card {
    width: 360px;
    height: 301px;
    background: #FFFFFF;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}

.card-content {
    width: 300px;
    height: 261px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

/* Card Icon Section */
.card-icon-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 116px;
}

.card-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
}

.card-icon {
    width: 120px;
    height: 120px;
    border-radius: 12px;
}

/* Card Text Section */
.card-text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 115px;
    gap: 10px;
}

.card-number-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 58px;
}

.card-number {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.1875em;
    text-align: center;
    color: #333333;
}

.card-description-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 53px;
}

.card-description {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    text-align: center;
    color: #333333;
    margin: 0;
}

/* Responsive Design for Statistics */
@media (max-width: 1440px) {
    .statistics-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .statistics-cards {
        gap: 30px;
    }
    
    .statistics-card {
        width: 320px;
        height: 280px;
    }
    
    .card-content {
        width: 280px;
        height: 240px;
    }
}

@media (max-width: 1024px) {
    .statistics-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .statistics-container {
        gap: 60px;
    }
    
    .statistics-title {
        font-size: 36px;
    }
    
    .statistics-cards {
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }
    
    .statistics-card {
        width: 100%;
        max-width: 400px;
        height: 250px;
    }
    
    .card-content {
        width: 90%;
        height: 200px;
    }
    
    .card-number {
        font-size: 40px;
    }
    
    .card-description {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .statistics-section {
        padding: 20px 15px;
    }
    
    .statistics-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .statistics-card {
        height: auto;
        padding:32px 0;
    }
    
    .card-content {
        height: auto;
        gap: 20px;
    }
    
    .card-icon-section {
        height: 80px;
    }
    
    .card-icon-container {
        width: 80px;
        height: 80px;
    }
    
    .card-icon {
        width: 80px;
        height: 80px;
    }
    
    .card-number {
        font-size: 32px;
    }
    
    .card-description {
        font-size: 14px;
    }
}

/* Who We Are Section */
.who-we-are-section {
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 18%, rgba(240, 244, 255, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 54px 0;
}

.who-we-are-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
}

/* Who We Are Title */
.who-we-are-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.who-we-are-title-container {
    width: 1283px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.who-we-are-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Who We Are Content */
.who-we-are-content {
    width: 1212px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.content-paragraph {
    width: 100%;
    display: flex;
    justify-content: center;
}

.content-text {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.2em;
    text-align: center;
    color: #000000;
    margin: 0;
    max-width: 1237px;
}

/* Responsive Design for Who We Are */
@media (max-width: 1440px) {
    .who-we-are-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .who-we-are-content {
        width: 100%;
    }
    
    .content-text {
        max-width: 100%;
    }
}

@media (max-width: 1024px) {
    .who-we-are-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .who-we-are-container {
        gap: 60px;
    }
    
    .who-we-are-title {
        font-size: 36px;
    }
    
    .content-text {
        font-size: 16px;
        line-height: 1.4em;
        text-align: left;
    }
}

@media (max-width: 768px) {
    .who-we-are-section {
        padding: 30px 15px;
    }
    
    .who-we-are-container {
        gap: 32px;
    }
    
    .who-we-are-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .content-text {
        font-size: 14px;
        font-weight:400;
        line-height: 1.5em;
    }
    
    .who-we-are-content {
        gap: 24px;
    }
    .statistics-container,
    .certifications-container,
    .products-container{
        padding:17px !important;
    }
}

/* Certifications Section */
.certifications-section {
    width: 100%;
    height: 1020px;
    background: #F0F4FF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 38px 0;
}

.certifications-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 49px;
}

/* Certifications Title */
.certifications-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.certifications-title-container {
    width: 1283px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.certifications-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Certifications Grid */
.certifications-grid {
    width: 1246px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 45px;
}

.certifications-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
}

.certification-card {
    width: 360px;
    height: 395px;
    background: rgba(255, 255, 255, 0.45);
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.certification-card .card-content {
    width: 300px;
    height: 355px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

/* Card Image Section */
.card-image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 185px;
    overflow:hidden;
}

.card-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 252px;
    height: 252px;
    position: relative;
    top: -33px;
}

.card-image {
    width: 252px;
    height: 168px;
    border-radius: 12px;
    position: relative;
    top: 42px;
    img{
        width:100%;
    }
}

/* Card Text Section */
.certification-card .card-text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 160px;
    gap: 10px;
}

.certification-card .card-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 58px;
}

.certification-card .card-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.1666666666666667em;
    text-align: center;
    color: #333333;
    margin: 0;
}

.certification-card .card-description-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 53px;
}

.certification-card .card-description {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    text-align: center;
    color: #333333;
    margin: 0;
}

/* Responsive Design for Certifications */
@media (max-width: 1440px) {
    .certifications-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .certifications-grid {
        width: 100%;
    }
    
    .certifications-row {
        gap: 24px;
    }
    
    .certification-card {
        width: 320px;
        height: 360px;
    }
    
    .certification-card .card-content {
        width: 280px;
        height: 320px;
    }
}

@media (max-width:1440px) {
    .certifications-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .certifications-container {
        gap: 30px;
    }
    
    .certifications-title {
        font-size: 36px;
    }
    
    .certifications-grid {
        gap: 30px;
    }
    
    .certifications-row {
        flex-direction: column;
        gap: 20px;
    }
    
    .certification-card {
        width: 100%;
        max-width: 400px;
        height: 320px;
    }
    
    .certification-card .card-content {
        width: 90%;
        height: 280px;
    }
    
    .card-image-container {
        width: 200px;
        height: 200px;
    }
    
    .card-image {
        width: 200px;
        height: 134px;
    }
    
    .certification-card .card-title {
        font-size: 20px;
    }
    
    .certification-card .card-description {
        font-size: 18px;
    }
}

@media (max-width: 1440px) {
    .certifications-section {
        padding: 30px 15px;
    }
    
    .certifications-title {
        font-size: 28px;
        line-height: 1.3em;
    }
    
    .certification-card {
        height: 280px;
    }
    
    .certification-card .card-content {
        height: 240px;
        gap: 15px;
    }
    
    .card-image-section {
        height: 120px;
    }
    
    .card-image-container {
        width: 150px;
        height: 150px;
        top: -20px;
    }
    
    .card-image {
        width: 150px;
        height: 100px;
        top: 25px;
    }
    
    .certification-card .card-text-section {
        height: 120px;
    }
    
    .certification-card .card-title {
        font-size: 18px;
    }
    
    .certification-card .card-description {
        font-size: 16px;
    }
}

/* Why Choose DINOSAW Section */
.why-choose-section {
    width: 100%;
    height: 806px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.why-choose-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;
}

/* Why Choose Title */
.why-choose-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.why-choose-title-container {
    width: 1283px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.why-choose-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Features Grid */
.features-grid {
    width: 1323px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 134px;
}

.features-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    width: 100%;
}

.feature-card {
    width: 366px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.rd-icon {
    background-color: #e3f2fd;
    border-color: #2196f3;
}

.digital-icon {
    background-color: #f3e5f5;
    border-color: #9c27b0;
}

.custom-icon {
    background-color: #e8f5e8;
    border-color: #4caf50;
}

.service-icon {
    background-color: #fff3e0;
    border-color: #ff9800;
}

.machine-icon {
    background-color: #fce4ec;
    border-color: #e91e63;
}

.global-icon {
    background-color: #e0f2f1;
    border-color: #009688;
}

/* Feature Content */
.feature-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.feature-title-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 30px;
}

.feature-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 1.2em;
    text-align: left;
    color: #1C1F35;
    margin: 0;
}

.feature-description-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
}

.feature-description {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25em;
    text-align: left;
    color: #666B89;
    margin: 0;
    max-width: 344px;
}

/* Responsive Design for Why Choose */
@media (max-width: 1439px) {
    .why-choose-section {
        width: 100%;
        height: auto;
        padding: 32px 20px;
        box-sizing: border-box;
    }
    
    .why-choose-container {
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        padding: 0;
        gap: 28px;
    }
    
    .why-choose-title-section {
        width: 100%;
        margin: 0 auto;
    }
    
    .why-choose-title-container {
        width: 100%;
        max-width: 326px;
        margin: 0 auto;
        height: 29px;
    }
    
    .why-choose-title {
        font-size: 24px;
        line-height: 1.1666666666666667em;
        text-align: center;
        max-width: 275px;
        margin: 0 auto;
    }
    
    .features-grid {
        width: 100%;
        max-width: 314px;
        margin: 0 auto;
        gap: 16px;
        flex-direction: column;
    }
    
    .features-row {
        width: 100%;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
    
    .feature-card {
        width: 100%;
        max-width: 314px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        padding: 0 31px;
        box-sizing: border-box;
    }
    
    .feature-content {
        width: 100%;
        align-items: center;
        text-align: center;
        gap: 10px;
    }
    
    .feature-title-container {
        width: 100%;
        justify-content: center;
        align-items: center;
        min-height: 18px;
        margin-bottom: 10px;
    }
    
    .feature-title {
        font-size: 15px;
        line-height: 1.2em;
        text-align: center;
        color: #000000;
        font-weight: 500;
        max-width: 100%;
    }
    
    .feature-description-container {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
    .feature-description {
        font-size: 14px;
        line-height: 1.2142857142857142em;
        text-align: center;
        color: #666666;
        font-weight: 400;
        max-width: 100%;
        margin: 0;
    }
    
    /* 调整不同特性卡片的高度以匹配设计 */
    .features-row:first-child .feature-card:first-child {
        min-height: 181px;
    }
    
    .features-row:first-child .feature-card:nth-child(2) {
        min-height: 164px;
    }
    
    .features-row:first-child .feature-card:nth-child(3) {
        min-height: 181px;
    }
    
    .features-row:nth-child(2) .feature-card:first-child {
        min-height: 181px;
    }
    
    .features-row:nth-child(2) .feature-card:nth-child(2) {
        min-height: 181px;
    }
    
    .features-row:nth-child(2) .feature-card:nth-child(3) {
        min-height: 181px;
    }
}

@media (max-width: 1024px) {
    .why-choose-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .why-choose-container {
        gap: 40px;
    }
    
    .why-choose-title {
        font-size: 36px;
    }
    
    .features-grid {
        gap: 60px;
    }
    
    .features-row {
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }
    
    .feature-card {
        width: 100%;
        max-width: 500px;
        text-align: center;
    }
    
    .feature-icon-section {
        justify-content: center;
    }
    
    .feature-title-container {
        justify-content: center;
    }
    
    .feature-description-container {
        justify-content: center;
    }
    
    .feature-title {
        text-align: center;
        font-size: 22px;
    }
    
    .feature-description {
        text-align: center;
        max-width: 100%;
        font-size: 15px;
    }
}

@media (max-width: 1440px) {
    .why-choose-section {
        padding: 30px 15px;
    }
    
    .why-choose-container {
        gap: 30px;
    }
    
    .why-choose-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .features-grid {
        gap: 40px;
    }
    
    .features-row {
        gap: 30px;
    }
    
    .feature-card {
        max-width: 100%;
    }
    
    .feature-icon {
        width: 48px;
        height: 48px;
    }
    
    .feature-icon-container {
        width: 48px;
        height: 48px;
    }
    
    .feature-icon-section {
        height: 48px;
    }
    
    .feature-title {
        font-size: 15px;
    }
    
    .feature-description {
        font-size: 14px;
        line-height: 1.4em;
        font-weight:400;
    }
}

/* Our Clients Section */
.our-clients-section {
    width: 100%;
    height: 241px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.our-clients-container {
    width: 1284px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

/* Our Clients Title */
.our-clients-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.our-clients-title-container {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.our-clients-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Clients Grid */
.clients-grid {
    width: 1220px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 37px;
    height: 105px;
}

.client-card {
    width: 171px;
    height: 80px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.client-card:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.client-logo-container {
    width: 110px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.client-logo {
    width: 110px;
    height: 51px;
    border-radius: 4px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}


/* Responsive Design for Our Clients */
@media (max-width: 1440px) {
    .our-clients-container {
        width: 100%;
        padding: 0 40px;
    }
    .our-clients-section{
        height:auto;
    }
    
    .clients-grid {
        width: 100%;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        height: auto;
    }
    
    .client-card {
        width: 200px;
        height: 80px;
    }
    
    .client-logo-container {
        width: 120px;
        height: 50px;
    }
    
    .client-logo {
        width: 120px;
        height: 50px;
    }
}

@media (max-width: 1024px) {
    .our-clients-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .our-clients-container {
        gap: 30px;
    }
    
    .our-clients-title {
        font-size: 36px;
    }
    
    .clients-grid {
        flex-wrap: wrap;
        gap: 15px;
        height: auto;
        justify-content: center;
    }
    
    .client-card {
        width: 140px;
        height: 65px;
    }
    
    .client-logo-container {
        width: 90px;
        height: 40px;
    }
    
    .client-logo {
        width: 90px;
        height: 40px;
    }
}

@media (max-width: 768px) {
    .our-clients-section {
        padding: 30px 15px;
    }
    
    .our-clients-container {
        gap: 25px;
    }
    
    .our-clients-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .our-clients-title-container {
        width: 100%;
    }
    
    .clients-grid {
        gap: 12px;
    }
    
    .client-card {
        width: 120px;
        height: 55px;
    }
    
    .client-logo-container {
        width: 80px;
        height: 35px;
    }
    
    .client-logo {
        width: 80px;
        height: 35px;
    }
}

@media (max-width: 480px) {
    .clients-grid {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .client-card {
        width: 200px;
        height: 60px;
    }
    
    .client-logo-container {
        width: 120px;
        height: 40px;
    }
    
    .client-logo {
        width: 120px;
        height: 40px;
    }
}

/* Mission & Values Section */
.mission-values-section {
    width: 100%;
    height: 542px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 0;
}

.mission-values-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

/* Mission & Values Title */
.mission-values-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.mission-values-title-container {
    width: 439px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.mission-values-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Content Area */
.mission-values-content {
    width: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mission-values-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

/* Content Display Area */
.content-display-area {
    width: 661px;
    max-width: 100%;
    height: 304px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
}

.content-image-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom:20px;
}

.content-image-container {
    width: 229px;
    height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-image {
    width: 229px;
    height: 229px;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s ease;
}

.content-text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 29px;
}

.content-text-container {
    width: 489px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-text {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight:500;
    line-height: 1.1666666666666667em;
    text-align: center;
    color: #000000;
    margin: 0;
    transition: all 0.3s ease;
}

/* Tab Navigation */
.tab-navigation {
    width: 1050px;
    max-width: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tab-container {
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
}

.tab-item {
    width:342px;
    height: 60px;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
}

.tab-item.active {
    background: #F0F4FF;
}

.tab-item:hover:not(.active) {
    background: rgba(240, 244, 255, 0.5);
}

.tab-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
}

.tab-text {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2em;
    text-align: center;
    color: #000000;
    transition: all 0.3s ease;
}

.tab-item.active .tab-text {
    font-weight: 800;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Responsive Design for Mission & Values */
@media (max-width: 1440px) {
    .mission-values-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .content-display-area {
        width: 100%;
        max-width: 600px;
    }
    
    .content-text-container {
        width: 100%;
        max-width: 450px;
    }
    
    .tab-navigation {
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
    
    .tab-navigation::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
    }
    
    .tab-container {
        width: auto;
        min-width: 1026px; /* 3 * 342px */
        justify-content: flex-start;
        gap: 0;
        flex-shrink: 0;
    }
    
    .tab-item {
        flex-shrink: 0;
        width: 342px;
    }
}

@media (max-width: 1024px) {
    .mission-values-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .mission-values-container {
        gap: 30px;
    }
    
    .mission-values-title {
        font-size: 36px;
    }
    
    .mission-values-content {
        height: auto;
    }
    
    .mission-values-inner {
        height: auto;
        gap: 30px;
    }
    
    .content-display-area {
        height: auto;
        gap: 20px;
    }
    
    .content-image-container {
        width: 180px;
        height: 180px;
    }
    
    .content-image {
        width: 180px;
        height: 180px;
    }
    
    .content-text-section {
        height: auto;
    }
    
    .content-text {
        font-size: 20px;
        line-height: 1.3em;
    }
    
    .tab-container {
        min-width: auto; /* 3 * 300px */
        margin:0 auto;
    }
    
    .tab-item {
        width: 250px;
        height:50px;
        border-radius:50px;
    }
    
    .tab-text {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .mission-values-section {
        padding: 30px 15px;
    }
    
    .mission-values-container {
        gap: 25px;
    }
    
    .mission-values-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .mission-values-title-container {
        width: 100%;
    }
    
    .mission-values-inner {
        gap: 25px;
    }
    
    .content-display-area {
        gap: 15px;
    }
    
    .content-image-container {
        width: 150px;
        height: 150px;
    }
    
    .content-image {
        width: 150px;
        height: 150px;
    }
    
    .content-text {
        font-size: 18px;
        line-height: 1.4em;
    }
    
    .tab-container {
        width:100%;
        min-width: auto;
        overflow-x: auto;
    }
    
    .tab-item {
        width: 200px;
    }
    
    .tab-text {
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .content-text-container {
        padding: 0 20px;
    }
    
    .content-text {
        font-size: 16px;
        line-height: 1.5em;
    }
    
    .content-image-container {
        width: 120px;
        height: 120px;
    }
    
    .content-image {
        width: 120px;
        height: 120px;
    }
}

/* Products Section */
.products-section {
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(240, 244, 255, 1) 41%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 0;
}

.products-container {
    width: 1440px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

/* Products Description */
.products-description {
    width: 1313px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
}

.description-text {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.2em;
    text-align: center;
    color: #000000;
    margin: 0;
    max-width: 1265px;
}

/* Products Title */
.products-title-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.products-title-container {
    width: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
}

.products-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 1.1923076923076923em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/* Products Grid */
.products-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
}

.products-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
}

.product-card {
    width: 444px;
    height: 391px;
    background: #FFFFFF;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
}

.product-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 19px 32px;
    gap: 16px;
    text-align:center;
}

/* Product Header */
.product-header {
    width: 100%;
}

.product-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2em;
    color: #000000;
    margin: 0;
}

/* Product Description */
.product-description {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 77px;
}

.product-text {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.1875em;
    text-align: center;
    color: #3D3D3D;
    margin: 0;
    max-width: 380px;
}

/* Product Image */
.product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
}

.image-container {
    width: 216px;
    height: 216px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-img {
    width: 216px;
    height: 216px;
    border-radius: 8px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

/* Responsive Design for Products */
@media (max-width: 1440px) {
    .products-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .products-grid {
        margin-left: 0;
        max-width: 100%;
    }
    
    .products-row {
        gap: 20px;
    }
    
    .product-card {
        width: 380px;
        height: 350px;
    }
    
    .image-container {
        width: 180px;
        height: 180px;
    }
    
    .product-img {
        width: 180px;
        height: 180px;
    }
    
    .products-description {
        width: 100%;
    }
    
    .description-text {
        max-width: 100%;
    }
}

@media (max-width: 1024px) {
    .products-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .products-container {
        gap: 30px;
    }
    
    .products-description {
        margin-top: 40px;
    }
    
    .products-title {
        font-size: 36px;
    }
    
    .products-grid {
        gap: 20px;
    }
    
    .products-row {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    
    .product-card {
        width: 100%;
        max-width: 500px;
        height: auto;
        min-height: 320px;
    }
    
    .product-content {
        padding: 20px;
        gap: 12px;
    }
    
    .product-description {
        height: auto;
    }
    
    .product-text {
        font-size: 15px;
        line-height: 1.3em;
        max-width: 100%;
    }
    
    .product-title {
        font-size: 20px;
        text-align: center;
    }
    
    .product-header {
        justify-content: center;
    }
    
    .image-container {
        width: 160px;
        height: 160px;
    }
    
    .product-img {
        width: 160px;
        height: 160px;
    }
}

@media (max-width: 768px) {
    .products-section {
        padding: 30px 15px;
    }
    
    .products-container {
        gap: 25px;
    }
    
    .products-description {
        margin-top: 20px;
    }
    
    .description-text {
        font-size: 14px;
        line-height: 1.4em;
    }
    
    .products-title {
        font-size: 24px;
        line-height: 1.3em;
    }
    
    .products-title-container {
        width: 100%;
    }
    
    .products-grid {
        gap: 15px;
    }
    
    .products-row {
        gap: 15px;
    }
    
    .product-card {
        max-width: 100%;
        min-height: 280px;
    }
    
    .product-content {
        padding: 16px;
        gap: 10px;
    }
    
    .product-title {
        font-size: 18px;
    }
    
    .product-text {
        font-size: 14px;
        line-height: 1.4em;
    }
    
    .image-container {
        width: 140px;
        height: 140px;
    }
    
    .product-img {
        width: 140px;
        height: 140px;
    }
}

@media (max-width: 480px) {
    .product-card {
        min-height: 250px;
    }
    
    .product-content {
        padding: 12px;
    }
    
    .product-title {
        font-size: 16px;
        line-height: 1.3em;
    }
    
    .product-text {
        font-size: 14px;
        font-weight:300;
        line-height: 1.5em;
    }
    
    .image-container {
        width: 120px;
        height: 120px;
    }
    
    .product-img {
        width: 120px;
        height: 120px;
    }
}

/* Similar Ideas Section */
.similar-ideas-section {
    width: 100%;
    height: 520px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.similar-ideas-container {
    width: 1239px;
    max-width: 100%;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
}

/* Articles Grid */
.articles-grid {
    width: 1338px;
    max-width: 100%;
    height: 326px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-left: -49px;
}

.article-card {
    width: 297px;
    height: 326px;
    background: #F6F6F6;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
}

.article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background: #FFFFFF;
}

.article-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* Article Image */
.article-image {
    width: 100%;
    height: 196px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 24px 24px 0 0;
}

.article-img {
    width: 310px;
    height: 196px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: -6px;
}


/* Article Text */
.article-text {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 27px;
}

.article-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25em;
    text-align: center;
    color: #3D3D3D;
    margin: 0;
    max-width: 256px;
}

/* Section Title */
.similar-ideas-title-section {
    width: 1217px;
    max-width: 100%;
    height: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 11px;
}

.similar-ideas-title {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2em;
    text-align: left;
    color: #000000;
    margin: 0;
    max-width: 719px;
}

/* Responsive Design for Similar Ideas */
@media (max-width: 1440px) {
    .similar-ideas-container {
        width: 100%;
        padding: 0 40px;
    }
    
    .articles-grid {
        width: 100%;
        margin-left: 0;
        gap: 20px;
    }
    
    .article-card {
        width: 280px;
        height: 300px;
    }
    
    .article-image {
        height: 180px;
    }
    
    .article-img {
        width: 290px;
        height: 180px;
        margin-left: -5px;
    }
    
    .article-text {
        padding: 20px;
    }
    
    .article-title {
        font-size: 15px;
        max-width: 100%;
    }
    
    .similar-ideas-title-section {
        width: 100%;
        margin-left: 0;
    }
    
    .similar-ideas-title {
        font-size: 26px;
    }
}

@media (max-width: 1024px) {
    .similar-ideas-section {
        height: auto;
        padding: 40px 20px;
    }
    
    .similar-ideas-container {
        height: auto;
        gap: 30px;
    }
    
    .articles-grid {
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    
    .article-card {
        width: 300px;
        height: 280px;
    }
    
    .article-image {
        height: 160px;
    }
    
    .article-img {
        width: 310px;
        height: 160px;
        margin-left: -5px;
    }
    
    .article-text {
        padding: 16px;
    }
    
    .article-title {
        font-size: 14px;
        line-height: 1.3em;
    }
    
    .similar-ideas-title {
        font-size: 24px;
        text-align: center;
    }
    
    .similar-ideas-title-section {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .similar-ideas-section {
        width: 100%;
        height: auto;
        padding: 40px 0;
        background: #FFFFFF;
    }
    
    .similar-ideas-container {
        width: 100%;
        max-width: 375px;
        height: auto;
        margin: 0 auto;
        padding: 0;
        gap: 25px;
        flex-direction: column;
        align-items: center;
    }
    
    /* 标题移到底部 */
    .similar-ideas-title-section {
        width: 100%;
        max-width: 375px;
        height: 43px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .similar-ideas-title {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.1666666666666667em;
        text-align: center;
        color: #000000;
        margin: 0;
        max-width: 271px;
    }
    
    /* 文章网格移到顶部 */
    .articles-grid {
        width: 100%;
        max-width: 375px;
        height: auto;
        order: 1;
        margin: 0;
        padding: 0 23px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
        justify-content: center;
        align-items: flex-start;
    }
    
    .article-card {
        width: 160px;
        height: 194px;
        background: #F6F6F6;
        border-radius: 24px;
        margin: 0;
    }
    
    .article-content {
        width: 100%;
        height: 100%;
        padding: 1px;
        box-sizing: border-box;
    }
    
    .article-image {
        width: 158px;
        height: 100px;
        border-radius: 24px 24px 0 0;
        overflow: hidden;
        margin: 0;
    }
    
    .article-img {
        width: 158px;
        height: 100px;
        margin: 0;
        background-size: cover;
        background-position: center;
    }
    
    .article-text {
        width: 150px;
        height: auto;
        padding: 4px;
        margin: 4px auto 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    
    .article-title {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.25em;
        text-align: center;
        color: #3D3D3D;
        margin: 2px 1px;
        max-width: 148px;
    }
    
    /* 确保4个卡片的布局 */
    .article-card:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
    }
    
    .article-card:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
    }
    
    .article-card:nth-child(3) {
        grid-column: 1;
        grid-row: 2;
    }
    
    .article-card:nth-child(4) {
        grid-column: 2;
        grid-row: 2;
    }
}

@media (max-width: 480px) {
    .article-card {
        max-width: 100%;
        height: 240px;
    }
    
    .article-image {
        height: 130px;
    }
    
    .article-img {
        height: 130px;
    }
    
    .article-text {
        padding: 10px;
    }
    
    .article-title {
        font-size: 12px;
        line-height: 1.5em;
    }
    
    .similar-ideas-title {
        font-size: 18px;
        line-height: 1.4em;
    }
}
</style>