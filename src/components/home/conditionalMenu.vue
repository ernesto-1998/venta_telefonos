<template>
  <div
    class="color-fondo"
  >
    <div class="row mt-3">
      <div class="col">
        <div class="form-check form-switch ms-2">
          <input
          @click="esNuevo"
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked
          />
          <label
            class="form-check-label"
            for="flexSwitchCheckChecked"
            style="font-size: large"
            ><b>Nuevo</b></label
          >
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div class="card color-fondo-interno">
          <div class="card-header"><b>Marca</b></div>
          <div class="container">
            <div class="form-check mt-2">
              <input
                class="form-check-input"
                v-model="marcas"
                type="checkbox"
                value="samsung"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>Samsung</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                v-model="marcas"
                type="checkbox"
                value="huawei"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Huawei</b>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                v-model="marcas"
                type="checkbox"
                value="nokia"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Nokia</b>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                v-model="marcas"
                type="checkbox"
                value="iphone"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Iphone</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                v-model="marcas"
                type="checkbox"
                value="xiaomi"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Xiaomi</b>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div class="card color-fondo-interno">
          <div class="card-header"><b>Sistema</b></div>
          <div class="container">
            <div class="form-check mt-2">
              <input
                class="form-check-input"
                v-model="sistemas"
                type="checkbox"
                value="android"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>Android</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                v-model="sistemas"
                type="checkbox"
                value="windows"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Windows</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                v-model="sistemas"
                type="checkbox"
                value="ios"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>IOS</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                v-model="sistemas"
                type="checkbox"
                value="harmonyos"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>harmony</b>
              </label>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div class="card color-fondo-interno">
          <div class="card-header"><b>Pantalla</b></div>
          <div class="container">
            <div class="form-check mt-2">
              <input
                class="form-check-input"
                v-model="pantallas"
                type="checkbox"
                value="6"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>6.0</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                v-model="pantallas"
                type="checkbox"
                value="5.5"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>5.5</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                v-model="pantallas"
                type="checkbox"
                value="5"
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>5</b>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '../../main'

export default {
  name: "conditionalMenu",
  data(){
    return{
      marcas: [],
      sistemas: [],
      pantallas: []
    };
  },
  methods:{
    esNuevo(){
      bus.$emit("esNuevo")
    },
    filtroMarcas(){
      bus.$emit("filtroMarcas", this.marcas)
    },
    filtroSistemas(){
      bus.$emit("filtroSistemas", this.sistemas)
    },
    filtroPantallas(){
      bus.$emit("filtroPantallas", this.pantallas)
    }
  },
  updated(){
    this.filtroMarcas();
    this.filtroSistemas();
    this.filtroPantallas();
  }
};
</script>

<style scoped>
  .color-fondo{
    background-color: #ffcc35; 
    height: 650px; 
    border: 10px ridge #ffcc35;
  }

  .color-fondo-interno{
    background-color: #ffcc55;
    border: 10px ridge #ffcc55;
  }
</style>