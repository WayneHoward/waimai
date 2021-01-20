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
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    children: [
      {path: '/', redirect: 'message'},
      {
        path: 'message',
        component: () => import('../components/login/Message.vue')
      },
      {
        path: 'pass',
        component: () => import('../components/login/Pass.vue')
      },
    ]
  },
  {
    path: '/details/:id',
    component: () => import('./../views/Details.vue'),
    children: [
      {path: '/', redirect: 'menu'},
      {
        path: 'menu',
        component: () => import('../components/details/Menu.vue')
      },
      {
        path: 'mark',
        component: () => import('../components/details/Mark.vue')
      },
      {
        path: 'shop',
        component: () => import('../components/details/Shop.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass : "light"
})

export default router
