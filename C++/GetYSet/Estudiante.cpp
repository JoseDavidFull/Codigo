#include <iostream>
using namespace std;
/*Clase Estudiante: Crea una clase "Estudiante" con 
atributos privados para el nombre y la edad. 
Implementa los getters y setters correspondientes 
para acceder y modificar estos atributos.*/

class Estudiante{
private:
	string nombre;
	int edad;
public:
	string getNombre(){
		return nombre;
	}
	void setNombre(string newNombre){
		nombre = newNombre;
	}
	int getEdad(){
		return edad;
	}
	void setEdad(int newEdad){
		edad = newEdad;
	}
};


int main() {
	Estudiante estudiante;
	estudiante.setNombre("David");
	cout<<"nombre es "<<estudiante.getNombre()<<"\n";
	return 0;
}

