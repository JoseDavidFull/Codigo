<script setup>
defineProps(['total','valor'])
</script>

<template>
  <ul>
    <li v-for="producto in valor" :key="producto.name">
      {{ producto.name }} - {{ producto.price }}
    </li>
  </ul>
  <p>Total: {{ total }}</p>
</template>

<style scoped>
</style>

