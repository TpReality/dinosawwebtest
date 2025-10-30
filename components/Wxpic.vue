<template>
  <div class="wx-app" :class="isPanelVisible ? 'show-panel' : ''">
      <div class="wx-panel">
          <img src="/images/wxpic.jpg" />
      </div>
      <div @click="hidePanel" class="overlay"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 控制面板显示/隐藏的响应式变量
const isPanelVisible = ref(true)

// 显示面板
const showPanel = () => {
  isPanelVisible.value = true
}

// 隐藏面板
const hidePanel = () => {
  isPanelVisible.value = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .wx-app{
      display:none;
        .wx-panel{
          
          position:fixed;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:400px;
          height:400px;
          z-index:100;
        }
       
        img{
          width:100%;
        } 
        .overlay{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color:#000;
            opacity:.5;
            z-index:99;
        }
    }
</style>
