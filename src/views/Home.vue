<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row mt-2">


        <conditional-menu/>
        <div class="col">

          <!-- FILA DE CONDICIONALES -->

          <div class="row">

            <div class="col d-none d-md-block">
              <conditional-precios/>
            </div>
            <div class="col">
              <conditional-fecha/>
            </div>

          </div>

        <!-- FILA DE CARDS -->

          <div class="row m-2">
            <div class="col col-md-3 col-xs-12 col-sm-6" v-for="(value, index) in anuncios" :key="index">
              <card :info="value"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import conditionalMenu from '@/components/home/conditionalMenu'
import conditionalPrecios from '@/components/home/conditionalPrecios'
import conditionalFecha from '@/components/home/conditionalFecha'
import card from '../components/home/card'
import {db,st} from '../firebase'
import swal from 'sweetalert'


export default {
  name: 'Home',
  components: {
    conditionalMenu,
    conditionalPrecios,
    conditionalFecha,
    card

  },
  data(){
    return{
      anuncios: []
    };
  },
  methods:{
    async traerAnuncios(){
      try {
        this.anuncios = []
        await db.collection('anuncios').get()
        .then((data) => {
        data.forEach(documentos => {
          let anuncio = {
            id: documentos.id,
            nombre: documentos.data().nombre,
            precio: documentos.data().precio,
            telefonoContacto: documentos.data().telefonoContacto,
            titulo: documentos.data().titulo,
            descripcion: documentos.data().descripcion,
            telefono: {
              estado: documentos.data().telefono.estado,
              marca: documentos.data().telefono.marca,
              modelo: documentos.data().telefono.modelo,
              pantalla: documentos.data().telefono.pantalla,
              rom: documentos.data().telefono.rom,
              ram: documentos.data().telefono.ram,
              foto: ""
            }
          }
          this.anuncios.push(anuncio);
          console.log(this.anuncios.id)
        });          
        })
        for(let anuncio1 of this.anuncios){
          anuncio1.foto = await st.ref().child(anuncio1.id.toString() + "/1").getDownloadURL();
        }        
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created(){
    await this.traerAnuncios()
  }
}
</script>

  