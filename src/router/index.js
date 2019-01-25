import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/current-user/login'
import layout from '@/components/layout'

Vue.use(Router)
const _router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    { path: '/', redirect: { name: 'index' } },
    {
      path: '/index',
      name: 'index',
      label: '首页',
      component: layout
    },
    {
      path: '/assets',
      component: layout,
      children: [
        {
          path: '',
          name: 'assets',
          label: '资产',
          component: layout
        },
        {
          path: '/child',
          name: 'child',
          label: '子资产',
          component: layout
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      label: '个人中心',
      component: layout
    }
  ]
})

// _router.beforeEach((to, from, next) => {

// })

export default _router
