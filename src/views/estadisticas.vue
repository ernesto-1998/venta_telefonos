<template>
    <div class="container-fluid ps-3">
        <div class="row">
            <div class="col mt-3">
                <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        }
    },
    created(){
        this.traerDatos();
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
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>
    
</style>