/*Crear una clase "Empleado":
Define una clase "Empleado" con 
propiedades para almacenar el nombre, el 
cargo y el salario de un empleado. Incluye 
métodos para obtener y establecer estos 
valores, así como un método para calcular 
el salario anual.*/

class Empleado{
    constructor(nombre,cargo,salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }
    establecer(){
        return `nombre ${this.nombre} cargo ${this.cargo} salario ${this.cargo}`
    }
}

function ObtenerEmpleado() {
    const nombre = document.getElementById("nombre").value;
    const cargo = document.getElementById("cargo").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const mostrar = new Empleado(nombre,cargo,salario);
    const resultado = mostrar.establecer();
    document.getElementById("resultado").textContent = resultado;
}

