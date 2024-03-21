<script setup>

</script>

<template>
    <div class="princial">

        <router-link :to="{ name: 'allposts' }">All Posts</router-link>
        <router-link :to="{ name: 'fashion' }">Fashion</router-link>
        <router-link :to="{ name: 'lifestyle' }">Lifestyle</router-link>
        <router-link :to="{ name: 'food' }">Food</router-link>
        <router-link :to="{ name: 'holiday' }">Holiday</router-link>
        <router-link :to="{ name: 'summer' }">Summer</router-link>
        <router-link :to="{ name: 'travel' }">Travel</router-link>

    </div>
    <router-view></router-view>
</template>



<style scoped>
.principal {
    display: flex;
    justify-content: center;
    align-content: flex-start;
}
</style>
