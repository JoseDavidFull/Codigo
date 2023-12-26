<script setup>
/*
v-model: Formulario Bidireccional
Implementa un formulario con campos para nombre y correo electrónico. 
Utiliza v-model para lograr un enlace bidireccional de datos.
*/
const Objetos = [
  { Nombre: "David", Edad: 25 },
  { Nombre: "Ana", Edad: 30 },
  { Nombre: "Carlos", Edad: 22 },
  { Nombre: "Elena", Edad: 28 },
  { Nombre: "Pedro", Edad: 35 },
  { Nombre: "Luisa", Edad: 19 },
  { Nombre: "Sara", Edad: 27 },
  { Nombre: "Juan", Edad: 32 },
  { Nombre: "María", Edad: 26 },
  { Nombre: "Javier", Edad: 29 },
];



</script>


<template>
    <div>
        <li v-for="index in Objetos"  :key="index.Edad" >
            {{ index.Nombre }} - {{ index.Edad }}
        </li>
    </div>

</template>

<style>



</style>