#include <iostream>
using namespace std;

/* Persona Crea una clase llamada "Persona" 
con atributos como 
nombre, edad y dirección. Implementa 
los métodos get/set para 
cada atributo y crea un objeto de la 
clase para mostrar 
y actualizar la información de una persona.*/

class Persona{
private:
	string nombre;
	int edad;
	/*string direccion;*/
public:
	string getNombre(){
		return this->nombre;
	}
	void setNombre(string newNombre){
		this->nombre = newNombre;
	}
	
	int getEdad(){
		return this->edad;
	};
	
	void setEdad(int newEdad){
		this->edad = newEdad;
	}
};

int main() {
	Persona persona;
	persona.setNombre("David");
	persona.setEdad(25);	
	cout<<persona.getNombre()<<endl;
	cout<<persona.getEdad()<<endl;
	cout<<"La actualizacion de datos son "<<endl;
	persona.setNombre("Jopse");
	persona.setEdad(35);
	cout<<persona.getEdad()<<endl;
	cout<<persona.getNombre()<<endl;
	return 0;
}

