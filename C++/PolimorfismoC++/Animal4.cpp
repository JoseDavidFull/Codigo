#include <iostream>
using namespace std;
/*Crea una clase base llamada "Animal" con propiedades y 
métodos comunes a todos los animales. Luego, crea subclases 
como "Perro" y "Gato" que hereden de la clase "Animal" y 
tengan métodos y propiedades adicionales específicas de cada animal.*/

class Animal{
private:
	string nombre;
	int edad;
public:
	Animal(string nombre,int edad);//constructor
	void Informacion();
};

Animal::Animal(string nombre,int edad){
	this->nombre = nombre;
	this->edad = edad;
}

void Animal::Informacion(){
	cout<<"Nombre "<<this->nombre<<"\n";
	cout<<"edad "<<this->edad<<"\n";
}

class Perro : public Animal{
private:
	string raza;
public:
	Perro(string, int, string);
	void MostrarDatos();
};

Perro::Perro(string nombre,int edad,string raza) : Animal(nombre,edad){
	this->raza = raza;
}

void Perro::MostrarDatos(){
	Informacion();
	cout<<"raza "<<this->raza<<"\n";
}


int main() {
	string nombre;
	int edad;
	string raza;
	cout<<"Ingresa nombre Perro ";cin>>nombre;
	cout<<"Ingresa edad Perro ";cin>>edad;
	cout<<"Ingresa raza ";cin>>raza;
	
	Perro*  mostrar[2];
	Perro perro(nombre,edad,raza);
	mostrar[0] = &perro;
	for(int i=0;i<1;i++){
		mostrar[i]->MostrarDatos();
	}
	return 0;
}

