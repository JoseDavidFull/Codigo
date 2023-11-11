#include <iostream>
#include <string  >
using namespace std;

/*Clases de animales: Define una clase base llamada 
Animal que tenga atributos y métodos comunes para 
todos los animales, como nombre, edad y sonido. 
Luego, crea clases derivadas como Perro, Gato y 
Pajaro, que hereden de Animal y tengan atributos 
y métodos específicos para cada tipo de animal.*/


class Animal{
private:
	string nombre;
	int edad;
	string sonido;
public:
	Animal(string,int,string);
	void Informacion();
};


Animal::Animal(string nombre,int edad,string sonido){
	this->nombre = nombre;
	this->edad = edad;
	this->sonido = sonido;
}

void Animal::Informacion(){
	cout<<"nombre "<<this->nombre<<" edad "<<this->edad<<" sonido "<<this->sonido<<"\n";
}


class Perro : public Animal{
private:
	string color;
public:
	Perro(string,int,string,string);
	void InformacionPerro();
};


Perro::Perro(string nombre,int edad,string sonido,string color) : Animal(nombre,edad,sonido){
	this->color = color;
}

void Perro::InformacionPerro(){
	Informacion();
	cout<<"Color "<<this->color<<"\n";
}

int main() {
	Perro mostrar("Cachuchin",10,"Guauu","Blanco");
	mostrar.InformacionPerro();
	return 0;
}

