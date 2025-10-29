<template>
  <div id="gt_float_wrapper" style="position:fixed;bottom:20px;left:20px;z-index:999999;" v-if="contentDetail">
    <div class="gt_float_switcher notranslate">

      <div class="gt_options" :class="isOptionsVisible ? 'gt-open' : ''" :style="{ display: isOptionsVisible ? 'block' : 'none' }">
        <template v-for="localeOption in availableLocales" :key="localeOption.code">
          <NuxtLink
            :to="switchLocalePath(localeOption.code)" class="nturl" :data-gt-lang="localeOption.code"
            @click.prevent="onSwitchLocale(localeOption.code)" :class="{ 'gt-current': localeOption.code === locale }">
            <img :src="localeOption.code == 'zh'?'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/d941f50c_9ab3_46c8_959c_311384662879_d929f146f1.png':getFlagUrl(localeOption.code)" :alt="localeOption.name">
            <!-- {{ switchLocalePath(localeOption.code) }} -->
            {{ localeOption.name }}
          </NuxtLink>
        </template>
      </div>

      <div class="gt-selected" @click="toggleOptions">
        <div class="gt-current-lang">
        <img :src="locale == 'zh'?'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/d941f50c_9ab3_46c8_959c_311384662879_d929f146f1.png':getFlagUrl(locale)" :alt="currentLocaleName">
        {{ currentLocaleName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// contentDetail 的定义 (如果这个组件是独立的，需要定义)
const contentDetail = ref(true); // 或者从父组件接收 props
import { useI18n } from 'vue-i18n'
import { useSwitchLocalePath } from '#i18n'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOptionsVisible = ref(false)

// 定义所有可用的语言及其名称和旗帜映射
const allLocales = [
  { code: 'en', name: 'English', flag: 'en-us' },
  { code: 'zh', name: '中文', flag: 'zh-cn' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  // { code: 'tr', name: 'Türkçe', flag: 'tr' },
  // { code: 'pt', name: 'Português', flag: 'pt' },
  // { code: 'es', name: 'Español', flag: 'es' },
  // { code: 'de', name: 'Deutsch', flag: 'de' },
  // { code: 'ar', name: 'العربية', flag: 'ar' },
  // { code: 'vi', name: 'Tiếng Việt', flag: 'vi' },
  // { code: 'fr', name: 'Français', flag: 'fr' },
  // { code: 'pl', name: 'Polski', flag: 'pl' },
];

// 筛选出在 `locales` 中实际配置的语言
const availableLocales = computed(() => {
  const configuredLocales = (locales.value || []).map(l => typeof l === 'string' ? l : l.code);
  return allLocales.filter(l => configuredLocales.includes(l.code));
});

// 获取当前选中语言的名称
const currentLocaleName = computed(() => {
  const current = availableLocales.value.find(l => l.code === locale.value);
  return current ? current.name : locale.value; // 如果找不到，则显示语言代码
});

const toggleOptions = () => {
  isOptionsVisible.value = !isOptionsVisible.value
}

const getFlagUrl = (code) => {
  const foundLocale = allLocales.find(l => l.code === code);
  const flagCode = foundLocale && foundLocale.flag ? foundLocale.flag : code; // 使用自定义的 flag 属性，否则回退到 code
  return `https://honghaieim.obs.cn-east-3.myhuaweicloud.com/countryicon/${flagCode}.svg`;
}

const onSwitchLocale = (code) => {
  isOptionsVisible.value = false
  const url = switchLocalePath(code)
  if (url) {
    window.location.assign(url)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gt_float_switcher {
  font-family: Arial;
  font-size: 20px;
  border-radius: 2px;
  color: #555;
  display: inline-block;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px;
  background: #fff;
  overflow: hidden;
  transition: all .5s cubic-bezier(0.4, 0, 1, 1)
}

.gt_float_switcher img {
  vertical-align: middle;
  display: inline-block;
  width: 33px;
  height: auto;
  margin: 0 5px 0 0;
  border-radius: 3px
}

.gt_float_switcher .gt_options {
  position: relative;
  z-index: 777;
  max-height: 250px;
  overflow-y: auto;
  transform: translateY(-30px);
  opacity: 0;
  cursor: pointer;
  transition: all .8s cubic-bezier(.3, 1.1, .4, 1.1)
}

.gt_float_switcher .gt_options a {
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  color: #444;
  transition: color .4s linear
}

.gt_float_switcher .gt-selected {
  position: relative;
  z-index: 888;
  background-color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  overflow: hidden;
  text-align: left
}

.gt_float_switcher .gt_options.gt-open {
  opacity: 1;
  transform: translateX(0px)
}

.gt_float_switcher .gt_options::-webkit-scrollbar-track {
  background-color: #f5f5f5
}

.gt_float_switcher .gt_options::-webkit-scrollbar {
  width: 5px
}

.gt_float_switcher .gt_options::-webkit-scrollbar-thumb {
  background-color: #888
}

.gt_float_switcher .gt_options a:hover {
  background: #6070a0;
  color: #fff
}

.gt_float_switcher .gt_options a.gt-current {
  display: none
}

.gt_float_switcher .gt-selected .gt-current-lang {
  padding: 10px 15px;
  color: #333;
  font-weight: bold
}

.gt_float_switcher .gt-selected .gt-current-lang span.gt-lang-code {
  position: relative;
  top: 2px
}

.gt_float_switcher .gt-selected .gt-current-lang span.gt_float_switcher-arrow {
  display: inline-block;
  height: 24px;
  width: 15px;
  vertical-align: middle;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 285 285'><path d='M282 76.5l-14.2-14.3a9 9 0 0 0-13.1 0L142.5 174.4 30.3 62.2a9 9 0 0 0-13.2 0L3 76.5a9 9 0 0 0 0 13.1l133 133a9 9 0 0 0 13.1 0l133-133a9 9 0 0 0 0-13z' style='fill:%23666'/></svg>");
  background-position: 50%;
  background-size: 11px;
  background-repeat: no-repeat;
  transition: all .3s;
  transform: rotate(-180deg)
}

.gt_float_switcher .gt-selected .gt-current-lang span.gt_float_switcher-arrow.gt_arrow_rotate {
  transform: rotate(0deg)
}
</style>
