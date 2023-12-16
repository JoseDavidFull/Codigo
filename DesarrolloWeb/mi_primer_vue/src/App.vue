<script setup lang="js" >
/*Iteración con v-for:

Crea un array de nombres en tu componente de Vue.
Utiliza v-for para mostrar cada nombre en una lista.

Expande el ejercicio anterior añadiendo un filtro para 
mostrar solo los nombres que contienen la letra 'a'.
*/

const Nombres = [
    {
        name : "David",
        edad : 52
    },
    {
        name : "Jose",
        edad : 36
    },
    {
        name : "Jose",
        edad : 15
    }
]



</script>

<template>
    <ul v-for="index in Nombres" :key="index.name">
        <li v-if="index">{{ index.name.includes("a")}}</li>
    </ul>

</template> 

<style scoped></style>
