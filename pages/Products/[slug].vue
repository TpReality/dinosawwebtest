<template>
    <div class="main">
        <DinosawHeader />
        
        <!-- 特殊机器类型的样式 -->
        <ProductSpecialMachineLayout  
            v-if="isSpecialMachine"
            :slug="slug"
        />
        
        <!-- 非特殊机器类型的样式 -->
        <ProductDefaultProductLayout  
            v-else
            :slug="slug"
        />
        
        <ContactType />
        <WhatsApp />
        <DinosawFooter />
    </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// 定义需要使用当前页面样式的机器类型
const machineTypes = [
    'wire-saw-machine',
    'circle-saw-machine', 
    'drilling-and-engraving-machine',
    'grinding-and-polishing-machine',
    'mining-and-quarry-machine',
    'profiling-machine',
    'other-machine',
    'diamond-tools'
];

// 检查当前slug是否在机器类型列表中
const isSpecialMachine = computed(() => {
    return machineTypes.includes(slug);
});



const productTitle = computed(() => {
    return slug === 'profiling-machine' ? 'Profiling Machine' : 'Product';
});

console.log('Current slug:', slug);
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

</style>