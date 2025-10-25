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
    <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
  </div>
</template>

<script setup>
// 获取路由参数
const route = useRoute()
const slug = route.params.slug

const { contentDetail, isLoaded } = useContentDetail()
// // console.log('contentDetail', contentDetail)
const handleHead = (headData) => {
    // console.log('Product data received from component:', headData);
    
    // 设置页面 meta 标签
    if (headData && (headData.meta_title || headData.h1_page_inner_title)) {
        useHead(() => ({
            title: headData.meta_title || headData.h1_page_inner_title,
            meta: [
                {
                    name: 'description',
                    content: headData.meta_description || headData.product_overview || ''
                }
            ]
        }));
    }
}

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 判断是否为 news-events 或 industry-news
const isNewsOrEvents = computed(() => {
  return slug === 'news-events' || slug === 'industry-news'
})

</script>

<style scoped>
/* 页面特定样式可以在这里添加 */

</style>