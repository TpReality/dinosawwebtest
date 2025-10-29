<template>
  <footer class="dinosaw-footer">
      <div class="footer-top">
          <h2>{{contentDetail.continuously_improve_productivity_text}}</h2>
          <div v-html="contentDetail.continuously_improve_productivity_description"></div>
      </div>
      <div class="footer-content" v-if="menuItems.length > 0">
          <div class="footer-link">
              <div class="item">
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[0].link)" target="_blank">{{ menuItems[0].title }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li v-for="(item,i) in menuItems[0].children" :key="i">
                      <NuxtLink :to="localePath(menuItems[0].link+item.link)" target="_blank">{{ item.text }}</NuxtLink>
                    </li>
                  </ul>
              </div>
              <div class="item">
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[1].link)" target="_blank">{{ menuItems[1].title }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li v-for="(item,i) in menuItems[1].children" :key="i">
                      <NuxtLink :to="localePath(menuItems[1].link+item.link)" target="_blank">{{ item.text }}</NuxtLink>
                    </li>
                  </ul>
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[3].link)" target="_blank">{{ menuItems[3].title }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li v-for="(item,i) in menuItems[3].children" :key="i">
                      <NuxtLink :to="localePath(menuItems[3].link+item.link)" target="_blank">{{ item.text }}</NuxtLink>
                    </li>
                  </ul>
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[4].link)" target="_blank">{{ menuItems[4].linkText }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li><NuxtLink :to="localePath(menuItems[4].link)" target="_blank">{{ menuItems[4].linkText }}</NuxtLink></li>
                  </ul>
              </div>
              <div class="item">
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[5].link)" target="_blank">{{ menuItems[5].linkText }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li><NuxtLink :to="localePath(menuItems[5].link)" target="_blank">{{ menuItems[5].linkText }}</NuxtLink></li>
                  </ul>
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[2].link)" target="_blank">{{ menuItems[2].title }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li v-for="(item,i) in menuItems[2].children" :key="i">
                      <NuxtLink :to="localePath(menuItems[2].link+item.link)" target="_blank">{{ item.text }}</NuxtLink>
                    </li>
                  </ul>
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath(menuItems[6].link)" target="_blank">{{ menuItems[6].linkText }}</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li><NuxtLink :to="localePath(menuItems[6].link)" target="_blank">{{ menuItems[6].linkText }}</NuxtLink></li>
                  </ul>
              </div>
              <div class="item follow-us">
                  <div class="border"></div>
                  <h3>
                      <NuxtLink :to="localePath('/Products')" target="_blank">Follow Us On</NuxtLink>
                  </h3>
                  <ul class="ul">
                    <li>
                      <a class="flex" href="https://api.whatsapp.com/send?phone=8619859013937&text=Hi%20Lizzy%2CI%20want%20to%20know%20more%20detail%20information">
                        <svg class="icon" viewBox="0 0 1024 1024" width="32" height="32"><path d="M636 556.571q7.429 0 55.714 25.143T742.857 612q1.143 2.857 1.143 8.571 0 18.858-9.714 43.429-9.143 22.286-40.572 37.429T635.43 716.57q-32.572 0-108.572-35.428-56-25.714-97.143-67.429T345.143 508Q304 446.857 304.57 397.143v-4.572q1.715-52 42.286-90.285 13.714-12.572 29.714-12.572 3.429 0 10.286.857t10.857.858q10.857 0 15.143 3.714t8.857 15.714q4.572 11.429 18.857 50.286T454.857 404q0 12-19.714 32.857t-19.714 26.572q0 4 2.857 8.571 19.428 41.714 58.285 78.286 32 30.285 86.286 57.714 6.857 4 12.572 4 8.571 0 30.857-27.714T636 556.57zM520 859.43q72.571 0 139.143-28.572t114.571-76.571 76.572-114.572 28.571-139.143-28.571-139.142-76.572-114.572-114.571-76.571T520 141.714t-139.143 28.572-114.571 76.571-76.572 114.572-28.571 139.142q0 116 68.571 210.286L184.571 844l138.286-44Q413.143 859.429 520 859.429zm0-789.715q87.429 0 167.143 34.286t137.428 92 92 137.429 34.286 167.142-34.286 167.143-92 137.429-137.428 92T520 931.429q-111.429 0-208.571-53.715L73.143 954.286l77.714-231.429Q89.143 621.143 89.143 500.571q0-87.428 34.286-167.142t92-137.429 137.428-92T520 69.714z" fill="#2c2c2c"></path></svg>
                        <span>WhatsApp</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex" href="https://www.facebook.com/kylie.hong.896784">
                        <svg class="icon" viewBox="0 0 1024 1024" width="32" height="32"><path d="M748.4 95.5H275.6c-99.4 0-180.2 80.8-180.2 180.2v472.7c0 99.4 80.8 180.2 180.2 180.2h472.7c99.4 0 180.2-80.8 180.2-180.2V275.6c0-99.3-80.8-180.1-180.1-180.1zm120.1 652.9c0 66.3-53.9 120.2-120.2 120.2h-215V606.9H668c16.6 0 30-13.4 30-30s-13.4-30-30-30H533.4v-74.3c0-40.8 33.2-74 74-74h65.4c16.6 0 30-13.4 30-30s-13.4-30-30-30h-65.4c-73.9 0-134 60.1-134 134v74.3h-94.5c-16.6 0-30 13.4-30 30s13.4 30 30 30h94.5v261.6H275.6c-66.3 0-120.2-53.9-120.2-120.2V275.6c0-66.3 53.9-120.2 120.2-120.2h472.7c66.3 0 120.2 53.9 120.2 120.2v472.8z" fill="#2c2c2c"></path></svg>
                        <span>Face book</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex" href="https://x.com/dinosaw_US">
                        <svg class="icon" viewBox="0 0 50 50" width="32" height="32"><path d="m5.92 6 14.662 21.375L6.23 44h3.18l12.576-14.578 10 14.578H44L28.682 21.67 42.199 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.164l23.322 34H33.04L9.717 8z"></path></svg>
                        <span>X Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex" href="https://www.instagram.com/dinosawstonemachinery">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" focusable="false" color="rgb(0, 0, 0)" style="user-select: none; display: inline-block; fill: rgb(0, 0, 0); color: rgb(0, 0, 0); flex-shrink: 0;"><g color="rgb(0, 0, 0)" weight="light"><path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path></g></svg>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex" href="https://www.youtube.com/@DinosawMachine">
                        <svg class="icon" viewBox="0 0 1024 1024" width="32" height="32" id="svg-1711658913_1824"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8-12.8-47.9-50.4-85.6-98.3-98.5-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2-47.8 12.8-85.5 50.5-98.3 98.5-6.1 22.6-10.4 52.7-13.4 88.8-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6c-11.4-.1-24.1-.2-37.8-.3-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6c11.4.1 24.1.2 37.8.3 39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8z"></path><path d="m423 646 232-135-232-133z"></path></svg>
                        <span>Youtube</span>
                      </a>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
  </footer>
</template>

<script setup>

import { useLocalePath } from '#i18n'
const localePath = useLocalePath()

const props = defineProps({
  contentDetail: {
      type: Object,
      default: () => {
        open_hours_text:""
      }
  },
  menuItems:{
    type: Array,
    default: () => []
  }
})

// console.log(props.menuItems)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .dinosaw-footer{
      align-content: center;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0px;
      height: min-content;
      overflow: visible;
      padding: 0;
      position: relative;
      width:100%;
      background:rgb(238, 238, 238);
      .footer-top{
          padding:29px 60px;
          h2{
              font-size:30px;
              font-weight:600;
          }
          p{
            font-size:18px;
            font-weight:300;
            line-height:1.4em;
            color:rgb(61,61,61);
          }
      }
      .footer-content{
          .footer-link{
              z-index: 1;
              flex-flow: row;
              flex: none;
              place-content: flex-start center;
              align-items: flex-start;
              gap: 44px;
              width: 100%;
              height: min-content;
              padding: 40px 80px;
              display: flex;
              position: relative;
              overflow: visible;
              .border{
                margin-bottom:8px;
                width:100%;
                height:1px;
                background-color:#000;
              }
              .item{
                display:inline-block;
                width:237px;
                vertical-align:top;
                a{
                    color:#000;
                    text-decoration:none;
                }
                .ul{
                  margin-top:8px;
                  li{
                    padding:16px 0;
                    border-top:1px solid rgb(209, 209, 209);
                    .flex{
                      gap:10px;
                    }
                  }
                }
                &.follow-us{
                  flex:1 0 0;
                  a{
                      font-size:18px;
                    }
              }
              }
              .item+.item{
                  margin-left:44px;
              }
              
          }
      }

      
   }

   @media screen and (max-width: 1440px){
      .dinosaw-footer{ 
        .footer-top{
          h2{
              font-size:20px;
              font-weight:600;
          }
          p{
            font-size:14px;
          }
      }
        .footer-content{
          .footer-link{
            align-items:center;
            padding:20px 10px;
            flex-direction: column;
            .item{
              width:300px;
            }
            .item+.item{
              margin:0;
            }
          }

        }
      }
   }
</style>
