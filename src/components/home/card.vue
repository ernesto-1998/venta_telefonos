<template>
  <div class="col-sm-3 col-xs-12 col-sm-6">
    <div class="card">
      <img :src="info.foto" class="card-img-top" alt="..." />
      <div class="card-body text-center border border-2 border-dark">
        <p class="card-text">
            <h5><b> {{info.precio}} </b></h5>
            {{info.descripcion}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'card',
    props:{
        info: Array,
    }
};
</script>
<style scoped>
</style>