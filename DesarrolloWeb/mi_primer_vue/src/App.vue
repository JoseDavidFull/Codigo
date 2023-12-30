<script setup>
import { ref } from 'vue';


/*Crea un componente llamado BotonContador. */

const contador = ref(0)

const incremento = () =>{
    contador.value++
    seguimiento.value.push(contador.value)
    
}

const seguimiento = ref([])

</script>


<template>
    <button @click="incremento"> incremento</button>
    <h1>{{ contador }}</h1>

    <br>
    <ul>
      <li v-for="valor in seguimiento" :key="valor">
        {{ valor }}
      </li>
    </ul>
</template>

<style>


</style>