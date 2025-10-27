<template>
  <div class="blog-default-layout">
    <div style="position: fixed; top:-3000px;">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" id="svg-1021927419_1735">
        <g clip-path="url(#svg-1021927419_1735_clip0_507_854)">
        <path d="M21.3125 11C21.3125 11.88 20.2314 12.6053 20.0148 13.4166C19.7914 14.2553 20.3569 15.4241 19.9323 16.158C19.5009 16.9039 18.2033 16.9933 17.5983 17.5983C16.9933 18.2033 16.9039 19.5009 16.158 19.9323C15.4241 20.3569 14.2553 19.7914 13.4166 20.0148C12.6053 20.2314 11.88 21.3125 11 21.3125C10.12 21.3125 9.39469 20.2314 8.58344 20.0148C7.74469 19.7914 6.57594 20.3569 5.84203 19.9323C5.09609 19.5009 5.00672 18.2033 4.40172 17.5983C3.79672 16.9933 2.49906 16.9039 2.06766 16.158C1.64312 15.4241 2.20859 14.2553 1.98516 13.4166C1.76859 12.6053 0.6875 11.88 0.6875 11C0.6875 10.12 1.76859 9.39469 1.98516 8.58344C2.20859 7.74469 1.64312 6.57594 2.06766 5.84203C2.49906 5.09609 3.79672 5.00672 4.40172 4.40172C5.00672 3.79672 5.09609 2.49906 5.84203 2.06766C6.57594 1.64312 7.74469 2.20859 8.58344 1.98516C9.39469 1.76859 10.12 0.6875 11 0.6875C11.88 0.6875 12.6053 1.76859 13.4166 1.98516C14.2553 2.20859 15.4241 1.64312 16.158 2.06766C16.9039 2.49906 16.9933 3.79672 17.5983 4.40172C18.2033 5.00672 19.5009 5.09609 19.9323 5.84203C20.3569 6.57594 19.7914 7.74469 20.0148 8.58344C20.2314 9.39469 21.3125 10.12 21.3125 11Z" fill="#1C64F2"></path>
        <path d="M13.9803 7.92699L10.0547 11.8526L8.0197 9.81934C7.57798 9.37762 6.86126 9.37762 6.41955 9.81934C5.97783 10.2611 5.97783 10.9778 6.41955 11.4195L9.27439 14.2743C9.70408 14.704 10.4019 14.704 10.8316 14.2743L15.5788 9.52715C16.0205 9.08543 16.0205 8.36871 15.5788 7.92699C15.137 7.48527 14.422 7.48527 13.9803 7.92699Z" fill="#FFFCEE"></path>
        </g>
        <defs>
        <clipPath id="svg-1021927419_1735_clip0_507_854">
        <rect width="22" height="22" fill="white"></rect>
        </clipPath>
        </defs>
        </svg>
    </div>
    <!-- Figma设计的主容器 - 对应节点 52:8205 -->
    <div class="banner-container">
    
    <!-- 内容覆盖层 -->
    <div class="banner-content-overlay">
        <div class="content-container">
        <!-- 面包屑导航 -->
        <div class="breadcrumb-container">
        <div class="breadcrumb-wrapper">
            <div class="breadcrumb-link">
            <div class="breadcrumb-text">
                <div class="text-container">
                <span class="breadcrumb-home"><a href="/" target="_blank">{{contentDetail.home_text}}</a></span>
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
                          <span class="breadcrumb-products"><a href="/blog" target="_blank">{{ contentDetail.blog_detail_menu_text }}</a></span>
                          </div>
                      </div>
                      <div class="dropdown-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; width:16px; height:16px; display: inline-block; fill: rgb(0, 0, 0); flex-shrink: 0; cursor: auto;"><g color="rgb(0, 0, 0)" weight="bold"><polyline points="208 96 128 176 48 96" fill="none" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></g></svg>
                      </div>
                    </div>
                </div>
                <div class="breadcrumb-outer">
                    <div class="bg">
                            <p v-for="(menu, i) in menuItems" :key="i">
                                <a :href="'/blog/'+menu.category_value" target="_blank">{{ menu.category_name }}</a>
                            </p>
                        </div>
                </div>
            </div>
        </div>
        </div>
        
        <!-- 主标题区域 -->
        <div class="hero-content">
          <!-- 左侧内容 -->
          <div class="hero-left">
            <h1 class="hero-main-title">
              {{ blogDetail.title }}
            </h1>
            
            <div class="hero-meta is-pc">
              <NuxtImg src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/kb04PIvrLwFZGpVkwv4cn7XR54.png" />
              <span class="author-name">{{ blogDetail.author }}</span>
              <span class="meta-separator">·</span>
              <span class="publish-date">{{ formatDateEN(blogDetail.date) }}</span>
              <span class="meta-separator">·</span>
              <span class="read-time">{{ blogDetail.reading_time }}</span>
            </div>
          </div>
          
          <!-- 右侧图片 -->
          <div class="hero-right">
            <div class="hero-image-container">
              <NuxtImg 
                :src="blogDetail.first_image_url"
                class="hero-image" 
              />
            </div>
            <div class="hero-meta is-mobile">
              <NuxtImg src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/kb04PIvrLwFZGpVkwv4cn7XR54.png" />
              <span class="author-name">{{ blogDetail.author }}</span>
              <span class="meta-separator">·</span>
              <span class="publish-date">{{ formatDateEN(blogDetail.date) }}</span>
              <span class="meta-separator">·</span>
              <span class="read-time">{{ blogDetail.reading_time }}</span>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>

    <!-- 文章内容区域 - 左右布局 -->
    <div class="article-section">
      <div class="article-container">
        <!-- 左侧主要内容 -->
        <div class="main-content">
          <!-- 文章介绍段落 -->
          <div class="article-intro">
            <p class="intro-text">{{ blogDetail.article_guide }}</p>
          </div>
          <div class="article-video" v-if="blogDetail.youtube_link">
              <iframe width="100%" :src="'https://www.youtube.com/embed/'+blogDetail.youtube_link+'?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1'"  frameborder="0" allowfullscreen></iframe>
          </div>
          <!-- 展会详情 -->
          <div class="blog-article-details" v-html="blogDetail.content"></div>
        </div>

        <!-- 右侧边栏 - 基于Figma设计 52:8225 -->
        <aside class="sidebar">
          <!-- Hot Reads 热门文章区域 -->
          <div class="hot-reads-widget">
            <h3 class="widget-title">{{ contentDetail.hot_reads_text }}</h3>
            <div class="hot-reads-list">
              <template v-for="(item, index) in blogList" :key="index">
                <NuxtLink :to="'/blog/'+item.slug" target="_blank" v-if="index<=5"> 
                <article class="hot-read-item">
                  <div class="article-thumbnail-container">
                    <NuxtImg :src="item.first_image_url"  class="article-thumbnail" />
                  </div>
                  <div class="article-info">
                    <h4 class="article-title">{{ item.title }}</h4>
                    <div class="article-meta">
                      <span class="article-date">{{ item.date }}</span>
                    </div>
                  </div>
                </article>
              </NuxtLink>
              </template>
            </div>
          </div>

          <!-- 产品目录推广区域 -->
          <div class="catalog-widget">
            <h3 class="widget-title">{{ contentDetail.interested_in_best_stone_machine_catalog_text }}</h3>
            <div class="product-categories">
              <template v-for="(item, index) in productList" :key="index">
                <a :href="'/Products/'+item.category_value" class="product-category-link" target="_blank" v-if="index<=4">
                  <div class="category-icon">
                    <svg style="width:100%;height:100%;" viewBox="0 0 22 22" preserveAspectRatio="none" width="100%" height="100%">
                      <use href="#svg-1021927419_1735"></use>
                      </svg>
                  </div>
                  <h4 class="category-name">{{ item.category_name }}</h4>
                </a>
                 </template>
              </div>
           
            <a href="/Products" class="learn-more-link" target="_blank">{{ contentDetail.learn_more_text }}</a>
          </div>

          <!-- 在线聊天功能区域 -->
          <div class="chat-widget">
            <div class="chat-background">
              <div class="chat-content">
                <div class="chat-header">
                  <p class="chat-greeting">{{contentDetail.chat_online_dialog_head_title}}</p>
                  <p class="chat-action">{{ contentDetail.chat_online_dialog_head_subtitle }}</p>
                </div>
              </div>
            </div>
            <div class="chat-profile-section">
              <div class="profile-container">
                <div class="profile-avatar">
                  <NuxtImg src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/PZaASQwcgVKtL1LRgszQtSdlJU.png" />
                </div>
                <div class="profile-info">
                  <p class="profile-name">{{ contentDetail.chat_online_dialog_body_title }}</p>
                  <div class="profile-message" v-html="contentDetail.chat_online_dialog_body_description"></div> 
                </div>
              </div>
              <div class="chat-actions">
                <a class="whatsapp-chat-btn" href="https://api.whatsapp.com/send?phone=8619859013937&text=Hi%20Lizzy%2CI%20want%20to%20know%20more%20detail%20information">{{ contentDetail.chat_online_dialog_btn_whatapp_text}}</a>
                <a href="./contact" class="contact-us-btn" target="_blank">{{ contentDetail.chat_online_dialog_btn_contact_us_text }}</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- 相关文章推荐区域 - 基于Figma设计 52:9148 -->
    <div class="similar-ideas-section">
      <div class="similar-ideas-container">
        <div class="similar-ideas-header">
          <h2>{{ contentDetail.similar_ideas_to_stimulate_your_creativity_text }}</h2>
        </div>
        
        <div class="similar-ideas-grid">
          <!-- 文章卡片 1 -->
           <template v-for="(item, index) in blogList" :key="index">
          <div class="idea-card" v-if="index >5">
            <NuxtLink :to="'/blog/'+item.slug" target="_blank" class="idea-link">
              <div class="idea-image">
                <NuxtImg :src="item.first_image_url"  />
              </div>
              <div class="idea-content">
                <p>{{ item.title }}</p>
              </div>
            </NuxtLink>
          </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Other Blogs 导航区域 - 基于Figma设计 52:9149 -->
    <div class="other-blogs-section">
      <div class="other-blogs-container">
        <div class="other-blogs-header">
          <div class="other-blogs-title">
            <h2>{{contentDetail.other_blogs_text}}</h2>
          </div>
          <div class="other-blogs-subtitle">
            <p>{{contentDetail.are_you_looking_for_more_new_information_blogs_text}}</p>
          </div>
        </div>
        
        <div class="other-blogs-navigation">
          <!-- Previous Blogs 按钮 -->
          <NuxtLink class="blog-nav-link previous-link" :to="preblog&&preblog.id?'/blog/'+preblog.slug:'/'" target="_blank">
            <div class="nav-icon-container">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20 24L12 16L20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="nav-text-container">
              <p>{{ contentDetail.previous_blogs_text }}</p>
            </div>
          </NuxtLink>

          <!-- Next Blogs 按钮 -->
          <NuxtLink class="blog-nav-link next-link" :to="nextblog&&nextblog.id?'/blog/'+nextblog.slug:'/'" target="_blank">
            <div class="nav-text-container">
              <p>{{ contentDetail.next_blogs_text }}</p>
            </div>
            <div class="nav-icon-container">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12 8L20 16L12 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { formatDateEN } from '~/utils/dateUtils';

// Props
const emit = defineEmits(['headdata-loaded']);
const props = defineProps({
  slug: {
      type: String,
      required: true
  },
  contentDetail:{
    type: Object,
    default: () => ({})
  }
})

const getLastPathSegment = (url)=>{
  if (!url) return ''
  try {
    const u = new URL(url.trim())
    const clean = u.pathname.replace(/^\/+|\/+$/g, '')
    if (!clean) return ''
    const parts = clean.split('/')
    return parts[parts.length - 1]
  } catch {
    const s = String(url).trim().replace(/[#?].*$/, '').replace(/^\/+|\/+$/g, '')
    if (!s) return ''
    const parts = s.split('/')
    return parts[parts.length - 1]
  }
}

let blogDetail = ref({})
 const { data: blogDetailRes, pending, error } = await useApi('/blogs?filters[slug][$eq]='+props.slug)
// // console.log('/blogs?filters[slug][$eq]='+props.slug)
watch(error, (newError) => {
  // console.log(newError)
     throw createError({ statusCode: 404, statusMessage: '文章不存在' });
})
watch(blogDetailRes, (newPosts) => {
  
    if (newPosts) {

      // console.log('blog',newPosts)
        let data = newPosts.data[0]
        if(data.youtube_link){
          data.youtube_link = getLastPathSegment(data.youtube_link)
        }
        
        blogDetail.value = data
        // 通知父组件数据已加载
        emit('headdata-loaded', data);
    }

  

}, { immediate: true })

const blogList = ref([])
const { data: blogListRes, blogListPending, blogListError } = await useApi('/blogs?pagination[page]=1&pagination[pageSize]=10&sort[0]=date:desc')

watch(blogListRes, (newPosts) => {
    if (newPosts) {
        // console.log('nlist',newPosts)
        let data = newPosts.data
        data.forEach(item => {
            item.date = formatDateLong(item.date)
        })
        blogList.value = data
    }

}, { immediate: true })

const productList = ref([])
const { data: productListRes, productListPending, productListError } = await useApi('/product-categories?filters[parent_category_value][$eq]=Products&populate[fields]=category_value,category_name')

watch(productListRes, (newPosts) => {
    if (newPosts) {
        // console.log('plist',newPosts)
        let data = newPosts.data
        data = data.sort((a, b) => a.sort - b.sort)
        productList.value = data
    }

}, { immediate: true })

const menuItems = ref([])
const { data: menuItemsRes, menuItemsPending, menuItemsError } = await useApi('/product-categories?filters[parent_category_value][$eq]=blog&populate[fields]=category_value,category_name')

watch(menuItemsRes, (newPosts) => {
    if (newPosts) {
        // console.log('menuItems',newPosts)
        menuItems.value = newPosts.data
    }
}, { immediate: true })


const preblog = ref({})
const { data: preblogRes, preblogPending, preblogError } = await useApi('/blogs?pagination[page]=1&pagination[pageSize]=1&sort[0]=id:desc&filters[id][$lt]='+blogDetail.value.id)

watch(preblogRes, (newPosts) => {
    if (newPosts) {
        // console.log('prelist',newPosts)
        let data = newPosts.data[0]
        preblog.value = data
    }

}, { immediate: true })

const nextblog = ref({})
const { data: nextblogRes, nextblogPending, nextblogError } = await useApi('/blogs?pagination[page]=1&pagination[pageSize]=1&sort[0]=id:asc&filters[id][$gt]='+blogDetail.value.id)

watch(nextblogRes, (newPosts) => {
    if (newPosts) {
        // console.log('nextlist',newPosts)
        let data = newPosts.data[0]
        nextblog.value = data
    }

}, { immediate: true })


</script>

<style scoped lang="scss">
/* 主容器 - 对应Figma节点 52:8205 */
.framer-jvgxp0 {
  width: 100%;
  height: 392.34px;
  position: relative;
  overflow: hidden;
}

/* Banner容器 */
.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, #ebf5ff 0%, #f7f4fd 50%, #fff6f7 100%);
}

/* 内容覆盖层 */

.content-container {
  width: 100%;
  max-width:1258px;
  margin:0 auto;
  padding: 0 40px;
  text-align: center;
  color: white;
}
/* Hero内容 */
.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  padding: 40px 0 100px;
}

/* 左侧内容 */
.hero-left {
  flex: 1;
  text-align: left;
}

.hero-main-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 100px;
  color: #000;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap:2px;
  font-size: 1rem;
  color: rgba(41, 41, 41, 0.8);
  flex-wrap: wrap;
  img{
    width:36px;
    margin-right:20px;
  }
  &.is-mobile{
    display:none;
  }
}

.author-name {
  font-weight: 300;
  color: rgba(41, 41, 41, 0.8);
}

.meta-separator {
  color: rgba(41, 41, 41, 0.8);
  font-weight: 200;
}

.publish-date,
.read-time {
  font-weight: 300;
}

/* 右侧图片 */
.hero-right {
  flex-shrink: 0;
}

.hero-image-container {
  width: 444px;
  height: 263px;
  border-radius: 16px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.05);
}

/* 发布徽章 */
.badge-container {
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
}

.published-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
}

.badge-icon {
  flex-shrink: 0;
}

.badge-text {
  color: white;
}

/* 主标题 */
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.title-accent {
  color: #F2CB68;
  display: inline-block;
}

/* Hero描述 */
.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  color: white;
}

/* 文章区域 */
.article-section {
  padding: 80px 20px;
  background: #ffffff;
  min-height: 100vh;
}

.article-container {
  max-width: 1262px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: start;
}

/* 左侧主要内容 */
.main-content {
  background: white;
  padding: 0;
}

/* youtube 容器 */
.article-video{
  width: 100%;
  iframe{
    width: 100%;
    height:450px;
  }
}

/* 文章介绍 */
.article-intro {
  position:relative;
  margin-bottom: 42px;
  padding: 52px 0 52px 40px;
  &:before{
    content:"";
    position:absolute;
    left:0;
    top:-8px;
    width:100%;
    height:100%;
    opacity:0.2;
    width:78px;
    height:66px;
    background:url(https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/UkLUnElDYcVwnnrmvgIyRJDNjI.webp) no-repeat;
    background-size:100% auto;
  }
}

.intro-text {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.17;
  color: #999999;
  max-width: 800px;
  margin: 0 auto;
}

/* 章节标题 */
.section-title {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 18px;
}

.subsection-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  color: #000000;
  margin-bottom: 18px;
}

/* 展会详情 */
.blog-article-details{
  max-width: 788px;
}
.exhibition-details {
  margin-bottom: 42px;
}

.details-list {
  margin-bottom: 18px;
}

.detail-item {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  margin-bottom: 8px;
}

.detail-item strong {
  font-weight: 400;
  color: #666666;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  margin-bottom: 8px;
  position: relative;
}

/* 行业挑战表格 */
.industry-challenges {
  margin-bottom: 42px;
}

.challenges-table {
  margin-top: 18px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  overflow: hidden;
}

.table-header th {
  background: #F7F7F7;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  text-align: left;
  border-bottom: 1px solid #E8E8E8;
}

.challenge-type {
  padding: 11px 10px;
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  border-top: 1px solid #E8E8E8;
  border-right: 1px solid #E8E8E8;
  vertical-align: top;
  width: 50%;
}

.challenge-description {
  padding: 11px 10px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  border-top: 1px solid #E8E8E8;
  vertical-align: top;
}

/* DINOSAW解决方案 */
.dinosaw-solutions {
  margin-bottom: 42px;
}

.solutions-intro {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 18px;
}

.equipment-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.equipment-item {
  margin-bottom: 18px;
}

.equipment-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  color: #439DF1;
  margin-bottom: 8px;
}

.equipment-description {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  color: #666666;
}

/* DDX EasySTONE Technology Integration */
.technology-integration {
  margin-bottom: 42px;
}

.software-advantages-list,
.agency-benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 18px;
}

.software-advantages-list li,
.agency-benefits-list li {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.56;
  color: #666666;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.software-advantages-list li::before,
.agency-benefits-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  font-weight: 300;
  color: #666666;
}

.agency-intro {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 18px;
}

/* Customer Application Cases */
.customer-cases {
  margin-bottom: 42px;
}

.case-testimonial {
  margin-bottom: 26px;
}

.testimonial-quote {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  font-style: italic;
  margin: 0 0 8px 0;
  padding: 0;
  border: none;
}

.testimonial-author {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  font-style: normal;
  display: block;
}

/* Join DINOSAW */
.join-dinosaw {
  margin-bottom: 42px;
}

.join-info {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #666666;
  margin-bottom: 8px;
}

.about-paragraph {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 18px;
}

/* 右侧边栏 - 基于Figma设计 */
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 65px 0 40px;
  width: 340px;
}

/* Hot Reads 热门文章区域 */
.hot-reads-widget {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  width: 324px;
  border:1px solid rgba(136, 136, 136, 0.1);
}

.widget-title {
  font-family: Inter;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 24px;
  text-align: left;
}

.hot-reads-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hot-read-item {
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.hot-read-item:hover {
  transform: translateY(-1px);
}

.article-thumbnail-container {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: 2px;
  overflow: hidden;
}

.article-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
}

.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 2px 0;
}

.article-title {
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.14;
  color: #000000;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.article-date {
  font-family: Inter;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.17;
  color: #454545;
}

/* 产品目录推广区域 */
.catalog-widget {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  width: 324px;
  border:1px solid rgba(136, 136, 136, 0.1);
}

.catalog-widget .widget-title {
  font-family: Inter;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 24px;
  text-align: left;
}

.product-categories {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.product-category-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background: #F6F6F6;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.category-icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
}

.category-name {
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
  color: #000000;
}

.learn-more-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: Inter;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.18;
  color: #439DF1;
  text-decoration: none;
  transition: all 0.2s ease;
}

.learn-more-link:hover {
  color: #2563eb;
  transform: translateY(-1px);
}

/* 在线聊天功能区域 */
.chat-widget {
  background: #ffffff;
  border-radius: 16px;
  width: 324px;
  overflow: hidden;
  border:1px solid rgba(136, 136, 136, 0.1);
}

.chat-background {
  position: relative;
  height: 123px;
  background-image: url('https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/CMFVUQaDK9K6lMd5ekiLM6Po.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.chat-greeting {
  font-family: Inter;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.19;
  color: #0045A6;
  margin: 0 0 8px 0;
}

.chat-action {
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
  color: #0045A6;
  margin: 0;
}

.chat-profile-section {
  padding: 24px;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.profile-avatar {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-family: Inter;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.18;
  color: #000000;
  margin: 0 0 8px 0;
}

.profile-message {
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.14;
  color: #3D3D3D;
  margin: 0;
}

.chat-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.whatsapp-chat-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: #439DF1;
  color: #ffffff;
  border-radius: 100px;
  text-decoration: none;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.14;
  transition: all 0.2s ease;
}

.whatsapp-chat-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.contact-us-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: transparent;
  color: #000000;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  text-decoration: none;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.14;
  transition: all 0.2s ease;
}

.contact-us-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

/* 主文章 */
.main-article {
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.article-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.article-title {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 0.95rem;
  flex-wrap: wrap;
}

.meta-item {
  font-weight: 500;
}

/* 文章主体 */
.article-body {
  margin-bottom: 40px;
}

.featured-image-container {
  margin-bottom: 40px;
}

.featured-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.article-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #374151;
}

.default-content p {
  margin-bottom: 24px;
}

/* 文章底部 */
.article-footer {
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
}

/* 标签区域 */
.tags-section {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.tags-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}

.tags-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tag:hover {
  background: #e2e8f0;
  color: #334155;
}

/* 分享区域 */
.share-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.share-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}

.share-buttons {
  display: flex;
  gap: 12px;
}

.share-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
  text-decoration: none;
}

.share-button.facebook {
  background: #1877f2;
  color: white;
}

.share-button.twitter {
  background: #1da1f2;
  color: white;
}

.share-button.linkedin {
  background: #0077b5;
  color: white;
}

.share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 相关文章区域 */
.related-section {
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.related-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 32px;
  text-align: center;
}

.related-articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.related-article {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
}

.related-article:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

.related-image-container {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.related-article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-article:hover .related-article-image {
  transform: scale(1.05);
}

.related-article-content {
  padding: 24px;
}

.related-article-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.4;
}

.related-article-excerpt {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.related-article-date {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 相关文章推荐区域 - 基于Figma设计 52:9148 */
.similar-ideas-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background: #ffffff;
}

.similar-ideas-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  width: 100%;
  max-width: 1239px;
}

.similar-ideas-header {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  max-width: 1217px;
}

.similar-ideas-header h2 {
  font-family: Inter;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
  color: #000000;
  text-align: left;
  margin: 0;
}

.similar-ideas-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 1338px;
  flex-wrap: wrap;
}

.idea-card {
  background: #F6F6F6;
  border-radius: 24px;
  width: 297px;
  height: 326px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
  transition: all 0.3s ease;
}

.idea-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.idea-image {
  width: 100%;
  height: 196px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.idea-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.idea-content {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex: 1;
  padding:0 22px 22px;
  width: 100%;
}

.idea-content p {
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #3D3D3D;
  text-align: center;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Other Blogs 导航区域 - 基于Figma设计 52:9149 */
.other-blogs-section {
  background: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.other-blogs-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 1263px;
  height: 194px;
}

.other-blogs-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 80px;
}

.other-blogs-title {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  height: 36px;
}

.other-blogs-title h3 {
  font-family: Inter;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  color: #000000;
  margin: 0;
}

.other-blogs-subtitle {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  height: 14px;
}

.other-blogs-subtitle p {
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  line-height: 1;
  color: #000000;
  margin: 0;
}

.other-blogs-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 98px;
}

.blog-nav-link {
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
  font-size:20px;
  font-weight:500;
  transition: all 0.3s ease;
  padding: 20px;
}

.nav-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: #6b7280;
  transition: color 0.3s ease;
}

.blog-nav-link:hover .nav-icon-container {
  color: #374151;
}

.nav-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 56px;
}

.nav-text-container h4 {
  font-family: Inter;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.18;
  color: #000000;
  text-align: center;
  margin: 0;
  transition: color 0.3s ease;
}

.blog-nav-link:hover .nav-text-container h4 {
  color: #1f2937;
}

.previous-link .nav-text-container {
  align-items: flex-start;
  text-align: left;
  width: 157px;
}

.next-link .nav-text-container {
  align-items: flex-end;
  text-align: right;
  width: 116px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .content-container {
    padding: 0 24px;
  }
  
  .article-container {
    display:block;
    // grid-template-columns: 1fr;
    // gap: 40px;
  }
  
  .sidebar-content {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .banner-container {
    height: auto;
    min-height: 320px;
  }
  
  .content-container {
    padding: 0 16px;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 10px;
    padding: 60px 0;
    text-align: center;
  }
  
  .hero-left {
    text-align: center;
  }
  
  .hero-main-title {
    font-size: 2rem;
    margin-bottom: 24px;
  }
  
  .hero-image-container {
    width: 100%;
    max-width: 400px;
    height: 240px;
    margin: 0 auto;
  }
  
  .article-section {
    padding: 40px 16px;
  }
  
  .article-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .article-intro {
    padding: 32px 0;
  }
  
  .intro-text {
    font-size: 16px;
    max-width:100%;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .subsection-title {
    font-size: 20px;
  }
  
  .comparison-table {
    font-size: 14px;
  }
  
  .challenge-type,
  .challenge-description {
    padding: 8px;
  }
  
  .equipment-title {
    font-size: 20px;
  }
  
  .sidebar {
    position: static;
    width:auto;
  }
  
  .sidebar-content {
    padding: 24px;
  }
  
  .related-articles-list {
    gap: 16px;
  }
  
  .related-article {
    flex-direction: column;
    gap: 12px;
  }
  
  .related-image-container {
    width: 100%;
    height: 120px;
  }
  
  /* 相关文章推荐区域响应式 - 根据Figma设计 */
  .similar-ideas-section {
    width: 100%;
    height: auto;
    padding: 0 0 40px;
    background: #FFFFFF;
  }
  
  .similar-ideas-container {
    width: 100%;
    max-width: 375px;
    height: auto;
    margin: 0 auto;
    padding: 0;
    gap: 40px;
    flex-direction: column;
    align-items: center;
  }
  
  /* 网格区域移到顶部 */
  .similar-ideas-grid {
    width: 100%;
    max-width: 330px;
    height: auto;
    margin: 0;
    padding: 0 23px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 22px 10px;
    justify-content: center;
    align-items: flex-start;
  }
  
  /* 标题移到底部 */
  .similar-ideas-header {
    width: 100%;
    max-width: 375px;
    height: 43px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .similar-ideas-header h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1666666666666667em;
    text-align: center;
    color: #000000;
    margin: 0;
    max-width: 271px;
  }
  
  .idea-card {
    width: 160px;
    height: 194px;
    background: #F6F6F6;
    border-radius: 24px;
    margin: 0;
  }
  
  .idea-link {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    gap: 17px;
  }
  
  .idea-image {
    width: 158px;
    height: 100px;
    border-radius: 24px 24px 0 0;
    overflow: hidden;
    margin: 0;
    flex-shrink: 0;
  }
  
  .idea-image img {
    width: 158px;
    height: 100px;
    margin: 0;
    background-size: cover;
    background-position: center;
  }
  
  .idea-content {
    width: 150px;
    height: auto;
    padding: 4px;
    margin: 4px auto 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .idea-content p {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25em;
    text-align: center;
    color: #3D3D3D;
    margin: 2px 1px;
    max-width: 148px;
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
  }
  
  /* 确保4个卡片的布局 */
  .idea-card:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  
  .idea-card:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }
  
  .idea-card:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }
  
  .idea-card:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }
  
  /* Other Blogs 导航区域响应式 */
  .other-blogs-section {
    width:324px;
    margin:0 auto;
    padding: 30px 0;
  }
  
  .other-blogs-container {
    height: auto;
    gap: 20px;
  }
  
  .other-blogs-header {
    height: auto;
    gap: 12px;
  }
  
  .other-blogs-title h3 {
    font-size: 24px;
  }
  
  .other-blogs-subtitle p {
    font-size: 12px;
  }
  
  .other-blogs-navigation {
    flex-direction: column;
    gap: 16px;
    height: auto;
  }
  
  .blog-nav-link {
    width: 100%;
    max-width: 320px;
    height: 50px;
    padding: 16px;
    color:#3d3d3d !important;
  }
  
  .nav-text-container h4 {
    font-size: 18px;
  }
  
  .previous-link,
  .next-link {
    justify-content: center;
  }
  
  .previous-link .nav-text-container,
  .next-link .nav-text-container {
    align-items: center;
    text-align: center;
    width: auto;
  }
}

@media (max-width: 480px) {
  .hero-main-title {
    font-size: 1.75rem;
  }
  
  .hero-meta {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    &.is-pc{
      display:none;
    }
    &.is-mobile{
      display:flex;
      margin-top:10px;
      justify-content:center;
    }
  }
  
  .article-intro {
    padding: 24px 0;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .subsection-title {
    font-size: 18px;
  }
  
  .comparison-table {
    font-size: 12px;
  }
  
  .challenge-type,
  .challenge-description {
    padding: 6px;
  }
  
  .equipment-title {
    font-size: 18px;
  }
  
  .sidebar-title {
    font-size: 1.25rem;
  }
  
  .tags-cloud {
    gap: 6px;
  }
  
  .tag-item {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
}
</style>