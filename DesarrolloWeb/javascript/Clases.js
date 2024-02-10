/*Crea una clase llamada Persona que tenga como 
atributos el nombre, la edad y la ocupación de una
persona. Agrega un método para imprimir la información de la persona en la consola.

class Persona{
    constructor(nombre,edad){
        this.edad = edad;
        this.nombre = nombre;
    }
    presentacion(){
        console.log(`Hi my name is ${this.nombre} y mi edad es ${this.edad}`)
    }
}

var MiPersona = new Persona("David",25);

MiPersona.presentacion()*/

/*Crea una clase llamada Calculadora que tenga dos 
métodos: sumar y restar. Estos métodos deben recibir dos 
números como argumentos y devolver el resultado de la suma o la resta, respectivamente.

class Calculadora{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    sumar(){
        return `La suma es: ${this.a+this.b}`;
    }

    restar(){
        return `La resta es: ${this.a-this.b}`;
    }
}


var Calcular = new Calculadora(30,5);

console.log(Calcular.sumar())
console.log(Calcular.restar())*/

/*Crea una clase llamada Libro que tenga como atributos
el título, el autor y el número de páginas de un libro.
Agrega un método para imprimir la información del libro en la consola.

class Libro{
  constructor(titulo,autor,Npaginas){
    this.titulo = titulo;
    this.autor = autor;
    this.Npaginas = Npaginas;
  }
  imprimir(){
    console.log(`EL libro se llama ${this.titulo} y el nombre de autor es ${this.autor} con un num de paginas ${this.Npaginas}`)
  }
}

var librito = new Libro("La Odisea","Homero",125);

librito.imprimir()*/

/*Crea una clase Persona que tenga dos propiedades:
 nombre y edad. Luego, crea una instancia de Persona
  con el nombre "Juan" y la edad 30.

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

var Person = new Persona("juan",30);

console.log(Person.nombre)
console.log(Person.edad)*/

/*Crea una clase Animal que tenga una propiedad especie.
Luego, crea una subclase Perro que herede de la clase
Animal y tenga una propiedad adicional llamada raza.
Crea una instancia de Perro con la especie "Canino" y la raza "Labrador".

class Animal{
    constructor(especie){
        this.especie = especie;
    }
}


class Perro extends Animal{
    constructor(){

    }
}
//////////////////////////////////PENDIENTE
*/

/*Crea una clase Cuenta que tenga una propiedad saldo.
 Luego, crea dos métodos en la clase Cuenta llamados
  depositar() y retirar() que acepten un valor como
   argumento y actualicen el saldo en consecuencia.
    Crea una instancia de Cuenta con un saldo inicial 
    de 100, deposita 50 y luego retira 25, y finalmente muestra el saldo resultante.

class Cuenta{
    constructor(saldo){
        this.saldo = saldo;
    }
    depositar(){
        return this.saldo = 50;
    }

    retirar(){
        return this.saldo = 25;
    }
}

var ver = new Cuenta(100+(50-25));

console.log("saldo actual es "+`Saldo total es ${ver.saldo}`)*/

/*Crea una clase Persona que tenga tres propiedades: 
nombre, edad y sexo. Luego, crea un método en la clase Persona
llamado presentarse() que imprima un mensaje que incluya su nombre,
edad y sexo. Crea una instancia de Persona con el nombre "María",
la edad 25 y el sexo "Femenino", y llama al método presentarse()

class Persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre ;
        this.edad = edad;
        this.sexo = sexo;
    }
    presentarse(){
        console.log(`My name es ${this.nombre} y tengo ${this.edad} anios y mi sexo es ${this.sexo}`)
    }

}

var ver = new Persona("Maria",25,"femenino");

ver.presentarse()*/

/*Crea una clase "Persona" con dos propiedades: "nombre"
y "edad". Crea un método llamado "saludar" que imprima
un mensaje de saludo que incluya el nombre de la persona y su edad.

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar = function(){
        console.log(`Hola mucho gusto me llamo ${this.nombre} y tengo ${this.edad} anios`)
    }
}

const Saludito = new Persona("Elisabeth",25);

Saludito.saludar()*/

/*Crea una clase "Coche" con dos propiedades: "modelo"
y "marca". Crea un método llamado "informacion" que
imprima un mensaje con la información del coche (marca y modelo).

class Coche{
    constructor(modelo,marca){
        this.modelo = modelo
        this.marca = marca
    }
    informacion = function(){
        return `Tengo un auto modelo ${this.modelo} y la marca es ${this.marca}`
    }
}

var Auto = new Coche("Sail","CHEVROLET");

console.log(Auto.informacion())*/

/*ParImpar
class ParImpar {
    constructor(num) {
      this.num = num;
      this.esPar = function() {
        return this.num % 2 === 0;
      };
      this.esImpar = function() {
        return !this.esPar();
      };
    }
  }
  
  let n = new ParImpar(8);
  console.log(n.esPar());  // false*/

/*elaborar un programa poo que nos permita almacenar ci y nombre de una persona 

class Persona{
    constructor(ci,nombre){
        this.ci = ci;
        this.nombre = nombre;
    }
    MostrarDatos = function(){
        console.log(`Hola me llamo ${this.nombre} y mi dni es ${this.ci}`)
    }
}

var Humano = new Persona(8519137,"David");


Humano.MostrarDatos();*/

/*Crea una clase Estudiante que herede de la clase 
Persona. Agrega una propiedad carrera y un método
estudiar que imprima en la consola un mensaje indicando que el estudiante está estudiando.

class Estudiante{
    constructor(carrera){
        this.carrera = carrera;
    }
    estudiar(){
        return `Hl soy David y estudio en ${this.carrera}`;
    }
    get(){
        return this.carrera
    }
    set(nuevacarrera){
        return this.carrera = nuevacarrera;
    }
}

const p = new Estudiante("Ing Ciencias de la computacion");

console.log(p.estudiar()); */

/* Suma de los pares e impares de 1 a N
class ParImpar{
    constructor(n){
        this.n = n;
    }
    Par(){
        var suma=0
        for(var i=1;i<=this.n;i++){
            if(i%2==0){
                suma+=i    
            }
        }console.log("La suma de los pares es:"+suma)
    }
    Impar(){
        var suma=0
        for(var i=1;i<=this.n;i++){
            if(i%2==1){ 
                suma+=i;
            }
        }console.log("La suma de los impares es:"+suma)
    }
}

const p = new ParImpar(5);

p.Par()
p.Impar()*/

/*Crea una clase "Persona" con las 
siguientes propiedades:

nombre (string)
edad (number)
género (string)
ocupación (string)
La clase debe tener un método llamado
"presentarse" que imprima en consola 
una frase que incluya el nombre y la
ocupación de la persona.

class Persona{
    constructor(nombre,edad,genero,ocupacion){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.ocupacion =ocupacion;
    }
    presentarse(){
        return `Soy ${this.nombre} tengo ${this.edad} años, soy de genero ${this.genero} y tengo una ocupacion de ${this.ocupacion}`
    }
}

const p = new Persona("David",25,"Masculino","Full_Stack");

console.log(p.presentarse())*/

/*Crea una clase llamada Animal con 
propiedades como nombre y edad, y 
métodos como comer y dormir.

class Animal{//clases animal
    constructor(nombre,edad){//constructor con  
        this.nombre = nombre;
        this.edad = edad; 
    }
    comer = function(){ //metodos
        return `Soy ${this.nombre} tengo ${this.edad} y estoy comiendo `
    }

    dormir = function () {//metodos
        return `y estoy comiendo`
    }
}

const mostrar = new Animal("David",25);
console.log(mostrar.comer());
console.log(mostrar.dormir());

*/

/*Implementar una clase llamada Student con propiedades para almacenar el nombre y las 
calificaciones de un estudiante. Agregar métodos para calcular el promedio de las 
calificaciones y determinar si el estudiante está aprobado o no (promedio mayor o igual a 6).

class Estudiante{
    constructor(nombre,calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    mostrar(){
        document.write(`Nombre de estudiante ${this.nombre}`+"<br>")
    }
    calcular() {
        if (this.calificacion >= 6) {
          document.write("Usted está aprobado");
        } else {
          document.write("Usted está reprobado");
        }
      }
      
}


const nam = prompt("Ingresa tu nombre");
const califi = parseInt(prompt("Ingresa tu calificacion"));

const estudiante = new Estudiante(nam, califi);

estudiante.mostrar();
estudiante.calcular();  */

/*Crear una clase llamada Car que tenga propiedades para almacenar la marca, 
el modelo y el año de fabricación de un automóvil. Agregar métodos para 
obtener y establecer estos valores, así como un método para calcular la 
antigüedad del automóvil.

class Car{
    constructor(marca,modelo,anio){
        this.marca= marca;
        this.modelo = modelo;
        this.anio = anio; 
    }
    establecer(){
        document.write(`El modelo es ${this.modelo}`+"<br>")
        document.write(`La marca es ${this.marca}`+"<br>")
        document.write(`Hoy cumple los ${this.anio} de creacion`+"<br>")
    }
}


const marc = prompt("Ingresa la Marca");
const model = prompt("Ingresa El modelo");
const año = prompt("Ingresa El anio");

const car = new Car(marc,model,Math.abs(año-2023));

car.establecer();*/

/*Crear una clase llamada "Calculadora" que tenga métodos para 
sumar, restar, multiplicar y dividir dos números.

class Calculadora{
    constructor(a,b){
        this.a = a;
        this.b = b; 
    }
    suma(){
        return this.a+this.b
    }
    resta(){
        return this.a-this.b
    }
    mul(){
        return this.a*this.b
    }
    div(){
        return this.a/this.b
    }
}


const n1 = parseInt(prompt("Ingresa 1er numero: "))
const n2 = parseInt(prompt("Ingresa 2do numero: "))

const calculadora = new Calculadora(n1,n2);

document.write(calculadora.suma()+"<br>")
document.write(calculadora.resta()+"<br>")
document.write(calculadora.mul()+"<br>");
document.write(calculadora.div()+"<br>"); */

/*Crea una clase llamada "BankAccount" que tenga propiedades para 
almacenar el número de cuenta y el saldo de una cuenta bancaria. 
Añade métodos para depositar dinero, retirar dinero y obtener el saldo actual.

class Banco {
  constructor(dinero, retiro, saldo) {
    this.dinero = dinero;
    this.retiro = retiro;
    this.saldo = saldo;
  }
  depositar() {
    return `Dinero ${this.dinero}`;
  }
  retirar() {
    return `El monto retirado es ${this.retiro}`;
  }
  saldoActual() {
    return `El saldo actual de tu cuenta es de ${(this.saldo =
      this.dinero - this.retiro)}`;
  }
}

const money = parseInt(prompt("Ingresa el monto de dinero que tienes: "));
const retir = parseInt(prompt("Ingresa el monto a Retirar: "));

const banco = new Banco(money, retir);

document.write(banco.depositar() + "<br>");
document.write(banco.retirar() + "<br>");
document.write(banco.saldoActual() + "<br>");*/

/*Crea una clase llamada ListaNumeros con un constructor que inicialice 
un array de números. La clase debe tener un método buscarNumero que 
reciba un valor y utilice el método includes para verificar si el 
número está presente en la lista. El método debe devolver true si 
el número está presente y false en caso contrario.

class ListaNumeros {
    constructor(array) {
        this.array = array;
    }

    datos() {
        return `Los datos son ${this.array}`;
    }

    mostrar(buscar) {
        return `Si se buscó o no ${buscar}`;
    }
}

var mostrar = new ListaNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(mostrar.datos());

const buscar = mostrar.array.includes(11);
console.log(mostrar.mostrar(buscar));*/

/*Crear una clase "Rectángulo" con propiedades de ancho y alto. Agrega 
métodos para calcular el área y el perímetro del rectángulo.

class Rectángulo{
    constructor(ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    CalcularArea(){
        return this.ancho*this.alto;
    }
}

const mostrar = new Rectángulo(5,8);
console.log(mostrar.CalcularArea());*/

/*Crear una Clase de Vehículo:
Define una clase Vehiculo con 
propiedades como tipo 
(automóvil, motocicleta, etc.) 
y velocidadMaxima. 
Implementa un método para verificar 
si un vehículo
 está excediendo la velocidad 
 máxima permitida.

class Vehiculo{
    constructor(velocidad){
        this.velocidad = velocidad
    }
    mostrar(){
        if(this.velocidad >=500){
            console.log("Usted esta rompiendo la velociadad");
        }
        else{
            console.log("Su velocidad es: "+this.velocidad);
        }
    }
}

const datos = new Vehiculo(800);
datos.mostrar()*/

/*Sistema de Gestión de Usuarios:
Crea una clase Usuario con propiedades 
como nombre, edad y tipo (normal, 
premium, admin). Implementa un 
método para verificar si un usuario 
tiene acceso a ciertas funciones 
según su tipo.


class Usuario{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    verificar(){
        console.log(this.nombre);
        if(this.edad < 18){
            console.log("No Puedes acceder eres menor de edad");
        }
        else{
            console.log("Puedes acceder");
        }
    }
}

const ver = new Usuario("David",18)
ver.verificar()*/

/*Gestión de Productos Crea una clase 
Producto con propiedades como nombre, 
precio y stock. Implementa métodos para 
agregar productos al inventario, 
calcular el valor total de los productos 
y verificar si un producto está agotado.

class Producto{
    constructor(stock){
        //this.nombre = nombre;
        ///this.precio = precio;
        this.stock = stock;
    }
    MostrarProducto(){
        if(this.stock <= 0){
            console.log("Tus productos estan agotados");
        }
        else{
            console.log("tienes Productos totales "+this.stock);
        }
    }
}

const verificar = new Producto(40);
verificar.MostrarProducto();
*/

/*Crea una clase llamada Persona que tenga propiedades como 
nombre, edad y método para imprimir información básica de la persona. 

class Persona {
  //creacion de la clase persona
  constructor(name, age) {
    //constructor con los atributos name and age
    this.name = name;
    this.age = age;
  }
  info() {
    //metod
    return ` Name is: ${this.name} Age is : ${this.age}`;
  }
}

const Instance = new Persona("David", 25);

console.log(Instance.info());*/

/*
Ejercicio 2: Herencia de Clases
Crea una clase base llamada Vehiculo con propiedades como
 marca y modelo. Luego, crea una clase derivada llamada 
 Automovil que herede de la clase Vehiculo y tenga propiedades 
 adicionales como número de puertas. */


class Vehiculo{
	constructor(marca,modelo){
		this.marca = marca
		this.modelo = modelo
	}
}

class Automovil extends Vehiculo{
	constructor(marca,modelo,color){
		super(marca,modelo)
			this.color = color
	}
	info(){
		return `Marca : ${this.marca} Model ${this.modelo} Color ${this.color}`
	}
}

const loca = new Automovil("Audi","Honda","Red");
console.log(loca.info());