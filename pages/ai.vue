<template>
    <div>
        <div :class="device === 'mobile' ? 'chat-container' : 'chat-container pc'">
            <div class="chat-header">
                <div class="icon-fanhui bar-back">
                    <div class="new-menu" @click="newConversationFn">
                        <NuxtImg loading="lazy" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-newconversation.png" />
                    </div>
                    <div class="history-menu" @click="isShowHistorySessions = true">
                        <NuxtImg loading="lazy"
                            src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-menu.png"
                            class="history-menu-icon"
                        />
                    </div>
                </div>
            </div>
                <div class="chat-content" :style="chatContentStyle">
                    <div v-show="isAlert">
                        <div :class="['alert', `alert-${alertType}`]">
                            {{ alertMessage }}
                        </div>
                    </div>
                    <div v-show="isLoading">
                        <div class="loading-wrap">
                            <div class="loading-box">
                                <div class="loading">
                                    <div v-for="i in 12" :key="i" class="loading-icon__dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isStartAI" class="empty-content">
                        <NuxtImg loading="lazy"
                            src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-logo.png"
                            alt="空内容"
                            class="empty-image"
                        />
                        <div class="empty-text">
                            <div>
                                Expert AI for super-fast resolution of
                            </div>
                            <div>after-sales problems</div>
                        </div>
                    </div>
                    <div v-if="isStartAI" class="message-list">
                        <div
                            v-for="(message, index) in messageList"
                            :key="index"
                            :class="['message-item', message.type === 'user' ? 'message-user' : 'message-bot']"
                        >
                            <div v-if="message.type === 'bot'" class="normal-flex bot-name">
                                <NuxtImg loading="lazy"
                                    class="avatar bot-avatar"
                                    src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/bot-avatar.png"
                                    alt="机器人头像"
                                />
                                <span class="text">
                                    Dinosaw 鲨鱼哥
                                </span>
                            </div>
                            <div class="message-bubble">
                                <div v-if="message.image && message.image.length > 0" class="message-file">
                                    <NuxtImg loading="lazy"
                                        v-for="(item, j) in message.image"
                                        :key="j"
                                        :src="item.path"
                                        alt="消息"
                                        class="message-image"
                                        @click="predivImage(item.path)"
                                    />
                                </div>
                                <span v-if="message.type === 'user'" class="message-text">
                                    {{ message.content }}
                                </span>
                                <div v-else-if="message.content === 'dots-container'" class="dots-container">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                <div v-else class="message-text" v-html="formatMarkdown(message.content)"></div>
                                <div v-if="message.status === 2" class="message-stop">
                                    已停止
                                </div>
                                <div v-if="message.type === 'bot' && index !== 0 && !message.isTyping" class="message-handle">
                                    <NuxtImg loading="lazy"
                                        src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/icon-copy-black.png"
                                        alt="复制"
                                        class="message-handle-icon"
                                        @click="copyMessage(message.content)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-bottom-bg"></div>
                </div>

                <div :class="device === 'mobile' ? 'input-area' : 'input-area pc'">
                    <div style="position: relative">
                        <div :class="isShowShortcutPopup ? 'shortcut-popup show' : 'shortcut-popup'">
                            <div class="shortcut-title-wrap">
                                <div class="shortcut-title">
                                    {{ commandsTitle }}
                                </div>
                                <div
                                    class="close-btn"
                                    @click="isShowShortcutPopup = false"
                                ></div>
                            </div>
                            <div class="list-scroll">
                                <div
                                    v-for="(item, index) in commandsList"
                                    :key="index"
                                    class="shortcut-item"
                                    @click="selectCommand(item)"
                                >
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="agent-config">
                            <div
                                v-for="(item, index) in agentConfig.shortcut_commands"
                                v-if="agentConfig.shortcut_commands"
                                :key="index"
                                class="agent-config-item"
                                @click="selectShortcut(item)"
                            >
                                <div class="three-row">
                                    <div class="row"></div>
                                    <div class="row"></div>
                                    <div class="row"></div>
                                </div>
                                <div class="text">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="tempImagePathList.length > 0 ? 'handle-area hasImage' : 'handle-area'">
                        <div class="handle-item">
                            <div v-if="device === 'mobile'" :class="['key-voice-btn', { isHide: inputMessage.trim() !== '' }]">
                                <div v-if="!isSound" class="voice-btn" @click="switchSound()">
                                    <NuxtImg loading="lazy"
                                        src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-voicebtn.png"
                                        alt="语音"
                                        class="icon"
                                    />
                                </div>
                                <div v-else>
                                    <div class="keyboard-btn" @click="isSound = false">
                                        <NuxtImg loading="lazy"
                                            src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-keyboard.png"
                                            alt="键盘"
                                            class="icon"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="input-wrapper">
                                <textarea
                                    v-if="!isSound"
                                    id="message_input"
                                    class="message-input"
                                    v-model="inputMessage"
                                    @keypress="handleKeyPress"
                                    placeholder="发送消息给 AI"
                                    @focus="getTellHeight"
                                    @blur="resetTellHeight"
                                />

                                <div
                                    v-if="isSound"
                                    class="voice-input"
                                    @touchstart="startRecording"
                                    @touchmove="moveRecording"
                                    @touchend="stopRecording"
                                    @touchcancel="cancelRecording"
                                >
                                    按住 说话
                                </div>
                            </div>
                            <div v-if="!isSound" class="upload-btn" >
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    autocomplete="off"
                                    tabindex="-1"
                                    class="semi-upload-hidden-input"
                                     @change="selectImage"
                                />
                            </div>
                            
                            <button
                                v-if="isChatEnd"
                                :class="['send-btn', { disabled: !canSendMessage }]"
                                @click="handleSendMessage"
                                :disabled="!canSendMessage"
                            >
                                <NuxtImg loading="lazy"
                                    :src="canSendMessage 
                                        ? 'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-send.png'
                                        : 'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-send-disabled.png'"
                                    alt="发送"
                                    class="send-icon"
                                />
                            </button>
                            
                            <button v-else class="send-btn" @click="stopMessage">
                                <div class="stop-icon"></div>
                            </button>
                        </div>
                        <div v-if="tempImagePathList.length > 0 && !isSound" class="preview-image">
                            <div
                                v-for="(item, index) in tempImagePathList"
                                :key="index"
                                class="preview-thumb"
                            >
                                <NuxtImg loading="lazy"
                                    :src="item.path"
                                    alt="预览"
                                    class="image"
                                    @click="predivImage(item.path)"
                                />
                                <div class="delete-btn-wrap" @click="deleteImage(index)">
                                    <span class="delete-btn">×</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    :class="['recording-mask', { isShow: isRecording }]"
                    @touchmove="stopPoint"
                >
                    <div class="recording-content">
                        <div class="recording-circle recording-circle-1"></div>
                        <div class="recording-circle recording-circle-2"></div>
                        <div class="recording-circle recording-circle-3"></div>
                        <div class="recording-icon">
                            <NuxtImg loading="lazy"
                                src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/upload/appicon/coze-voiceing.png"
                                alt="录音中"
                            />
                        </div>
                    </div>
                    <div :class="['recording-cancel', { isCancelStatus: isRecordingCancelStatus }]">
                        <div class="text">
                            <div class="hover"></div>
                            {{ isRecordingCancelStatus ? "松开 取消" : "按住 说话" }}
                        </div>
                    </div>
                </div>
            </div>
            <div :class="['history-sessions', { show: isShowHistorySessions }]">
                <div class="overlay" @click="isShowHistorySessions = false"></div>
                <div class="history-sessions-title">
                    <div class="text">
                        <div>
                            <span
                                class="arrow-left"
                                @click="isShowHistorySessions = false"
                            ></span>
                        </div>
                        <div class="bold">历史会话</div>
                    </div>
                </div>
                <div class="history-sessions-scroll">
                    <div class="history-sessions-content">
                        <div
                            v-for="(session, index) in conversationList"
                            :key="index"
                            :class="['history-session', { active: curConversation.conversationId === session.conversationId }]"
                        >
                            <div
                                class="history-session-content"
                                @click="switchConversation(session)"
                                @contextmenu="deleteConversation(index)"
                            >
                                <div class="history-session-content-text">
                                    {{ session.content }}
                                </div>
                                <div v-if="session.fileList.length > 0" class="image-wrap">
                                    <NuxtImg loading="lazy"
                                        class="image"
                                        :src="session.fileList[0].path"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue'
import { marked } from 'marked'
// Nuxt 3 Composition API 语法
const botId = "7494926120648409114"

// Markdown解析函数
const formatMarkdown = (content) => {
    if (!content) return ''
    if (process.client) {
        return marked(content)
    }
    return content
}

// 响应式状态管理
const isLoading = ref(false)
const curDate = ref(new Date().getTime() + "")
const chatId = ref(0)

const isShowShortcutPopup = ref(false)
const isStartAI = ref(false)
const inputMessage = ref("")
const messageList = ref([
    { type: "bot", status: 1, isTyping: false, content: "" },
])
const isRecording = ref(false)
const isChatEnd = ref(true)
const scrollTop = ref(0)
const tempImagePathList = ref([])
const agentConfig = ref({
    icon_url: "",
    onboarding_info: {
        prologue: "",
    },
    shortcut_commands: [], // 初始化为空数组避免映射错误
})
const commandsTitle = ref("")
const commandsList = ref([])
const isShowHistorySessions = ref(false)
const curConversation = ref({
    conversationId: 0,
    content: "",
    fileList: [],
})
const isSound = ref(false) // 定义 isSound 状态
const isRecordingCancelStatus = ref(false) // 定义录音取消状态
const conversationList = ref([]) // 定义会话列表状态
const cancelToken = ref(null)
const device = ref(null)
const isCommand = ref(false)
const isAlert = ref(false)
const alertMessage = ref("")
const mediaRecorderRef = ref(null)
const chunksRef = ref([])
const inputAreaHeight = ref(0)

// 计算属性：动态设置聊天内容区域高度
const chatContentStyle = computed(() => {
    if (inputAreaHeight.value > 0) {
        return {
            height: `calc(100vh - ${inputAreaHeight.value}px)`
        }
    }
    return {
        height: 'calc(100vh - 120px)' // 默认高度，假设input-area高度为120px
    }
})

// 全局变量
let token = ""
let isHandEnd = false
let agentConfigHeight = 0
let handleAreaTop = 0
let touchY = 0
let stream = null



// 监听会话列表变化
watch(conversationList, (newList) => {
    if (process.client) {
        let conversationListStorage = []
        newList.map((item, index) => {
            conversationListStorage.push(item)
        })
        localStorage.setItem(
            "converList",
            JSON.stringify(conversationListStorage)
        )
    }
}, { deep: true })

// 监听命令状态变化
watch(isCommand, (newValue) => {
    if (newValue) {
        // 如果聊天未结束，取消之前的消息
        if (!isChatEnd.value) {
            stopMessage(() => {
                handleSendMessage()
            })
        } else {
            handleSendMessage()
        }
        isCommand.value = false
    }
})

const keyPress = (e) => {
    // console.log(e)
    if (e.code == "Enter" && !e.shiftKey) {
        handleSendMessage()
    }
}

// 发送消息处理函数
const handleSendMessage = () => {
    if (!canSendMessage()) return
    const currentInputMessage = inputMessage.value
    const fileList = tempImagePathList.value
    isStartAI.value = true
    const messageContent = {
        type: "user",
        status: 1,
        content: currentInputMessage
    }
   
    // 重置聊天ID
    chatId.value = 0

    // 处理图片附件
    if (fileList.length > 0) {
        const messageImage = {
            type: "user",
            status: 1,
            content: "",
            image: [],
        }

        // 添加所有图片到消息中
        fileList.forEach((item) => {
            messageImage.image.push({
                path: item.path,
                id: item.id,
            })
        })

        // 添加图片消息到消息列表
        messageList.value = [...messageList.value, messageImage]
    }

    // 如果有文本内容，添加到消息列表
    if (currentInputMessage.trim() !== "") {
        messageList.value = [...messageList.value, messageContent]
    }

    // 更新当前会话内容
    let newConversation = { ...curConversation.value }
    if (newConversation.content === "") {
        if (currentInputMessage.trim() === "") {
            newConversation.fileList = fileList
        } else {
            newConversation.content = currentInputMessage.trim()
        }
        curConversation.value = newConversation
    }

    // 更新会话列表
    let newList = [...conversationList.value]
    if (newList.length === 0) {
        // 如果会话列表为空，添加当前会话
        conversationList.value = [newConversation]
    } else {
        if (
            newList[0].conversationId !== newConversation.conversationId
        ) {
            // 过滤掉相同ID的会话，并将当前会话添加到列表开头
            newList = newList.filter(
                (item) =>
                    item.conversationId !== newConversation.conversationId
            )
            conversationList.value = [newConversation, ...newList]
        } else if (newList[0].content === "") {
            // 更新第一个会话的内容
            newList[0].content = currentInputMessage.trim()
            conversationList.value = newList
        } else {
            conversationList.value = newList
        }
    }

    // 添加机器人思考状态消息
    messageList.value = [
        ...messageList.value,
        {
            type: "bot",
            status: 1,
            isTyping: true,
            isShowToolResponse: false,
            toolResponse: [],
            content: `dots-container`,
        },
    ]

    // 设置手动结束标志
    isHandEnd = false
    pollingMessage()
}

//创建对话
const createConversation = (callback) => {
    // 使用fetch API发送创建对话请求
    fetch("https://api.coze.cn/v1/conversation/create", {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    })
        .then((response) => response.json())
        .then((data) => {
            // 创建对话成功后更新会话ID
            if (data.code === 0) {
                // 更新当前会话的ID
                curConversation.value = {
                    ...curConversation.value,
                    conversationId: data.data.id,
                }

                // 如果有回调函数则执行
                if (callback) {
                    callback()
                }
            }
        })
        .catch((error) => {
            console.error("创建对话请求失败:", error)
        })
}

// 发起对话
const pollingMessage = () => {
    const message = inputMessage.value
    let additionalMessages = []
    let fileMessage = []

    // 处理图片消息
    if (tempImagePathList.value.length > 0) {
        tempImagePathList.value.forEach((item) => {
            let fileObj = {
                type: "image",
                file_id: item.id,
                file_url: item.path,
            }
            fileMessage.push(fileObj)
        })

        fileMessage.push({
            type: "text",
            text: message,
        })

        additionalMessages.push({
            role: "user",
            type: "question",
            content: JSON.stringify(fileMessage),
            content_type: "object_string",
        })
    } else {
        additionalMessages.push({
            role: "user",
            type: "question",
            content: message,
            content_type: "text",
        })
    }

    // 清空输入和图片列表
    inputMessage.value = ""
    tempImagePathList.value = []

    // 创建请求任务
    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bot_id: botId,
            user_id: curDate.value,
            additional_messages: additionalMessages,
            stream: true,
        }),
        signal: null,
    }

    // 初始化变量
    let unparsedAnswer = ""
    let answerStr = ""
    let answerStatus = "0"
    let index = 0 // 初始化字符索引
    let content = ""
    let isTyping = false

    // 更新消息列表中最后一条消息的状态
    const lastMessageIndex = messageList.value.length - 1
    messageList.value[lastMessageIndex].isTyping = true

    isChatEnd.value = false
    isHandEnd = false

    // 逐字显示消息的函数
    const displayMessage = () => {
        if (isHandEnd) {
            const lastMessageIndex = messageList.value.length - 1
            messageList.value[lastMessageIndex].isTyping = false
            isChatEnd.value = true
            isTyping = false
            isHandEnd = false
            return
        }

        const lastMessageIndex = messageList.value.length - 1
        messageList.value[lastMessageIndex].isTyping = true
        isTyping = true

        if (index < answerStr.length) {
            // 检查是否还有字符未显示
            let canAdd = true
            content = answerStr.slice(0, index)

            if (answerStr[index] === "<") {
                // 查找下一个中文字符或>的索引
                let nextIndex = answerStr
                    .slice(index)
                    .search(/[\u4e00-\u9fa5]/)
                if (nextIndex !== -1) {
                    nextIndex = nextIndex + index
                } else {
                    nextIndex = answerStr.indexOf(">", index)
                }

                if (nextIndex !== -1) {
                    canAdd = false
                    content += answerStr.slice(index, nextIndex)
                    const lastMessageIndex = messageList.value.length - 1
                    messageList.value[lastMessageIndex].content = content
                    index = nextIndex + 1
                }
            }

            if (canAdd) {
                content += answerStr[index]
                const lastMessageIndex = messageList.value.length - 1
                messageList.value[lastMessageIndex].content = content
                index++
            }

            scrollToBottom() // 滚动到底部以显示最新消息
            setTimeout(displayMessage, 30) // 每30毫秒显示下一个字符
        } else {
            if (
                index >= answerStr.length &&
                (answerStatus === "4" || answerStatus === "5")
            ) {
                const lastMessageIndex = messageList.value.length - 1
                messageList.value[lastMessageIndex].isTyping = false
                isChatEnd.value = true
                isTyping = false
            } else {
                setTimeout(displayMessage, 30) // 继续检查
            }
        }
    }

    const controller = new AbortController()
    const signal = controller.signal
    cancelToken.value = controller
    requestOptions.signal = signal

    // 使用fetch API发送请求并处理流式响应
    fetch(
        `https://api.coze.cn/v3/chat?conversation_id=${curConversation.value.conversationId}`,
        requestOptions
    )
        .then((response) => {
            const reader = response.body.getReader()

            // 处理数据流
            function processStream() {
                return reader.read().then(({ done, value }) => {
                    if (done) {
                        return
                    }

                    // console.log(value)

                    // 处理接收到的数据块
                    const chunk = { data: value.buffer }
                    const arrayBuffer = chunk.data
                    const uint8Array = new Uint8Array(arrayBuffer)
                    let str = ""
                    try {
                        str = decodeURIComponent(
                            escape(
                                String.fromCharCode.apply(null, uint8Array)
                            )
                        )
                        // console.log(str)
                    } catch (err) {
                        // console.log(err)
                    }

                    // 处理流数据
                    const answer = processStreamData(str)

                    // 处理工具响应
                    if (
                        answer.toolResponse &&
                        answer.toolResponse.length > 0
                    ) {
                        const lastMessageIndex = messageList.value.length - 1
                        messageList.value[lastMessageIndex].toolResponse = answer.toolResponse
                    }

                    // 更新聊天ID
                    if (answer.answerStatus == "2") {
                        chatId.value = answer.chatId
                    }

                    // 处理回答内容
                    if (answer.answerStatus == "3") {
                        unparsedAnswer += answer.fullAnswer
                        answerStr = unparsedAnswer
                        // console.log(answerStr)

                        // 检查并清除加载动画
                        const lastMessageIndex = messageList.value.length - 1
                        if (messageList.value[lastMessageIndex].content.includes("dots-container")) {
                            messageList.value[lastMessageIndex].content = ""
                        }

                        // 开始逐字显示
                        if (isTyping === false) {
                            isChatEnd.value = false
                            displayMessage()
                        }
                    }

                    if (
                        answer.answerStatus == "3" ||
                        answer.answerStatus == "4" ||
                        answer.answerStatus == "5"
                    ) {
                        answerStatus = answer.answerStatus
                    }

                    scrollToBottom()

                    // 继续处理流
                    return processStream()
                })
            }

            return processStream()
        })
        .catch((error) => {
            console.error("请求失败:", error)
        })
}

// 取消消息函数
const cancelMessage = (callback = () => {}) => {
    // 使用fetch API替代uni.request
    fetch("https://api.coze.cn/v3/chat/cancel", {
        method: "POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            conversation_id: curConversation.value.conversationId,
            chat_id: chatId.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // 设置聊天结束状态
            if (callback) {
                callback()
            } else {
                isChatEnd.value = true
            }
        })
        .catch((error) => {
            console.error("取消消息请求失败:", error)
        })
}

//获取消息
const getMessage = (conversationId) => {
    // 使用fetch API发送请求获取消息列表
    fetch(
        `https://api.coze.cn/v1/conversation/message/list?conversation_id=${conversationId}`,
        {
            method: "POST",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => response.json())
        .then((res) => {
            if (res.code === 0) {
                const data = res.data
                const list = []

                // 倒序遍历消息数据
                for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i].content_type === "object_string") {
                        // 处理对象类型的消息内容
                        const objectList = JSON.parse(data[i].content)
                        const imageList = []
                        let textContent = ""

                        objectList.forEach((obj) => {
                            if (obj.type === "image") {
                                imageList.push({
                                    path: obj.file_url,
                                    id: obj.id,
                                })
                            } else {
                                textContent = obj.text
                            }
                        })

                        // 添加图片消息
                        list.push({
                            type: "user",
                            status: 1,
                            content: "",
                            image: imageList,
                        })

                        // 添加文本消息
                        if (textContent) {
                            list.push({
                                type: "user",
                                status: 1,
                                content: textContent,
                            })
                        }
                    } else {
                        // 处理普通文本消息
                        list.push({
                            type:
                                data[i].type === "answer" ? "bot" : "user",
                            status: 1,
                            content: data[i].content,
                        })
                    }
                }
                // 更新消息列表状态
                messageList.value = list

                // 滚动到底部
                setTimeout(() => {
                    scrollToBottom()
                }, 150)
            }
        })
        .catch((error) => {
            console.error("获取消息失败:", error)
        })
}

const scrollToBottom = () => {
    if (process.client && window && window.document) {
        const messageListElement =
            window.document.querySelector(".chat-content")

        if (messageListElement) {
            messageListElement.scrollTop = messageListElement.scrollHeight
        }
    }
}

// 检查是否可以发送消息
const canSendMessage = () => {
    return inputMessage.value.trim() !== "" || tempImagePathList.value.length > 0
}

// 预览图片
const predivImage = (path) => {
    // console.log("预览图片路径:", path)
}

// 复制消息内容
const copyMessage = async (content) => {
    try {
        await navigator.clipboard.writeText(content)
        alertMessage.value = "复制成功"
        isAlert.value = true
        setTimeout(() => {
            isAlert.value = false
        }, 1500)
    } catch (err) {
        console.error("复制失败:", err)
    }
}

// 选择快捷方式
const selectShortcut = (item) => {
    if (isShowShortcutPopup.value && item.name == commandsTitle.value) {
        isShowShortcutPopup.value = false
        return
    }
    commandsTitle.value = item.name
    commandsList.value = item.components[0].options
    isShowShortcutPopup.value = true
}

// 选择命令
const selectCommand = (item) => {
    isStartAI.value = true
    inputMessage.value = item
    isCommand.value = true
    isShowShortcutPopup.value = false
}

// 获取文本框高度
const getTellHeight = () => {
    // 这里可以添加获取文本框高度的逻辑
}

// 重置文本框高度
const resetTellHeight = () => {
    // 这里可以添加重置文本框高度的逻辑
}

// 开始录音
const startRecording = (e) => {
    const handleArea = null
    const touchEvent = e.touches[0]
    isRecording.value = true
    isRecordingCancelStatus.value = false

    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
            mediaRecorderRef.value = new MediaRecorder(stream)
            mediaRecorderRef.value.start()
            mediaRecorderRef.value.ondataavailable = (event) => {
                chunksRef.value.push(event.data)
            }
            // console.log("MediaRecorder created successfully")
        })
        .catch((error) => {
            console.error("Error accessing media devices:", error)
        })
    
    if (process.client && window && window.document) {
        const handleAreaElement = window.document.querySelector(".handle-area")
        if (handleAreaElement) {
            // 获取handle-area距离顶部的距离
            handleAreaTop = handleAreaElement.getBoundingClientRect().top
            touchY = touchEvent.clientY
        }
    }
}

// 停止录音
const stopRecording = (e) => {
    isRecording.value = false
    if (touchY < handleAreaTop) {
        // 设置录音取消状态为true
        isRecordingCancelStatus.value = true
    } else {
        // 设置录音取消状态为false
        isRecordingCancelStatus.value = false
        if (mediaRecorderRef.value) {
            mediaRecorderRef.value.onstop = async () => {
                const blob = new Blob(chunksRef.value, {
                    type: "audio/wav",
                })
                const formData = new FormData()
                formData.append("file", blob, "record.wav")
                uploadVoice(formData)
            }
            mediaRecorderRef.value.stop()
        }
    }
}

// 移动录音
const moveRecording = (e) => {
    const touchEvent = e.touches[0]
    const currentTouchY = touchEvent.clientY
    touchY = touchEvent.clientY
    // 判断当前触摸位置是否在handle-area上方
    if (currentTouchY < handleAreaTop) {
        // 设置录音取消状态为true
        isRecordingCancelStatus.value = true
    } else {
        // 设置录音取消状态为false
        isRecordingCancelStatus.value = false
    }
}

// 取消录音
const cancelRecording = () => {
    isRecording.value = false
    isRecordingCancelStatus.value = false
}

const uploadVoice = async (formData) => {
    try {
        isLoading.value = true
        // 发送请求上传录音文件
        const response = await fetch(
            "https://api.coze.cn/v1/audio/transcriptions",
            {
                method: "POST",
                headers: {
                    Authorization: token,
                },
                body: formData,
            }
        )

        const data = await response.json()

        if (data.code === 0 && data.data) {
            isLoading.value = false
            // 将识别结果添加到输入框
            inputMessage.value = data.data.text

            if (!isChatEnd.value) {
                stopMessage(() => {
                    handleSendMessage()
                })
            } else {
                handleSendMessage()
            }
        } else {
            isLoading.value = false
            alertMessage.value = "识别失败"
            isAlert.value = true
            setTimeout(() => {
                isAlert.value = false
            }, 1500)
        }
    } catch (error) {
        console.error("语音识别失败:", error)
    }
}

// 停止消息
const stopMessage = (callback = () => {}) => {
    // 停止消息发送
    isChatEnd.value = true
    isHandEnd = true

    // 取消fetch请求
    if (cancelToken.value) {
        cancelToken.value.abort("User navigated away")
        
        // 查找最后一条机器人消息并更新状态
        for (let i = messageList.value.length - 1; i >= 0; i--) {
            if (
                messageList.value[i].type === "bot" &&
                messageList.value[i].isTyping
            ) {
                // 更新消息状态
                messageList.value[i] = {
                    ...messageList.value[i],
                    isTyping: false,
                    status: 2, // 设置为已完成状态
                    content: messageList.value[i].content,
                }
                break
            }
        }
        
        if (chatId.value != 0) {
            if (callback) {
                cancelMessage(callback)
            } else {
                cancelMessage()
            }
        } else {
            setTimeout(() => {
                if (callback) callback()
            }, 100)
        }
    }
}

// 删除图片
const deleteImage = (index) => {
    tempImagePathList.value = tempImagePathList.value.filter((_, i) => i !== index)
}

// 新建会话
const newConversationFn = () => {
    isStartAI.value = true
    createConversation(() => {
        // 更新当前会话
        curConversation.value = {
            ...curConversation.value,
            content: "",
            fileList: [],
        }

        // 更新消息列表
        messageList.value = [
            {
                type: "bot",
                status: 1,
                isTyping: false,
                content: agentConfig.value.onboarding_info.prologue,
            },
        ]

        // 更新其他状态
        isShowHistorySessions.value = false
        scrollTop.value = 0
    })
}

// 切换会话
const switchConversation = (session) => {
    // 检查是否为当前会话
    if (curConversation.value.conversationId === session.conversationId) {
        isShowHistorySessions.value = false
        return
    }

    // 设置AI开始状态
    if (!isStartAI.value) {
        isStartAI.value = true
    }

    // 如果对话未结束,先停止
    if (!isChatEnd.value) {
        stopMessage()
    }

    // 保存当前会话内容到会话列表
    if (curConversation.value.content.trim() !== "") {
        conversationList.value = conversationList.value.map((item) => {
            if (
                item.conversationId === curConversation.value.conversationId &&
                messageList.value.length > 1
            ) {
                return {
                    ...item,
                    messageList: [...messageList.value],
                }
            }
            return item
        })
    }
    
    // 加载会话消息
    if (session.messageList && session.messageList.length > 1) {
        messageList.value = session.messageList
        setTimeout(() => {
            scrollToBottom()
        }, 100)
    } else {
        messageList.value = []
        getMessage(session.conversationId)
    }

    // 更新当前会话
    curConversation.value = { ...session }

    // 更新UI状态
    isShowHistorySessions.value = false
    inputMessage.value = ""
}

// 删除会话
const deleteConversation = (index) => {
    conversationList.value = conversationList.value.filter((_, i) => i !== index)
}

// 停止点
const stopPoint = () => {
    // 这里可以添加停止点的逻辑
}

const switchSound = () => {
    if (device.value == "mobile") {
        try {
            stream = navigator.mediaDevices.getUserMedia({ audio: true })
            isSound.value = true
        } catch (err) {
            isSound.value = false
            // console.log(err)
            return
        }
    } else {
        isSound.value = false
    }
}

const processStreamData = (streamData) => {
    let chatId = ""
    let fullAnswer = ""
    let answerStatus = "0"
    let toolResponse = []
    let otherQuestion = []
    const lines = streamData.split("\n")
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith("event:conversation.chat.created")) {
            answerStatus = "1"
            const dataLine = lines[++i].trim()
            if (dataLine.startsWith("data:")) {
                const dataStr = dataLine.slice(5)
                try {
                    const data = JSON.parse(dataStr)
                    if (chatId == "") {
                        chatId = data.id
                    }
                } catch (error) {
                    console.error("解析 JSON 数据时出错:", error)
                }
            }
        } else if (line.startsWith("event:conversation.chat.in_progress")) {
            answerStatus = "2"
        }
        if (line.startsWith("event:conversation.message.delta")) {
            answerStatus = "3"
            const dataLine = lines[++i].trim()
            if (dataLine.startsWith("data:")) {
                const dataStr = dataLine.slice(5)
                try {
                    const data = JSON.parse(dataStr)
                    if (
                        data.role === "assistant" &&
                        data.type === "answer"
                    ) {
                        fullAnswer += data.content
                    }
                } catch (error) {
                    console.error("解析 JSON 数据时出错:", error)
                }
            }
        } else if (
            line.startsWith("event:conversation.message.completed")
        ) {
            const dataLine = lines[++i].trim()
            if (dataLine.startsWith("data:")) {
                const dataStr = dataLine.slice(5)
                try {
                    const data = JSON.parse(dataStr)
                    if (
                        data.role === "assistant" &&
                        data.type === "answer"
                    ) {
                        answerStatus = "4"
                        fullAnswer = data.content
                    }
                    if (
                        data.role === "assistant" &&
                        data.type === "follow_up"
                    ) {
                        otherQuestion.push(data.content)
                    }
                    if (
                        data.role === "assistant" &&
                        data.type === "tool_response"
                    ) {
                        let toolResponseData = JSON.parse(data.content).data
                        if (toolResponseData.doc_results) {
                            toolResponse = JSON.parse(data.content).data
                                .doc_results
                        }
                    }
                } catch (error) {
                    console.error("解析 JSON 数据时出错:", error)
                }
            }
        }
        if (line.startsWith("event:conversation.chat.completed")) {
            answerStatus = "5"
        }
    }
    return { fullAnswer, chatId, answerStatus, toolResponse, otherQuestion }
}

//选择图片
const selectImage = (e) => {
    // 获取选择的文件
    const files = Array.from(e.target.files)
    // 清空input值，允许重复选择相同文件
    e.target.value = ""
    uploadImage(files)
}

// 上传图片
const uploadImage = (files) => {
    // 递归上传文件
    const uploadFileRecursive = async (
        files,
        index = 0,
        successCount = 0,
        failCount = 0
    ) => {
        // 如果所有文件都已上传，结束递归
        if (index >= files.length) {
            isLoading.value = false
            return
        }

        // 创建FormData对象
        const formData = new FormData()
        formData.append("file", files[index])

        try {
            // 发起上传请求
            const response = await fetch(
                "https://api.coze.cn/v1/files/upload",
                {
                    method: "POST",
                    headers: {
                        Authorization: token,
                    },
                    body: formData,
                }
            )

            const result = await response.json()

            // 处理上传结果
            if (result.code === 0) {
                // 上传成功，添加到图片列表
                tempImagePathList.value = [
                    ...tempImagePathList.value,
                    {
                        path: URL.createObjectURL(files[index]),
                        id: result.data.id,
                    },
                ]
                successCount++
            } else {
                failCount++
            }
        } catch (error) {
            console.error("上传图片失败:", error)
            failCount++
        } finally {
            // 继续上传下一个文件
            uploadFileRecursive(files, index + 1, successCount, failCount)
        }
    }

    // 开始上传过程
    if (files && files.length > 0) {
        isLoading.value = true
        uploadFileRecursive(files)
    }
}

// 在组件挂载时获取机器人配置信息
onMounted(() => {
    // 初始化会话列表
    if (process.client) {
        const cachedValue = localStorage.getItem("converList")
        conversationList.value = cachedValue ? JSON.parse(cachedValue) : []
    }

    if (process.client && window && window.document) {
        let rootWidth =
            window.document.documentElement.clientWidth ||
            window.document.body.clientWidth
        let rootDom = window.document.querySelector("html")
        let fontSize = rootWidth / 23
        
        if (fontSize < 12) {
            fontSize = 12
        } else if (fontSize > 16) {
            fontSize = 20
        }
        rootDom.style.fontSize = fontSize + "px"

        // 使用 nextTick 确保 DOM 已渲染完成
        nextTick(() => {
            const inputDom = window.document.querySelector(".input-area")
            const agentConfigDom = window.document.querySelector(".agent-config")
            
            if (inputDom) {
                inputAreaHeight.value = inputDom.clientHeight
            }
            if (agentConfigDom) {
                agentConfigHeight = agentConfigDom.clientHeight
            }
        })

        // 监听窗口大小变化，重新计算高度
        const handleResize = () => {
            nextTick(() => {
                const inputDom = window.document.querySelector(".input-area")
                if (inputDom) {
                    inputAreaHeight.value = inputDom.clientHeight
                }
            })
        }

        window.addEventListener('resize', handleResize)
        
        // 组件卸载时移除监听器
        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })
    }

    // 判断是否是移动设备
    const checkDevice = () => {
        if (!process.client) return
        
        // 获取用户代理字符串
        const userAgent = navigator.userAgent.toLowerCase()

        // 定义移动设备的特征关键词
        const mobileKeywords = [
            "mobile",
            "android",
            "iphone",
            "ipad",
            "windows phone",
        ]

        // 检查是否包含移动设备关键词
        const isMobile = mobileKeywords.some((keyword) =>
            userAgent.includes(keyword)
        )

        // 设置设备类型状态
        device.value = isMobile ? "mobile" : "desktop"

        // 根据设备类型调整页面样式
        if (window && window.document) {
            if (isMobile) {
                window.document.body.classList.add("mobile-device")
            } else {
                window.document.body.classList.add("desktop-device")
            }
        }
    }

    // 执行设备检测
    checkDevice()

    const getToken = async () => {
        const response = await fetch(
            "https://dsy.stoneboss.vip/api/red-sale/cozeApi/getAccessToken"
        )

        const data = await response.json()
        token = "Bearer " + data.data
        fetchAgentConfig()
    }

    // 获取机器人在线信息的函数
    const fetchAgentConfig = async () => {
        try {
            // 配置请求头信息
            const headers = {
                Authorization: token,
                "Content-Type": "application/json",
            }

            // 将请求头添加到fetch请求中
            const requestOptions = {
                method: "GET",
                headers: headers,
            }

            // 使用配置好的请求选项
            const response = await fetch(
                "https://api.coze.cn/v1/bot/get_online_info?bot_id=" +
                    botId,
                requestOptions
            )

            // 调试输出请求头信息
            // console.log("请求头信息:", headers)

            // 检查响应状态
            if (!response.ok) {
                throw new Error(`API请求失败: ${response.status}`)
            }

            // 解析响应数据
            const data = await response.json()

            // 将获取的数据设置到状态中
            agentConfig.value = data.data
            createConversation(() => {})
            
            // 更新第一个消息的内容
            const newList = [...messageList.value]
            newList[0] = {
                ...newList[0],
                content: data.data.onboarding_info.prologue,
            }
            messageList.value = newList

            // 调试输出
            // console.log("机器人配置信息:", data)
        } catch (error) {
            // 错误处理
            console.error("获取机器人配置信息失败:", error)
        }
    }

    // 调用获取函数
    getToken()
})
</script>

<style scoped lang="scss">
html{
        -webkit-tap-highlight-color:transparent;
   }         
body{
	scrollbar-width: none;
	scrollbar-color: transparent transparent;
}
.alert-success{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    padding:0.4rem 1rem;
    font-size:0.8rem;
    color:#fff;
    background:rgba(0,0,0,0.6);
    border-radius:0.5rem;
    z-index:1000;

}
.loading-wrap{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius:8px;
    background:rgba(0,0,0,0.8);
}
.loading-box{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:30px;
    height:30px;
    position: relative;
    box-sizing: border-box;
     
     .loading{
        position:relative;
        width:30px;
        height:30px;
        animation: loadingAnimate 1s linear infinite;
     }
    .loading-icon__dot{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .loading-icon__dot::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 40%;
        content: " ";
    }
    /* 12个点的旋转角度和透明度 */
    .loading-icon__dot:nth-of-type(1) {
        transform: rotate(30deg);
        opacity: 1;
    }

    .loading-icon__dot:nth-of-type(2) {
        transform: rotate(60deg);
        opacity: 0.9375;
    }

    .loading-icon__dot:nth-of-type(3) {
        transform: rotate(90deg);
        opacity: 0.875;
    }

    .loading-icon__dot:nth-of-type(4) {
        transform: rotate(120deg);
        opacity: 0.8125;
    }

    .loading-icon__dot:nth-of-type(5) {
        transform: rotate(150deg);
        opacity: 0.75;
    }

    .loading-icon__dot:nth-of-type(6) {
        transform: rotate(180deg);
        opacity: 0.6875;
    }

    .loading-icon__dot:nth-of-type(7) {
        transform: rotate(210deg);
        opacity: 0.625;
    }

    .loading-icon__dot:nth-of-type(8) {
        transform: rotate(240deg);
        opacity: 0.5625;
    }

    .loading-icon__dot:nth-of-type(9) {
        transform: rotate(270deg);
        opacity: 0.5;
    }

    .loading-icon__dot:nth-of-type(10) {
        transform: rotate(300deg);
        opacity: 0.4375;
    }

    .loading-icon__dot:nth-of-type(11) {
        transform: rotate(330deg);
        opacity: 0.375;
    }

    .loading-icon__dot:nth-of-type(12) {
        transform: rotate(360deg);
        opacity: 0.3125;
    }
}

@keyframes loadingAnimate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.normal-flex{
	display:flex;
	align-items:center;
}
.between{
	display:flex;
	align-items:center;
	justify-content:space-between;
}

.chat-container {
	font-size:0;
	height: 100%;
	background: linear-gradient(197deg, #CBEBFF -16%, #FFFFFF 20%, #FFFFFF 103%, #F3FFE7 119%);
    &.pc{
        padding-left:80px;
    }
	.chat-header{
		position: fixed;
        top: 50%;
        left: 14px;
        transform: translate(0, -50%);
        width: 60px;
        font-size: 14px;
        background-color: #fafbff;
        border-radius: 12px;
        padding: 14px 0 14px;
        text-align: center;
        box-shadow:
            2px 2px 7.7px 0px rgba(146, 159, 202, .19), 0px 0px 1px 1px rgba(255, 255, 255, .45) inset;
        z-index: 999;
		.history-menu{
			height:1.5625rem;
            cursor:pointer;
			
			.history-menu-icon{
				width: 1.5625rem;
                cursor: pointer;
			}
			
		}
		.new-menu{
			margin-bottom: 20px;
            cursor: pointer;
            img{
                width:1.5625rem;
                opacity:0.8;
            }
		}
	}
	
	
	.chat-content {
		position: relative;
        max-width: 780px;
        margin: 0 auto;
        padding-bottom: 5.5rem;
        overflow-y: scroll;
        z-index: 100;
        box-sizing: border-box;
        
		.empty-content{
			  position: absolute;
                top: 4.6875rem;
                left: 50%;
                transform: translate(-50%,0);
                width: 15.625rem;
                text-align: center;
			.empty-image{
				width:9.375rem;
				margin-bottom:0.625rem;
			}
			.empty-text{
				font-size:0.7rem;
			}
			.empty-btn{
				display:inline-block;
				margin-top:0.625rem;
				font-size:0.7rem;
				color:#000;
				border:0.03125rem solid #000;
				border-radius:1.25rem;
				padding:0.3125rem 0.625rem;
			}
		}
		.message-list {
            position:relative;
            z-index:11;
			padding:0.625rem 0.9375rem;
			.message-item {
				margin-bottom: 1.5rem;
				
				.avatar {
					width: 1.875rem;
					height: 1.875rem;
					border-radius: 50%;
				}
				.bot-name{
					margin-bottom:0.625rem;
					.text{
						margin-left:0.9375rem;
						font-size:0.775rem;
						color:#707070;
					}
				}
				.user-avatar{
					padding: 0.3125rem;
					box-sizing: border-box;
					background:#439DF1;
				}
				
				.message-bubble {
					line-height:1.5;
					font-size:0.7rem;
					padding:0.46875rem 0.9375rem;
					word-break: normal;
                    table{
                        border-collapse: collapse;
                        th{
                            padding:5px; 
                            background-color: #f5f5f5; 
                            font-weight: bold; 
                            border:1px solid #e0e0e0;
                        }
                        tr{
                            border: 1px solid #e0e0e0;
                        }
                        td{
                            padding:5px; 
                            border-right: 1px solid #e0e0e0;
                        }
                    }

					.tool-response-wrap{
						.tool-response-item{
							white-space:nowrap;
							overflow:hidden;
							text-overflow:ellipsis;
						}
					}

					.message-handle{
						display:flex;
						flex-direction: row-reverse;
						padding:0.3125rem 0;
						.message-handle-icon{
							width:1.09375rem;
                            cursor:pointer;
						}
					}
					
					.message-text {
						font-size: 0.7rem;
					}
					.message-stop{
						margin-top: 0.625rem;
						font-size:0.7rem;
						color:#707070;
					}
					
					.message-image {
						max-width: 6.25rem;
						border-radius: 0.3125rem;
					}
				}
			}
			
			.message-bot {
				.message-bubble {
					border-radius: 0 0.5rem 0.5rem 0.5rem;
					background-color: #fff;
					box-shadow: 0px 0.0625rem 0.25rem 0px rgba(18, 110, 235, 0.08);
				}
			}
			
			.message-user {
				display:flex;
				flex-direction: row-reverse;
				margin-left: 2.5rem;
				
				.message-bubble {
					background-color: #439DF1;
					border-radius: 0.5rem 0 0.5rem 0.5rem;
					color: #fff;
					box-shadow: 0px 0.25rem 0.3125rem 0px rgba(18, 110, 235, 0.09);
				}
			}
		}
	}

	.content-bottom-bg{
		position:fixed;
		bottom:-3.125rem;
		left:1.25rem;
		width:100%;
		height:20.9375rem;
		background: #D8E8FF;
		filter: blur(14.5rem);
		border-radius:50%;
		z-index:10;
	}
	
	.input-area {
		position:fixed;
		width:100%;
		max-width:780px;
		bottom:0;
		left:50%;
		transform:translate(-50%,0);
		padding: 0 0.9375rem 0.9375rem;
		opacity: 1;
		z-index:101;
		transition:opacity 0.1s linear;
        &.pc{
            padding-left:80px;
        }

		&.isHide{
			opacity: 0;
		}
		
		.agent-config{
			position:absolute;
			width:100%;
			left:0;
			bottom:100%;
			padding:0.3125rem 0;
			white-space:nowrap;
			overflow-x:auto;
			box-sizing:border-box;
			.agent-config-item{
				display:inline-block;
				background:#fff;
				color:#333;
				padding:0.46875rem 0.78125rem;
				border-radius:0.9375rem;
				margin-right:0.3125rem;
                 cursor:pointer;
				.three-row{
					position:relative;
					display:inline-block;
					vertical-align:middle;
					width:0.9375rem;
					height:0.78125rem;
					.row{
						position:absolute;
						width:100%;
						height:0.06875rem;
						background:#575B66;
						border-radius:0.06875rem;
						&:nth-child(1){
							top:50%;
							transform:translate(0, -50%);
						}
						&:nth-child(2){
							bottom:0;
						}
					}
				}
				.text{
					display:inline-block;
					vertical-align:middle;
					margin-left:0.9375rem;
					font-size:0.7rem;
				}
			}
		}
		.preview-image {
			margin-top:0.625rem;
			background: #fff;
			border-radius: 0.25rem;
			overflow-x:auto;
			white-space:nowrap;
			.preview-thumb {
				position:relative;
				display:inline-block;
				width: 3.125rem;
				height: 3.125rem;
				
				margin-right: 0.625rem;
				.image{
					width: 3.125rem;
					height: 3.125rem;
					border-radius: 0.5rem;
				}
			}
			
			.delete-btn-wrap{
				position: absolute;
				top: 0.15625rem;
				right: 0.15625rem;
				width:1.125rem;
				height:1.125rem;
			}
			.delete-btn {
				position: absolute;
				top: 0;
				right: 0;
				width: 0.8125rem;
				height: 0.8125rem;
				line-height: 0.75rem;
				text-align: center;
				background: #4e4e4e;
				color: #fff;
				border-radius: 50%;
				font-size: 0.625rem;
			}
		}
		.handle-area{
			padding:0.625rem 0.9375rem;
			border-radius:2.5rem;
			background-color: #fff;
			box-shadow: 0px 0.25rem 0.3125rem 0px rgba(18, 110, 235, 0.09);
			&.has-image{
				border-radius:1.25rem;
			}
			.handle-item{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.key-voice-btn{
					width:1.7rem;
					overflow:hidden;
					transition:width 0.3s linear;
					&.isHide{
						width:0;
					}
				}
			}
		}
		
		.upload-btn {
			position:relative;
			width: 1.25rem;
			height: 1.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				width: 100%;
				height: 100%;
				opacity: 0;
			}
			
			&::before, &::after {
				content: ''; /* 生成伪元素 */
				position: absolute; /* 绝对定位 */
				width: 0.0625rem; /* 线条宽度 */
				height: 0.9375rem; /* 线条高度 */
				background-color: #333; /* 线条颜色 */
				top: 0.15625rem; /* 顶部对齐 */
				left: 50%; /* 水平居中 */
				transform: translateX(-50%); /* 使线条居中 */
			}
			&::after {
				transform: translateX(-50%) rotate(90deg); /* 旋转90度以形成交叉 */
			}
		}
		
		.keyboard-btn,
		.voice-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 1.7rem;
            height: 1.7rem;
			.icon {
				width: 1.7rem;
			}
		}
        .key-voice-btn{
            margin-right:0.45rem;
        }
		
		.input-wrapper {
			flex:1;
			margin:0 0.25rem;
			position: relative;
			
			.message-input {
				width:100%;
				height: 1.375rem;
				max-height:2.75rem;
				line-height: 1.5;
				padding: 0.0625rem 0.625rem 0;
				border-radius: 2.5rem;
				font-size: 0.7rem;
				box-sizing: border-box;
				border:none;
				outline:none;
                resize:none;
				/* 防止iOS默认样式 */
				-webkit-appearance: none;
    			appearance: none;
				
			}
			.voice-input{
				width: 100%;
				height:1.75rem;
				line-height: 1.75rem;
				text-align: center;
				font-size: 0.7rem;
				background:#fff;
				border-radius: 2.5rem;
				box-sizing:border-box;
                user-select: none;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -Khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                touch-action: none;
			}
			
			
		}
		
		.send-btn {
            position:relative;
			margin-left: 0.45rem;
			width: 1.7rem;
			height: 1.7rem;
			line-height: 1.7rem;
			text-align: center;
			background-color: rgba(55, 107, 253, 1);
			color: #ffffff;
			border-radius: 100%;
			font-size: 1.7rem;
			padding:0;
            border:none;
             cursor: pointer;
			
			&.disabled {
				background-color:#F8F8F8;
			}
			.send-icon{
				margin: -0.3rem 0.25rem 0 0;
				width: 0.75rem;
				height: 0.75rem;
                vertical-align: middle;
			}
			.stop-icon{
				position:absolute;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				width:0.6rem;
				height:0.6rem;
				background:#fff;
				border-radius:0.1rem;
			}
		}
	}
	
	.recording-mask {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0rem;
		padding:0  0.9375rem  0.9375rem;
		text-align:center;
		z-index: 999;
		display:none;
		opacity:0;
		transition:opacity 0.3s linear;
		&.isShow{
			display:block;
			opacity:1;
		}

		.recording-cancel{
			height:2.95rem;
			line-height:2.95rem;
			border-radius:2.95rem;
			font-size:0.7rem;
			font-weight:bold;
			background:#376bfd;
			.text{
				color:rgba(0,0,0, 0.3);
			}
            .hover{
                position:absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                z-index:1;
            }
			&.isCancelStatus{
				background:red;
				.text{
					color:#fff;
				}
			}
		}
		
		.recording-content {
			width:12rem;
			height:12rem;
			margin:0 auto 1.5rem;
			.recording-circle{
				position:absolute;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				opacity:0;
				border-radius:50%;
				background: rgba(255, 255, 255, 0.3);
				box-shadow: 0px 4px 10px 0px rgba(18, 110, 235, 0.09);
				z-index: 9;
				animation: voiceAnimation 3s linear infinite;
			}
			.recording-circle-2{
				animation-delay: 1s;
			}
			.recording-circle-3{
				animation-delay: 2s;
			}
			.recording-icon{
				position:absolute;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				width:3rem;
				height:3rem;
				z-index: 10;
				img{
					width:100%;
				}
			}
		}

		@keyframes voiceAnimation {
			0% {
				width:4rem;
				height:4rem;
				opacity: 1;
			}
			50% {
				width:8rem;
				height:8rem;
				opacity: 0.5;
			}
			100% {
				display:none;
				width:12rem;
				height:12rem;
				opacity: 0;
			}
		}
	}

	.shortcut-popup{
        display:none;
        position: absolute;
        width: 100%;
        height: 20rem;
        bottom: 2.3rem;
        left: 50%;
        transform: translate(-50%, 0);
        padding:0.8rem 0;
        background: #fff;
        z-index: 1000;
        border-radius:16px;
        box-sizing: border-box;
        overflow: hidden;
        &.show{
            display:block;
        }
		.shortcut-title-wrap {
            display:flex;
            justify-content:space-between;
			margin-bottom:0.25rem;
		}
		.shortcut-title{
			font-family: 'Microsoft YaHei';
			font-weight: bold;
			font-size:1rem;
            padding:0 0.9375rem;
			color:#3D3D3D;
		}
		.close-btn {
            margin-right:0.5rem;
			width: 1.2rem; 
			height: 1.2rem;
			position: relative;
			cursor: pointer; 
		}

		.close-btn::before, .close-btn::after {
			content: '';
			position: absolute;
			width: 0.125rem;
			height: 1.2rem; 
			background-color: #3D3D3D;
			top: 0; 
			left: 50%; 
			transform: translateX(-50%) rotate(-45deg);
		}

		.close-btn::after {
			transform: translateX(-50%) rotate(45deg); 
		}
		
		.list-scroll{
			width:auto;
			max-height:20.4375rem;
            overflow-y:auto;
			min-height:25rem;
            margin-top:0.5rem;
		}
		.shortcut-item{
			background:rgba(255,255,255,1);
			color:#333;
            margin-bottom:0.2rem;
			padding:0.3rem 0.9375rem;
			font-size:0.7rem;
			border-radius:0.625rem;
            cursor: pointer;
		}
	}


	.back-down-btn{
		position:fixed;
		right:1.25rem;
		width:2.5rem;
		height:2.5rem;
		border:0.125rem solid #ccc;
		border-radius:50%;
		z-index: 999;
		.back-down-icon{
			position:absolute;
			top:50%;
			left:50%;
			transform:translate(-50%,-50%);
			width:1.875rem;
		}
	}

	.dots-container {
		display: flex;
		height:1.5rem;
		justify-content: start;
		align-items: center;
	}

	.dot {
		width: 0.425rem;
		height: 0.425rem;
		background-color: black;
		border-radius: 50%;
		margin: 0 0.3125rem;
		animation: dotFade 1.5s infinite; /* 动画持续时间和循环 */
		-webkit-animation:dotFade 1.5s infinite;
	}

	.dot:nth-child(1) {
		animation-delay: 0s; /* 第一个圆点立即开始动画 */
	}

	.dot:nth-child(2) {
		animation-delay: 0.5s; /* 第二个圆点延迟0.5秒开始动画 */
	}

	.dot:nth-child(3) {
		animation-delay: 1s; /* 第三个圆点延迟1秒开始动画 */
	}
	@keyframes dotFade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes dotFade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}
	.safe-area{
		padding-bottom:constant(safe-area-inset-bottom);
		padding-bottom:env(safe-area-inset-bottom);
	}
}

.history-sessions{
		position:fixed;
		top:0;
        left:-1000%;
		width:100%;
		bottom:0;
		z-index:1001;
		&.show{
			left:0 !important;
			.overlay{
				left:0;
				opacity: 1;
			}
		}
        .arrow-left{
            position:fixed;
            top:0.5rem;
            left:0.5rem;
            
        }
		.history-sessions-title{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:3rem;
			line-height:3rem;
			text-align:center;
			z-index:1005;
			.text{
				position:relative;
				font-size:0.7rem;
				color:#000;
			}
			.new-conversation-icon{
				position:absolute;
				width:1.5rem;
				top:50%;
				left:3.25rem;
				transform:translate(0, -50%);
			}
		}
		.history-sessions-scroll{
			position:relative;
            padding-top:0.7rem;
			height:100%;
			background:#fff;
            box-sizing:border-box;
            overflow-y:auto;
			z-index:1003;
		}
		.history-sessions-content{
			height:100%;
			padding:0 1.25rem 1.25rem;
			box-sizing: border-box;
			.new-session{
				margin-bottom:1.875rem;
				padding:0 1.25rem;
				font-size:1.75rem;
			}
			.history-session{
				&.active{
					color:#439DF1;
				}
			}
			.history-session-content{
				padding:0.5375rem 0;
                .image{
                    width:2.3rem;
                    height:2.3rem;
                    border-radius:0.5rem;
                }
                .image-wrap{
                     margin-top:0.5rem;
                }
			}
			.history-session-content-text{
				font-size:0.75rem;
			}
		}
	}

.mobile-device{
    .chat-header{
        width:auto;
        padding:5px 15px;
        top:14px;
        transform:translate(0 ,0);
        text-align:center;
        .new-menu{
            margin:0 15px 0 0;
            img{
                width:1.4rem;
            }
        }
        .history-menu{
            width:1.3rem;
            img{
                width:1.3rem;
            }
        }
        .bar-back{
            display:flex;
            justify-content:center;
        }
    }
     .message-list{
        padding-top:80px !important;
    }
    .history-sessions-title{
        position:absolute;
        width:85%;
        background:#fff;
        .arrow-left{
            position:absolute;
            left:10px;
            top:2px;
            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 3px;
                background: #333;
                top: 20px;
                left: 6px;
                border-radius: 2px;
            }
            &::before{
                transform: rotate(-45deg);
            }
            &::after{
                 top: 30px;
                transform: rotate(45deg);
            }
        }
    }
    .overlay{
        position:fixed;
        top:0;
        left:-1000%;
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, 0.7);
        opacity:0;
        z-index:1000;
    }
    .history-sessions{
		width:100%;
        left:-100%;
		transition:left 0.3s linear;
        
    }
    .history-sessions-scroll{
        width:85%;
        padding-top:3.5rem;
    }
    .history-sessions.show{
        .overlay{
            left:0;
            opacity:1;
        }
    }
}

.desktop-device{
	.voice-btn{
		display: none;
	}	
    .history-sessions{
		width:100%;
        background:rgba(243,245,252,.69804);
        backdrop-filter:blur(20px);
        -webkit-backdrop-filter:blur(20px);
        .arrow-left{
            position:absolute;
            top:8px;
            left:20px;
            width:40px;
            height:40px;
            border-radius:8px;
            background:#cc525f;
            cursor:pointer;
            &::before,
            &::after{
                content:"";
                position:absolute;
                left:50%;
                top:50%;
                width:20px;
                height:2px;
                border-radius:2px;
                transform:translate(-50%, -50%);
                background:#fff;
            }
            &::before{
                transform:translate(-50%, -50%) rotate(45deg);
            }
            &::after{
                transform:translate(-50%, -50%) rotate(-45deg);
            }
        }
    }
    .history-sessions-title{
        position:sticky;
        .text{
            font-size:24px;
        }
    }
    .history-sessions-scroll{
        width:100%;
        max-width:780px;
        margin:0 auto;
        background:transparent;
        .history-session-content{
            margin-bottom:10px;
            text-align:center;
            background:#fff;
            cursor:pointer;
            border-radius:8px;
            .history-session {
                padding:4px 0;
            }
            .history-session-content-text{
                font-size:16px;
            }
        }
    }
}
            @keyframes dotFade {
                0% {
                opacity: 1;
                }
                50% {
                opacity: 0.3;
                }
                100% {
                opacity: 1;
                }
            }

            @-webkit-keyframes dotFade {
                0% {
                opacity: 1;
                }
                50% {
                opacity: 0.3;
                }
                100% {
                opacity: 1;
                }
            }
</style>