<template>
    <div class="container">
        <div class="row">
            <div class="col mt-3">
                <carouselAnuncio :imagenes="imagenes" />
            </div>
            <div class="col mt-3">
                <anuncioInfo :info="anuncio2" />
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
import anuncioInfo from '../components/anuncio/anuncioInfo.vue'
import {db, st} from '../firebase'

export default {
    name: 'anuncio',
    components:{
        carouselAnuncio,
        anuncioInfo
    },
    data(){
        return{
            imagenes: [],
            id: this.$router.currentRoute.params.id,
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
    },
    created(){
        this.traerDatos();
    },

    methods:{
        async traerDatos(){
            try {
                await Promise.allSettled([
                    db.collection('anuncios/').doc(this.id).get().then(doc => {
                        this.anuncio2 = doc.data();
                        console.log(this.anuncio2)
                    }),
                     st.ref().child(this.id).listAll().then(res => {
                         res.items.forEach(img => {
                             img.getDownloadURL().then(i => {
                                 this.imagenes.push(i)
                             })
                         })
                     }),
                ]);                
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>
    
</style>