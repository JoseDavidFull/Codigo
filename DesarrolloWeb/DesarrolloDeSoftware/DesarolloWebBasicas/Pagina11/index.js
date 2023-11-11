/*Calculadora Simple: Crea una 
calculadora que permita realizar 
operaciones básicas como suma, 
resta, multiplicación y división.
 Debe tener un campo de entrada 
 para los números y botones para 
 cada operación.*/


function Suma() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const resultado = a+b;
    document.getElementById("resultado").innerHTML = resultado;
}

function Resta() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const resultado = a-b;
    document.getElementById("resultado").innerHTML = resultado;
}

function Multiplicación() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const resultado = a*b;
    document.getElementById("resultado").innerHTML = resultado;
}

function División() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const resultado = a/b;
    document.getElementById("resultado").innerHTML = resultado;
}

