<script setup>
import { ref } from "vue";

const jsSelected = ref(false);
const tsSelected = ref(false);

const Elegir = (opcion) => {
    if (opcion === 'js') {
        jsSelected.value = true;
    } else if (opcion === 'ts') {
        tsSelected.value = true;
    }
}
</script>

<template>
    <h1>A quien Elegiras ? </h1>
    <br>
    <button @click="Elegir('js')">Javascript</button>
    <button @click="Elegir('ts')">Typescript</button>
    <h1 v-if="jsSelected">Ohh chido, sabes de lo que haces</h1>
    <h1 v-else-if="tsSelected">Sabes de la tecnología</h1>
</template>

<style scoped>


</style>
