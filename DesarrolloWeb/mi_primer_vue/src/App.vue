<script setup>
import { ref } from 'vue';

/*Lista de Tareas:
Crea una aplicación de lista de tareas. Permite agregar, marcar como completadas y eliminar tareas. */
const tarea = ref([]);
const Tareas = [
    { name: "Tener Cita Con Bertha", pendiente: 1 },
    { name: "Tener Sexo Con Bertha", pendiente: 0 },
    { name: "Dejarla Embarazada", pendiente: 1 },
    { name: "Comprar Ingredientes para la Cena", pendiente: 1 },
    { name: "Leer un Libro", pendiente: 0 },
];

const agregar = () => {
    const new_Tarea = prompt("Agregar nuevo")
    tarea.value.push({name:new_Tarea});
};

const Eliminar = ()=>{
    tarea.value.pop({tarea})
}

</script>

<template>
<<<<<<< HEAD
    <h5>Hello, World</h5>
=======
    <ul>
        <li v-for="index in Tareas" :key="index.name">
            {{ index.name }} <input type="checkbox" v-model="index.pendiente">
        </li>
    </ul>
    <br>

    <button @click="agregar()">Agregar Tarea</button>
    <br>
    <ul>
        <li v-for="n in tarea" :key="n.name">
            {{ n.name }} : <button @click="Eliminar()">Eliminar</button>
        </li>
    </ul>
>>>>>>> a4b20c9fd3ed7d0ddfa50e9aaf7ee5f61fe16383
</template>


<style scoped></style>