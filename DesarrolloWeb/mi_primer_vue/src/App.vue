<script setup>
import { ref, watch } from 'vue';

/*Contador con Mensaje:
Crea un contador y un mensaje. Utiliza watch para mostrar un 
mensaje cuando el contador alcance cierto valor. */

const contador = ref(0)

watch(contador,(valorN,valorA)=>{
    console.log("Valor nuevo",valorN,"Valor antiguo",valorA);
})
</script>

<template>
    <button @click="contador+=1">Incremento</button>
    {{ contador }}
</template>

<style scoped></style>