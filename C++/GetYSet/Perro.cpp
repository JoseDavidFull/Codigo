#include <iostream>
using namespace std;
/*Crear una clase "Perro":
Define una clase "Perro" con los atributos 
"nombre" y "raza". Implementa los métodos 
"getNombre", "setNombre", "getRaza" y "setRaza" 
para obtener y establecer los valores de los 
atributos.*/

class Perro{
private:
	string nombre;
	string raza;
public:
	string getNombre(){
		return nombre;
	}
	void setNombre(string newNombre){
		this->nombre = newNombre;
	}
	string getRaza(){
		return raza;
	}
	void setRaza(string newRaza){
		this->raza = newRaza;
	}
};



int main() {
	Perro perro;
	perro.setNombre("Rambo");
	perro.setRaza("Budul");
	cout<<"Nombre Del perro "<<perro.getNombre()<<"\n";
	cout<<"Raza del Perro "<<perro.getRaza()<<"\n";
	return 0;
}

