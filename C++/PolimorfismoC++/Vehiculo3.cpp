#include <iostream>
#include <cstdlib>
#include <string>
using namespace std;
/*Crear una clase base Vehiculo con subclase Coche con metodo Mostrar() mas funcion virtual*/


class Vehiculo{
public:
	virtual void mostrar(){
		cout<<"El vehiculo es el mas potente de todos"<<"\n";
	}
};

class Coche : public Vehiculo{
	void mostrar() override{
		cout<<"El coche Lo mas delujo Mas que la monaliza";
	}
};

int main(){
	Vehiculo* mostrarr[2];
	
	Vehiculo vehiculo;
	Coche coche;
	mostrarr[0] = &vehiculo;
	mostrarr[1] = &coche; 
	for(int i=0;i<2;i++){
		mostrarr[i] ->mostrar();
	}
	return 0;
}

