<template>
  <!-- NUEVO ANUNCIO DESKTOP -->

  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-md-6 mb-3">
        <!-- PRIMER CUADRANTE (TELEFONO) -->

        <div class="row">
          <div class="col">
            <div class="card color-fondo">
              <div class="container">
                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Estado:</b></label>
                  </div>
                  <div class="col">
                    <div class="form-check form-check-inline">
                      <input
                        v-model="anuncio.telefono.estado"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="nuevo"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >Nuevo</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        v-model="anuncio.telefono.estado"
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="usado"
                      />
                      <label class="form-check-label" for="inlineRadio2"
                        >Usado</label
                      >
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Marca:</b></label>
                  </div>
                  <div class="col">
                    <input
                      v-model="anuncio.telefono.marca"
                      type="text"
                      style="width: 90px"
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Modelo:</b></label>
                  </div>
                  <div class="col">
                    <input
                      v-model="anuncio.telefono.modelo"
                      type="text"
                      style="width: 90px"
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Pantalla:</b></label>
                  </div>
                  <div class="col">
                    <input
                      v-model="anuncio.telefono.pantalla"
                      type="number"
                      style="width: 90px"
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Sistema:</b></label>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <select
                      v-model="anuncio.telefono.sistema"
                      class="form-select"
                      style="width: 160px"
                      aria-label="Default select example"
                    >
                      <option disabled value="">
                        Seleccione un sistema operativo
                      </option>
                      <option value="ios">Ios</option>
                      <option value="android">Android</option>
                      <option value="windows">Windows</option>
                      <option value="harmonyos">Harmony OS</option>
                    </select>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-3">
                    <label for=""><b>Rom:</b></label>
                  </div>
                  <div class="col">
                    <input
                      v-model="anuncio.telefono.rom"
                      type="number"
                      style="width: 90px"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col-3">
                    <label for=""><b>RAM:</b></label>
                  </div>
                  <div class="col">
                    <input
                      v-model="anuncio.telefono.ram"
                      type="number"
                      style="width: 90px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SEGUNDO CUADRANTE (MENU IMAGENES)-->

        <div class="row pt-3">
          <div class="col">
            <div class="container color-fondo">
              <div class="row mt-3 d-flex">

                <!-- COLUMNA CAROUSEL (VISTA MOVIL) -->

                <div class="col d-md-none">
                  <div
                    v-if="renderizarCarousel()"
                    id="carouselExampleControls2"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div
                        v-for="(img, index) in imagenes"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index == 0 }"
                      >
                        <img
                          :src="img"
                          class="d-block w-100"
                          height="200px"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls2"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls2"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <img height="200" v-if="!renderizarCarousel()" src="../assets/NoImage.jpg" alt="">
                </div>

                <!-- COLUMNA 1 (BOTONES) -->

                <div class="col-lg-2">
                  <div class="row d-flex justify-content-start">
                    <div class="col">
                      <a @click="cargarImagen()">
                        <i
                          class="bi bi-plus-circle"
                          style="font-size: 4rem; color: black"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- COLUMNA 2 (REFERENCIAS DE IMAGENES) -->

                <div class="col">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">N</th>
                        <th scope="col">Tamaño</th>
                        <th scope="col">Tipo</th>
                      </tr>
                    </thead>
                    <tbody v-if="visible === true">
                      <tr v-for="(value, index) in metaDatosI" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{ value.size }} kb</td>
                        <td>{{ value.type === 'image/jpeg' ? '.jpg' : value.type === 'image/png' ? '.png': '.gif' }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <b-spinner v-if="visible === false" style="width: 5rem; height: 5rem;" class="ms-md-10 mt-md-3" variant="primary"></b-spinner>
                </div>

                <!-- COLUMNA 3 (CAROUSEL) -->

                <div class="col d-none d-md-block">
                  <div
                    v-if="renderizarCarousel()"
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div
                        v-for="(img, index) in imagenes"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index == 0 }"
                      >
                        <img
                          :src="img"
                          class="d-block w-100"
                          height="200px"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <img height="200" width="150" v-if="!renderizarCarousel()" src="../assets/NoImage.jpg" alt="">                  
                </div>
              </div>

              <div class="row mt-2">
                <div class="col d-flex justify-content-center">
                  <b-form-file
                    plain
                    v-model="imagenP"
                    id="file-small" size="sm"
                  ></b-form-file>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col px-4 px-md-0">
        <!-- TERCER CUADRANTE (ANUNCIO) -->

        <div class="row mt-3 mt-md-0 me-md-3">
          <div class="col px-4 ms-lg-5 color-fondo">
            <div class="row mt-2">
              <label for=""><b>Titulo breve del anuncio</b></label>
              <input v-model="anuncio.titulo" class="mt-2" type="text" />
            </div>

            <div class="row">
              <label class="mt-2" for="" style="width: 100px"
                ><b>Vendedor:</b></label
              >
              <input
                v-model="anuncio.nombre"
                class="mt-2"
                type="text"
                style="width: 200px"
              />
            </div>

            <div class="row">
              <label class="mt-2" for="" style="width: 100px"
                ><b>Telefono:</b></label
              >
              <input
                v-model="anuncio.telefonoContacto"
                class="mt-2"
                type="number"
                style="width: 200px"
              />
            </div>

            <div class="row">
              <label class="mt-2" for="" style="width: 100px"
                ><b>Descripcion:</b></label
              >
              <textarea
                v-model="anuncio.descripcion"
                style="margin-top: 10px"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div class="row mt-3 d-flex justify-content-center">
              <div class="col col-md-6">
                <div
                  class="card text-center"
                  style="background-color: #EDDAA2; border: 10px ridge #EDDAA2"
                >
                  <div class="card-header border-bottom border-dark">
                    <b>Precio</b>
                  </div>
                  <div class="card-body">
                    <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <input
                        v-model="anuncio.precio"
                        type="number"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5 mb-4 d-flex justify-content-center">
              <div class="col d-flex justify-content-end">
                <router-link
                  :to="{ name: 'Home' }"
                  class="btn btn-danger btn-lg"
                  >Cancelar</router-link
                >
              </div>
              <div class="col">
                <!-- <router-link :to="{name: 'Home'}"><button class="btn btn-primary btn-lg" @click="pruebaTraer()">Crear</button></router-link> -->
                <button
                  class="btn btn-primary btn-lg"
                  @click="guardarAnuncio()"
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, st } from "../firebase";
import swal from 'sweetalert';

export default {
  name: "nuevoAnuncio",
  components: {
    
  },
  data() {
    return {
      visible: true,
      contador: 1,
      contador2: 1,
      contador3: 1,
      metaDatosI: [],
      carpeta: "imagenes",
      imagenes:[],
      imagenes2:[],
      imagenP: null,
      id_anuncio: "",
      anuncio: {
        titulo: "",
        nombre: "",
        telefonoContacto: null,
        descripcion: "",
        precio: null,
        foto: null,
        fecha: "",
        telefono: {
          estado: "",
          marca: "",
          modelo: "",
          pantalla: null,
          sistema: "",
          rom: null,
          ram: null,
        },
      },
    };
  },
  methods: {
    validarTelefono() {
      if (
        !this.anuncio.telefono.estado ||
        !this.anuncio.telefono.marca ||
        !this.anuncio.telefono.modelo ||
        this.anuncio.telefono.pantalla <= 0 ||
        !this.anuncio.telefono.sistema ||
        this.anuncio.telefono.rom <= 0 ||
        this.anuncio.telefono.ram <= 0
      ) {
        return false;
      } else {
        return true;
      }
    },

    validarAnuncio() {
      if (
        !this.anuncio.titulo ||
        !this.anuncio.nombre ||
        this.anuncio.telefonoContacto <= 0 ||
        !this.anuncio.descripcion ||
        this.anuncio.precio <= 0
      ) {
        return false;
      } else {
        return true;
      }
    },

    async guardarAnuncio() {
      if (this.validarTelefono() === true && this.validarAnuncio() === true) {
        if (this.imagenes2.length > 0){
          try {            
            this.anuncio.fecha = new Date();
            const query = await db.collection("anuncios").add(this.anuncio);
            this.id_anuncio = query.id;
            this.guardarImagenes(this.id_anuncio)
            swal({ title: "Anuncio Guardado!",
                  text: "El anuncio se ha guardado perfectamente!",
                  icon: "success", timer: 2200, button: false, })
            setTimeout(() => {
              this.$router.push({name: 'Home'})
            }, 2200)
          } catch (error) {
            console.log(error)
          }
        } else{
          swal("Error", "Debes incluir al menos una imagen en tu anuncio", "error")
        }
      } else {
        swal("Error","Debes llenar todos los campos de ambos formularios (Los numeros no pueden ser negativos)", "error");
      }
    },

    // Este método guarda las imagenes de carousel en la carpeta del usuario

    guardarImagenes(id){
      const referencia = st.ref();
      let this2 = this
      if(this2.imagenes2.length !== 0){
        this2.imagenes2.forEach((img) => {
          const imgRefe = referencia.child(id).child(this2.contador2.toString())
          imgRefe.put(img);
          this2.contador2 += 1;
        });
      }else{
        swal("Error", "Debes incluir al menos una imagen en tu anuncio", "error")
      }
    },   
    
    // Este metodo ingresa las imagenes a la carpeta imagenes del storage

    cargarImagen(){

      if(this.imagenP !== null){
        if(this.imagenes.length < 4){
          try {
            this.visible = false;
            const referencia = st.ref();
            let this2 = this;
            this2.imagenes2.push(this2.imagenP);
            const imgRefe = referencia.child(this.carpeta).child(this.contador.toString());
            imgRefe.put(this.imagenP).then(() => {
              this2.ponerImagen();
              this.imagenP = null;
              this.contador += 1;
            })

          } catch (error) {
            console.log(error)
            }            
        }else{
          swal("Error" ,"Solo puede subir un máximo de 4 imagenes por anuncio", "error")
        }
      } else{
        swal("Error", "No ha seleccionado una imagen para subirla", "error")
      }
    },

    // Este metodo trae las imagenes de la carpeta imagenes del storage y las pone en el carousel 

    async ponerImagen(){

      const referencia = st.ref();
      let this2 = this
      await referencia
        .child(this.carpeta + "/" + this.contador3.toString())
        .getDownloadURL()
        .then((url) => {
            this2.imagenes.push(url);
            this.visible = true;
        });

      const metaDatos = await referencia
        .child(this.carpeta + "/" + this.contador3.toString()).getMetadata()
        this.metaDatosI.push({size: (metaDatos.size*0.001).toFixed(0), type: metaDatos.contentType})
        this.contador3 += 1;
    },    

    renderizarCarousel(){

      if(this.imagenes.length === 0){
        return false
      }else{
        return true
      }
    },

  },
};
</script>
<style scoped>
  .color-fondo {
    background-color: #FFBD00;
    border: 10px ridge #FFBD00;
  }
</style>