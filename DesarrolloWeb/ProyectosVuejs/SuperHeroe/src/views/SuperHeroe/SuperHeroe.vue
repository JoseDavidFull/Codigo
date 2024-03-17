<script setup lang="js">


</script>

<template>
    <div class="principal">
        <router-link :to="{ name: 'batman' }">Batman</router-link>
        <router-link :to="{ name: 'spiderman' }">Spiderman</router-link>
    </div>
    <router-view></router-view>
</template>

<style scoped>



.principal{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}
</style>
