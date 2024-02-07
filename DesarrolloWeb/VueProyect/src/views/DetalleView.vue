<script setup>

defineProps(['information']);

</script>

<template>
    <ul>
        <li v-for="n in information" :key="n.information">
            {{ n.information }}
        </li>
    </ul>
</template>

<style scope>
</style>