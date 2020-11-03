// import pathToRegexp from 'path-to-regexp'
import PathBrowserify from 'path-browserify'
import _ from 'lodash'

import { routes as BASE_MENU } from '@/router/index.js'

// 将嵌套的路由转为一维数组
const flatLocalRoute = (arr, parent) => {
  let result = []
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i]
    const {
      path,
      children,
    } = item
    const newItem = _.cloneDeep(item)
    const rbacPath = parent
      ? PathBrowserify.resolve(parent.rbacPath, path)
      : path

    newItem.rbacPath = rbacPath
    delete newItem.children
    delete newItem.component
    Object.freeze(newItem)
    result.push(newItem)

    if (children && children.length) {
      result = _.concat(result, flatLocalRoute(children, newItem))
    }
  }
  return result
}

const flatRbacRoute = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i]
    const {
      children,
    } = item
    const newItem = _.cloneDeep(item)

    newItem.rbacPath = newItem.path
    delete newItem.children
    Object.freeze(newItem)
    result.push(newItem)

    if (children && children.length) {
      result = _.concat(result, flatRbacRoute(children))
    }
  }
  return result
}

export const filterMenu = (router = []) => {
  const arr = []
  // 一维化本地菜单
  const routesLocal = flatLocalRoute(BASE_MENU, null)
  // 一维化rbac菜单
  const routesRbac = flatRbacRoute(router)

  // 筛选本地菜单
  for (let i = 0; i < routesLocal.length; i += 1) {
    const localItem = routesLocal[i]
    const matchIndex = _.findIndex(routesRbac, item => item.path === localItem.rbacPath)

    // debugger
    if (matchIndex !== -1) {
      const matchTarget = routesRbac[matchIndex]
      const rbacItem = {
        ...localItem,
        id: matchTarget.id,
      }
      Object.freeze(rbacItem)
      arr.push(rbacItem)
      routesRbac.slice(matchIndex, 1)
    }
  }
  // console.log(routesLocal, routesRbac)
  return [...arr, ...routesRbac]
}

export const filterMenuByRbac = (menus, rbacArr) => {
  const arr = []
  // console.log('filterMenuByRbac==========', menus)
  // console.log('filterMenuByRbacrbacArr==========', rbacArr)
  for (let i = 0; i < menus.length; i += 1) {
    const item = menus[i]
    // const rbacMatch = _.findIndex(rbacArr, rb => rb.rbacPath === item.rbacPath)
    // console.log(rbacMatch)

    // if (rbacMatch !== -1) {
      if (item.children) {
        item.children = filterMenuByRbac(item.children, rbacArr)
      }
      arr.push(item)
    // }
  }
  console.log(arr)
  return arr
}
