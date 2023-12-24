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


/*<script setup>
Crea un array de objetos, donde cada objeto represente un estudiante con propiedades como nombre, edad y nota.
Utiliza v-for para mostrar la información de cada estudiante en una lista.
Implementa un botón que, al hacer clic.

import { ref } from 'vue';


const estudiantes = ref([
  { nombre: "Ana", edad: 18, nota: 8 },
  { nombre: "Carlos", edad: 20, nota: 7 },
  { nombre: "Elena", edad: 19, nota: 9 },
  { nombre: "Francisco", edad: 22, nota: 6 },
  { nombre: "Gabriela", edad: 21, nota: 8 },
  { nombre: "Hector", edad: 19, nota: 7 }
]);

const ver = ref(false)

const MostrarInformacion = () => {
  ver.value = !ver.value;
}

</script>


<template>
  <div>
    <button @click="MostrarInformacion">{{ ver ? "Ocultar" : "Mostrar" }}</button>
    <ul v-if="ver">
      <li v-for="estudiante in estudiantes" :key="estudiante.nombre">
        {{ estudiante.nombre }} - Edad: {{ estudiante.edad }} - Nota: {{ estudiante.nota }}
      </li>
    </ul>
  </div>
  <br>
</template>
 */






/*<script setup>
Mouseover y Mouseout:

Crea un elemento (puede ser un cuadro div) que cambie de color
 cuando el mouse entra (mouseover) y vuelva a su color 
 original cuando el mouse sale (mouseout).
Utiliza @mouseover y @mouseout para manejar estos eventos. 
import {ref} from "vue";

const ver = ref(false)

const IntercambioColor = () =>{
  ver.value = !ver.value
}

const verde = { 'background-color': 'green' }
</script>


<template>
  <div class="cuadrado" >
    <h1 @mouseover="IntercambioColor" @mouseout="IntercambioColor" v-bind:style="ver ? verde : {}">
      {{ ver ? "Verde ": "Normal" }}
    </h1>
    
  </div>
</template>
*/




/*<script setup>
@click: Cambio de Imagen

Tienes dos imágenes. Al hacer clic en una, debería aparecer la otra. 
Implementa este cambio de imagen usando @click.
import { ref } from 'vue';
const visibilisar = ref(false)
const CambiarImage = () =>{
  visibilisar.value = !visibilisar.value
}
</script>
<template>
  <img v-if="visibilisar" src="./assets/imagen/PoleraArg.png" alt="Blanco" style="width: 350px; height: 500px;" @click="CambiarImage">
  <img v-else src="./assets/imagen/PoleraArg1.png" alt="Azul" @click="CambiarImage">
</template>
*/



/*
<script setup>
Tienes dos imágenes. Cuando el mouse entra en una imagen, 
debería cambiar a la otra. Al salir, debería volver a la imagen original. 
import { ref } from 'vue';
const verificar = ref(false)
const CambioImagen = () =>{
  verificar.value = !verificar.value
}
</script>
<template>
  <img v-if="verificar" @mouseover="CambioImagen"  src="./assets/imagen/PoleraArg.png" alt="Oficial" style="width: 350px; height: 500px;">
  <img v-else @mouseout="CambioImagen"  src="./assets/imagen/PoleraArg1.png" alt="Visitante" >
</template>
<style scoped>

</style>
*/




/*<script setup>
import { ref } from 'vue';

const Days = ref([
  { day: 'Lunes', price: 10.99 },
  { day: 'Martes', price: 12.99 },
  { day: 'Miercoles', price: 11.49 },
  { day: 'Jueves', price: 9.99 },
  { day: 'Viernes', price: 14.99 },
  { day: 'Sabado', price: 16.99 },
  { day: 'Domingo', price: 13.99 },
]);

const priceMoney = 11.49

const ver = ref(false)

const verificar = () => {
  ver.value = !ver.value
}

</script>


<template>
  <div>
    <button @click="verificar">
      <h1 >
      {{ ver ? "🙈" : "🙉" }}
    </h1>
    </button>
    <br>
    <ul v-if="ver" v-show="verificar" >
      <li v-for="index in Days" :key="index.day" v-bind:class="{Rojo: index.price === priceMoney, Amarillo : index.price < priceMoney, Verde : index.price > priceMoney}">
        {{ index.day }} - {{ index.price }}
      </li>
    </ul>
  </div>
</template>



<style>
.Rojo {
  color: red;
}

.Amarillo {
  color: yellow;
}

.Verde {
  color: green;
}
</style>*/





/* 
<script setup>
v-bind:class:
Crea un componente de tarjeta de usuario que tenga propiedades 
como nombre, edad y estado (activo o inactivo).
Utiliza v-bind:class para aplicar un estilo diferente a la tarjeta 
dependiendo del estado (por ejemplo, un fondo verde para activo y rojo para inactivo).

const Usuario = [
    {Nombre: "David", Edad : 10, Estado : 1},
    {Nombre: "Jose", Edad : 15, Estado : 0},
    {Nombre: "Elisa", Edad : 20, Estado : 1},
    {Nombre: "Juan", Edad : 25, Estado : 1},
    {Nombre: "Carolo", Edad : 30, Estado : 0},
    {Nombre: "Jhon", Edad : 35, Estado : 0}
]
</script>

<template>
    <h1  v-for="index in Usuario" :key="index.Estado" v-bind:class="{Verde : index.Estado == 1, Rojo : index.Estado == 0}">
        {{ index.Nombre }} - {{ index.Edad }} - {{ index.Estado }}
    </h1>
  
</template>


<style>
.Verde{
    color: green;
}

.Rojo{
    color : red;
}
</style>
*/

/*
<script setup>
v-show:
Crea un botón que al hacer clic alternará la visibilidad de un elemento en 
la interfaz utilizando v-show. Por ejemplo, un mensaje oculto que se muestra 
al hacer clic y se oculta al hacer clic nuevamente. 
import { ref } from 'vue';
const mensaje = "Hola Como Estas"
const  verificar = ref(true)
const Mensaje = () =>{
    verificar.value = !verificar.value
}
</script>
<template>
    <button @click="Mensaje">{{ verificar ? "Ocultar" : "Mostrar" }}</button>
    <br>
    <h1  v-show="verificar">
        {{ mensaje }}
    </h1>

</template>

 */


/*<script setup>
Estilo Diferente para Números Pares e Impares:
Genera una lista de números del 1 al 10.
Utiliza v-bind:class para aplicar la clase "par" a los números pares y la clase "impar" 
a los números impares. Define estilos diferentes para las clases "par" e "impar".
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>
<template>
    <h1 v-for="index in numeros" v-bind:class="{Par: index %2==0, Impar : index %2==1}">
        {{ index }}
    </h1>
</template>
<style>

.Par{
    color: green ;
}

.Impar{
    color : red;
}
</style> */