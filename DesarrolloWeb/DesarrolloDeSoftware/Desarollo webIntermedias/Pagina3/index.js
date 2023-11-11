/*Pagina de calcular 
porcentaje de un numero*/


function porcentaje() {
    const number = parseInt(document.getElementById("number").value)
    var resultado = number
    document.getElementById("resultado").innerHTML = resultado;
}