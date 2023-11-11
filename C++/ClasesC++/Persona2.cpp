#include <iostream>
using namespace std;

/*Crea una clase base llamada "Persona" con propiedades como nombre, 
edad y m�todo para mostrar informaci�n b�sica. Luego, crea una clase
derivada llamada "Estudiante" que herede de la clase "Persona" y tenga 
propiedades adicionales como n�mero de estudiante y promedio. Implementa 
m�todos para mostrar la informaci�n del estudiante.*/

class Persona{
private:
	string nombre;
	int edad;
public:
	Persona(string nombre,int edad);
	void mostrar();
};

Persona::Persona(string nombre,int edad){
	this->nombre = nombre;
	this->edad = edad;
}


void Persona::mostrar(){
	cout<<"nombre "<<this->nombre<<"\n";
	cout<<"edad "<<this->edad<<"\n";
}





int main() {
	string name;
	int age;
	cout<<"ingresa tu nombre: ";cin>>name;
	cout<<"ingresa tu edad: ";cin>>age;
	
	Persona Informacion(name,age);
	Informacion.mostrar();
	return 0;
}

