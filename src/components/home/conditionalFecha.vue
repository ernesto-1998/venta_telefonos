<template>
    <div class="card color-fondo-interno d-flex justify-content-center" style="height: 100%;">
        <div class="container">
            <div class="row">
                <div class="col my-2">
                    <label for="" class="me-2"> <b> Ordenar por: </b>  </label>
                </div>
                <div class="col d-flex my-2">
                    <button @click="filtrarPrecio" class="btn btn-primary btn-lg me-3">Precio</button>
                    <button @click="filtrarFecha" class="btn btn-danger btn-lg">Fecha</button>
                </div>
            </div> 
        </div>       
    </div>
</template>
<script>
import {bus} from "../../main"

export default {
    name: 'conditionalFecha',
    methods: {
        filtrarPrecio(){
            bus.$emit("filtrarPrecio")
        },
        filtrarFecha(){
            bus.$emit("filtrarFecha")
        }
    }
}
</script>
<style scoped>
    .color-fondo-interno{
        background-color: #ffcc55;
        border: 10px ridge #ffcc55;
    }
</style>