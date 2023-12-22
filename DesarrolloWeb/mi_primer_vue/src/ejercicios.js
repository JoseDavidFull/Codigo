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