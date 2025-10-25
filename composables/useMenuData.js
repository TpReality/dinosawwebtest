// 菜单数据处理的 composable（SSR 顶层预取 + 全局缓存）
export const useMenuData = () => {
  const menuItems = useState('menuData', () => ([]))
  const categoryDetail = useState('categoryDetail', () => ({}))

  // 处理分类数据转化为树状结构的函数
  const transformCategoryData = (categories) => {
    if (!categories || !Array.isArray(categories)) return []

    // 按 sort 字段排序
    const sortedCategories = [...categories].sort((a, b) => a.sort - b.sort)

    // 分离顶级分类和子分类
    const topLevelCategories = []
    const childCategories = []

    sortedCategories.forEach(category => {
      if (!category.parent_category_value) {
        topLevelCategories.push(category)
      } else {
        childCategories.push(category)
      }
    })

    // 构建树状结构
    const treeStructure = topLevelCategories.map(topCategory => {
      // 查找该顶级分类的子分类
      const children = childCategories
        .filter(child => child.parent_category_value === topCategory.category_value)
        .sort((a, b) => a.sort - b.sort)
        .map(child => ({
          text: child.category_name,
          isShow: child.menu_select_down_panel_is_show,
          link: `/${child.category_value}`
        }))

      // 构建菜单项
      const menuItem = {
        title: topCategory.category_name,
        link: `/${topCategory.category_value}`
      }

      // 如果有子分类，添加 children 属性
      if (children.length > 0) {
        menuItem.children = children
      } else {
        // 如果没有子分类，使用 linkText 格式
        delete menuItem.title
        menuItem.linkText = topCategory.category_name
      }
      return menuItem
    })

    return treeStructure
  }

  // 初始化菜单数据（SSR 顶层 await + 序列化到 payload）
  const initializeMenuData = async () => {
    // 已有缓存则直接返回，避免重复请求
    if (menuItems.value.length > 0) return menuItems.value

    const config = useRuntimeConfig()
    const baseUrl = config.public.apiBase || 'https://cms.stoneboss.vip/api'
    const authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"

    const { data: res } = await useAsyncData(
      () => 'menu:list',
      () => $fetch('/product-categories?fields=sort,parent_category_value,category_name,menu_select_down_panel_is_show,category_value', {
        baseURL: baseUrl,
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
      }),
      { default: () => ({ data: [] }), allowEmpty: true }
    )

    const raw = Array.isArray(res.value?.data) ? res.value.data : []
    menuItems.value = transformCategoryData(raw)

    // 保留原有逻辑（尽量安全地读取首项）
    const first = raw[0] || {}
    categoryDetail.value = first?.wire_saw_machine || {}
console.log(useMenuData)
    return menuItems.value
  }

  return {
    menuItems,
    categoryDetail,
    transformCategoryData,
    initializeMenuData
  }
}
