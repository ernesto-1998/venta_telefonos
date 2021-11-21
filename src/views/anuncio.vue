<template>
    <div class="container">
        <div class="row">
            <div class="col">

            </div>
            <div class="col">

            </div>
        </div>
        <div class="row">
            <div class="col">

            </div>
            <div class="col">
                
            </div>
        </div> 
    </div>
</template>
<script>
import carouselAnuncio from '../components/anuncio/carouselAnuncio.vue'

export default {
    name: 'anuncio',
    components:{
        carouselAnuncio
    },
    data(){
        return{
            imagenes: [],
            anuncio: {
                id: "",
                nombre: "",
                precio: "",
                telefonoContacto: "",
                titulo: "",
                descripcion: "",
                fecha: "",
                foto: "",
                telefono: {
                    estado: "",
                    marca: "",
                    sistema: "",
                    modelo: "",
                    pantalla: "",
                    rom: "",
                    ram: "",
                }
            }
        };
    }
}
</script>
<style lang="">
    
</style>