<script setup lang="js">
import { ref } from "vue";

const Producto = [
  { name: "bolígrafo", price: 15.5 },
  { name: "cuaderno", price: 5.0 },
  { name: "goma de borrar", price: 2.3 },
  { name: "regla", price: 8.75 },
  { name: "lápices de colores", price: 12.0 },
  { name: "marcadores", price: 9.99 },
  { name: "libreta", price: 7.25 },
  { name: "tijeras", price: 4.5 },
  { name: "calculadora", price: 20.0 },
  { name: "mochila", price: 30.0 }
];

const seguimiento = ref([]);
const suma = ref(0);

const añadir = (index) => {
  seguimiento.value.push(index);
  total(); // Llamada a la función total para actualizar el total
};

const total = () => {
  suma.value = seguimiento.value.reduce((acc, item) => acc + item.price, 0);
};
</script>

<template>
  <div>
    <ul v-for="index in Producto" :key="index.name">
      <button @click="añadir(index)">Añadir-Carrito</button>
      <li>{{ index.name }} - {{ index.price }}</li>
    </ul>
    <ul v-for="index in seguimiento" :key="index.name">
      <li>{{ index.name }} - {{ index.price }}</li>
    </ul>
    <h1>Añadir-Carrito:  {{ suma }}</h1>
  </div>
</template>
