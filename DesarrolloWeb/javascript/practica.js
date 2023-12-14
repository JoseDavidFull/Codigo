/*Crea una función que tome un array de números como 
argumento y devuelva un nuevo array que contenga solo 
los números pares del array original.

function SumArray(array){
    for(let i=1;i<=array.length;i++){
        if(array[i]%2==0){
            return array[i]
        }
    }
}

let array = [1,2,3,4,5,6,7,8,9,10]

let total = SumArray(array);
console.log(total)*/

/*Crea una función que tome un array de números 
como argumento y devuelva un nuevo array que contenga
los mismos números, pero ordenados de menor a mayor.

let array = [2,1,9,5,7,6]

function Ordenar(array){
    return array;
}

console.log(Ordenar(array.sort()))*/

/*Crea una función que tome un array de números como argumento 
y devuelva la mediana de los números. (La mediana es el número 
que está en el medio del array si los elementos están ordenados 
de menor a mayor


let array = [1,2,3,4,5]
function MostrarArray(array){
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}
let Sumando = MostrarArray(array);
console.log("La media es : "+Sumando/5) */

/*Crea una función que tome un número como argumento y devuelva su valor absoluto.

function absoluto(n){
    return Math.abs(n)
}

console.log("El valor absoludo es "+absoluto(-5)) 


function Losgitud(v){
    v="JosedavidQuispeSucullani";
    return v.length;
}

console.log(Losgitud());*/

/*Crea una función que tome un array de
strings como argumento y devuelva una
nueva array con los mismos strings,
pero en orden inverso.


const array = ["1David","2Elisabeth","3Programing"]

function Inverso(array){
    return array;
}
console.log(array.reverse())

let arrar = [1,2,3,4,5,6,7,8,9]

arrar.sort(function(a,b){
    return b-a;
})
console.log(arrar)*/

/*Dada una lista de números, escribe una función flecha que
devuelva la suma de todos los números.
const Suma = (a,b,c,d,e,f,g) => a+b+c+d+e+f+g;
console.log(Suma(1,2,3,4,5,6,7))
*/

/*Dada una lista de objetos que representan productos
con su precio, escribe una función flecha que calcule 
el precio total de todos los productos.

const objetos ={
    Pera : 20,
    Manzana : 50,
    Papaya : 36,
    Limon : 90
}


const Sumar =  (objetos) => objetos[0]+objetos[1]+objetos[2]+objetos[3]

console.log(Sumar()) 


const str = 42+ parseInt('1')
console.log(parseInt(str))  */

/*
let animales = ["Gato","perro","mochila"] 

for(animal in animales){ //for in devuelve la posicion 
    //osea de un array devuelve los numeros 0,1,2
    document.write(animal + "<br>")
}

document.write("<br>")

for(animal of animales){// for of devuelve todos los nombres dentro del array
    document.write(animal + "<br>")
}*/

/*Ejercicio 1: Suma de elementos
Dado un array de números, utiliza un bucle for...in 
para sumar todos los elementos del array.

let numero =[1,2,3,4,5,6,7,8,9,10];
let suma=0;

for(let indice in numero){
    suma+=numero[indice];
}
alert(suma);*/
/*
Ejercicio 2: Imprimir propiedades de un objeto
Dado un objeto, utiliza un bucle for...in para 
imprimir todas las propiedades del objeto.

const Persona = {
    Nombre : "David",
    Edad : 25
}

for(let Comienza in Persona){
    document.write(Comienza +':'+ Persona[Comienza]);
}*/

/*Ejercicio 3: Imprimir elementos de un array
Dado un array, utiliza un bucle for...of para
 imprimir cada elemento del array.

const nombre = ["David","Jose","Elisbeth"]

for(let inicio of nombre){
    document.write(inicio +"<br>");
}*/

/*Ejercicio 4: Filtrar elementos
Dado un array de números, utiliza un bucle for...of 
para crear un nuevo array que contenga solo los números 
pares del array original

const array = [1,2,3,4,5,6,7,8,9,10,11,12]
for(let inicio of array){
    if(inicio%2==0){
        document.write(inicio+"</br>")
    }
}*/

/*Ejercicio 5: Imprimir índices y elementos
Dado un array, utiliza un bucle for...of para 
imprimir tanto el índice como el elemento correspondiente en cada iteración.
let frutas = ["Manzana","Pera","Papaya"]

for (let inicio in frutas){
    alert(` Elemento : ${inicio} Elemento  ${frutas[inicio]}`)
}
 */

/*ejercicios 6
Calcular promedio
Dado un objeto que contiene propiedades numéricas,
utiliza un bucle for...in para calcular el promedio
de todos los valores numéricos en el objeto.

const nota = {
    "Parcial" : 30,
    "Final" : 30,
    "Practicas" : 40 
}
var suma=0
for(let inicio in nota){
    suma+=nota[inicio];
}
console.log(`El promedio es: ${suma/3}`)*/

/*Ejercicio 7: Imprimir inverso
Dado un array, utiliza un bucle for...of para imprimir
los elementos en orden inverso, comenzando desde
el último elemento hasta el primero.


var numeros = [1,2,3,4,5]

for(var inici of numeros){
    return inici.reverse()
}

console.log(inici)*/

/*Mayor menor de edad con prompt

let edad = prompt("ingresa tu edad ")
if(edad>=18){
    alert("eres mayor de edad")
}
else{
    alert("eres menor de edad")
}*/

/*Suma de dos números:
Escribe una función que reciba dos números como
parámetros y devuelva la suma de ambos.*/

/*Números pares e impares:
Escribe una función que reciba un número como 
parámetro y determine si es par o impar. Devuelve
"par" si es par y "impar" si es impar.

function ParImpar(n){
    var resultado;
    if(n%2==0){
        resultado = "Par"
    }
    else{
        resultado = "Impar"
    }
    return resultado;
}
console.log(ParImpar(4))*/

/*Comprobar si el número es menor o igual a 1. En ese caso, 
no es primo.
Iterar desde 2 hasta la raíz cuadrada del número y comprobar 
si alguno de estos números divide al número en cuestión.
Si se encuentra algún divisor, el número no es primo.
Si no se encuentra ningún divisor, el número es primo.*/

/*Filtrado de elementos pares: Escribe una función que reciba 
un array de números y devuelva un nuevo array con solo los números pares.

var num = [2,4,6,5,7,9,11,13,8,10,12]
function Pares(num){
    var resultado = []
    for(var i=0; i<num.length;i++){
        if(num[i]%2==0){
            resultado.push(num[i])
        }
    }return resultado;
}

console.log(Pares(num));*/

/*Eliminación de duplicados: Escribe una función que reciba
un array y elimine los elementos duplicados, devolviendo
un nuevo array sin duplicados.*/

/*Búsqueda de elemento: Escribe una función que reciba un 
array y un elemento, y devuelva true si el elemento está 
presente en el array, o false en caso contrario.


var n = [1,2,3,4,5,6,7,8,9,10]

function Busqueda(n){
    var Buscar;
    for(var i=0;i<n.length;i++){
        if(Buscar==n[i]){
            Buscar = "True"
        }
        else{
            Buscar = "False"
        }
    }
    return Buscar
}

console.log(Busqueda(9));*/

/*
 ****
 *  *
 *  *
 *  *
 */
/*

const nam = prompt("ingresa tu nombre")
const edad = prompt("ingresa tu edad")
const cel = prompt("ingresa tu numero de celular")
alert(`Tu edad es ${nam} Tu edad es ${parseInt(edad)} Tu celular es ${parseInt(cel)}`)
*/

/*
Recorre un objeto utilizando el bucle 
for...in e imprime en la consola cada propiedad y 
su valor

const Persona = {
    Nombre :"David",
    Edad : 25,
    CI : 8519137
}

for(var x in Persona){
    console.log(Persona )
}*/

/*Dado un array de números, 
utiliza el bucle for...of 
para recorrerlo e imprimir en 
la consola cada elemento.

var array = [1,2,3,4,5,6,7,8,9,10]

for(var x of array){
    document.write(x)
} */

/*Recorre un string utilizando el 
bucle for...of y concatena cada 
caracter en una variable para formar 
una nueva cadena.*/

/*Dado un objeto, utiliza el bucle
for...in para calcular la suma de 
todos los valores numéricos de sus
propiedades.

const Objeto ={
    n1 : 50,
    n2 : 10,
    n3 : 30,
    n4 : 48
}

var suma=0
for(var i in Objeto){
    suma+=Objeto[i]
}
console.log("LA suma es: "+suma);*/

/*Dado un objeto que contiene 
información sobre libros, 
utiliza el bucle for...in para 
imprimir en la consola únicamente
los títulos de los libros.


const Objeto ={
    Titulo : "La Iliada",
    Autor : "Homero",
    Titulo2 : "La Odisea"
}

for(const x in Objeto){
    console.log(Objeto[x])
}*/

/*Dado un array de strings, utiliza
 el bucle for...of para encontrar
 el string más largo y mostrarlo 
 en la consola.

const String = ["David","Jose","Quispe","Sucullani"]
var contador;
for(var i of String){
    contador.length+1;
}
console.log(contador)*/

/*Recorre un objeto que representa un
carrito de compras utilizando el bucle 
for...in. Calcula el precio total de
todos los productos y muestra el 
resultado en la consola.

const Tienda ={
    "Papel" : 2,
    "Coca Cola" : 13,
    "Pepsi" : 10
}

var suma=0;

for(var i in Tienda){
    suma+=Tienda[i];
}
document.write("La suma de los productos son "+suma)*/

/*Calcula la suma de todos los elementos 
en un array.

var array =[1,2,3,4,5,7,8,9,10]
for(var i=0;i<=array;i++){
    var suma=0;
    suma+=i
}
console.log(suma);*/

/*Calcula el promedio de los elementos en 
un array.*/

/*Invierte el orden de los elementos en 
un array.

var num =[1,2,3,4,5]
console.log(num.reverse());*/

/*
function ParImpar(a){
    var resultado;
    if(a%2==0){
        resultado = "Par"
    }
    else{
        resultado = "Impar"
    }
    return resultado;
}

console.log(ParImpar(4));*/

/*Crea un objeto llamado persona con propiedades como nombre, edad y ocupacion.
Agrega un método al objeto persona llamado presentarse que imprima en la consola un 
mensaje con la información de la persona.

const Persona ={
    nombre : "David",
    edad : 25,
    ocupacion : "Informatico",
    presentarse (){
        return `Datos son ${this.nombre} edad ${this.edad} ocupacion ${this.ocupacion}`
    }
}

console.log(Persona.presentarse());*/

/*Crea otro objeto llamado libro con propiedades como titulo, autor y anio.
Agrega un método al objeto libro llamado mostrarInformacion que imprima en 
la consola un mensaje con la información del libro.

const libro ={
    titulo : "La Iliada",
    autor : "Homero ",
    año : 1998,
    MostrarInformacion (){
        return `Titulo ${this.titulo}</br> autor ${this.autor}</br> año ${this.año}`
    }
}

document.write(libro.MostrarInformacion())*/

/*Encontrar el número mayor: Escribe un programa que tome 
tres números como entrada y determine cuál de ellos es el mayor.

function Mayor() {
    let a = parseInt(prompt("Ingresa el primer número: "));
    let b = parseInt(prompt("Ingresa el segundo número: "));
    let c = parseInt(prompt("Ingresa el tercer número: "));

    if (a > b && a > c) {
        document.write("El mayor es " + a);
    } else if (b > a && b > c) {
        document.write("El mayor es " + b);
    } else {
        document.write("El mayor es " + c);
    }
}

Mayor();*/

/*Dado el siguiente array, obtener una nueva array 
que contenga los primeros 3 elementos:

const array = [10, 20, 30, 40, 50, 60];
const borrar = array.slice(0,3)
console.log(borrar);*/

/*Dado el siguiente string, obtener una subcadena que
contenga los caracteres desde el tercer índice 
hasta el sexto índice (ambos incluidos):

const texto = "Hola, mundo!";
const borrar = texto.slice(2,7)
console.log(borrar);

// Resultado esperado: "la, m"*/

/*Dado el siguiente array, obtener una nueva array que
contenga los elementos desde el segundo índice hasta el final:

const array = ["a", "b", "c", "d", "e"];
const borrar = array.slice(1,5)
console.log(borrar);
// Resultado esperado: ["b", "c", "d", "e"]*/

/*Dado el siguiente string, obtener una subcadena 
que contenga los últimos 4 caracteres:

const texto = "Programación";
const borrar = texto.slice(8,12)
console.log(borrar);
// Resultado esperado: "ción"*/

/*Realizar un programa que solicite al usuario su nombre y 
luego muestre un mensaje de bienvenida con el nombre ingresado.
const nombre = prompt("Ingrese su nombre:");
alert("¡Bienvenido/a, " + nombre + "!");*/

/*Crea una función flecha que tome un número como 
    parámetro y devuelva true si es par, y false si es impar.
     const ParImpar = (num) => num%2==0 ? "Par" : "Impar";
     alert(ParImpar(4));*/

/*repetir una palabra con prompt 
var  a = prompt("Ingresa cadena");
var b = parseInt(prompt("cuentas veces lo quieres repetir"));
var resul = a.repeat(b);
document.write(resul+"<br>")*/

/*Escribe un programa que tome dos cadenas
 como entrada y las concatene en una 
 sola cadena
const cadena = "Hola "
const resultado = cadena.concat("David")
console.log(resultado);*/

/*Crea una función que reciba una lista de cadenas y devuelva 
la concatenación de todas ellas en una sola cadena.

function Cadena(a,b,c) {
    a = "Hola"
    b = " David "
    c = "Como estas"
    const resultado = a+""+b+""+c.concat(" Tu")
    return resultado;
}
console.log(Cadena()); */

/*Escribe un programa que tome una cadena y una subcadena 
como entrada, y determine si la cadena comienza 
con la subcadena utilizando la función startsWith

const cadena = "Hola como Hola"
const resultado = cadena.endsWith("Hola") // de la sub cadena que le das ve el que se parece a  el y da true y si no false
console.log(resultado);*/

/*Crea una función que reciba una lista de cadenas y una cadena de 
prefijo, y devuelva una lista con las cadenas que comiencen 
con el prefijo utilizando la función startsWith.

function Cadena(c1) {
    let resultado;
    c1 = "Hola como estas";
    resultado = c1.startsWith("Hola");
    return resultado;
}
console.log(Cadena());*/

/*Escribe una función que tome una cadena y una subcadena como 
entrada, y determine si la cadena contiene la subcadena 
utilizando la función includes.

const cadena = ["Hola","Jose","David","Quispe"]
const resul = cadena.includes("Quispe")//include busca de de la cadena lo que le damos en la subcadena
console.log(resul);*/

/*Crea una función que reciba un array de números y un número de 
búsqueda, y devuelva true si el número de búsqueda está presente
en el array utilizando la función includes.

function Busqueda(a) {
    a = ["Jose","DAvid","Quispe","Sucullani"]
    const resultado = a.includes("David");
    return resultado;
}
console.log(Busqueda());*/

/*concat()

let name = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");

let resul = name+" "+apellido.concat();

document.write(resul);*/

/*repeat// sirve para repetir una palabra o numero tantas veces que quieras

const numero = "69"

const resul = numero.repeat(5)
document.write(resul)*/

/*includes
// busca de subindice lo que hay de el indice

const datos = ["123","456","159","987"]

const buscar = datos.includes("123")

document.write(buscar)*/

/*SLICE
// cortas las partes que no quieres -1

const ver = [1,2,3,4,5]
const cortar = ver.slice(0,3)

document.write(cortar)*/

/*SPLICE
// borra los indices de adelante de el indice que pongas

const cadena = ["Hl","Como","stas","?"]

const subcadena = cadena.slice(2)
console.log("antes "+cadena);
console.log("Reciente "+subcadena);*/

/*Iterar sobre las propiedades de un objeto y mostrar sus valores en la consola.

const objeto = {
    nombre: "David",
    apellido : "Quispe",
    edad : 25
}
for(var i in objeto){
    var resul = objeto[i]
    document.write(resul)
}*/

/*Sumar los valores de todas las propiedades numéricas de un objeto.
const numero = {
    uno : 1,
    dos : 2,
    tres : 3
}
var suma = 0
for(var i in numero){
    const resul = numero[i]
    suma+=resul;
}
document.write(suma)*/

/*Iterar sobre los elementos de un arreglo 
y mostrarlos en la consola.

var arreglo = ["David","Quispe","Sucullani"]

for(var i of arreglo){
    document.write(i)
}*/

/*Crea una función que tome un número como parámetro
y devuelva su valor absoluto.

function absoludo(b) {
    return Math.abs(b)
}


const num = parseInt(prompt("Ingresa un numero Negativo"))

document.write("El numero absoluto es: "+absoludo(num))*/

/*Escribe una función que reciba una cadena de texto y devuelva
la misma cadena pero en mayúsculas.*/

/*Crea un objeto llamado "persona" que solicite al usuario 
su nombre y edad mediante prompts. Luego muestra en la 
consola un mensaje que diga: "Hola [nombre], tienes [edad] años".

const Persona ={
    nombre : prompt("Ingresa tu Nombre"),
    edad : parseInt(prompt("Ingresa tu edad"))
}

document.write(`Hola soy ${Persona.nombre} y tengo ${Persona.edad} años`);*/

/*Crea un objeto llamado "libro" que solicite al usuario el título, autor y año 
de publicación mediante prompts. Luego muestra en la consola un mensaje que 
muestre la información del libro de la siguiente manera: "El libro [título] 
escrito por [autor] fue publicado en el año [año]".

const libro ={
    titulo : prompt("Ingresa El titulo de el libro"),
    autor : prompt("Ingresa El autor de el libro"),
    anio : parseInt(prompt("Ingresa el año de publicacion de el libro"))
}


document.write(`El titulo de el libro es ${libro.titulo} escrito por ${libro.autor}  fue publicado en el año ${libro.anio}`)*/

/*Crea un array llamado "frutas" que contenga los nombres de tres frutas.
Pide al usuario que ingrese el nombre de una fruta mediante prompt y 
verifica si esa fruta se encuentra en el array. Muestra un mensaje 
en la consola indicando si la fruta está o no en el array.

const frutas = ["Manzana","Pera","Durazno","Frutilla"]

const encontrar = prompt("Ingresa el nombre de una fruta")
const resul = frutas.includes(encontrar)
document.write(`La fruta se encontro? :  `+resul)*/

/*Crea un array vacío llamado "numerosPares". Pide al usuario que 
ingrese 5 números mediante prompts y añade solo los números pares 
al array. Muestra el contenido del array en la consola.

const numerosPares = [];
const pedir = parseInt(prompt("Cuantos numeros quieres ingresar"));

for(var i=0;i<pedir;i++){
    const num = parseInt(prompt("Ingresa El num "+i+" sig"))
    numerosPares.push(num)
}

for(var j=0;j<numerosPares.length;j++){
    document.write(numerosPares[j])
}*/

/*Crea un objeto llamado "persona" que solicite al usuario su nombre, 
edad y ciudad mediante prompts. Utiliza un bucle "for...in" para 
recorrer todas las propiedades del objeto y mostrar en la consola su nombre y valor.

var num = parseInt(prompt("Ingresa un num"))

for(var i=1;i<=num;i++){
    document.write(i)
}*/

/*Escribe una función llamada sumaNumerosPares que reciba un número 
entero positivo como parámetro y devuelva la suma de todos los
números pares desde 1 hasta ese número.

function sumaNumerosPares(n){
    var suma=0;
    for(var i=0;i<=n;i++){
        if(i%2==0){
            suma+=i;
        }
    }return suma;
}

console.log(sumaNumerosPares(5));*/

/*Escribe una función llamada contarPalabras que reciba 
una cadena de texto como parámetro y devuelva el
número de palabras que contiene.

function contarPalabras(cadena) {
    var resul;
    for(var i=0;i<=cadena.length;i++){
        resul = i;
    }
    return resul;
}

console.log(contarPalabras("Hola"));*/

/*Escribe un programa que imprima un mensaje en la consola 
y luego limpie la consola utilizando console.clear(). 
Luego, imprime otro mensaje en la consola.

console.log("Hoola como estas");
console.clear()
console.log("Ver")*/

/*Escribe una función llamada dividir(a, b) que reciba dos números
como parámetros y realice la división de a entre b. Si el 
divisor b es igual a cero, imprime un mensaje de error 
utilizando console.error(). Prueba la función con diferentes 
valores para verificar el manejo de errores.

function dividir(a,b) {
    var resultado;
    if(b==a && a==b){
        console.error("Esta mal")
    }
    else{
        if(a<b){
            console.log(a/b)
        }
        else{
            console.log(a/b);
        }
    }
}

dividir(31,5)*/

/*Crea un arreglo de objetos llamado personas, donde cada objeto 
represente a una persona con propiedades como nombre, edad y 
país. Imprime una tabla en la consola utilizando console.table()
para mostrar los detalles de las personas en una forma tabular y legible.

const persona = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 }
];
console.table(persona)*/

/*Escribe un programa que solicite al 
usuario ingresar un número y luego 
calcule y muestre la raíz cuadrada 
de ese número utilizando la 
función sqrt().

const num = parseInt(prompt("Ingresa un numero"))

document.write(Math.sqrt(num))*/

/*Escribe un programa que solicite al 
usuario ingresar tres números y luego 
determine y muestre el máximo de esos 
números utilizando la función max()

const num1 = parseInt(prompt("Ingresa 1er numero"))
const num2 = parseInt(prompt("Ingresa 2do numero"))
const num3 = parseInt(prompt("Ingresa 3er numero"))

document.write("El mayo es: "+Math.max(num1,num2,num3))*/

/*Escribe un programa que genere y muestre 
un número aleatorio entre 0 y 1 
utilizando la función random()

document.write(Math.floor(Math.random()*500))*/

/*Escribe una función llamada redondear(numero) 
que tome un número como argumento y lo redondee 
al entero más cercano utilizando la 
función round(). Luego, muestra el número
 redondeado en la consola.

const num = parseFloat(prompt("Ingresa un numero flotante"))

document.write(Math.round(num))*/

/*var aleatorioEntero = Math.ceil(Math.random() *30) // floor redondea el numero flotante a entero y random crea numero aleatorio 
console.log(aleatorioEntero)*/

/*Acceso a un elemento de un arreglo:
Crea un arreglo llamado numeros con algunos 
números. Accede al segundo elemento 
del arreglo utilizando la notación de 
corchetes.

const numeros = [123,4124,512,1,52,543]
const resultado = numeros[numeros.length -5]
console.log(resultado);*/

/*Suma de elementos en un arreglo bidimensional:
Crea un arreglo bidimensional con números
enteros. Calcula la suma de todos los 
elementos del arreglo.

var num = [1,2,3,4,5,6,7,8,9,10]
var suma=0;
for(var i=0;i<=num.length;i++){
    suma+=i;
}
console.log(suma);*/

/*Uso del método pop():

Crea un arreglo con varios elementos. Utiliza
 pop() para eliminar el último elemento del
  arreglo y muestra el arreglo resultante.

const palabra = ["Hl","Qtal","Cartman","Simp"]
const resul = palabra.pop();
console.log(palabra);*/

/*Uso del método shift():
Crea un arreglo con varios elementos. Utiliza 
shift() para eliminar el primer elemento del 
arreglo y muestra el arreglo resultante.

const palabra = [1,2,3,4,5,6,7,8]
palabra.shift()
console.log(palabra);*/

/*Ordenar un arreglo de números:
Crea un arreglo con varios números 
desordenados. Utiliza el método sort()
para ordenar los números de forma 
ascendente y muestra el arreglo 
resultante
const nums = [2,5,2,7,3,5,3,6,8,4]
const resul = nums.sort((a,b) => a-b)
console.log(resul);*/

/*Ordenar un arreglo de cadenas:
Crea un arreglo con varias cadenas 
desordenadas. Utiliza el método sort() para 
ordenar las cadenas alfabéticamente y muestra
el arreglo resultante.

const cadena = ['Z','B','D','U','I']
const resul = cadena.sort((a,b)=> b-a)
console.log(resul);*/

/*Ordenar un arreglo de fechas:
Crea un arreglo de objetos Date con 
diferentes fechas. Utiliza el método 
sort() para ordenar las fechas de forma
ascendente y muestra el arreglo resultante.

const fechas = [{segundo:"08-05-1998",tercero:"20-05-2000", primero :"05-08-1996"}]
const resul = fechas.sort((a,b)=> a-b)
console.log(resul);*/

/*Crea un programa que imprima los números del 1 al 10 en la consola.

for(var i=1;i<=10;i++){
    console.log(i);
}*/

/*Realiza un programa que calcule la suma de dos números ingresados por el usuario.

var a = 10;
var b = 20;
console.log(`La suma es ${a+b}`);*/

/*Escribe un programa que determine si un número ingresado por el usuario es par o impar.
var n = 5;
if(n%2==0){
    console.log("Par");
}else{
    console.log("Impar");
}*/

/*Desarrolla un programa que calcule el factorial de un número ingresado por el usuario.
var factorial =1;
for(var i=1;i<=5;i++){
    factorial*=i;
}
console.log(factorial);*/

/*Crea un programa que ordene un arreglo de números de forma ascendente.

const nums = [8,54,3,63,67,3,674,321,33,5,6,8,1,2,3,4,7,6,8,]
const resultado = nums.sort((a,b)=> a-b)
console.log(resultado);*/

/*Ordenar un array de números de forma ascendente.
Ejemplo de entrada: [5, 2, 9, 1, 7]
Ejemplo de salida: [1, 2, 5, 7, 9]

const array = [5,2,9,1,7]
const resultado = array.sort((a,b) => a-b)
console.log(resultado);*/

/*Dado un array de nombres, obtener
un nuevo array que contenga la 
longitud de cada nombre.
Ejemplo de entrada: ["Ana", 
"Juan", "María", "Pedro"]
Ejemplo de salida: [3, 4, 5, 5]

const array = ["Ana", 
"Juan", "María", "Pedro"]
const resul = array.map((proceso) => proceso.length)
console.log(resul);*/

/*Dado un array de palabras, obtener 
un nuevo array que contenga las 
palabras convertidas a mayúsculas.
Ejemplo de entrada: ["hola", "mundo", 
"javascript"]
Ejemplo de salida: ["HOLA", "MUNDO", 
"JAVASCRIPT"]
const array = ["hola", "mundo", 
"javascript"]
const resul = array.map((proceso)=> proceso.toUpperCase())
console.log(resul);*/

/*Imprime los números del 1 al 10 
utilizando un bucle for
for(let i=1;i<=10;i++){
    console.log(i);
}*/

/*Crear una clase "Calculadora" que tenga 
métodos para realizar operaciones 
matemáticas básicas, como suma, resta, 
multiplicación y división.

class Calculadora{
  suma(){
    return 5+5
  }
  resta(){
    return 10-5
  }
  mul(){
    return 5*5
  }
  div(){
    return 30/5
  }
}

const mostraDatos = new Calculadora()
console.log(mostraDatos.suma());
console.log(mostraDatos.resta());
console.log(mostraDatos.mul());
console.log(mostraDatos.div());*/

/*Dado un arreglo de números, calcula 
la suma de todos los elementos 
utilizando el bucle for...of.

var arreglo = [1,2,3,4,5]
var suma = 0;
for (const i of arreglo) {
    suma+=i;

}
console.log(suma);*/

/*Dado un arreglo de palabras, muestra 
cada palabra en la consola utilizando 
el bucle for...of.
const palabra = ["Hola","David","Quispe"]

for (const i of palabra) {
    console.log(i);
}*/

/*Dado un objeto con propiedades numéricas, 
suma todos los valores utilizando el 
bucle for...of

const Sum ={
    uno : 1,
    dos : 2,
    tres : 3,
    cuatro : 4,
    cinco : 5,
    seis : 6
}
Object.freeze(Sum)
var suma=0;
for (const i of Object.values(Sum)) {
    suma+=i;
}
console.log("La suma es : "+suma);*/

/*Dado un objeto con propiedades y valores,
muestra cada propiedad y su valor 
utilizando el bucle for...in.
const objetos ={
    libro : "Odisea",
    PC : "Corei9",
}
for(const i in objetos){
    console.log(objetos[i]);
}*/

/*Crear un objeto llamado "persona" con propiedades como "nombre", 
"edad" y "ocupación". Luego, imprimir en la consola 
la información de la persona.
const persona = {
    "nombre" : "David",
    edad : 25,
    'ocupacion' : "Programador"
}

console.log(Object.values(persona));*/

/*Crear un objeto llamado "coche" con propiedades como "marca", 
"modelo" y "año". Agregar un método al objeto que imprima en la 
consola la información completa del coche.

const coche = {
    marca : "Toyotaro",
    modelo : "Kawasaki",
    anio : 1998
}

console.log(coche.marca, coche.modelo, coche.anio );*/



/*Escribir una función llamada "esPar" que tome un número como 
parámetro y devuelva true si es par, o false si es impar

const esPar = (n) =>  n%2==0 ? "Par" : "Impar"
console.log(esPar(7));*/

/*pop: Escribe un programa que elimine el último elemento 
de un array utilizando el método pop. Luego, muestra en 
la consola el array resultante y el elemento eliminado.*

const array = ["Hola","como","Estas"]
const resultado = array.pop();
console.log("El eliminado es : "+resultado);
console.log("El resultado es :" +array);*/

/*shift: Crea un programa que elimine el primer elemento de 
un array utilizando el método shift. Después, muestra en 
la consola el array resultante y el elemento eliminado.
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]//areglos
const resultado = arreglo.shift();//metodos shoft que elimina el primer elemento de un array
console.log(`El resultado es ${arreglo}`); // usamos los templates literals
console.log(`El elemento eliminado es ${resultado}`);*/



/*Generar un número aleatorio entre 1 y 
10 (ambos inclusive) y mostrarlo en 
la consola.
const numero = parseInt( Math.random(Math.floor)*10)
console.log(numero);*/


/*Crear una función que acepte dos 
paráme
tros, un número mínimo y un número 
máximo, y devuelva un número aleatorio 
dentro de ese rango.

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
console.log(generarNumeroAleatorio(5,20));*/

/*Crear un juego de adivinar el número 
en el que la computadora genera un 
número aleatorio entre 1 y 100, y el 
jugador debe adivinar qué número es. 
La computadora debe dar pistas si el 
número ingresado es mayor o menor al 
número aleatorio generado

var a= prompt("Adivina el numero entre el 1 y 100")
var b = parseInt(Math.random(Math.floor)*5);
a==b ? document.write("Ganaste") : document.write("Perdiste")*/

/*Ejemplo de repeat():
Dado un número entero repeticiones y una cadena cadena, utiliza el método 
repeat() para repetir la cadena repeticiones veces y muestra el resultado.
const cadena = "Palabra"
const mostrar = cadena.repeat(5);
console.log(mostrar);*/

/*Ejemplo de concat():
Dadas varias cadenas cadena1, cadena2, cadena3, ..., cadenaN, 
utiliza el método concat() para concatenar todas las cadenas 
en una sola cadena y muestra el resultado.

var cadena1 = "Hola"
var cadena2 = "Como"
var cadena3 = "Estas"
const resultado = cadena1.concat(" ",cadena2," ", cadena3)
console.log(resultado);*/


/*Crear una clase Persona con los atributos nombre y edad. 
Agregar un método validarEdad() que lance una excepción
si la edad es menor o igual a cero.

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    ValidarEdad(){
        try {
            console.log("Eres mayor de edad");
        } catch (error) {
            console.log("Eres menor de edad");
        }
    }
} 


const mostraDatos = new Persona(17);
mostraDatos.ValidarEdad()*/

/*Crear una clase Estudiante con los atributos nombre, edad y carrera. 
Agregar un método validarCarrera() que lance una excepción si la 
carrera no es válida (por ejemplo, si no pertenece 
a una lista predeterminada de carreras)

class Estudiante{
    constructor(nombre,edad,carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }
    validarCarrera(){
        var valor = "";
        try {
            switch (this.carrera) {
                case "Electromecanica":
                    valor = "Electromecanica Buen hecho";
                    break;
                case "CienciasDeLaComputacion":
                    valor = "Salio Ing ciencias de la computacion";
                    break;
                case "Informatica":
                    valor = "Salio igual, Es Informatica";
                    break;
                default:
                    valor = "No aparece"
                    break;
            }
        } catch (error) {
            return "Cargar Valor"
        }
    }
}
const mostraDatos = new Estudiante("David",25,"Electromecanica")
console.log(mostraDatos.validarCarrera());*/

/*Herencia y Superclase: Crea una clase base llamada "Vehiculo" con atributos
como "marca" y "modelo". Luego, crea una subclase "Automovil" que 
herede de "Vehiculo" y tenga un atributo adicional "puertas".


class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    Informacion(){
        return `Marca ${this.marca} Modelo ${this.modelo}`
    }
}

class Automovil extends Vehiculo{
    constructor(marca,modelo,puertas){
        super(marca,modelo);
        this.puertas = puertas;
    }
    Enformacion(){
        return `Marca ${this.marca} Modelo ${this.modelo}  Numero de Puertas ${this.puertas}`
    }
}


const mostrarVe = new Vehiculo("Yohiro","Zuzuki");
const mostrarAuto = new Automovil("Baki","kawasaki",5);

console.log(mostrarVe.Informacion());
console.log(mostrarAuto.Enformacion());*/


/*Crear una clase base llamada "Persona" con atributos 
como "nombre" y "edad". Luego, crear subclases como 
"Estudiante" y "Profesor" que hereden de "Persona" 
y tengan atributos adicionales como "carrera" para el 
estudiante y "materia" para el profesor.
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,carrera){
        super(nombre,edad);
        this.carrera = carrera;
    }
    InformacionEstudiante(){
        return `Nombre ${this.nombre} Edad ${this.edad} Carrera ${this.carrera} `
    }
}


class Profesor extends Persona{
    constructor(nombre,edad,materia){
        super(nombre,edad);
        this.materia = materia;
    }
    InformacionProfesor(){
        return `Nombre ${this.nombre} Edad ${this.edad} Materia ${this.materia}`
    }
}

const Es = new Estudiante("David",25,"Ciencias de la computacion");
const Pr = new Profesor("Jose",26,"ProgramacionIntermedia");
console.log(Es.InformacionEstudiante());
console.log(Pr.InformacionProfesor());*/



/*Función Ordenar Array: Crea una función ordenarArray que tome un array 
de números como parámetro y devuelva el array ordenado de forma ascendente.

function ordenarArray() {
    var array = [5,6,2,6,2,1,7,3,2,10]
    const resultado = array.sort((a,b) => a-b)
    return resultado;
}

console.log(ordenarArray());*/


/*Función Potencia: Implementa una función potencia que tome 
dos números como parámetros y devuelva el resultado de elevar 
el primero a la potencia del segundo.

function Potencia(a,b) {
    return Math.pow(a,b)
}
console.log("El resultado es:"+Potencia(5,2));*/


/*Suma de Elementos: Escribe una función 
llamada sumarElementos que tome un array 
de números como parámetro y devuelva la 
suma de todos los elementos del array.
function sumarElementos(){
    var array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    var suma=0;
    for(var i=0;i<=array.length;i++){
        suma+=i;
    }
    return suma;
}
console.log(sumarElementos());*/

/*Herencia de Múltiples Niveles:
Crea una clase base llamada "Persona" 
con atributos como "nombre" y "edad". 
Luego, crea una subclase "Estudiante" 
que herede de "Persona" y tenga atributos 
adicionales como "carrera" y "promedio". 
A continuación, crea una subclase 

"EstudianteGraduado" que herede de 
"Estudiante" y tenga un atributo 
adicional "anioGraduacion".

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,carrera,promedio){
        super(nombre,edad);
        this.carrera = carrera;
        this.promedio = promedio;
    }
}

class EstudianteGraduado extends Persona{
    constructor(nombre,edad,anioGraduacion){
        super(nombre,edad);
        this.anioGraduacion = anioGraduacion;
    }
    MostrarEstudiante(){
        return `Nombre ${this.nombre} edad ${this.edad} añoGraduacion ${this.anioGraduacion}`
    }
}

const Gra = new EstudianteGraduado("David",25,2025)
console.log(Gra.MostrarEstudiante());*/

/*Herencia con Constructor y Métodos:
Crea una clase "Fruta" con atributos
como "nombre" y "color". Luego, crea una 
subclase "Manzana" que herede de "Fruta" 
y tenga un método adicional "calcularPreci
o()" que devuelva el precio de la manzana.

class Fruta{
    constructor(nombre,color){
        this.nombre = nombre;
        this.color = color;
    }

}

class Manzana extends Fruta{
    constructor(nombre,color){
        super(nombre,color);
    }
    calcularPrecio(){
        return `La fruta ${this.nombre} y de color ${this.color} tiene un precio de 5.000$`
    }
}

const manzana = new Manzana("Frutin","Verde")
console.log(manzana.calcularPrecio());*/

/*Herencia de Métodos Estáticos:
Define una clase base "Matematicas" con un 
método estático "sumar". Luego, crea una 
subclase "MatematicasAvanzadas" que herede de 
"Matematicas" y tenga un método estático 
adicional "restar".

class Matematicas{
    static suma(a,b){
        return a+b;
    }
    static resta(a,b){
        return a-b
    }
}

console.log(Matematicas.suma(5,5));
console.log(Matematicas.resta(20,8));*/



/*Herencia de Dispositivos Móviles:
Implementa una clase base llamada 
"DispositivoMovil" con atributos como "marca" y 
"modelo". Luego, crea subclases como "Smartphone"
y "Tablet" que hereden de "DispositivoMovil" y 
tengan atributos adicionales propios, como 
"tamañoPantalla" o "capacidadAlmacenamiento".


class DispositivoMovil{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Smartphone extends DispositivoMovil{
    constructor(tamañopantalla,marca,modelo){
        super(marca,modelo)
        this.tamañopantalla = tamañopantalla
    }
    mostrarSmartphone(){
        return `La marca es ${this.marca} El modelo es ${this.modelo} Tamaño pantalla ${this.tamañopantalla}`
    }
}


class Tablet extends DispositivoMovil{
    constructor(capacidad,marca,modelo){
        super(marca,modelo)
        this.capacidad = capacidad;
    }
    mostrarTablet(){
        return `La marca es ${this.marca} El modelo es ${this.modelo} capacidad ${this.capacidad}`
    }
}


const mostrarSmartphone = new Smartphone("40hzz","Samsung","J5")
console.log(mostrarSmartphone.mostrarSmartphone());
const mostrarTablet = new Tablet("80Hzz","lg","P5");
console.log(mostrarTablet.mostrarTablet());*/


/*Calculadora: Implementar una calculadora 
con métodos estáticos para realizar operaciones
 matemáticas.


 class Calculadora{
    static suma(a,b){
        return a+b
    }
    static resta(a,b){
        return a-b
    }
    static mul(a,b){
        return a*b
    }
    static div(a,b){
        return a/b
    }
    static residuo(a,b){
        return a%b
    }
 }

console.log(Calculadora.suma("La suma es: "+5,5));*/


/*Conversión de Unidades: Crear una clase con 
métodos estáticos que realicen conversiones 
entre diferentes unidades (por ejemplo, de 
metros a centímetros)

class Conversión{
    static Convertir(a){
        return a*100
    }
}

console.log(Conversión.Convertir(11))*/

/*Ejercicio de Cálculo de Raíz Cuadrada:
Implementa una función que tome un 
número como parámetro y devuelva su 
raíz cuadrada. Utiliza try y catch 
para manejar el caso en el que el 
número sea negativo.

function RaizCuadrada(n) {
    try {
        return Math.sqrt(n)
    } catch (e) {
        return "Error"
    }
}
console.log(RaizCuadrada(81)); */

/*Suma de Elementos: Escribe una función que tome un array de 
números como parámetro y utilice forEach() para 
calcular la suma de todos los elementos.

var array = [1,2,3,4,5,6,7,8,9,10,11,22,4,4,55,56,6,6,6,]
var suma = 0
array.forEach(x =>{
    suma+=x;
})
console.log(suma);*/

/*Multiplicación de Elementos:
Crea una función que tome un array de 
números como parámetro y utilice 
forEach() para calcular el producto
 de todos los elementos.

function Multiplo(array) {
    array = [1,2,3,4,5]
    var producto = 1 ;
    array.forEach(i =>{
        producto*=i
    })
    return producto
}
console.log(Multiplo());*/


/*Conversión de Monedas:
Implementa una función que tome un array 
de cantidades en dólares y utilice 
forEach() para convertir cada cantidad 
a otra moneda utilizando un tipo de 
cambio dado.
var arreglo = [1,2,3,4,5,6,7,8,9,10]
function Dolares() {
    arreglo.forEach(x => {
        console.log(x*6.7);
    })
}
Dolares()*/

/*Filtrar Números Pares:
Escribe una función que tome un array 
de números como parámetro y utilice 
forEach() para crear un nuevo array 
que contenga solo los números pares.

function Pares() {
    var array = [1,2,3,4,5,6,7,8,9,10]
    array.forEach(x =>{
        if(x%2==0){
            console.log(x);
        }
    })
}
Pares()*/

/*Capitalizar Nombres: Crea una función 
que tome un array de nombres como 
parámetro y utilice forEach() para 
capitalizar la primera letra de cada 
nombre.

function Nombres(array) {
    array = ["David","Jose","Elisbaeth"]
    array.forEach(x => {
        console.log(x);
    });
}

Nombres()*/

/*Ordenar Números: Escribe una función 
que tome un array de números como 
parámetro y utilice forEach() para 
ordenar los elementos de forma 
ascendente.

function Ordenar() {
    var array = [10,5,6,7,3,45,56,7,4,4]
    array.forEach(x => {
        x = array.sort((a,b) => a-b)
    })
    return array
}
console.log(Ordenar());*/

/*Contar Vocales: Crea una función que 
tome un array de palabras como parámetro 
y utilice forEach() para contar la 
cantidad de vocales en cada palabra.

function Vocales() {
    var Array = ["Hola","Como","Estas","Chaval"]
    Array.forEach(x => {
        x.length
    })
    return Array
}
console.log(Vocales());*/

/*Transformar a Mayúsculas: Implementa 
una función que tome un array de 
palabras como parámetro y utilice 
forEach() para convertir todas las 
palabras a mayúsculas.

function Mayuscula() {
    var array = ["hola","como","estas"]
    array.forEach(x => {
        console.log(x.toLocaleUpperCase());
    })
}

Mayuscula()*/

/*Concatenar Strings: Escribe una 
función que tome un array de strings 
como parámetro y utilice forEach() 
para concatenar todos los elementos 
en un solo string.

function Concatenar() {
    var array = ["Hola ", "Como", "Estas"];
    var resultado = array.join(" "); // Utiliza el método join() para concatenar con un espacio en blanco
    return resultado;
  }
  
  console.log(Concatenar()); // Output: "Hola Como Estas"*/



/*Suma de Números: Escribe una función 
que tome un array de números como 
parámetro y devuelva la suma de todos 
los elementos.
var array = [1,2,3,4,5,6,7,8,9,10]
function Suma() {
    var suma = 0;
    for(var i=1;i<=array.length;i++){
        suma+=i
    }
    return suma
}

console.log("La suma es :"+Suma());*/

/*Encontrar el Número Mayor:
Implementa una función que tome un 
array de números como parámetro y 
devuelva el número más grande.
var Array = [1,2,3,4,5,10,20,76,5,44,22,55,44]
var mayor = Math.max(...Array)
console.log("El mayor es: "+mayor);*/


/*Combinar Arrays: Implementa una 
función que tome dos arrays como 
parámetros y devuelva un nuevo array 
que combine los elementos de ambos.

var array1 = [1,2,3,4,5,6,7,8,9,10]
var array2 = [11,12,13,14,15,16,17]
function Concatena() {
    var concatenar = array1.concat(array2)
    console.log(concatenar);
}

Concatena()*/

/*Calificaciones Aprobadas: Escribe una 
función que tome un array de 
calificaciones (números) como parámetro 
y devuelva un nuevo array solo con 
las calificaciones aprobadas 
(mayores o iguales a 60).

function Aprobados() {
    var array = ["David",10,"Jose",20,"Elisabeth","bertha",70,"Jhosep",80,"Devid",90]
    array.forEach(x =>{
        if(x >= 60 ){
            console.log(x,"Aprobado");
        }
        else{
            console.log(x,"Reprobado");
        }
    })
    return array;
}

Aprobados()*/

/*Ordenar Números: Escribe una función 
que tome un array de números como 
parámetro y devuelva un nuevo array 
con los elementos ordenados de forma 
descendente.

var array = [1,2,3,4,5,6,7,8,9,10]
function Descendente() {
    array.sort((a,b)=> b-a)
    return array
}
console.log(Descendente());*/


/*Herencia y Polimorfismo:
Define una clase "Vehiculo" con 
propiedades como "tipo" y 
"velocidadMaxima". Luego, crea 
subclases como "Auto" y "Motocicleta" 
que hereden de "Vehiculo" y 
sobrescriban métodos según sea 
necesario.

class Vehiculo{
    constructor(velocidadMaxima){
        this.velocidadMaxima = 
        velocidadMaxima;
    }
    Mostrar(){
        return 0;
    }
}


class Auto extends Vehiculo{
    constructor(velocidadMaxima){
        super(velocidadMaxima)

    }
    Mostrar(){
        return `La velicidad Maxima es: ${this.velocidadMaxima}`
    }
}


class Motocicleta extends Vehiculo{
    constructor(velocidadMaxima){
        super(velocidadMaxima)
    }
    Mostrar(){
        return `La velicidad Maxima De Motocicleta : ${this.velocidadMaxima}`     
    }
}

MostrarAuto = new Auto(5000);
console.log(MostrarAuto.Mostrar());

MostrarMotocicleta = new Motocicleta(8000);
console.log(MostrarMotocicleta.Mostrar());*/


/*Herencia de Personas: Crea una clase 
Persona con propiedades como nombre y 
edad. Luego, crea subclases como 
Estudiante y Profesor que hereden 
de Persona y tengan propiedades 
adicionales.


class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,promedio){
        super(nombre,edad)
        this.promedio = promedio;
    }
    MostrarE(){
        return `Hola me llamo ${this.nombre} tengo ${this.edad} anios mio promedio ${this.promedio}`
    }
}

class Profesor extends Persona{
    constructor(nombre,edad,Materia){
        super(nombre,edad);
        this.Materia = Materia
    }
    MostrarP(){
        return `Hola me llamo ${this.nombre} tengo ${this.edad} anios mio Materia ${this.Materia}`
    }
}


const MostrarEstudiante = new Estudiante("David",25,60.5);
const MostrarProfesor = new Profesor("Jose",59,"Fis500");

console.log(MostrarEstudiante.MostrarE());
console.log(MostrarProfesor.MostrarP());*/


/**/



/*Ordenamiento de números: Dado un arreglo de números, ordena 
los números de manera ascendente utilizando el método sort().*/

/*const Numeros = [1,2,3,8,7,6,9,10]
var ascendente = Numeros.sort((a,b) =>{
    return a-b
})
console.log(ascendente);*/



/*Clase Coche: Diseña una clase Coche con atributos como marca, 
modelo y año. Agrega métodos para encender, apagar y acelerar el coche.

class Coche {//clase
    constructor(marca, modelo, año){//constructor
        this.marca = marca;//atributos
        this.modelo = modelo;
        this.año = año;
    }
    Informacion(){//metodos
        return `Marca ${this.marca} Modelo ${this.modelo} Año ${this.año}`
    }
}

const Ver = new Coche("Zuzuki","Hf",1990)//objeto
console.log(Ver.Informacion());*/


/*Escribe una función que tome un array de números como 
parámetro y devuelva la suma de todos los elementos.



function suma(array = [1,2,3,4,5,6,7,8,9,10],suma=0){
    for(var i in array){
        suma+=array[i]
    }console.log(suma);
}

suma();*/

/*Escribe una función que tome un array de números como
 parámetro y utilice la función sort para ordenar los 
 números de forma ascendente. Devuelve el array ordenado. 

function ordenar (array=[5,4,3,2,1,5,6,7,8,9,10]){
    var ordenado = array.sort((a,b) =>{
        return a-b
    })
    console.log(ordenado);
}

ordenar();*/

/*Duplicar Números:
Escribe una función que tome un array de números como parámetro
 y utilice map para devolver un nuevo array donde cada número 
 sea duplicado. */

 function Duplicar(array=[1,2,3,4,5,6,7,8,9,10]) {
    var duplicando = array.map((x) => x*2)
    console.log(duplicando);
 }

 Duplicar();