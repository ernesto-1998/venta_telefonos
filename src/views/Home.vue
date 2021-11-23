<template>
  <div class="home">
    <div class="container-fluid" v-if="visible === true">
      <div class="row mt-2">
        <div class="col-2 d-none d-lg-block d-md-block">
          <conditional-menu/>
        </div>

        
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
            <div class="mt-3 col-md-3 col-xs-12 col-sm-6" v-for="anuncio in anunciosPaginados" :key="anuncio.id">
              <card :anuncio="anuncio"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 mt-3 d-flex justify-content-center">
              <b-pagination
                v-model="paginaActual"
                :total-rows="numeroPaginas"
                :per-page="1"
                @input="cambioPagina"               
              ></b-pagination>              
            </div>
            <div class="col mt-3 d-none d-md-block">
              <label>Articulos por página</label>                 
              <b-form-select v-model="anunciosPorPagina" @input="cambiarSelect" :options="options" class="mt-3 ms-2"></b-form-select>
            </div>
          </div>
        </div>

      </div>
    </div>
    <b-spinner class="d-md-none" type="grow" variant="warning" v-if="visible === false" style="width: 15rem; height: 15rem; margin-top: 150px"></b-spinner>
    <!-- <img class="d-md-none" v-else src="https://i.gifer.com/D5Vu.gif" alt=""> -->
    <div class="row d-none d-md-block">
      <div class="col d-flex justify-content-center">
        <img class="" src="../assets/beer.gif" v-if="visible === false" alt="">
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
      visible: false,
      anuncios: [],
      foto: null,
      textoNavbar: "",
      filtrarPrecio: null,
      filtrarFecha: null,
      filtrarDesde: "",
      filtrarHasta: "",
      filtrosMarcas: [],
      filtrosSistemas: [],
      filtrosPantallas: [],
      estado: null,
      anunciosFiltrados: [],
      anunciosPorPagina: 8,
      anunciosPaginados: [],
      paginaActual: 1,
      numeroPaginas: 0,
      options:[
          { value: 4, text: '4' },
          { value: 8, text: '8' },
          { value: 16, text: '16' }
      ]
    };
  },
  methods:{
    async traerAnuncios(){
      this.anuncios = []
      try {
        const data = await db.collection('anuncios').get()
        for(const documentos of data.docs) {
          let anuncio = {
            id: documentos.id,
            nombre: documentos.data().nombre,
            precio: parseInt(documentos.data().precio),
            telefonoContacto: documentos.data().telefonoContacto,
            titulo: documentos.data().titulo,
            descripcion: documentos.data().descripcion,
            fecha: documentos.data().fecha === undefined ? "" : documentos.data().fecha.toDate(),
            foto: await st.ref().child(documentos.id + "/" + "1").getDownloadURL(),
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
        };
        this.visible = true;              
      } catch (error) {
        console.log(error)
      }
    },

    cambioPagina() {
      this.anunciosPaginados = this.anunciosFiltrados.slice(
        this.paginaActual * this.anunciosPorPagina - this.anunciosPorPagina,
        this.paginaActual * this.anunciosPorPagina
      );
    },

    cambiarSelect(){
      this.paginaActual = 1;
      this.total = this.anunciosFiltrados.length;
      this.numeroPaginas = Math.ceil(this.total / this.anunciosPorPagina);
      this.anunciosPaginados = this.anunciosFiltrados.slice(0, this.anunciosPorPagina);
    },

    filtrarAnuncios(){
      this.anunciosFiltrados = this.anuncios

      if (this.textoNavbar !== "") {
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp(this.textoNavbar, "i");
          return regex.test(t.telefono.marca);
        });      
      }  

      // filtrar Precio

      if(this.filtrarPrecio === false){
        this.anunciosFiltrados = this.anunciosFiltrados.sort((p1, p2) => {
          if (p1.precio > p2.precio) {
            this.filtrarFecha = null;            
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

      // filtrar Fecha

      if(this.filtrarFecha === true){
        this.anunciosFiltrados = this.anunciosFiltrados.sort((p1, p2) => {
          if (p1.fecha > p2.fecha) {
            return 1;
          }
          if (p1.fecha < p2.fecha) {
            return -1;
          }
          return 0;
        }); 
      } else if(this.filtrarFecha === false){
        this.anunciosFiltrados = this.anunciosFiltrados.sort((p1, p2) => {
          if (p2.fecha > p1.fecha) {
            return 1;
          }
          if (p2.fecha < p1.fecha) {
            return -1;
          }
          return 0;
        });        
      }      

      // Filtrar Desde Hasta

      if(this.filtrarDesde !== "" && this.filtrarHasta !== ""){
        parseInt(this.filtrarDesde)
        parseInt(this.filtrarHasta)
        this.anunciosFiltrados = this.anunciosFiltrados.filter(x => {
          return ((x.precio > this.filtrarDesde) && (x.precio < this.filtrarHasta))
        })
      }

      // if(this.filtrarHasta !== ""){
      //   parseInt(this.filtrarHasta)
      //   this.anunciosFiltrados = this.anunciosFiltrados.filter(x => {
      //     return x.precio < this.filtrarHasta
      //   })
      // }

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
              return t.telefono.pantalla >= 6
            })
          } 
          else if(x === "5.5"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              return t.telefono.pantalla < 6 && t.telefono.pantalla >= 5.5
            })            
          }
          else if(x === "5"){
            this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
              return t.telefono.pantalla < 5.5
            })            
          }
        })        
      }      

      // Filtrar por estado

      if(this.estado === true){
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp("usado", "i");
          return regex.test(t.telefono.estado);
        });          
      }else if(this.estado === false){
        this.anunciosFiltrados = this.anunciosFiltrados.filter(t => {
          let regex = new RegExp("nuevo", "i");
          return regex.test(t.telefono.estado);
        });          
      }

      this.paginaActual = 1;
      this.total = this.anunciosFiltrados.length;
      this.numeroPaginas = Math.ceil(this.total / this.anunciosPorPagina);
      this.anunciosPaginados = this.anunciosFiltrados.slice(0, this.anunciosPorPagina);   
     


    }
  },

  async created(){
    await this.traerAnuncios();
    this.filtrarAnuncios();
  },

  mounted(){
    bus.$on("filtrarPrecio", ()=>{
      this.filtrarFecha = null;
      this.filtrarPrecio = !this.filtrarPrecio
      this.filtrarAnuncios();
    }),
    bus.$on("filtrarFecha", ()=>{
      this.filtrarPrecio = null;      
      this.filtrarFecha = !this.filtrarFecha
      this.filtrarAnuncios();
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
    }),
    bus.$on("enviarDesde", (desde) => {
      this.filtrarDesde = desde;
      this.filtrarAnuncios();
    }),
    bus.$on("enviarHasta", (hasta) => {
      this.filtrarHasta = hasta;
      this.filtrarAnuncios();
    })
  }
}
</script>

  