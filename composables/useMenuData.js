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
      
      return menuItem
    })
    
    return treeStructure
  }
  
  // 初始化菜单数据
  const initializeMenuData = async () => {
    try {
      const { data: categoryRes } = await useApi('/product-categories?fields=sort,parent_category_value,category_name,menu_select_down_panel_is_show,category_value')
      console.log(categoryRes)
      if (categoryRes.value && categoryRes.value.data) {
        // 转换数据为树状结构
        const transformedData = transformCategoryData(categoryRes.value.data)
        menuItems.value = transformedData
        
        // 保留原有逻辑
        let data = categoryRes.value.data[0]
        categoryDetail.value = data?.wire_saw_machine
      }
      
      // 监听数据变化
      watch(categoryRes, (newData) => {
        if (newData && newData.data) {
          // 转换数据为树状结构
          const transformedData = transformCategoryData(newData.data)
          menuItems.value = transformedData
          
          // 保留原有逻辑
          let data = newData.data[0]
          categoryDetail.value = data?.wire_saw_machine
        }
      }, { immediate: true })
      
    } catch (error) {
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