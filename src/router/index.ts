import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import DesignPatterns from '../views/page/design-patterns.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/axios.vue') // lazy-load
  },
  {
    path: '/design-patterns',
    name: 'design-patterns',
    component: DesignPatterns
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
