class Animal {
    constructor(nombre) {
      this._nombre = nombre; // Convención de nomenclatura para indicar propiedad protegida
    }
  
    hacerSonido() {
      console.log("Haciendo sonido...");
      this._hacerSonidoProtegido(); // Acceso a método protegido
    }
  
    _hacerSonidoProtegido() {
      throw new Error("El método '_hacerSonidoProtegido' debe ser implementado en la subclase.");
    }
  }
  
  class Perro extends Animal {
    _hacerSonidoProtegido() {
      console.log(`${this._nombre} dice: Guau guau`); // Acceso a propiedad protegida
    }
  }
  
  const perro = new Perro("Fido");
  perro.hacerSonido(); // Acceso a método protegido: Fido dice: Guau guau
  console.log(perro._nombre); // Acceso no recomendado a propiedad protegida (convención)
  perro._hacerSonidoProtegido(); // Acceso no recomendado a método protegido (convención)