#include <iostream>
using namespace std;

/*Dise�a una clase base llamada "Veh�culo" con propiedades como "velocidad"
y "capacidad". Luego, crea clases derivadas como "Autom�vil" y "Motocicleta"
que hereden de la clase "Veh�culo". Agrega propiedades y m�todos espec�ficos
para cada clase derivada, como "n�mero de puertas" y "tipo de transmisi�n"
para el autom�vil, y "cilindrada" y "tipo de combustible" para la motocicleta.*/

class Vehiculo{//clase
private://atributos
	int velocidad;
	int capacidad;
public://metodos
	Vehiculo(int ,int );//constructor
	void mostrar();
};

Vehiculo::Vehiculo(int velocidad,int capacidad){
	this->velocidad = velocidad;
	this->capacidad = capacidad;
}

void Vehiculo::mostrar(){
	cout<<"velocidad "<<this->velocidad<<"\n";
	cout<<"capacidad "<<this->capacidad<<"\n";
}


class Automovil: public Vehiculo{//clase hijo 
private: // atributos 
	string color;
public://metodos
	Automovil(int ,int ,string );//constructor
	void mostrarA();
};

//constructor
Automovil::Automovil(int velocidad,int capacidad,string color): Vehiculo(velocidad,capacidad){
	this->color = color;
}

void Automovil::mostrarA(){
	mostrar();
	cout<<"color "<<this->color<<"\n";
}



int main() {
	int velocidadV;
	int capacidadV;
	int velocidadA;
	int capacidadA;
	string colorA;
	cin>>velocidadV;
	cin>>capacidadV;
	cin>>velocidadA;
	cin>>capacidadA;
	cin>>colorA;
	Vehiculo mostrarVehiculo(velocidadV,capacidadV);
	mostrarVehiculo.mostrar();
	
	Automovil mostrarAutomovil(velocidadA,capacidadA,colorA);
	mostrarAutomovil.mostrarA();
	return 0;
}

