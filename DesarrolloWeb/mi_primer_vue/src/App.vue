<script setup>
import { ref } from 'vue';

/*Cambio Dinámico de Tamaño de Texto:
Crea un componente con un botón. Utiliza v-bind:style para cambiar dinámicamente el 
tamaño del texto cada vez que se hace clic en el botón./*/

const Grande = ref(0)

const CambiarTexto = ()=>{
    Grande.value = !Grande.value
}


</script>


<template>
    <button @mouseover="CambiarTexto" @mouseout="CambiarTexto" v-bind:style="{'font-size': Grande ? '120px' : '40px'  }">
        Hola Elisabeth
    </button>

</template>


<style scoped> 

.Grande{
    font-size: 40px;
}
</style>
