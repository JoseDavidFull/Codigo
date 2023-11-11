#include <iostream>
using namespace std;

class Persona{
	private: //atributos
		int edad;
		string nombre;
	public:
		Persona(int,string);//constructor
		void leer();//metodos
		void correr();
};
//constructor;

Persona::Persona(int _edad,string _nombre){
	edad = _edad;
	nombre = _nombre;
}
//metodos
void Persona::leer(){
	cout<<"Hola soy "<<nombre<<"y tego "<<edad<<"años"<<endl;
}
//metodos
void Persona::correr(){
	cout<<"Hola soy "<<nombre<<" y corro un maraton"<<endl;
}


//imprimir 
int main() {
	Persona p1 = Persona(25,"David");
	p1.leer();
	return 0;
}

