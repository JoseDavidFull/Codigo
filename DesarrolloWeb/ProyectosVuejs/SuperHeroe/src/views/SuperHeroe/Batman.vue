<script setup>

const Batman = [
    { name: "Batman", year: 1989, url: "https://pics.filmaffinity.com/Batman-647425984-large.jpg" },
    { name: "Batman vuelve", year: 1992, url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/batman-vuelve.jpg?tf=256x" },
    { name: "Batman Forever", year: 1995, url: "" },
    { name: "Batman & Robin", year: 1997, url: "" },
    { name: "Batman Begins", year: 2005, url: "" },
    { name: "El caballero oscuro", year: 2008, url: "" },
    { name: "El caballero oscuro: La leyenda renace", year: 2012, url: "" },
    { name: "Batman: La película", year: 1966, url: "" },
    { name: "Batman v Superman: Amanecer de la justicia", year: 2016, url: "" },
    { name: "Escuadrón suicida", year: 2016, url: "" },
    { name: "La Liga de la Justicia de Zack Snyder", year: 2021, url: "" },
    { name: "The Batman", year: 2022, url: "" }
];

</script>



<template>
    <ul>
        <li v-for="index in Batman" :key="index.name">
            {{ index.name }} : {{ index.year }} : <img :src="index.url" style="width: 80px; height: 80px ; border-radius: 30px">
        </li>
    </ul>
</template>


<style scoped>

</style>