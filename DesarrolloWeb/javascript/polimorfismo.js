/*Crea una clase base llamada Vehiculo con un método acelerar() 
que muestre un mensaje genérico de aceleración. Luego, crea
clases derivadas como Automovil, Motocicleta y Bicicleta, 
y sobrescribe el método acelerar() en cada una de ellas 
para mostrar mensajes de aceleración específicos para 
cada tipo de vehículo. Crea instancias de las diferentes
clases y llama al método acelerar() para ver los mensajes 
de aceleración correspondientes.
class Vehiculo{
    acelerar(){
        console.log( `El vehiculo acelera`);
    }
}


class Automovil extends Vehiculo{
    acelerar(){
        console.log(`El automovil tien cuatro llantas`);
    }
}

class Motocicleta extends Vehiculo{
    acelerar(){
        console.log(`La motocicleta tiene dos llantas`);
    }
}

class Bicicleta extends Vehiculo{
    acelerar(){
       console.log(`La bicicleta tiene dos llantas y un color azul`);
    }
}


const vehiculo = new Vehiculo("Vehiculo");
const automovil = new Automovil("Automovil");
const motocicleta = new Motocicleta("Motocicleta");
const bicicleta = new Bicicleta("Bicicleta");

vehiculo.acelerar();
automovil.acelerar();
motocicleta.acelerar();
bicicleta.acelerar();*/


/*Crea una clase base llamada Animal con un método hacerSonido() 
que muestre un sonido genérico. Luego, crea clases derivadas 
como Perro, Gato y Vaca, y sobrescribe el método hacerSonido() 
en cada una de ellas para mostrar el sonido correspondiente a 
cada animal. Crea instancias de las diferentes clases y llama 
al método hacerSonido() para escuchar los sonidos de los diferentes animales.

class Animal{
    hacerSonido(){
        document.write("Los animales hacen sonidos"+"<br>");
    }
}

class Perro extends Animal{
    hacerSonido(){
        document.write("El perro dice Wau.."+"<br>")
    }
}

class Gato extends Animal{
    hacerSonido(){
        document.write("El gato Dice Miau.."+"<br>");
    }
}

class Vaca extends Animal{
    hacerSonido(){
        document.write("La vaca Dice Muuu.."+"<br>");
    }
}

const mostrarA = new Animal("Animal");
const mostrarP = new Perro("Perro");
const mostrarG = new Gato("Gato");
const mostrarV = new Vaca("Vaca");

mostrarA.hacerSonido();

mostrarP.hacerSonido();

mostrarG.hacerSonido();

mostrarV.hacerSonido();*/



/*Crea una clase base llamada Empleado con propiedades como nombre 
y salario y un método obtenerDetalles() que muestre los detalles 
del empleado. Luego, crea clases derivadas como Desarrollador, 
Diseñador y Gerente, y sobrescribe el método obtenerDetalles() 
en cada una de ellas para mostrar detalles específicos para cada 
tipo de empleado. Crea instancias de las diferentes clases y llama 
al método obtenerDetalles() para obtener los detalles correspondientes a cada empleado.

class Empleado{
    obtenerDetaller(){
         document.write("Capaz, Lider,etc");
    }
}

class Desarrollador extends Empleado{
    obtenerDetaller(){
        document.write("Js, C++, FullStack"+"<br>");
   }
}


class Diseñador extends Empleado{
    obtenerDetaller(){
        document.write("Conocimientos de Diseño Photoshop, blender,etc"+"<br>");
   }
}


class Gerente extends Empleado{
    obtenerDetaller(){
        document.write("Disciplinado, Orador"+"<br>");
   }
}


const mostrarE = new Empleado("Empleado");
const mostrarDe = new Desarrollador("Desarollador");
const mostrarDi = new Diseñador("Diseñados");
const mostrarG = new Gerente("Gerente");

mostrarE.obtenerDetaller();
mostrarDe.obtenerDetaller();
mostrarDi.obtenerDetaller();
mostrarG.obtenerDetaller();*/

/*Crea una clase base llamada Producto con propiedades como 
nombre y precio y un método calcularDescuento() que calcule
y devuelva el descuento aplicable al producto. Luego, crea
clases derivadas como Electrónico, Ropa y Libro, y sobrescribe
el método calcularDescuento() en cada una de ellas para aplicar
descuentos específicos para cada tipo de producto. Crea instancias
de las diferentes clases y llama al método calcularDescuento()
para obtener los descuentos correspondientes.

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularDescuento(){
        document.write("....OFERTA DE DESCUENTO...."+"<br>");
    }
}

class Electrónico extends Producto{
    calcularDescuento(){
        document.write(`${this.nombre} tiene una rebaja de 50% y su precio es de ${this.precio}`+"<br>");
    }
}

class Ropa extends Producto{
    calcularDescuento(){
        document.write(`${this.nombre} tiene una rebaja de 10% y su precio es ${this.precio} `+"<br>");
    }
}

class Libro extends Producto{
    calcularDescuento(){
        document.write(`${this.nombre} tiene una rebaja de 15% y su precio es ${this.precio} `+"<br>");
    }
}


const P = new Producto("Producto");
const E = new Electrónico("Celular",1500)
const R = new Ropa("Zapatos",250);
const L = new Libro("La Iliada",6000);

P.calcularDescuento();
E.calcularDescuento();
R.calcularDescuento();
L.calcularDescuento();*/



/*Crea una clase base Persona con un método saludar() que muestre un mensaje 
de saludo genérico. Luego, crea clases derivadas Estudiante, Profesor y Empleado
que sobrescriban el método saludar() para mostrar un mensaje de saludo personalizado 
según el rol de la persona. Crea instancias de cada clase y llama al método saludar()
 en cada una.



class Persona{
    saludar = function(){
        return `Todas las personas no saludan`
    }
}

class Estudiante extends Persona{
    saludar = function(){
        return `La mayoria de los estudiantes no saludan a los maestros`
    }
}

class Profesor extends Persona{
    saludar = function(){
        return `Los maestros Tienen que enseñar a los alumnos a saludar pero mas los padres`
    }
}

class Empleado extends Persona{
    saludar = function(){
        return `Los empleados deben saludar a los clientes `
    }
}



const mostrarP = new Persona();
const mostrarE = new Estudiante();
const mostrarPr = new Profesor();
const mostrarEm = new Empleado();
console.log("A esto se le conoce como Polimorfismo");
console.log(mostrarP.saludar());
console.log(mostrarE.saludar());
console.log(mostrarPr.saludar());
console.log(mostrarEm.saludar());*/



/*Define una clase base Transporte con un método viajar() 
que muestre un mensaje genérico de viaje. Luego, crea 
clases derivadas Avion, Tren y Barco que sobrescriban 
el método viajar() para mostrar un mensaje específico 
de viaje para cada medio de transporte. Crea instancias
 de cada clase y llama al método viajar() en cada una.

class Transporte{//clase padre
    viajar(){ //metodo viajar
        return `Todas las personas viajan a cualquier lado`
    }
}


class Avion extends Transporte{
    viajar(){
        return `Las personas viajan en avion `
    }
}

class Tren extends Transporte{
    viajar(){
        return `Las personas viajan en Tren `
    }
}


class Barco extends Transporte{
    viajar(){
        return `Las personas viajan en Barco`
    }
}

const transporte = new Transporte();
const avion = new Avion();
const tren = new Tren();
const barco = new Barco();

console.log(transporte.viajar()); 
console.log(avion.viajar());
console.log(tren.viajar());
console.log(barco.viajar());*/











/*Crea una clase base Electrodomestico con un método encender() que muestre un 
mensaje genérico de encendido. Luego, crea clases derivadas Lavadora, Televisor
y Refrigerador que sobrescriban el método encender() para mostrar un mensaje 
específico de encendido para cada electrodoméstico. Crea instancias de cada 
clase y llama al método encender() en cada una.

class Electrodomestico{
     encender(){
        return `Elemento encendido`
     }
}

class Lavadora extends Electrodomestico{
    encender(){
        return `La lavadora esta encendida`
    }
}

class Televisor extends Electrodomestico{
    encender(){
        return `El televisor esta encendida`
    }
}

class Refrigerador extends Electrodomestico{
    encender(){
        return `El Refrigerador esta encendida`
    }
}

const electrodoméstico = new Electrodomestico();
const lavadora = new Lavadora();
const televisor = new Televisor();
const refrigerador = new Refrigerador();

console.log(electrodoméstico.encender())
console.log(lavadora.encender())
console.log(televisor.encender())
console.log(refrigerador.encender())*/






/*Crea una clase base llamada "Vehiculo" con un método "moverse" 
que imprima "El vehículo se está moviendo". Luego, crea dos 
subclases: "Auto" y "Bicicleta". Cada subclase debe tener su 
propio método "moverse" que imprima un mensaje específico para 
cada tipo de vehículo. Crea instancias de ambas subclases y llama
 al método "moverse" en cada una.

class Vehiculo{
    moverse (){
        return `El vehiculo se esta moviendo`
    }
}

class Auto extends Vehiculo{
    moverse(){
        return `El auto se esta moviendo`
    }
}

class Bicicleta extends Vehiculo{
    moverse(){
        return `La Bicicleta se esta moviendo`
    }
}

const vehiculo = new Vehiculo("Vehiculo");
const auto = new Auto();
const bicicleta = new Bicicleta()

document.write(vehiculo.moverse())
document.write(auto.moverse())
document.write(bicicleta.moverse())*/



/*Define una clase base llamada "Vehículo" con un método "conducir()". 
Luego, crea clases derivadas como "Coche", "Motocicleta"
que implementen el método "conducir()" de acuerdo con el comportamiento 
específico de cada vehículo.

class Vehiculo{
    conducir (){
        console.log("El Vehiculo se esta conduciendo");
    }
}


class Coche extends Vehiculo{
    conducir(){
        console.log("El coche se esta condiendo");
    }
}

class Motocicleta extends Vehiculo{
    conducir(){
        console.log("La motocicleta se esta condiendo");
    }
}

const coche = new Coche();
coche.conducir();

const motocicleta = new Motocicleta();
motocicleta.conducir();*/


/*Polimorfismo:
a) Crea una clase base llamada "Vehículo" con un método "hacerSonido".
 Luego, crea subclases como "Coche", "Motocicleta" y "Camión" 
 que hereden de la clase "Vehículo" y sobrescriban el método 
 "hacerSonido" con un sonido específico para cada tipo de vehículo.

class Vehiculo{ // clase
    hacerSonido(){
        return `Los vehiculos hacen mucho sonido`
    }
}

class Coche extends Vehiculo{
    hacerSonido(){
        return `Los coches hacen mucho ruido`
    }
}

const mostrarV = new Vehiculo();
const mostrarC = new Coche();
console.log(mostrarV.hacerSonido());
console.log(mostrarC.hacerSonido());*/




/*
b) Implementa una clase llamada "Empleado" con un método "calcularSalario".
 Luego, crea subclases como "Desarrollador" y "Gerente" que hereden
  de la clase "Empleado" y sobrescriban el método "calcularSalario"
   para calcular el salario de acuerdo con las reglas específicas de 
   cada tipo de empleado


class Empleado{
    calcularSalario(){
        return 0;
    }
}

class Desarollador extends Empleado{
    calcularSalario(){
        return 1500;
    }
}
class Gerente extends Empleado{
    calcularSalario(){
        return 2000;
    }
}

const dep = new Desarollador();
const ge = new Gerente();
console.log(dep.calcularSalario());
console.log(ge.calcularSalario());*/











        /**
 * Creates a base class called "Animal" with properties and methods common to all animals.
 * Then, create subclasses like "Dog" and "Cat" that inherit from the "Animal" class and have 
 * additional methods and properties specific to each animal.*/
 

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    informacion() {
        document.write(`Nombre ${this.nombre}`);
        document.write(`Edad ${this.edad}`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    mostrarDatos() {
        this.informacion();
        document.write(`Raza ${this.raza}`);
    }
}

const nombre = prompt("Ingresa nombre Perro");
const edad = parseInt(prompt("Ingresa edad Perro"));
const raza = prompt("Ingresa raza");

const perro = new Perro(nombre, edad, raza);
perro.mostrarDatos();


