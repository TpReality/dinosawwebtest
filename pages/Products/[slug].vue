<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
        
        <!-- 只有在 isSpecialMachine 状态确定后才渲染对应的布局组件 -->
        <template v-if="isLayoutReady">
            <!-- 特殊机器类型的样式 -->
            <ProductSpecialMachineLayout  
                v-if="isSpecialMachine"
                :slug="slug"
                :topProduct="topProduct"
                @headdata-loaded="handleHead"
            />
            
            <!-- 非特殊机器类型的样式 -->
            <ProductDefaultProductLayout  
                v-else
                :slug="slug"
                :topProduct="topProduct"
                :contentDetail="contentDetail"
                @headdata-loaded="handleHead"
            />
        </template>
        
        <!-- 加载状态 -->
        <div v-else class="loading-container">
            <div class="loading-spinner"></div>
        </div>
        
        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

// 定义需要使用当前页面样式的机器类型
const machineTypes = [
    'wire-saw-machine',
    'circle-saw-machine', 
    'drilling-and-engraving-machine',
    'grinding-and-polishing-machine',
    'mining-and-quarry-machine',
    'profiling-machine',
    'other-machine',
    'diamond-tools',
    'other-industrial-machine'
];
// 检查当前slug是否在机器类型列表中
const isSpecialMachine = computed(() => {
    return machineTypes.includes(slug);
});

// 添加布局就绪状态，确保 slug 已经确定后再渲染组件
const isLayoutReady = computed(() => {
    return slug && slug !== '';
});

const topProduct = ref([])
const { data: topProductDetailRes, topPending, topError } = await useApi('/product-categories?filters[parent_category_value][$eq]=Products&populate=all')
watch(topProductDetailRes, (newPosts) => {
    if (newPosts) {
        let data = newPosts.data
        
        // 根据 sort 字段从小到大排序
        if (Array.isArray(data)) {
            data = data.sort((a, b) => {
                // 确保 sort 字段存在，如果不存在则视为最大值
                const sortA = a.sort !== undefined ? a.sort : Number.MAX_SAFE_INTEGER
                const sortB = b.sort !== undefined ? b.sort : Number.MAX_SAFE_INTEGER
                return sortA - sortB
            })
        }
        
        topProduct.value = data
    }
}, { immediate: true })

// 处理子组件传递的产品数据并设置 meta 标签
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


// console.log('Current slug:', slug);
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
}

.default-layout {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
}

.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    width: 100%;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>