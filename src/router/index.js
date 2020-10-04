import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact'),
  },
  {
    path: '/constitution',
    name: 'constitution',
    component: () => import('@/views/Constitution'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
