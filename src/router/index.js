import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/index/index.vue'

Vue.use(VueRouter)

const BasePath = '/baidu'

const routes = [
  {
    path: `${BasePath}`,
    name: 'home',
    component: Home,
    children: [
      {
        path: `${BasePath}`,
        name: 'index',
        component: resolve => require(['../views/home'], resolve)
      },
      {
        path: `${BasePath}/calculus`,
        name: 'calculus',
        component: resolve => require(['../views/calculus'], resolve)
      },
      {
        path: `${BasePath}/home/result`,
        name: 'home/result',
        component: resolve => require(['../views/home/list'], resolve)
      },
      {
        path: `${BasePath}/home/dynamicDisplay`,
        name: 'home/dynamicDisplay',
        component: resolve => require(['../views/home/dynamicDisplay'], resolve)
      },
      {
        path: `${BasePath}/home/statisticalNote`,
        name: 'home/statisticalNote',
        component: resolve => require(['../views/home/statisticalNote'], resolve)
      },
      {
        path: `${BasePath}/home/interfaceCall`,
        name: 'home/interfaceCall',
        component: resolve => require(['../views/home/interfaceCall'], resolve)
      },
      {
        path: `${BasePath}/calculus/result`,
        name: 'calculus/result',
        component: resolve => require(['../views/calculus/list'], resolve)
      },
      {
        path: `${BasePath}/calculus/statisticalNote`,
        name: 'calculus/statisticalNote',
        component: resolve => require(['../views/calculus/statisticalNote'], resolve)
      },
      {
        path: `${BasePath}/calculus/interfaceCall`,
        name: 'calculus/interfaceCall',
        component: resolve => require(['../views/calculus/interfaceCall'], resolve)
      },
      {
        path: `${BasePath}/calculus/verification`,
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
