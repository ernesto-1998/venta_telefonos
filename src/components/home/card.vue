<template>
    <div class="card" style="height: 100%;">
      <img :src="anuncio.foto" class="card-img-top" height="170px" alt="..." />
      <div class="card-body text-center border border-2 border-dark">
        <div>
            <h5><b>${{anuncio.precio}}</b></h5>
            <p>{{anuncio.telefono.marca}} {{anuncio.telefono.modelo}}, Pantalla de {{anuncio.telefono.pantalla}} pulg. {{anuncio.telefono.ram}} GB de RAM, {{anuncio.telefono.rom}} de almacenamiento interno </p>
        </div>
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