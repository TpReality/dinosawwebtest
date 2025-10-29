<template>
  <div class="main">
    <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
    <!-- 条件渲染不同的布局组件 -->
    <BlogNewsLayout 
      v-if="isNewsOrEvents"
      :slug="slug"
      :contentDetail="contentDetail"
      @headdata-loaded="handleHead"
    />
    
    <BlogDefaultLayout 
      v-else
      :slug="slug"
      :contentDetail="contentDetail"
      @headdata-loaded="handleHead"
    />
    <Lang :contentDetail="contentDetail" />
    <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
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
const { contentDetail, isLoaded, initializeContentDetail } = useContentDetail();

// 在服务端和客户端首次加载时都执行数据获取
await initializeContentDetail();
const handleHead = (headData) => {
    // console.log('Product data received from component:', headData);
    let useHeadData = {
        title: headData.meta_title || headData.title,
        meta: [
            {
                name: 'description',
                content: headData.meta_description || headData.article_guide
            }
        ]
    }
    
    if(!isNewsOrEvents.value){
       let list = [{
            name:'og:type',
            content: 'website'
        },
        {
            name:'og:title',
            content: headData.title
        },
        {
            name:'og:description',
            content: headData.article_guide
        },
        {
            name:'og:image',
            content: headData.first_image_url
        }]
        
        useHeadData.meta.push(...list)
    }
    // 设置页面 meta 标签
    if (headData && (headData.meta_title || headData.title)) {
        useHead(() => (useHeadData));
    }
}

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()



</script>

<style scoped>
/* 页面特定样式可以在这里添加 */

</style>