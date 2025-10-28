const IMAGE_TAG_REGEX = /<img\b[^>]*>/gi

// --- 辅助函数（保持不变）---
function injectAttribute(tag: string, attributeName: string, attributeValue: string): string {
  const attributeRegex = new RegExp(`${attributeName}\\s*=`, 'i')

  if (attributeRegex.test(tag)) {
    return tag
  }

  const insertion = ` ${attributeName}="${attributeValue}"`

  if (/\/>\s*$/i.test(tag)) {
    return tag.replace(/\/>\s*$/i, `${insertion} />`)
  }

  return tag.replace(/>\s*$/i, `${insertion}>`)
}

// --- 新增辅助函数 ---
function getAttributeValue(tag: string, attributeName: string): string | null {
  const match = tag.match(new RegExp(`${attributeName}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'))
  return match ? (match[1] || match[2] || null) : null
}

const IMAGE_WIDTHS = [300, 600, 900, 1200] 

function generateSrcset(originalSrc: string): string {
  // ********* 【注意】请根据您的图片服务/CDN修改这一部分 *********
  // 这里的示例假设图片服务支持 ?w={width} 的参数
  const [baseUrl] = originalSrc.split('?')
  const srcsetEntries = IMAGE_WIDTHS.map(width => {
    const imageUrl = `${baseUrl}?w=${width}`
    return `${imageUrl} ${width}w`
  })
  // *************************************************************
  
  return srcsetEntries.join(', ')
}
// --- 导出函数 (修改 enhanceRichTextHtml) ---

export function enhanceRichTextHtml(html?: string | null): string {
  if (!html || typeof html !== 'string') {
    return html || ''
  }

  return html.replace(IMAGE_TAG_REGEX, (tag) => {
    let updatedTag = tag
    
    // 1. 获取 src 属性
    const originalSrc = getAttributeValue(tag, 'src')
    
    // 2. 如果成功获取 src，则生成并注入 srcset
    if (originalSrc) {
        const srcsetValue = generateSrcset(originalSrc)
        updatedTag = injectAttribute(updatedTag, 'srcset', srcsetValue)
    }
    
    // 3. 注入其他属性
    updatedTag = injectAttribute(updatedTag, 'loading', 'lazy')
    updatedTag = injectAttribute(updatedTag, 'sizes', '100vw') // '100vw'表示图片在屏幕上占满整个宽度
    
    return updatedTag
  })
}