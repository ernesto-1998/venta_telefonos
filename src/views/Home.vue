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

          <div class="row">
            <div class="mt-3 col-md-3 col-xs-12 col-sm-6" v-for="anuncio in anunciosFiltrados" :key="anuncio.id">
              <card :anuncio="anuncio"/>
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
import {bus} from '../main'
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
      anuncios: [],
      foto: null,
      textoNavbar: "",
      filtrarPrecio: true,
      filtrarFecha: true,
      filtrosMarcas: [],
      filtrosSistemas: [],
      filtrosPantallas: [],
      estado: null,
      anunciosFiltrados: [],
    };
  },
  methods:{
    traerAnuncios(){
      this.anuncios = []
      try {
        const data = this.trayendoDataAnuncios();
        data.forEach(async (documentos) => {
          this.foto = await st.ref().child(documentos.id + "/" + "1").getDownloadURL();
          let anuncio = {
            id: documentos.id,
            nombre: documentos.data().nombre,
            precio: parseInt(documentos.data().precio),
            telefonoContacto: documentos.data().telefonoContacto,
            titulo: documentos.data().titulo,
            descripcion: documentos.data().descripcion,
            foto: this.foto,
            telefono: {
              estado: documentos.data().telefono.estado,
              marca: documentos.data().telefono.marca.toLowerCase(),
              sistema: documentos.data().telefono.sistema,
              modelo: documentos.data().telefono.modelo,
              pantalla: documentos.data().telefono.pantalla,
              rom: documentos.data().telefono.rom,
              ram: documentos.data().telefono.ram,
            }
          }
          this.anuncios.push(anuncio);
        });              
      } catch (error) {
        console.log(error)
      }
    },

    async trayendoDataAnuncios(){
      try {
       return await db.collection('anuncios').get()
       
      } catch (error) {
        console.log(error)
      }
    },

  // Seccion de filtros

    filtrarAnuncios(){
      this.anunciosFiltrados = this.anuncios
      if (this.textoNavbar !== "") {
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp(this.textoNavbar, "i");
          return regex.test(t.telefono.marca);
        });      
      }  
      else if(this.textoNavbar === ""){
        this.anunciosFiltrados = this.anuncios
      }

      if(this.filtrarPrecio === false){
        this.anunciosFiltrados = this.anunciosFiltrados.sort((p1, p2) => {
          if (p1.precio > p2.precio) {
            return 1;
          }
          if (p1.precio < p2.precio) {
            return -1;
          }
          return 0;
        }); 
      } else if(this.filtrarPrecio === true){
        this.anunciosFiltrados = this.anunciosFiltrados.sort((p1, p2) => {
          if (p2.precio > p1.precio) {
            return 1;
          }
          if (p2.precio < p1.precio) {
            return -1;
          }
          return 0;
        });        
      }

      // Filtros marca
      
      if(this.filtrosMarcas.length > 0){
        this.fitrosMarcas = this.filtrosMarcas.filter(x => {
          if(x === "samsung"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.marca);
            })
          } 
          else if(x === "huawei"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.marca);
            })            
          }
          else if(x === "nokia"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.marca);
            })            
          }
          else if(x === "iphone"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.marca);
            })            
          }
          else if(x === "xiaomi"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.marca);
            })            
          }
        })        
      }

      // Filtrar por Sistemas

      if(this.filtrosSistemas.length > 0){
        this.fitrosSistemas = this.filtrosSistemas.filter(x => {
          if(x === "android"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.sistema);
            })
          } 
          else if(x === "windows"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.sistema);
            })            
          }
          else if(x === "ios"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.sistema);
            })            
          }
          else if(x === "harmonyos"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.sistema);
            })            
          }
        })        
      }

      // Filtrar por pantalla

      if(this.filtrosPantallas.length > 0){
        this.filtrosPantallas = this.filtrosPantallas.filter(x => {
          if(x === "6"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.pantalla);
            })
          } 
          else if(x === "5.5"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.pantalla);
            })            
          }
          else if(x === "5.0"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              let regex = new RegExp(x, "i");
              return regex.test(t.telefono.pantalla);
            })            
          }
        })        
      }      

      // Filtrar por estado

      if(this.estado === false){
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp("usado", "i");
          return regex.test(t.telefono.estado);
        });          
      }else if(this.estado === true){
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp("nuevo", "i");
          return regex.test(t.telefono.estado);
        });          
      }
    }
  },

  async created(){
    await this.traerAnuncios();
    this.filtrarAnuncios();
  },

  mounted(){
    bus.$on("filtrarPrecio", ()=>{
      this.filtrarPrecio = !this.filtrarPrecio
      this.filtrarAnuncios();
    }),
    bus.$on("filtrarFecha", ()=>{
      this.filtrarFecha = !this.filtrarFecha
    }),
    bus.$on("buscarCard", (data) => {
      this.textoNavbar = data;
      this.filtrarAnuncios();
    }),
    bus.$on("esNuevo", () => {
      this.estado = !this.estado;
      this.filtrarAnuncios();
    }),
    bus.$on("filtroMarcas", (marcas) => {
      this.filtrosMarcas = marcas;
      this.filtrarAnuncios();
    }),
    bus.$on("filtroSistemas", (sistemas) => {
      this.filtrosSistemas = sistemas;
      this.filtrarAnuncios();
    }),
    bus.$on("filtroPantallas", (pantallas) => {
      this.filtrosPantallas = pantallas;
      this.filtrarAnuncios();
    })
  }
}
</script>

  