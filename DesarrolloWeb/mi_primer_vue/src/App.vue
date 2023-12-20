<script setup>
import { ref } from 'vue';

const frutas = ref([
  { fruta: "manzana" },
  { fruta: "pera" },
  { fruta: "durazno" },
  { fruta: "mango" },
  { fruta: "uva" }
]);

const verfrutas = ref(false);

const visibilidad = () => {
  verfrutas.value = !verfrutas.value;
}



</script>



<template>
  <div>
    <button @mouseout="visibilidad" >{{ frutas? '🙉' : '🙈' }}</button>
    <ul v-if="verfrutas ">
      <li v-for="ver in frutas" :key="ver.fruta">
        {{ ver.fruta }}
      </li>
    </ul>
  </div>
</template>