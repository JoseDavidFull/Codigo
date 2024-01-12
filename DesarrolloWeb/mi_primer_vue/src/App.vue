<script setup>
import { ref } from 'vue';

const tareas = [
    { name: "Estudiar Vue.js", pendientes: true },
    { name: "Hacer ejercicio", pendientes: false },
    { name: "Leer un libro", pendientes: true },
    { name: "Preparar la cena", pendientes: false },
    { name: "Practicar programación", pendientes: true },
    { name: "Llamar a un amigo", pendientes: false },
    { name: "Hacer compras", pendientes: true },
    { name: "Ver una película", pendientes: false },
    { name: "Organizar el escritorio", pendientes: true },
    { name: "Aprender algo nuevo", pendientes: true }
];

const CambioPendiente = (index) => {
    tareas[index].pendientes = !tareas[index].pendientes;
}
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Pendiente</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tarea, index) in tareas" :key="index">
                    <td>{{ tarea.name }}</td>
                    <td>{{ tarea.pendientes ? 'Sí' : 'No' }}</td>
                    <td>
                        <button @click="() => CambioPendiente(index)">Cambiar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
}
</style>
