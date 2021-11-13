<template>
  <div class="col" style="background-color: #ffcc50; border: 10px ridge #ffcc50; padding-top: 15px;">
    <div class="container">

        <div class="row">

            <!-- COLUMNA 1 (BOTONES) -->

            <div class="col-lg-2">
                <div class="row d-flex justify-content-start">
                    <div class="col">
                        <a @click="cargarImagen()">
                        <i
                            class="bi bi-plus-circle"
                            style="font-size: 4rem; color: black"
                        ></i>
                        </a>                    
                    </div>
                    <div class="col">
                        <b-form-file
                            v-model="imagenP"              
                            accept="image/*"
                        ></b-form-file>            
                    </div>
                </div>
            
            </div>

            <!-- COLUMNA 2 (REFERENCIAS DE IMAGENES) -->

            <div class="col-3">

                <table class="table table-borderless">
                                <thead>
                                <tr>
                                    <th scope="col">N</th>
                                    <th scope="col">Tamaño</th>
                                    <th scope="col">Tipo</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>110 kb</td>
                                    <td>png</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>120 kb</td>
                                    <td>jpg</td>
                                </tr>
                                <tr>
                                    <td>3</td> 
                                    <td>115 kb</td>
                                    <td>jpg</td>
                                </tr>
                                <tr>
                                    <td>4</td> 
                                    <td>200 kb</td>
                                    <td>png</td>
                                </tr>
                                </tbody>
                </table>                
            </div>

            <!-- COLUMNA 3 (CAROUSEL) -->

            <div class="col">
                
                <div
                    v-if="imagenes.lenght !== 0"
                    id="carouselExampleInterval"
                    class="carousel slide"                        
                    data-bs-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div
                                v-for="(img, index) in imagenes"
                                :key="index"
                                class="carousel-item"
                                :class="{ active: index == 0 }"
                                data-bs-interval="10000"
                            >
                                <img
                                    :src="img"
                                    
                                    height="300"
                                    class="d-block w-100"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                            >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                </div>

            </div>

        </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "formCarousel",

  data(){
      return{
          imagenes: ['https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg',
          'https://www.pruebaderuta.com/wp-content/uploads/2016/11/mejor-carro-1.jpg'],
          imagenP: null
      }
  },

  methods: {
    cargarImagen() {
      console.log("Hola mundo");
    },
  },
};
</script>
<style lang="scoped">
</style>