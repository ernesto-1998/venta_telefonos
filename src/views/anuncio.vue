<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 mt-3">
        <carouselAnuncio :imagenes="imagenes" />
      </div>
      <div class="col mt-3">
        <anuncioInfo :info="anuncio" />
      </div>
    </div>
    <div class="row">
      <div class="col mt-4">
        <h2><strong>DESCRIPCION</strong></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12 mt-3">
        <detallesAnuncio :info="anuncio" />
      </div>
      <div class="col mt-3">
        <textarea
          v-model="anuncio.descripcion"
          disabled
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import carouselAnuncio from "../components/anuncio/carouselAnuncio.vue";
import anuncioInfo from "../components/anuncio/anuncioInfo.vue";
import detallesAnuncio from "../components/anuncio/detallesAnuncio.vue";
import { db, st } from "../firebase";

export default {
  name: "anuncio",
  components: {
    carouselAnuncio,
    anuncioInfo,
    detallesAnuncio,
  },
  data() {
    return {
      imagenes: [],
      id: this.$router.currentRoute.params.id,
      anuncio: {
        nombre: "",
        precio: "",
        telefonoContacto: "",
        titulo: "",
        descripcion: "",
        fecha: "",
        telefono: {
          estado: "",
          marca: "",
          sistema: "",
          modelo: "",
          pantalla: "",
          rom: "",
          ram: "",
        },
      },
    };
  },
  created() {
    this.traerDatos();
  },

  methods: {
    async traerDatos() {
      try {
        await Promise.allSettled([
          db
            .collection("anuncios/")
            .doc(this.id)
            .get()
            .then((doc) => {
              this.anuncio.nombre = doc.data().nombre;
              this.anuncio.precio = doc.data().precio;
              this.anuncio.telefonoContacto = doc.data().telefonoContacto;
              this.anuncio.titulo = doc.data().titulo;
              this.anuncio.descripcion = doc.data().descripcion;
              this.anuncio.telefono.estado = doc.data().telefono.estado;
              this.anuncio.telefono.marca = doc.data().telefono.marca;
              this.anuncio.telefono.modelo = doc.data().telefono.modelo;
              this.anuncio.telefono.pantalla = doc.data().telefono.pantalla;
              this.anuncio.telefono.sistema = doc.data().telefono.sistema;
              this.anuncio.telefono.rom = doc.data().telefono.rom;
              this.anuncio.telefono.ram = doc.data().telefono.ram;
            }),
          st
            .ref()
            .child(this.id)
            .listAll()
            .then((res) => {
              res.items.forEach((img) => {
                img.getDownloadURL().then((i) => {
                  this.imagenes.push(i);
                });
              });
            }),
        ]);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>