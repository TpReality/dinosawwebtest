<template>
    <div class="default-product-layout">
        <!-- Hero Section with Background -->
        <div class="hero-section">
            <!-- Background Images -->
            <div class="hero-background">
                <div class="bg-left">
                </div>
                <div class="bg-right">
                </div>
                <!-- Gradient Overlay -->
                <div class="gradient-overlay"></div>
            </div>

            <!-- Hero Content:style="'background:url('+productDetail.application_scenario_background_1_url+') no-repeat top center'" -->
            <div class="hero-content">
                <div class="container" >
                    <div class="breadcrumb-container">
                        <div class="breadcrumb-wrapper">
                            <div class="breadcrumb-link">
                                <div class="breadcrumb-text">
                                    <div class="text-container">
                                        <NuxtLink to="/" target="_blank"><span class="breadcrumb-home">{{contentDetail.home_text }}</span></NuxtLink>
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
                                                    <span class="breadcrumb-products">{{contentDetail.product_detail_menu_text}}</span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <div class="dropdown-icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                                                focusable="false" color="rgb(0, 0, 0)"
                                                style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;">
                                                <g color="rgb(0, 0, 0)" weight="bold">
                                                    <polyline points="208 96 128 176 48 96" fill="none"
                                                        stroke="rgb(0, 0, 0)" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="24"></polyline>
                                                </g>
                                            </svg>
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
                                        <NuxtLink to="/" target="_blank">
                                            <span> {{ productDetail.category }}</span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-title-section">
                        <h1 class="product-title">
                            {{productDetail.h1_page_inner_title}}
                        </h1>
                        <h2 class="product-model">
                            {{productDetail.mode}}
                        </h2>
                    </div>
                    <!-- Main Content -->
                    <div class="hero-main">
                        <!-- Left Content -->
                        <div class="hero-left">
                            <!-- Product Title -->


                            <!-- Product Description -->
                            <div class="product-description">
                                <div class="description-content">
                                    <div v-html="productDetail.product_overview" class="description-text">
                                        
                                    </div>
                                </div>

                            </div>

                            <div class="product-image" >
                                <NuxtImg :src="productDetail.first_image_url" />
                            </div>

                            <!-- Action Buttons -->
                            <div class="action-buttons">
                                <button class="btn-primary">
                                    <span>{{contentDetail.get_a_quote_text}}</span>
                                </button>
                                <button class="btn-whatsapp">
                                    <div class="btn-content">
                                        <div class="whatsapp-icon">
                                            <NuxtImg src="https://framerusercontent.com/images/Gvfk53Mm3Aro3nRYf1sD677a4.png?width=100&height=100" />
                                        </div>
                                        <span>{{ contentDetail.whats_app_title }}</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <!-- Right Content - Product Image -->
                           <!-- <NuxtImg :src="productDetail.b_applicable_materials_rich"  /> -->
                        <div class="hero-right">
                            <div class="product-image" >
                                <NuxtImg :src="productDetail.first_image_url" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Navigation Section -->
        <div ref="quickNavSection" class="quick-navigation-section" :class="{ 'sticky': isQuickNavSticky }">
            <div class="quick-nav-container">
                <div class="nav-items-wrapper">
                    <div class="nav-items-row">
                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('compatible-materials-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_1 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('cases-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_2 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('specs-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_3 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('core-benefits')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_4 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('faq-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_5 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('certifications-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_6 }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('solutions-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">{{ contentDetail.product_detail_application_materail_tab_7 }}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Active Indicator -->
                    <div class="nav-active-indicator">
                        <div class="indicator-line"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Compatible Materials & Products Section -->
        <div id="compatible-materials-section" class="compatible-materials-section">
            <div class="container">
                <!-- Section Header -->
                <div class="section-header">
                    <h2 class="section-title">{{productDetail.material_main_title}}</h2>
                    <p class="section-subtitle">{{productDetail.applicable_material_title_description}}</p>
                </div>

                <!-- Materials Carousel -->
                <div class="materials-carousel">
                    <div class="carousel-container">
                        <div class="carousel-track" ref="carouselTrack">
                            <!-- Item 1: Product Demo -->
                             <template v-for="(material, index) in applicableMaterials" :key="index">
                                <div class="carousel-item" v-if="productDetail[material]">
                                    <div class="material-card">
                                        <div class="card-header">
                                            <h3 class="card-title">{{ productDetail[material] }}</h3>
                                        </div>
                                        <div class="card-content" v-html="productDetail[material+'_rich']"></div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- Carousel Navigation -->
                        <div class="carousel-controls">
                            <button class="carousel-btn prev-btn" :class="currentSlide > 0 ? 'is-show' : ''"
                                @click="prevSlide">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="carousel-btn next-btn is-show" @click="nextSlide" v-show="showNextBtn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Consult Expert Button -->
                <div class="expert-consultation">
                    <button class="expert-btn">
                        <NuxtLink to="https://api.whatsapp.com/send?phone=8619859013937&Hi Lizzy,I want to know more detail information">
                            <span>{{contentDetail.product_detail_consult_dinosaw_material_expert_btn_text}}</span>
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>

        <!-- Cases Carousel Section -->
        <div id="cases-section" class="cases-section">

            <!-- Cases Content Container -->
            <div class="cases-content-container">
                <div class="cases-section-inner">
                    <!-- Cases List/Carousel -->
                    <div class="cases-list">
                        <div class="cases-carousel-track" ref="casesCarouselTrack">
                            <!-- Case Item 1: Architectural Projects -->
                            <div class="case-item">
                                <div class="case-content">
                                    <h2 class="case-header">
                                        <span class="case-category">{{ productDetail.cutting_materials_1 }}</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">{{productDetail.application_scenario_title_1}}</span>
                                    </h3>
                                    <div class="case-description" v-html="productDetail.application_scenario_description_1"></div>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>{{productDetail.button_text_1}}</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <NuxtImg :src="productDetail.application_scenario_background_1_url" />
                                    </div>
                                </div>
                            </div>

                            <!-- Case Item 2: Industrial Projects -->
                            <div class="case-item">
                                <div class="case-content">
                                    <h2 class="case-header">
                                        <span class="case-category">{{ productDetail.cutting_materials_2 }}</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">{{productDetail.application_scenario_title_2}}</span>
                                    </h3>
                                    <div class="case-description" v-html="productDetail.application_scenario_description_2"></div>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>{{productDetail.button_text_2}}</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <NuxtImg :src="productDetail.application_scenario_background_2_url" />
                                    </div>
                                </div>
                            </div>

                            <!-- Case Item 3: Custom Solutions -->
                            <div class="case-item">
                                <div class="case-content">
                                    <h2 class="case-header">
                                        <span class="case-category">{{ productDetail.cutting_materials_3 }}</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">{{productDetail.application_scenario_title_3}}</span>
                                    </h3>
                                    <div class="case-description" v-html="productDetail.application_scenario_description_3"></div>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>{{productDetail.button_text_3}}</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <NuxtImg :src="productDetail.application_scenario_background_3_url" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <div>
                        <!-- Navigation Buttons -->
                        <div class="cases-nav-buttons">
                            <button class="cases-btn cases-btn-prev" @click="prevCaseSlide"
                                :disabled="currentCaseSlide === 0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="cases-btn cases-btn-next" @click="nextCaseSlide"
                                :disabled="currentCaseSlide >= totalCaseSlides - 1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <!-- Pagination Dots -->
                        <div class="cases-pagination">
                            <button v-for="(slide, index) in totalCaseSlides" :key="index" class="cases-pagination-btn"
                                :class="{ active: currentCaseSlide === index }" @click="goToCaseSlide(index)">
                                <div class="pagination-dot"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Specs Section -->
        <div id="specs-section" class="specs-section">
            <div class="specs-container">
                <!-- Section Header -->
                <div class="specs-header">
                    <div class="specs-title-container">
                        <h2 class="specs-title">
                            <span class="title-gradient">{{ contentDetail.product_detail_specs_and_options_title }}</span>
                        </h2>
                    </div>
                    <div class="specs-subtitle-container">
                        <p class="specs-subtitle">
                            <span>{{ contentDetail.product_detail_specs_and_options_subtitle }}</span>
                        </p>
                    </div>
                </div>

                <!-- Specifications Table -->
                <div class="specs-table-container">
                    <div class="specs-table-wrapper">
                        <figure class="specs-table-figure" v-html="productDetail.table" > </figure>
                    </div>
                </div>

                <!-- Contact Button -->
                <div class="expert-consultation">
                    <button class="expert-btn">
                        <span>{{ contentDetail.product_detail_contact_dinosaw_technical_btn_text }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Core Benefits Section -->
        <div id="core-benefits" class="core-benefits">
            <div class="benefits-header">
                <div class="benefits-tagline">
                    <p>{{ productDetail.small_title }}</p>
                </div>
                <div class="benefits-title title">
                    <h2>
                        <span>{{ productDetail.big_title }}</span>
                    </h2>
                </div>
            </div>
            <div class="benefits-content">

                <div class="benefits-slideshow">
                    <!-- Slideshow with horizontal scrolling functionality -->
                    <div class="slideshow-container">
                        <!-- Image Display Area with horizontal scrolling -->
                        <div class="slideshow-track" ref="benefitsSlideshowTrack">
                            <div v-for="(slide, index) in benefitsSlides" :key="index" class="slide-item">
                                <NuxtImg :src="slide.image" />
                            </div>
                        </div>

                        <!-- Slideshow Controls -->
                        <div class="slideshow-controls">
                            <div class="nav-buttons">
                                <button class="nav-btn prev-btn" aria-label="Previous" @click="prevBenefitsSlide"
                                    :disabled="currentBenefitsSlide === 0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button class="nav-btn next-btn" aria-label="Next" @click="nextBenefitsSlide"
                                    :disabled="currentBenefitsSlide >= benefitsSlides.length - 1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div class="pagination-dots">
                                <button v-for="(slide, index) in benefitsSlides" :key="index" class="dot-btn"
                                    :class="{ active: currentBenefitsSlide === index }"
                                    @click="goToBenefitsSlide(index)">
                                    <div class="dot"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="benefits-features">
                    <div class="feature-card">
                        <div class="feature-content">
                            <div class="feature-header">
                                <h3>{{ productDetail.core_strengths_a }}</h3>
                            </div>
                            <div class="feature-description">
                                <p>{{ productDetail.core_strengths_description_a }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-content">
                            <div class="feature-header">
                                <h3>{{ productDetail.core_strengths_b }}</h3>
                            </div>
                            <div class="feature-description">
                                <p>{{ productDetail.core_strengths_description_b }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-content">
                            <div class="feature-header">
                                <h3>{{ productDetail.core_strengths_c }}</h3>
                            </div>
                            <div class="feature-description">
                                <p>{{ productDetail.core_strengths_description_c }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="expert-consultation">
                        <button class="expert-btn">
                            <span>{{ contentDetail.product_detail_inqury_for_details_btn_text }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Advanced Features Grid -->
        <div class="advanced-features-grid">
            <div class="features-row">
                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_a_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_a }}</h3>
                        <p>{{ productDetail.advantage_introduction_a }}</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_b_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_b }}</h3>
                        <p>{{ productDetail.advantage_introduction_b }}</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_c_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_c }}</h3>
                        <p>{{ productDetail.advantage_introduction_c }}</p>
                    </div>
                </div>
            </div>
             <div class="features-row" v-if="productDetail.image_d_url || productDetail.image_e_url || productDetail.image_f_url">
                <div class="feature-grid-card" v-if="productDetail.image_d_url">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_d_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_d }}</h3>
                        <p>{{ productDetail.advantage_introduction_d }}</p>
                    </div>
                </div>

                <div class="feature-grid-card" v-if="productDetail.image_e_url">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_e_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_e}}</h3>
                        <p>{{ productDetail.advantage_introduction_e }}</p>
                    </div>
                </div>

                <div class="feature-grid-card" v-if="productDetail.image_f_url">
                    <div class="feature-icon">
                        <NuxtImg :src="productDetail.image_f_url" />
                    </div>
                    <div class="feature-info">
                        <h3>{{ productDetail.detailed_advantages_f }}</h3>
                        <p>{{ productDetail.advantage_introduction_f }}</p>
                    </div>
                </div>
            </div>

            
        </div>
        <!-- FAQ Section -->
        <div id="faq-section" class="faq-section">
            <div class="faq-header">
                <h2>FAQs</h2>
                <p>{{ productDetail.faq_subtitle }}</p>
            </div>

            <div class="faq-container" v-if="!pending && productDetail" >
                <template v-for="(problem, index) in faqs.problems" :key="index">
                    <div class="faq-item"  v-if="productDetail[problem]">
                        <div class="faq-question">
                            <h2>{{ productDetail[problem] }}</h2>
                        </div>
                        <div class="faq-answer" v-html="productDetail[faqs.answers[index]]"> </div>
                    </div>
                </template>
            </div>
            <div class="expert-consultation">
                <button class="expert-btn">
                    <span>{{contentDetail.product_detail_need_more_assistance_link_btn_text}}</span>
                </button>
            </div>
        </div>

        <!-- Certifications & Standards Section -->
        <div id="certifications-section" class="certifications-section">
            <div class="certifications-container">
                <!-- Section Header -->
                <div class="certifications-header">
                    <p class="section-subtitle">{{contentDetail.product_detail_certifications_standards_title}}</p>
                </div>

                <!-- Main Title -->
                <div class="certifications-title">
                    <h2>{{productDetail.big_title}}</h2>
                </div>

                <!-- Certification Cards -->
                <div class="certification-cards">
                    <div class="certification-card">
                        <div class="cert-icon">
                            <NuxtImg src="https://framerusercontent.com/images/Yiho2Cb5dzAnUvfdxCniH50mk.webp" alt="CE Certification" />
                        </div>
                        <div class="cert-info">
                            <p>{{ contentDetail.product_detail_certifications_standards_panel_title_1 }}</p>
                        </div>
                    </div>

                    <div class="certification-card">
                        <div class="cert-icon">
                            <NuxtImg src="https://framerusercontent.com/images/Ylr0CRgiSfaNfAW4kzkACAp8Sk8.webp" alt="Tech Patents" />
                        </div>
                        <div class="cert-info">
                            <p>{{ contentDetail.product_detail_certifications_standards_panel_title_2 }}</p>
                        </div>
                    </div>

                    <div class="certification-card">
                        <div class="cert-icon">
                            <NuxtImg src="https://framerusercontent.com/images/XnigRDrO1VBjbKJKRd8TCFSlc.webp" alt="ISO Certification" />
                        </div>
                        <div class="cert-info">
                            <p>{{ contentDetail.product_detail_certifications_standards_panel_title_3 }}</p>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="certifications-description">
                    <p>{{ contentDetail.product_detail_certifications_standards_description }}</p>
                </div>

                <!-- Expertise Section -->
                <div class="expertise-title">
                    <h3>{{contentDetail.expertise_applications_title}}</h3>
                </div>

                <!-- Statistics Cards -->
                <div class="statistics-cards">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <NuxtImg src="https://framerusercontent.com/images/3WAqTA4czHSx7tLQYQumGPcHF0.webp" alt="Countries Served" />
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">
                                <p>75+</p>
                            </div>
                            <div class="stat-label">
                                <p>{{ contentDetail.expertise_applications_panel_label_1 }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">
                            <NuxtImg src="https://framerusercontent.com/images/6APWWoW36QHSZvUE58xYEN6x0o.webp" alt="Industry Expertise" />
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">
                                <p>20+</p>
                            </div>
                            <div class="stat-label">
                                <p>{{ contentDetail.expertise_applications_panel_label_2 }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="application-description" v-html="contentDetail.expertise_applications_description"></div>
                <!-- <div class="application-description">
                    <p>DINOSAW delivers lifecycle quality traceability and technical support for machinery equipment and
                        diamond tools, covering cutting, drilling, engraving, polishing, and processing requirements for
                        precision machining across industries.</p>
                </div>

                <div class="industries-description">
                    <p>Our products serve traditional industries (mining, stone processing, building materials),
                        high-precision manufacturing (quartz glass, semiconductor), advanced materials (graphite, carbon
                        fiber composites), and specialized applications (nuclear decommissioning, railway construction
                        machinery).</p>
                </div> -->
            </div>
        </div>

        <!-- Complete Production Solutions Section -->
        <div id="solutions-section" class="solutions-section">
            <div class="solutions-container">
                <!-- Section Header -->
                <div class="solutions-header">
                    <h2>{{contentDetail.complete_production_solutions_equipments_title}}</h2>
                </div>

                <!-- Section Description -->
                <div class="solutions-description">
                    <p>{{ contentDetail.complete_production_solutions_equipments_description }}</p>
                </div>

                <!-- Solutions Carousel -->
                <div class="solutions-carousel">
                    <!-- Gradient Overlays -->
                    <div class="gradient-overlay left" :class="{ visible: currentSolution > 0 }"></div>
                    <div class="gradient-overlay right" :class="{ visible: currentSolution < 2 }"></div>

                    <div class="solutions-track" ref="solutionsCarouselTrack">
                        <!-- Solution Card 1 -->
                        <div class="solution-card">
                            <NuxtLink :to="'/Products/'+productDetail.link_1" target="_blank">
                                <div class="solution-image">
                                    <NuxtImg :src="productDetail.image_1_url" />
                                </div>
                            
                                <div class="solution-content">
                                    <div class="solution-title">
                                        <h3>{{productDetail.recommended_product_name_a}}</h3>
                                    </div>
                                    <div class="solution-description">
                                        <p>{{ productDetail.recommended_description_a }}</p>
                                    </div>
                                    <div class="solution-cta">
                                        <p><em>{{productDetail.button_text_a  }}</em></p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>

                        <!-- Solution Card 2 -->
                       <div class="solution-card">
                            <NuxtLink :to="'/Products/'+productDetail.link_2" target="_blank">
                                <div class="solution-image">
                                   <NuxtImg :src="productDetail.image_2_url" />
                                </div>
                                <div class="solution-content">
                                    <div class="solution-title">
                                        <h3>{{productDetail.recommended_product_name_b}}</h3>
                                    </div>
                                    <div class="solution-description">
                                        <p>{{ productDetail.recommended_description_b }}</p>
                                    </div>
                                    <div class="solution-cta">
                                        <p><em>{{productDetail.button_text_b  }}</em></p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>

                        <!-- Solution Card 3 -->
                        <div class="solution-card">
                            <NuxtLink :to="'/Products/'+productDetail.link_3" target="_blank">
                                <div class="solution-image">
                                    <NuxtImg :src="productDetail.image_3_url" />
                                </div>
                                <div class="solution-content">
                                    <div class="solution-title">
                                        <h3>{{productDetail.recommended_product_name_c}}</h3>
                                    </div>
                                    <div class="solution-description">
                                        <p>{{ productDetail.recommended_description_c }}</p>
                                    </div>
                                    <div class="solution-cta">
                                        <p><em>{{productDetail.button_text_c  }}</em></p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Carousel Navigation -->
                    <div class="solutions-navigation">
                        <div class="solutions-dots">
                            <span v-for="(item, index) in 3" :key="index" class="solution-dot"
                                :class="{ active: currentSolution === index }" @click="goToSolution(index)"></span>
                        </div>
                    </div>
                </div>

                <!-- Custom Solution Button -->
                <div class="expert-consultation">
                    <button class="expert-btn">
                        <span>{{ contentDetail.get_a_custom_solution_text }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Contact and About Section -->
        <div class="contact-about-section">
            <div class="contact-about-container">
                <div class="section-header">
                    <div class="header-content">
                        <h2>{{ productDetail.cta_main_title }}</h2>
                    </div>
                    <div class="header-description">
                        <p>{{ productDetail.cta_subtitle }}</p>
                    </div>
                </div>

                <div class="contact-cards">
                    <div class="contact-card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-title">
                                    <h3>{{ contentDetail.contact_dinosaw_title }}</h3>
                                </div>
                                <div class="card-description">
                                    <p>{{contentDetail.contact_dinosaw_description}}</p>
                                </div>
                                <button class="contact-btn">
                                    <span>{{ contentDetail.get_a_quote_text }}</span>
                                </button>
                            </div>
                            <div class="card-image">
                                <NuxtImg src="https://framerusercontent.com/images/4T3YsD9vEGtvInzGOTD62VoYaI.webp" />
                                <!-- <div class="placeholder-image">Contact Image</div> -->
                            </div>
                        </div>
                    </div>

                    <div class="about-card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-title">
                                    <h3>{{ productDetail.title }}</h3>
                                </div>
                                <div class="card-description">
                                    <p>{{ contentDetail.trustworthy_wire_saw_machine_manufacturer_description }}</p>
                                </div>
                            </div>
                            <div class="card-image">
                                <NuxtImg src="https://framerusercontent.com/images/rsDnae29rDFkuTTfSnFohbMKFg.webp" />
                                <button class="about-btn">
                                    <span>{{ contentDetail.about_dinosaw_btn_text }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Other Machines or Tools Navigation Section -->
        <div class="other-machines-section">
            <div class="other-machines-container">
                <!-- Section Header -->
                <div class="other-machines-header">
                    <div class="section-title-container">
                        <h2 class="other-machines-title">{{ contentDetail.product_detail_other_machines_or_tools_text }}</h2>
                    </div>
                    <div class="section-subtitle-container">
                        <p class="other-machines-subtitle">{{ contentDetail.product_detail_are_you_looking_for_more_new_text }}
                        </p>
                    </div>
                </div>

                <!-- Navigation Links -->
                <div class="machines-navigation">
                    <div class="nav-link-container">
                        <NuxtLink :to="'/Products/'+productDetail.link_1" class="nav-link prev-link" target="_blank">
                            <div class="nav-icon-container">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M20 24L12 16L20 8" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="nav-content">
                                <p class="nav-text">{{ contentDetail.product_detail_previous_machines_or_tools_btn_text }}</p>
                            </div>
                            <div class="nav-after"></div>
                        </NuxtLink>
                    </div>

                    <div class="nav-link-container">
                        <NuxtLink :to="'/Products/'+productDetail.link_3" class="nav-link next-link" target="_blank">
                            <div class="nav-content">
                                <p class="nav-text">{{contentDetail.product_detail_next_machines_or_tools_btn_text}}</p>
                            </div>
                            <div class="nav-icon-container">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M12 8L20 16L12 24" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

const props = defineProps({
    slug: {
        type: String,
        required: true
    },
    topProduct:{
        type: Array,
        default: () => []
    },
    contentDetail:{
        type: Object,
        default: () => ({})
    }
});

// 添加 emit 定义
const emit = defineEmits(['headdata-loaded']);



// 轮播相关状态
const carouselTrack = ref(null)
const currentSlide = ref(0)
const totalSlides = 6
const slideWidth = 452 // 420px + 32px gap
const visibleSlides = ref(2.5) // 可视区域显示的slide数量，默认2.5个

// 案例轮播相关状态
const casesCarouselTrack = ref(null)
const currentCaseSlide = ref(0)
const totalCaseSlides = 3
const caseSlideWidth = ref(1200) // 全宽设计，响应式变量

// FAQ functionality
const activeQuestion = ref(-1)

const toggleQuestion = (index) => {
    activeQuestion.value = activeQuestion.value === index ? -1 : index
}

// Solutions carousel functionality
const solutionsCarouselTrack = ref(null)
const currentSolution = ref(0)
const totalSolutions = 3

// Quick Navigation sticky functionality
const quickNavSection = ref(null)
const isQuickNavSticky = ref(false)
const quickNavOriginalTop = ref(0)
const activeNavIndex = ref(0)

// Benefits slideshow functionality
const currentBenefitsSlide = ref(0)
const benefitsSlideshowTrack = ref(null)
const benefitsSlideWidth = ref(400) // 响应式slide宽度

const applicableMaterials  = ref(["a_applicable_materials","b_applicable_materials","c_applicable_materials","d_applicable_materials","e_applicable_materials","f_applicable_materials"])
const faqs = ref({
    problems: ["problem_a", "problem_b", "problem_c", "problem_d", "problem_e", "problem_f", "problem_g", "problem_h", "problem_i", "problem_j"],
    answers: ["answer_a", "answer_b", "answer_c", "answer_d", "answer_e", "answer_f", "answer_g", "answer_h", "answer_i", "answer_j"]
})

const benefitsSlides = ref([])

const { data: productDetailRes, pending, error } = await useApi('/products?filters[url][$eq]='+props.slug)
const productDetail = computed(() => {
    // 检查 productDetailRes.value 是否存在
    if (productDetailRes.value && productDetailRes.value.data && productDetailRes.value.data.length > 0) {
        // 返回你需要的具体数据对象
        benefitsSlides.value = [
            {
                image: productDetailRes.value.data[0].core_advantage_illustration_a_url,
            },
            {
                image: productDetailRes.value.data[0].core_advantage_illustration_b_url,
            },
            {
                image: productDetailRes.value.data[0].core_advantage_illustration_c_url,
            }
        ]
        console.log('productDetailRes',productDetailRes.value)
        return productDetailRes.value.data[0];
    }
    // console.log('productDetailRes.value:', productDetailRes.value);
    // 否则返回 null 或一个空对象，方便判断
    return null; 
});

// 监听 productDetail 变化并通知父组件
watch(productDetail, (newData) => {
    if (newData) {
        // console.log('Product data loaded in DefaultProductLayout:', newData);
        // 通知父组件数据已加载
        emit('headdata-loaded', newData);
    }
}, { immediate: true });



const nextBenefitsSlide = () => {
    if (currentBenefitsSlide.value < benefitsSlides.value.length - 1) {
        currentBenefitsSlide.value++
        updateBenefitsSlideshowPosition()
    }
}

const prevBenefitsSlide = () => {
    if (currentBenefitsSlide.value > 0) {
        currentBenefitsSlide.value--
        updateBenefitsSlideshowPosition()
    }
}

const updateBenefitsSlideshowPosition = () => {
    if (benefitsSlideshowTrack.value) {
        // 获取实际容器宽度
        const container = benefitsSlideshowTrack.value.parentElement
        const containerWidth = container ? container.offsetWidth : 400

        // 根据屏幕尺寸确定slide宽度
        let actualSlideWidth = containerWidth

        // 响应式宽度设置
        if (window.innerWidth <= 480) {
            actualSlideWidth = containerWidth - 20 // 小屏幕减去padding
        } else if (window.innerWidth <= 768) {
            actualSlideWidth = containerWidth - 30
        } else if (window.innerWidth <= 1200) {
            actualSlideWidth = containerWidth - 40
        } else {
            actualSlideWidth = containerWidth
        }

        benefitsSlideWidth.value = actualSlideWidth

        // 计算滚动位置
        const translateX = -currentBenefitsSlide.value * actualSlideWidth
        benefitsSlideshowTrack.value.style.transform = `translateX(${translateX}px)`
    }
}

const goToBenefitsSlide = (index) => {
    currentBenefitsSlide.value = index
    updateBenefitsSlideshowPosition()
}

// Auto slideshow for benefits
// let benefitsAutoPlayInterval = null

// const startBenefitsAutoPlay = () => {
//     benefitsAutoPlayInterval = setInterval(() => {
//         if (currentBenefitsSlide.value < benefitsSlides.value.length - 1) {
//             nextBenefitsSlide()
//         } else {
//             currentBenefitsSlide.value = 0 // 循环播放
//         }
//     }, 4000) // 4秒切换一次
// }

const stopBenefitsAutoPlay = () => {
    if (benefitsAutoPlayInterval) {
        clearInterval(benefitsAutoPlayInterval)
        benefitsAutoPlayInterval = null
    }
}

// Related Reading carousel functionality
const currentReadingSlide = ref(0)
const visibleReadingSlides = ref(4)
const readingArticles = ref([
    {
        title: "Professional Rock Cutting Saw | Mining & Factory Solutions"
    },
    {
        title: "How to Select Wire Saw Machine Manufacturer (2025)"
    },
    {
        title: "Precious Stone Cutting Machines: CNC Wire Saw for Luxury Stone Cutting"
    },
    {
        title: "Advanced Diamond Wire Technology for Industrial Applications"
    }
])

const nextReading = () => {
    if (currentReadingSlide.value < readingArticles.value.length - visibleReadingSlides.value) {
        currentReadingSlide.value++
    }
}

const prevReading = () => {
    if (currentReadingSlide.value > 0) {
        currentReadingSlide.value--
    }
}

const nextSolution = () => {
    if (currentSolution.value < totalSolutions - 1) {
        currentSolution.value++
        updateSolutionsPosition()
    }
}

const prevSolution = () => {
    if (currentSolution.value > 0) {
        currentSolution.value--
        updateSolutionsPosition()
    }
}

const goToSolution = (index) => {
    currentSolution.value = index
    updateSolutionsPosition()
}

const updateSolutionsPosition = () => {
    if (solutionsCarouselTrack.value) {
        let translateX = 0
        if (currentSolution.value === 1) {
            // 第二个位置：稍微向左移动，让用户看到第三个卡片的一部分
            translateX = -100 // 调整这个值来控制移动距离
        } else if (currentSolution.value === 2) {
            // 第三个位置：让第三个卡片与右边对齐
            const containerWidth = 1193 // 容器宽度
            const cardWidth = 410
            const gap = 32
            const totalWidth = cardWidth * 3 + gap * 2
            translateX = -(totalWidth - containerWidth + 40) // 20px为padding补偿
        }
        solutionsCarouselTrack.value.style.transform = `translateX(${translateX}px)`
    }
}

// Quick Navigation scroll function
// Navigation items mapping
const navSections = [
    'compatible-materials-section',
    'cases-section',
    'specs-section',
    'core-benefits',
    'faq-section',
    'certifications-section',
    'solutions-section'
]

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        let offset = 140 // Default offset for fixed header
        // Adjust offset for specific sections
        if (sectionId === 'core-benefits') {
            offset = 160 // Larger offset for Core Benefits section
        } else if (sectionId === 'faq-section') {
            offset = 150 // Slightly larger offset for FAQ section
        }

        // Update active nav index
        const navIndex = navSections.indexOf(sectionId)
        if (navIndex !== -1) {
            activeNavIndex.value = navIndex
            updateIndicatorPosition()
        }

        const offsetTop = element.offsetTop - offset
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
}

// Update indicator line position
const updateIndicatorPosition = () => {
    nextTick(() => {
        const indicator = document.querySelector('.indicator-line')
        const navItems = document.querySelectorAll('.nav-item')

        if (indicator && navItems[activeNavIndex.value]) {
            const activeItem = navItems[activeNavIndex.value]
            const itemRect = activeItem.getBoundingClientRect()
            const containerRect = document.querySelector('.nav-items-wrapper').getBoundingClientRect()

            const leftOffset = itemRect.left - containerRect.left
            const itemWidth = itemRect.width

            indicator.style.transform = `translateX(${leftOffset}px)`
            indicator.style.width = `${itemWidth}px`
        }
    })
}

// 计算属性：判断是否显示next按钮
const showNextBtn = computed(() => {
    // 当最后一个carousel-item完全进入可视区域时隐藏next-btn
    // 由于显示2.5个，最后一次滚动应该是到第4个slide位置（显示第4、5、6个item）
    return currentSlide.value < totalSlides - Math.ceil(visibleSlides.value)
})

// 轮播控制函数
const nextSlide = () => {
    const maxSlide = totalSlides - Math.ceil(visibleSlides.value)
    if (currentSlide.value < maxSlide) {
        // 检查是否是最后一次滚动（显示最后一个完整item）
        if (currentSlide.value === maxSlide - 1) {
            // 最后一次滚动：让最后的内容块与右边对齐
            currentSlide.value = totalSlides - visibleSlides.value
        } else {
            // 正常滚动1个slide
            currentSlide.value++
        }
        updateCarouselPosition()
    }
}

const prevSlide = () => {
    if (currentSlide.value > 0) {
        // 检查当前位置是否接近最后位置
        const maxSlide = totalSlides - visibleSlides.value
        if (Math.abs(currentSlide.value - maxSlide) < 0.1) {
            // 从最后位置回退到倒数第二位置
            currentSlide.value = Math.max(0, maxSlide - 1)
        } else {
            // 正常回退1个slide
            currentSlide.value = Math.max(0, currentSlide.value - 1)
        }
        updateCarouselPosition()
    }
}

const updateCarouselPosition = () => {
    if (carouselTrack.value) {
        // 获取当前容器宽度和item宽度
        const containerWidth = carouselTrack.value.parentElement?.offsetWidth || 1134
        const itemWidth = 420 // 基础item宽度
        const gap = 32 // item间距

        // 根据屏幕尺寸调整item宽度和间距
        let actualItemWidth = itemWidth
        let actualGap = gap

        if (window.innerWidth <= 480) {
            actualItemWidth = 280
            actualGap = 12
        } else if (window.innerWidth <= 768) {
            actualItemWidth = 300
            actualGap = 16
        } else if (window.innerWidth <= 1200) {
            actualItemWidth = 350
            actualGap = 20
        }

        // 计算最大可滚动距离，确保最后的内容块与右边对齐
        const totalWidth = actualItemWidth * totalSlides + actualGap * (totalSlides - 1)
        const maxTranslateX = totalWidth - containerWidth

        // 计算当前应该的偏移量
        let translateX = currentSlide.value * (actualItemWidth + actualGap)

        // 限制最大偏移量，确保不会超出边界
        translateX = Math.min(translateX, maxTranslateX)

        carouselTrack.value.style.transform = `translateX(-${translateX}px)`
    }
}

// 案例轮播控制函数
const nextCaseSlide = () => {
    if (currentCaseSlide.value < totalCaseSlides - 1) {
        // 直接跳转到下一个完整的案例项目
        currentCaseSlide.value++
        updateCaseCarouselPosition()
    }
}

const prevCaseSlide = () => {
    if (currentCaseSlide.value > 0) {
        // 直接跳转到上一个完整的案例项目
        currentCaseSlide.value--
        updateCaseCarouselPosition()
    }
}

const goToCaseSlide = (index) => {
    // 直接跳转到指定的案例项目
    currentCaseSlide.value = index
    updateCaseCarouselPosition()
}

const updateCaseCarouselPosition = () => {
    if (casesCarouselTrack.value) {
        // 获取实际容器宽度
        const container = casesCarouselTrack.value.parentElement
        const containerWidth = container ? container.offsetWidth : window.innerWidth
        
        // 根据屏幕尺寸确定实际的slide宽度
        let actualSlideWidth = containerWidth

        // 对于大屏幕，使用固定宽度以保持设计一致性
        if (containerWidth >= 1200) {
            actualSlideWidth = 1200 // 保持与容器宽度一致
        } else if (containerWidth > 768) {
            actualSlideWidth = Math.min(1000, containerWidth - 40) // 减去padding
        } else {
            actualSlideWidth = containerWidth // 小屏幕减去padding
        }

        // 精确计算移动距离
        const translateX = -currentCaseSlide.value * actualSlideWidth
        casesCarouselTrack.value.style.transform = `translateX(${translateX}px)`
    }
}

// 响应式更新可视slide数量和案例轮播宽度
const updateVisibleSlides = () => {
    const containerWidth = window.innerWidth
    if (containerWidth <= 480) {
        visibleSlides.value = 1
        // 更新案例轮播的滑动宽度 - 小屏幕使用实际宽度减去padding
        caseSlideWidth.value = containerWidth - 20
    } else if (containerWidth <= 768) {
        visibleSlides.value = 1
        caseSlideWidth.value = containerWidth - 20
    } else if (containerWidth <= 1200) {
        visibleSlides.value = 2
        // 中等屏幕使用较小的固定宽度或实际宽度
        caseSlideWidth.value = Math.min(1000, containerWidth - 40)
    } else {
        visibleSlides.value = 2.5 // 桌面端显示2.5个
        caseSlideWidth.value = 1200
    }

    // 更新案例轮播位置以反映新的宽度设置
    updateCaseCarouselPosition()
}

// 自动轮播
// let autoPlayInterval = null

// const startAutoPlay = () => {
//     autoPlayInterval = setInterval(() => {
//         if (currentSlide.value < totalSlides - 1) {
//             nextSlide()
//         } else {
//             stopAutoPlay() // 到达最后一个时停止自动播放
//         }
//     }, 5000) // 5秒切换一次
// }

// const stopAutoPlay = () => {
//     if (autoPlayInterval) {
//         clearInterval(autoPlayInterval)
//         autoPlayInterval = null
//     }
// }

// Handle quick navigation sticky behavior
const handleScroll = () => {
    if (!quickNavSection.value) return

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const dinosawHeader = document.querySelector('.dinosaw-head-con')
    const headerHeight = dinosawHeader ? dinosawHeader.offsetHeight : 0

    // Set CSS variable for header height
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)

    // If we haven't stored the original position yet, store it
    if (quickNavOriginalTop.value === 0) {
        quickNavOriginalTop.value = quickNavSection.value.offsetTop
    }

    // Check if quick nav should be sticky
    const shouldBeSticky = scrollTop > (quickNavOriginalTop.value - headerHeight)

    if (shouldBeSticky !== isQuickNavSticky.value) {
        isQuickNavSticky.value = shouldBeSticky
    }
}

onMounted(() => {
    // 初始化可视slide数量
    updateVisibleSlides()

    // 监听窗口大小变化
    const handleResize = () => {
        updateVisibleSlides()
        updateBenefitsSlideshowPosition() // 重新计算slideshow位置
    }

    window.addEventListener('resize', handleResize)

    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)

    // 初始化快捷导航位置
    nextTick(() => {
        if (quickNavSection.value) {
            quickNavOriginalTop.value = quickNavSection.value.offsetTop
        }
        // 初始化indicator位置
        updateIndicatorPosition()
        // 初始化benefits slideshow位置
        updateBenefitsSlideshowPosition()
    })

    // 启动benefits slideshow自动播放
    // startBenefitsAutoPlay()

    // startAutoPlay()
})

// 组件卸载时清理事件监听器
onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleSlides)
    window.removeEventListener('scroll', handleScroll)
    // stopAutoPlay()
    // stopBenefitsAutoPlay()
})

// 在模板中可以直接使用 props.slug
// console.log('Current slug in DefaultProductLayout:', props.slug);
</script>

<style scoped lang="scss">
.default-product-layout {
    width: 100%;
    min-height: 100vh;
}

/* Hero Section */
.hero-section {
    position: relative;
    width: 100%;
    display: flex;
    overflow: hidden;
}

/* Background */
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(#438cff -63%, #fff 46%);
}

.bg-left {
    position: absolute;
    top: -85px;
    right: 50%;
    width: 594px;
    height: 313px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.bg-right {
    position: absolute;
    bottom: 163px;
    right: 317px;
    width: 317px;
    height: 156px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.gradient-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(67, 140, 255, 1) 0%, rgba(255, 255, 255, 1) 46%);
    z-index: 2;
}

/* Hero Content */
.hero-content {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: 0 20px;
}

.container {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 40px 0;
}

/* Main Content */
.hero-main {
    display: flex;
    align-items: center;
    gap: 60px;
}

.hero-left {
    flex: 1;
    max-width: 584px;
}

.hero-right {
    flex: 1;
    max-width: 493px;
    position: relative;
}

/* Product Title */

.product-title {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 1.23em;
    color: #000000;
    margin: 0 0 22px 0;
    max-width: 1137px;
}

.product-model {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.21em;
    color: #000000;
    margin: 0;
}

/* Product Description */
.product-description {
    position: relative;
    margin-bottom: 32px;
}

.description-content {
    max-width: 585px;
}

.description-text {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.18em;
    color: #545353;
    margin: 0;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;
}

.btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    background: #FFFFFF;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(68, 94, 232, 1);

    span {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 22px;
        line-height: 1.18em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

.btn-whatsapp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    background: linear-gradient(91deg, rgba(68, 94, 232, 1) 0%, rgba(76, 155, 253, 1) 100%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: scale 1s linear infinite;
}

@keyframes scale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(0.9);
    }
}

.btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 22px;
        line-height: 1.18em;
        color: #FFFFFF;
    }
}

.whatsapp-icon {
    width: 40px;
    height: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

/* Product Image */
.product-image {
    width: 100%;
    height: 379px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

/* Compatible Materials & Products Section */
.compatible-materials-section {
    width: 100%;
    padding: 80px 0;
    background: linear-gradient(-1deg, rgba(255, 255, 255, 1) 0%, rgba(241, 245, 255, 1) 100%);
    .card-content{
        flex-direction: column;
    }
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 1.22em;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 16px 0;
}

.section-subtitle {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.18em;
    color: #545353;
    margin: 0;
}

/* Materials Carousel */
.materials-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel-container {
    position: relative;
    width: 100%;
    /* 精确计算：2.5个可视item + 2.5个gap + 左右padding */
    max-width: calc(420px * 2.5 + 32px * 2 + 20px * 2);
    /* 1134px */
    margin: 0 auto;
    padding: 10px;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    gap: 32px;
    transition: transform 0.5s ease-in-out;
    width: calc(420px * 6 + 32px * 5);
    /* 6 items + 5 gaps */
}

.carousel-item {
    flex: 0 0 420px;
    height: 560px;
}

.material-card {
    width: 100%;
    height: 100%;
    background: #F0F4FF;
    border-radius: 24px;
    padding: 25px 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
}

.card-header {
    padding: 12px 20px 0;
    text-align: center;
}

.card-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.21em;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

.card-content {
    flex: 1;
    padding: 20px 20px 20px;
    display: flex;
    flex-direction: row;
    gap: 8px;
}

/* Demo Video Styles */
.demo-video {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.video-placeholder {
    width: 100%;
    height: 284px;
    background: #F7F7F7;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.play-button {
    cursor: pointer;
    transition: transform 0.3s ease;
}

.play-button:hover {
    transform: scale(1.1);
}

.video-description {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    color: #666666;
    text-align: center;
    margin: 0;
    padding: 10px;
    border: 1px solid transparent;
    border-top: 1px solid #E8E8E8;
}

/* Image Gallery Styles */
.image-gallery {
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
}

.image-gallery img {
    width: 100%;
    height: auto;
    display: block;
}

.image-gallery img:first-child {
    height: 169px;
    object-fit: cover;
}

.image-gallery img:not(:first-child) {
    height: 169px;
    object-fit: cover;
    border-top: 1px solid #E8E8E8;
}

/* Featured Image */
.featured-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 8px;
}

/* Card Description */
.card-description {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.card-description p {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    color: #666666;
    margin: 0;
}

/* Carousel Controls */
.carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    pointer-events: none;
}

.carousel-btn {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    pointer-events: all;
    visibility: hidden;

    &.is-show {
        visibility: visible;
    }
}

.carousel-btn:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
}

.carousel-btn svg {
    width: 24px;
    height: 24px;
}

/* Expert Consultation */
.expert-consultation {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.expert-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 60px;
    padding: 0 30px;
    background: #FFFFFF;
    border: none;
    border-radius: 100px;
    border: 1px solid #4a90e2;
    cursor: pointer;
    transition: all 0.3s ease;

    span {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 22px;
        line-height: 1.18em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

/* Quick Navigation Section */
.quick-navigation-section {
    width: 100%;
    height: 50px;
    background: #F5F8FF;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    gap: 10px;
    padding: 0;
    transition: all 0.3s ease;
    z-index: 20;
}

.quick-navigation-section.sticky {
    position: fixed;
    top: var(--header-height, 0px);
    left: 0;
    right: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: rgba(245, 248, 255, 0.95);
    backdrop-filter: blur(10px);
}

/* Add padding to body when sticky to prevent content jump */
.quick-navigation-section.sticky+* {
    margin-top: 50px;
    /* Adjust based on quick nav height */
}

.quick-nav-container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}

.nav-items-wrapper {
    position: absolute;
    top: 50%;
    left: 547px;
    transform: translateY(-50%);
    width: 827px;
    height: 32px;
}

.nav-items-row {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 827px;
    height: 24px;
}

.nav-item {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 10px;
}

.nav-item:first-child {
    width: 294px;
    height: 31.2px;
}

.nav-item:nth-child(2) {
    width: 45px;
    height: 31.2px;
}

.nav-item:nth-child(3) {
    width: 47px;
    height: 31.2px;
}

.nav-item:nth-child(4) {
    width: 140px;
    height: 31.2px;
}

.nav-item:nth-child(5) {
    width: 39px;
    height: 31.2px;
}

.nav-item:nth-child(6) {
    width: 95px;
    height: 31.2px;
}

.nav-item:nth-child(7) {
    width: 73px;
    height: 31.2px;
}

.nav-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 4px 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    height: 32px;
    border-radius: 6px;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
}

.nav-link-content {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    height: 19.2px;
}

.nav-link-text {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.1875em;
    text-align: left;
    color: #000000;
    margin: 0;
    position: relative;
    top: -1px;
}

.nav-active-indicator {
    position: absolute;
    bottom: 8px;
    left: 1px;
    width: 247px;
    height: 2px;
    border-radius: 4px;
}

.indicator-line {
    width: 247px;
    height: 2px;
    background: linear-gradient(90deg,
            transparent 0%,
            rgba(71, 82, 230, 0.1) 20%,
            rgba(71, 82, 230, 0.3) 40%,
            rgba(36, 196, 255, 0.3) 60%,
            rgba(36, 196, 255, 0.1) 80%,
            transparent 100%);
    border-radius: 4px;
    transition: transform 0.3s ease, width 0.3s ease;
}

/* Responsive Design for Quick Navigation */
@media (max-width: 1920px) {
    .nav-items-wrapper {
        position: relative;
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        max-width: 827px;
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
    }
}

@media (max-width: 1200px) {
    .quick-navigation-section {
        height: auto;
        min-height: 50px;
        padding: 8px 0;
    }

    .quick-nav-container {
        height: auto;
    }

    .nav-items-wrapper {
        width: 100%;
        height: auto;
        padding: 0 20px;
    }

    .nav-items-row {
        width: 100%;
        height: auto;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-item {
        width: auto !important;
        height: auto !important;
        min-width: fit-content;
    }

    .nav-link {
        padding: 6px 12px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.7);
        height: auto;
    }

    .nav-link-text {
        width: auto !important;
        height: auto !important;
        top: 0 !important;
        text-align: center;
        font-size: 14px;
        white-space: nowrap;
    }

    .nav-active-indicator {
        display: none;
    }
}

@media (max-width: 768px) {
    .nav-items-row {
        gap: 12px;
    }

    .nav-link {
        padding: 5px 10px;
    }

    .nav-link-text {
        font-size: 13px;
    }
}

@media (max-width: 480px) {
    .quick-navigation-section {
        min-height: 40px;
        padding: 5px 0;
    }

    .nav-items-wrapper {
        padding: 0 10px;
    }

    .nav-items-row {
        gap: 8px;
    }

    .nav-link {
        padding: 4px 8px;
    }

    .nav-link-text {
        font-size: 12px;
    }
}

@media (min-width: 1200px) { 
    .hero-left{
        .product-image{
            display:none;
        }
    }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .hero-main {
        flex-direction: column;
        gap: 40px;
    }

    .hero-left,
    .hero-right {
        max-width: 100%;
    }

    .hero-right{
        display:none;
    }

    /* Carousel responsive */
    .carousel-container {
        /* 中等屏幕：2个完整item + 左右padding */
        max-width: calc(350px * 2 + 20px * 1 + 40px);
        /* 760px */
        padding: 10px 20px;
        overflow: hidden;
    }

    .carousel-track {
        width: calc(350px * 6 + 20px * 5);
        gap: 20px;
    }

    .carousel-item {
        flex: 0 0 350px;
    }

    .material-card {
        padding: 20px 8px 12px;
    }

    .section-title {
        font-size: 32px;
    }

    .expert-btn {
        width: 100%;
        max-width: 500px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    .product-title {
        font-size: 36px;
    }

    .product-model {
        font-size: 24px;
    }

    .description-text {
        font-size: 16px;
    }

    .action-buttons {
        flex-direction: column;
        gap: 16px;

        .btn-primary,
        .btn-whatsapp {
            width: 100%;
            span{
                font-size:24px;
            }
        }
    }

    .bg-left,
    .bg-right {
        display: none;
    }

    /* Materials section mobile */
    .compatible-materials-section {
        padding: 60px 0;
    }

    .section-title {
        font-size: 28px;
    }

    .section-subtitle {
        font-size: 16px;
    }

    .carousel-container {
        /* 移动端：1个可视item + 左右padding */
        max-width: calc(300px + 20px);
        /* 320px */
        padding: 10px;
        overflow: hidden;
    }

    .carousel-track {
        width: calc(300px * 6 + 16px * 5);
        gap: 16px;
    }

    .carousel-item {
        flex: 0 0 300px;
        height: 500px;
    }

    .material-card {
        padding: 15px 8px 10px;
        gap: 12px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-content {
        padding: 0 15px 20px;
    }

    .video-placeholder {
        height: 200px;
    }

    .image-gallery img:first-child,
    .image-gallery img:not(:first-child) {
        height: 120px;
    }

    .featured-image {
        height: 140px;
    }

    .card-description p {
        font-size: 14px;
        line-height: 1.3em;
    }

    .expert-btn {
        width: 100%;
        max-width: 350px;
        height: 50px;

        span {
            font-size: 18px;
        }
    }
}

@media (max-width: 480px) {
    .breadcrumb-nav {
        flex-wrap: wrap;
        gap: 5px;
    }

    .product-title-section {
        margin-bottom: 20px;

        .product-title {
            font-size: 24px;
            line-height: 1.2;
        }
    }

    .product-model {
        font-size: 20px;
    }

    .btn-primary span,
    .btn-content span {
        font-size: 18px;
    }

    /* Materials section small screens */
    .compatible-materials-section {
        padding: 40px 0;
    }

    .section-header {
        margin-bottom: 40px;
    }

    .section-title {
        font-size: 24px;
        line-height: 1.3;
    }

    .section-subtitle {
        font-size: 15px;
        font-weight:400;
        color:rgb(51, 51, 51);
    }

    .carousel-container {
        /* 小屏幕：1个可视item + 左右padding */
        max-width:auto;
        /* 300px */
        padding: 10px;
        overflow: hidden;
    }

    .carousel-track {
        width: calc(280px * 6 + 12px * 5);
        gap: 12px;
    }

    .carousel-item {
        flex: 0 0 280px;
        height: 450px;
    }

    .material-card {
        padding: 12px 6px 8px;
        gap: 10px;
    }

    .card-header {
        padding: 8px 15px 0;
    }

    .card-title {
        font-size: 18px;
        line-height: 1.3;
    }

    .card-content {
        padding: 0 12px 15px;
        gap: 6px;
    }

    .video-placeholder {
        height: 160px;
    }

    .video-description {
        font-size: 14px;
        padding: 8px;
    }

    .image-gallery img:first-child,
    .image-gallery img:not(:first-child) {
        height: 100px;
    }

    .featured-image {
        height: 120px;
    }

    .card-description p {
        font-size: 13px;
        line-height: 1.4em;
    }

    .carousel-controls {
        padding: 0 10px;
    }

    .carousel-btn {
        width: 35px;
        height: 35px;
    }

    .carousel-btn svg {
        width: 20px;
        height: 20px;
    }

    .expert-consultation {
        margin-top: 30px;
    }

    .expert-btn {
        height: 45px;

        span {
            font-size: 16px;
        }
    }
}

/* Cases Carousel Section */
.cases-section {
    position: relative;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)
}

.cases-content-container {
    position: relative;
    width: 1200px;
    height: 688px;
    z-index: 2;
}

.cases-section-inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
}

.cases-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cases-carousel-track {
    display: flex;
    align-items: center;
    gap: 0;
    width: calc(1200px * 3);
    /* 3 full-width items */
    height: 100%;
    transition: transform 0.5s ease-in-out;
}

.case-item {
    flex: 0 0 1200px;
    height: 100%;
    border-radius: 0;
    padding: 30px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.case-content {
    text-align: center;
    max-width: 800px;
    position: relative;
    z-index: 2;
}

.case-header {
    margin-bottom: 10px;
}

.case-category {
    font-size: 20px;
    font-weight: 800;
    color: #3d3d3d;
}

.case-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #333;
}

.title-main {
    display: block;
}

.case-description {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
    margin: 20px 0 30px;
}

.case-action {
    margin-bottom: 40px;
}

.case-btn {
    width: 700px;
    background: #fff;
    border: 1px solid #4a90e2;
    border-radius: 50px;
    padding: 15px 40px;
    font-size: 22px;
    font-weight: 500;
    color: #4a90e2;
    cursor: pointer;
    transition: all 0.3s ease;

    span {
        background-image: linear-gradient(90deg, var(--token-270e660b-3cdc-45ff-b4c0-3aba41912762, rgb(71, 82, 230)) 28.8024119682%, rgb(62, 128, 238) 50.4179481349%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

.case-image {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
}

.case-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
}

/* Carousel Controls */
.cases-nav-buttons {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    height: 648px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
}

.cases-btn {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    transition: background-color 0.3s ease;
    svg{
        color:#fff;
    }
}

.cases-btn:hover {
    background: rgba(0, 0, 0, 0.4);
}

.cases-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.cases-btn img {
    width: 40px;
    height: 40px;
}

/* Pagination Dots */
.cases-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 30px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.cases-pagination-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cases-pagination-btn:first-child {
    padding-left: 10px;
}

.cases-pagination-btn:last-child {
    padding-right: 10px;
}

.pagination-dot {
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 5px;
    transition: opacity 0.3s ease;
}

.cases-pagination-btn:not(.active) .pagination-dot {
    opacity: 0.5;
}

.cases-pagination-btn.active .pagination-dot {
    opacity: 1;
}

/* Responsive Design for Cases Section */
@media (max-width: 1200px) {
    .cases-content-container {
        width: 100%;
        max-width: 1000px;
        padding: 0 20px;
    }

    .cases-carousel-track {
        width: calc(1000px * 3);
    }

    .case-item {
        flex: 0 0 1000px;
        padding: 40px 60px;
    }

    .case-title {
        font-size: 36px;
    }

    .case-description {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .cases-section {
        height: 600px;
    }

    .cases-content-container {
        height: 588px;
        padding: 0 10px;
    }

    .cases-carousel-track {
        width: 100%;

        .title {
            font-size: 20px;
        }
    }

    .case-item {
        flex: 0 0 100%;
        box-sizing:border-box;
        padding: 30px 20px;
    }

    .case-title {
        font-size: 28px;
        margin-bottom: 20px;
    }

    .case-description {
        font-size: 14px;
        margin-bottom: 30px;
    }

    .case-btn {
        width: 327px;
        padding: 12px 30px;
        font-size: 14px;
    }

    .case-image {
        max-width: 300px;
    }

    .cases-nav-buttons {
        top: 15px;
        left: 15px;
        right: 15px;
        height: 558px;
    }

    .cases-btn {
        width: 35px;
        height: 35px;
    }

    .cases-btn img {
        width: 35px;
        height: 35px;
    }
}

@media (max-width: 480px) {

    .case-item {
        padding: 20px 15px;
    }

    .case-title {
        font-size: 24px;
    }

    .case-description {
        font-size: 13px;
    }

    .case-image {
        max-width: 250px;
    }
}

/* Specs Section */
.specs-section {
    width: 100%;
    padding: 32px 0;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.specs-container {
    width: 100%;
    max-width: 1440px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 43px;
}

/* Section Header */
.specs-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.specs-title-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 344px;
    height: 50.41px;
}

.specs-title {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-gradient {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 1.2222222222222223em;
    text-align: center;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.specs-subtitle-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 970px;
    height: 18px;
}

.specs-subtitle {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.2em;
    color: #333333;
}

/* Specifications Table */
.specs-table-container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    gap: 10px;
    width: 1176px;
    height: 420.34px;
    background: #ffffff;
}

.specs-table-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    height: 100%;
}

.specs-table-figure {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.specs-table {
    width: 1176px;
    height: 420px;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    border-collapse: collapse;
    background: #ffffff;
}

/* Table Header */
.table-header-row {
    height: 46px;
}

.table-header-cell {
    background: #F7F7F7;
    border-right: 1px solid #E8E8E8;
    padding: 10px;
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    color: #666666;
    text-align: left;
    vertical-align: center;
}

.table-header-cell:first-child {
    width: 282px;
}

.table-header-cell:nth-child(2) {
    width: 155px;
}

.table-header-cell:nth-child(3),
.table-header-cell:nth-child(4),
.table-header-cell:nth-child(5) {
    width: 244px;
}

.table-header-cell:last-child {
    border-right: none;
}

/* Table Rows */
.table-row {
    height: 47px;
    border-top: 1px solid #E8E8E8;
}

.table-cell-label,
.table-cell-unit,
.table-cell-data {
    padding: 11px 10px;
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.25em;
    color: #666666;
    text-align: left;
    vertical-align: center;
    border-right: 1px solid #E8E8E8;
}

.table-cell-label {
    width: 282px;
}

.table-cell-unit {
    width: 155px;
}

.table-cell-data {
    width: 244px;
}

.table-cell-data:last-child {
    border-right: none;
}

/* Contact Button */
.specs-contact-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 560px;
    height: 60px;
    background: #ffffff;
    border-radius: 100px;
}

.contact-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 470px;
    height: 31px;
}

.contact-button-content {
    width: 100%;
    height: 100%;
}

.contact-button-text {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.contact-button-text span {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.contact-link:hover .contact-button-text span {
    opacity: 0.8;
}

/* Responsive Design for Specs Section */
@media (max-width: 1200px) {
    .specs-container {
        max-width: 1000px;
        padding: 0 20px;
    }

    .specs-table-container {
        width: 100%;
        max-width: 960px;
    }

    .specs-table {
        width: 100%;
        font-size: 14px;
    }

    .table-header-cell,
    .table-cell-label,
    .table-cell-unit,
    .table-cell-data {
        font-size: 14px;
        padding: 8px;
    }

    .specs-subtitle-container {
        width: 100%;
        max-width: 800px;
    }
}

@media (max-width: 768px) {
    .specs-container {
        padding: 0 15px;
        gap: 30px;
    }

    .specs-title-container {
        width: 100%;
    }

    .title-gradient {
        font-size: 28px;
    }

    .specs-subtitle-container {
        width: 100%;
    }

    .specs-subtitle {
        font-size: 14px;
    }

    .specs-table-container {
        width: 100%;
        height: auto;
        overflow-x: auto;
    }

    .specs-table {
        min-width: 800px;
        font-size: 12px;
    }

    .table-header-cell,
    .table-cell-label,
    .table-cell-unit,
    .table-cell-data {
        font-size: 12px;
        padding: 6px;
    }

    .specs-contact-button {
        width: 100%;
        max-width: 400px;
        height: 50px;
    }

    .contact-button-text span {
        font-size: 18px;
    }
}


/* Core Benefits Section */
.core-benefits {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)
}

.benefits-header {
    text-align: center;
    margin-bottom: 60px;
}

.benefits-tagline {
    margin-bottom: 16px;

    p {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.33em;
        color: #3d3d3d;
        margin: 0;
    }
}

.benefits-title {
    h2 {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 36px;
        line-height: 1.17em;
        color: #333333;
        max-width: 1200px;
        margin: 0 auto;
    }
}

.benefits-content {
    display: flex;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    align-items: flex-start;
}

.benefits-slideshow {
    flex: 1;
    min-height: 400px;
    background: #F8F9FA;
    border-radius: 12px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.slideshow-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

/* Slideshow Track for horizontal scrolling */
.slideshow-track {
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.5s ease-in-out;
    border-radius: 12px;
}

.slide-item {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
}

.slideshow-controls {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
    pointer-events: none; // 让背景区域不响应点击
}

.nav-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    pointer-events: auto; // 让按钮可以点击
}

.nav-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #FFFFFF;

    &:hover:not(:disabled) {
        background: rgba(0, 0, 0, 0.3);
        transform: scale(1.1);
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        background: rgba(0, 0, 0, 0.3);
    }

    svg {
        width: 24px;
        height: 24px;
    }
}

.pagination-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    background: rgba(0, 0, 0, 0.4);
    padding: 8px 16px;
    border-radius: 20px;
    pointer-events: auto; // 让分页点可以点击
}

.dot-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    transition: all 0.3s ease;

    &:hover .dot {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.2);
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
    }

    &.active .dot {
        background: #FFFFFF;
    }
}

.benefits-features {
    flex: 1;
    display: flex;
    flex-direction: column;

    .expert-consultation {
        margin-top: 15px;
        justify-content: flex-start;
    }
}

.feature-card {
    padding: 12px 0;
    cursor: pointer;

    &:hover,
    &:first-child {
        .feature-header {
            margin-bottom: 16px;
            background-image: linear-gradient(90deg, var(--token-270e660b-3cdc-45ff-b4c0-3aba41912762, rgb(71, 82, 230)) 28.802411968247505%, rgb(62, 128, 238) 50.41794813486723%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%);
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }
}

.feature-content {
    .feature-header {
        margin-bottom: 8px;
        transition: all .3s;

        h3 {
            font-family: Inter, sans-serif;
            font-weight: 600;
            font-size: 28px;
            line-height: 1.2em;
            color: #333333;
            margin: 0;
        }
    }

    .feature-description {
        p {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5em;
            color: #666666;
            margin: 0;
        }
    }
}

@media (max-width: 480px) {
    .specs-container {
        gap: 25px;
    }
    .benefits-header{
        margin-bottom:20px;
    }

    .title-gradient {
        font-size: 20px;
    }

    .specs-subtitle {
        font-size: 13px;
    }

    .specs-table {
        min-width: 700px;
        font-size: 16px;
    }

    .table-header-cell,
    .table-cell-label,
    .table-cell-unit,
    .table-cell-data {
        font-size: 16px;
        padding: 5px;
    }

    .contact-button-text span {
        font-size: 16px;
    }
}


/* 响应式图片大小调整 */
@media (max-width: 480px) {
    .slide-item img {
        object-fit: contain;
        max-height: 250px;
    }

    .slideshow-controls {
        padding: 0 10px;
    }

    .nav-btn {
        width: 40px;
        height: 40px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    .pagination-dots {
        bottom: 15px;
        padding: 6px 12px;

        .dot {
            width: 6px;
            height: 6px;
        }
    }
}

@media (max-width: 768px) {
    .slide-item img {
        object-fit: contain;
        max-height: 300px;
    }

    .slideshow-controls {
        padding: 0 15px;
    }

    .nav-btn {
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    .pagination-dots {
        padding: 4px 8px;
        gap: 6px;
    }
}

@media (max-width: 1200px) {
    .slide-item img {
        max-height: 350px;
    }
}

/* Responsive Design for Core Benefits */
@media (max-width: 768px) {
    .core-benefits {
        padding: 40px 0;
    }

    .benefits-title h2 {
        font-size: 24px;
    }

    .benefits-content {
        flex-direction: column;
        gap: 40px;
        padding: 0 16px;
    }

    .benefits-slideshow {
        min-height: auto;
    }

    .feature-card {
        padding: 20px;
    }

    .feature-content .feature-header h3 {
        font-size: 18px;
    }

    .feature-content .feature-description p {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .benefits-tagline p {
        font-size: 16px;
    }

    .benefits-title h2 {
        font-size: 20px;
    }

    .nav-btn {
        width: 40px;
        height: 40px;

        img {
            width: 16px;
            height: 16px;
        }
    }
    .benefits-features{
        text-align:center;
    }
}

/* FAQ Section */
.faq-section {
    padding: 80px 0;
    background: radial-gradient(circle at 50% 50%, rgba(239, 235, 255, 1) 0%, rgba(240, 244, 255, 1) 65%, rgba(255, 255, 255, 1) 100%);
}

.faq-header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
        font-family: Inter, sans-serif;
        font-weight: 800;
        font-size: 36px;
        line-height: 1.22em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0 0 16px 0;
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 1.2em;
        color: #333333;
        margin: 0;
    }
}

.faq-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.faq-item {
    background: #FFFFFF;
    border-radius: 16px;
    border: 1px solid rgba(136, 136, 136, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
}

.faq-question {
    padding: 32px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 12px;
        left: 30px;
        right: 30px;
        height: 1px;
        background-color: rgb(221, 221, 221);
    }

    h2 {
        font-family: Inter, sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 1.18em;
        color: #000000;
        margin: 0;
    }
}



.faq-answer {
    padding: 0 32px 32px 32px;

    p {
        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.21em;
        color: #666666;
        margin: 0 0 16px 0;

        &:last-child {
            margin-bottom: 0;
        }
    }

    ul {
        margin: 16px 0;
        padding-left: 20px;

        li {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.21em;
            color: #666666;
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }

            strong {
                font-weight: 700;
                color: #666666;
            }
        }
    }

    strong {
        font-weight: 700;
        color: #666666;
    }
}

.faq-contact {
    text-align: center;
    margin-top: 60px;

    .contact-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 40px;
        background: #FFFFFF;
        border: none;
        border-radius: 100px;
        cursor: pointer;
        transition: all 0.3s ease;

        span {
            font-family: Inter, sans-serif;
            font-weight: 500;
            font-size: 22px;
            line-height: 1.18em;
            background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(71, 82, 230, 0.2);
        }
    }
}

/* Responsive Design for FAQ */
@media (max-width: 768px) {
    .faq-section {
        padding: 40px 0;
    }

    .faq-header {
        margin-bottom: 40px;

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 14px;
        }
    }

    .faq-container {
        padding: 0 16px;
        gap: 12px;
    }

    .faq-question {
        padding: 24px 20px;

        &::after {
            left: 20px;
            right: 20px;
            bottom: 8px;
        }

        h2 {
            font-size: 18px;
        }
    }

    .faq-answer {
        padding: 0 20px 24px 20px;

        p,
        ul li {
            font-size: 13px;
        }
    }

    .faq-contact {
        margin-top: 40px;

        .contact-btn {
            padding: 10px 32px;

            span {
                font-size: 18px;
            }
        }
    }
}

@media (max-width: 480px) {
    .faq-header h2 {
        font-size: 24px;
    }

    .faq-question {
        padding: 20px 16px;

        &::after {
            left: 16px;
            right: 16px;
            bottom: 6px;
        }

        h2 {
            font-size: 16px;
        }
    }

    .faq-answer {
        padding: 0 16px 20px 16px;

        p,
        ul li {
            font-size: 12px;
        }
    }

    .faq-contact .contact-btn {
        padding: 14px 24px;

        span {
            font-size: 16px;
        }
    }
}

/* Advanced Features Grid */
.advanced-features-grid {
    padding: 40px;
    background: radial-gradient(circle at 50% 50%, rgba(240, 244, 255, 1) 6%, rgba(240, 244, 255, 1) 18%, rgba(240, 244, 255, 1) 45%, rgba(251, 252, 255, 1) 100%, rgba(255, 255, 255, 1) 100%);
    border-radius: 24px;
}

.features-row {
    display: flex;
    gap: 47px;
    justify-content: center;
    margin-bottom: 48px;

    &:last-child {
        margin-bottom: 0;
    }
}

.feature-grid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 32px;
    padding: 24px;
    width: 360px;
    min-height: 200px;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    // &:hover {
    //     transform: translateY(-4px);
    //     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    // }
}

.feature-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 12px;
    }
}

.feature-info {
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.17em;
        min-height:58px;
        color: #333333;
        margin: 0;
        text-align: center;
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 300;
        font-size: 15px;
        line-height: 1.2em;
        color: #333333;
        margin: 0;
        text-align: center;
        max-width: 268px;
    }
}

/* Responsive Design for Advanced Features Grid */
@media (max-width: 1200px) {
    .features-row {
        gap: 30px;
    }

    .feature-grid-card {
        width: 280px;
    }
}

@media (max-width: 768px) {
    .advanced-features-grid {
        padding: 20px;
    }

    .features-row {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-bottom: 32px;
    }

    .feature-grid-card {
        width: 100%;
        max-width: 320px;
        min-height: 180px;
        padding: 20px;
    }

    .feature-info h3 {
        font-size: 20px;
    }

    .feature-info p {
        font-size: 14px;
        font-weight:400;
    }
}

@media (max-width: 480px) {
    .advanced-features-grid {
        padding: 16px;
    }

    .feature-grid-card {
        padding: 32px 16px;
        min-height: 160px;
        border:1px solid #2121212b;
    }

    .feature-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 12px;

        img {
            width: 60px;
            height: 60px;
        }
    }

    .feature-info h3 {
        font-size: 18px;
    }

    .feature-info p {
        font-size: 13px;
        line-height: 1.3em;
    }
}

/* Certifications & Standards Section */
.certifications-section {
    padding: 40px 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(240, 244, 255, 1) 41%, rgba(255, 255, 255, 1) 100%);
}

.certifications-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.certifications-header {
    text-align: center;

    .section-subtitle {
        font-family: Inter, sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.2em;
        color: #333333;
        margin: 0;
    }
}

.certifications-title {
    text-align: center;
    max-width: 1236px;

    h2 {
        font-family: Inter, sans-serif;
        font-weight: 800;
        font-size: 36px;
        line-height: 1.22em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
    }
}

.certification-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0 36px;
    margin: 32px 0;
}

.certification-card {
    background: #FFFFFF;
    border-radius: 32px;
    width: 360px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 0 0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
}

.cert-icon {
    width: 300px;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
}

.cert-info {
    width: 300px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.17em;
        color: #333333;
        text-align: center;
        margin: 0;
    }
}

.certifications-description {
    max-width: 1099px;
    text-align: center;
    margin: 16px 0;

    p {
        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.17em;
        color: #545353;
        margin: 0;
    }
}

.expertise-title {
    text-align: center;
    margin: 32px 0 16px 0;

    h3 {
        font-family: Inter, sans-serif;
        font-weight: 800;
        font-size: 36px;
        line-height: 1.22em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
    }
}

.statistics-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 47px;
    padding: 0 36px;
    margin: 32px 0;
}

.stat-card {
    background: #FFFFFF;
    border-radius: 32px;
    width: 360px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 0 0;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
}

.stat-icon {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}

.stat-content {
    width: 300px;
    height: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.stat-number {
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.19em;
        color: #333333;
        text-align: center;
        margin: 0;
    }
}

.stat-label {
    width: 268px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: Inter, sans-serif;
        font-weight: 300;
        font-size: 22px;
        line-height: 1.18em;
        color: #333333;
        text-align: center;
        margin: 0;
    }
}

.application-description {
    max-width: 1099px;
    text-align: center;
    margin: 16px 0;

    p {
        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.17em;
        color: #545353;
        margin: 0;
    }
}

.industries-description {
    max-width: 1099px;
    text-align: center;
    margin: 16px 0;

    p {
        font-family: Inter, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.17em;
        color: #545353;
        margin: 0;
    }
}

/* Responsive Design for Certifications */
@media (max-width: 1024px) {
    .certification-cards {
        flex-direction: column;
        gap: 24px;
        padding: 0 20px;
    }

    .statistics-cards {
        flex-direction: column;
        gap: 24px;
        padding: 0 20px;
    }
}

@media (max-width: 768px) {
    .certifications-section {
        padding: 30px 0;
    }

    .certifications-container {
        padding: 0 16px;
        gap: 12px;
    }

    .certifications-header .section-subtitle {
        font-size: 16px;
    }

    .certifications-title h2 {
        font-size: 20px;
    }

    .expertise-title h3 {
        font-size: 28px;
    }

    .certification-card {
        width: 100%;
        max-width: 320px;
        height: 240px;
    }

    .cert-icon {
        width: 260px;
        height: 155px;
    }

    .cert-info {
        width: 260px;
        height: 45px;

        p {
            font-size: 20px;
        }
    }

    .stat-card {
        width: 100%;
        max-width: 320px;
        height: 260px;
    }

    .stat-content {
        width: 260px;
        height: 134px;
    }

    .stat-number p {
        font-size: 28px;
    }

    .stat-label {
        width: 240px;
        height: 48px;

        p {
            font-size: 18px;
        }
    }

    .certifications-description,
    .application-description,
    .industries-description {
        max-width: 100%;

        p {
            font-size: 16px;
        }
    }
}

@media (max-width: 480px) {
    .certifications-title h2 {
        font-size: 20px;
    }

    .expertise-title h3 {
        font-size: 24px;
    }

    .certification-card {
        height: 220px;
    }

    .cert-info p {
        font-size: 18px;
    }

    .stat-card {
        height: 240px;
    }

    .stat-number p {
        font-size: 24px;
    }

    .stat-label p {
        font-size: 16px;
    }

    .certifications-description,
    .application-description,
    .industries-description {
        p {
            font-size: 14px;
        }
    }
}

/* Complete Production Solutions Section */
.solutions-section {
    padding: 40px 0;
    background: #F0F4FF;
}

.solutions-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
}

.solutions-header {
    text-align: center;
    max-width: 1200px;

    h2 {
        font-family: Inter, sans-serif;
        font-weight: 800;
        font-size: 36px;
        line-height: 1.22em;
        background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
    }
}

.solutions-description {
    text-align: center;
    max-width: 970px;

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 1.2em;
        color: #333333;
        margin: 0;
    }
}

.solutions-carousel {
    width: 100%;
    max-width: 1193px;
    height: 620px;
    position: relative;
    overflow: hidden;
    padding: 10px;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 90px;
    z-index: 5;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.visible {
        opacity: 1;
    }

    &.left {
        left: 0;
        background: linear-gradient(to right, #F0F4FF 0%, rgba(240, 244, 255, 0) 100%);
    }

    &.right {
        right: 0;
        background: linear-gradient(to left, #F0F4FF 0%, rgba(240, 244, 255, 0) 100%);
    }
}

.solutions-track {
    display: flex;
    align-items: center;
    gap: 32px;
    height: 600px;
    transition: transform 0.5s ease;
    width: calc(410px * 3 + 32px * 2);
    /* 3 cards + 2 gaps */
}

.solution-card {
    width: 410px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    overflow: hidden;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.solution-image {
    width: 410px;
    height: 230px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.solution-content {
    padding: 30px 0 0;
    height: 370px;
    display: flex;
    border-radius: 24px;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    gap: 24px;
}

.solution-title {
    width: 352px;
    height: 60px;
    display: flex;
    align-items: center;

    h3 {
        font-family: Inter, sans-serif;
        font-weight: 800;
        font-size: 24px;
        line-height: 1.17em;
        color: #333333;
        margin: 0;
    }
}

.solution-description {
    width: 352px;
    display: flex;
    align-items: flex-start;

    p {
        font-family: Inter, sans-serif;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.17em;
        color: #333333;
        margin: 0;
    }
}

.solution-cta {
    width: 352px;
    height: 36px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgb(71, 82, 230) 29%, rgb(36, 196, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    p {
        margin: 0;

        em {
            font-family: Inter, sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 1em;
            color: #000000;
            font-style: normal;
        }
    }
}

.solutions-navigation {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}

.solutions-dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(0, -50%);
    display: flex;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.2);
}

.solution-dot {

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
        background: #FFFFFF;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
}

.custom-solution-button {
    margin-top: 20px;

    .custom-solution-btn {
        width: 260px;
        height: 60px;
        background: #FFFFFF;
        border: none;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;

        span {
            font-family: Inter, sans-serif;
            font-weight: 500;
            font-size: 22px;
            line-height: 1.18em;
            background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(71, 82, 230, 0.2);
        }
    }
}

/* Responsive Design for Solutions */
@media (max-width: 1024px) {
    .solutions-carousel {
        max-width: 100%;
        height: auto;
        padding: 10px 0;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        /* iOS平滑滚动 */
        scrollbar-width: thin;
        /* Firefox滚动条样式 */

        /* 自定义滚动条样式 */
        &::-webkit-scrollbar {
            height: 6px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 3px;

            &:hover {
                background: rgba(0, 0, 0, 0.5);
            }
        }
    }

    .solutions-track {
        flex-direction: row;
        /* 保持横向布局 */
        height: auto;
        width: auto;
        /* 让宽度自适应内容 */
        gap: 20px;
        padding: 0 20px;
        /* 添加左右padding */
        min-width: min-content;
        /* 确保容器足够宽 */
    }

    .solution-card {
        width: 320px;
        /* 固定宽度，适合移动端 */
        height: auto;
        flex-shrink: 0;
        /* 防止卡片被压缩 */
        margin: 0;
    }

    .solution-image {
        width: 100%;
        height: 180px;
        /* 调整图片高度适合移动端 */
    }

    .solution-content {
        padding: 20px;
        height: auto;
        gap: 16px;
    }

    .solution-title,
    .solution-description,
    .solution-cta {
        width: 100%;
    }

    .solution-title h3 {
        font-size: 20px;
        line-height: 1.2;
    }

    .solution-description p {
        font-size: 14px;
        line-height: 1.4;
    }

    .solution-cta p em {
        font-size: 14px;
    }

    /* 隐藏梯度遮罩，因为使用原生滚动 */
    .gradient-overlay {
        display: none;
    }

    .solutions-navigation {
        display: none;
        position: static;
        margin-top: 20px;
        justify-content: center;
        gap: 20px;
    }


}

@media (max-width: 768px) {
    .solutions-section {
        padding: 30px 0;
    }

    .solutions-container {
        padding: 0 16px;
        gap: 20px;
    }

    .expertise-title {
        margin: 16px 0 8px 0;
    }

    .expertise-title h3,
    .solutions-header h2 {
        font-size: 20px;
    }

    .solutions-description p {
        font-size: 14px;
    }

    .solutions-carousel {
        padding: 10px 0;
        margin: 0 -16px;
        /* 扩展到屏幕边缘 */
    }

    .solutions-track {
        padding: 0 16px;
        /* 恢复内边距 */
        gap: 16px;
    }

    .solution-card {
        width: 280px;
        /* 更适合小屏幕的宽度 */
        height: auto;
    }

    .solution-image {
        width: 100%;
        height: 160px;
        /* 小屏幕进一步减小高度 */
    }

    .solution-content {
        padding: 16px;
        height: auto;
        gap: 12px;
    }

    .solution-title,
    .solution-description,
    .solution-cta {
        width: 100%;
    }

    .solution-title h3 {
        font-size: 18px;
        line-height: 1.3;
    }

    .solution-description p {
        font-size: 14px;
        line-height: 1.4;
    }

    .solution-cta p em {
        font-size: 14px;
    }

    .custom-solution-button .custom-solution-btn {
        width: 220px;
        height: 50px;

        span {
            font-size: 18px;
        }
    }
}

@media (max-width: 480px) {
    .solutions-header h2 {
        font-size: 20px;
    }

    .solution-title h3 {
        font-size: 18px;
    }

    .solution-description p {
        font-size: 14px;
    }

    .solution-cta p em {
        font-size: 14px;
    }

    .custom-solution-button .custom-solution-btn {
        width: 200px;
        height: 45px;

        span {
            font-size: 16px;
        }
    }
}

/* Contact and About Section */
.contact-about-section {
    background: #FFFFFF;
    padding: 40px 0;
}

.contact-about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 32px;
}

.header-content h2 {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 1.22;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 24px 0;
}

.header-description p {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.17;
    color: #333333;
    margin: 0;
}

.contact-cards {
    display: flex;
    gap: 24px;
    justify-content: center;
}

.contact-card,
.about-card {
    width: 576px;
    background: #F0F4FF;
    border-radius: 24px;
    padding: 20px;
}
.contact-card{
    padding-top: 35px;
}

.about-card {
    background: #EFEBFF;
}

.card-content {
    // display: flex;
    // align-items: center;
    // flex-direction: row;
    // gap: 24px;
    // height: 167px;
    img{
        width:100%;
    }
}

.about-card .card-content {
    // gap: 8px;
    // height: 156px;
}

.card-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card-title h3 {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
    color: #333333;
    margin: 0;
}

.about-card .card-title h3 {
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-description p {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    color: #333333;
    margin: 0;
}

.contact-btn,
.about-btn {
    background: #FFFFFF;
    border: none;
    border-radius: 100px;
    width: 200px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #358df3;
}

.contact-btn span,
.about-btn span {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.18;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.about-btn{
    position:absolute;
    bottom:10px;
    left:50%;
    transform: translate(-50%, 0);
}

.card-image {
    width: 207px;
    height: 148px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.about-card .card-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about-card .card-image {
    margin-top:20px;
}

.about-btn {
    margin-top: 4px;
}

/* Related Reading Section */
.related-reading-section {
    background: #FFFFFF;
    padding: 22px 0;
}

.related-reading-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.reading-header {
    text-align: center;
    margin-bottom: 22px;
}

.reading-title h2 {
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 36px;
    line-height: 1.22;
    background: linear-gradient(90deg, rgba(71, 82, 230, 1) 29%, rgba(62, 128, 238, 1) 50%, rgba(36, 196, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 12px 0;
}

.reading-subtitle h3 {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #333333;
    margin: 0 0 12px 0;
}

.reading-description p {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.17;
    color: #333333;
    margin: 0;
}

.reading-carousel {
    position: relative;
    width: 1200px;
    height: 171px;
    overflow: hidden;
    margin: 0 auto;
}

.reading-carousel-container {
    display: flex;
    gap: 32px;
    transition: transform 0.3s ease;
    height: 151px;
    padding: 10px;
}

.reading-item {
    width: 576px;
    flex-shrink: 0;
}

.reading-link {
    display: block;
    width: 100%;
    height: 151px;
    text-decoration: none;
}

.reading-card {
    background: #F0F4FF;
    border-radius: 24px;
    height: 100%;
    display: flex;
    align-items: center;
}

.reading-content {
    width: 479px;
    margin: 0 auto;
}

.reading-content p {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 23px;
    line-height: 1.22;
    font-style: italic;
    margin: 0;
    background:linear-gradient(90deg, rgb(71, 82, 230) 29%, rgb(62, 128, 238) 50%, rgb(36, 196, 255) 100%);
    background-clip:text;
    -webkit-text-fill-color: transparent;
}

.reading-navigation {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}

.reading-prev-btn,
.reading-next-btn {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    pointer-events: auto;
    transition: all 0.3s ease;
}

.reading-prev-btn:hover,
.reading-next-btn:hover {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.reading-prev-btn.hidden,
.reading-next-btn.hidden {
    opacity: 0;
    pointer-events: none;
}

/* Responsive Design for Contact and Reading Sections */
@media (max-width: 1024px) {
    .contact-cards {
        flex-direction: column;
        align-items: center;

        .contact-card,
        .about-card {
            width: 330px;

            .card-content {
                height: auto;
            }
        }
    }

    .reading-carousel {
        width: 100%;
        max-width: 576px;
        height: auto;

        .reading-carousel-container {
            height: auto;
            flex-direction: column;
        }
    }

    .reading-carousel-container {
        gap: 16px;
    }

    .reading-item {
        width: 100%;
    }
}

@media (max-width: 768px) {

    .contact-about-section,
    .related-reading-section {
        padding: 30px 0;
    }

    .header-content h2,
    .reading-title h2 {
        font-size: 20px;
    }

    .reading-subtitle {
        h3 {
            font-size: 16px;
        }
    }

    .reading-description p {
        font-size: 14px;
        color: #666;
        font-weight: normal;
    }

    .card-content {
        // flex-direction: column;
        height: auto;
        // gap: 16px;
    }

    .card-image {
        width: 100%;
        height: 200px;
    }

    .reading-carousel {
        .reading-carousel-container {
            .reading-card {
                padding: 30px 40px;
                text-align: center;
            }

            .reading-link {
                height: auto;

                p {
                    font-size: 14px;
                }
            }

        }
    }
    .header-description p{
        font-size:14px;
    }
}

@media (max-width: 480px) {

    .header-content h2,
    .reading-title h2 {
        font-size: 20px;
    }

    .contact-card,
    .about-card {
        width: 100%;
    }
}

/* Other Machines or Tools Navigation Section */
.other-machines-section {
    width: 100%;
    height: 400px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.other-machines-container {
    width: 1920px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.other-machines-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 1484px;
    height: 74px;
    padding-left: 160px;
}

.section-title-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    width: 100%;
    height: 36px;
}

.other-machines-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
    text-align: left;
    color: #000000;
    margin: 0;
    width: 355px;
    height: 36px;
    display: flex;
    align-items: center;
}

.section-subtitle-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    width: 100%;
    height: 14px;
}

.other-machines-subtitle {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1em;
    text-align: left;
    color: #000000;
    margin: 0;
    height: 14px;
    display: flex;
    align-items: center;
    position: relative;
    top: -2px;
}

.machines-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 1137px;
    height: 98px;
}

.nav-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    width: 557px;
    height: 100%;
}

.nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    position: relative;
}

.nav-icon-container {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-icon {
    width: 100%;
    height: 100%;
    background: #E0E0E0;
    /* 占位背景色 */
    border-radius: 4px;
}

.nav-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 56px;
}

.prev-link .nav-content {
    width: 290px;
}

.next-link .nav-content {
    width: 249px;
}

.nav-text {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    text-align: left;
    color: #000000;
    margin: 0;
    height: 26.41px;
    display: flex;
    align-items: center;
}

.prev-link .nav-text {
    width: 288px;
    height: 26px;
}

.next-link .nav-text {
    width: 247px;
    height: 26px;
}

.nav-after {
    position: absolute;
    top: 0;
    left: 0;
    width: 556px;
    height: 98px;
    pointer-events: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.machines-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 620px;
        height: 98px;
        text-decoration: none;
        color: inherit;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        transition: all 0.3s ease;
        padding: 20px;
        flex-direction: row;
    }
}



/* Responsive Design for Other Machines Section */
@media (max-width: 1920px) {
    .other-machines-container {
        width: 100%;
        max-width: 1400px;
        padding: 0 40px;
    }

    .other-machines-header {
        width: 100%;
        max-width: 1137px;
        padding-left: 0;
    }

    .machines-navigation {
        width: 100%;
        max-width: 1137px;
    }
}

@media (max-width: 1200px) {
    .other-machines-section {
        height: 350px;
    }

    .other-machines-container {
        height: 350px;
        gap: 24px;
    }

    .other-machines-header {
        height: auto;
        gap: 16px;
    }

    .other-machines-title {
        font-size: 26px;
        width: auto;
        height: auto;
    }

    .other-machines-subtitle {
        width: auto;
        height: auto;
        top: 0;
    }

    .machines-navigation {
        flex-direction: column;
        height: auto;
        gap: 16px;
    }

    .nav-link-container {
        width: 100%;
        max-width: 500px;
        height: 80px;
    }

    .nav-after {
        width: 100%;
        height: 80px;
    }
}

@media (max-width: 768px) {
    .other-machines-section {
        height: auto;
        padding: 20px 0;
        text-align: center;

        .section-title-container {
            align-items: center;
        }

        .machines-navigation {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            width: 100%;
            .nav-link-container{
                height:auto;
            }
            .nav-link {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 620px;
                height: 60px;
                text-decoration: none;
                color: inherit;
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                transition: all 0.3s ease;
                padding: 0;
                flex-direction: row;
                .nav-content,
                .nav-text{
                    width:auto;
                }
            }
        }
    }

    .other-machines-container {
        height: auto;
        gap: 20px;
        padding: 0 20px;
    }

    .other-machines-title {
        font-size: 20px;
        text-align: center;
    }

    .section-subtitle-container{
        height:auto;
    }
    .other-machines-subtitle {
        margin-bottom:10px;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
    }

    .nav-text {
        font-size: 18px;
        text-align: center;
    }

    .nav-after {
        height: 70px;
    }
}
</style>