import Vue from 'vue'
import Router from 'vue-router'
import { delay } from '@/utils'

import Store from '@/store'
import routesMock from '@/mock/routes.json'

Vue.use(Router)

const dynamicImport = fileLocation => {
  return () => import('@/views/' + fileLocation)
}

const getAllRoutes = async () => {
  await delay(1e3)

  const ret = routesMock.map(item => {
    const component = dynamicImport(item.fileLocation)
    item.component = component
    return item
  })

  return ret
}

const router = new Router({
  mode: 'history'
})

const setRoutes = async () => {
  // 这里必须加上状态判断，不让会报 vue-router Duplicate named routes definition 警告
  let routes = await getAllRoutes()

  if (Store.hadInitRoutes) return

  // 处理下访问不存在路由时候的情况
  // let pageNotFoundRoute = {
  //   path: '*',
  //   redirect: '/404'
  // }

  let pageNotFoundRoute = routes.find(route => route.path === '/404')

  routes = routes.concat({
    path: '*',
    component: pageNotFoundRoute.component
  })

  router.addRoutes(routes)
}

router.beforeEach(async (to, from, next) => {
  if (Store.hadInitRoutes) {
    next()
  } else {
    await setRoutes()
    Store.hadInitRoutes = true
    next(to.path)
  }
})

export default router
