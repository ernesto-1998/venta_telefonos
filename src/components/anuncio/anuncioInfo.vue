<template>
    <div class="row">
        <div class="col-12 mt-2">
            <h5><b> {{info.telefono.marca}} {{info.telefono.modelo}} pantalla de {{info.telefono.pantalla}} pulgadas, {{info.telefono.rom}} GB internos, {{info.telefono.ram}} GB de RAM, {{info.telefono.estado}} </b></h5>
        </div>
        <div class="col-12">
            <h1> <strong>$ </strong> <strong>{{info.precio}}</strong></h1>
        </div>
        <div class="col-12 mt-1">
             <router-link :to="{name: 'Home'}" class="btn btn-danger d-md-none me-2">Cancelar</router-link>            
            <button @click="telefonoComprado" class="btn btn-primary">Comprar</button>
        </div>
        <div class="col-12">
            <div class="card mt-3">
                <div class="row" style="height: 70px;">
                    <div class="col d-flex align-items-center justify-content-center" style="height: 100%;">
                        <strong>Vendedor: </strong> <label class="ms-2">{{info.nombre}}</label>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" style="height: 100%;">
                        <strong>Telefono: </strong>  <label class="ms-2">{{info.telefonoContacto}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'anuncioInfo',
    props:{
        info: Object,
    },
    methods: {
        telefonoComprado(){
            swal({ title: "Telefono Comprado!",
                  text: "Producto añadido al carrito de compras!",
                  icon: "success", timer: 2200, button: false, })
            setTimeout(() => {
              this.$router.push({name: 'Home'})
            }, 2200)            
        }
    }
}
</script>
<style scoped>
    
</style>