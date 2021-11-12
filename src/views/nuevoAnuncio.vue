<template>

    <!-- NUEVO ANUNCIO DESKTOP -->

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <div class="row">
                    <form-cellphone/>
                </div>
                <div class="row">
                    
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <form-anuncio/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formCellphone from '@/components/nuevoAnuncio/formCellphone'
import formAnuncio from '@/components/nuevoAnuncio/formAnuncio'


export default {
    name: 'nuevoAnuncio',
    components: {
        formCellphone,
        formAnuncio
    }
}
</script>
<style lang="scope">
    
</style>