<script setup>
/*Ajuste de Tamaño Dinámico:
Crea un componente con un elemento de texto.
Utiliza estilos en tiempo real para ajustar dinámicamente el tamaño de 
fuente del texto en función de la longitud del contenido. */

const palabra = "HolaElisabeth"

</script>

<template>
    <div>
        <p v-bind:style="{'font-size' : '80px'}">{{ palabra }}</p>
    </div>
</template>

<style scoped>


</style>
