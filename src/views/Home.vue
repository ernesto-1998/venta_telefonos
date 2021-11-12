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


export default {
  name: 'Home',
  components: {
    conditionalMenu
  }
}
</script>

  