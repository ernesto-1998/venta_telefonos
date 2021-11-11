import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nuevoAnuncio from '../views/nuevoAnuncio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
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
