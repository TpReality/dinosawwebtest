/**
 * 日期格式化工具函数
 */

/**
 * 将日期格式化为 YYYY-MM-DD 格式
 * @param {string|Date} dateString - 日期字符串或Date对象
 * @returns {string} 格式化后的日期字符串，格式为 YYYY-MM-DD
 */
export const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
};

/**
 * 将日期格式化为 YYYY年MM月DD日 格式
 * @param {string|Date} dateString - 日期字符串或Date对象
 * @returns {string} 格式化后的中文日期字符串
 */
export const formatDateCN = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${year}年${month}月${day}日`;
};

/**
 * 将日期格式化为英文格式（如：Feb 14, 2025）
 * @param {string|Date} dateString - 日期字符串或Date对象
 * @returns {string} 格式化后的英文日期字符串
 */
export const formatDateEN = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) return '';
    
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
};

/**
 * 将日期格式化为相对时间（如：2天前、1个月前等）
 * @param {string|Date} dateString - 日期字符串或Date对象
 * @returns {string} 相对时间字符串
 */
export const formatRelativeTime = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const now = new Date();
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) return '';
    
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);
    
    if (diffInYears > 0) {
        return `${diffInYears}年前`;
    } else if (diffInMonths > 0) {
        return `${diffInMonths}个月前`;
    } else if (diffInDays > 0) {
        return `${diffInDays}天前`;
    } else if (diffInHours > 0) {
        return `${diffInHours}小时前`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes}分钟前`;
    } else {
        return '刚刚';
    }
};