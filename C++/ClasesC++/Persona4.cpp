#include <iostream>
using namespace std;
/*Crea una clase llamada Persona que tenga atributos como nombre, 
edad y dirección. Luego, crea instancias de esta clase y muestra 
la información de cada persona.*/

class Persona{ // creacion de la clase
private:// atributos
	string nombre;
	int edad;
public:
	Persona(string,int);//constructor
	void Informacion();// metodo
};


Persona::Persona(string nombre,int edad){
	this->nombre = nombre;
	this->edad = edad;
}


void Persona::Informacion(){ // el metodo de la Persona
	cout<<"Nombre "<<this->nombre<<endl;
	cout<<"Edad: "<<this->edad<<endl;
}


int main() {
	string name;
	int age;
	cin>>name>>age;
	Persona Mostrar(name,age);
	Mostrar.Informacion();
	return 0;
}

