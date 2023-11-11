#include <iostream>
using namespace std;

/*Crea una clase base llamada "Animal" con atributos como 
nombre y edad. Luego, crea clases derivadas como "Perro",
"Gato" y "Pájaro" que hereden de la clase base. Cada clase
derivada debe tener métodos específicos, como "ladrar()" 
para el perro, "maullar()" para el gato y "cantar()" para el pájaro.*/


class Animal{
private:
	string nombre;
	int edad;
public:
	Animal(string nombre, int edad);
	void Mostrar();
};


Animal::Animal(string _nombre , int _edad){
	nombre = _nombre;
	edad = _edad;
}

void Animal::Mostrar(){
	cout<<"nombre "<<nombre<<"\n";
	cout<<"edad "<<edad<<"\n";
}


class Perro : public Animal{
	private:
		string color;
	public:
		Perro(string nombre,int edad,string color);
		void ladrar();
};

Perro::Perro(string nombre,int edad,string color) : Animal(nombre, edad){//: es el super de C++ llamando a clase padre y sus metodos
	this->color = color;
}


void Perro::ladrar(){
	Mostrar();
	cout<<"color "<<color<<"\n";
	cout<<"Wuau"<<"\n";
}


int main() {
	string nombre;
	int edad;
	string color;
	cin>>nombre>>edad>>color;
	Perro p(nombre,edad,color);
	p.ladrar();
	return 0;
}

