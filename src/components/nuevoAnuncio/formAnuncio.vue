<template>
  <div class="col mt-4 ms-lg-5">
    <div class="row">
      <label for=""><b>Titulo breve del anuncio</b></label>
      <input v-model="anuncio.titulo" class="mt-2" type="text" />
    </div>

    <div class="row">
      <label class="mt-2" for="" style="width: 100px"><b>Vendedor:</b></label>
      <input v-model="anuncio.nombre" class="mt-2" type="text" style="width: 200px" />
    </div>

    <div class="row">
      <label class="mt-2" for="" style="width: 100px"><b>Telefono:</b></label>
      <input v-model="anuncio.telefonoContacto" class="mt-2" type="number" style="width: 200px" />
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
        <router-link :to="{name: 'Home'}" class="btn btn-danger btn-lg">Cancelar</router-link>
      </div>
      <div class="col">
        <!-- <a onclick="mostrar()" class="btn btn-primary btn-lg">Crear</a> -->
        <router-link :to="{name: 'Home'}" class="btn btn-primary btn-lg">Crear</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'formAnuncio',
    data(){
        return{
            anuncio: {
                titulo: "",
                nombre: "",
                telefonoContacto: "",
                descripcion: "",
                precio: "",
                telefono:{

                }
            }
        };
    }
};
</script>

<style lang="">
</style>