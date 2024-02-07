<script setup>
/* Votación Simple:
Crea un componente de votación con dos botones: "Sí" y "No". 
Al hacer clic en uno de ellos, muestra un mensaje indicando 
la opción seleccionada. */

import { ref } from "vue";

const ValueYes = ref(true)
const ValueNo = ref(true)

const Votacion = (opcion) =>{
    if(opcion === 'si'){
        ValueYes.value++
    }else{
        ValueNo.value++
    }
}

</script>

<template>
    <p>Quieres Votar Por Milei?</p>
    <br>
    <div>
        <button @click="Votacion('si')">Si</button>
        <Button @click="Votacion('no')">No</Button>
        <h1 v-if="ValueYes > 1">Gracias Por Votar Por Milei 🦁</h1>
        <h1 v-else-if="ValueNo > 1">Caeras en desgracia</h1>
    </div>
</template>
 
<style scoped></style>
  