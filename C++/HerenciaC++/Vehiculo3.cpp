#include <iostream>
using namespace std;

/*Define una clase base Vehiculo con propiedades comunes para vehículos con ruedas 
(por ejemplo, marca y modelo). Crea dos clases derivadas, Coche y Moto, que hereden 
de la clase base y tengan propiedades específicas como el número de puertas 
para los coches y si tienen sidecar para las motos.
*/



class Vehiculo{
private:
	string marca;
	string modelo;
public:
	Vehiculo(string,string);
	void MostrarInformacion();
};

Vehiculo::Vehiculo(string marca, string modelo){
	this->marca = marca;
	this->modelo = modelo;
}


void Vehiculo::MostrarInformacion(){
	cout<<"Marca: "<<this->marca<<"\n"<<"Modelo: "<<this->modelo<<endl;
}


class Coche : public Vehiculo{
private:
	string color;
public:
	Coche(string,string,string);
	void MostrarCoche();
};


Coche::Coche(string marca,string modelo,string color) : Vehiculo(marca,modelo){
	this->color = color;
}

void Coche::MostrarCoche(){
	MostrarInformacion();
	cout<<"Color: "<<this->color<<endl;
}





int main(int argc, char *argv[]) {
	Coche coche("Toyota", "Corolla","Black");
	coche.MostrarCoche();
	return 0;
}

