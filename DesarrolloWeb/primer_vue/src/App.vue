<script setup lang="js">
import Hijo from './components/Hijo.vue';

/*Crea un componente que acepte una prop llamada
persona que es un objeto con propiedades como nombre, 
edad, y ocupacion. Muestra estas propiedades en el template. */

const persona = [
    {name : "david", age : 25},
    {name : "david", age : 12},
    {name : "david", age : 51},
    {name : "david", age : 16}
]

</script>

<template>
    <Hijo v-bind:persona="persona">

    </hijo>
</template>

<style scoped>


</style>
