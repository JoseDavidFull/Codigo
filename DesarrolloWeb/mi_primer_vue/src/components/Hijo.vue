<script setup>
/*Lista de Tareas:
Crea una aplicación de lista de tareas. Permite agregar, marcar como completadas y eliminar tareas. */

const Tareas = [
    { name: "Tener Cita Con Bertha", pendiente: 1 },
    { name: "Tener Sexo Con Bertha", pendiente: 0 },
    { name: "Dejarla Embarazada", pendiente: 1 },
    { name: "Comprar Ingredientes para la Cena", pendiente: 1 },
    { name: "Leer un Libro", pendiente: 0 },
];



</script>

<template>
    <ul>
        <li v-for="index in Tareas" :key="index.name">
            {{ index.name }}
        </li>
    </ul>
    
</template>


<style scoped>

</style>