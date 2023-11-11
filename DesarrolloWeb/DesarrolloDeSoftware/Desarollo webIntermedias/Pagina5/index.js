class Correo{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    Mostrar(){
        return `Email ${this.email} contraseña ${this.password}`
    }
}

function MostrarCorreo(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mostrar = new Correo(email,password);
    const resultado = mostrar.Mostrar();
    document.getElementById("resultado").textContent = resultado;
}