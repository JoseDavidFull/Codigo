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

/*<script setup>
import { computed, ref } from 'vue';
Calculadora de Edad:
Crea un componente con un campo de entrada para el año de nacimiento.
Utiliza una propiedad computada para calcular la edad actual y 
muéstrala en la interfaz. 
const anio = ref(0)
const calcularEdad = computed(()=>{
    const anioActual = 2023
    return anioActual - anio.value
})
</script>
<template>
    <input type="number" v-model="anio" >
    <p>{{ calcularEdad }}</p>
</template>
*/

/*<script setup>
Conversion de boliviano a dolar
import { computed, ref } from 'vue';
const valor= ref(0)
const dolar = 6.7
const valorDolar = computed(()=>{
    if(!valor){
        return 0
    }
    return valor.value * dolar
})
</script>
<template>
    <input type="number" v-model="valor">
    <span>{{ valorDolar }}</span>
</template>
<style scoped>
</style>*/

/*<script setup>
import { ref, watch } from 'vue';
Crea un componente Vue con una variable contador en el data.
Utiliza un watcher para imprimir en la consola un mensaje indicando
el nuevo valor cada vez que contador cambie. Incrementa el contador 
al hacer clic en un botón. 
const  contador = ref(0)
const Incremento = () =>{ // funcion flecha
    contador.value++
}
watch(contador,(newvalor, antiguovalor)=>{
    console.log(newvalor,antiguovalor);
})
</script>
<template>
    <button @click="Incremento">Incremento</button>
    <h1>{{ contador }}</h1>
</template>*/

/*<script setup>
import { ref, watch } from 'vue';
Validación de Formulario con Watch:
Crea un formulario simple con campos como nombre, correo electrónico y edad.
Utiliza un watcher para validar la edad. Si la edad es menor de 18 años,
muestra un mensaje de advertencia en la consola.
const edad = ref(0)
watch(edad,(edad)=>{
    if(edad <= 17){
        console.log("Eres menor de edad");
    }
    else{
        console.log("Eres mayor de edad");
    }
})
</script>
<template>
    <div>
        <h5>Nombre:</h5>
        <input type="text" name="nombre" id="1" >
        <br>
        <br>
        <h5>Email:</h5>
        <input type="gmail">
        <br>
        <br>
        <h5>Edad:</h5>
        <input type="number" name="edad" id="3" v-model="edad">
    </div>    
</template>
<style scoped>
input{
    border-radius: 20px;
}

h5{
    font-size: 15px;
    color: white;
}
</style>*/

/*<script setup>
import { ref } from 'vue';
Cambio de Color Dinámico:
Crea un componente que tenga un botón.Utiliza v - bind: class para cambiar dinámicamente el 
color del botón cada vez que se hace clic en él.
const Cambio = ref(false)
const Component = () => {
    return Cambio.value = !Cambio.value
}
</script>
<template>
    <button @click="Component" v-bind:class="{ Green: !Cambio, Orange: Cambio }">
        <h1>{{ Cambio }}</h1>
    </button>
</template>
<style scoped>
.Green {
    color: green;
}

.Orange {
    color: orange;
}
</style>*/

/*<script setup>
import { ref } from 'vue';
Estilo de Fondo con Gradiente Dinámico:
Utiliza v-bind:style para cambiar el fondo de un componente con un gradiente de 
color que varíe según una propiedad de datos. 
const cambio = ref(false)

const CambioFondo = () => {
    cambio.value = !cambio.value
}
</script>
<template>
    <button @click="CambioFondo" v-bind:style="{ backgroundColor: cambio ? 'yellow' : 'red' }">
        {{ cambio }}
    </button>
</template>
<style scoped>
.Red {
    background-color: red;
}

.Yellow {
    background-color: yellow;
}
</style>*/

/*<script setup>
import { ref } from 'vue';
Cambio Dinámico de Tamaño de Texto:
Crea un componente con un botón. Utiliza v-bind:style para cambiar dinámicamente el 
tamaño del texto cada vez que se hace clic en el botón.
const Grande = ref(0)
const CambiarTexto = () => {
    Grande.value = !Grande.value
}
</script>
<template>
    <button @mouseover="CambiarTexto" @mouseout="CambiarTexto" v-bind:style="{ 'font-size': Grande ? '120px' : '40px' }">
        Hola Elisabeth
    </button>
</template>
<style scoped> .Grande {
     font-size: 40px;
 }
</style>
*/

/*
<script setup>
import { ref } from 'vue';
import Hijo from './components/Hijo.vue';
Calculadora Simple:
Implementa un componente de calculadora que acepte props para dos números 
y un operador, realice la operación y muestre el resultado. 
const num1 = ref(0)
const num2 = ref(0)

const Sumando = () => {
    return num1.value + num2.value
}

</script>

<template>
    <div>
        <input type="number" name="num1" v-model="num1" placeholder="Ingresa Primer Numero">
        <br>
        <input type="number" name="num2" v-model="num2" placeholder="Ingresa Segundo Numero">
        <br>
        <Hijo v-bind:suma="Sumando()"></Hijo>
    </div>
</template>

<script setup>
const props = defineProps({
    suma : Object
})
</script>
<template>
    <h1>
        {{ suma }}
    </h1>
</template>
*/

/*
<script setup>
Propiedades Padre-Hijo:
Crea un componente padre que tenga una lista de productos y un componente hijo 
que muestre detalles de un producto seleccionado en el padre. Actualiza los 
detalles cuando se selecciona un nuevo producto. 
import Hijo from "./components/Hijo.vue"
const Productos = {
    nombre1 : "apple",
    nombre2 : "mango",
    nombre3 : "banana",
    nombre4 : "Pera"
}
</script>

<template>
    <Hijo v-bind:Productos="Productos"></Hijo>
</template>


<script setup>
defineProps(["Productos"]);
</script>
<template>
    <ul>
        <li>{{ Productos.nombre1 }} -
            {{ Productos.nombre2 }} -
            {{ Productos.nombre3 }}
        </li>
    </ul>
</template>
<style scoped></style>
*/

/*<script setup>
import { ref } from 'vue';

const contador = ref(0)
const incremento = () =>{
    contador.value++
}

const guardar = () =>{
  seguimiento.value.push(contador.value)
}

const eliminar = () =>{
  seguimiento.value.pop(contador.value)
}

const reiniciar = () =>{
  seguimiento.value = contador.value = 0
}

const seguimiento = ref([])
</script>
<template>
    <button @click="incremento"> incremento</button>
    <h1>{{ contador }}</h1>
    <button @click="guardar">Guardar</button>
    <br>
    <button @click="eliminar">Borrar</button>
    <br>
    <button @click="reiniciar">Reiniciar</button>
    <br>
    <ul >
      <li v-for="valor in seguimiento" :key="valor">
        {{ valor }}
      </li>
    </ul>
</template>
*/



/*<script setup>
lista de frutas y boton de añadir y añado aparece 
import { ref } from "vue"
const Frutas = [
  { nombre: "Manzana", color: "Rojo", precio: 1.5 },
  { nombre: "Banana", color: "Amarillo", precio: 0.8 },
  { nombre: "Uva", color: "Morado", precio: 2.3 }
];
const seguimiento = ref([])
const añadir = (fruta) => {
  seguimiento.value.push(fruta)
}
</script>
<template>
  <ul v-for="fruta in Frutas">
    <button @click="añadir(fruta)">Añadir</button>
    <li>{{ fruta.nombre }} - {{ fruta.color }} - {{ fruta.precio }}</li>
  </ul>
  <ul>
    <li v-for="fruta in seguimiento" :key="fruta.nombre">
      {{ fruta.nombre }} - {{ fruta.color }} - {{ fruta.precio }}
    </li>
  </ul>
</template>*/




/*<script setup lang="js">
v-for con Lista de Objetos:
Crea un componente que utilice la directiva v-for para iterar
sobre una lista de objetos y mostrar su contenido. 
import Hijo from './components/Hijo.vue';
const Productos = [
  { name: "Manzana", price: 5 },
  { name: "Papaya", price: 2 },
  { name: "Sandia", price: 9 }
]
</script>
<template>
  <div>
    <Hijo>
      <template v-slot:Products>
        <ul>
          <li v-for="index in Productos" :key="name">
            {{ index.name }} : {{ index.price }}
          </li>
        </ul>
      </template>
    </Hijo>
  </div>
</template>

<script setup lang="js">
</script>
<template>
    <slot name="Products"></slot>
</template>
*/




/*
<script setup>
una pagina que tenga productos name and price  and url and que tenga un boton 
de añadir a carrito y añada a componente carrito 
const Productos = [
  { 
    name: "Lápiz", 
    price: 5, 
    url: "https://libreriagisbert.com/wp-content/uploads/2022/02/25464000170-157x239.jpg" 
  },
  { 
    name: "Cuaderno", 
    price: 10, 
    url: "https://ejemplo.com/cuaderno" 
  },
  { 
    name: "Borrador", 
    price: 2, 
    url: "" 
  },
  { 
    name: "Regla", 
    price: 3.5, 
    url: "https://ejemplo.com/regla" 
  },
  { 
    name: "Estuche", 
    price: 8, 
    url: "https://ejemplo.com/estuche" 
  }
];
</script>
<template>
  <ul>
    <li v-for="index in Productos" :key="index.url">
      {{ index.name }} - {{ index.price }} - <img :src="index.url">
    </li>
  </ul>
</template>

*/

/*<script setup>
Propiedades Computadas (Computed Properties):
Crea un componente con dos propiedades de datos, como 'numero1' y 'numero2'.
Utiliza una propiedad computada para calcular la suma de 'numero1' 
y 'numero2' y mostrar el resultado en el template.
import {computed, ref} from "vue"
const numero1 = ref(0)
const numero2 = ref(0)
const suma = computed(()=>{
  return numero1.value + numero2.value
})
</script>
<template>
  <input v-model="numero1" type="number">
  <input v-model="numero2" type="number">
  <h1>{{ suma }}</h1>
</template>*/ 




/* 

<template>
    <div>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Añadir al Carrito</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.name">
            <td>{{ producto.name }}</td>
            <td>{{ producto.price }} Bs</td>
            <td>
              <button @click="addToCart(producto)">Añadir</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <h1>Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in carrito" :key="producto.name">
            <td>{{ producto.name }}</td>
            <td>{{ producto.price }} Bs</td>
          </tr>
        </tbody>
      </table>
  
      <h2>Total: {{ total }} Bs</h2>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const productos = [
    { name: "Lápiz", price: 5 },
    { name: "Borrador", price: 10 },
    { name: "Tijera", price: 15 },
    { name: "Bolígrafo", price: 20 },
    { name: "Resaltador", price: 25 }
  ];
  
  const carrito = ref([]);
  const total = ref(0);
  
  const addToCart = (producto) => {
    carrito.value.push(producto);
    total.value += producto.price;
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  

*/





/*
<script setup>
hacer una pagina de productos e imagenes con name, price and url with añadir a carrito y añada
componente hijo(props) el precio el total si se puede
import { ref } from 'vue';
import Hijo from './components/Hijo.vue';
const Productos = [
    { name: "Lapiz", price: 5, url: "https://dismartgt.com/cdn/shop/files/lapizjumbomaped_Mesadetrabajo1_400x.png?v=1690300926" },
    { name: "Borrador", price: 10, url: "https://dismartgt.com/cdn/shop/files/borradorminitechnic_Mesadetrabajo1_400x.png?v=1690495408" },
    { name: "Tijera", price: 15, url: "https://dismartgt.com/cdn/shop/products/tijera6.5sinpuntaweb_Mesadetrabajo1_400x.png?v=1640619753" },
    { name: "Boligrafo", price: 20, url: "https://dismartgt.com/cdn/shop/products/roundsticrojo_Mesadetrabajo1_400x.png?v=1641313175" },
    { name: "Resaltador", price: 25, url: "https://dismartgt.com/cdn/shop/products/foskaceleste_Mesadetrabajo1_400x.png?v=1642431321" }
]
const carrito = ref([])
const Carrito = (index) => {
    carrito.value.push(index)
    suma.value += index.price
}
const suma = ref(0)
</script>
<template>
    <ul v-for="index in Productos" :key="index.name">
        <br>
        <br>
        <li>
            {{ index.name }} : {{ index.price }} Bs <img :src="index.url" style="border-radius: 40px;">
            <button @click="Carrito(index)" style="margin: 0px 0px 0px 150px ;">AñadirCarrito</button>
            <br><br><br><br><br>
        </li>
    </ul>
    <Hijo :carrito="carrito" :suma="suma">
    </Hijo>
</template>

<script setup>
defineProps(['carrito','suma']);
</script>
<template>
  <!-- Inicio del Carrito -->
  <ul>
    <n style="color: white; font-size: 50px;">Añadido A Carrito</n>
    <li v-for="producto in carrito" :key="producto.name">
      {{ producto.name }} - {{ producto.price }}
    </li>
  </ul>
  <!-- Muestra el suma -->
  <p>Total: {{ suma }}</p>
  <!-- Fin del Carrito -->
</template>
*/


/*<script setup>
Lista de Tareas con Estado de Completado:
Crea una página que muestre una lista de tareas con checkboxes para indicar si una tarea está completada o no.
Utiliza un arreglo de objetos para representar las tareas, cada objeto debe tener propiedades como nombre y completada.
Implementa una función que actualice el estado de completado cuando se hace clic en el checkbox. 
const Tareas = [
    { nombre: "Hacer la compra", completada: false },
    { nombre: "Preparar la cena", completada: true },
    { nombre: "Hacer ejercicio", completada: false },
    { nombre: "Leer un libro", completada: false },
    { nombre: "Llamar a un amigo", completada: true },
];
</script>
<template>
    <ul>
        <li v-for="index in Tareas" :key="index.nombre">
            {{ index.nombre }} : <input type="checkbox" v-model="index.completada" style="border-radius: 50px;">
        </li>
    </ul>
</template>*/