<script setup>
import Hijo from './components/Hijo.vue';

/*Card de Usuario:
Crea un componente CardUsuario que acepte un objeto de usuario como prop
y muestre información relevante sobre el usuario. */
const Usuario = [
  { name: "David", age: 25, ci: 8519137 },
  { name: "Laura", age: 30, ci: 7632458 },
  { name: "Carlos", age: 22, ci: 6548712 },
  { name: "Ana", age: 28, ci: 9356241 },
  { name: "Javier", age: 35, ci: 8123456 }
];


</script>


<template>
  <Hijo v-bind:Usuario="Usuario"></Hijo>
</template>