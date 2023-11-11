#include <iostream>
#include <vector>
using namespace std;

/*Ordenar un Vector de Objetos: Crea una clase 
llamada "Estudiante" con atributos como nombre, 
edad y promedio. Llena un vector con objetos de
esta clase y luego ordénalos en función de su 
promedio de manera ascendente o descendente.*/

class Estudiante{
private:
	string nombre;
	int edad;
	float promedio;
public:
	Estudiante(string,int,float);
	void MostrarDato();
	~Estudiante(){
	}
};


Estudiante::Estudiante(string nombre,int edad,float promedio){
	this->nombre = nombre;
	this->edad = edad;
	this->promedio = promedio;
}

void Estudiante::MostrarDato(){
	cout<<"Nombre "<<this->nombre<<endl;
	cout<<"Edad "<<this->edad<<endl;
	cout<<"promedio "<<this->promedio<<endl;
}


int main() {
	Estudiante E("David",25,60.5);
	
	for(int i=1;i<2;i++){
		E.MostrarDato();
	}
	return 0;
}

