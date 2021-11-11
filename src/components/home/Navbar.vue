<template>
  <nav class="navbar navbar-light bg-warning">
    <div class="container-fluid d-none d-md-block">
      <div class="d-flex align-items-center">
        <i class="bi bi-megaphone-fill mx-3" style="font-size: 2rem"></i>
        <h4 class="pe-3"><b>Tienda Cellphone</b></h4>
        <input
          type="text"
          v-model="texto"
          class="mx-3 col-8"
          style="border-radius: 50px; width: 300px"
        />
        <a href="#" class="btn btn-warning border border-3 border-dark mx-3"
          ><b>Inicio</b></a
        >
        <a href="#" class="btn btn-warning border border-3 border-dark mx-2"
          ><b>Estadísticas</b></a
        >
        <a href="#">
          <i
            class="bi bi-plus-circle ms-5"
            style="font-size: 3rem; color: black"
          ></i>
        </a>
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
        <!-- <div class="col-8">
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
        </div> -->
      </div>
      <div id="menuNavegacion" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-3 d-lg-none d-md-none" id="navbarBotones">
          <li class="nav-item">
            <a href="#" class="nav-link"><b>Inicio</b></a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><b>Nuevo Anuncio</b></a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><b>Carrito</b></a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"><b>Estadisticas</b></a>
          </li>
        </ul>
      </div>
    </div>
    <button @click="pintarData">Hola</button>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data(){
        return {
            texto: ""
        };
    },
    methods: {
        pintarData(){
            console.log(this.texto)
        }
    }
}
</script>