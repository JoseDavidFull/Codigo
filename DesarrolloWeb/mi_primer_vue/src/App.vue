<script setup>
/* hacer una pagina de productos e imagenes con name, price and url with añadir a carrito y añada
componente hijo(props) el precio el total si se puede */
import { ref } from 'vue';
import Hijo from './components/Hijo.vue';

const Productos = [
    { name: "Lapiz", price: 5, url: "https://dismartgt.com/cdn/shop/files/lapizjumbomaped_Mesadetrabajo1_400x.png?v=1690300926" },
    { name: "Borrador", price: 10, url: "https://dismartgt.com/cdn/shop/files/borradorminitechnic_Mesadetrabajo1_400x.png?v=1690495408" },
    { name: "Tijera", price: 15, url: "https://dismartgt.com/cdn/shop/products/tijera6.5sinpuntaweb_Mesadetrabajo1_400x.png?v=1640619753" },
    { name: "Boligrafo", price: 20, url: "https://dismartgt.com/cdn/shop/products/roundsticrojo_Mesadetrabajo1_400x.png?v=1641313175" },
    { name: "Resaltador", price: 25, url: "https://dismartgt.com/cdn/shop/products/foskaceleste_Mesadetrabajo1_400x.png?v=1642431321" }
]

const carrito = ref([])

const Carrito = (index) => {
    carrito.value.push(index)
    suma.value+=index.price
}
const suma = ref(0)


</script>

<template>
    <ul v-for="index in Productos" :key="index.name">
        <br>
        <br>
        <li>
            {{ index.name }} : {{ index.price }} Bs <img :src="index.url" style="border-radius: 40px;">
            <button @click="Carrito(index)" style="margin: 0px 0px 0px 150px ;">AñadirCarrito</button>
            <br><br><br><br><br>
        </li>
    </ul>
    

    <Hijo :carrito="carrito" :suma="suma">
    </Hijo>
    
</template>


<style scoped></style>