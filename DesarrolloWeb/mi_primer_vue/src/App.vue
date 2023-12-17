<script>
export default {
  data() {
    return {
      array: ["Jose", "David", "Quispe", "Sucullani"]
    };
  },
  methods: {
    eliminar(index) {
      this.array.splice(index, 1);
    }
  }
};
    
</script>

<template>
  <ul>
    <li v-for="(item, index) in array" :key="index">
      {{ item }}
      <button @click="eliminar(index)">Eliminar</button>
    </li>
  </ul>
</template>

<style scoped>
  /* Tu estilo si es necesario */
</style>
