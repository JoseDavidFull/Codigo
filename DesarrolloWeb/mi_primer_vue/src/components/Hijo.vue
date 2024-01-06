<script setup>
defineProps(['carrito','suma']);

</script>

<template>
  <!-- Inicio del Carrito -->
  <ul>
    <n style="color: white; font-size: 50px;">Añadido A Carrito</n>
    <li v-for="producto in carrito" :key="producto.name">
      {{ producto.name }} - {{ producto.price }}
    </li>
  </ul>

  <!-- Muestra el suma -->
  <p>Total: {{ suma }}</p>
  <!-- Fin del Carrito -->
</template>
