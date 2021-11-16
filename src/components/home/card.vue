<template>
    <div class="card">
      <img :src="anuncio.foto" class="card-img-top" alt="..." />
      <div class="card-body text-center border border-2 border-dark">
        <p class="card-text">
            <h5><b>${{anuncio.precio}}</b></h5>
            {{anuncio.descripcion}}
        </p>
      </div>
    </div>
</template>
<script>
export default {
    name: 'card',
    props:{
        anuncio: Object,
    }
};
</script>
<style scoped>
</style>