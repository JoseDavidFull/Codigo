/*<script setup>
/*@click y manipulación de datos: Crea un botón que al ser clicado incremente 
un contador en el modelo de datos de Vue. Muestra el valor del contador en la interfaz
import { ref } from 'vue';
const contador = ref(0)
const incremento = () => {
  contador.value++
}
</script>
<template>
  <button @click="incremento()">Incremento</button>
  <h1></h1>
  {{ contador }}
</template>
*/


/*<script setup>
Iteración con v-for: Crea una lista de objetos 
(por ejemplo, una lista de usuarios) y utiliza v-for 
para mostrar cada elemento en una lista en tu interfaz. 
const usuarios = [
  {Nombre: "David"},
  {Nombre : "Jose"},
  {Nombre : "Ippo"},
  {Nombre : "Mashiba"}
]
</script>
<template>
  <div v-for="user in usuarios" :key="Nombre">
    <ul>
      <li>
        {{ user.Nombre }}
      </li>  
    </ul>
  </div>
</template>*/


/*<script setup>
Manejo de clics con @click: Crea un botón que, al ser clicado, imprima un mensaje en la consola. 
const mensaje = "Hola Como Estas"
const MostrarMensaje = () =>{
  alert(mensaje)
}
</script>
<template>
  <button @click="MostrarMensaje">Mensaje</button>
</template>*/




/*<script setup>
Cambios de estilo con @mouseover y @mouseout: Crea un elemento 
en la interfaz y cambia su color de fondo utilizando @mouseover. 
Revierte el cambio utilizando @mouseout. 
import { ref } from 'vue';
const  rojo = {color : 'red'}
const verde = {color : 'green'}
const verificar = ref(false)
const metodo = () => {
  verificar.value = !verificar.value
}
</script>
<template>
  <span @mouseover="metodo" @mouseout="metodo" :style="verificar ? rojo : verde">
    CambiosColor
  </span>
</template>*/



/*<script setup>
Visibilidad con v-show: Implementa un botón que alterne la visibilidad 
de un elemento en la interfaz utilizando v-show. 
const mensaje = "Hola Como estas"
const ver = true // cambia, si es true se ve el mensaje y si es false no se ve
</script>
<template>
  <h1 v-show="ver">
    {{ mensaje }}
  </h1>
</template> */



