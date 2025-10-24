// 菜单数据处理的composable
export const useMenuData = () => {
  const menuItems = ref([])
  const categoryDetail = ref({})
  
  // 处理分类数据转换为树状结构的函数
  const transformCategoryData = (categories) => {
    if (!categories || !Array.isArray(categories)) return []
    
    // 按sort字段排序
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
          isShow:child.menu_select_down_panel_is_show,
          link: `/${child.category_value}`
        }))
      
      // 构建菜单项
      const menuItem = {
        title: topCategory.category_name,
        link: `/${topCategory.category_value}`
      }
      
      // 如果有子分类，添加children属性
      if (children.length > 0) {
        menuItem.children = children
      } else {
        // 如果没有子分类，使用linkText格式
        delete menuItem.title
        menuItem.linkText = topCategory.category_name
      }
      // console.log(menuItem)
      return menuItem
    })
    
    return treeStructure
  }
  
  // 初始化菜单数据
  const initializeMenuData = async () => {
    try {
       const config = useRuntimeConfig()
        const baseUrl = config.public.apiBase || 'https://cms.stoneboss.vip/api'
        let authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
        
        // 直接使用fetch获取数据
        const response = await $fetch('/product-categories?populate=*&fields[0]=sort&fields[1]=parent_category_value&fields[2]=category_name&fields[3]=menu_select_down_panel_is_show&fields[4]=category_value', {
          baseURL: baseUrl,
          headers: {
            Authorization: `Bearer ${authToken}`,
          }
        })
      // const { data: categoryRes, pending, error } = await $fetch('/product-categories?fields=sort,parent_category_value,category_name,menu_select_down_panel_is_show,category_value')
      // console.log('categoryRes',categoryRes.value.data)
      if (response && response.data) {
        // 转换数据为树状结构
        const transformedData = transformCategoryData(response.data)
        menuItems.value = transformedData
        
        // 保留原有逻辑
        let data = response.data[0]
        categoryDetail.value = data?.wire_saw_machine
      }
      
      // 监听数据变化
      return menuItems.value
      
    } catch (error) {
      return []
      console.error('Failed to initialize menu data:', error)
    }
  }
  
  return {
    menuItems,
    categoryDetail,
    transformCategoryData,
    initializeMenuData
  }
}