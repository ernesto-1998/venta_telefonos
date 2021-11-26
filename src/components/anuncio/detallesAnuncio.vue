<template>
    <div class="card mx-md-5 mb-4">
        <div class="row py-2">
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Estado: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.estado}}
            </div>
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Marca: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.marca}}
            </div>
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Modelo: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.modelo}}
            </div>
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Pantalla: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.pantalla}}
            </div>
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Sistema: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.sistema}}
            </div> 
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>Rom: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.rom}} GB
            </div> 
            <div class="col-4 ps-4 d-flex justify-content-start">
                <strong>RAM: </strong>
            </div>
            <div class="col-8 d-flex justify-content-start">
                {{info.telefono.ram}} GB
            </div>                                                
        </div>
    </div>
</template>
<script>
export default {
    name: 'detallesAnuncio',
    props:{
        info: Object
    }
}
</script>
<style scoped>
    
</style>