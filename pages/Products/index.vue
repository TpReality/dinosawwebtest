<template>
    <div class="main">
        <!-- 导航栏 -->
        <DinosawHeader />

        <!-- 面包屑导航 - 对应Figma节点 19:13863 -->
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                            </div>
                        </div>
                    </div>
                   
                     <div class="breadcrumb-outer">
                        <div class="bg">
                            <p>
                                <a href="/Products/wire-saw-machine" target="_blank">Wire Saw Machine</a>
                            </p>
                            <p>
                                <a href="/Products/circle-saw-machine" target="_blank">Circle Saw Machine</a>
                            </p>
                            <p>
                                <a href="/Products/drilling-and-engraving-machine" target="_blank">Drilling and Engraving Machine</a>
                            </p>
                            <p>
                                <a href="/Products/grinding-and-polishing-machine" target="_blank">Grinding and Polishing Machine</a>
                            </p>
                            <p>
                                <a href="/Products/mining-and-quarry-machine" target="_blank">Mining and Quarry Machine</a>
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
            </div>
        </div>

        <!-- 第一个容器 - 对应Figma节点 19:11701 -->
        <div class="first-container">
            <!-- 轮播图容器 - 对应 19:11702 -->
            <div class="carousel-container">
                <div class="carousel-section">
                    <div class="carousel-list">
                        <Swiper :slides-per-view="1" :space-between="20" :modules="modules" :navigation="{
                            nextEl: '.carousel-button-next',
                            prevEl: '.carousel-button-prev',
                        }">
                            <SwiperSlide v-for="(group, i) in imageList" :key="i">
                                <div class="carousel-group" v-for="image in group" :key="image.id">
                                    <NuxtImg :src="image.url" />
                                    <p class="text">{{ image.text }}</p>
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

        <h1 class="title">
            Affordable Industrial Machine For Sale:Which One Should I Buy
        </h1>

        <!-- CNC Wire Saw Machine 部分 - 对应Figma 19:11796 -->
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
                                                        <p class="materials-title">Machinable Materials</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 材料网格展示 -->
                                    <div class="materials-grid">
                                        <div class="materials-row">
                                            <!-- Granite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Granite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image granite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Marble -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Marble</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image marble-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Luxurystone -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">luxurystone</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image luxurystone-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Concrete -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">concrete</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image concrete-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Carbon Fiber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">carbon fiber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image carbon-fiber-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Resin -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">resin</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image resin-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Graphite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">graphite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image graphite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Rubber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">rubber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image rubber-image"></div>
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
                                        <h2 class="main-title">CNC Wire Saw Machine</h2>
                                    </div>
                                </div>
                            </div>

                            <!-- 描述文本部分 -->
                            <div class="description-section">
                                <div class="description-frame">
                                    <div class="description-paragraph">
                                        <p class="description-text">
                                            CNC Diamond Wire Saw Machine is a CNC industrial machine that uses a diamond
                                            wire saw as its cutting tool. It includes diamond single-wire saw cutting
                                            machines and diamond multi-wire saw cutting machines, designed for
                                            high-precision cutting and processing of various hard materials such as
                                            stone, concrete, metals, and graphite. Its structure typically consists of a
                                            main frame, guide wheels, drive system, tensioning device, and CNC operating
                                            system. This equipment is suitable for scenarios such as quarrying, stone
                                            profile cutting, metal cutting, building demolition, and bridge cutting. Its
                                            advantages include high cutting precision, efficiency, wide application
                                            range, and economic benefits. Its features enable complex curve and
                                            irregular shape cutting while minimizing damage to the materials being cut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 轮播图背景 -->
                        <div class="carousel-background">
                            <div class="carousel-background-container">
                                <div class="carousel-background-list">
                                    <Swiper :slides-per-view="1" :space-between="20" :modules="modules"
                                        :navigation="{
                                            nextEl: '.background-button-prev',
                                            prevEl: '.background-button-next',
                                        }">
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
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
                                        <div class="background-button-prev">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div class="background-button-next">
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                DINOSAW Diamond Wire Saw Cutting Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Thin Multi Wire Saw Machines for Natural Stone Block
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Diamond Wire Saw Cutting Machine for Kerbstone
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                CNC Vertical Wire Saw Machine for High-Precision Cutting
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                                                        <p class="materials-title">Machinable Materials</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 材料网格展示 -->
                                    <div class="materials-grid">
                                        <div class="materials-row">
                                            <!-- Granite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Granite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image granite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Marble -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Marble</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image marble-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Luxurystone -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">luxurystone</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image luxurystone-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Concrete -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">concrete</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image concrete-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Carbon Fiber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">carbon fiber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image carbon-fiber-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Resin -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">resin</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image resin-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Graphite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">graphite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image graphite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Rubber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">rubber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image rubber-image"></div>
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
                                        <h2 class="main-title">Circle Saw Machine</h2>
                                    </div>
                                </div>
                            </div>

                            <!-- 描述文本部分 -->
                            <div class="description-section">
                                <div class="description-frame">
                                    <div class="description-paragraph">
                                        <p class="description-text">
                                           A drilling machine is an industrial machine that uses diamond drill bits to create cylindrical holes in materials through rotational cutting or extrusion. Its structure typically includes a main frame, diamond drill bit, transmission system, feed mechanism, and control system. Drilling machines are widely used in stone processing, construction, metal manufacturing, and woodworking, suitable for drilling operations on natural stone (such as granite and marble), concrete, metals (such as steel, alloys, aluminum profiles), and non-metallic materials (such as wood, acrylic, fiberglass). Their advantages include efficiently and precisely completing deep and large-diameter hole processing, with features of high durability for hard materials, easy operation, and a wide range of applications. An engraving machine is an industrial machine that uses diamond engraving tools to engrave, cut, or mark the surface of materials through computer control. Its structure typically consists of a main frame, diamond engraving tools, transmission system, worktable, and CNC system. Engraving machines are suitable for the fine processing of various materials such as stone, metal, wood, glass, and plastic, and are widely used in tombstone engraving, craft making, advertising signage, and furniture decoration. Their advantages include achieving high-precision complex patterns and text engraving, with features of high automation, durable tools, and a wide range of applications, meeting the needs of both personalized and mass production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 轮播图背景 -->
                        <div class="carousel-background">
                            <div class="carousel-background-container">
                                <div class="carousel-background-list">
                                    <Swiper :slides-per-view="1" :space-between="20" :modules="modules"
                                        :navigation="{
                                            nextEl: '.background-button-prev',
                                            prevEl: '.background-button-next',
                                        }">
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
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
                                        <div class="background-button-prev">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div class="background-button-next">
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                5-Axis CNC Bridge Saw
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                4+1 Axis Bridge Saw Cutting Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Heavy-Duty Stone Block Cutting Machine for Natural Stone
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Manual Industrial Stone Cutting Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                                                        <p class="materials-title">Machinable Materials</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 材料网格展示 -->
                                    <div class="materials-grid">
                                        <div class="materials-row">
                                            <!-- Granite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Granite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image granite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Marble -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">Marble</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image marble-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Luxurystone -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">luxurystone</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image luxurystone-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Concrete -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">concrete</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image concrete-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Carbon Fiber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">carbon fiber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image carbon-fiber-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Resin -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">resin</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image resin-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Graphite -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">graphite</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image graphite-image"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Rubber -->
                                            <div class="material-item">
                                                <div class="material-category">
                                                    <div class="material-text-container">
                                                        <div class="material-title-wrapper">
                                                            <p class="material-title">rubber</p>
                                                        </div>
                                                    </div>
                                                    <div class="material-image-mask">
                                                        <div class="material-image-container">
                                                            <div class="material-image rubber-image"></div>
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
                                        <h2 class="main-title">Drilling and Engraving Machine</h2>
                                    </div>
                                </div>
                            </div>

                            <!-- 描述文本部分 -->
                            <div class="description-section">
                                <div class="description-frame">
                                    <div class="description-paragraph">
                                        <p class="description-text">
                                            A Grinding and Polishing Machine is an industrial machine for surface grinding and polishing. It comes in manual and automatic types, with some machines designed without a worktable for flexibility. Suitable for stone, glass, and metal materials, it polishes tombstones and countertops in the stone industry, finishes bathroom glass in the glass industry, and removes rust from steel in the metal industry. Its advantages include efficient defect removal, improved finish, and wide applicability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 轮播图背景 -->
                        <div class="carousel-background">
                            <div class="carousel-background-container">
                                <div class="carousel-background-list">
                                    <Swiper :slides-per-view="1" :space-between="20" :modules="modules"
                                        :navigation="{
                                            nextEl: '.background-button-prev',
                                            prevEl: '.background-button-next',
                                        }">
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
                                                            </NuxtImg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="carousel-item">
                                                <div class="carousel-item-container">
                                                    <div class="carousel-item-wrapper">
                                                        <div class="carousel-item-image">
                                                            <NuxtImg
                                                                src="https://framerusercontent.com/images/kvNvHRNc8kxakAIjleLF6GhJW4Q.webp?width=1950&height=1300">
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
                                        <div class="background-button-prev">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div class="background-button-next">
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                CNC Stone Engraving Machine for Precision Carving
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Automatic Stone Drilling Machines for Stone Core Drill
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                <span class="product-title-line">Diamond Wire Saw</span>
                                                <span class="product-title-line">Cutting Machine for</span>
                                                <span class="product-title-line">Kerbstone</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                <span class="product-title-line">CNC Vertical Wire Saw</span>
                                                <span class="product-title-line">Machine for High-</span>
                                                <span class="product-title-line">Precision Cutting</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grinding and Polishing Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">Grinding and Polishing Machine</h2>
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                CNC ATC Grinding & Polishing Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Bridge Single Head Automatic Stone Polisher
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Manual Stone Polishing Machine for Granite & Marble
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Multi-head Automatic Marble & Granite Polishing Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Profiling Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">Profiling Machine</h2>
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Integrated CNC stone profiling machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Column Cap & Base Profiling Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                CNC Stone Lathe Machine for Baluster Column Railings
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Vertical 4-Workpiece Baluster Profiling Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mining and Quarry Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">Mining and Quarry Machine</h2>
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Quarry wire saw machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Portable trimming wire saw machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Double blade cutter stone quarrying machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Sandstone Cutting Machine for Quarrying & Block Cutting
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Industry Machine 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">Other Industry Machine</h2>
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                5 Axis CNC Waterjet Cutting Machine for Sale
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                7-Axis CNC Stone Carving Robotic Arm Machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Automatic Curbstone Cutting Machine | Kerbs Production Line
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Continuous Calibrating machine
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Diamond tools 部分 -->
        <div class="wire-saw-machine-section">
            <div class="wire-saw-container">
                <div class="wire-saw-frame">
                    <div class="content-container">
                        <div class="main-content">
                            <div class="content-wrapper">
                                <div class="main-title-section">
                                    <div class="main-title-frame">
                                        <h2 class="main-title">Diamond tools</h2>
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
                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon dinosaw-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Diamond Polishing Pads for Granite, Marble & Concrete
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon multi-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Diamond Segment For Granite
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon kerbstone-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Diamond Saw Blade For Granite
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-card-container">
                            <div class="product-info-section">
                                <div class="product-link">
                                    <div class="product-icon-container">
                                        <div class="product-icon-wrapper">
                                            <div class="product-icon vertical-wire-icon"></div>
                                        </div>
                                    </div>
                                    <div class="product-title-section">
                                        <div class="product-title-frame">
                                            <h3 class="product-title">
                                                Diamond wire saw for marble
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Discover More 按钮 -->
            <div class="discover-more-section">
                <div class="discover-more-button">
                    <div class="discover-more-container">
                        <div class="discover-more-wrapper">
                            <span class="discover-more-text">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- What Is An Industry Machine 部分 - 对应Figma 19:13123 -->
        <div class="industry-machine-section">
            <div class="industry-machine-container">
                <!-- 标题部分 -->
                <div class="industry-machine-title-section">
                    <div class="industry-machine-title-frame">
                        <h2 class="industry-machine-title">What Is An Industry Machine?</h2>
                    </div>
                </div>

                <!-- 内容部分 -->
                <div class="industry-machine-content">
                    <!-- 第一段 -->
                    <div class="industry-machine-paragraph">
                        <p class="industry-machine-text">
                            An Industry Machine is a professional-grade manufacturing tool designed to automate and streamline industrial processes, offering precision and efficiency for a wide range of applications. These machines integrate advanced technologies, such as CNC, hydraulic systems, and automated controls, to perform tasks like cutting, drilling, polishing, engraving, grinding, profiling, splitting, and shaping. Industry Machines can handle diverse materials, including stone, metal, wood, ceramics, concrete, plastic, and glass, making them indispensable in fields such as construction, stone processing, metal fabrication, and woodworking.
                        </p>
                    </div>

                    <!-- 第二段 -->
                    <div class="industry-machine-paragraph">
                        <p class="industry-machine-text">
                            Common types of Industry Machines include diamond wire saws, bridge saws, double-blade cutters, profiling machines, grinding and polishing machines, waterjet cutters, machining centers, hydraulic stone splitters, and assembly line equipment. These machines are engineered to enhance productivity, reduce labor costs, and deliver consistent, high-quality results. Whether shaping architectural elements, producing decorative components, or fabricating structural materials, Industry Machines are vital tools in modern manufacturing and industrial automation.
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
                    <h2 class="processing-cases-title" v-if="index == 0">
                        The most popular related processing cases You Can Refer To
                    </h2>
                    <h2 class="processing-cases-title" v-else-if="index == 1">
                        The practical videos onHow to install, use, and maintain industrial
                    </h2>
                    <h2 class="processing-cases-title" v-else>
                        Worth-reading articles on industrial processing Machinery Cases
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
                                    <div class="processing-case-item" v-if="index == 0">
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
                                                                        Cement Product Cutting Case - CNC Wire Saw Machine Supports Spanish Factory
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
                                    <div class="processing-case-item" v-if="index == 0">
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
                                                                        <span class="case-title-line">Marble Block Slab Cutting Case - CNC Wire</span>
                                                                        <span class="case-title-line">Saw Machine Supports Spanish Factory</span>
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
                                    <div class="processing-case-item" v-if="index == 0">
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
                                                                        <span class="case-title-line">Granite Tombstone Case - CNC Wire Saw</span>
                                                                        <span class="case-title-line">Machine Supports Chongqing Factory</span>
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

                                    <!-- 视频案例1 -->
                                    <div class="processing-case-item" v-if="index == 1">
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
                                                                        How to Maintain a Wire Saw Machine
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

                                    <!-- 视频案例2 -->
                                    <div class="processing-case-item" v-if="index == 1">
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
                                                                        Understanding and Resolving Diamond Wire Vibration During Cutting
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

                                    <!-- 视频案例3 -->
                                    <div class="processing-case-item" v-if="index == 1">
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
                                                                        DINOSAW Machinery After-Sales Service System
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

                                    <!-- 文章案例1 -->
                                    <div class="processing-case-item" v-if="index == 2">
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
                                                                        Intelligent CNC Diamond Wire Saw Cutting Machine: Shaped Stone Cutting Solution
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

                                    <!-- 文章案例2 -->
                                    <div class="processing-case-item" v-if="index == 2">
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
                                                                        Precious Stone Cutting Machines: CNC Wire Saw for Luxury Stone Cutting
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

                                    <!-- 文章案例3 -->
                                    <div class="processing-case-item" v-if="index == 2">
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
                                                                        Are Chinese CNC Machines Worth Buying? Quality & Value Analysis 2025
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

        <!-- Expert Guide 部分 - 对应Figma 19:13396 -->
        <div class="expert-guide-section">
            <div class="expert-guide-container">
                <div class="expert-guide-content">
                    <div class="expert-guide-wrapper">
                        <!-- 主标题和图片部分 -->
                        <div class="expert-guide-header">
                            <div class="expert-guide-title-section">
                                <div class="expert-guide-title-frame">
                                    <h2 class="expert-guide-main-title">
                                        An Expert Guide to Buying Your First Industry Machine
                                    </h2>
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
                        <div class="expert-guide-article">
                            <!-- What Is an Industry Machine? -->
                            <div class="article-section">
                                <h3 class="article-heading-3">What Is an Industry Machine?</h3>
                                <div class="article-margin">
                                    <p class="article-text">
                                        An Industry Machine is a specialized piece of manufacturing equipment designed for tasks like cutting, drilling, grinding, polishing, engraving, and shaping. These machines are vital in industries such as stone processing, construction, metal fabrication, and woodworking due to their ability to deliver high precision, efficiency, and automation.
                                    </p>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Industry Machines can be categorized into the following types:
                                    </p>
                                </div>

                                <!-- Wire Saw Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Wire Saw Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Mono wire saw and multi-wire saw machines for quarrying, precision cutting, trimming, and profiling.
                                    </p>
                                </div>

                                <!-- Circle Saw Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Circle Saw Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Includes bridge saws, block cutters, and manual cutting machines for diverse materials.
                                    </p>
                                </div>

                                <!-- Drilling and Engraving Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Drilling and Engraving Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Equipments and tools for creating holes or engravings on stone, metal, and glass.
                                    </p>
                                </div>

                                <!-- Grinding and Polishing Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Grinding and Polishing Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Designed to enhance surface finishes with efficiency and precision.
                                    </p>
                                </div>

                                <!-- Profiling Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Profiling Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Used for shaping intricate architectural components and decorative elements.
                                    </p>
                                </div>

                                <!-- Mining and Quarry Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Mining and Quarry Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Includes diamond wire saws, double-blade cutters, and quarry chainsaw.
                                    </p>
                                </div>

                                <!-- Other Industry Machines -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Other Industry Machines</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Waterjet cutters, thicknessing machines, machining centers, and assembly line equipment.
                                    </p>
                                </div>
                            </div>

                            <!-- Why Invest in an Industry Machine? -->
                            <div class="article-section">
                                <div class="article-heading-3-margin">
                                    <h3 class="article-heading-3">Why Invest in an Industry Machine?</h3>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Investing in an industry machine can transform production processes and elevate business outcomes. Key advantages include:
                                    </p>
                                </div>

                                <!-- Increased Productivity -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Increased Productivity</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Automates complex tasks, reducing manual intervention and expediting production cycles.
                                    </p>
                                </div>

                                <!-- Enhanced Precision -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Enhanced Precision</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Guarantees consistency in material processing with advanced technology.
                                    </p>
                                </div>

                                <!-- Versatility -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Versatility</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Adapts to a wide array of materials and applications.
                                    </p>
                                </div>

                                <!-- Cost Efficiency -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Cost Efficiency</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Saves labor costs and minimizes material wastage for long-term profitability.
                                    </p>
                                </div>

                                <!-- Competitive Edge -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Competitive Edge</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Helps businesses meet market demands with cutting-edge capabilities.
                                    </p>
                                </div>
                            </div>

                            <!-- Factors to Consider When Buying an Industry Machine -->
                            <div class="article-section">
                                <div class="article-heading-3-margin">
                                    <h3 class="article-heading-3">Factors to Consider When Buying an Industry Machine</h3>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        When selecting the ideal Industry Machine, consider these critical factors:
                                    </p>
                                </div>

                                <!-- Material Compatibility -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Material Compatibility</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Match the machine with the materials you'll process (e.g., stone, metal, glass).
                                    </p>
                                </div>

                                <!-- Functionality -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Functionality</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Choose between CNC capabilities or manual operation based on production needs.
                                    </p>
                                </div>

                                <!-- Size and Capacity -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Size and Capacity</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Ensure the machine's dimensions and workload align with factory space and production goals.
                                    </p>
                                </div>

                                <!-- Automation Level -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Automation Level</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Evaluate the trade-off between fully automated and manual machines for efficiency or flexibility.
                                    </p>
                                </div>

                                <!-- Customization Options -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Customization Options</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Look for equipment that can be adapted to specific operational requirements.
                                    </p>
                                </div>

                                <!-- Budget -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Budget</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Balance upfront costs with potential ROI.
                                    </p>
                                </div>

                                <!-- Brand Reputation -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Brand Reputation</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Opt for reputable brands known for quality and reliability.
                                    </p>
                                </div>

                                <!-- After-Sales Support -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">After-Sales Support</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Check for services like installation, maintenance, and training.
                                    </p>
                                </div>

                                <!-- Market Feedback -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Market Feedback</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Investigate customer reviews and case studies to assess real-world performance.
                                    </p>
                                </div>
                            </div>

                            <!-- Steps to Buying Your First Industry Machine -->
                            <div class="article-section">
                                <div class="article-heading-3-margin">
                                    <h3 class="article-heading-3">Steps to Buying Your First Industry Machine</h3>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Follow this step-by-step guide for a seamless buying experience:
                                    </p>
                                </div>

                                <!-- Identify Needs -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Identify Needs</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Analyze the materials and tasks required for your operation.
                                    </p>
                                </div>

                                <!-- Research Suppliers -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Research Suppliers</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Compare brands, focusing on features, reliability, and customer feedback.
                                    </p>
                                </div>

                                <!-- Request a Consultation -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Request a Consultation</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Engage with suppliers to clarify technical details and get tailored recommendations.
                                    </p>
                                </div>

                                <!-- Schedule a Demonstration -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Schedule a Demonstration</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Verify machine performance through on-site or video demonstrations.
                                    </p>
                                </div>

                                <!-- Plan Your Budget -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Plan Your Budget</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Select the most cost-effective solution that fits your financial plan.
                                    </p>
                                </div>

                                <!-- Finalize the Contract -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Finalize the Contract</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Confirm specifications, warranties, and delivery timelines before signing.
                                    </p>
                                </div>

                                <!-- Install and Train -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Install and Train</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Arrange professional installation and ensure your team receives adequate training.
                                    </p>
                                </div>

                                <!-- Monitor and Feedback -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Monitor and Feedback</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Start operations and communicate regularly with suppliers for continued support.
                                    </p>
                                </div>
                            </div>

                            <!-- Why Choose Dinosaw? -->
                            <div class="article-section">
                                <div class="article-heading-3-margin">
                                    <h3 class="article-heading-3">Why Choose Dinosaw?</h3>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Dinosaw is a trusted leader in industry machinery, offering high-performance wire saw cutting equipment. Here's why Dinosaw stands out:
                                    </p>
                                </div>

                                <!-- Intelligent Operating System -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Intelligent Operating System</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Simplifies operations with features like automatic diagram import, one-click drawing, and tool compensation.
                                    </p>
                                </div>

                                <!-- Modular Customization -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Modular Customization</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Flexible designs accommodate a wide range of application needs.
                                    </p>
                                </div>

                                <!-- Rapid Iteration -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Rapid Iteration</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Continuous innovation driven by customer feedback ensures adaptability to market trends.
                                    </p>
                                </div>

                                <!-- Certifications -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Certifications</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        ISO, CE, and CCC certifications guarantee quality and safety.
                                    </p>
                                </div>

                                <!-- Comprehensive Support -->
                                <div class="article-heading-4-margin">
                                    <h4 class="article-heading-4">Comprehensive Support</h4>
                                </div>
                                <div class="article-margin">
                                    <p class="article-text">
                                        Offers global installation, maintenance, and spare part supplies.
                                    </p>
                                </div>

                                <div class="article-margin">
                                    <p class="article-text">
                                        With Dinosaw's expertise, businesses achieve enhanced productivity and reduced costs, ensuring long-term success.
                                    </p>
                                </div>
                            </div>

                            <!-- Conclusion -->
                            <div class="article-section">
                                <div class="article-heading-3-margin">
                                    <h3 class="article-heading-3">Conclusion</h3>
                                </div>
                                <div class="article-conclusion-margin">
                                    <p class="article-text">
                                        Purchasing an Industry Machine is a significant investment that requires careful consideration of your business needs, market research, and collaboration with a reputable supplier. By following this guide, you can confidently select a machine tailored to your requirements. Trust Dinosaw for state-of-the-art solutions that empower your business to thrive in today's competitive landscape.
                                    </p>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode' // ✅ 引入 free-mode 的样式

const modules = [Navigation];
const imageList = [
    [
        { id: 1, url: "https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp", text: "Diamond Tools" },
        { id: 2, url: "https://framerusercontent.com/images/6DORYy0rJp9F56D1V9yzxZFozA.webp", text: "Diamond Tools" },
        { id: 3, url: "https://framerusercontent.com/images/f2DnRktwE5A4dq5VjaIGvPKsvI.webp", text: "Diamond Tools" },
        { id: 4, url: "https://framerusercontent.com/images/KnYaIReg337YAFK7SgqU9lfzMKU.webp", text: "Diamond Tools" },
        { id: 5, url: "https://framerusercontent.com/images/6DORYy0rJp9F56D1V9yzxZFozA.webp", text: "Diamond Tools" }
    ],
    [

        { id: 6, url: "https://framerusercontent.com/images/f2DnRktwE5A4dq5VjaIGvPKsvI.webp", text: "Diamond Tools" }
    ]

]
const processingCase = [
    { id: 1, title: "The most popular related processing cases", subTitle:"You Can Refer To", text: "Diamond Tools" },
    { id: 2, title: "The practical videos on", subTitle:"How to install, use, and maintain industrial", text: "Diamond Tools" },
    { id: 3, title: "Worth-reading articles on", subTitle:"industrial processing Machinery Cases", text: "Diamond Tools" }
]

const { data: productDetailRes, pending, error } = await useApi('/cnc-diamond-wire-saw-cutting-machine-pro-for-sales?populate=all')

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
// 使用 useFetch 获取数据
</script>
<style scoped lang="scss">
.main {
    width: 100%;
    background: #FFFFFF;
    .breadcrumb-container{
        width: 1200px;
        margin:0 auto;
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
    height: 136px;
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

        .carousel-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 258px;
            height: 100%;
            background: #fcfcfc;
            border-radius: 16px;
        }

        img {
            width: 100px;
            object-fit: cover;
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
                height: 136px;
                background: #fcfcfc;
                border-radius: 8px;
                flex-shrink: 0;
            }

            img {
                width: 100px;
                height: 100px;
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
    width: 100%;
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
        width: 100%;
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

@media (max-width: 768px) {
    .content-container {
        flex-direction: column;
        gap: 20px;
    }

    .main-title {
        font-size: 32px;
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
    margin: 0;
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
        text-align: center;
        margin-bottom: 16px;
    }

    .expert-guide-image-section {
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
</style>