/*class Animal{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludo(){
        console.log(`Hola hoy ${this.nombre} tengo ${edad} anios y soy del sexo ${this.sexo}`)
    }
}

class Perro extends Animal{
    despedida(){
        console.log(`Hola me despido atte.. ${this.nombre}`)
    }
}


const Perrin = new Perro("Cachuchin",10,"Macho" );

Perrin.despedida();*/


/*
programa donde si se ingrese 2 nums ejm 4 y 5 si son consecutivos ascendentes
5 y 4 descendentes

*/


/*class Consecutivos{////////////////////falta acabar//////////////////////////////
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    Ascendentes (){
        if(this.a<this.b && this.a+=thi 1){
            console.log("ascendente")
        }else{
            console.log("ascendente pero no consecutivos")
        }
    }
    Descendentes (){
        if(this.a>this.b || this.b==this.a-1){
            console.log("descendente")
        }else{
            console.log("descendente pero no consecutivo")
        }
    }
}



const p = new Consecutivos(1,10); 
p.Ascendentes(); */



/* clase comida con atributos de id
nombre, y color con subclase galleta 
sea color*/
/*con extens y y super 
class Comida{
    constructor(id,nombre,color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }
    Nombrar = function(){
        return `Comida con id ${this.id} y con nombre de ${this.nombre} y de color ${this.color}`
    }
}



class Galleta extends Comida{
    constructor(id,nombre,color,sabor){
        super(id,nombre,color);
        this.sabor = sabor;
    }
    Renombrar = function(){
        return `Id de la comida es ${this.id} el nombre es ${this.nombre} el color es ${this.color} y el sabor es ${this.sabor}`
    }
}



Pipoca = new  Comida(987654,"Pique","blanco");

console.log(Pipoca.Nombrar())

Oreo  = new Galleta(987654,"Oreo","Negro","Delicioso");
console.log(Oreo.Renombrar())*/

/*Crea una clase Vehiculo con un método mover() que imprima
"El vehículo se está moviendo". Luego, crea una subclase
Coche que herede de Vehiculo y sobrescribe el método mover()
para imprimir "El coche se está moviendo"

class Vehiculo{
    mover(){
        return `El vehiculo negro se esta moviendo`
    }
}

class Coche extends Vehiculo{
    mover(){
        return `El vehiculo color Negro esta moviendo a una velocidad de 50 km por hr`
    }
}



Autos = new Vehiculo();

Auto = new Coche();

console.log(Autos.mover())*/

/*Crea una clase Persona con propiedades nombre y edad.
Luego, crea una subclase Estudiante que herede de Persona
y tenga una propiedad adicional grado.


class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    Mostrar(){
        return `Hola soy ${this.nombre} tengo ${this.edad}`
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado= grado;
    }
    Remostrar(){
        return `Hola soy ${this.nombre} tengo ${this.edad} y estoy en grado ${this.grado}to`
    }
}



muestra  = new Persona("David",25,6);

nombrar = new Estudiante("David",25,6);

document.write(nombrar.Remostrar())*/

/*Crea una clase Mascota con propiedades
nombre y edad. Luego, crea una subclase
Perro que herede de Mascota y tenga una
propiedad adicional raza.

class Mascota{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }
    Detalle(){
        return `Soy son ${this.nombre} y tengo ${this.edad} años`
    }
}

class Perro extends Mascota{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this.raza = raza;
    }
    Subclase(){
        return `Soy son ${this.nombre} y tengo ${this.edad} años y soy de raza ${this.raza}`
    }
}


Mostrar = new Mascota("Tawatawa",5);


Mostrarr = new Perro("Cachuchin",5,"Dog");

document.write(Mostrarr.Subclase());*/


/*
Crea una clase "Animal" con los siguientes atributos:
nombre, edad, peso y especie. Luego, crea dos clases
derivadas: "Perro" y "Gato". Cada una de estas clases
debe tener su propio método para imprimir la información
de un animal (por ejemplo, "ImprimirPerro" y "ImprimirGato").
 
//extends y super

class Animal{//clase
    constructor(nombre,edad,peso,especie){//atributos 
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.expecie = especie;
    }
}

class Perro extends Animal{
    constructor(nombre,edad,peso,expecie,raza){
        super(nombre,edad,peso,expecie);
        this.raza = raza;
    }
    ImprimerPerro(){
        return `Nombre del perro es ${this.nombre} edad es ${this.edad} pesa unos ${this.peso} kg su especie es ${this.expecie} y de raza ${this.raza}`
    }
}


class Gato extends Animal{
    constructor(nombre,edad,peso,expecie,raza){
        super(nombre,edad,peso,expecie);
        this.raza = raza;
    }
    ImprimerGato(){
        return `Nombre del perro es ${this.nombre} edad es ${this.edad} pesa unos ${this.peso} kg su especie es ${this.expecie} y de raza ${this.raza}`
    }
}

const Perrito = new Perro("Cachuchin",5,20,"Can","Doberman");

const Gatito = new Gato("Pochita",3,10,"Felino","Flin");

console.log(Gatito.ImprimerGato())*/

/*
Crea una clase Persona que tenga propiedades
nombre y edad, y un método saludar que imprima 
"Hola, mi nombre es [nombre] y tengo [edad] años". 
Luego, crea una subclase, Estudiante, que herede de 
Persona y tenga una propiedad carrera y un método 
estudiar que imprima "Estoy estudiando [carrera]"

class Persona{//clase padre
    constructor(nombre,edad){//stributos y constructor
        this.nombre=nombre;//llamamos a los atributos nombre y edad
        this.edad = edad;
    }
    Saludar(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

class Estudiante extends Persona{//clase hija
    constructor(nombre,edad,carrera){
        super(nombre,edad);
        this.carrera = carrera;
    }
    Estudiar(){
        return `Estoy estudiante ${this.carrera} mi nombre es ${this.nombre} y tengo la edad de ${this.edad}`
    }
}




P = new Estudiante("David",25,"IngCienciasComputacionales");

document.write(P.Estudiar())*/

/*Crea una clase Vehiculo que tenga una propiedad velocidad y un método
acelerar que aumente la velocidad en 10. Luego, crea dos subclases,
Auto y Camion, que hereden de Vehiculo y sobrescriban el método de
acelerar para aumentar la velocidad en 20.

class Vehiculo{
    constructor(velocidad){
        this.velocidad = velocidad;
    }
    Acelerar(){
        document.write(`La velocidad del vehiculo es de ${this.velocidad} km por hr`);
    }
}

class Auto extends Vehiculo{
    constructor(velocidad,color){
        super(velocidad,color);
        this.color = color;
    }
    Mostrar(){
        document.write(`La velocidad del vehiculo es de ${this.velocidad} km por hr Y el color es ${this.color}`);
    }
}

class Camion extends Vehiculo{
    constructor(velocidad,peso){
        super(velocidad,peso);
        this.peso = peso;
    }
    Muestra(){
        document.write(`La velocidad del vehiculo es de ${this.velocidad} km por hr y el peso es ${this.peso} toneladas`);        
    }
}



P = new Camion(200,300);
P.Muestra();*/

/*Crea una clase "Persona" que tenga los siguientes atributos:
nombre (string)
edad (number)
género (string)
Crea una subclase de "Persona" llamada "Empleado" que tenga los siguientes atributos adicionales:

puesto (string)
salario (number)
Crea una instancia de la clase "Empleado" y asigna valores a sus propiedades.
Lu ego, llama al método "presentarse" de la clase "Persona" para imprimir
en consola una frase que incluya el nombre, la edad, el género y el puesto del empleado.


class Persona{//clase Padre
    constructor(nombre,edad,genero){//constructor con sus atributos..
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

class Empleado extends Persona{ //clase hija
    constructor(nombre,edad,genero,puesto,salario){
        super(nombre,edad,genero);
        this.puesto = puesto;
        this.salario = salario;
    }
    presentarse(){
        console.log("Hola me llamo "+this.nombre);
        console.log("Tengo  "+this.edad+" años");
        console.log("Soy de el Genero "+this.genero);
        console.log("tengo un puesto de "+this.puesto);
        console.log("Mi salario es de  "+this.salario+" $");
    }
}

const ver = new Empleado("David",25,"MachoMen","Full_Stack",100*1000);
ver.presentarse();*/



/*Crea una clase "Persona" que tenga los siguientes atributos:

nombre (string)
edad (number) 
Crea una subclase de "Persona" llamada "Estudiante" que tenga los siguientes atributos adicionales:

carrera (string)
universidad (string)
Crea una instancia de la clase "Estudiante" y asigna valores a sus propiedades. Luego,
llama al método "presentarse" de la clase "Persona" para imprimir en consola una frase 
que incluya el nombre, la edad, la carrera y la universidad del estudiante.


class Persona{
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Estudiante extends Persona{
  constructor(nombre,edad,carrera,universidad){
    super(nombre,edad);
    this.carrera = carrera;
    this.universidad = universidad;
  }
  presentarse = function(){
    document.write(`Nombre ${this.nombre}</br>`);
    document.write(`edad ${this.edad}</br>`);
    document.write(`carrera ${this.carrera}</br>`);
    document.write(`Facultad ${this.universidad}</br>`);
  }
}


const Mostrar = new Estudiante("David",25,"Informatica","Usfx");

Mostrar.presentarse()*/



/*Crea una clase base llamada "Vehiculo" que tenga las propiedades 
"marca" y "año". Luego, crea subclases para diferentes tipos de 
vehículos, como "Auto" y "Camión". Cada subclase debe tener propiedades
adicionales relevantes para ese tipo de vehículo y un método para 
mostrar su información. Crea instancias de las subclases y muestra en 
la consola su información.


class Vehiculo{
    constructor(marca,año){
        this.marca = marca;
        this.año = año;
    }
}

class Auto extends Vehiculo{
    constructor(marca,año,color){
        super(marca,año);
        this.color = color;
    }
    mostrar(){
        return `Marca ${this.marca} año ${this.año} color ${this.color}`
    }
}


class Camion extends Vehiculo{
    constructor(marca,año,peso){
        super(marca,año);
        this.peso = peso;
    }
    mostrar(){
        return `Marca ${this.marca} año ${this.año} Peso ${this.peso} toneladas`
    }
}




const Marca = prompt("Ingresa Marca Auto")
const Año = prompt("Ingresa año Auto")
const Color = prompt("Ingresa El color Auto")

const MarcaC = prompt("Ingresa Marca Camion")
const AñoC = prompt("Ingresa año Camion")
const pesoC = prompt("Ingresa El Peso Camion")





const mostrarV = new Auto(Marca,Año,Color);
const mostrarC = new Camion(Marca,Año,pesoC);
document.write(mostrarV.mostrar())
document.write(mostrarC.mostrar())*/


/********************
/*Crea una clase base llamada Persona con las propiedades  nombre 
y edad. Implementa los métodos getNombre() y setNombre() para acceder y 
modificar el nombre de la persona, y los métodos getEdad() y setEdad() 
para acceder y modificar la edad.
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre(){
        return this.nombre
    }
    setNombre(newname){
        this.nombre = newname
    }
    getedad(){
        return this.edad;
    }
    setedad(newage){
        if(this.edad >=0){
            this.edad = newage;
        }
        else{
            console.error("Muy mal")
        }
    }
}*/


/*Crea una subclase llamada Estudiante que herede de Persona. Agrega una 
propiedad adicional llamada carrera a la clase Estudiante. Implementa 
los métodos getCarrera() y setCarrera() para acceder y modificar la 
carrera del estudiante.

class Estudiante extends Persona{
    constructor(nombre,edad,carrera){
        super(nombre,edad);
        this.carrera = carrera;
    }
    getCarrera(){
        return this.carrera;
    }
    setCarrera(newcarrera){
        this.carrera = newcarrera;
    }
}*/

/*Crea una instancia de la clase Estudiante llamada miEstudiante y 
establece su nombre utilizando el método setNombre(). Luego, 
imprime el nombre del estudiante utilizando el método getNombre().

const miEstudiante = new Estudiante("David",25,"Informatica");
console.log(miEstudiante.getNombre());
console.log(miEstudiante.getedad());
console.log(miEstudiante.getCarrera());

miEstudiante.setNombre("Jose")
miEstudiante.setedad(26)
miEstudiante.setCarrera("IngCienciasComputacionales")
console.log(miEstudiante.getNombre());
console.log(miEstudiante.getedad());
console.log(miEstudiante.getCarrera());*/


/*Modifica el método setEdad() de la clase Persona para que verifique 
si la edad proporcionada es un número positivo. Si la edad no es 
válida, muestra un mensaje de error y no modifiques la propiedad edad.*/

/*HECHO*/


/*Crea una clase llamada Profesor que herede de Persona. Agrega una 
propiedad adicional llamada especialidad a la clase Profesor.
Implementa los métodos getEspecialidad() y setEspecialidad() 
para acceder y modificar la especialidad del profesor.
class Profesor extends Persona{
    constructor(nombre,edad,especialidad){
        super(nombre,edad);
        this.especialidad = especialidad;
    }
    getEspecialidad(){
        return this.especialidad;
    }
    setEspecialidad(newespecialidad){
        if (this.especialidad !== '') {
            this.especialidad = newespecialidad;
          } 
        else{
            console.error("Error.......")
        }
    }
}*/



/*Crea una instancia de la clase Profesor llamada miProfesor y 
establece su especialidad utilizando el método setEspecialidad().
Luego, imprime la especialidad del profesor utilizando el método 
getEspecialidad().

const miProfesor = new Profesor("Judas",40,"Desarollo Web");
console.log("Datos De Profesor ");
console.log(miProfesor.getNombre());
console.log(miProfesor.getedad());
console.log(miProfesor.getEspecialidad());

miProfesor.setNombre("Iscatiote");
miProfesor.setedad(45);
miProfesor.setEspecialidad("IngCienciasDeLaComputacion");
console.log("Datos De Profesor Actualizados");
console.log(miProfesor.getNombre());
console.log(miProfesor.getedad());
console.log(miProfesor.getEspecialidad());

Modifica el método setEspecialidad() de la clase Profesor para 
que verifique si la especialidad proporcionada no está vacía.
Si la especialidad es inválida, muestra un mensaje de error 
y no modifiques la propiedad especialidad.*/





/*Herencia de Vehículos: Define una clase 
base Vehiculo con propiedades como marca
y modelo. Luego, crea subclases como 
Auto y Motocicleta que hereden de 
Vehiculo y tengan propiedades 
adicionales.

class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo
    }
}

class Auto extends Vehiculo{
    constructor(marca,modelo,color){
        super(marca,modelo);
        this.color = color;
    }
    VerAuto(){
        return `Marca ${this.marca} modelo ${this.modelo} color ${this.color} son los datos del auto` // template literals
    }
}

class Motocicleta extends Vehiculo{
    constructor(marca,modelo,cilindrada){
        super(marca,modelo);
        this.cilindrada = cilindrada
    }
    VerMotocicleta(){
        return `Marca ${this.marca} modelo ${this.modelo} cilindrad ${this.cilindrada} son los datos de la motocicleta` // template literals
    }
}


const MostrarAuto = new Auto("Honda","Suzuki","Black");
const MostrarMotocicleta = new Motocicleta("Hilon","Tesla","Red");

console.log(MostrarAuto.VerAuto());
console.log(MostrarMotocicleta.VerMotocicleta());
*/


/*Herencia de Formas de Pago: Define una 
clase base FormaPago con propiedades como
metodo y monto. Luego, crea subclases 
como TarjetaCredito y PayPal que hereden 
de FormaPago y tengan propiedades y 
métodos específicos.

class FormaPago{
    constructor(monto){
        this.monto = monto;
    }
}

class TarjetaCredito extends FormaPago{
    constructor(monto,codigo){
        super(monto);
        this.codigo = codigo;
    }
}

class PayPal extends FormaPago{
    constructor(monto,numeroTransferencia){
        super(monto);
        this.numeroTransferencia = numeroTransferencia;
    }
}

const MostrarTarjeta = new TarjetaCredito(50000,8519137);
console.log(MostrarTarjeta);

const MostrarPaypal = new PayPal(10000,15963214567);
console.log(MostrarPaypal);*/


class Perro{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    Metod (){
        return `${this.nombre} ${this.edad}`
    }
}

const objeto = new Perro("Douglas",25)

console.log(objeto.Metod());