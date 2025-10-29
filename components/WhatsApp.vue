<template>
  <div class="whats-app" v-if="contentDetail">
      <div 
        class="panel" 
        :class="{ 'panel-hidden': !isPanelVisible }"
        @click="showPanel"
      >
          <div class="whats-head">
              <div class="img-wrap">
                <NuxtImg sizes="sm:100vw" loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/CMFVUQaDK9K6lMd5ekiLM6Po.webp" />
              </div>
              <div class="close" @click.stop="hidePanel">
                <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.5 0 L 0 0" fill="transparent" height="1px" id="M5t9QOTlE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(5.75 12.25)" width="12.5px"></path></svg>
              </div>
              <div class="text-mes">
                <p>{{contentDetail.chat_online_dialog_head_title}}</p>
                <span>{{ contentDetail.chat_online_dialog_head_subtitle }}</span>
              </div>
          </div>
          <div class="whats-content">
              <div class="img-wrap">
                <NuxtImg sizes="sm:100vw" loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/PZaASQwcgVKtL1LRgszQtSdlJU.png" />
              </div>
              <div class="text">
                  <div class="name">{{ contentDetail.chat_online_dialog_body_title }}</div>
                  <div v-html="contentDetail.chat_online_dialog_body_description"></div>
              </div>
          </div>
          <div class="whats-button">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=8619859013937&text=Hi%20Lizzy%2CI%20want%20to%20know%20more%20detail%20information">{{ contentDetail.chat_online_dialog_btn_whatapp_text}}</a>
          </div>
          <div class="contact-button">
            <NuxtLink :to="localePath('/contact')" target="_blank">{{ contentDetail.chat_online_dialog_btn_contact_us_text }}</NuxtLink>
          </div>
      </div>
      <div 
        class="whats-app-tip" 
      >
        <NuxtImg loading="lazy" width="35" height="35" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/PZaASQwcgVKtL1LRgszQtSdlJU.png" alt="" />
        <p class="framer-text">{{ contentDetail.chat_online_dialog_btn_help_text }}</p>
        <svg :class="{ 'tip-visible': !isPanelVisible }" @click="showPanel" class="cursor-pointer" width="24px" height="24px"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M 0 0 L 0 12.5" fill="transparent" height="12.5px" id="InYKHyHwf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(12 5.75)" width="1px"></path><path d="M 12.5 0 L 0 0" fill="transparent" height="1px" id="pfQxqOaIQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(5.75 12)" width="12.5px"></path></svg>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
const props = defineProps({
  contentDetail: {
      type: Object,
      default: () => {
        chat_online_dialog_head_title:""
      }
  }
})

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
    .whats-app{
       
        @media (max-width: 767px) {
           display:none;
        }
        .panel{
            position:fixed;
            bottom:114px;
            right:20px;
            width:324px;
            z-index:20;
            padding-bottom:24px;
            border-bottom-width: 1px;
            border-color: rgba(136, 136, 136, 0.1);
            border-left-width: 1px;
            border-right-width: 1px;
            border-style: solid;
            border-top-width: 1px;
            background-color: rgb(255, 255, 255);
            will-change: transform;
            border-radius: 16px;
            opacity: 1;
            transform: translateY(0);
            transition: all 0.3s ease-in-out;
            overflow:hidden;
            cursor: pointer;
        }
        
        .panel-hidden{
            transform: translateY(calc(100% + 64px));
            opacity: 0;
            pointer-events: none;
        }
        .whats-head{
            position:relative;
            height:123px;
            overflow:hidden;
            .img-wrap{
                aspect-ratio: 1.6785714285714286 / 1;
                bottom: -92px;
                flex: none;
                height: var(--framer-aspect-ratio-supported, 274px);
                left: -65px;
                overflow: visible;
                position: absolute;
                right: -70px;
                img{
                  width:100%;
                  height:100%;
                }
            }
            .text-mes{
                position:absolute;
                top:50%;
                left:50%;
                width:94%;
                transform:translate(-50%, -50%);
                line-height:1.4em;
                color:rgb(0, 69, 166);
                z-index:2;
                text-align:center;
               
                p{
                  margin-bottom:20px;
                  font-size:26px;
                  font-weight:600;
                }
                span{
                    font-size:18px;
                    font-weight:500;
                }
                
            }
            .close{
                cursor: pointer;
                flex: none;
                height: 25px;
                overflow: visible;
                position: absolute;
                right: 8px;
                top: 11px;
                width: 24px;
            }
        }
        .whats-content{
          align-content: flex-start;
          align-items: flex-start;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 16px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 24px;
          position: relative;
          width: 100%;
          img{
              width:64px;
              height:64px;
              overflow:hidden;
              border-radius:64px;
            }
          .name{
              font-size:22px;
              font-weight:500;
          }
          .text{
            width:195px;
          }
          p{
              font-size:14px;
              font-weight:300;
              color:rgb(61, 61, 61);
          }
        }
        .whats-button{
          margin:0 24px;
          background-color:rgb(67, 157, 241);
          border-radius:44px;
          flex:none;
          place-content:center;
          align-items: center;
          height:44px;
          padding:0;
          text-decoration:none;
          display: flex;
          position:relative;
          overflow:hidden;
          font-weight:bold;
          a{
            color:#fff;
          }
        }
        .contact-button{ 
          margin:16px 24px 0;
          height:44px;
          border-radius:44px;
           display: flex;
          border:1px solid #000;
          flex:none;
          place-content:center;
          align-items: center;
          font-weight:bold;
          a{
            color:#000;
          }
        }
        .whats-app-tip{
          position:fixed;
          bottom:64px;
          right:20px;
          display:flex;
           width:324px;
          justify-content:center;
          align-items: center;
          height:54px;
          border-radius:54px;
           z-index:20;
          border:1px solid rgb(53, 141, 243);
          background:#fff;
          margin-top:10px;
          cursor: pointer;
          transform: translateY(20px);
          pointer-events: none;
          transition: all 0.3s ease-in-out;
          img{
            margin-right:10px;
            border-radius:100%;
          }
          p{
            font-size:16px;
          }
          .cursor-pointer{
            width:0;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &.tip-visible{
              width:24px;
              transform: translateY(0);
              pointer-events: auto;
            }
          }
        }
        
        
    }
</style>
