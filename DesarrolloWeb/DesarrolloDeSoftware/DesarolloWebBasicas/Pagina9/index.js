function Informacion() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const resultado = name + " " + email + " " + numero;
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("numero").innerHTML = numero;
}