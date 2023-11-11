function datos() {
    const name = document.getElementById("name").value;
    const apellido = document.getElementById("apellido").value
    const edad = document.getElementById("edad").value
    const valor = 1998;
    const resul = valor-edad; 
    const resultado = name +" "+ apellido;
    document.getElementById("resultado").innerHTML = resultado + "Tu año de nacimiento es: "+ resul;
}
