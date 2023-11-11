#include <iostream>
using namespace std;
/*Clase Persona: Crea una clase base llamada 
"Persona" que tenga atributos como nombre, edad y 
dirección. Luego, crea clases derivadas como 
"Estudiante" y "Profesor" que hereden de la clase 
"Persona" y tengan atributos y métodos específicos 
para cada tipo de persona.*/


class Persona{
private:
	string nombre;
	int edad;
	string direccion;
public:
	Persona(string nombre,int edad,string direccion);
	void Mostrar();
};

Persona::Persona(string nombre,int edad,string direccion){
	this->nombre = nombre;
	this->edad = edad;
	this->direccion = direccion;
}

void Persona::Mostrar(){
	cout<<"nombre "<<nombre<<"\n";
	cout<<"edad "<<edad<<"\n";
	cout<<"direccion "<<direccion<<"\n";
}

class Estudiante : public Persona{
private:
	float promedio;
public:
	Estudiante(string nombre,int edad,string direccion,float promedio);
	void mostrarEstudiante();
};

Estudiante::Estudiante(string nombre,int edad,string direccion,float promedio) : Persona(nombre,edad,direccion){
	Mostrar();
	this->promedio = promedio;
}

void Estudiante::mostrarEstudiante(){
	cout<<"promedio "<<promedio<<"\n";
}

int main() {
	string name;
	int age;
	string direccion;
	float promedio;
	cout<<"ingresa nombre: ";cin>>name;
	cout<<"ingresa edad: ";cin>>age;
	cout<<"ingresa direccion: ";cin>>direccion;
	cout<<"ingresa promedio: ";cin>>promedio;
	Estudiante mostrarE(name,age,direccion,promedio);
	mostrarE.mostrarEstudiante();
	return 0;
}

