<template>
    <div class="card color-fondo-interno d-flex justify-content-center" style="height: 100%;">
        <div class="container">
            <div class="row">
                <div class="col my-2">
                    <h4 for="" class="me-2"> <b> Ordenar por: </b>  </h4>
                </div>
                <div class="col d-flex justify-content-evenly my-2">
                    <button @click="filtrarPrecio" class="btn btn-primary btn-md"><i v-if="arrowButton" class="bi bi-arrow-down me-1"></i><i v-if="!arrowButton" class="bi bi-arrow-up me-1"></i>Precio</button>
                    <button @click="filtrarFecha" class="btn btn-danger btn-md"><i v-if="arrowButton2" class="bi bi-arrow-down me-1"></i><i v-if="!arrowButton2" class="bi bi-arrow-up me-1"></i>Fecha</button>
                    <div
                        
                        @click="cambiarFlecha"
                        class="d-md-none ms-2"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuNavegacion1"
                    >
                        <i v-if="toggler" class="bi bi-arrow-down-circle-fill" style="font-size: 2rem; color: black;"></i>
                        <i v-if="!toggler" class="bi bi-arrow-up-circle-fill" style="font-size: 2rem; color: black;"></i>
                    </div>                               
                </div>
                <div id="menuNavegacion1" class="collapse navbar-collapse d-md-none mt-2" >                      
                    <conditionalMenu />                                                                 
                </div> 
            </div> 
        </div>       
    </div>
</template>
<script>
import {bus} from "../../main"
import conditionalMenu from "./conditionalMenu.vue"

export default {
    name: 'conditionalFecha',
    components:{
        conditionalMenu
    },
    data(){
        return{
            toggler: true,
            arrowButton: true,
            arrowButton2: true       
        };
    },
    methods: {
        cambiarFlecha(){
            this.toggler = !this.toggler
        },
        filtrarPrecio(){
            this.arrowButton = !this.arrowButton
            bus.$emit("filtrarPrecio")
        },
        filtrarFecha(){
            this.arrowButton2 = !this.arrowButton2
            bus.$emit("filtrarFecha")
        }
    }
}
</script>
<style scoped>
    .color-fondo-interno{
        background-color: #EDDAA2;
        border: 10px ridge #EDDAA2;
        border-radius: 25px;
    }
</style>