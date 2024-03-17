<script setup>
const Spiderman = [
    { name: "Spider-Man", year: 2002, url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Spider-Man_%282002_film%29_poster.jpg/220px-Spider-Man_%282002_film%29_poster.jpg" },
    { name: "Spider-Man 2", year: 2004, url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6aIhJTEvLwko56DrGGekqRSG00gOv1Ijg37IpE75b78OKZXxieZLhM1YYvHz2S-tQCus_dVYqTlO0n5hsZTwvn3RVqzWlm-fud0BY5BFf3I77wzY_4RdXjJTtgP-eyXF5K_etKuHxNEQS/s1600/Spider-Man+2+Poster.jpg   " },
    { name: "Spider-Man 3", year: 2007, url: "https://es.web.img3.acsta.net/medias/nmedia/18/89/00/79/20158261.jpg" },
    { name: "The Amazing Spider-Man", year: 2012, url: "https://es.web.img2.acsta.net/medias/nmedia/18/81/09/45/20071437.jpg" },
    { name: "The Amazing Spider-Man 2: El poder de Electro", year: 2014, url: "https://es.web.img3.acsta.net/medias/nmedia/18/89/59/61/20075013.jpg" },
    { name: "Spider-Man: Homecoming", year: 2017, url: "https://es.web.img3.acsta.net/pictures/17/06/14/12/09/289773.jpg" },
    { name: "Spider-Man: Lejos de casa", year: 2019, url: "https://es.web.img2.acsta.net/medias/nmedia/18/89/07/60/20075118.jpg" },
    { name: "Spider-Man: Sin camino a casa", year: 2021, url: "https://es.web.img3.acsta.net/medias/nmedia/18/89/36/07/20109871.jpg" }
];
</script>

<template>
    <div class="principal">
        <ul>
        <li v-for="index in Spiderman" :key="index.name">
            {{ index.name }} : {{ index.year }} : <img :src="index.url" style="width: 80px; height: 80px; border-radius: 30px;">
        </li>
    </ul>
    </div>
</template>

<style scoped>

.principal{
    display: flex;
    justify-content: center;
}

</style>
