<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row mt-2">


        <conditional-menu/>
        <div class="col">

          <!-- FILA DE CONDICIONALES -->

          <div class="row">

            <div class="col">
              <conditional-precios/>
            </div>
            <div class="col">

            </div>

          </div>

        <!-- FILA DE CARDS -->

          <div class="row">

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import conditionalMenu from '@/components/home/conditionalMenu'
import conditionalPrecios from '@/components/home/conditionalPrecios'


export default {
  name: 'Home',
  components: {
    conditionalMenu,
    conditionalPrecios

  }
}
</script>

  