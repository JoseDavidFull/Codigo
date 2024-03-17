<script setup>
import { ref } from "vue";

const Aleatorio = Math.floor(Math.random() * 3);

const piedra = ref(0);
const papel = ref(1);
const tijera = ref(2);

function Elegir(opcion) {
    if (Aleatorio === 0) {
        piedra.value = opcion;
    } else if (Aleatorio === 1) {
        papel.value = opcion;
    } else {
        tijera.value = opcion;
    }
}
</script>

<template>
    <p class="centrar">Elige una opcion</p>
    <br>
    <br>
    <div class="nav">
        <button @click="Elegir(0)">Piedra</button>
        <button @click="Elegir(1)">Papel</button>
        <button @click="Elegir(2)">Tijera</button>
        <h1 v-if="Aleatorio === piedra">Ganaste, PC eligió Piedra </h1>
        <h1 v-else-if="Aleatorio === papel">Ganaste, PC eligió Papel </h1>
        <h1 v-else-if="Aleatorio === tijera">Ganaste, PC eligió Tijera </h1>
    </div>
</template>


<style scoped>

.nav{
    display: flex;
    flex-direction: row;
    gap: 10px 30px;    
}

.centrar{
    display: flex;
    justify-content: center;
    color: white;
}


</style>