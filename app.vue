<template>
  <div>
    
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <NuxtPage /> -->
    <NuxtPage />
  </div>
</template>
<style>
/* 关键样式直接写在这里，确保立即加载 */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

/* 防止闪烁的基础样式 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
