function Mostrar() {
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    const Resultado = correo + " "+ contraseña;
    document.getElementById("Resultado").textContent = Resultado;
}