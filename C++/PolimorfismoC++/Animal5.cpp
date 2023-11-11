#include <iostream>
using namespace std;
/*Clase Animal y clases derivadas: Crea una 
clase base llamada "Animal" con métodos virtuales
como "hacerSonido()" y "moverse()". Luego, crea 
clases derivadas como "Perro", "Gato" y "Pájaro" 
que hereden de "Animal" y sobrescriban los métodos 
virtuales para hacer sonidos y moverse de manera 
específica para cada animal.*/

class Animal{
public:
	virtual void hacerSonido(){
		cout<<"Los animales hacen ruido"<<"\n";
	}
	virtual void moverse(){
		cout<<"Los animales se mueven "<<"\n";
	}
};

class Gato : public Animal{
public:
	void hacerSonido() override{
		cout<<"Los gatos Dicen Miau..."<<"\n";
	}
	void moverse() override{
		cout<<"Los gatos se mueven sigilozamente"<<"\n";
	}
};

int main() {
	Gato* mostrarG[2];
	Gato gato;
	mostrarG[0] = &gato;
	for(int i=0;i<1;i++){
		mostrarG[i]->hacerSonido();
		mostrarG[i]->moverse();
	}
	return 0;
}

