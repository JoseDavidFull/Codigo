#include <iostream>
using namespace std;
/*Simulación de Coches: Crea una clase Coche 
con atributos para la marca, modelo y velocidad. 
Agrega métodos para acelerar y frenar. Luego,
una clase Conductor que controle un coche y lo 
haga moverse.*/


class Coche{//clase
private://atributos
	string marca;
	string modelo;
	float velocidad;
public:
	Coche(string,string,float);//constructor
	void acelerar();
};


Coche::Coche(string marca, string modelo, float velocidad){//constructor
	this->marca = marca;
	this->modelo = modelo;
	this->velocidad = velocidad;
}

void Coche::acelerar(){//metodo
	cout<<"Marca: "<<this->marca<<" Modelo: "<<this->modelo<<" velocidad: "<<this->velocidad<<endl;
}


int main() {
	Coche p1("a","b",10.5);
	p1.acelerar();
	return 0;
}

