#include <iostream>
using namespace std;

/*Crea una clase Estudiante que herede de la clase 
Persona. Agrega una propiedad carrera y un método
estudiar que imprima en la consola un mensaje indicando 
que el estudiante está estudiando ingresando datos por teclado.*/

class Estudiante{
	private:
		string carrera;
	public:
		Estudiante(string);
		void Estudiar();
};

Estudiante::Estudiante(string _carrera){
	carrera = _carrera;
}

void Estudiante::Estudiar(){
	cout<<"Hla soy david y estoy en la carera de "<<carrera<<endl;
}



int main() {
	string name;
	cout<<"Que carrera estudias ? ";cin>>name;
	Estudiante now (name);
	now.Estudiar();
	return 0;
}

