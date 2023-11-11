#include <iostream>
using namespace std;

class Vehiculo {
private:
	string Marca;
	int AnioF;
public:
	Vehiculo(string, int);
	void Mostrar();
};

Vehiculo::Vehiculo(string Marca, int AnioF) {
	this->Marca = Marca;
	this->AnioF = AnioF;
}

void Vehiculo::Mostrar() {
	cout << "Marca: " << Marca << endl;
	cout << "Año de fabricación: " << AnioF << endl;
}

class Automovil : public Vehiculo {
private:
	int puertas;
public:
	Automovil(string, int, int);
	void MostrarAuto();
};

Automovil::Automovil(string Marca, int AnioF, int puertas) : Vehiculo(Marca, AnioF) {
	this->puertas = puertas;
}

void Automovil::MostrarAuto() {
	Mostrar();
	cout << "Número de puertas: " << puertas << endl;
}

class Motocicleta : public Vehiculo {
private:
	string color;
public:
	Motocicleta(string, int, string);
	void MostrarMoto();
};

Motocicleta::Motocicleta(string Marca, int AnioF, string color) : Vehiculo(Marca, AnioF) {
	this->color = color;
}

void Motocicleta::MostrarMoto() {
	Mostrar();
	cout << "Color de la moto: " << color << endl;
}

int main() {
	string marcaV;
	int anioV;
	int puertasV;
	string marcaM;
	int anioM;
	string colorM;
	
	cout << "Ingresa la marca del automóvil: ";
	cin >> marcaV;
	cout << "Ingresa el año de fabricación del automóvil: ";
	cin >> anioV;
	cout << "Ingresa el número de puertas del automóvil: ";
	cin >> puertasV;
	cout << "Ingresa la marca de la motocicleta: ";
	cin >> marcaM;
	cout << "Ingresa el año de fabricación de la motocicleta: ";
	cin >> anioM;
	cout << "Ingresa el color de la motocicleta: ";
	cin >> colorM;
	
	cout << "Datos del vehículo:" << endl;
	Automovil V(marcaV, anioV, puertasV);
	V.MostrarAuto();
	
	cout << "Datos de la motocicleta:" << endl;
	Motocicleta M(marcaM, anioM, colorM);
	M.MostrarMoto();
	
	return 0;
}


