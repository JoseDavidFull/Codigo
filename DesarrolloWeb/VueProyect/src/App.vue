<script setup></script>

<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/carrito">Carrito</router-link>
    <router-link to="/catalogo">Catalogo</router-link>
    <router-link to="/detalle">Detalle</router-link>
    <router-link to="/producto">Producto</router-link>
  </div>
  <RouterView></RouterView>
</template>

<style scope></style>
