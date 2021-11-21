<template>
    <div class="row">
        <div class="col">
            {{info.marca}} {{info.modelo}} pantalla de {{info.pantalla}} pulgadas, {{info.rom}} GB internos, 
            {{info.ram}} GB de RAM, {{info.estado}} 
        </div>
    </div>
</template>
<script>

export default {
    name: 'anuncioInfo',
    props:{
        info: Object,
    }
}
</script>
<style scoped>
    
</style>