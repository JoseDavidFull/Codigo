#include <iostream>
using namespace std;
/*Crea una clase base Animal con una función virtual pura hacerSonido
(). Luego, crea clases derivadas Perro, Gato y Vaca que implementen
la función hacerSonido() para producir el sonido característico de 
cada animal. Crea instancias de cada clase y llama a la función 
hacerSonido() en cada una.*/

class Animal{
	public:
		virtual void hacerSonido(){
			cout<<"Los Animales Hacer Sonido"<<"\n";
		}
};


class Perro : public Animal  {
public:
	void hacerSonido()  override{
		cout<<"El perro dice Wau"<<"\n";
	}
};

class Gato : public Animal{
public:
	void hacerSonido() override {
		cout<<"El gato dice Miau"<<"\n";
	}
};

class Vaca : public Animal{
public:
	void hacerSonido() override {
		cout<<"La vaca dice Mu!"<<"\n";
	}
};



int main() {
	Animal* animales[4];
	
	Animal animal;
	Perro perro;
	Gato gato;
	Vaca vaca;
	
	animales[0] = &animal;
	animales[1] = &perro;
	animales[2] = &gato;
	animales[3] = &vaca;
	
	for(int i=0;i<4;i++){
		animales[i]->hacerSonido();
	}
	return 0;
}

