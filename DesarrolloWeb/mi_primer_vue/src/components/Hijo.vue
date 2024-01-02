<script setup>
defineProps(["Usuario"])
</script>

<template>
    <ul>
        <li v-for="index in Usuario" :key="index.ci" >
            {{ index.name }} - {{ index.age }}
        </li>
    </ul>

</template>
  
  