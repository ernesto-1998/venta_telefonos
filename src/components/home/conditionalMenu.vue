<template>
  <div
    class="col-2 ms-4 d-none d-lg-block d-md-block color-fondo"
  >
    <div class="row mt-3">
      <div class="col">
        <div class="form-check form-switch">
          <input
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
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>Samsung</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Huawei</b>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Nokia</b>
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Iphone</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
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
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>Android</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Windows</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>Ios</b>
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
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <b>6.0</b>
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <b>5.5</b>
              </label>
            </div>

            <div class="form-check pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
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
export default {
  name: "conditionalMenu",
};
</script>

<style scoped>
  .color-fondo{
    background-color: #ffcc35; 
    height: 550px; 
    border: 10px ridge #ffcc35;
  }

  .color-fondo-interno{
    background-color: #ffcc55;
    border: 10px ridge #ffcc55;
  }
</style>