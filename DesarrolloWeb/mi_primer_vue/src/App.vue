<script setup>
/*Estilos Condicionalmente Basados en el Contenido:
Crea una lista de elementos que contengan texto.
Utiliza v-bind:class para aplicar una clase "largo" a los elementos cuyo texto tenga más de 
10 caracteres y una clase "corto" a los que tengan 10 o menos caracteres. */


const texto = ["Hola Como estas Elisabeth","Sere El mejor","Conseguir trabajo antes de salir profesional","ser senior","Hacer la  libreria"]



</script>

<template>
    <li v-for="text in texto" v-bind:class="{Largo : text.length > 10, Corto : text.length <= 10}">
        {{ text }}
    </li>

</template>


<style scoped>

.Largo{
    color: red;
}

.Corto{
    color: blue;
}

</style>