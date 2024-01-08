<script setup lang="js">
import { ref } from 'vue';

const cursos = ref([]); // Donde se almacenarán los cursos
let titulo = ''; // Usa let en lugar de const
let tiempo = ''; // Usa let en lugar de const

const addCourse = () => {
  if (titulo && tiempo) {
    cursos.value.push({ titulo, tiempo: parseInt(tiempo) });
    titulo = ''; // Limpia después de agregar
    tiempo = ''; // Limpia después de agregar
  }
};
</script>

<template>
  <div>
    <label for="Titulo">Titulo Curso: </label>
    <input type="text" name="titulo" v-model="titulo">
    <br>
    <label for="Tiempo">Tiempo: </label>
    <input type="number" name="Tiempo" v-model="tiempo">
    <button @click="addCourse">Añadir Curso</button>
  </div>
  <div>
    <ul v-if="cursos.length">
      <li v-for="(curso, index) in cursos" :key="index">
        {{ curso.titulo }} : {{ curso.tiempo }}
      </li>
    </ul>
    <p v-else>No hay cursos registrados.</p>
  </div>
</template>
