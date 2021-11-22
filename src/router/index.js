import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nuevoAnuncio from '../views/nuevoAnuncio.vue'
import anuncio from '../views/anuncio.vue'
import estadisticas from '../views/estadisticas.vue'

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
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: estadisticas
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
