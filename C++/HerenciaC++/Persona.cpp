#include <iostream>
using namespace std;

class Persona {
private:
	string nombre;
	int edad;
public:
	Persona(string nombre, int edad);
	void presentacion();
};

Persona::Persona(string nombre, int edad) {
	this->nombre = nombre;
	this->edad = edad;
}

void Persona::presentacion() {
	cout << "Soy " << this->nombre << " y tengo " << this->edad << " años" << "\n";
}

class Estudiante : public Persona {
private:
	string cu;
public:
	Estudiante(string nombre, int edad, string cu);
	void mostrar();
};

Estudiante::Estudiante(string nombre, int edad, string cu) : Persona(nombre, edad) {
	this->cu = cu;
}

void Estudiante::mostrar() {
	presentacion();
	cout << "Tengo un cu de " << this->cu << "\n";
}

int main() {
	string nombreP;
	int edadP;
	
	cout << "Ingresa nombre Persona: ";
	cin >> nombreP;
	cout << "Ingresa edad Persona: ";
	cin >> edadP;
	
	string nombreE;
	int edadE;
	string cuE;
	cout << "Ingresa nombre Estudiante: ";
	cin >> nombreE;
	cout << "Ingresa edad Estudiante: ";
	cin >> edadE;
	cout << "Ingresa cu Estudiante: ";
	cin >> cuE;
	
	Persona MostrarP(nombreP, edadP);
	Estudiante MostrarE(nombreE, edadE, cuE);
	
	MostrarP.presentacion();
	MostrarE.mostrar();
	
	return 0;
}


