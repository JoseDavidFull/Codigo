<script setup>
import { ref } from "vue"



const contador = ref(0)

const Increment = () =>{
    contador.value++
}

const Decremento = () =>{
    contador.value--
}

const Reset = () =>{
    contador.value = contador.value = 0
}

const array = ref([])

const Add = (valor) =>{
    array.value.push(valor)
}

</script>

<template>
    <h1 :class="{red : contador < 0, white : contador ==0, green : contador > 0}">Hola Vuejs Dinamico</h1>
    <br>
    <div>
        <button @click="Increment">Incremento</button>
        <button @click="Decremento">Decremento</button>
        <button @click="Reset">Reset</button>
        <button @click="Add(contador)">Add</button>
    </div>
    <h1 :class="{red : contador < 0, white : contador ==0, green : contador > 0}">{{ contador }}</h1>
    
    <ul>
        <li v-for="index in array" :key="index" :class="{red : contador < 0, white : contador ==0, green : contador > 0}">
            {{ index}}
        </li>
    </ul>
</template>


<style scoped>
.red{
    color: red;
}

.green{
    color: green;
}

.white{
    color: white;
}


</style>