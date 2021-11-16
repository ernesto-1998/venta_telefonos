<template>
    <div class="card color-fondo-interno">
        <div class="container">
            <div class="row d-flex justify-content-around">
                <div class="col my-2">
                    <label for="" class="me-2"> <b> Desde: </b>  </label>
                    <input type="number" v-model="desde">
                </div>
                <div class="col my-2">
                    <label for="" class="me-2"> <b> Hasta: </b> </label>
                    <input type="number" v-model="hasta">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../../main'

export default {
    name: 'conditionalPrecios',
    data(){
        return{
            desde: null,
            hasta: null,
            condicionalesPrecio: []
        };
    },

    methods:{
        enviarData(){
            if(this.desde !== null && this.hasta !== null && this.desde !== "" && this.hasta !== ""){
                console.log("se envio")
                this.condicionalesPrecio.push({desde: this.desde, hasta: this.hasta})
                bus.$emit('enviarPrecios', this.condicionalesPrecio)
            }
            
        }
    },

    updated(){
        this.enviarData()
    }
}
</script>
<style scoped>
    .color-fondo-interno{
        background-color: #ffcc55;
        border: 10px ridge #ffcc55;
    }

    input{
        border-radius: 25px;
    }
</style>