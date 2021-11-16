import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nuevoAnuncio from '../views/nuevoAnuncio.vue'
import conditionalPrecios from '@/components/home/conditionalPrecios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nuevo-anuncio',
    name: 'nuevoAnuncio',
    component: nuevoAnuncio
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
