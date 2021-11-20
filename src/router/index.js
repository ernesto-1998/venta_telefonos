import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nuevoAnuncio from '../views/nuevoAnuncio.vue'
import anuncio from '../views/anuncio.vue'

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
  {
    path: '/anuncio/:id',
    name: 'anuncio',
    component: anuncio
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
