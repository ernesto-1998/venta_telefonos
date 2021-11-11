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
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">Nuevo</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
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
          <input type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Modelo:</b></label>
        </div>
        <div class="col">
          <input type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Pantalla:</b></label>
        </div>
        <div class="col">
          <input type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Sistema:</b></label>
        </div>
        <div class="col">
          <select
            class="form-select"
            style="width: 150px"
            aria-label="Default select example"
          >
            <option selected>Ios</option>
            <option value="1">Android</option>
            <option value="2">Windows</option>
            <option value="3">Harmony OS</option>
          </select>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <label for=""><b>Rom:</b></label>
        </div>
        <div class="col">
          <input type="text" style="width: 90px" />
        </div>
      </div>

      <div class="row my-3">
        <div class="col-3">
          <label for=""><b>RAM:</b></label>
        </div>
        <div class="col">
          <input type="text" style="width: 90px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'formCellphone',
    data(){
        return{
            telefono: {
                estado:"",
                marca:"",
                modelo:"",
                pantalla:"",
                sistema:"",
                rom:"",
                ram:""
            }
        };
    }
};
</script>

<style lang="">
</style>