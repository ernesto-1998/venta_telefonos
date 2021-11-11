<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row mt-2">

        <conditional-menu/>
        <div class="col">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import conditionalMenu from '@/components/home/conditionalMenu'
import ConditionalMenu from '../components/home/conditionalMenu.vue'


export default {
  name: 'Home',
  components: {
    conditionalMenu
  }
}
</script>

    ConditionalMenu