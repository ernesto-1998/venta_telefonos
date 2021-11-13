<template>
  <div class="d-flex justify-content-center">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      style="width: 500px"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="(img, index) in imagenes" :key="index" class="carousel-item" :class="{ active: index==0 }" data-bs-interval="10000">
          <img :src="img" width="500" height="300" class="d-block" alt="" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <b-form-file
      v-model="imagenP"     
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      accept="image/*"
    ></b-form-file>  
    <button @click="agregarImagen()">
        agregar imagen</button>  
        <img src="" alt="">
  </div>
</template>
<script>
import {st} from '../../firebase'

export default {
    name: 'carousel',
    data(){
        return{
            imagenes: [
                // {url: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190121-ESTOS-SON-LOS-COLORES-DE-CARRO-M%C3%81S-VENDIDOS-EN-2018-01.jpg'},
                // {url: 'https://www.pruebaderuta.com/wp-content/uploads/2016/11/mejor-carro-1.jpg"'},
                // {url: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg'}
            ],
            imagenP: null
        };
    },
    methods:{
        agregarImagen(){
            // if(this.imagenP !== null){
            //     console.log(this.imagenP)
            //     console.log(JSON.stringify(this.imagenP.name))
            //     this.imagenes.push(this.imagenP.name)
            // }else{
            //     this.imagenP = null
            // }

            try {
                
            } catch (error) {
                
            }
        }
    }
};
</script>
<style lang="">
</style>