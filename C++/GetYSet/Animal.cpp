#include <iostream>
using namespace std;

/*Crear una clase base llamada Animal con los atributos nombre y 
edad. Implementar un m�todo get para el atributo nombre 
que devuelva el nombre del animal.*/

class Animal{
private:
	string nombre;
	int edad;
public:
	string getNombre(){
		return this->nombre;
	}
	void setNombre(string newNombre){
		this->nombre = newNombre;
	}
	int getEdad(){
		return this->edad;
	}
	void setEdad(int newEdad){
		this->edad = newEdad;
	}
};



int main() {
	Animal mostrar;
	mostrar.setNombre("David");
	mostrar.setEdad(25);
	cout<<"Antes"<<"\n";
	cout<<"Nombre "<<mostrar.getNombre()<<"\n";
	cout<<"Ahora"<<"\n";
	mostrar.setNombre("Jose");
	cout<<"New Nombre "<<mostrar.getNombre()<<"\n";
	return 0;
}

