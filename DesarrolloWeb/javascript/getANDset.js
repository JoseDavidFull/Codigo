/*Crea una clase Persona con las propiedades nombre, edad y genero que tengan valores predeterminados de null.

Agrega un método get llamado nombre que devuelva el valor actual del nombre de la persona.

Agrega un método set llamado nombre que acepte un parámetro y lo use para establecer el valor del nombre de la persona.

Agrega un método get llamado edad que devuelva el valor actual de la edad de la persona.

Agrega un método set llamado edad que acepte un parámetro y lo use para establecer el valor de la edad de la persona. Asegúrate de que la nueva edad sea un número positivo.

Agrega un método get llamado genero que devuelva el valor actual del género de la persona.

Agrega un método set llamado genero que acepte un parámetro y lo use para establecer el valor del género de la persona.

Crea un nuevo objeto Persona y utiliza los métodos get y set para acceder y modificar su nombre, edad y género.

class Persona{
    constructor(nombre,edad,genero){
        this._nombre = nombre; 
        this._edad = edad;
        this._genero = genero;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(NuevoNombre){
        return this._nombre = NuevoNombre;
    }
    get edad(){
        return this._nombre
    }
    set edad(NuevoEdad){
        return this._edad = NuevoEdad;
    }
    get genero(){
        return this._genero;
    }
    set genero(NuevoGenero){
        return this._genero = NuevoGenero;
    }
    Saludar=function(){
        return `Hola mucho gusto me llamo ${this._nombre} tengo ${this._edad} anios y mi genero es ${this._genero}`
    }
}

var p = new Persona("David",24,"Masculino");

console.log(p.Saludar())*/


//Crea una clase persona con las 
//siguientes propiedades: nombre y edad. 
//Luego, utiliza los métodos get y set para 
//obtener y actualizar la edad de la persona.
/*
class Persona{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(Nuevonombre){
        return this.nombre = Nuevonombre;
    }
    get edad(){
        return this._edad;
    }
    set edad(Nuevoedad){
        return this.edad = Nuevoedad;
    }
    saludo(){
        console.log(`Hola mucho gusto me llamo ${this.nombre} y tengo ${this.edad} anios`)
    }
}

const p = new Persona("Elisabeth",23);

p.saludo()*/

/*Crea una clase cuenta bancaria con las siguientes
propiedades: número de cuenta y saldo. Luego,
utiliza los métodos get y set para obtener y
actualizar el saldo de la cuenta.

class CuentaBanco{
    constructor(Ncuenta,Saldo){
        this._Ncuenta = Ncuenta;
        this._Saldo = Saldo;
    }
    get(){
        return this._Ncuenta
    }
    set(NuevoNumeroCuenta){
        return this._Ncuenta = NuevoNumeroCuenta
    }
    get(){
        return this._Ncuenta
    }
    set(NuevoSaldo){
        return this._Saldo = NuevoSaldo
    }
    Consulta(){
        console.log(`Hl soy David y mi numero de cuenta es: ${this._Ncuenta} y mi saldo es: ${this._Saldo}`)
    }
}

const p = new CuentaBanco(8519137,4000);

p.Consulta();*/


/*Crea una clase Vehiculo con las propiedades marca, modelo, año y precio
y los métodos getMarca(), setMarca(), getModelo(), setModelo(), getAño(),
setAño(), getPrecio() y setPrecio(). Luego, crea una clase Coche que
herede de Vehiculo y tenga la propiedad adicional numeroPuertas y los
métodos getNumeroPuertas() y setNumeroPuertas().

class Vehiculo{
  constructor(marca,modelo,anio,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.precio = precio;
  }
  getMarca(){
    return this.marca
  }
  setMarca(nuevaMarca){
    return this.marca = nuevaMarca;
  }
  getModelo(){
    return this.modelo;
  }
  setModelo(nuevoModelo){
    return this.modelo = nuevoModelo;
  }
  getAnio(){
    return this.anio;
  }
  setAnio(nuevoAnio){
    return this.anio = nuevoAnio;
  }
  getPrecio(){
    return this.precio
  }
  setPrecio(nuevoPrecio){
    return this.precio = nuevoPrecio;
  }
}

class Coche extends Vehiculo{
  constructor(marca,modelo,anio,precio,numeroPuertas){
    super(marca,modelo,anio,precio);
    this.numeroPuertas = numeroPuertas;
  }
  getNumeroPuertas(){
    return this.numeroPuertas
  }
  setNumeroPuertas(nuevoNumeroPuertas){
    return this.numeroPuertas = nuevoNumeroPuertas;
  }
}


const Mostrar = new Coche("Toyota","Zusuki",1998,30000,4);

console.log(Mostrar.getMarca())
console.log(Mostrar.getModelo())
console.log(Mostrar.getAnio())
console.log(Mostrar.getPrecio())
console.log(Mostrar.getNumeroPuertas())*/



/*Crea una clase llamada Persona con 
propiedades como nombre y edad, y utiliza 
getters y setters para acceder y modificar 
estas propiedades.

class Persona{
  constructor(_nombre,_edad){
    this.nombre = _nombre;
    this.edad = _edad;
  }
  getnombre(){
    return this.nombre;
  }
  setnombre(NuevoNombre){
    return this.nombre = NuevoNombre
  }
  getedad(){
    return this.edad;
  }
  setedad(NuevoEdad){
    return this.edad = NuevoEdad;
  }
}


var mostrar = new Persona("David",25)

console.log(mostrar.getnombre());
console.log(mostrar.getedad());*/


/*Crea una clase Persona con las propiedades nombre, edad y dni
 y los métodos getNombre(), setNombre(), getEdad(), setEdad()
  y getDni(). crea una clase Estudiante que herede de
   Persona y tenga las propiedades adicionales carrera y notaMedia
    y los métodos getCarrera(), setCarrera(), getNotaMedia() y setNotaMedia().


class Persona{
  constructor(nombre,edad,dni){
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }
  getNombre(){
    return this.nombre;
  }

  setNombre(nuevoNombre){
    return this.nombre = nuevoNombre;
  }
  getEdad(){
    return this.edad;
  }
  serEdad(nuevoEdad){
    return this.edad = nuevoEdad;
  }
  getDni(){
    return this.dni;
  }
  setDni(nuevoDni){
    return this.dni = nuevoDni;
  }
}
class Estudiante extends Persona{
  constructor(nombre,edad,dni,carrera,notaMedia){
    super(nombre,edad,dni);
    this.carrera = carrera;
    this.notaMedia = notaMedia; 
  }
  getCarrera(){
    return this.carrera;
  }
  setCarrera(nuevaCarrera){
    return this.carrera = nuevaCarrera;
  }
  getnotaMedia(){
    return this.notaMedia;
  }
  setnotaMedia(nuevanotaMedia){
    return this.notaMedia = nuevanotaMedia;
  }
}


const Mostrar = new Estudiante("David",25,8519137,"Software",51);

console.log(Mostrar.getNombre())
console.log(Mostrar.getEdad())
console.log(Mostrar.getDni())
console.log(Mostrar.getCarrera())
console.log(Mostrar.getnotaMedia())*/



/*Crea una clase llamada Tienda con la propiedad inventario 
(un objeto que almacena la cantidad de productos disponibles). 
Implementa los métodos getCantidadProducto y setCantidadProducto
para obtener y establecer la cantidad de un producto en el inventario.

class Tienda{ // clase 
  constructor(CantidadProducto){//constructor
    this.CantidadProducto = CantidadProducto;//llamamos al los atributos para poder usarlos 
  }
  getCantidadProducto(){
    return this.CantidadProducto;
  }
  setCantidadProducto(CantidadNueva){
    this.CantidadProducto = CantidadNueva;
  }
}

const mostrar = new Tienda(50);
console.log(mostrar.getCantidadProducto());


mostrar.setCantidadProducto(49)
console.log(mostrar.getCantidadProducto());*/

/*Crea una clase Libro con las propiedades título, autor y año. 
Implementa los métodos get y set correspondientes para cada una de las propiedades.

class Libro{
  constructor(titulo,autor,año){
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }
  gettitulo(){
    return this.titulo;
  }
  settitulo(newtitle){
    this.titulo = newtitle;
  }
  getautor(){
    return this.autor;
  }
  setautor(newautor){
    this.autor = newautor;
  }
  getaño(){
    return this.año;
  }
  setaño(newaño){
    this.año = newaño;
  }
}


const mostraDatos = new Libro("La odisea","Homero",1998);
console.log("Datos antiguos");

console.log(mostraDatos.gettitulo());
console.log(mostraDatos.getautor());
console.log(mostraDatos.getaño());


mostraDatos.settitulo("Romeo&julieta");
mostraDatos.setautor("Shekspear")
mostraDatos.setaño(1955)

console.log("Datos actuales");

console.log(mostraDatos.gettitulo());
console.log(mostraDatos.getautor());
console.log(mostraDatos.getaño());
*/

/*Crea una clase llamada "Persona" con propiedades privadas para
el nombre y la edad. Implementa métodos "getNombre()", "setNombre()",
"getEdad()" y "setEdad()" para acceder y modificar estos valores.

class Persona{
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  getNombre(){
    return this.nombre;
  }
  setNombre(newnombre){
    this.nombre = newnombre;
  }
  getEdad(){
    return this.edad;
  }
  setEdad(newAge){
    this.edad = newAge;
  }
}


const persona = new Persona("David",25);
console.log(persona.getNombre());
console.log(persona.getEdad());

persona.setNombre("Jose");
persona.setEdad(45);

console.log(persona.getNombre());
console.log(persona.getEdad());*/

/*Implementa una clase llamada "CuentaBancaria" con la propiedad "saldo". 
Añade un getter para obtener el saldo actual y un setter para actualizar 
el saldo. Sin embargo, asegúrate de que el setter no permita establecer 
un saldo negativo.


class CuentaBancaria{
  constructor(saldo){
    this.saldo = saldo;
  }
  getSaldo(){
    return this.saldo;
  }
  setSaldo(newSaldo){{
    this.saldo = newSaldo
  }}
}



const saldo = new CuentaBancaria(5000);
console.log(saldo.getSaldo());
console.log("Saldo actual");
saldo.setSaldo(4000);
console.log(saldo.getSaldo());*/


/*Implementa una clase llamada "Producto" con la propiedad "precio". Añade 
un getter para obtener el precio actual y un setter que aplique un descuento 
al precio, pero asegúrate de que el precio nunca sea inferior a cero.*/

/*
class Producto{
  constructor(precio){
    this.precio = precio;
  }
  getPrecio(){
    return this.precio;
  }
  setPrecio(newprecio){
    this.precio = newprecio;
  }
}


console.log("Precio Actual");
const mostrar = new Producto(400);
console.log(mostrar.getPrecio());

console.log("Precio Nuev");
mostrar.setPrecio(120)
console.log(mostrar.getPrecio());*/


/*Crear una clase "Producto" con propiedades
de nombre y precio. Implementar getters y 
setters para estas propiedades y 
asegurarse de que el precio sea un valor 
positivo y numérico.


class Producto{
  constructor(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
  }
  getNombre(){
    return this.nombre;
  }
  setNombre(newNombre){
    this.nombre = newNombre;
  }
  getPrecio(){
    return this.precio;
  }
  setPrecio(newprecio){
    this.precio = newprecio;
  }
}


const mostrar = new Producto("Manzana",15000);
console.log("Precio Actual..");
console.log(mostrar.getNombre());
console.log(mostrar.getPrecio());

mostrar.setNombre("Papaya");
mostrar.setPrecio(15)
console.log(mostrar.getNombre());
console.log(mostrar.getPrecio());*/

 
/*Crear una clase "Empleado" con 
propiedades de nombre y edad. Implementar 
un getter para el nombre y un setter para 
la edad, asegurándose de que la edad sea 
un valor positivo y no mayor a 100

class Empleado{
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  getNombre(){
    return this.nombre;
  }
  setNombre(newNombre){
    this.nombre = newNombre;
  }
  getEdad(){
    return this.edad;
  }
  setEdad(newEdad){
    this.edad = newEdad;
  }
}

const mostraDatos = new Empleado("David",25);
console.log("Los datos actuales");
console.log(mostraDatos.getNombre());
console.log(mostraDatos.getEdad());
console.log("Datos nuevos");
mostraDatos.setNombre("Jose");
mostraDatos.setEdad(26)
console.log(mostraDatos.getNombre());
console.log(mostraDatos.getEdad());*/

/*Crear una Clase de Cuenta Bancaria:
Define una clase llamada CuentaBancaria 
con propiedades como saldo y 
tipoDeCuenta. Implementa un getter 
para obtener el saldo y un setter 
que solo permita actualizar 
el saldo si el valor es mayor a cero.

class CuentaBancaria{
  constructor(saldo){
    this.saldo = saldo;
  }
  getSaldo(){
    console.log(`El saldo es ${this.saldo}`);
  }
  setSaldo(newSaldo){
    if(newSaldo > 0){
      this.saldo = newSaldo
    }
    else{
      console.log("El saldo debe ser mayor a cero");
    }
  }
}


const mostrar = new CuentaBancaria(5000, "cuenta de ahorros")
console.log(mostrar.getSaldo());


mostrar.setSaldo(-500)
console.log(mostrar.getSaldo());*/