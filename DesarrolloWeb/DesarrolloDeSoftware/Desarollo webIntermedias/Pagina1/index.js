function informacion() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const resultado = nombre + " "+apellido+" "+email+" "+contraseña;
    document.getElementById("resultado").textContent = resultado;
}