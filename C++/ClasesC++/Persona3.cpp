#include <iostream>
using namespace std;
/*Crea una clase llamada Persona que tenga atributos como nombre,
edad y dirección. Incluye métodos para establecer y obtener estos atributos.*/

class Persona{ // clase 
private:
	string nombre; // atributos
	int edad;
	string direccion;
public:
	Persona(string, int , string); // contructor
	void Mostrar(); // metodo
};

Persona::Persona(string name,int age ,string addrass){
	this->nombre = name;
	this->edad = age;
	this->direccion = addrass;
}

void Persona::Mostrar(){
	cout<<"Nombre: "<<this->nombre<<endl;
	cout<<"Edad: "<<this->edad<<endl;
	cout<<"Direccion: "<<this->direccion<<endl;
}

int main() {
 	Persona ver = Persona("David",25,"AbdonJurado");
	ver.Mostrar();
	return 0;
}

