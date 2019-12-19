import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.less'
import './assets/style/reset.scss' // 引入全局样式
import * as filters from './filters' // global filters
import * as statusCode from './request/statusCode'
import { Toast } from 'vant'

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.path === '/') {
    next({
      path: '/baidu'
    })
  }
  if (to.path.indexOf('/baidu') === -1) {
    next({
      path: '/baidu' + to.path
    })
  }
  next()
})

router.afterEach(async (to, from) => {
  store.dispatch('upTabbarActive', to.name)
  NProgress.done()
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$statusCode = statusCode

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
