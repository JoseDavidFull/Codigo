<script setup>
import { computed, ref } from 'vue';

const Productos = ref([
  { 
    name: "Lápiz", 
    price: 5, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  },
  { 
    name: "Cuaderno", 
    price: 10, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  },
  { 
    name: "Borrador", 
    price: 2, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  },
  { 
    name: "Regla", 
    price: 3.5, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  },
  { 
    name: "Estuche", 
    price: 8, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  }
]);

const Eliminar = computed((index) => {
  // Encuentra la posición del producto en el array
  const posicion = Productos.indexOf(index);

  // Si la posición es válida, elimina el producto
  if (posicion !== -1) {
    Productos.pop(posicion, 1);
  }
})
</script>

<template>
  <ul>
    <li v-for="(producto, index) in Productos" :key="index">
      {{ producto.name }} - {{ producto.price }} - <img :src="producto.url" style="width: 40px; height: 40px;">
      <button @click="Eliminar(producto)">Eliminar</button>
    </li>
  </ul>
</template>
