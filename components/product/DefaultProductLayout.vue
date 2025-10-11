<template>
    <div class="default-product-layout">
        <!-- Hero Section with Background -->
        <div class="hero-section">
            <!-- Background Images -->
            <div class="hero-background">
                <div class="bg-left">
                    <!-- <img src="/images/product/hero-bg-left.webp" alt="Hero Background Left" /> -->
                </div>
                <div class="bg-right">
                    <!-- <img src="/images/product/hero-bg-right.webp" alt="Hero Background Right" /> -->
                </div>
                <!-- Gradient Overlay -->
                <div class="gradient-overlay"></div>
            </div>

            <!-- Hero Content -->
            <div class="hero-content">
                <div class="container">
                    <div class="breadcrumb-container">
                        <div class="breadcrumb-wrapper">
                            <div class="breadcrumb-link">
                                <div class="breadcrumb-text">
                                    <div class="text-container">
                                        <NuxtLink to="/"><span class="breadcrumb-home">Home</span></NuxtLink>
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
                                                <NuxtLink to="/Products">
                                                    <span class="breadcrumb-products">Products</span>
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
                                        <p>
                                            <a href="/Products/wire-saw-machine" target="_blank">Wire Saw Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/circle-saw-machine" target="_blank">Circle Saw
                                                Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/drilling-and-engraving-machine" target="_blank">Drilling
                                                and Engraving Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/grinding-and-polishing-machine" target="_blank">Grinding
                                                and Polishing Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/mining-and-quarry-machine" target="_blank">Mining and
                                                Quarry Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/profiling-machine" target="_blank">Profiling Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/other-machine" target="_blank">Other Machine</a>
                                        </p>
                                        <p>
                                            <a href="/Products/diamond-tools" target="_blank">Diamond Tools</a>
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
                                        <span> {{ props.slug }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-title-section">
                        <h1 class="product-title">
                            DINOSAW Diamond Wire Saw Cutting Machine
                        </h1>
                        <h2 class="product-model">
                            YXSJ-2500/3000/3500-16pro
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
                                    <p class="description-text">
                                        DINOSAW Diamond wire saw cutting machine performs straight,
                                        curved, and custom-shaped cutting all, with precision ±1mm and
                                        speeds of 1.8-2.0㎡/h (for marble), increasing production efficiency by
                                        up to 100% compared to traditional cutting methods.
                                        <br><br>
                                        It can effectively cut marble, granite, concrete, metal, quartz glass,
                                        refractory bricks, graphite and other hard materials, suited for creating
                                        tombstones, curved slabs, fireplaces and bathtubs, columns and
                                        curbstones.
                                    </p>
                                </div>

                            </div>

                            <div class="product-image">
                                <NuxtImg src="https://framerusercontent.com/images/OLBWm7sLNft6mCi7TuWDReNvmY.webp?width=1973&height=1516" alt="DINOSAW Diamond Wire Saw Cutting Machine" />
                            </div>

                            <!-- Action Buttons -->
                            <div class="action-buttons">
                                <button class="btn-primary">
                                    <span>Get A Quote</span>
                                </button>
                                <button class="btn-whatsapp">
                                    <div class="btn-content">
                                        <div class="whatsapp-icon">
                                            <NuxtImg src="https://framerusercontent.com/images/Gvfk53Mm3Aro3nRYf1sD677a4.png?width=100&height=100" />
                                        </div>
                                        <span>WhatsApp</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <!-- Right Content - Product Image -->
                        <div class="hero-right">
                            <div class="product-image">
                                <NuxtImg src="https://framerusercontent.com/images/OLBWm7sLNft6mCi7TuWDReNvmY.webp?width=1973&height=1516" alt="DINOSAW Diamond Wire Saw Cutting Machine" />
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
                                    <p class="nav-link-text">Compatible Materials & Products</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('cases-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">Cases</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('specs-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">Specs</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('core-benefits')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">Core Benefits</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('faq-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">FAQs</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('certifications-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">Certification</p>
                                </div>
                            </a>
                        </div>

                        <div class="nav-item">
                            <a class="nav-link" @click="scrollToSection('solutions-section')">
                                <div class="nav-link-content">
                                    <p class="nav-link-text">Solutions</p>
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
                    <h2 class="section-title">Compatible Materials & Products</h2>
                    <p class="section-subtitle">Wire Saw Machine Specifications customizable upon request</p>
                </div>

                <!-- Materials Carousel -->
                <div class="materials-carousel">
                    <div class="carousel-container">
                        <div class="carousel-track" ref="carouselTrack">
                            <!-- Item 1: Product Demo -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">▶ Product Demo</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="demo-video">
                                            <div class="video-placeholder">
                                                <div class="play-button">
                                                    <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                                                        <rect width="68" height="48" rx="8" fill="white" />
                                                        <path d="M27 14L41 24L27 34V14Z" fill="rgba(33, 33, 33, 0.8)" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="video-description">DINOSAW CNC wire saw cutting machine Video</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 2: Granite Tombstones -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">Granite ❯ Tombstones</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="image-gallery">
                                            <!-- <img src="/images/materials/granite-tombstone-1.webp" alt="granite tombstone cutting with DINOSAW wire saw machine" />
                                            <img src="/images/materials/granite-tombstone-2.webp" alt="DINOSAW CNC wire saw for granite tombstone cutting" />
                                            <img src="/images/materials/granite-tombstone-3.webp" alt="Granite hradstone cutting with CNC wire saw machine" />
                                            <img src="/images/materials/granite-tombstone-4.webp" alt="DINOSAW cnc diamond wire saw cutting machine" />
                                            <img src="/images/materials/granite-tombstone-5.webp" alt="DINOSAW diamond wire saw cutting machine for granite" /> -->
                                        </div>
                                        <div class="card-description">
                                            <p>Granite's exceptional durability and timeless elegance make it the
                                                premier choice for memorial stonework, demanding precision cutting
                                                technology that preserves both aesthetic appeal and structural
                                                integrity.</p>
                                            <p>The DINOSAW CNC diamond wire saw cutting machine excels in granite
                                                tombstone fabrication through its advanced multi-axis control system.
                                                The diamond-embedded wire creates clean, precise cuts with minimal
                                                material waste while maintaining consistent pressure through
                                                servo-controlled tension systems.</p>
                                            <p>Stone fabricators benefit from reduced processing time, higher material
                                                yield, and enhanced precision that meets the exacting standards of
                                                memorial artistry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 3: Curved Slabs -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">Granite & Marble ❯ Curved Slabs</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="image-gallery">
                                            <!-- <img src="/images/materials/curved-slab-1.webp" alt="Granite curved slab cutting wire saw machine" />
                                            <img src="/images/materials/curved-slab-2.webp" alt="DINOSAW CNC wire saw cutting stone curved slabs" />
                                            <img src="/images/materials/curved-slab-3.webp" alt="DINOSAW cnc wire saw machine cutting marble slabs" /> -->
                                        </div>
                                        <div class="card-description">
                                            <p>Granite and marble's enduring popularity in luxury interior and exterior
                                                applications demands innovative cutting solutions for creating curved
                                                slabs that maintain the material's natural beauty while achieving the
                                                architectural precision required for modern curved surfaces and radius
                                                elements.</p>
                                            <p>The DINOSAW CNC diamond wire saw cutting machine excels in curved slab
                                                fabrication through its advanced 4-axis control system and proprietary
                                                curve-tracking technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 4: Stone Columns -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">Natural Stone ❯ Columns & Cylinders</h3>
                                    </div>
                                    <div class="card-content">
                                        <!-- <img src="/images/materials/stone-columns.webp" alt="Natural stone columns cutting" class="featured-image" /> -->
                                        <div class="card-description">
                                            <p>Natural stone columns and cylindrical elements represent some of the most
                                                challenging and prestigious applications in architectural stone
                                                fabrication, requiring exceptional precision to achieve the perfect
                                                symmetry and surface consistency demanded in classical and contemporary
                                                architectural designs.</p>
                                            <p>The DINOSAW CNC diamond wire saw cutting machine transforms column and
                                                cylinder production through its specialized rotational cutting
                                                capabilities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 5: FRP Pipe Cutting -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">FRP ❯ Pipe Cutting</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="image-gallery">
                                            <!-- <img src="/images/materials/frp-pipe-1.webp" alt="Fiberglass reinforced plastic pipes cutting DINOSAW wire saw machine" />
                                            <img src="/images/materials/frp-pipe-2.webp" alt="DINOSAW CNC diamond wire saw machine for FRP pipes cutting" /> -->
                                        </div>
                                        <div class="card-description">
                                            <p>Fiber Reinforced Polymer (FRP) pipes have revolutionized industrial fluid
                                                transport systems with their exceptional corrosion resistance,
                                                lightweight properties, and extended service life, creating demand for
                                                precision cutting solutions that preserve the material's structural
                                                integrity and specialized layered composition.</p>
                                            <p>The DINOSAW CNC diamond wire saw cutting machine excels in FRP pipe
                                                processing through its vibration-minimizing cutting action and
                                                specialized material handling system.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 6: Refractory Materials -->
                            <div class="carousel-item">
                                <div class="material-card">
                                    <div class="card-header">
                                        <h3 class="card-title">Refractory Materials ❯ Block Cutting</h3>
                                    </div>
                                    <div class="card-content">
                                        <div class="image-gallery">
                                            <!-- <img src="/images/materials/refractory-block-1.webp" alt="Refractory materials block cutting" />
                                            <img src="/images/materials/refractory-block-2.webp" alt="Refractory block cutting machine" />
                                            <img src="/images/materials/refractory-block-3.webp" alt="Industrial refractory cutting" /> -->
                                        </div>
                                        <div class="card-description">
                                            <p>Refractory materials are the backbone of high-temperature industrial
                                                applications, from steel furnaces to ceramic kilns. As industries demand
                                                more precise, custom-shaped refractory components for enhanced thermal
                                                efficiency, traditional cutting methods struggle with the extreme
                                                hardness and specialized requirements of these materials.</p>
                                            <p>DINOSAW Diamond Wire Saw Machine revolutionizes refractory component
                                                manufacturing through advanced multi-axis cutting technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <span>Consult DINOSAW Material Expert → </span>
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
                                        <span class="case-category">Architectural Projects</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">Precision Facade Carving for</span>
                                    </h3>
                                    <p class="case-description">
                                        Dubai firm needed arabesque patterns on limestone facades. 2000×3000mm worktable
                                        with automatic tool changer maintained 0.05mm variance throughout 4-month
                                        production, ensuring geometric consistency across the entire building exterior.
                                    </p>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>Scale Your Architectural Carving →</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <!-- <img src="/images/cases/limestone-carving-samples.jpg" alt="Limestone facade carving samples" /> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Case Item 2: Industrial Projects -->
                            <div class="case-item">
                                <div class="case-content">
                                    <h2 class="case-header">
                                        <span class="case-category">Industrial Projects</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">High-Volume Stone Processing for</span>
                                    </h3>
                                    <p class="case-description">
                                        Large-scale manufacturing facility required consistent stone processing
                                        capabilities. Our CNC wire saw machines delivered precision cutting with minimal
                                        waste, increasing production efficiency by 150% while maintaining quality
                                        standards.
                                    </p>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>Optimize Your Production →</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <!-- <img src="/images/cases/industrial-stone-processing.jpg" alt="Industrial stone processing" /> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Case Item 3: Custom Solutions -->
                            <div class="case-item">
                                <div class="case-content">
                                    <h2 class="case-header">
                                        <span class="case-category">Custom Solutions</span>
                                    </h2>
                                    <h3 class="title">
                                        <span class="title-main">Specialized Cutting Solutions for</span>
                                    </h3>
                                    <p class="case-description">
                                        Unique architectural requirements demanded custom cutting solutions. Our
                                        engineering team developed specialized tooling and programming to achieve
                                        complex curved cuts with precision tolerances of ±0.1mm.
                                    </p>
                                    <div class="case-action">
                                        <button class="case-btn">
                                            <span>Explore Custom Solutions →</span>
                                        </button>
                                    </div>
                                    <div class="case-image">
                                        <!-- <img src="/images/cases/custom-stone-cutting.jpg" alt="Custom stone cutting solutions" /> -->
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
                            <span class="title-gradient"> Specs and options</span>
                        </h2>
                    </div>
                    <div class="specs-subtitle-container">
                        <p class="specs-subtitle">
                            <span>Specifications customizable upon request.</span>
                        </p>
                    </div>
                </div>

                <!-- Specifications Table -->
                <div class="specs-table-container">
                    <div class="specs-table-wrapper">
                        <figure class="specs-table-figure">
                            <table class="specs-table">
                                <tbody>
                                    <!-- Header Row -->
                                    <tr class="table-header-row">
                                        <th class="table-header-cell">Model</th>
                                        <th class="table-header-cell">Unit</th>
                                        <th class="table-header-cell">YXSJ - 2500 - 16pro</th>
                                        <th class="table-header-cell">YXSJ - 3000 - 16pro</th>
                                        <th class="table-header-cell">YXSJ - 3500 - 16pro</th>
                                    </tr>

                                    <!-- Data Rows -->
                                    <tr class="table-row">
                                        <td class="table-cell-label">Max Working dimensions</td>
                                        <td class="table-cell-unit">m</td>
                                        <td class="table-cell-data">2.5x1.5</td>
                                        <td class="table-cell-data">3.0x1.5</td>
                                        <td class="table-cell-data">3.5x1.5</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Worktable size</td>
                                        <td class="table-cell-unit">m</td>
                                        <td class="table-cell-data">2.5x1.4</td>
                                        <td class="table-cell-data">2.5x1.4</td>
                                        <td class="table-cell-data">2.5x1.4</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Wire length</td>
                                        <td class="table-cell-unit">m</td>
                                        <td class="table-cell-data">14.75</td>
                                        <td class="table-cell-data">15.75</td>
                                        <td class="table-cell-data">16.75</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Wire diameter</td>
                                        <td class="table-cell-unit">mm</td>
                                        <td class="table-cell-data">7.6 - 11</td>
                                        <td class="table-cell-data">7.6 - 11</td>
                                        <td class="table-cell-data">7.6 - 11</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Main motor power</td>
                                        <td class="table-cell-unit">kw</td>
                                        <td class="table-cell-data">15</td>
                                        <td class="table-cell-data">15</td>
                                        <td class="table-cell-data">15</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Water consumption</td>
                                        <td class="table-cell-unit">m³/h</td>
                                        <td class="table-cell-data">3</td>
                                        <td class="table-cell-data">3</td>
                                        <td class="table-cell-data">3</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Overall dimensions</td>
                                        <td class="table-cell-unit">m</td>
                                        <td class="table-cell-data">6.3x7.9x4.0</td>
                                        <td class="table-cell-data">6.3x8.4x4.0</td>
                                        <td class="table-cell-data">6.3x9.0x4.0</td>
                                    </tr>

                                    <tr class="table-row">
                                        <td class="table-cell-label">Approximate weight</td>
                                        <td class="table-cell-unit">t</td>
                                        <td class="table-cell-data">6.8</td>
                                        <td class="table-cell-data">7.6</td>
                                        <td class="table-cell-data">8.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </div>
                </div>

                <!-- Contact Button -->
                <div class="expert-consultation">
                    <button class="expert-btn">
                        <span>Contact DINOSAW technical team for details →</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Core Benefits Section -->
        <div id="core-benefits" class="core-benefits">
            <div class="benefits-header">
                <div class="benefits-tagline">
                    <p>Advanced engineering meets practical design excellence.</p>
                </div>
                <div class="benefits-title title">
                    <h2>
                        <span>Precision. Power. Performance.</span>
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
                                <img :src="slide.image" :alt="slide.alt" />
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
                                <h3>User-Friendly Operation</h3>
                            </div>
                            <div class="feature-description">
                                <p>Built-in pattern library and CAD import capability simplify workflow.</p>
                            </div>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-content">
                            <div class="feature-header">
                                <h3>35m/min High-Speed Engraving</h3>
                            </div>
                            <div class="feature-description">
                                <p>7.5kW stone-specific spindle with 40m/min rapid travel speed delivers
                                    industrial-grade power</p>
                            </div>
                        </div>
                    </div>

                    <div class="feature-card">
                        <div class="feature-content">
                            <div class="feature-header">
                                <h3>±0.05mm Ultra-High Precision</h3>
                            </div>
                            <div class="feature-description">
                                <p> Full servo system control ensures exceptional accuracy</p>
                            </div>
                        </div>
                    </div>

                    <div class="expert-consultation">
                        <button class="expert-btn">
                            <span>Inquiry for Details →</span>
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
                        <!-- <img src="/api/placeholder/80/80" alt="Energy Savings" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>20% Energy Savings</h3>
                        <p>High-efficiency permanent magnet synchronous motor</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <!-- <img src="/api/placeholder/80/80" alt="Remote Operation" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>Remote Operation</h3>
                        <p>OTA technology for remote updates and maintenance support</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <!-- <img src="/api/placeholder/80/80" alt="Versatile Cutting" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>Versatile Cutting</h3>
                        <p>Multi-axis control enables straight, curved, and custom-shaped cuts</p>
                    </div>
                </div>
            </div>

            <div class="features-row">
                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <!-- <img src="/api/placeholder/80/80" alt="Robust Construction" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>Robust Construction</h3>
                        <p>Cast iron columns with Siemens and NSK components ensure durability</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <!-- <img src="/api/placeholder/80/80" alt="Safety Protection" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>Comprehensive Safety Protection</h3>
                        <p>Software alerts + hardware safeguards with protective covers and limit switches</p>
                    </div>
                </div>

                <div class="feature-grid-card">
                    <div class="feature-icon">
                        <!-- <img src="/api/placeholder/80/80" alt="Reduced Maintenance" /> -->
                    </div>
                    <div class="feature-info">
                        <h3>Reduced Maintenance</h3>
                        <p>Dust/water-resistant design with automatic lubrication system</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- FAQ Section -->
        <div id="faq-section" class="faq-section">
            <div class="faq-header">
                <h2>FAQs</h2>
                <p>Common Questions About DINOSAW Diamond Wire Saw Cutting Machines</p>
            </div>

            <div class="faq-container">
                <div class="faq-item">
                    <div class="faq-question">
                        <h2>What is a CNC diamond wire saw cutting machine and how does it work?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>A CNC diamond wire saw cutting machine is a precision stone cutting tool that uses a thin,
                            flexible wire embedded with industrial diamond particles to cut through hard materials. The
                            wire is guided by computer numerical control (CNC) systems along predetermined paths with
                            multiple axis movements. As the diamond wire moves at high speed (typically 20-40 m/s), it
                            gradually abrades through materials while water cooling systems maintain optimal cutting
                            conditions and remove cutting debris.</p>
                        <p>The machine operates using a continuous loop of diamond wire that runs around a series of
                            pulleys and guide wheels, with one end connected to a motor drive system. The CNC control
                            system precisely positions the workpiece relative to the wire or moves the wire itself
                            through computer-programmed cutting paths. This technology allows for cutting complex shapes
                            with exceptional precision (±1mm) without the heat damage, vibration issues, or large kerf
                            width associated with traditional blade cutting methods.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>What materials can be cut with a CNC diamond wire saw machine?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>CNC diamond wire saw machines are exceptionally versatile and can cut through a wide range of
                            hard materials including:</p>
                        <ul>
                            <li>Natural stones: granite, marble, limestone, sandstone, travertine, onyx, quartzite</li>
                            <li>Engineered stones: quartz surfaces, sintered stones, terrazzo, concrete products</li>
                            <li>Industrial materials: graphite, ceramics, glass, reinforced concrete, tungsten carbide
                            </li>
                            <li>Advanced materials: semiconductor materials, technical ceramics, carbon fiber composites
                            </li>
                        </ul>
                        <p>The diamond wire cutting technology is particularly effective for materials that are brittle,
                            have varying densities, or are prone to thermal damage when cut using conventional methods.
                            The water-cooled cutting process prevents overheating and maintains material integrity even
                            in thermally sensitive materials. Additionally, the low-stress cutting action makes this
                            technology ideal for materials with internal tensions that might crack under the
                            higher-force impacts of blade cutting.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>Does the CNC wire saw cutting machine require programming or CAD experience?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>No, the diamond wire saw stone cutting machine is designed with user-friendliness as a
                            priority:</p>
                        <ul>
                            <li>The intuitive touchscreen interface uses simple, graphical controls that operators can
                                master quickly, unlike traditional CNC machines requiring complex programming knowledge
                            </li>
                            <li>No CAD programming is required for standard cutting operations</li>
                            <li>Most operators can complete basic setup within 5 minutes after initial training, and a
                                single operator can efficiently manage multiple machines simultaneously</li>
                            <li>For complex shapes, our optional pattern library allows quick selection from
                                pre-configured cutting paths</li>
                        </ul>
                        <p>We provide comprehensive training for operators of all experience levels as part of our
                            implementation package.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>How does the CNC wire saw control system work, and what level of expertise is required to
                            operate it?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>The DINOSAW CNC diamond wire saw cutting machine features an intuitive control system
                            designed to balance sophisticated functionality with user-friendly operation. Key aspects of
                            the control system include:</p>
                        <ul>
                            <li><strong>User Interface:</strong> Touch-screen interface with visual programming options
                                and multi-language support</li>
                            <li><strong>Programming Methods:</strong> Multiple options including direct drawing
                                on-screen, importing CAD files, or using preset shape libraries</li>
                            <li><strong>Multi-Axis Control:</strong> Complex 3d cutting capabilities</li>
                            <li><strong>Adaptive Cutting:</strong> Intelligent systems that automatically adjust wire
                                speed, tension, and feed rate based on material properties</li>
                            <li><strong>Remote Operation:</strong> Wireless control options allowing operators to
                                monitor cutting from a safe distance</li>
                        </ul>
                        <p>Operator expertise requirements are intentionally minimized through our user-centric design
                            approach. New operators typically require only 1-2 days of training to become proficient
                            with basic operations, compared to weeks or months with traditional G-code based CNC
                            systems. The interface eliminates the need for complex programming knowledge, using
                            intuitive visual tools instead of manual coding.</p>
                        <p>Our remote assistance capability enables direct support from DINOSAW technicians who can
                            access the system (with permission) to troubleshoot issues or optimize settings without
                            requiring on-site expertise.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>What safety features are incorporated into modern CNC diamond wire saw machines?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>Safety is a paramount concern in the design of DINOSAW CNC diamond wire saw cutting machines.
                            Our systems incorporate multiple layers of protection to ensure operator safety and prevent
                            equipment damage:</p>
                        <p><strong>Physical Barriers:</strong> Enclosed cutting area with transparent impact-resistant
                            shields and safety interlocks that prevent operation when guards are open</p>
                        <p><strong>Emergency Systems:</strong> Multiple emergency stop buttons positioned at strategic
                            locations and foot pedal emergency stops for hands-free activation</p>
                        <p><strong>Wire Break Detection:</strong> Instant shutdown system that detects wire breakage or
                            excessive tension within milliseconds</p>
                        <p><strong>Overload Protection:</strong> Automatic systems that prevent motor overload,
                            hydraulic pressure excess, or mechanical strain</p>
                        <p><strong>Intelligent Monitoring:</strong> Continuous monitoring of critical parameters with
                            automatic shutdown if unsafe conditions develop</p>
                        <p><strong>Remote Operation:</strong> Wireless control options allowing operation from a safe
                            distance during high-risk cutting operations</p>
                        <p><strong>Safety Certification:</strong> Compliance with international safety standards
                            including CE, ISO, and regional safety requirements</p>
                        <p>Beyond physical safety features, our machines include operational safeguards such as
                            two-stage confirmation for critical operations, password-protected access to advanced
                            settings, and visual/audible warnings before motion begins. The control system maintains
                            detailed safety logs and requires acknowledgment of safety protocols during startup.</p>
                        <p>We also provide comprehensive safety training with each machine, including detailed manuals,
                            safety demonstration videos, and in-person instruction on proper operating procedures.
                            Regular safety updates are made available through our service network to address emerging
                            safety considerations as technology evolves.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>What types of projects and industries benefit most from CNC diamond wire saw machine?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>CNC diamond wire saw technology offers exceptional benefits across various industries and
                            project types where precision cutting of hard materials is required:</p>
                        <p><strong>Stone Fabrication:</strong></p>
                        <ul>
                            <li>Kitchen and bathroom countertop manufacturers requiring complex shapes and cutouts</li>
                            <li>Custom furniture producers creating stone tables, desks, and decorative elements</li>
                            <li>Architectural element fabricators producing columns, balusters, and ornamental features
                            </li>
                        </ul>
                        <p><strong>Monument Industry:</strong></p>
                        <ul>
                            <li>Memorial and tombstone manufacturers requiring shaped monuments and custom designs</li>
                            <li>Public art and sculpture studios working with stone and composite materials</li>
                            <li>Historical restoration specialists recreating period architectural elements</li>
                        </ul>
                        <p><strong>Construction and Renovation:</strong></p>
                        <ul>
                            <li>Specialty contractors handling precision modification of existing concrete structures
                            </li>
                            <li>Historic building restoration requiring minimal vibration cutting techniques</li>
                            <li>Custom home builders creating bespoke architectural features</li>
                        </ul>
                        <p><strong>Industrial Applications:</strong></p>
                        <ul>
                            <li>Graphite electrode manufacturers</li>
                            <li>Advanced ceramics producers requiring precision cutting</li>
                            <li>Semiconductor and electronics industry cutting specialized materials</li>
                        </ul>
                        <p>Projects that particularly benefit from CNC diamond wire saw technology include those
                            requiring complex curved shapes, thick material cutting, preservation of material integrity,
                            and applications where minimal material waste is economically important. The technology is
                            especially valuable for high-value materials where precision cutting directly impacts the
                            final product value and quality.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h2>What future developments are expected in CNC diamond wire saw technology?</h2>
                    </div>
                    <div class="faq-answer">
                        <p>CNC diamond wire saw technology continues to evolve rapidly, with several key innovations on
                            the horizon that will further enhance capabilities and performance. DINOSAW remains at the
                            forefront of these developments:</p>
                        <ul>
                            <li><strong>Advanced Material Science:</strong> Next-generation diamond wires with
                                nano-structured diamond particles and enhanced matrix compositions will increase cutting
                                speed by up to 30% while extending wire life</li>
                            <li><strong>Artificial Intelligence Integration:</strong> Machine learning algorithms are
                                being developed to dynamically optimize cutting parameters in real-time based on
                                material variations, cutting patterns, and environmental conditions</li>
                            <li><strong>Automation and Robotics:</strong> Enhanced integration with robotic material
                                handling systems for fully automated production lines capable of 24/7 operation with
                                minimal human intervention</li>
                            <li><strong>Digital Twin Technology:</strong> Creating virtual replicas of physical cutting
                                operations to simulate and optimize processes before actual cutting begins, reducing
                                waste and improving outcomes</li>
                            <li><strong>Ultra-thin Wire Technology:</strong> Development of sub-1mm diamond wires that
                                reduce kerf width by 30%, maximizing material yield for precious stone applications</li>
                            <li><strong>Augmented Reality Interfaces:</strong> AR systems that overlay cutting paths,
                                material information, and operational guidance directly onto the work surface for
                                enhanced operator precision</li>
                            <li><strong>Sustainable Innovations:</strong> Zero-waste water systems and energy-neutral
                                operation through renewable power integration and advanced energy recovery</li>
                        </ul>
                        <p>DINOSAW's research and development program actively pursues these technological frontiers
                            while maintaining our focus on practical, reliable solutions that deliver measurable
                            benefits to our customers. Our user-centric innovation approach ensures that advanced
                            technologies are implemented in ways that enhance productivity and quality without
                            compromising ease of use or maintenance.</p>
                        <p>As the industry evolves, we anticipate CNC diamond wire saw technology will continue
                            expanding into new materials and applications, including advanced composites, engineered
                            building materials, and specialized industrial components where precision cutting of hard
                            materials is essential.</p>
                    </div>
                </div>
            </div>
            <div class="expert-consultation">
                <button class="expert-btn">
                    <span>Need more assistance? Click to contact DINOSAW →</span>
                </button>
            </div>
        </div>

        <!-- Certifications & Standards Section -->
        <div id="certifications-section" class="certifications-section">
            <div class="certifications-container">
                <!-- Section Header -->
                <div class="certifications-header">
                    <p class="section-subtitle">Certifications & Standards</p>
                </div>

                <!-- Main Title -->
                <div class="certifications-title">
                    <h2>Global Leader in Industrial Machinery & Diamond Tools Manufacturing</h2>
                </div>

                <!-- Certification Cards -->
                <div class="certification-cards">
                    <div class="certification-card">
                        <div class="cert-icon">
                            <!-- <img src="/api/placeholder/127/179" alt="CE Certification" /> -->
                        </div>
                        <div class="cert-info">
                            <p>CE Certification</p>
                        </div>
                    </div>

                    <div class="certification-card">
                        <div class="cert-icon">
                            <!-- <img src="/api/placeholder/274/416" alt="Tech Patents" /> -->
                        </div>
                        <div class="cert-info">
                            <p>100+ Tech Patents</p>
                        </div>
                    </div>

                    <div class="certification-card">
                        <div class="cert-icon">
                            <!-- <img src="/api/placeholder/127/179" alt="ISO Certification" /> -->
                        </div>
                        <div class="cert-info">
                            <p>ISO 9001:2015</p>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="certifications-description">
                    <p>DINOSAW product lines fully comply with international engineering standards, passing rigorous
                        third-party quality certifications to ensure exceptional performance and durability for all
                        industrial equipment operating in high-load environments.</p>
                </div>

                <!-- Expertise Section -->
                <div class="expertise-title">
                    <h3>Expertise & Applications</h3>
                </div>

                <!-- Statistics Cards -->
                <div class="statistics-cards">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <!-- <img src="/api/placeholder/120/120" alt="Countries Served" /> -->
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">
                                <p>75+</p>
                            </div>
                            <div class="stat-label">
                                <p>Countries Served<br>Worldwide</p>
                            </div>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">
                            <!-- <img src="/api/placeholder/120/120" alt="Industry Expertise" /> -->
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">
                                <p>20+</p>
                            </div>
                            <div class="stat-label">
                                <p>Industry machinery<br>expertise</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Application Description -->
                <div class="application-description">
                    <p>DINOSAW delivers lifecycle quality traceability and technical support for machinery equipment and
                        diamond tools, covering cutting, drilling, engraving, polishing, and processing requirements for
                        precision machining across industries.</p>
                </div>

                <!-- Industries Description -->
                <div class="industries-description">
                    <p>Our products serve traditional industries (mining, stone processing, building materials),
                        high-precision manufacturing (quartz glass, semiconductor), advanced materials (graphite, carbon
                        fiber composites), and specialized applications (nuclear decommissioning, railway construction
                        machinery).</p>
                </div>
            </div>
        </div>

        <!-- Complete Production Solutions Section -->
        <div id="solutions-section" class="solutions-section">
            <div class="solutions-container">
                <!-- Section Header -->
                <div class="solutions-header">
                    <h2>Complete Production Solutions & Equipments</h2>
                </div>

                <!-- Section Description -->
                <div class="solutions-description">
                    <p>Choose equipment combinations for your product needs to establish efficient automated production
                        lines and maximize profitability.</p>
                </div>

                <!-- Solutions Carousel -->
                <div class="solutions-carousel">
                    <!-- Gradient Overlays -->
                    <div class="gradient-overlay left" :class="{ visible: currentSolution > 0 }"></div>
                    <div class="gradient-overlay right" :class="{ visible: currentSolution < 2 }"></div>

                    <div class="solutions-track" ref="solutionsCarouselTrack">
                        <!-- Solution Card 1 -->
                        <div class="solution-card">
                            <div class="solution-image">
                                <!-- <img src="/api/placeholder/410/230" alt="Stone CNC Engraving Machine" /> -->
                            </div>
                            <div class="solution-content">
                                <div class="solution-title">
                                    <h3>Stone CNC Engraving Machine</h3>
                                </div>
                                <div class="solution-description">
                                    <p>Create the perfect memorial processing workflow. The DINOSAW wire saw efficiently
                                        cuts tombstone outlines while our compatible engraving machine precisely carves
                                        text, patterns, and images on the stone surface for complete monument
                                        production.</p>
                                </div>
                                <div class="solution-cta">
                                    <p><em>Enhance your memorial production line →</em></p>
                                </div>
                            </div>
                        </div>

                        <!-- Solution Card 2 -->
                        <div class="solution-card">
                            <div class="solution-image">
                                <!-- <img src="/api/placeholder/410/230" alt="Automatic Polishing Machine" /> -->
                            </div>
                            <div class="solution-content">
                                <div class="solution-title">
                                    <h3>Automatic Polishing Machine</h3>
                                </div>
                                <div class="solution-description">
                                    <p>Optimize your stone finishing process. After the DINOSAW wire saw creates precise
                                        cuts for curb stones and tombstones, our polishing machine delivers perfect
                                        surface finishing in a single setup, handling materials of varying heights and
                                        sizes simultaneously.</p>
                                </div>
                                <div class="solution-cta">
                                    <p><em>Streamline your stone finishing workflow →</em></p>
                                </div>
                            </div>
                        </div>

                        <!-- Solution Card 3 -->
                        <div class="solution-card">
                            <div class="solution-image">
                                <!-- <img src="/api/placeholder/410/230" alt="Quarry Wire Saw Machine" /> -->
                            </div>
                            <div class="solution-content">
                                <div class="solution-title">
                                    <h3>Quarry Wire Saw Machine</h3>
                                </div>
                                <div class="solution-description">
                                    <p>Optimize your quarry mining workflow. The High-Efficiency DINOSAW Quarry Wire Saw
                                        features a PLC automatic control system, precisely cutting stone materials of
                                        various hardness at speeds up to 130% of comparable products, ensuring maximum
                                        production efficiency.</p>
                                </div>
                                <div class="solution-cta">
                                    <p><em>Improve Your Quarry Mining Efficiency →</em></p>
                                </div>
                            </div>
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
                        <span>Get a Custom Solution</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Contact and About Section -->
        <div class="contact-about-section">
            <div class="contact-about-container">
                <div class="section-header">
                    <div class="header-content">
                        <h2>Ready to upgrade your cutting solution?</h2>
                    </div>
                    <div class="header-description">
                        <p>Use DINOSAW Diamond Wire Saw Cutting Machine to transform production efficiency and
                            precision.</p>
                    </div>
                </div>

                <div class="contact-cards">
                    <div class="contact-card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-title">
                                    <h3>Contact DINOSAW</h3>
                                </div>
                                <div class="card-description">
                                    <p>Connect with DINOSAW experts to find the perfect processing solution for your
                                        specific material and production needs.</p>
                                </div>
                                <button class="contact-btn">
                                    <span>Get A Quote</span>
                                </button>
                            </div>
                            <div class="card-image">
                                <!-- <img src="/images/contact-image.jpg" alt="Contact DINOSAW" /> -->
                                <div class="placeholder-image">Contact Image</div>
                            </div>
                        </div>
                    </div>

                    <div class="about-card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-title">
                                    <h3>DINOSAW: Trustworthy Wire Saw Machine Manufacturer</h3>
                                </div>
                                <div class="card-description">
                                    <p>Discover how DINOSAW can accelerate your projects. Our tailored product line,
                                        cutting-edge R&D, robust manufacturing, end-to-end service, global support, and
                                        industry certifications are at your service.</p>
                                </div>
                            </div>
                            <div class="card-image">
                                <!-- <img src="/images/about-image.jpg" alt="About DINOSAW" /> -->
                                <button class="about-btn">
                                    <span>About Dinosaw</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Reading Section -->
        <div class="related-reading-section">
            <div class="related-reading-container">
                <div class="reading-header">
                    <div class="reading-title">
                        <h2>Related Reading</h2>
                    </div>
                    <div class="reading-subtitle">
                        <h3>Learn more about Dinosaw Wire Saw</h3>
                    </div>
                    <div class="reading-description">
                        <p>Get specifications, case studies, applications, technical information, and latest
                            developments for DINOSAW industry machines.</p>
                    </div>
                </div>

                <div class="reading-carousel">
                    <div class="reading-carousel-container"
                        :style="{ transform: `translateX(-${currentReadingSlide * (100 / visibleReadingSlides)}%)` }">
                        <div class="reading-item" v-for="(article, index) in readingArticles" :key="index">
                            <a href="#" class="reading-link">
                                <div class="reading-card">
                                    <div class="reading-content">
                                        <p>{{ article.title }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="reading-navigation">
                        <button class="reading-prev-btn" @click="prevReading"
                            :class="{ 'hidden': currentReadingSlide === 0 }">
                            ‹
                        </button>
                        <button class="reading-next-btn" @click="nextReading"
                            :class="{ 'hidden': currentReadingSlide >= readingArticles.length - visibleReadingSlides }">
                            ›
                        </button>
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
                        <h2 class="other-machines-title">Other Machines or Tools</h2>
                    </div>
                    <div class="section-subtitle-container">
                        <p class="other-machines-subtitle">Are you looking for more new information machines or tools?
                        </p>
                    </div>
                </div>

                <!-- Navigation Links -->
                <div class="machines-navigation">
                    <div class="nav-link-container">
                        <a href="#" class="nav-link prev-link">
                            <div class="nav-icon-container">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M20 24L12 16L20 8" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="nav-content">
                                <p class="nav-text">Previous Machines or Tools</p>
                            </div>
                            <div class="nav-after"></div>
                        </a>
                    </div>

                    <div class="nav-link-container">
                        <a href="#" class="nav-link next-link">
                            <div class="nav-content">
                                <p class="nav-text">Next Machines or Tools</p>
                            </div>
                            <div class="nav-icon-container">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M12 8L20 16L12 24" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </a>
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
    }
});

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

const benefitsSlides = ref([
    {
        image: "https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp",
        alt: "Precision cutting with DINOSAW wire saw machine"
    },
    {
        image: "https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp",
        alt: "High-speed operation demonstration"
    },
    {
        image: "https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp",
        alt: "User-friendly control interface"
    }
])

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
        if (containerWidth > 1200) {
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
    stopAutoPlay()
    stopBenefitsAutoPlay()
})

// 在模板中可以直接使用 props.slug
console.log('Current slug in DefaultProductLayout:', props.slug);
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
    padding: 0 20px 32px;
    display: flex;
    flex-direction: column;
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
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
    width: 300px;
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
    background: #FFFFFF;
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
    padding: 40px 0 0;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    flex: 1;
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

.about-card {
    background: #EFEBFF;
}

.card-content {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 24px;
    height: 167px;
}

.about-card .card-content {
    gap: 8px;
    height: 156px;
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
    line-height: 1;
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

.about-card .card-image img {
    height: 92px;
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
        flex-direction: column;
        height: auto;
        gap: 16px;
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
    font-weight: 300;
    font-size: 14px;
    line-height: 1em;
    text-align: left;
    color: #000000;
    margin: 0;
    width: 395px;
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
        max-width: 1200px;
        padding-left: 0;
    }

    .machines-navigation {
        width: 100%;
        max-width: 1000px;
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