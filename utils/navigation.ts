/**
 * 导航工具函数
 * 处理多语言路径的页面跳转
 */

/**
 * 获取带语言前缀的路径
 * @param path - 目标路径
 * @param currentLocale - 当前语言
 * @param defaultLocale - 默认语言
 * @returns 带语言前缀的完整路径
 */
export function getLocalizedPath(path: string, currentLocale: string, defaultLocale: string): string {
  // 如果是默认语言，不添加语言前缀
  if (currentLocale === defaultLocale) {
    return path
  }
  
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // 添加语言前缀
  return `/${currentLocale}${normalizedPath}`
}

/**
 * 跳转到带语言前缀的页面
 * @param path - 目标路径
 * @param currentLocale - 当前语言
 * @param defaultLocale - 默认语言
 */
export function navigateToLocalizedPath(path: string, currentLocale: string, defaultLocale: string): void {
  const localizedPath = getLocalizedPath(path, currentLocale, defaultLocale)
  
  if (typeof window !== 'undefined') {
    window.location.href = localizedPath
  }
}

/**
 * 跳转到 404 页面（带语言前缀）
 * @param currentLocale - 当前语言
 * @param defaultLocale - 默认语言
 */
export function navigateTo404(currentLocale: string, defaultLocale: string): void {
  navigateToLocalizedPath('/404', currentLocale, defaultLocale)
}