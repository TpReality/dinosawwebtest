import { defineNuxtPlugin } from '#app'

const LAZY_ATTRIBUTE = 'loading'
const LAZY_VALUE = 'lazy'
const SIZES_ATTRIBUTE = 'sizes'
const DEFAULT_SIZES = '100vw'
const MAX_SCAN_DEPTH = 3

function isImageElement(node: Element): node is HTMLImageElement {
  return node.tagName.toLowerCase() === 'img'
}

function isWithinNuxtImgWrapper(element: Element | null): boolean {
  let current: Element | null = element
  let depth = 0

  while (current && depth <= MAX_SCAN_DEPTH) {
    const tagName = current.tagName.toLowerCase()
    if (tagName === 'picture' || current.hasAttribute('data-nuxt-img')) {
      return true
    }

    current = current.parentElement
    depth += 1
  }

  return false
}

function applyLazyAttributesToImages(root: Element) {
  const images = root.querySelectorAll('img')

  images.forEach((image) => {
    if (isWithinNuxtImgWrapper(image)) {
      return
    }

    if (!image.hasAttribute(LAZY_ATTRIBUTE)) {
      image.setAttribute(LAZY_ATTRIBUTE, LAZY_VALUE)
    }

    if (!image.hasAttribute(SIZES_ATTRIBUTE)) {
      image.setAttribute(SIZES_ATTRIBUTE, DEFAULT_SIZES)
    }
  })
}

function enhanceRichTextImages(element: Element) {
  applyLazyAttributesToImages(element)

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return
        }

        applyLazyAttributesToImages(node)
      })
    })
  })

  observer.observe(element, {
    childList: true,
    subtree: true
  })
}

declare global {
  interface HTMLElementTagNameMap {
    image: HTMLImageElement
  }
}

declare global {
  interface Window {
    __lazyRichTextObserverCleanup?: (() => void)[]
  }
}

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const cleanupList: (() => void)[] = []

  window.__lazyRichTextObserverCleanup = cleanupList

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return
        }

        if (node.matches('[v-html], [data-rich-text], .rich-text, .description-text')) {
          enhanceRichTextImages(node)
          cleanupList.push(() => observer.disconnect())
        } else {
          const richTextChildren = node.querySelectorAll('[v-html], [data-rich-text], .rich-text, .description-text')
          richTextChildren.forEach((richNode) => {
            enhanceRichTextImages(richNode)
          })
        }
      })
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    document.querySelectorAll('[v-html], [data-rich-text], .rich-text, .description-text').forEach((node) => {
      if (node instanceof Element) {
        enhanceRichTextImages(node)
      }
    })
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[v-html], [data-rich-text], .rich-text, .description-text').forEach((node) => {
        if (node instanceof Element) {
          enhanceRichTextImages(node)
        }
      })
    })
  }
})
