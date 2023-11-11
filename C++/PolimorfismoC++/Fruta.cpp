#include <iostream>
using namespace std;
/*Crea una clase base Fruta con una función virtual pura 
obtenerColor(). Luego, crea clases derivadas Manzana, 
Plátano y Naranja que implementen la función obtenerColor()
para devolver el color correspondiente de cada fruta. Crea
instancias de cada clase y llama a la función obtenerColor() en cada una.*/

class Fruta{
public:
	virtual void obtenercolor(){
		cout<<"Los colores de la frutas son muy lindas"<<"\n";
	};
};

class Platano : public Fruta{
public:
	void obtenercolor() override{
		cout<<"El color del el platano es Amarilo"<<"\n";
	}
};

 

int main() {
	Fruta* mostrar[2];
	
	Fruta fruta;
	Platano platano;
	
	mostrar[0] =  &fruta;
	mostrar[1] = &platano;
	for(int i=0;i<2;i++){
		mostrar[i]->obtenercolor();
	}
	return 0;
}

