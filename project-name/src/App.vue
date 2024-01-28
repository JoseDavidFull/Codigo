<script setup>
/*Evento Propio con Props:
Diseña un componente con un botón. Cuando se hace clic en el botón, el 
componente debe emitir un evento al componente padre y pasar una propiedad junto con el evento. */

import { ref } from 'vue';
import Hijo from './components/Hijo.vue';



const contador = ref(0)

const incremento = () =>{
  contador.value++
}


</script>

<template>
  <button @click="incremento">Incremento</button>
  <Hijo v-bind:contador="contador">
  </Hijo>
</template>
