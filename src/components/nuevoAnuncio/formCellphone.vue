<template>
  <div class="col">
    <div
      class="card border-2 border border-dark bg-warning"
      
    >
      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Estado:</b></label>
        </div>
        <div class="col">
          <div class="form-check form-check-inline">
            <input
              v-model="telefono.estado"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="nuevo"
            />
            <label class="form-check-label" for="inlineRadio1">Nuevo</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="telefono.estado"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="usado"
            />
            <label class="form-check-label" for="inlineRadio2">Usado</label>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Marca:</b></label>
        </div>
        <div class="col">
          <input v-model="telefono.marca" type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Modelo:</b></label>
        </div>
        <div class="col">
          <input v-model="telefono.modelo" type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Pantalla:</b></label>
        </div>
        <div class="col">
          <input v-model="telefono.pantalla" type="number" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Sistema:</b></label>
        </div>
        <div class="col d-flex justify-content-center">
          <select
            v-model="telefono.sistema"
            class="form-select"
            style="width: 160px"
            aria-label="Default select example"
          >
            <option disabled value="">Seleccione un sistema operativo</option>
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
          <input v-model="telefono.rom" type="number" style="width: 90px" />
        </div>
      </div>

      <div class="row my-3">
        <div class="col-3">
          <label for=""><b>RAM:</b></label>
        </div>
        <div class="col">
          <input v-model="telefono.ram" type="number" style="width: 90px" />
        </div>
      </div>
    </div>
    <button class="btn btn-primay btn-lg" @click="enviarData()">Mandar</button>
  </div>
</template>

<script>
import {bus} from '@/main'

export default {
    name: 'formCellphone',
    data(){
        return{
            telefono: {
                estado:"",
                marca:"",
                modelo:"",
                pantalla:0,
                sistema:"",
                rom:0,
                ram:0
            }
        };
    },
    methods:{
      validarObjeto(){
        if(!this.telefono.estado || !this.telefono.marca || !this.telefono.modelo || this.telefono.pantalla <= 0 || !this.telefono.sistema || this.telefono.rom <= 0 || this.telefono.ram <= 0){
          return false
        }else{
          return true
        }
      },

      enviarData(){
        if(this.validarObjeto()){
          bus.$emit('enviarTelefono', this.telefono)
        }else{
          alert("No ha llenado toda la informacion o esta es incorrecta")
        }
      }
    }
};
</script>

<style lang="">
</style>