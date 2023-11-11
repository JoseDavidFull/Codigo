#include <iostream>
using namespace std;
/*Crea una clase base llamada Animal que tenga un 
miembro de datos protegido nombre y una función 
miembro pública sonido() que imprima en la consola 
el sonido del animal. Luego, crea dos clases derivadas
llamadas Perro y Gato que hereden de la clase Animal.
Agrega a cada clase derivada una función miembro
moverse() que imprima en la consola cómo se mueve 
el animal. Crea objetos de ambas clases y muestra 
el nombre, el sonido y cómo se mueve cada animal.*/

class Animal{
	private:
		string nombre;
	public:
		Animal(string);
		void sonido();
};


Animal::Animal(string _nombre){
	nombre = _nombre;
}


void Animal::sonido(){
	cout<<"sonido "<<nombre<<" es Wau"<<"\n";
}


class Perro : public Animal{
	private:
		int edad;
	public:
		Perro(string,int);
		void sonidoperro();
};

Perro::Perro(string _nombre,int _edad) : Animal( _nombre){
	edad = _edad;
}

void Perro::sonidoperro(){
	sonido();
	cout<<" Edad "<<edad<<"\n";
}


class Gato : public Animal{
	private:
		string color;
	public:
		Gato(string,string);
		void mostrarcolor();
};

Gato::Gato(string _nombre,string _color) : Animal( _nombre){
	color = _color;
}


void Gato::mostrarcolor(){
	sonido();
	cout<<"color Gato"<<color<<"\n";
}






int main() {
	string nombreP;
	int edadP;
	string nombreG;
	string colorG;
	cout<<"Datos de Perro"<<"\n";
	cout<<"ingres nombre perro: ";cin>>nombreP;
	cout<<"ingresa edad Perro: ";cin>>edadP;
	cout<<"Datos de Gato"<<"\n";
	cout<<"ingres nombre Gato: ";cin>>nombreG;
	cout<<"ingresa edad Gato: ";cin>>colorG;
	
	

	Perro MostrarP(nombreP,edadP);
	MostrarP.sonidoperro();
	
	Gato MostrarG(nombreG,colorG);
	MostrarG.mostrarcolor();
	
	return 0;
}

