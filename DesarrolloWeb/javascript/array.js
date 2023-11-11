/*Duplicar los elementos de un array:
Dado un array de números, utiliza map() para crear 
un nuevo array donde cada elemento sea el doble del valor original.

const array = [2,4,6,8,10]
const doble = array.map((ver)=>{
    return ver*2
})
console.log(doble);*/

/*Filtrar elementos de un array:
Dado un array de números, utiliza map() para crear un
nuevo array que solo contenga los números pares del array original.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = numeros.map(par => par % 2 == 0);
console.log(resultado);*/

/*
Dado un array de números, utiliza map() para crear un 
nuevo array donde cada elemento sea el cuadrado del valor original.

const numeros = [1,2,3,4,5,6,7,8,9,10]

const resultado = numeros.map((num => num**2))
console.log(resultado);*/


/*Convertir cadenas a números:
Dado un array de cadenas numéricas, utiliza map() 
para crear un nuevo array donde cada elemento sea 
el número correspondiente en formato numérico.
const numeros = ["1","2","3","4","5","6","7","8","9","10"]
const resultaod = numeros.map((num) => parseInt(num))
console.log(resultaod);*/


/*Dado un array de números, utiliza map() para crear un nuevo 
array donde los números negativos se reemplacen por cero.

const numeros = [-5,5,1,-9,4,7,9,-10]
const resultado = numeros.map((num) => num<0 ? 0 : num)
console.table(resultado);*/


/*const Cadena = ["1","2","3"]
const resultado = Cadena.map((num) => num*2)
console.log(resultado);*/

/*Dado un array de números, utiliza map() para duplicar cada elemento del array.

const numeros = [1,2,3,4,5,6,7,8,9,10]
const resultado = numeros.map((ver) => ver*2)
console.log(resultado);*/


/*Dado un array de nombres, utiliza map() para agregar la cadena "Sr." antes de cada nombre.

const nombres = ["David","Jose","Spider"]
const resultado = nombres.map((ver) => "Sr " + ver)
console.log(resultado);*/

/*Dado un array de objetos que representan productos,
utiliza map() para obtener un array con los nombres de todos los productos.
FALTA
*/

/*Dado un array de números, utiliza map() para obtener 
un nuevo array con el cuadrado de cada número.
const nums = [2,4,6,8,10]
const resultado = nums.map((x) =>{
    return x**2
})
console.log(resultado);*/

/*Dado un array de palabras, utiliza map() para obtener un 
nuevo array con la longitud de cada palabra
const palabra = ["hola","Quetal","Pera"]

const resultado = palabra.map((proceso) =>{
    return proceso.length
})
console.log(resultado);*/


/*Dado un array de strings, utiliza map() para convertir todas las letras a minúsculas.

const valor = ["viu","angular","react"]
const resultado = valor.map((proceso) => proceso.toUpperCase())

console.log(resultado);*/

/*Dado un array de objetos que representan personas, utiliza map() 
para obtener un nuevo array con el nombre completo de cada persona
en formato "Apellido, Nombre". FALTA*/


/*Dado un array de números, utiliza map() para obtener un nuevo array con solo los números pares.

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const resultado = numeros.map((proceso) => proceso%2==0 ? "Par" : "Impar")
console.log(resultado);
*/

/*Dado un array de strings, utiliza map() para obtener un nuevo array 
con solo los caracteres en posición par de cada string.

const string = ["David","hola","jose","Quispes","ver"]
const resul = string.map((proceso) =>{
    return proceso.length%2==0 ? console.log(proceso) : [];
})
*/



/*Dado un arreglo de cadenas de texto, utiliza el método map para obtener
un nuevo arreglo con las cadenas en orden inverso.

const cadena = ["Hola","Como","Estas"]
const resul = cadena.map((proceso)=> proceso)
console.log(resul.reverse());*/


/*Dado un arreglo de números, utiliza el método
map para obtener un nuevo arreglo con el 
valor absoluto de cada número.

const numeros = [-5,5,-15,52,53,-48]
const resultado = numeros.map((proceso)=>{
    return Math.abs(proceso);
})

console.log(resultado);*/

/*Dado un arreglo de palabras, utiliza el
método map para obtener un nuevo arreglo
con la longitud de cada palabra

const arreglo = ["Hola","Comasdasdaso","Etas"]
const resultado = arreglo.map((proceso) => {
    return proceso.length
});

console.log(resultado);*/

/*Dado un arreglo de números, utiliza el método map para crear un 
nuevo arreglo donde cada elemento sea el cuadrado del elemento original.

const numero = [1,2,3,4,5,6]
const resul = numero.map((x) => Math.pow(x,2))
console.log(resul);
*/


/*Sort:
Dado un arreglo de strings, utiliza el método sort para ordenar los elementos 
alfabéticamente en orden ascendente.

const Cadena = ["a","b","c","d","e","f"]
const resultado = Cadena.sort((a,z)=> z.localeCompare(a))
console.log(resultado);*/



/*includes:
Dado un arreglo de números, utiliza el método includes para 
verificar si un número específico se encuentra en el arreglo.

const numero = [1,2,3,4,5,6,7]
const resultado = numero.includes(6)
console.log(resultado);*/

/*For in:

Dado un objeto con diferentes propiedades, utiliza el bucle for in para 
recorrer todas las propiedades del objeto e imprimir su valor en la consola.

const objeto ={
    celular : "Samsung",
    silla : "Cafe",
    platano  : "Negro"
}

for(var i in objeto){
    console.log(i);
}*/

/*For of:
Dado un arreglo de nombres, utiliza el bucle for of para recorrer 
todos los nombres e imprimirlos en la consola.

const nombre = ["David","Jose","Elisabeth","Leo"]
for(let i of nombre){
    console.log(i);
}
*/



/*Manipulación Básica de Arrays:
a. Crea un array con nombres de
frutas. Agrega una fruta al final 
y al principio del array..

const Frutas = ["Manzana","Pera",
"Piña","Durazno"]
Frutas.push("Coco")
Frutas.unshift("Papaya")
console.log(Frutas);

/*b. Remueve el último y primer 
elemento del array de frutas que creaste.

Frutas.pop();
Frutas.shift()
console.log(Frutas);

c. Encuentra la posición de 
una fruta específica en el array

console.log(Frutas.length());*/


/*a. Crea un array de números y 
filtra los números pares.

const array = [1,2,3,4,5,6,7,8,9,10,11,12]
for(i in array){
    if(i%2==0){
        console.log(i);
    }
}

/*b. Utiliza el método map()
 para duplicar cada número en 
 un array de números.-


const resultado = array.map((x) =>{
    return x*x
})
console.log(resultado);


. Filtra un array de strings y 
devuelve solo los que tienen 
más de 5 caracteres.
const cadenas = ["HolaComoEStas","Hola","Dos"]

for(i of cadenas){
    if(i.length < 5){
        console.log(i);
    }
}*/



/*a. Crea un array de palabras y 
ordénalas alfabéticamente.
b. Ordena un array de números 
en orden descendente.
c. Invierte el orden de los elementos
 en un array de letras

var cadenas = ["abcdefg","hijk","mñopq","rsqtvwxyz"]
var resultado = cadenas.sort((a,b) => a-b)
console.log(resultado);

var nums = [6,5,3,1,2,6,9,8]
nums.sort((a,b) => {
    return a-b
})
console.log(nums);

cadenas.reverse()
console.log(cadenas);*/