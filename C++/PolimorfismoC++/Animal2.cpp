#include <iostream>
using namespace std;


/*Crea una clase base llamada Animal que tenga un método virtual emitirSonido().
Luego, crea clases derivadas como Leon, Elefante y Tigre que sobrescriban 
el método emitirSonido() para representar el sonido característico de cada 
animal. En la función main(), crea un arreglo de punteros de tipo Animal* 
y llena el arreglo con objetos de las diferentes clases derivadas. Recorre
el arreglo y muestra el sonido emitido por cada animal./*/

class Animal{
public:
	virtual void hacerSonido(){
		cout<<"Los animales hacer sonidos"<<"\n";
	}
};

class Leon : public Animal{
public:
	void hacerSonido() override {
		cout<<"El leon ruge"<<"\n";
	}
};


class Elefante : public Animal{
public:
	void hacerSonido() override {
		cout<<"El Elefante Hace sonido Feroz"<<"\n";
	}
};







int main() {
	Animal* animales[2];
	
	Leon leon;
	Elefante elefante;
 
	
	animales[0] = &leon;
	animales[1] = &elefante;
	
	for (int i = 0; i < 2; i++) {
		animales[i]->hacerSonido();
	}
	return 0;
}

