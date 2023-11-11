#include <iostream>
using namespace std;
/*Crea una clase base llamada "Mascota" con un método virtual para emitir un 
sonido. Luego, crea una clase derivada llamada "Perro" que herede de la clase 
"Mascota" y tenga un método adicional para ladrar. Implementa el método virtual 
en la clase derivada para que el perro emita un sonido y el método adicional 
para que ladre.*/

class Mascota{
public:
  virtual void sonido(){
	cout<<"Los animales hacen sonidos"<<"n";
  }
};


class Perro : public Mascota{
public:
	void sonido()override{
		cout<<"Los perros Dicen Guau"<<"\n";
	}
};


int main() {
	Mascota* mostrar[2];
	Perro perro;
	mostrar[0] = &perro;
	
	for(int i=0;i<1;i++){
		mostrar[i]->sonido();
	}
	return 0;
}

