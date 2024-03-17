<script setup>
const info = [
  {
    text: "Olivia + Laura is a blogging platform discussing all things fashion + lifestyle. We are here to give you the tools you need to look + feel your best.",
  }
]
</script>

<template>
  <ul>
    <li v-for="item in info" :key="item.text">
      {{ item.text }}
    </li>
  </ul>
  <img src="../assets/Imagen/imagen.jpg" alt="Descripción de la imagen">
</template>

