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
                    <button
                        type="button"
                        class="navbar-toggler border border-2 border-dark d-md-none"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuNavegacion12"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>                               
                </div>
                                    <div id="menuNavegacion12" class="collapse navbar-collapse d-md-none" >
                        <ul class="navbar-nav ms-3 d-lg-none d-md-none" id="navbarBotones">
                            <li class="nav-item">
                                <conditionalMenu />
                            </li>
                        </ul>                                          
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