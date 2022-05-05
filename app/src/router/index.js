/*
 * @Author: your name
 * @Date: 2022-04-29 14:27:24
 * @LastEditTime: 2022-05-02 23:52:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Second from '../views/second.vue'
import Registered from '../views/registered.vue'
Vue.use(VueRouter)

const routes = [
  {
    //重定向
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
  {
    path: '/registered',
    name: 'registered',
    component: Registered,
  },
  {
    path: '/second',
    name: 'second',
    component: Second,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
