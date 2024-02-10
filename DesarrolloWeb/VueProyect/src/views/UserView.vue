<script setup>
import { ref } from 'vue';

const usuarios = ref([
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Carlos', edad: 28 },
  { id: 4, nombre: 'Ana', edad: 22 },
  { id: 5, nombre: 'Luis', edad: 35 }
]);
</script>

<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} - Edad: {{ usuario.edad }}
      </li>
    </ul>
  </div>
</template>


