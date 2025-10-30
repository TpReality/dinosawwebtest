const IMAGE_TAG_REGEX = /<img\b[^>]*>/gi
const PROCESS_SUFFIX = '?x-image-process=image/resize,p_40/marker,u_plus'

/**
 * 从 <img> 标签字符串中安全地提取指定属性的值。
 * @param tag - 完整的 <img> 标签字符串。
 * @param attributeName - 要提取的属性名 (例如 'src')。
 * @returns 属性值或 null。
 */
function getAttributeValue(tag: string, attributeName: string): string | null {
  // 匹配 attributeName="value" 或 attributeName='value'
  const match = tag.match(new RegExp(`${attributeName}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'))
  // 返回双引号或单引号中的值
  return match ? (match[1] || match[2] || null) : null
}

/**
 * 替换 <img> 标签中指定属性的值。
 * @param tag - 完整的 <img> 标签字符串。
 * @param attributeName - 要替换的属性名。
 * @param oldValue - 属性的旧值。
 * @param newValue - 属性的新值。
 * @returns 替换后的 <img> 标签字符串。
 */
function replaceAttributeValue(tag: string, attributeName: string, oldValue: string, newValue: string): string {
    // 构造一个正则表达式，匹配 attributeName="oldValue" 或 attributeName='oldValue'
    // 需要转义 oldValue 中的特殊字符，但由于 URL 通常不会有太多需要转义的，
    // 这里简单处理，如果遇到问题可能需要更复杂的转义。
    const escapedOldValue = oldValue.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    
    // 匹配双引号或单引号中的值
    const pattern = new RegExp(`(${attributeName}\\s*=\\s*(["']))(${escapedOldValue})(\\2)`, 'i');
    
    // 使用新的值进行替换
    return tag.replace(pattern, `$1${newValue}$4`);
}

/**
 * 增强富文本 HTML，修改图片 src 属性以添加图片处理参数。
 * @param html - 富文本 HTML 字符串。
 * @returns 修改后的 HTML 字符串。
 */
/**
 * 服务端版本的链接本地化函数，使用正则表达式处理 HTML 字符串
 * @param htmlString - HTML 字符串
 * @param currentLocale - 当前语言环境
 * @param defaultLocale - 默认语言环境
 * @returns 处理后的 HTML 字符串
 */
export function localizeLinksInHtmlRobust(htmlString: string, currentLocale: string, defaultLocale: string): string {
  if (!htmlString || currentLocale === defaultLocale) {
    return htmlString
  }

  // 使用正则表达式匹配 <a> 标签的 href 属性
  // 匹配 href="/path" 或 href='/path' 格式的链接
  const linkRegex = /<a\s+([^>]*\s+)?href\s*=\s*(['"])(\/[^'"]*)\2([^>]*)>/gi

  return htmlString.replace(linkRegex, (match, beforeHref, quote, hrefValue, afterHref) => {
    // 只处理以 / 开头的相对路径
    if (hrefValue && hrefValue.startsWith('/')) {
      const newHref = `/${currentLocale}${hrefValue}`
      return `<a ${beforeHref || ''}href=${quote}${newHref}${quote}${afterHref || ''}>`
    }
    return match
  })
}

export function enhanceRichTextHtml(html?: string | null): string {
  if (!html || typeof html !== 'string') {
    return html || ''
  }

  return html.replace(IMAGE_TAG_REGEX, (tag) => {
    // 1. 获取当前的 src 属性值
    const originalSrc = getAttributeValue(tag, 'src')

    // 2. 如果 src 存在且不为空，则进行修改
    if (originalSrc) {
      // 检查 src 是否已经包含 PROCESS_SUFFIX，避免重复添加
      if (originalSrc.includes('x-image-process')) {
          return tag // 已包含，直接返回
      }

      // 3. 构建新的 src 值
      const newSrc = originalSrc + PROCESS_SUFFIX

      // 4. 用新的 src 替换标签中的旧 src
      return replaceAttributeValue(tag, 'src', originalSrc, newSrc)
    }

    return tag
  })
}