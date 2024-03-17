<script setup>


</script>

<template>
  <div>
        <ul>
            <li>
                <router-link :to="{name : 'alumnosa'}">CursosA</router-link>
            </li>
            <li>
                <router-link :to="{name : 'alumnosb'}">CursosB</router-link>
            </li>
        </ul>
        
    </div>
    <router-view></router-view>
</template>



<style scoped></style>
