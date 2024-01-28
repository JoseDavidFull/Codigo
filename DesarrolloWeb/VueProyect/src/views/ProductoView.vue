<script setup lang="js">
import { ref } from 'vue';
import CarritoView from "./CarritoView.vue"

const Productos = [
  {
    name: 'Lapiz',
    price: 5,
    url: 'https://dismartgt.com/cdn/shop/files/lapizjumbomaped_Mesadetrabajo1_400x.png?v=1690300926',
    cantidad: 12
  },
  {
    name: 'Borrador',
    price: 10,
    url: 'https://dismartgt.com/cdn/shop/files/borradorminitechnic_Mesadetrabajo1_400x.png?v=1690495408',
    cantidad: 0
  },
  {
    name: 'Tijera',
    price: 15,
    url: 'https://dismartgt.com/cdn/shop/products/tijera6.5sinpuntaweb_Mesadetrabajo1_400x.png?v=1640619753',
    cantidad: 15
  },
  {
    name: 'Boligrafo',
    price: 20,
    url: 'https://dismartgt.com/cdn/shop/products/roundsticrojo_Mesadetrabajo1_400x.png?v=1641313175',
    cantidad: 20
  },
  {
    name: 'Resaltador',
    price: 25,
    url: 'https://dismartgt.com/cdn/shop/products/foskaceleste_Mesadetrabajo1_400x.png?v=1642431321',
    cantidad: 30
  }
]

const valor = ref([])
const total = ref(0)

const Carrito = (index) => {
  valor.value.push(index)
  total.value += index.price;
}
</script>

<template>
  <ul v-for="index in Productos" :key="index.name">
    <br />
    <br />
    <li>
      {{ index.name }} : {{ index.price }} Bs <img :src="index.url" style="border-radius: 40px" />  {{ index.cantidad }}
      <button @click="Carrito(index)" style="margin: 0px 0px 0px 150px">AñadirCarrito</button>
      <br /><br /><br /><br /><br />
    </li>
    <ul>
      <li v-if="index.cantidad <= 0">
        <h1>Producto Agotado</h1>
      </li>
      <li v-else>
        <h1>Disponible</h1>
      </li>
    </ul>
  </ul>
  <RouterView>
    <CarritoView v-bind:total="total" :valor="valor"></CarritoView>
  </RouterView>
</template>

<style scope></style>
