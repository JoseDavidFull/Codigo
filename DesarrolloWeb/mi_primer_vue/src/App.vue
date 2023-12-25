<script setup>
import { ref } from 'vue';

/*Crea un componente con un botón.
Al hacer clic en el botón, cambia el color de fondo del componente dinámicamente. */


const ver = ref(false)

const cambiar = () =>{
    ver.value = !ver.value;
}
const Blue = { 'background-color': 'blue'}
const Red = {'background-color': 'red'}
</script>

<template>
    <button @click="cambiar" v-bind:style="ver ? Blue : Red">
        <h1>
            {{ ver ? "Cambia a Rojo" : "Cambia a Azul"}}    
        </h1>
    </button>
    
</template>


<style scoped>
h1{
    border-radius: 50px;
}

</style>