<script setup>
/*Tienes dos imágenes. Cuando el mouse entra en una imagen, 
debería cambiar a la otra. Al salir, debería volver a la imagen original. */
import { ref } from 'vue';


const verificar = ref(false)

const CambioImagen = () =>{
  verificar.value = !verificar.value
}

</script>

<template>
  <img v-if="verificar" @mouseover="CambioImagen"  src="./assets/imagen/PoleraArg.png" alt="Oficial" style="width: 350px; height: 500px;">
  <img v-else @mouseout="CambioImagen"  src="./assets/imagen/PoleraArg1.png" alt="Visitante" >
</template>

<style scoped>

</style>