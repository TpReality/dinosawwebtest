const IMAGE_TAG_REGEX = /<img\b[^>]*>/gi

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

export function enhanceRichTextHtml(html?: string | null): string {
  if (!html || typeof html !== 'string') {
    return html || ''
  }

  return html.replace(IMAGE_TAG_REGEX, (tag) => {
    let updatedTag = tag
    updatedTag = injectAttribute(updatedTag, 'loading', 'lazy')
    updatedTag = injectAttribute(updatedTag, 'sizes', '100vw')
    return updatedTag
  })
}
