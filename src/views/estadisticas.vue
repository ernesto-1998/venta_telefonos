<template>
    <div class="container-fluid ps-3">
        <div class="row">
            <div class="col mt-3">
                <apexchart ref="realtimeChart" type="bar" width="500" :options="options" :series="series"></apexchart>
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
import {db} from '../firebase'

export default {
    name: 'estadisticas',
    data(){
        return {
            anuncios: [],
            marcas: [0,0,0,0,0],
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: ["samsung", "iphone", "huawei", "nokia", "xiaomi"]
                }
            },
            series: [{
                name: 'marcas',
                data: [3,5,4,8,9]
            }]
        }
    },
    async created(){
        await this.traerDatos();
        this.contarMarcas();
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
            } catch (error) {
                console.log(error)
            }
        },
        contarMarcas(){
            for(const marca of this.anuncios){
                if(marca.telefono.marca.toLowerCase() === "samsung"){
                    this.marcas[0] += 1
                }else if(marca.telefono.marca.toLowerCase() === "iphone"){
                    this.marcas[1] += 1
                }else if(marca.telefono.marca.toLowerCase() === "huawei"){
                    this.marcas[2] += 1
                }else if(marca.telefono.marca.toLowerCase() === "nokia"){
                    this.marcas[3] += 1
                }else if(marca.telefono.marca.toLowerCase() === "xiaomi"){
                    this.marcas[4] += 1
                }
            }
            this.series[0].data = []
            this.series[0].data.push(this.marcas[0])
            this.series[0].data.push(this.marcas[1])
            this.series[0].data.push(this.marcas[2])
            this.series[0].data.push(this.marcas[3])
            this.series[0].data.push(this.marcas[4])
            console.log(this.series[0].data)
        }
    }
}
</script>
<style scoped>
    
</style>