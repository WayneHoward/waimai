import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass : "light"
})

export default router
