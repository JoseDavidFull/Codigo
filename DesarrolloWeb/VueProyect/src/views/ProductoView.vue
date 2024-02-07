<script setup>
import DetalleView from './DetalleView.vue';


/*Tienda en Línea:
Crea una ruta para una página de tienda que 
muestra una lista de productos.
Al hacer clic en un producto, redirige a una 
página de detalles del producto.
Utiliza props para pasar la información del 
producto a la página de detalles y muéstrala. */


const Tienda = [
    {
        name: "Pilfrut",
        price: 1,
        cantidad: 51,
        url: "https://images.unsplash.com/photo-1705917662505-f33a37211d74?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "La Pilfrut es una fruta tropical exquisita, conocida por su sabor dulce y refrescante.",
        categoria: "Frutas"
    },
    {
        name: "Manzana",
        price: 0.5,
        cantidad: 30,
        url: "https://images.unsplash.com/photo-1706211307566-8be99af84386?q=80&w=1281&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "La Manzana es una fruta clásica, conocida por su sabor agridulce y textura crujiente.",
        categoria: "Frutas"
    },
    {
        name: "Naranja",
        price: 0.8,
        cantidad: 42,
        url: "https://images.unsplash.com/photo-1705905343988-fb65612ee5b0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "La Naranja es una fruta cítrica jugosa y llena de vitamina C.",
        categoria: "Frutas"
    },
    {
        name: "Plátano",
        price: 0.6,
        cantidad: 35,
        url: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "El Plátano es una fruta versátil y rica en potasio.",
        categoria: "Frutas"
    },
    {
        name: "Uva",
        price: 2,
        cantidad: 20,
        url: "https://plus.unsplash.com/premium_photo-1672329275106-073b5493c00f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "Las Uvas son pequeñas joyas de sabor, ideales para picar.",
        categoria: "Frutas"
    },
    {
        name: "Sandía",
        price: 3,
        cantidad: 15,
        url: "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "La Sandía es una fruta jugosa y refrescante, perfecta para el verano.",
        categoria: "Frutas"
    },
    {
        name: "Kiwi",
        price: 1.5,
        cantidad: 28,
        url: "https://images.unsplash.com/photo-1706390120538-849ba265d3c7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "El Kiwi es una fruta pequeña pero poderosa, llena de vitamina C.",
        categoria: "Frutas"
    },
    {
        name: "Pera",
        price: 0.7,
        cantidad: 40,
        url: "https://images.unsplash.com/photo-1705875999426-b2899c13a70c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "La Pera es una fruta dulce y jugosa, ideal para meriendas saludables.",
        categoria: "Frutas"
    },
    {
        name: "Mango",
        price: 2.5,
        cantidad: 18,
        url: "https://images.unsplash.com/photo-1706497957493-700acb56bfa7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "El Mango es una fruta tropical deliciosa, rica en sabores exóticos.",
        categoria: "Frutas"
    },
    {
        name: "Fresa",
        price: 1.2,
        cantidad: 25,
        url: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        information: "Las Fresas son frutas pequeñas y deliciosas, perfectas para postres y ensaladas.",
        categoria: "Frutas"
    }
];


</script>




<template>

        <ul>
            <li v-for="index in Tienda" :key="index.name">
                {{ index.name }} : {{ index.price }}
                <a :href="'/detalle/' + index.name">
                    <img :src="index.url" alt="Imagen" style="width: 400px; height: 400px;">
                </a> 
            </li>
        </ul>

    <DetalleView v-bind:information="information"></DetalleView>
</template>


<style scope></style>