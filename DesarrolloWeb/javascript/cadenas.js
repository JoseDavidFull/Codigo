/*Escribe una función que tome dos cadenas 
como argumentos y las concatene.
function Concatenar(a,r) {
    a = "Hola"
    r = a.concat(" Como esta")
    return r;
}

console.log(Concatenar());*/

/*Escribe una función que tome una cadena y una subcadena 
como argumentos, y verifique si la cadena comienza con la subcadena.

function Verificar(a,r) {
    a = "Hola como esta"
    r = a.startsWith("Hola")
    return r;
}

console.log(Verificar());*/


/*Escribe una función que tome una matriz de cadenas y una 
cadena como argumentos, y verifique si alguna de las cadenas 
en la matriz contiene la cadena especificada.

function Verificacion(a,b) {
    a = ["Hola","estas","Bien"]
    b = a.includes("estas");
    return b;
}

document.write(Verificacion())*/



/*Escribe una función que tome una cadena y un carácter 
como argumentos, y encuentre la primera aparición 
del carácter en la cadena.

function incide(letras,resultado) {
    letras = "Hola como esta usted"
    resultado = letras.indexOf("usted")
    return resultado;
}

console.log(incide());*/


/*Crea una función que tome un array como argumento y elimine 
el último elemento utilizando pop(). Devuelve el array modificado.

var array = ["Hola", "Como esta", "Esta"];

function Borrar(array) {
  array.pop();
  return array;
}

console.log(Borrar(array));*/

/*Crea una función que tome un array y un elemento como argumentos 
y agregue el elemento al final del array utilizando push(). 
Devuelve el array modificado.

var array = ["Hola","Como","Estas"]

function Añadir(array) {
    array.push("Elisabeth")
    return array
}
console.log(Añadir(array));*/



/*Crea una función que tome un array como argumento y elimine el primer 
elemento utilizando shift(). Devuelve el array modificado.

var array = [1,2,3,4,5,6,7,8,9]

function Eliminar(array) {
    array.unshift(-2,-1,0);
    return array;
}

console.log(Eliminar(array));*/


/*tolowerCase

const palabra = "PROGRAMACION"
const resultado = palabra.toLowerCase()
document.write(resultado)*/


/*padEnd

const palabra = "Programing"
const resul = palabra.padEnd(100,"g")
document.write(resul)*/






/*padStart

const palabra = "Programacion"
const resul = palabra.padStart(20,"P")
console.log(resul);*/



/*Comparación de Cadenas:
a. Compara dos cadenas y determina si 
son iguales utilizando el operador ===.
b. Compara dos cadenas ignorando 
mayúsculas/minúsculas utilizando 
localeCompare().
var nombre = 10
var nombre1 = "10"
console.log(nombre == nombre1);
console.log(nombre === nombre1);
var primer = "Hola "
var segundo = "Qtal"
const resul = primer.concat( segundo)
console.log(resul);*/

/*repeat
const duplicar = "Hola "
const resul = duplicar.repeat(5)
console.log(resul);*/


