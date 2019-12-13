import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'index',
        component: resolve => require(['../views/home'], resolve)
      },
      {
        path: '/calculus',
        name: 'calculus',
        component: resolve => require(['../views/calculus'], resolve)
      },
      {
        path: '/home/result',
        name: 'home/result',
        component: resolve => require(['../views/home/list'], resolve)
      },
      {
        path: '/home/dynamicDisplay',
        name: 'home/dynamicDisplay',
        component: resolve => require(['../views/home/dynamicDisplay'], resolve)
      },
      {
        path: '/home/statisticalNote',
        name: 'home/statisticalNote',
        component: resolve => require(['../views/home/statisticalNote'], resolve)
      },
      {
        path: '/home/interfaceCall',
        name: 'home/interfaceCall',
        component: resolve => require(['../views/home/interfaceCall'], resolve)
      },
      {
        path: '/calculus/result',
        name: 'calculus/result',
        component: resolve => require(['../views/calculus/list'], resolve)
      },
      {
        path: '/calculus/statisticalNote',
        name: 'calculus/statisticalNote',
        component: resolve => require(['../views/calculus/statisticalNote'], resolve)
      },
      {
        path: '/calculus/interfaceCall',
        name: 'calculus/interfaceCall',
        component: resolve => require(['../views/calculus/interfaceCall'], resolve)
      },
      {
        path: '/calculus/verification',
        name: 'calculus/verification',
        component: resolve => require(['../views/calculus/verification'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
