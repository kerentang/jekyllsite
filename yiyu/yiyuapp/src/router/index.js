import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/calculate',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
