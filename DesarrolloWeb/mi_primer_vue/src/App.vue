<script>

const frutas = [
    { id: 1, nombre: 'Manzana', valor: 2.5 },
    { id: 2, nombre: 'Plátano', valor: 1.8 },
    { id: 3, nombre: 'Fresa', valor: 4.0 },
    { id: 4, nombre: 'Naranja', valor: 2.3 }
];


</script>

<template>
  <div>
    <ul>
      <li v-for="ver in frutas">{{ ver }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
