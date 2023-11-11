#include <iostream>
using namespace std;

/**Clase Persona: Crea una clase llamada "Persona" que tenga 
atributos como nombre, edad, género, etc. Implementa métodos 
para establecer y obtener los valores de los atributos y 
mostrar la información de la persona.*/

class Persona{
private:
	string nombre;
	int edad;
	string genero;
public:
	Persona(string nombre,int edad,string genero);
	void obtenerValores();
};

Persona::Persona(string nombre,int edad,string genero){
	this->nombre = nombre;
	this->edad = edad;
	this->genero = genero;
}

void Persona::obtenerValores(){	
	cout<<"Nombre "<<nombre<<"\n";
	cout<<"edad "<<edad<<"\n";
	cout<<"genero "<<genero<<"\n";
}


int main() {
	string name;
	int age;
	string gen;
	cin>>name;
	cin>>age;
	cin>>gen;
	Persona mostrar(name,age,gen);
	mostrar.obtenerValores();
	return 0;
}

