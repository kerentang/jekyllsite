// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.use(ElementUI) // 全局使用
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('calculator-token')
  if (to.path === '/') {
    if (token !== 'null' && token !== null) {
      next('/calculate')
    }
    next()
  } else {
    if (token !== 'null' && token !== null) {
      next()
    } else {
      next('/')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
