<template>
    <div class="container-fluid ps-3">
        <div class="row">
            <div class="col-md-6 col-sm-12 mt-4">
                <h2><strong>Marcas más populares</strong></h2>
                <apexchart type="bar" height="300" :options="options" :series="series"></apexchart>
            </div>
            <div class="col-md-6 col-sm-12 mt-4">
                <h2><strong>Sistemas operativos más populares</strong></h2>
                <apexchart  height="300" type="area" :options="options1" :series="series1"></apexchart>
            </div>
        </div>
        <div class="row">
            <div class="col mt-4">
                <h2><strong>Tamaño de pantalla más populares</strong></h2>
                <div class="d-flex justify-content-center">
                    <apexchart width="380" type="donut" :options="options2" :series="series2"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '../firebase'

export default {
    name: 'estadisticas',
    data(){
        return {
            anuncios: [],
            marcas: [0,0,0,0,0],
            sistemas: [0,0,0,0],
            pantallas: [0,0,0],
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: ["samsung", "iphone", "huawei", "nokia", "xiaomi"]
                }
            },
            options1: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: ["Android", "Ios", "Windows", "Harmony OS"]
                }
            },
            options2: {
                labels: ['6', '5.5', '5']
            },                       
            series: [],
            series1: [],
            series2: [],
            
        }
    },
    async created(){
        await this.traerDatos();
        this.series = [{
            data: this.marcas
        }]  
        this.series1 = [{
            data: this.sistemas
        }]
        this.series2 = this.pantallas   
    },

    methods:{
        async traerDatos(){
            try {
                this.anuncios = []
                const datos = await db.collection('anuncios').get()
                for(const documentos of datos.docs){
                    let anuncio = {
                        id: documentos.id,
                        nombre: documentos.data().nombre,
                        precio: parseInt(documentos.data().precio),
                        telefonoContacto: documentos.data().telefonoContacto,
                        titulo: documentos.data().titulo,
                        descripcion: documentos.data().descripcion,
                        fecha: documentos.data().fecha === undefined ? "" : documentos.data().fecha.toDate(),
                        telefono: {
                            estado: documentos.data().telefono.estado,
                            marca: documentos.data().telefono.marca,
                            sistema: documentos.data().telefono.sistema,
                            modelo: documentos.data().telefono.modelo,
                            pantalla: parseFloat(documentos.data().telefono.pantalla),
                            rom: documentos.data().telefono.rom,
                            ram: documentos.data().telefono.ram,
                        }
                    }
                    this.anuncios.push(anuncio);
                }    
                this.contarMarcas();
                this.contarSistemas();
                this.contarPantallas();          
            } catch (error) {
                console.log(error)
            }
        },
        contarMarcas(){
            for(const marca of this.anuncios){
                if(marca.telefono.marca.toLowerCase() === "samsung"){
                    this.marcas[0] += 1
                }else if(marca.telefono.sistema === "ios"){
                    this.marcas[1] += 1
                }else if(marca.telefono.marca.toLowerCase() === "huawei"){
                    this.marcas[2] += 1
                }else if(marca.telefono.marca.toLowerCase() === "nokia"){
                    this.marcas[3] += 1
                }else if(marca.telefono.marca.toLowerCase() === "xiaomi"){
                    this.marcas[4] += 1
                }
            }
          
        },
        contarSistemas(){
            for(const sistema of this.anuncios){
                if(sistema.telefono.sistema === "android"){
                    this.sistemas[0] += 1
                }else if(sistema.telefono.sistema === "ios"){
                    this.sistemas[1] += 1
                }else if(sistema.telefono.sistema === "windows"){
                    this.sistemas[2] += 1
                }else if(sistema.telefono.sistema === "harmonyos"){
                    this.sistemas[3] += 1
                }
            }            
        },
        contarPantallas(){
            for(const pantalla of this.anuncios){
                if(pantalla.telefono.pantalla >= 6.0){
                    this.pantallas[0] += 1
                }else if(pantalla.telefono.pantalla >= 5.5 && pantalla.telefono.pantalla < 6){
                    this.pantallas[1] += 1
                }else if(pantalla.telefono.pantalla < 5.5){
                    this.pantallas[2] += 1
                }
            }            
        }
    }
}
</script>
<style scoped>
    
</style>