import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nuevoAnuncio from '../views/nuevoAnuncio.vue'
import carousel from '@/components/nuevoAnuncio/formImages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nuevoAnuncio',
    name: 'nuevoAnuncio',
    component: nuevoAnuncio
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
