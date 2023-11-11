#include <iostream>
using namespace std;

class Persona{//clase
	private://atributos
		string nombre;
		int edad;
		string sexo;
	public://metodos
		Persona(string, int , string );//constructor
		void saludo();
};


//constructor
Persona::Persona(string _nombre,int _edad, string _sexo){
	nombre = _nombre;
	edad = _edad;
	sexo = _sexo;
}

void Persona::saludo(){
	cout<<"Hola me llamo "<<nombre<<" tengo "<<edad<<" anios y mi sexo es "<<sexo<<endl; 
}

int main() {
	string name;
	int age;
	string Sexo;
	cin>>name>>age>>Sexo;
	Persona p1 (name,age,Sexo);
	p1.saludo();
	return 0;
}


