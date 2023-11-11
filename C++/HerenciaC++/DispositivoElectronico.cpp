#include <iostream>
using namespace std;
/*Ejercicio de herencia de dispositivos electrónicos:
Crea una clase base llamada "DispositivoElectronico" 
que contenga atributos como marca, modelo y año de 
fabricación. Luego, crea dos clases derivadas:
"Teléfono" y "Tableta". La clase "Teléfono" 
debe tener atributos adicionales como tamaño 
de pantalla y sistema operativo, mientras que 
la clase "Tableta" debe tener atributos adicionales 
como capacidad de almacenamiento y conectividad. 
Crea objetos de cada clase y muestra la información 
específica de cada dispositivo.*/


class DispositivoElectronico{
private:
	string marca;
	string modelo;
	int anio;
public:
	DispositivoElectronico(string,string,int);
	void Mostrar();
};


DispositivoElectronico::DispositivoElectronico(string marca,string modelo,int anio){
	this->marca = marca;
	this->modelo = modelo;
	this->anio = anio;
}


void DispositivoElectronico::Mostrar(){
	cout<<"Marca: "<<marca<<"\n";
	cout<<"modelo: "<<modelo<<"\n";
	cout<<"Año: "<<anio<<"\n";
}


class Telefono : public DispositivoElectronico{
private:
	double TamanoPantalla;
	string SistemaOperativo;
public:
	Telefono(string,string,int,double,string);
	void MostrarT();
};


Telefono::Telefono(string marca,string modelo,int anio,double TamanoPantalla,string SistemaOperativo) : DispositivoElectronico(marca,modelo,anio){
	Mostrar();
	this->TamanoPantalla = TamanoPantalla;
	this->SistemaOperativo = SistemaOperativo;
}


void Telefono::MostrarT(){
	cout<<"Tamaño Pantalla: "<<TamanoPantalla<<"\n";
	cout<<"Sistema Operativo: "<<SistemaOperativo<<"\n";
}


int main() {
	string marcaT;
	string modeloT;
	int anioT;
	double TamanoPantallaT;
	string sistemaT;
	cout<<"Marca ";cin>>marcaT;
	cout<<"Modelo ";cin>>modeloT;
	cout<<"anioT ";cin>>anioT;
	cout<<"Tamaño Pantalla ";cin>>TamanoPantallaT;
	cout<<"Sistema Operativo ";cin>>sistemaT;
	Telefono Mostrar(marcaT,modeloT,anioT,TamanoPantallaT,sistemaT);
	Mostrar.MostrarT();
	return 0;
}

