<script setup lang="js">
defineProps({
    persona : Object
})

</script>



<template>
    <ul>
        <li v-for="index in persona" :key="index.age">
            {{ index.name }} : {{ index.age }}
        </li>
    </ul>
</template>


<style scoped></style>