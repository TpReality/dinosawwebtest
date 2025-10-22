/**
 * 日期格式化工具函数
 */

/**
 * 格式化日期为长格式 (Jan 11, 2025)
 * @param {string} dateString - 日期字符串
 * @returns {string} 格式化后的日期字符串
 */
export const formatDateLong = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }
    return date.toLocaleDateString('en-US', options)
}

/**
 * 格式化日期为短格式 (5/14/24)
 * @param {string} dateString - 日期字符串
 * @returns {string} 格式化后的日期字符串
 */
export const formatDateShort = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear().toString().slice(-2)
    return `${month}/${day}/${year}`
}

/**
 * 格式化数组中对象的日期字段
 * @param {Array} array - 包含日期字段的对象数组
 * @param {Function} formatter - 日期格式化函数
 * @returns {Array} 格式化后的数组
 */
export const formatDatesInArray = (array, formatter) => {
    if (!Array.isArray(array)) return array
    return array.map(item => ({
        ...item,
        date: formatter(item.date)
    }))
}

/**
 * 预设的格式化组合函数
 */
export const formatArrayDatesLong = (array) => formatDatesInArray(array, formatDateLong)
export const formatArrayDatesShort = (array) => formatDatesInArray(array, formatDateShort)