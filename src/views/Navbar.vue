<template>
  <nav class="navbar navbar-light color-fondo">
    <div class="container-fluid d-none d-md-block">
      <div class="d-flex align-items-center justify-content-evenly">
        <i class="bi bi-megaphone-fill mx-3" style="font-size: 2rem"></i>
        <h4 class="pe-3"><b>Tienda Cellphone</b></h4>
        <!-- <b-input-group
          size="md" 
          style="width: 450px"        
        >
          <b-form-input v-model="texto"></b-form-input>
          <b-input-group-append>
            <b-button size="md" text="Borrar" variant="danger" @click="limpiarTexto">Borrar</b-button>
          </b-input-group-append>
        </b-input-group> -->
          <form class="d-flex">
            <input
              class="form-control me-2"
              v-model="texto"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="border-radius: 25px; width: 450px"
            />
          </form>

        <router-link :to="{name : 'Home'}" class="btn border border-3 border-dark mx-3" style="background-color: #FFAA00">
          <b>Inicio</b>
        </router-link>
        
        <router-link :to="{name : 'Estadisticas'}" class="btn border border-3 border-dark mx-3" style="background-color: #FFAA00">
          <b>Estadísticas</b></router-link>
        
        <router-link :to="{name : 'nuevoAnuncio'}">
          <i
            class="bi bi-plus-circle ms-5"
            style="font-size: 3rem; color: black; background-color: #FFAA00; border-radius: 30px;"
          ></i>          
        </router-link>
        <a href="#">
          <i
            class="bi bi-cart-fill ms-3"
            style="font-size: 3rem; color: black"
          ></i>
        </a>
      </div>
    </div>

    <div class="container-fluid d-md-none">
      <div class="row">
        <div class="col align-self-center">
          <button
            type="button"
            class="navbar-toggler border border-2 border-dark"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavegacion"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col-8">
          <form class="d-flex">
            <input
              class="form-control me-2"
              v-model="texto"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="border-radius: 25px"
            />
          </form>
        </div>
      </div>
      <div id="menuNavegacion" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-3 d-lg-none d-md-none" id="navbarBotones">
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link"><b>Inicio</b></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'nuevoAnuncio'}" class="nav-link"><b>Nuevo Anuncio</b></router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{name: 'Estadisticas'}" class="nav-link"><b>Estadisticas</b></router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><b>Carrito</b></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {bus} from '../main'

export default {
    name: 'Navbar',

    data(){
        return {
            texto: ""
        };
    },
    methods: {
        filtrarAnuncios(){
              bus.$emit('buscarCard', this.texto)
        },
        limpiarTexto(){
          this.texto = ""
        }
    },

    updated(){
      this.filtrarAnuncios();
    }
}
</script>

<style scoped>
  .color-fondo{
    background-color: #FFBD00; 
    border: 10px ridge #FFBD00;
  }
</style>