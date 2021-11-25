<template>
    <div class="card color-fondo-interno" style="height: 100%; border-radius: 25px;">
        <div class="container" style="height: 100%;">
            <div class="row d-flex justify-content-around" style="height: 100%;">
                <div class="col my-2 d-flex align-items-center">
                    <label for="" class="me-2"> <b> Desde: </b>  </label>
                    <input style="width: 100px" type="text" maxlength="5" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" v-model="desde">
                    <a @click="limpiarDesde"><i class="bi bi-x-circle-fill" style="font-size: 2rem; color: #E83100; border-radius: 30px;"></i></a>
                </div>
                <div class="col my-2 d-flex align-items-center">
                    <label for="" class="me-2"> <b> Hasta: </b> </label>
                    <input style="width: 100px" type="text" maxlength="5" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" v-model="hasta">
                    <a ><i @click="limpiarHasta" class="bi bi-x-circle-fill" style="font-size: 2rem; color:  #E83100; border-radius: 30px;"></i></a>
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
            desde: "",
            hasta: "",
            condicionalesPrecio: []
        };
    },

    methods:{
        enviarDesde(){
            bus.$emit("enviarDesde", this.desde)
        },
        enviarHasta(){
            bus.$emit('enviarHasta', this.hasta)
        },
        limpiarDesde(){
            this.desde = ""
        },
        limpiarHasta(){
            this.hasta = ""
        }
            
    },

    updated(){
        this.enviarDesde()
        this.enviarHasta()
    }
}
</script>
<style scoped>
    .color-fondo-interno{
        background-color: #EDDAA2;
        border: 10px ridge #EDDAA2;
    }

    input{
        border-radius: 25px;
    }
</style>