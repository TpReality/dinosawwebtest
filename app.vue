<template>
  <div>
    
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <NuxtPage /> -->
    <NuxtPage />
  </div>
</template>
<script setup>
const { public: { gtmId } } = useRuntimeConfig()

// 仅在生产环境并且配置了 gtmId 时启用
const enableGTM = import.meta.env.PROD && !!gtmId

if (enableGTM) {
  useHead({
    // 注入到 <head> 的 GTM 主脚本
    script: [
      {
        key: 'gtm-script',
        tagPosition: 'head',
        defer: true,
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');`
              }
            ],
            // 注入到 <body> 开始处的 noscript 片段（必须是 bodyOpen）
            noscript: [
              {
                key: 'gtm-noscript',
                tagPosition: 'bodyOpen',
                innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
              }
            ]
          })
        }

// Microsoft Clarity
const clarityId = 's91g3vmazj'
const enableClarity = import.meta.env.PROD && !!clarityId
if (enableClarity) {
  useHead({
    script: [
      {
        key: 'clarity-script',
        tagPosition: 'head',
        children: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");`
      }
    ]
  })
}
// 全站通用 Meta（Yandex、Bing、Robots）
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0' },
    { name: 'yandex-verification', content: '88b18b97270c4899' },
    { name: 'msvalidate.01', content: '14B67632D3503492BCE4B4C174F71E8F' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
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
