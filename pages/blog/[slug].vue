<template>
  <div class="main">
    <DinosawHeader />
    <!-- 条件渲染不同的布局组件 -->
    <BlogNewsLayout 
      v-if="isNewsOrEvents"
      :breadcrumb-text="breadcrumbText"
      :last-updated="lastUpdated"
      :main-title="mainTitle"
      :sub-title="subTitle"
      :description="description"
      :processing-case="processingCase"
    />
    
    <BlogDefaultLayout 
      v-else
      :breadcrumb-text="breadcrumbText"
      :published-date="publishedDate"
      :main-title="mainTitle"
      :sub-title="subTitle"
      :description="description"
      :article-title="articleTitle"
      :author="author"
      :category="category"
      :featured-image="featuredImage"
      :default-content="defaultContent"
      :tags="tags"
      :related-articles="relatedArticles"
    />
    <ContactType />
        <WhatsApp />
        <DinosawFooter />
  </div>
</template>

<script setup>
// 获取路由参数
const route = useRoute()
const slug = route.params.slug

// 判断是否为 news-events 或 industry-news
const isNewsOrEvents = computed(() => {
  return slug === 'news-events' || slug === 'industry-news'
})

// 根据路由设置不同的内容
const breadcrumbText = computed(() => {
  if (slug === 'news-events') return 'News & Events'
  if (slug === 'industry-news') return 'Industry News'
  return 'Blog'
})

const lastUpdated = ref('2025-09-05')
const publishedDate = ref('2025-09-05')

const mainTitle = computed(() => {
  if (slug === 'news-events') return 'Latest News &'
  if (slug === 'industry-news') return 'Industry'
  return 'Explore Our'
})

const subTitle = computed(() => {
  if (slug === 'news-events') return 'Events Updates'
  if (slug === 'industry-news') return 'News & Insights'
  return 'Latest Blog Posts'
})

const description = computed(() => {
  if (slug === 'news-events') {
    return 'Stay updated with the latest news, events, and company announcements from Dinosaw Stone Machinery.'
  }
  if (slug === 'industry-news') {
    return 'Get the latest industry insights, trends, and technological developments in stone processing machinery.'
  }
  return 'Discover insights, tutorials, and industry knowledge from our expert team.'
})

// News/Events 布局的数据
const processingCase = ref([
  {
    title: 'Recent',
    subTitle: 'News & Events',
    cases: [
      {
        imageClass: 'cement-case',
        titleLines: [
          'Company News: New Factory',
          'Expansion and Technology Upgrade'
        ],
        date: '5/14/24'
      },
      {
        imageClass: 'marble-case',
        titleLines: [
          'Trade Show: International Stone',
          'Fair 2024 Participation Success'
        ],
        date: '12/11/24'
      },
      {
        imageClass: 'granite-case',
        titleLines: [
          'Product Launch: Next Generation',
          'CNC Wire Saw Technology'
        ],
        date: '8/10/24'
      },
      {
        imageClass: 'cement-case',
        titleLines: [
          'Industry Award: Best Innovation',
          'in Stone Processing Equipment'
        ],
        date: '3/22/24'
      },
      {
        imageClass: 'marble-case',
        titleLines: [
          'Partnership News: Strategic Alliance',
          'with European Distributors'
        ],
        date: '1/15/24'
      },
      {
        imageClass: 'granite-case',
        titleLines: [
          'Technology Update: AI Integration',
          'in CNC Machine Operations'
        ],
        date: '11/8/23'
      }
    ]
  }
])

// 默认布局的数据
const articleTitle = computed(() => {
  if (slug === 'news-events') return 'Latest News & Events'
  if (slug === 'industry-news') return 'Industry News & Insights'
  return 'Welcome to Our Blog'
})

const author = ref('Dinosaw Team')
const category = computed(() => {
  if (slug === 'news-events') return 'News & Events'
  if (slug === 'industry-news') return 'Industry News'
  return 'General'
})

const featuredImage = ref('https://framerusercontent.com/images/1IQhbMthgQhIHvbOCcL313GnGU.webp')

const defaultContent = computed(() => {
  if (slug === 'news-events') {
    return 'Stay informed about the latest developments at Dinosaw Stone Machinery. From new product launches to industry events, we keep you updated on everything that matters in the stone processing world.'
  }
  if (slug === 'industry-news') {
    return 'Explore the latest trends, technologies, and insights in the stone processing industry. Our expert analysis helps you stay ahead of the curve in this rapidly evolving field.'
  }
  return 'This is the default blog content. You can customize this by passing content through the slot or props.'
})

const tags = computed(() => {
  if (slug === 'news-events') return ['News', 'Events', 'Company Updates', 'Announcements']
  if (slug === 'industry-news') return ['Industry', 'Technology', 'Trends', 'Analysis']
  return ['Technology', 'Stone Processing', 'CNC Machines']
})

const relatedArticles = ref([
  {
    id: 1,
    title: 'How to Choose the Right CNC Wire Saw Machine',
    excerpt: 'A comprehensive guide to selecting the perfect wire saw machine for your stone processing needs.',
    image: 'https://framerusercontent.com/images/1IQhbMthgQhIHvbOCcL313GnGU.webp',
    date: '2025-08-15'
  },
  {
    id: 2,
    title: 'Maintenance Tips for Stone Processing Equipment',
    excerpt: 'Essential maintenance practices to keep your stone machinery running at peak performance.',
    image: 'https://framerusercontent.com/images/1IQhbMthgQhIHvbOCcL313GnGU.webp',
    date: '2025-08-10'
  },
  {
    id: 3,
    title: 'Latest Trends in Stone Processing Technology',
    excerpt: 'Discover the cutting-edge technologies shaping the future of stone processing industry.',
    image: 'https://framerusercontent.com/images/1IQhbMthgQhIHvbOCcL313GnGU.webp',
    date: '2025-08-05'
  }
])

// SEO Meta
useHead({
  title: computed(() => `${articleTitle.value} | Dinosaw Stone Machinery`),
  meta: [
    {
      name: 'description',
      content: description.value
    },
    {
      property: 'og:title',
      content: computed(() => `${articleTitle.value} | Dinosaw Stone Machinery`)
    },
    {
      property: 'og:description',
      content: description.value
    },
    {
      property: 'og:image',
      content: featuredImage.value
    }
  ]
})
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style>