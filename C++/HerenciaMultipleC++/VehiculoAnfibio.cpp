#include <iostream>
using namespace std;

/*Herencia Múltiple de Vehículos: Define clases 
base para diferentes tipos de vehículos, como 
"VehiculoTerrestre" y "VehiculoAereo". Crea 
una clase derivada "VehiculoAnfibio" que 
herede de ambas clases base y pueda 
operar tanto en tierra como en el aire.*/

class VehiculoTerrestre{
private:
	int Ruedas;
public:
	VehiculoTerrestre(int);
	void MostrarV();
};

VehiculoTerrestre::VehiculoTerrestre(int Ruedas){
	this->Ruedas = Ruedas;
}

void VehiculoTerrestre::MostrarV(){
	cout<<"Vehiculo Tiene "<<this->Ruedas<<" Llantas"<<endl;
}


class VehiculoAereo{
private:
	int Alcance;
public:
	VehiculoAereo(int);
	void MostrarVA();
};

VehiculoAereo::VehiculoAereo(int Alcance){
	this->Alcance = Alcance;
}

void VehiculoAereo::MostrarVA(){
	cout<<"El Vehiculo tiene un alcance de "<<this->Alcance<<" Km*Hr "<<endl;
}

/*Crea una clase derivada "VehiculoAnfibio" 
	que  herede de ambas clases base y 
	pueda operar tanto en tierra como en el aire.*/

class VehiculoAnfibio : public VehiculoTerrestre, public VehiculoAereo{
private:
	int VelocidadTA;
public:
	VehiculoAnfibio(int ,int ,int );
	void MostrarVA();
};

VehiculoAnfibio::VehiculoAnfibio(int Ruedas, int Alcance, int VelocidadTA) : VehiculoTerrestre(Ruedas), VehiculoAereo(Alcance) {
	this->VelocidadTA = VelocidadTA;
}

void VehiculoAnfibio::MostrarVA() {
	VehiculoTerrestre::MostrarV();
	VehiculoAereo::MostrarVA();
	cout << "La Velocidad en Tierra y Aire es: " << this->VelocidadTA << " Km*Hr" << endl;
}

int main(int argc, char *argv[]) {
	VehiculoAnfibio va(4, 300, 100);
	va.MostrarVA();
	
	return 0;
}

