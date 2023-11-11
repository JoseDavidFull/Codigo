#include <iostream>
using namespace std;
	

class Nombre{//clase 
private:
	int edad; // atributos
	string nombre;
	string apellido;
	int numero;
public:
	Nombre(int,string,string,int);
	void MostrarDatos();
	~Nombre(){ // destructor
	}
};

Nombre::Nombre(int edad,string nombre,string apellido,int numero){
	this->edad = edad;
	this->nombre = nombre;
	this->apellido = apellido;
	this->numero = numero;
}

void Nombre::MostrarDatos(){
	cout<<this->edad<<endl;
	cout<<this->apellido<<", "<<this->nombre<<endl;
	cout<<this->numero<<endl;
	cout<<"\n";
	cout<<this->edad<<","<<this->nombre<<","<<this->apellido<<","<<this->numero<<endl;
}


int main() {
	int edad;
	string nombre;
	string apellido;
	int numero;
	cin>>edad;
	cin>>nombre;
	cin>>apellido;
	cin>>numero;
	Nombre N(edad,nombre,apellido,numero);
	N.MostrarDatos();
	return 0;
}

