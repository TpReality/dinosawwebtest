<template>
    <div class="main">
        <DinosawHeader :menuItems="menuItems" :contentDetail="contentDetail" />
        <div class="main-content">
            <div class="upload-guide">
                <div class="file-input-bg">
                    <div class="upload-icon"></div>
                    <h2>{{ stones.hero_main_title }}</h2>
                    <h1>{{stones.hero_main_subtitle}}</h1>
                </div>
            </div>
            <div class="tools-content">
                <div class="image-upload">
                    <input class="file-input" type="file" @change="selectImage"
                    @drop="handleDrop"
                    @dragover.prevent
                    />
                    <div class="file-input-bg">
                        <div class="upload-icon"></div>
                        <div class="h3">{{stones.select_image_panel_title}}</div>
                        <p>{{ stones.select_image_panel_description }}</p>
                        <button>{{ stones.select_image_panel_btn_text }}</button>
                    </div>
                    <div v-if="uploadLoading" class="upload-loading">
                        <div class="loader"></div>
                    </div>
                </div>
            </div>
            <div class="view-content">
                <div class="usage-guide">
                    <div class="guide-step">
                        <div class="icon-wrap">
                            <svg class="icon-cloud" style="width:150px; height:150px"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46362">
                                <path
                                    d="M769.877767 823.601854l-515.746324 0c-106.647949 0-193.356776-86.773296-193.356776-193.421244 0-106.631576 86.708827-193.356776 193.356776-193.356776 7.14677 0 14.278191 0.400113 21.537526 1.231037 0-0.415462 0-0.831948 0-1.231037 0-130.37535 105.97666-236.431827 236.335636-236.431827 130.37535 0 236.431827 106.056478 236.431827 236.431827 0 0.400113 0 0.815575 0 1.231037 7.179516-0.831948 14.309914-1.231037 21.441335-1.231037 106.663298 0 193.373149 86.7252 193.373149 193.356776 0 32.825616-8.442276 65.395406-24.431435 94.03263-5.78782 10.377348-18.851347 14.07046-29.212322 8.346085-10.360975-5.835915-14.102183-18.914792-8.266267-29.275767 12.375865-22.288632 19.010983-47.567365 19.010983-73.102948 0-95.79067-91.202165-171.70771-189.791577-145.037281-6.92369 1.902326-14.406105 0.176009-19.778462-4.52506-5.40408-4.749164-8.058536-11.879562-7.163143-18.947538 1.24741-9.449209 1.838881-17.364483 1.838881-24.846898 0-106.647949-86.789669-193.452967-193.452967-193.452967-106.647949 0-193.356776 86.805018-193.356776 193.452967 0 7.483438 0.511653 15.397688 1.759063 24.846898 0.87902 7.066953-1.759063 14.198374-7.179516 18.947538-5.372358 4.701069-12.791327 6.460132-19.763113 4.52506-98.509594-26.557866-189.791577 49.246611-189.791577 145.037281 0 82.935897 67.521836 150.474107 150.457734 150.474107l515.746324 0c11.879562 0 21.537526 9.561773 21.537526 21.441335S781.757329 823.601854 769.877767 823.601854L769.877767 823.601854z"
                                    fill="#fff" p-id="46363"></path>
                            </svg>
                            <svg class="icon-up" style="width:35px; height:35px" viewBox="0 0 1024 1024"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40672">
                                <path
                                    d="M512.591865 1024a42.66025 42.66025 0 0 1-42.660249-42.66025V120.882511l-223.966312 255.961499a42.66025 42.66025 0 1 1-63.990375-56.31153l261.080729-298.621749A63.990375 63.990375 0 0 1 555.252115 64.144378V981.33975a42.66025 42.66025 0 0 1-42.66025 42.66025z m326.777514-643.316568a42.66025 42.66025 0 0 0 3.839423-60.150952l-149.310875-170.641a42.66025 42.66025 0 1 0-63.990374 56.31153l149.310874 170.641a42.66025 42.66025 0 0 0 60.150952 3.839422z"
                                    fill="#fff" p-id="40673"></path>
                            </svg>
                        </div>
                        <div class="guide-text-blur"></div>
                        <div class="guide-text">
                            <h3>{{ stones.upload_stone_pictures_title }}</h3>
                            <div class="rich-text" v-html="stones.upload_stone_pictures_description"></div>
                        </div>
                    </div>
                    <div class="guide-step">
                        <div class="icon-wrap">
                            <svg class="icon-data" style="width:100px; height:100px"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="90592">
                                <path
                                    d="M927.8144 714.3424c12.3168-4.8992 26.272 1.1136 31.1712 13.4304 4.8992 12.3168-1.1136 26.272-13.4304 31.1712L536.2048 921.7584a64.0224 64.0224 0 0 1-47.1568-0.0144L79.7312 758.944c-12.3168-4.8992-18.3296-18.8544-13.4304-31.1712 4.8976-12.3168 18.8544-18.3296 31.1696-13.4304L506.752 877.1296a15.9776 15.9776 0 0 0 11.7472 0.0128z m31.1712-192.9696c4.8352 12.1552-0.9584 25.904-12.9472 30.9728l-0.4832 0.1984-409.3504 162.8144a64.0192 64.0192 0 0 1-46.2976 0.32l-0.8592-0.3344L79.7312 552.544c-12.3168-4.8992-18.3296-18.8544-13.4304-31.1712 4.8336-12.1536 18.488-18.1696 30.6832-13.6176l0.4864 0.1872L506.752 670.7296a15.9872 15.9872 0 0 0 11.232 0.2064l0.5152-0.192 409.3152-162.8016c12.3168-4.8992 26.272 1.1136 31.1712 13.4304zM535.5616 99.6416l386.9152 153.2c28.7568 11.3872 42.8384 43.928 31.4512 72.6848a56 56 0 0 1-31.4512 31.4496l-386.9152 153.2a64 64 0 0 1-47.1232 0L101.5232 356.976c-28.7568-11.3856-42.8384-43.9264-31.4512-72.6832a56 56 0 0 1 31.4512-31.4496l386.9152-153.2a64 64 0 0 1 47.1232 0zM506.1104 144.272L119.1936 297.472a8 8 0 0 0 0 14.8768l386.9168 153.2a16 16 0 0 0 11.7792 0l386.9168-153.2a8 8 0 0 0 0-14.8752L517.8896 144.272a16 16 0 0 0-11.7792 0z"
                                    fill="#fff" p-id="90593"></path>
                            </svg>
                            <svg class="icon-search" style="width:60px; height:60px"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53203">
                                <path
                                    d="M448 99.328c-174.08 0-315.392 141.312-315.392 315.392s141.312 315.392 315.392 315.392S762.88 588.8 762.88 414.72s-140.8-315.392-314.88-315.392z m0 552.96C316.928 652.288 209.92 545.28 209.92 414.72s107.008-238.08 238.08-238.08S686.08 283.648 686.08 414.72s-107.52 237.568-238.08 237.568zM825.344 913.408l-162.304-162.304c-14.848-14.848-14.848-39.424 0-54.784 14.848-14.848 39.424-14.848 54.784 0l162.304 162.304c14.848 14.848 14.848 39.424 0 54.784-14.848 14.848-39.424 14.848-54.784 0z"
                                    fill="#fff" p-id="53204"></path>
                            </svg>
                        </div>
                        <div class="guide-text-blur"></div>
                        <div class="guide-text">
                            <h3>{{ stones.quickly_stone_identification_title }}</h3>
                            <div class="rich-text" v-html="stones.quickly_stone_identification_description"></div>
                        </div>
                    </div>
                    <div class="guide-step">
                        <div class="icon-wrap">
                            <svg v-for="(stone, index) in goodsIconNum" :key="index" class="icon-goods" style="width:60px; height: 60px"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16971">
                                <path
                                    d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"
                                    fill="#fff" p-id="16972"></path>
                            </svg>

                            <svg class="icon-shelve" style="width:60px; height:60px"
                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16690">
                                <path
                                    d="M916.7 283h-809.4c-16.5 0-30 13.5-30 30v592.3c0 22.1 17.9 40 40 40h789.3c22.1 0 40-17.9 40-40V313c0.1-16.5-13.4-30-29.9-30z m-10 622.3h-789.4V323h789.3v582.3h0.1zM99.6 260.8h824.9c8.5 0 16-5 19.3-12.8 3.3-7.8 1.6-16.7-4.4-22.8L820.9 104.7l-0.1-0.1c-17.4-17.4-35.1-25.9-54.1-25.9H257.3c-18.6 0-41.3 13-54.1 25.9l-118.6 120.6c-5.9 6-7.6 15-4.4 22.8 3.3 7.8 10.9 12.8 19.4 12.8z m131.9-128c8.6-8.6 21.8-14.1 25.8-14.1h509.3c2.9 0 11.7 0 25.8 14.1l86.5 88H145l86.5-88z"
                                    fill="#fff" p-id="16691"></path>
                                <path
                                    d="M615.3 555.9H408.7c-39.7 0-72 32.3-72 72s32.3 72 72 72h206.7c39.7 0 72-32.3 72-72s-32.4-72-72.1-72z m0 104H408.7c-17.6 0-32-14.4-32-32s14.4-32 32-32h206.7c17.6 0 32 14.4 32 32s-14.4 32-32.1 32z"
                                    fill="#fff" p-id="16692"></path>
                            </svg>
                        </div>
                        <div class="guide-text-blur"></div>
                        <div class="guide-text">
                            <h3>{{ stones.view_stone_lists_title}}</h3>
                            <div class="rich-text" v-html="stones.view_stone_lists_description"></div>
                        </div>
                    </div>
                </div>
                <div class="rel">
                    <NuxtImg class="bg" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/4cNK7hR44yWDvsyolHiTPOzdfk.webp" />
                    <div class="stone-types">
                        <h2>{{ stones.what_kind_of_stone_is_this_title }}</h2>
                        <div class="stone-types-wrap">
                            <div class="stone-types-item">
                                <div class="rel float">
                                    <NuxtImg v-if="stones.what_kind_of_stone_is_this_left_top_image"
                                        :src="stones.what_kind_of_stone_is_this_left_top_image.url" />
                                </div>

                                <div class="stone-types-text">
                                    <h3>{{ stones.what_kind_of_stone_is_this_left_top_title }}</h3>
                                    <div class="rich-text" v-html="stones.what_kind_of_stone_is_this_left_top_description"></div>
                                </div>
                            </div>
                            <div class="stone-types-item">
                                <div class="rel float">
                                    <NuxtImg v-if="stones.what_kind_of_stone_is_this_right_top_image"
                                        :src="stones.what_kind_of_stone_is_this_right_top_image.url" />
                                </div>

                                <div class="stone-types-text">
                                    <h3>{{stones.what_kind_of_stone_is_this_right_top_title}}</h3>
                                    <div class="rich-text" v-html="stones.what_kind_of_stone_is_this_right_top_description"></div>
                                </div>
                            </div>
                        </div>
                        <div class="stone-types-wrap">
                            <div class="stone-types-item">
                                <div class="rel float">
                                    <NuxtImg v-if="stones.what_kind_of_stone_is_this_left_bottom_image"
                                        :src="stones.what_kind_of_stone_is_this_left_bottom_image.url" />
                                </div>

                                <div class="stone-types-text">
                                    <h3>{{ stones.what_kind_of_stone_is_this_left_bottom_title }}</h3>
                                    <div class="rich-text" v-html="stones.what_kind_of_stone_is_this_left_bottom_description"></div>
                                </div>
                            </div>
                            <div class="stone-types-item">
                                <div class="rel float">
                                    <NuxtImg v-if="stones.what_kind_of_stone_is_this_right_bottom_image"
                                        :src="stones.what_kind_of_stone_is_this_right_bottom_image.url" />
                                </div>

                                <div class="stone-types-text">
                                    <h3>{{ stones.what_kind_of_stone_is_this_right_bottom_title }}</h3>
                                    <div class="rich-text" v-html="stones.what_kind_of_stone_is_this_right_bottom_description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faqs">
                    <h2 class="h2">{{stones.how_can_this_ai_rock_identifier_title}}</h2>
                    <ul>
                        <li>
                            <h3 class="h3">{{stones.trade_name_precision_title}}</h3>
                            <div class="rich-text" v-html="stones.trade_name_precision_description"></div>
                        </li>
                        <li>
                            <h3 class="h3">{{ stones.seamless_machinery_integration_title }}</h3>
                            <div v-html="stones.seamless_machinery_integration_description"></div>
                        </li>
                        <li>
                            <h2 class="h2">{{ stones.who_needs_dinosaw_stone_title }}</h2>
                            <div class="nine-pic-wrap">
                                <div class="nine-pic">
                                    <NuxtImg alt="Interior decoration stone walls"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_1.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_1 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_1"></div>
                                </div>
                                <div class="nine-pic">
                                    <NuxtImg alt="Marble backdrop wall"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_2.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_2 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_2"></div>
                                </div>
                                <div class="nine-pic">
                                    <NuxtImg alt="Natural stone facades"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_3.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_3 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_3"></div>
                                </div>
                                <div class="nine-pic">
                                    <NuxtImg alt="Stone tombstones"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_4.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_4 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_4"></div>
                                </div>
                                <div class="nine-pic">
                                    <NuxtImg alt="Stone construction"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_5.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_5 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_5"></div>
                                </div>
                                <div class="nine-pic">
                                    <NuxtImg alt="Geology student"
                                        :src="stones.who_needs_dinosaw_stone_labout_image_6.url" />
                                    <h3 class="h3">{{ stones.who_needs_dinosaw_stone_labout_title_6 }}</h3>
                                    <div class="rich-text" v-html="stones.who_needs_dinosaw_stone_labout__description_6"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="['stone-list-fixed', { show: isShowResult }]">
                <div
                    @click="isShowResult = false"
                    class="overlay"
                ></div>
                <div class="upload-image">
                    <NuxtImg :src="uploadImg" />
                </div>
                <div class="stone-list-wrap">
                    <div v-if="isSearchLoading" class="search-loading">
                        <div class="loader"></div>
                    </div>
                    <div v-else>
                        <div class="stone-list">
                            <div
                                v-for="(stone, index) in list"
                                :key="index"
                                class="stone-item"
                                @click="showSinglePic(stone)"
                            >
                                <NuxtImg :src="stone.img_url" />
                                <p>{{ stone.fileName }}</p>
                            </div>
                        </div>
                        <div v-if="totalPages > 1" class="pagination">
                            <button @click="handlePageChange(currentPage - 1)">
                                 {{ contentDetail.pre_page }}
                            </button>
                            <button @click="handlePageChange(currentPage + 1)">
                                {{ contentDetail.next_page }}
                            </button>
                            <p>
                                {{ contentDetail.in_total }}<span>{{ totalPages }}</span>{{ contentDetail.page }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div :class="['single-pic-fixed', { show: isShowSinglePic }]">
            <div
                @click="isShowSinglePic = false"
                class="overlay"
            ></div>
            <div class="image-box">
                <div class="image-name">{{ selectedImg?.fileName }}</div>
                <NuxtImg class="image" :src="selectedImg?.img_url" />
                <a
                    class="singlepic-href"
                    :href="getWhatsAppUrl(selectedImg?.fileName)"
                    target="_blank"
                >
                    <NuxtImg
                        src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Gvfk53Mm3Aro3nRYf1sD677a4.png"
                        alt=""
                    />
                    {{ contentDetail.get_a_quote_text }}
                </a>
            </div>
        </div>
        <ContactType :contentDetail="contentDetail" />
        <WhatsApp :contentDetail="contentDetail" />
        <DinosawFooter :menuItems="menuItems" :contentDetail="contentDetail" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// 使用菜单数据composable
const { menuItems, initializeMenuData } = useMenuData()

// 初始化菜单数据
await initializeMenuData()

// 使用全局 contentDetail
const { contentDetail, isLoaded } = useContentDetail()

// 响应式数据
const uploadLoading = ref(false)
const goodsIconNum = ref([1, 2, 3, 4]) // 用于渲染多个图标
const alertMessage = ref('')
const alertType = ref('')
const isAlert = ref(false)
const uploadImg = ref('')
const isShowResult = ref(false)
const isShowSinglePic = ref(false)
const selectedImg = ref(null)
const isUploadLoading = ref(false)
const isSearchLoading = ref(false)
const list = ref([])
const totalPages = ref(1)
const currentPage = ref(1)

// 获取产品详情数据
const stones = ref({})
const { data: stoneRes, pending, error } = await useApi('/product-categories?filters[category_value][$eq]=stoneidentification&populate=all')

// 监听产品数据变化，设置页面元信息
watch(stoneRes, (newPosts) => {
    if (newPosts) {
        // console.log(newPosts)
        let data = newPosts.data[0].stoneidentification
        stones.value = data
        useHead({
            title: data.meta_title,
            meta: [
                {
                    name: 'description',
                    content: data.meta_description
                }
            ],
        })
    }
}, { immediate: true })

// 显示提示信息
const handleAlert = (message, type) => {
    alertMessage.value = message
    alertType.value = type
    isAlert.value = true
    setTimeout(() => {
        isAlert.value = false
    }, 1500)
}

// 选择图片方法
const selectImage = (e) => {
    // 获取选择的文件
    // console.log(e)
    const files = e.target.files[0]
    
    if (!files) return
    
    // 清空input值，允许重复选择相同文件
    e.target.value = ""
    
    uploadImage(files)
}

// 处理拖拽放置
const handleDrop = (event) => {
    event.preventDefault()
    // 获取拖拽的文件
    const files = Array.from(event.dataTransfer.files)
    // 过滤出图片文件
    const imageFiles = files.filter((file) =>
        file.type.startsWith("image/")
    )
    if (imageFiles.length > 0) {
        uploadImage(imageFiles[0])
    }
}

// 放大单个图片
const showSinglePic = (stone) => {
    // console.log(stone)
    isShowSinglePic.value = true
    selectedImg.value = stone
}

// 上传图片
const uploadImage = (file) => {
    // 验证文件类型
    // console.log(file.type)
    if (file.type === "image/jpeg" || file.type === "image/png") {
        const windowURL = window.URL || window.webkitURL
        uploadImg.value = windowURL.createObjectURL(file)
        isShowResult.value = true
    } else {
        handleAlert("Please upload images in JPG or PNG format.", "success")
        return false
    }

    // console.log(file)
    
    // 上传文件的异步函数
    const uploadFileRecursive = async (file) => {
        // 创建FormData对象
        const formData = new FormData()
        formData.append("image", file)
        
        try {
            // 发起上传请求
            const response = await $fetch("https://stone.stoneboss.vip/upload", {
                method: "POST",
                body: formData,
            })

            getResult(response)
        } catch (error) {
            console.error("上传图片失败:", error)
            handleAlert("上传失败", "error")
            isUploadLoading.value = false
        }
    }

    // 开始上传过程
    isUploadLoading.value = true
    uploadFileRecursive(file)
}

// 从URL获取文件名
const getFileNameFromUrl = (url) => {
    // 使用 decodeURIComponent 解码 URL 中的中文字符
    const decodedUrl = decodeURIComponent(url)
    // 使用正则表达式匹配最后一个斜杠后的所有内容作为文件名
    const match = decodedUrl.match(/\/([^\/]+)$/)
    return match ? match[1] : ""
}

// 获取识别结果
const getResult = async (result) => {
    // console.log(result)
    // 使用$fetch发送搜索请求
    isUploadLoading.value = false
    isSearchLoading.value = true
    
    try {
        const data = await $fetch("https://stone.stoneboss.vip/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query_image_path_or_url: result,
            }),
        })

        data.forEach((item) => {
            let fileName = getFileNameFromUrl(item.img_url)
            if (fileName.indexOf(".") !== -1) {
                fileName = fileName.split(".")[0]
            }
            item.fileName = fileName
        })
        
        isSearchLoading.value = false
        list.value = data
        // console.log(data)
    } catch (error) {
        console.error("请求失败:", error)
        isSearchLoading.value = false
        handleAlert("识别失败，请重试", "error")
    }
}

// 处理分页变化
const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        // 这里可以添加重新获取数据的逻辑
        // console.log('切换到第', page, '页')
    }
}

// 生成WhatsApp链接
const getWhatsAppUrl = (fileName) => {
    if (!fileName) return '#'
    return `https://api.whatsapp.com/send/?phone=8619859013937&text=Hi%2CI+would+like+to+get+more+detail+information+${fileName}&type=phone_number&app_absent=0`
}

// 组件挂载后的初始化
onMounted(() => {
    // 可以在这里添加初始化逻辑
})
</script>
<style scoped lang="scss">
body {
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
}

.inline-block {
    display: inline-block;
}

.rel {
    position: relative;
}

.upload-wrap {
    margin: 0 auto;
    padding: 30px 0 0;
}

.alert {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 1.2rem;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 0.5rem;
    z-index: 1000;
}

.alert-success {
    background: rgba(0, 0, 0, 0.7);
}

.main-content {
    position: relative;
    margin: 0 auto;

    p {
        margin: 0;
    }

    .img-box-row {
        margin-bottom: 20px;
    }

    .img-box {
        position: relative;
        display: block;
        width: 276px;
        vertical-align: top;
        border-radius: 8px;

        &.biger {
            width: 900px;
            height: 650px;
        }

        .slab {
            margin: 20px 0 0 50px;
            perspective: 2000px;
        }

        .cube {
            div {
                position: absolute;
                overflow: hidden;

            }

            position:relative;
            transition:all 3s;
            transform-style:preserve-3d;
            transform-origin: 138px 0 138px;

            .right {
                transform: rotateY(-270deg) translateZ(0);
                transform-origin: top right;
                width: 276px;
                height: 276px;
                left: 0px;
            }

            .left {
                transform: rotateY(270deg) translateX(0px);
                transform-origin: center left;
                width: 276px;
                height: 276px;
            }

            .top {
                transform: rotateX(-90deg) translateY(-276px);
                transform-origin: top center;
                width: 276px;
                height: 276px;
            }

            .bottom {
                transform: rotateX(90deg) translateX(0px) translateY(141px) translateZ(-138px);
                transform-origin: center center;
                width: 276px;
                background-color: #e2e2e2;
                border-radius: 0%;
                height: 276px;
                box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.2);
            }

            .front {
                transform: translateZ(276px);
                width: 276px;
                height: 276px;
            }

            .back {
                transform: translateZ(0px) rotateY(180deg);
                width: 276px;
                height: 276px;
            }
        }

        &:hover .cube {
            transform: rotateY(-180deg);
        }

        &.inline-block {
            display: inline-block;
            margin-right: 20px;

            &:hover::before {
                opacity: 0;
            }
        }

        // &::before{
        //     content:"";
        //     position:absolute;
        //     left:0;
        //     top:0;
        //     width:100%;
        //     height:100%;
        //     background:rgba(0,0,0,0.3);
        //     transition:opacity 0.3s linear;
        // }
        img {
            width: 100%;
            height: 100%;
        }

        span {
            position: absolute;
            left: 50%;
            top: 50%;
            font-weight: bold;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 30px;
            z-index: 2;
        }
    }
}

.upload-guide {
    max-width: 1400px;
    margin: 0 auto 30px;
    padding: 20px 10px;
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;

    h2 {
        margin: 0 auto;
        font-size: 48px;
        color: #333333;
    }

    h1 {
        margin: 0 auto;
    }
}

.image-upload {
    position: relative;
    width: 768px;
    margin: 0 auto;
    padding: 30px 20px;
    text-align: center;
    border: 1px dashed #6B7280;
    border-radius: 16px;

    &:hover {
        border: 1px dashed #4F46E5;
    }

    .file-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
        cursor: pointer;
    }

    .upload-loading {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        z-index: 2;

        .loader {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
                radial-gradient(farthest-side, rgb(71, 82, 230) 94%, #0000) top/8px 8px no-repeat,
                conic-gradient(#0000 30%, rgb(71, 82, 230));
            -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
            animation: l13 1s infinite linear;
        }

    }

    .file-input-bg {
        .h3 {
            font-size: 16px;
            font-weight: bold;
            color: #333333;
        }

        p {
            margin: 20px 0;
            font-size: 14px;
            color: #6B7280;
        }

        button {
            width: 108px;
            height: 38px;
            line-height: 38px;
            font-size: 14px;
            padding: 0;
            border: none;
            color: #fff;
            background: #4F46E5;
            border-radius: 8px;
        }
    }
}

.view-content {
    // font-size: 0;

    img {
        display: inline-block;
        vertical-align: top;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }

    .stone-types {
        position: relative;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 0 80px;

        h2 {
            margin: 0;
            padding: 30px 0 0;
            font-size: 40px;
            text-align: center;
            color: #333333;
        }

        .stone-types-wrap {
            max-width: 1400px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            flex-direction: row;
            padding: 40px 40px 0px;

            .stone-types-item {
                display: inline-block;
                background: #fff;
                border-radius: 12px;
                overflow: hidden;
            }

            .float {
                float: left;
            }

            img {
                width: 300px;
                height: 270px;
            }

            .stone-types-text {
                width: 620px;
                height: 171px;
                padding: 10px 15px;
                padding-left: 320px;
                text-align: left;

                h3 {
                    font-size: 20px;
                    margin: 0 auto 5px;
                }

                p {
                    font-size: 16px;
                    line-height: 1.5;
                }
            }

        }
    }

    .usage-guide {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 30px;
        margin-top: 50px;
        padding: 30px 0;

        .bg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
        }

        .guide-text {
            position: relative;
            height: 150px;
            line-height: 1.5;
            padding: 10px 15px;
            box-sizing: border-box;
            z-index: 1;
            .rich-text{
                font-size:16px;
            }
        }

        .guide-step {
            position: relative;
            width: 400px;
            z-index: 1;
            border-radius: 10px;
            background: linear-gradient(45deg, rgba(71, 82, 230, 0.6), rgba(36, 196, 255, 0.6));
            overflow: hidden;

            &:nth-child(2) {
                background: linear-gradient(45deg, rgba(139, 133, 252, 0.5), rgba(159, 193, 254, 0.5));
            }

            &:nth-child(3) {
                background: linear-gradient(45deg, rgba(130, 209, 245, 1), rgba(79, 70, 229, 0.3));
            }

            .guide-text-blur {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 150px;
                background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
                filter: blur(1px);
            }

            .icon-wrap {
                position: relative;
                height: 250px;

                .icon-up {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2;
                    animation: uploadAnimate 3s linear infinite;
                }

                .icon-cloud {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                }

                .icon-search {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(20%, -10%);
                    z-index: 2;
                    animation: searchAnimate 3s linear infinite;
                }

                .icon-data {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-70%, -50%);
                    z-index: 1;
                }

                .icon-shelve {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, 10%);
                    z-index: 1;
                    animation: shelveAnimate 5s ease-in-out infinite;
                }

                .icon-goods {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2;

                    &:nth-child(1) {
                        animation: goodsAnimate-1 5s ease-in-out infinite;
                    }

                    &:nth-child(2) {
                        animation: goodsAnimate-2 5s ease-in-out infinite;
                    }

                    &:nth-child(3) {
                        animation: goodsAnimate-3 5s ease-in-out infinite;
                    }

                    &:nth-child(4) {
                        animation: goodsAnimate-4 5s ease-in-out infinite;
                    }
                }
            }

            h3 {
                margin: 0 auto 10px;
                font-size: 20px;
            }

            p {
                font-size: 16px;
            }
        }

    }

    .new-content {
        position: relative;
        background: rgb(246, 246, 246);
        height: 300px;
        overflow: hidden;

        .marquee-content {
            white-space: nowrap;
            animation: marquee-left 20s linear infinite !important;
        }

        .new-stone:hover {
            .cube {
                // transform:rotateY(180deg);
            }
        }

        .new-stone {
            display: inline-block;
            width: 200px;

            .slab {
                margin: 50px 0 0 20px;
                perspective: 800px;
            }

            .cube {
                div {
                    position: absolute;
                    overflow: hidden;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                    }
                }

                position:relative;
                transition:all 3s;
                transform:rotateY(45deg);
                transform-style:preserve-3d;
                transform-origin: 50px 0 10px;

                .right {
                    transform: rotateY(-270deg) translateZ(80px);
                    transform-origin: top right;
                    width: 20px;
                    height: 200px;
                    left: 0px;
                    background-color: #000;
                }

                .left {
                    transform: rotateY(270deg) translateX(0px);
                    transform-origin: center left;
                    width: 20px;
                    height: 200px;
                    background-color: #000;
                }

                .top {
                    transform: rotateX(-90deg) translateY(-20px);
                    transform-origin: top center;
                    width: 100px;
                    height: 20px;
                    background-color: #000;
                }

                .bottom {
                    transform: rotateX(90deg) translateX(0px) translateY(10px) translateZ(-89px);
                    transform-origin: center center;
                    width: 100px;
                    background-color: #000;
                    border-radius: 0%;
                    height: 20px;
                    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.2);
                }

                .front {
                    transform: translateZ(20px);
                    width: 100px;
                    height: 200px;
                }

                .back {
                    transform: translateZ(0px) rotateY(180deg);
                    width: 100px;
                    height: 200px;
                }
            }
        }

        img {
            width: 100px;
            height: 100px;
            margin-right: 20px;
        }
    }
}

.tools-content {}

.single-pic-fixed {
    position: fixed;
    top: 0;
    left: -3000%;
    width: 100%;
    height: 100vh;
    z-index: 1001;

    .overlay {
        position: fixed;
        top: 0;
        left: -1000%;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        transition: opacity .3s;
    }

    .image-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 55%;
        text-align: center;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 8px;
        background: #fff;
        z-index: 1001;

        .image-name {
            margin-bottom: 10px;
            font-size: 18px;
        }

        .singlepic-href {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto 0;
            width: 200px;
            height: 60px;
            border-radius: 100px;
            font-size: 22px;
            background: linear-gradient(91deg, #445ee8, #4c9bfd);
            color: #fff;
            font-size: 16px;
            text-decoration: none;

            img {
                width: 40px;
                margin-right: 5px;
            }
        }
    }

    &.show {
        left: 0;

        .overlay {
            left: 0;
            opacity: 1;
        }

        .image {
            position: relative;
            top: 10%;
            width: 100%;
            max-height: 80vh;
            opacity: 1;
        }
    }
}

.stone-list-fixed {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    z-index: 1000;

    &.show {
        left: 0;

        .overlay {
            left: 0;
            opacity: 1;
        }

        .upload-image {
            left: 50%;
            opacity: 1;
        }

        .stone-list-wrap {
            overflow-y: auto;
            top: 100px;
            left: 10px;
            right: 10px;
            opacity: 1;
        }
    }

    .search-loading {
        position: absolute;
        top: 40%;
        left: 50%;
        width: 200px;
        height: 30px;

        .loader {
            width: 15px;
            aspect-ratio: 1;
            border-radius: 50%;
            animation: l5 1s infinite linear alternate;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: -1000%;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        transition: opacity .3s;
    }

    .upload-image {
        position: fixed;
        top: 20px;
        left: -100%;
        transform: translate(-50%, 0);
        width: 200px;
        height: 200px;
        overflow: hidden;
        opacity: 0;
        transition: opacity .3s;
        border-radius: 10px;
        z-index: 1002;

        img {
            width: 250px;
        }
    }

    .stone-list-wrap {
        position: fixed;
        top: 100000px;
        left: 20px;
        right: 20px;
        bottom: 0;
        box-sizing: border-box;
        padding: 120px 30px 0;
        background: #fff;
        opacity: 0;
        border-radius: 10px 10px 0 0;
        transition: opacity 0.3s, left 0.2s, right 0.2s;
        z-index: 1001;
    }
}

.stone-list{
    padding:30px 0;
    .stone-item{
        display:inline-block;
        width:12%;
        margin: 0 0 2% 2.1%;
        cursor:pointer;
        img{
            display:block;
            width:100%;
            height:200px;
            margin-bottom:5px;
        }
        p{
            margin:0;
            font-size:14px;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }
    }
}

.pagination{
    text-align:right;
    padding:30px 0;
    button{
        margin-right:10px;
        padding:0;
        font-size:14px;
        background:transparent;
        border:none;
        outline:none;
        cursor:pointer;
    }
    p{
        display:inline-block;
        font-size:14px;
        span{
            margin:0 5px;
        }
    }
}

@keyframes uploadAnimate {
    0% {
        transform: translate(-50%, -20%);
    }

    100% {
        transform: translate(-50%, -70%);
    }
}

@keyframes searchAnimate {
    0% {
        transform: translate(20%, -10%);
    }

    25% {
        transform: translate(30%, -20%);
    }

    50% {
        transform: translate(40%, -10%);
    }

    75% {
        transform: translate(30%, 0%);
    }

    100% {
        transform: translate(20%, -10%);
    }
}

@keyframes shelveAnimate {
    0% {
        transform: translate(-50%, 10%) scale(1);
    }

    20% {
        transform: translate(-50%, 10%) scale(0.9);
    }

    30% {
        transform: translate(-50%, 10%) scale(1);
    }
}

@keyframes goodsAnimate-1 {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    20% {
        transform: translate(-50%, -50%) scale(0);
    }

    50% {
        transform: translate(40%, -100%) scale(0.5);
    }

    100% {
        transform: translate(40%, -100%) scale(0.5);
    }
}

@keyframes goodsAnimate-2 {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    30% {
        transform: translate(-50%, -50%) scale(0);
    }

    60% {
        transform: translate(-20%, -100%) scale(0.5);
    }

    100% {
        transform: translate(-20%, -100%) scale(0.5);
    }
}

@keyframes goodsAnimate-3 {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    40% {
        transform: translate(-50%, -50%) scale(0);
    }

    70% {
        transform: translate(-80%, -100%) scale(0.5);
    }

    100% {
        transform: translate(-80%, -100%) scale(0.5);
    }
}

@keyframes goodsAnimate-4 {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    50% {
        transform: translate(-50%, -50%) scale(0);
    }

    80% {
        transform: translate(-140%, -100%) scale(0.5);
    }

    100% {
        transform: translate(-140%, -100%) scale(0.5);
    }
}

@keyframes marquee-left {
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(-100%);
    }
}

@keyframes l13 {
    100% {
        transform: translate(-50%, -50%) rotate(1turn)
    }
}

@keyframes l5 {
    0% {
        box-shadow: 20px 0 #000, -20px 0 #0002;
        background: #000
    }

    33% {
        box-shadow: 20px 0 #000, -20px 0 #0002;
        background: #0002
    }

    66% {
        box-shadow: 20px 0 #0002, -20px 0 #000;
        background: #0002
    }

    100% {
        box-shadow: 20px 0 #0002, -20px 0 #000;
        background: #000
    }
}

.faqs {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;

    .h2 {
        margin-bottom: 40px;
        text-align: center;
        font-size: 36px;
    }

    ul {
        padding: 0;

        li {
            padding: 20px;
            border-radius: 16px;
            border: 1px solid rgba(136, 136, 136, 0.1);
        }

        li+li {
            margin-top: 20px;
        }

        .h3 {
            margin: 0 0 1em 0;
            font-size: 22px;
        }

        p {
            line-height: 1.6;
            font-size: 16px;
            color: rgb(102, 102, 102);

            a {
                color: rgb(0, 132, 255);
            }
        }
    }

    .nine-pic-wrap {
        padding-left: 0.5%;

        .nine-pic {
            display: inline-block;
            width: 32%;
            margin-right: 1.333%;
            margin-bottom: 2.5%;
            vertical-align: top;

            .h3 {
                height: 42px;
                margin: 0.4em 0 0 0;
                font-size: 18px;
            }

            p {
                height: 105px;
            }

            img {
                width: 100%;
                border-radius: 8px;
            }
        }

    }
}

@media screen and (max-width: 1700px) {
    .stone-list-fixed {
        .stone-list {
            .stone-item {
                width: 14.5%;
                margin: 0 0 2% 2%;
            }
        }
    }
}

@media screen and (max-width: 1400px) {
    .single-pic-fixed {
        .image-box {
            width: 80%;
        }
    }

    .stone-list-fixed {
        .upload-image {
            width: 150px;
            height: 150px;

            img {
                height: 150px;
            }
        }

        .stone-list-wrap {
            padding: 90px 0 0;
            overflow-y: scroll;
        }

        .stone-list {
            padding: 10px 0;

            .stone-item {
                width: 45%;
                margin: 0 0 15px 3.3%;

                img {
                    width: 100%;
                }
            }
        }
    }

    .upload-guide {
        width: 100%;
        margin: 0 auto 10px;
        padding: 10px;

        h2 {
            font-size: 24px;
        }

        h1 {
            margin: 0 auto;
            font-size: 14px;
        }
    }

    .image-upload {
        width: 92%;
        margin: 0 auto;
        padding: 20px;
    }

    .view-content {
        .usage-guide {
            margin-top: 20px;
            flex-direction: column;
            gap: 20px;

            .guide-step {
                width: 90%;
                margin: 0 auto;

                .icon-wrap {
                    height: 150px;
                }

                .guide-text {
                    height: 100px;
                    padding: 10px;
                }
            }
        }

        .stone-types {
            width: 92%;

            h2 {
                padding: 20px 0;
                font-size: 24px;
            }

            .stone-types-wrap {
                width: 100%;
                margin: 0 auto;
                padding: 0;
                gap: 20px;
                flex-direction: column;

                .float {
                    float: none;
                }

                .stone-types-item {
                    display: block;
                    width: 100%;

                    img {
                        width: 100%;
                    }

                    .stone-types-text {
                        width: auto;
                        height: auto;
                        padding: 10px 15px;
                    }
                }
            }

            .stone-types-wrap+.stone-types-wrap {
                margin-top: 20px;
            }
        }

    }

    .faqs {
        padding: 20px 15px;

        .h2 {
            margin: 20px 0;
            text-align: center;
            font-size: 24px;
        }

        ul {

            li {
                padding: 15px;
            }

            li+li {
                margin-top: 15px;
            }

            .h3 {
                margin: 0 0 1em 0;
                font-size: 20px;
            }

            p {
                line-height: 1.6;
                font-size: 16px;
                color: rgb(102, 102, 102);

                a {
                    color: rgb(0, 132, 255);
                }
            }
        }

        .nine-pic-wrap {
            padding: 0;

            .nine-pic {
                width: 100%;
                margin-right: 0;
                margin-bottom: 2.5%;
                vertical-align: middle;

                .h3 {
                    margin: 0.4em 0 0.5em 0;
                    font-size: 18px;
                }

                p {
                    height: 105px;
                }

                img {
                    width: 100%;
                    border-radius: 8px;
                }
            }

        }
    }
}

@media screen and (max-width: 750px) {
    .single-pic-fixed {
        .image-box {
            .singlepic-href {
                height:50px img {
                    width: 30px;
                }
            }
        }

    }
}
</style>
