function Piedra() {
    var valor = Math.floor(Math.random() * 3);
    var resultado;
    if(valor === 1){
        resultado = "Empate"
    }
    else{
        if(valor === 2){
            resultado = "Computadora Eligio Papel Perdiste"
        }
        else{
            resultado = "Computadora Eligio Tijera Ganaste"
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function Papel() {
    var valor = Math.floor(Math.random() * 3);
    var resultado;
    if(valor === 1){
        resultado = "Computadora Eligio Piedra Ganaste"
    }
    else{
        if(valor === 2){
            resultado = "Empate"
        }
        else{
            resultado = "Computadora Eligio Tijera Perdiste"
        }
    }
    console.log("\n");
    document.getElementById("resultado").innerHTML = resultado;
}

function Tijera() {
    var valor = Math.floor(Math.random() * 3);
    var resultado;
    if(valor === 1){
        resultado = "Computadora Eligio Pierda Perdiste"
    }
    else{
        if(valor === 2){
            resultado = "Computadora Eligio Papel Ganaste"
        }
        else{
            resultado = "Computadora Eligio Tijera Fue Empate"
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}
