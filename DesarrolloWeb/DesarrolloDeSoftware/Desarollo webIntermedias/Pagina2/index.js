function informacion() {
    nombre = document.getElementById("nombre").value
    email = document.getElementById("email").value;
    edad = parseInt(document.getElementById("edad").value)
    var resultado = nombre  + " "+ email + " "+edad;
    document.getElementById("resultado").textContent = "Tus Datos es: "+resultado;
}