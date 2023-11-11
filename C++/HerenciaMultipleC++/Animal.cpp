#include <iostream>
#include <string>
using namespace std;

/*
Diseña una jerarquía de clases que incluya 
clases base "Volador" y "Nadador". 
Luego, crea una clase derivada "Pato" que herede 
de ambas clases "Volador" y "Nadador". Agrega 
atributos y métodos que sean relevantes para 
cada clase y demuestren la herencia múltiple.
/

class Animal{
private:
	string nombre;
	int edad;
public:
	Animal(string,int);
	void Animal();
};
*/



class Volador{ // clase Padre
private:
	int alturaDeVuelo; // atributos
public:
	Volador(int);//constructor
	void MostrarV(); // Metodo
};

Volador::Volador(int alturaDeVuelo){//constructor
	this->alturaDeVuelo = alturaDeVuelo;
}

void Volador::MostrarV(){
	cout<<"Dato De altura "<<this->alturaDeVuelo<<" Km de altura "<<endl;
}


class Nadador{ // clase
private:
	int TiempoRespiracion; // atributo
public:
	Nadador(int); // constructor
	void MostrarN(); // metodo
};

Nadador::Nadador(int TiempoRespiracion){ // constructor
	this->TiempoRespiracion = TiempoRespiracion;
}


void Nadador::MostrarN(){
	cout<<"Tiempo de respiracion bajo el agua "<<this->TiempoRespiracion<<" minutos "<<endl;
}


class Pato : public Volador, public Nadador{
private:
	string nombre;
	int edad;
public:
	Pato(int,int,string,int);
	void MostrarP();
};

Pato::Pato(int alturaDeVuelo,int TiempoRespiracion,string nombre,int edad) : Volador(alturaDeVuelo) , Nadador(TiempoRespiracion) {
	this->nombre = nombre;
	this->edad = edad;
}


void Pato::MostrarP(){
	MostrarV();
	MostrarN();
	cout<<"Nombre "<<this->nombre<<endl;
	cout<<"Edad "<<this->edad<<" anios "<<endl;
}


int main() {
	Pato Mostrar(5000,60,"David",5);
	Mostrar.MostrarP();
	return 0;
}

