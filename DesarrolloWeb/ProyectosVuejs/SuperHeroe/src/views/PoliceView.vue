<script setup>
import { ref } from "vue";
/*Pagina de Gorgory */

const Yes = ref(true)
const No = ref(false)

function Elegir(opcion) {
    if (opcion == 'SI') {
        Yes.value++
    }else{
        No.value++
    }
}
const messageYes = "No se que dice pero bueno"
const messageNo = "A Seleccionado no lo que significa que lo a cometido espere que ya llega la policia"

</script>

<template>
    <p class="Title">Si a cometido un delito y quiere confesarlo haga click en si de lo contrario en no.. </p>
    <br>
    <button @click="Elegir('SI')">Si</button>
    <button @click="Elegir('No')">No</button>
    <h1 v-if="Yes > 1">{{ messageYes }}</h1>
    <h1 v-else-if="No > 1">{{ messageNo }}</h1>
</template>



<style scoped>

.Title{
    font-size: 30px;
    color: red;

}
</style>