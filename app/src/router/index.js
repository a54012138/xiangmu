import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Welcome from '../views/welcome.vue'
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
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: Welcome
      }
    ]
  },
  {
    path: '/registered',
    name: 'registered',
    component: Registered,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
