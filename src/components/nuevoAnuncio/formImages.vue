<template>
  <div class="d-flex justify-content-center">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      style="width: 500"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="(img, index) in imagenes" :key="index" class="carousel-item" :class="{ active: index==0 }" data-bs-interval="10000">
          <img :src="img.url" width="500" height="300" class="d-block" alt="" />
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
    <input class="form-control" type="file" id="formFile">
  </div>
</template>
<script>
export default {
    name: 'carousel',
    data(){
        return{
            imagenes: [
                {url: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190121-ESTOS-SON-LOS-COLORES-DE-CARRO-M%C3%81S-VENDIDOS-EN-2018-01.jpg'},
                {url: 'https://www.pruebaderuta.com/wp-content/uploads/2016/11/mejor-carro-1.jpg"'},
                {url: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg'}
            ]
        };
    }
};
</script>
<style lang="">
</style>