#include <iostream>
using namespace std;
/*Araña Hombre y HombreAraña con atributos, etc*/

class Arania{
private:
	int fuerza;
public:
	Arania(int);
	void MostrarA();
};

Arania::Arania(int fuerza){
	this->fuerza = fuerza;
}

void Arania::MostrarA(){
	cout<<"fuerza es: "<<this->fuerza<<" su propio peso"<<endl;
}

class Hombre{
private:
	string nombre;
	int edad;
public:
	Hombre(string,int);
	void MostrarH();
};

Hombre::Hombre(string nombre,int edad){
	this->nombre = nombre;
	this->edad = edad;
}

void Hombre::MostrarH(){
	cout<<"Nombre: "<<this->nombre<<endl;
	cout<<"Edad: "<<this->edad<<endl;
}


class HombreArania : public Arania, public Hombre{
private:
	string tipoTelarania;
public:
	HombreArania(int,string,int,string);
	void MostrarHA();
};


HombreArania::HombreArania(int fuerza, string nombre,int edad,string tipoTelarania) : Arania(fuerza), Hombre(nombre,edad){
	
	this->tipoTelarania = tipoTelarania;
}

void HombreArania::MostrarHA(){
	Arania::MostrarA();
	Hombre::MostrarH();
	cout<<"El tipo de Telaraña es: "<<this->tipoTelarania<<endl;
}

int main() {
	HombreArania Ver(500,"Peter",25,"Embudo");
	Ver.MostrarHA();
	return 0;
}

