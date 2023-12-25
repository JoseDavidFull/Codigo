<script setup>
<<<<<<< HEAD
/*Crea una lista de objetos en Vue.js.
Implementa botones de "Agregar" y "Eliminar" para agregar
 y quitar elementos de la lista dinámicamente. */
import { ref } from 'vue';

/*splice,1 */

const lista = ref([])


const agregar  =() =>{
    lista.value.push({(lista.)})
}
=======
import { ref } from 'vue';

/*Crea un componente con un botón.
Al hacer clic en el botón, cambia el color de fondo del componente dinámicamente. */
>>>>>>> 077714f597e76d55d9642670aa1c441cc9ebddae


const ver = ref(false)

const cambiar = () =>{
    ver.value = !ver.value;
}
const Blue = { 'background-color': 'blue'}
const Red = {'background-color': 'red'}
</script>

<<<<<<< HEAD

=======
>>>>>>> 077714f597e76d55d9642670aa1c441cc9ebddae
<template>
    <button @click="cambiar" v-bind:style="ver ? Blue : Red">
        <h1>
            {{ ver ? "Cambia a Rojo" : "Cambia a Azul"}}    
        </h1>
    </button>
    
</template>


<<<<<<< HEAD
<style>
=======
<style scoped>
h1{
    border-radius: 50px;
}
>>>>>>> 077714f597e76d55d9642670aa1c441cc9ebddae

</style>