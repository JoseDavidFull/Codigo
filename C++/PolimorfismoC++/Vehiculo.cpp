#include <iostream>
using namespace std;/*
Define una clase Vehiculo con un m�todo acelerar() y una clase 
derivada Coche que sobrescriba el m�todo acelerar() para mostrar 
un mensaje espec�fico para los coches. Crea instancias tanto de 
Vehiculo como de Coche y llama al m�todo acelerar() en cada una.*/

class Vehiculo{
public:
	virtual void acelerar(){
		cout<<"El vehiculo Acelera"<<"\n";
	}
};


class Coche : public Vehiculo{
	void acelerar() override{
		cout<<"El vehiculo acelera con sus 4 llantas"<<"\n";
	}
};


int main() {
	Vehiculo* mos trar[2];
	
	Vehiculo  vehiculo;
	Coche coche;
	
	mostrar[0] = &vehiculo;
	mostrar[1] = &coche;
	for(int i=0;i<2;i++){
		mostrar[i]->acelerar();
	}
	return 0;
}

