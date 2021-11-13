<template>
  <!-- NUEVO ANUNCIO DESKTOP -->

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="row">

          <!-- PRIMER CUADRANTE (TELEFONO) -->

          <div class="col">
            <div class="card border-2 border border-dark bg-warning">
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
                    <option value="Ios">Ios</option>
                    <option value="Android">Android</option>
                    <option value="Windows">Windows</option>
                    <option value="Harmony OS">Harmony OS</option>
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

          <!-- FINAL DEL PRIMER CUADRANTE -->
        </div>
        <div class="row">



        </div>
      </div>
      <div class="col px-4 px-md-0">
        <div class="row">

          <!-- TERCER CUADRANTE (ANUNCIO) -->

            <div class="col mt-4 ms-lg-5">
                <div class="row">
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
                <div class="col-6">
                    <div
                    class="card text-center border border-dark"
                    style="background-color: #fe9e00"
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
                <button class="btn btn-primary btn-lg" @click="guardarAnuncio()">
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
import {db} from "../firebase"
// import formCellphone from "@/components/nuevoAnuncio/formCellphone";
// import formAnuncio from "@/components/nuevoAnuncio/formAnuncio";

export default {
  name: "nuevoAnuncio",
//   components: {
//     formCellphone,
//     formAnuncio,
//   },
  data(){
      return{
            id_anuncio: "",
            anuncio: {
                titulo: "",
                nombre: "",
                telefonoContacto: 0,
                descripcion: "",
                precio: 0,
                telefono:{
                    estado:"",
                    marca:"",
                    modelo:"",
                    pantalla: 0,
                    sistema:"",
                    rom:0,
                    ram:0                        
                }
            }
      };
  },
  methods:{
    validarTelefono(){
        if(!this.anuncio.telefono.estado || !this.anuncio.telefono.marca || !this.anuncio.telefono.modelo || this.anuncio.telefono.pantalla <= 0 || !this.anuncio.telefono.sistema || this.anuncio.telefono.rom <= 0 || this.anuncio.telefono.ram <= 0){
          return false
        }else{
          return true
        }
      },
      
    validarAnuncio(){
        if(!this.anuncio.titulo || !this.anuncio.nombre || this.anuncio.telefonoContacto <= 0 || !this.anuncio.descripcion || this.anuncio.precio <= 0){
          return false
        }else{
          return true
        }
      }, 

      async guardarAnuncio(){
          if(this.validarTelefono() === true && this.validarAnuncio() === true){
              try {
                  const query = await db.collection("anuncios").add(this.anuncio);
                  console.log("El siguiente anuncio ha sido agregado exitosamente", query.data)
                  this.id_anuncio = query.id
              } catch (error) {
                  console.log(error)
              }
          }else{
            alert("Debe llenar todos los campos de ambos formularios")              
              
          }
      }
  }
};
</script>
<style lang="scope">
</style>