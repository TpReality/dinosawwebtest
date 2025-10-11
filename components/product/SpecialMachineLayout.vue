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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(255, 255, 255); flex-shrink: 0; cursor: auto;"><g color="rgb(255, 255, 255)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
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
                    <!-- Projects Badge - 对应Figma节点 20:59943 -->
                    <div class="projects-badge">
                        <div class="badge-background">
                            <div class="badge-content">
                                <div class="badge-icon">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <circle cx="14.5" cy="14.5" r="14.5" fill="#FFB800" />
                                        <path
                                            d="M14.5 8L16.5 13H22L17.5 16.5L19.5 22L14.5 18.5L9.5 22L11.5 16.5L7 13H12.5L14.5 8Z"
                                            fill="white" />
                                    </svg>
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
                            {{ props.slug }}
                        </h1>
                    </div>
                    <div class="description-section">
                        <p class="description-text">
                            Professional {{ props.slug.toLowerCase() }} solutions for precision stone processing and cutting applications.
                        </p>
                    </div>
                    <div class="material-types">
                        <div class="material-item">
                            <div class="material-icon">
                                <img src="/images/granite-icon.svg" alt="Granite" />
                            </div>
                            <span class="material-name">Granite</span>
                        </div>
                        <div class="material-item">
                            <div class="material-icon">
                                <img src="/images/marble-icon.svg" alt="Marble" />
                            </div>
                            <span class="material-name">Marble</span>
                        </div>
                        <div class="material-item">
                            <div class="material-icon">
                                <img src="/images/cement-icon.svg" alt="Cement" />
                            </div>
                            <span class="material-name">Cement</span>
                        </div>
                        <div class="material-item">
                            <div class="material-icon">
                                <img src="/images/ceramic-icon.svg" alt="Ceramic" />
                            </div>
                            <span class="material-name">Ceramic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Dynamic Content Section -->
        <div class="dynamic-content-section">
            <div class="content-wrapper">
                <!-- 标题部分 -->
                <div class="cnc-title-section" v-if="contentData.title">
                    <h2 class="cnc-title">{{ contentData.title }}</h2>
                </div>
                
                <!-- 描述内容部分 -->
                <div class="cnc-description-section" v-if="contentData.descriptions && contentData.descriptions.length">
                    <p 
                        v-for="(desc, index) in contentData.descriptions" 
                        :key="index"
                        class="cnc-description-text"
                    >
                        {{ desc }}
                    </p>
                </div>
                
                <!-- 动态产品图片展示区域 -->
                <div class="dynamic-product-section" v-if="contentData.products && contentData.products.length">
                    <!-- 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 -->
                    <div v-if="contentData.products.length === 1" class="layout-single">
                        <div class="single-container">
                            <div class="single-link">
                                <div class="single-image">
                                    <img :src="contentData.products[0].image" :alt="contentData.products[0].title" />
                                </div>
                                <div class="single-content">
                                    <div class="single-text-section">
                                        <div class="single-title-wrapper">
                                            <h3 class="single-title">{{ contentData.products[0].title }}</h3>
                                        </div>
                                        <div class="single-date-wrapper" v-if="contentData.products[0].date">
                                            <p class="single-date">{{ contentData.products[0].date }}</p>
                                        </div>
                                    </div>
                                    <div class="single-button" v-if="contentData.products[0].buttonText">
                                        <div class="single-button-content">
                                            <span class="button-text">{{ contentData.products[0].buttonText }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 2张图片布局：左右布局 -->
                    <div v-else-if="contentData.products.length === 2" class="layout-double">
                        <div 
                            v-for="(product, index) in contentData.products" 
                            :key="index"
                            class="double-item"
                            :class="product.layout || 'vertical'"
                        >
                            <!-- 垂直布局：上面图片，下面标题 -->
                            <template v-if="!product.layout || product.layout === 'vertical'">
                                <div class="double-image">
                                    <img :src="product.image" :alt="product.title" />
                                </div>
                                <div class="double-content">
                                    <h3 class="double-title">{{ product.title }}</h3>
                                </div>
                            </template>
                            
                            <!-- 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 -->
                            <template v-else-if="product.layout === 'horizontal'">
                                <div class="horizontal-container">
                                    <div class="horizontal-link">
                                        <div class="horizontal-image">
                                            <img :src="product.image" :alt="product.title" />
                                        </div>
                                        <div class="horizontal-content">
                                            <div class="horizontal-text-section">
                                                <div class="horizontal-title-wrapper">
                                                    <h3 class="horizontal-title">{{ product.title }}</h3>
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
                    <div v-else-if="contentData.products.length === 4" class="layout-quad">
                        <div 
                            v-for="(product, index) in contentData.products" 
                            :key="index"
                            class="quad-item"
                        >
                            <div class="quad-image">
                                <img :src="product.image" :alt="product.title" />
                            </div>
                            <div class="quad-content">
                                <h3 class="quad-title">{{ product.title }}</h3>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 5张图片布局：左边1个大图，右边4个小图 -->
                    <div v-else-if="contentData.products.length === 5" class="layout-five">
                        <div class="five-left">
                            <div class="five-main-image">
                                <img :src="contentData.products[0].image" :alt="contentData.products[0].title" />
                            </div>
                            <div class="five-main-content">
                                <h3 class="five-main-title">{{ contentData.products[0].title }}</h3>
                                <p class="five-main-date" v-if="contentData.products[0].date">{{ contentData.products[0].date }}</p>
                                <div class="five-main-info" v-if="contentData.products[0].subtitle">
                                    <h3 class="five-subtitle">{{ contentData.products[0].subtitle }}</h3>
                                    <p class="five-description" v-if="contentData.products[0].description">{{ contentData.products[0].description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="five-right">
                            <div 
                                v-for="(product, index) in contentData.products.slice(1)" 
                                :key="index + 1"
                                class="five-grid-item"
                            >
                                <div class="five-grid-image">
                                    <img :src="product.image" :alt="product.title" />
                                </div>
                                <h3 class="five-grid-title">{{ product.title }}</h3>
                            </div>
                        </div>
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
        
        <!-- Comprehensive Guide Section -->
        <div class="comprehensive-guide-section">
            <div class="guide-container">
                <!-- Header Section -->
                <div class="guide-header">
                    <div class="guide-title-section">
                        <div class="guide-title-wrapper">
                            <h2 class="guide-main-title">
                                Comprehensive Guide to<br>
                                Choosing Stone Cutting Machine
                            </h2>
                        </div>
                    </div>
                    <div class="guide-image-section">
                        <img 
                            src="/images/stone-cutting-guide.svg" 
                            alt="Stone Cutting Guide"
                            class="guide-image"
                        />
                    </div>
                </div>
                
                <!-- Content Section -->
                <div class="guide-content">
                    <!-- Introduction -->
                    <div class="guide-intro">
                        <p class="guide-intro-text">
                            Selecting the right Stone Cutting Machine is crucial for optimizing production processes and meeting specific customer demands. Whether working with granite, marble, or engineered materials, DINOSAW machines provide tailored solutions for your stone fabrication needs.
                        </p>
                    </div>
                    
                    <!-- Understanding Your Raw Materials -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Understanding Your Raw Materials</h3>
                        <p class="guide-section-desc">
                            Each material has unique processing requirements based on hardness, density, and form. Choosing the right machine ensures efficiency and precision.
                        </p>
                        <p class="guide-paragraph">
                            Hard natural stones like granite, quartzite, and basalt require powerful and stable machines to maintain cutting accuracy. The Bridge Saw is designed to handle these tasks, ensuring consistent results and reducing tool wear.
                        </p>
                        <p class="guide-paragraph">
                            Soft natural stones and non-stone materials like bluestone, acrylic, and composite panels benefit from the Manual Cutting Machine. This flexible solution is ideal for small-scale processing and budget-conscious projects.
                        </p>
                        <p class="guide-paragraph">
                            Large stone blocks such as limestone and sandstone require consistent performance for slab production. The Block Cutting Machine ensures even thickness and smooth finishes, making it perfect for large-scale operations.
                        </p>
                        <p class="guide-paragraph">
                            Construction materials like concrete and tiles demand precision and versatility. The Bridge Saw supports multiple angles and complex patterns, meeting these requirements with ease.
                        </p>
                    </div>
                    
                    <!-- Matching the Stone Cutting Machine to Your Products -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Matching the Stone Cutting Machine to Your Products</h3>
                        <p class="guide-section-desc">
                            Production goals define the necessary features and capabilities in a Stone Cutting Machine.
                        </p>
                        <p class="guide-paragraph">
                            For slabs and tiles, the Block Cutting Machine efficiently converts stone blocks into high-quality slabs and tiles, perfect for large-scale production.
                        </p>
                        <p class="guide-paragraph">
                            For decorative interior products, the Bridge Saw offers precision cutting and CNC automation, ideal for high-end items like countertops and wall panels.
                        </p>
                        <p class="guide-paragraph">
                            For architectural components, the Bridge Saw ensures smooth cutting for complex geometric shapes in large pieces like pillars and stair treads.
                        </p>
                        <p class="guide-paragraph">
                            For outdoor decorative and structural products, the Block Cutting Machine excels in producing paving stones and curbstones, while the Bridge Saw handles detailed work on tombstones and monuments.
                        </p>
                        <p class="guide-paragraph">
                            For small-scale custom products, the Manual Cutting Machine provides a reliable, budget-friendly option for projects like tabletops and custom décor.
                        </p>
                    </div>
                    
                    <!-- Addressing Your Operational Challenges -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Addressing Your Operational Challenges</h3>
                        <p class="guide-section-desc">
                            Stone Cutting Machines help resolve common operational challenges.
                        </p>
                        <p class="guide-paragraph">
                            To reduce high material waste, the Block Cutting Machine ensures precision and maximizes material usage.
                        </p>
                        <p class="guide-paragraph">
                            For handling complex designs, the Bridge Saw's CNC automation delivers precise results for intricate patterns and multi-angle cuts.
                        </p>
                        <p class="guide-paragraph">
                            To overcome budget or space limitations, the Manual Cutting Machine offers a compact and affordable solution for small-scale operations.
                        </p>
                    </div>
                    
                    <!-- Practical Steps to Choose Your Stone Cutting Machine -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Practical Steps to Choose Your Stone Cutting Machine</h3>
                        <div class="guide-steps">
                            <p class="guide-paragraph">
                                Evaluate your materials by identifying the type, hardness, and size you process most frequently.
                            </p>
                            <p class="guide-paragraph">
                                Define your products, considering their shape, size, and complexity.
                            </p>
                            <p class="guide-paragraph">
                                Analyze your production scale to determine whether speed, precision, or flexibility is your priority.
                            </p>
                            <p class="guide-paragraph">
                                Pinpoint challenges, such as inefficiencies or limitations in your current processes.
                            </p>
                            <p class="guide-paragraph">
                                Consult experts at Dinosaw to match your needs with the right machine, ensuring a tailored solution for your operations.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Why Dinosaw Machines Are the Right Fit -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Why Dinosaw Machines Are the Right Fit</h3>
                        <p class="guide-section-desc">
                            Dinosaw machines address real-world challenges with tailored solutions:
                        </p>
                        <p class="guide-paragraph">
                            The Bridge Saw is ideal for customers needing high precision, complex designs, and versatility.
                        </p>
                        <p class="guide-paragraph">
                            The Block Cutting Machine is designed for high-volume factories requiring efficient slab and tile production.
                        </p>
                        <p class="guide-paragraph">
                            The Manual Cutting Machine is perfect for small workshops and budget-conscious operations, offering reliable performance for small-scale projects.
                        </p>
                    </div>
                    
                    <!-- Conclusion -->
                    <div class="guide-section">
                        <h3 class="guide-section-title">Conclusion</h3>
                        <div class="guide-conclusion">
                            <p class="guide-paragraph">
                                Choosing the right Stone Cutting Machine requires understanding your materials, production goals, and operational challenges. Dinosaw machines are designed to meet diverse needs, improving efficiency, reducing waste, and delivering superior results. Let Dinosaw help you find the perfect machine to support your success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    slug: {
        type: String,
        required: true
    }
});

// 在模板中可以直接使用 props.slug 或者创建响应式引用
const { slug } = toRefs(props);

// 或者直接使用 props.slug
console.log('Current slug in component:', props.slug);

const processingCase = [
    { id: 1, title: "The most popular related processing cases", subTitle: "You Can Refer To", text: "Diamond Tools" },
    { id: 2, title: "The practical videos on", subTitle: "How to install, use, and maintain industrial", text: "Diamond Tools" },
    { id: 3, title: "Worth-reading articles on", subTitle: "industrial processing Machinery Cases", text: "Diamond Tools" }
]

// 模拟接口数据结构
const contentData = computed(() => {
  // 这里可以根据实际需求从API获取数据
  // 目前使用静态数据作为示例，展示不同布局情况
  
  if (slug === 'profiling-machine') {
    return {
      title: 'CNC石材轮廓加工机',
      descriptions: [
        '专业的石材轮廓加工设备，适用于各种石材的精密加工。采用先进的CNC控制系统，确保加工精度和效率。',
        '设备配备高精度导轨和伺服电机，能够实现复杂轮廓的精确加工。适用于建筑装饰、艺术雕刻等多个领域。',
        '支持多种石材类型，包括花岗岩、大理石、砂岩等，是现代石材加工企业的理想选择。'
      ],
      products: [
        {
          image: '/images/5-axis-bridge-saw.svg',
          title: '5轴CNC桥式锯',
          date: '2025年4月17日',
          subtitle: '旗舰产品2025',
          description: 'Dinosaw精选设备'
        },
        {
          image: '/images/4-axis-bridge-saw.svg',
          title: '4+1轴桥式切割机',
          date: '2025年4月17日',
          subtitle: '旗舰产品2025',
          description: 'Dinosaw精选设备'
        },
        {
          image: '/images/bridge-cutting-machine.svg',
          title: '天然石材和混凝土桥式切割机',
          date: '2025年4月17日',
          subtitle: '旗舰产品2025',
          description: 'Dinosaw精选设备'
        },
        {
          image: '/images/cnc-stone-bridge-saw.svg',
          title: 'CNC石材桥式锯精密切割',
          date: '2025年4月17日',
          subtitle: '旗舰产品2025',
          description: 'Dinosaw精选设备'
        },
        {
          image: '/images/monoblock-bridge-saw.svg',
          title: '整体式桥式锯CNC石材切割机',
          date: '2025年4月17日',
          subtitle: '旗舰产品2025',
          description: 'Dinosaw精选设备'
        }
      ]
    };
  } else if (slug === 'single-product') {
    // 1张图片的示例
    return {
      title: '单产品展示页面',
      descriptions: [
        '这是一个单产品展示的示例页面，展示如何使用左右布局来展示产品信息。'
      ],
      products: [
        {
          image: '/images/stone-block-cutter.svg',
          title: '水平刀片石材块切割机',
          date: '2025年2月28日',
          buttonText: '了解更多'
        }
      ]
    };
  } else if (slug === 'double-product') {
    // 2张图片的示例
    return {
      title: '双产品展示页面',
      descriptions: [
        '这是一个双产品展示的示例页面，展示两种不同的布局方式。'
      ],
      products: [
        {
          image: '/images/4-axis-bridge-saw.svg',
          title: '4轴桥式切割机',
          layout: 'vertical' // 垂直布局：上图下文
        },
        {
          image: '/images/stone-block-cutter.svg',
          title: '石材块切割机',
          date: '2025年3月15日',
          buttonText: '查看详情',
          layout: 'horizontal' // 水平布局：左图右文
        }
      ]
    };
  } else if (slug === 'quad-product') {
    // 4张图片的示例
    return {
      title: '四产品网格展示',
      descriptions: [
        '这是一个四产品网格展示的示例页面，使用2x2网格布局。'
      ],
      products: [
        {
          image: '/images/4-axis-bridge-saw.svg',
          title: '4+1轴桥式切割机'
        },
        {
          image: '/images/bridge-cutting-machine.svg',
          title: '天然石材桥式切割机'
        },
        {
          image: '/images/cnc-stone-bridge-saw.svg',
          title: 'CNC石材桥式锯'
        },
        {
          image: '/images/monoblock-bridge-saw.svg',
          title: '整体式桥式锯'
        }
      ]
    };
  }
  
  // 默认使用5张图片布局
  return {
    title: 'CNC Mono Wire Saw Machine',
    descriptions: [
      'The CNC mono saw machine is a highly efficient cutting tool specifically designed for precision processing. It is composed of a diamond wire saw, a cast iron frame, a driving flywheel (to drive the wire saw for cutting), servo control, hydraulic tensioning, a worktable, and a CNC control system.',
      'The machine operates by driving the diamond wire through the flywheel to achieve friction-based cutting. The CNC control system automatically adjusts the wire tension, ensuring smooth and accurate cutting. This system, combined with hydraulic tensioning, enhances operational efficiency and safety.',
      'Ideal for cutting stone blocks, concrete, graphite, and various stones such as granite, marble, jade, and travertine, this machine is widely used in architectural materials, engineering components, and high-end stone processing. Its advantages include smooth cutting surfaces, minimal material waste, and suitability for small to medium-scale processing projects requiring high precision.'
    ],
    products: [
      {
        image: '/images/5-axis-bridge-saw.svg',
        title: '5-Axis CNC Bridge Saw',
        date: 'Apr 17, 2025',
        subtitle: 'Flagship Products 2025',
        description: 'Dinosaw Featured Machines'
      },
      {
        image: '/images/4-axis-bridge-saw.svg',
        title: '4+1 Axis Bridge Saw Cutting Machine'
      },
      {
        image: '/images/bridge-cutting-machine.svg',
        title: 'Bridge Cutting Machine for Natural Stone & Concrete'
      },
      {
        image: '/images/cnc-stone-bridge-saw.svg',
        title: 'CNC Stone Bridge Saw for Precision Cutting'
      },
      {
        image: '/images/monoblock-bridge-saw.svg',
        title: 'Monoblock Bridge Saw CNC Stone Cutter'
      }
    ]
  };
});

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
            title: contentData.value.title || 'Product Title',
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
        flex-wrap: wrap;
        height: auto;
    }

    .material-item {
        width: calc(50% - 8px);
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
        height: 280px;
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
    padding: 60px 40px;
}

.content-wrapper {
    max-width: 1376px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

/* Dynamic Product Section */
.dynamic-product-section {
    width: 100%;
}

/* 1张图片布局：左侧图片，右侧信息 - 按照Figma节点 10:15239 */
.layout-single {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    max-width: 1400px;
    height: 333px;
    background-color: #f6f6f6;
    border-radius: 30px;
    margin: 0 auto;
}

.single-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 20px;
    width: 1292px;
    height: 313px;
}

.single-link {
    display: flex;
    align-items: center;
    gap: 249px;
    width: 100%;
    height: 100%;
}

.single-image {
    flex-shrink: 0;
    width: 573px;
    height: 313px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.single-image img {
    width: 407px;
    height: 313px;
    object-fit: contain;
    position: absolute;
    left: 83px;
    top: 0;
}

.single-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    width: 469px;
    height: 194px;
}

.single-text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    gap: 10px;
    height: 94px;
}

.single-title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    height: 48px;
}

.single-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    text-align: left;
    color: #333333;
    margin: 0;
    width: 378px;
    height: 48px;
    display: flex;
    align-items: center;
    position: relative;
    top: -12px;
}

.single-date-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 273px;
    height: 36px;
}

.single-date {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    text-align: left;
    color: rgba(61, 61, 61, 0.7);
    margin: 0;
    width: 112px;
    height: 21px;
    display: flex;
    align-items: center;
    position: relative;
    top: 7px;
}

.single-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px;
    width: 150px;
    height: 40px;
    background-color: #000000;
    border-radius: 21px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.single-button:hover {
    background-color: #333333;
}

.single-button-content {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 104px;
    height: 28px;
}

.button-text {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2142857142857142em;
    text-align: left;
    color: #ffffff;
    margin: 0;
    width: 98px;
    height: 17px;
    display: flex;
    align-items: center;
    position: relative;
    top: 5px;
}

/* 2张图片布局：左右布局 */
.layout-double {
    display: flex;
    gap: 24px;
    align-items: stretch;
}

.double-item {
    flex: 1;
    background-color: #f6f6f6;
    border-radius: 24px;
    padding: 20px;
}

/* 垂直布局：上面图片，下面标题 */
.double-item.vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.double-image {
    width: 100%;
    max-width: 330px;
    height: 192px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
}

.double-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.double-content {
    flex: 1;
}

.double-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    color: #333333;
    margin: 0;
}

/* 水平布局：左侧图片，右侧信息 - 按照Figma节点 7:11368 */
.double-item.horizontal {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    padding: 10px 0;
    width: 684px;
    height: 307px;
    background-color: #f6f6f6;
    border-radius: 30px;
}

.horizontal-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 20px;
    width: 100%;
    height: 287px;
}

.horizontal-link {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 24px;
    padding: 24px;
    width: 100%;
    height: 100%;
}

.horizontal-image {
    flex-shrink: 0;
    width: 273px;
    height: 170px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.horizontal-image img {
    width: 221px;
    height: 170px;
    object-fit: contain;
    position: absolute;
    left: 26px;
    top: 0;
}

.horizontal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    width: 291px;
    height: 225.22px;
}

.horizontal-text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 10px;
    height: 125.22px;
}

.horizontal-title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    height: 79.22px;
}

.horizontal-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    text-align: left;
    color: #333333;
    margin: 0;
    width: 261px;
    height: 78px;
    display: flex;
    align-items: center;
    position: relative;
    top: -17px;
}

.horizontal-date-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    height: 36px;
}

.horizontal-date {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    text-align: left;
    color: rgba(61, 61, 61, 0.7);
    margin: 0;
    display: flex;
    align-items: center;
    position: relative;
    top: 7px;
}

.horizontal-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px;
    width: 150px;
    height: 40px;
    background-color: #000000;
    border-radius: 21px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.horizontal-button:hover {
    background-color: #333333;
}

.horizontal-button-content {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    width: 104px;
    height: 28px;
}

.horizontal-button .button-text {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2142857142857142em;
    text-align: left;
    color: #ffffff;
    margin: 0;
    width: 98px;
    height: 17px;
    display: flex;
    align-items: center;
    position: relative;
    top: 5px;
}

/* 4张图片布局：2x2网格 */
.layout-quad {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.quad-item {
    background-color: #f6f6f6;
    border-radius: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.quad-image {
    width: 100%;
    max-width: 330px;
    height: 192px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
}

.quad-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.quad-content {
    flex: 1;
}

.quad-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    color: #333333;
    margin: 0;
}

/* 5张图片布局：左边1个大图，右边4个小图 */
.layout-five {
    display: flex;
    gap: 24px;
    align-items: stretch;
    max-width: 1400px;
    margin: 0 auto;
}

/* 左侧特色产品 */
.five-left {
    flex: 1;
    max-width: 696px;
    background-color: #f6f6f6;
    border-radius: 24px;
    overflow: hidden;
}

.five-main-image {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.five-main-image img {
    width: 100%;
    max-width: 646px;
    height: auto;
    object-fit: cover;
}

.five-main-content {
    padding: 20px;
    text-align: center;
}

.five-main-title {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #333333;
    margin: 0 0 10px 0;
}

.five-main-date {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    color: rgba(61, 61, 61, 0.7);
    margin: 0 0 20px 0;
}

.five-main-info {
    text-align: left;
    margin-top: 20px;
}

.five-subtitle {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1em;
    color: #000000;
    margin: 0 0 10px 0;
}

.five-description {
    font-family: Inter, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.1428571428571428em;
    color: #3d3d3d;
    margin: 0;
}

/* 右侧产品网格 */
.five-right {
    flex: 1;
    max-width: 680px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
}

.five-grid-item {
    background-color: #f6f6f6;
    border-radius: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.five-grid-image {
    width: 100%;
    max-width: 273px;
    height: 192px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
}

.five-grid-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.five-grid-title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.1818181818181819em;
    color: #333333;
    margin: 0;
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

@media (max-width: 768px) {
    .dynamic-content-section {
        padding: 30px 15px;
    }
    .projects-banner{
        padding-bottom:20px;
        height:auto;
        .content-wrapper{
            height:auto;
        }
    }
    
    
    .layout-quad,
    .five-right {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .quad-title,
    .five-grid-title {
        font-size: 18px;
        line-height: 1.3em;
    }
    
    .single-title,
    .five-main-title {
        font-size: 20px;
        line-height: 1.2em;
    }
    
    .double-title,
    .horizontal-title {
        font-size: 18px;
        line-height: 1.3em;
    }
    
    .layout-single {
        padding: 30px 20px;
    }
}

@media (max-width: 480px) {
    .dynamic-content-section {
        padding: 30px 10px;
    }
    
    .content-wrapper {
        gap: 10px;
    }
    
    .single-title,
    .five-main-title {
        font-size: 18px;
    }
    
    .quad-title,
    .five-grid-title,
    .double-title,
    .horizontal-title {
        font-size: 16px;
    }
    
    .single-date,
    .five-main-date,
    .horizontal-date {
        font-size: 14px;
    }
    
    .single-button,
    .horizontal-button {
        width: 120px;
        height: 36px;
        padding: 12px;
    }
    
    .button-text {
        font-size: 12px;
    }
    
    .layout-single {
        padding: 15px 10px;
        height: auto;
        min-height: 250px;
    }
    
    .single-container {
        width: 100%;
        height: auto;
    }
    
    .single-link {
        flex-direction: column;
        gap: 20px;
    }
    
    .single-image {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: 0 auto;
    }
    
    .single-image img {
        width: 100%;
        max-width: 280px;
        height: auto;
    }
    
    .single-content {
        width: 100%;
        gap: 20px;
        align-items: center;
    }
    
    .single-title {
        font-size: 18px;
        line-height: 1.2em;
        text-align: center;
    }
    
    .single-date {
        font-size: 14px;
        text-align: center;
    }
    
    .single-button {
        width: 120px;
        height: 36px;
        padding: 12px;
    }
    
    .button-text {
        font-size: 12px;
        width: auto;
        height: auto;
        top: 0;
        text-align: center;
    }
    
    .single-button-content {
        width: auto;
        height: auto;
    }
    
    /* 2张图片水平布局移动端样式 */
    .double-item.horizontal {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
    
    .horizontal-image {
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
    }
    
    .horizontal-image img {
        width: 100%;
        height: 100%;
    }
    
    .horizontal-content {
        width: 100%;
        height: auto;
        gap: 15px;
        align-items: center;
    }
    
    .horizontal-text-section {
        width: 100%;
        height: auto;
        gap: 8px;
        text-align: center;
    }
    
    .horizontal-title {
        font-size: 18px;
        line-height: 1.2em;
    }
    
    .horizontal-date {
        font-size: 14px;
    }
    
    .horizontal-button {
        width: 120px;
        height: 36px;
        padding: 12px;
    }
    
    .horizontal-button-text {
        font-size: 12px;
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