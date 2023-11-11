#include <iostream>
using namespace std;

/*Crea una clase llamada Empleado que tenga atributos 
privados para el nombre, la edad y el salario. La clase
debe tener métodos públicos para establecer y obtener el
valor de cada atributo, y otro método para imprimir los 
detalles del empleado (nombre, edad y salario).*/

class Empleado{//clase empleado
	private: //atributos
		string nombre;
		int edad;
		int salario;
	public: //metodos
		Empleado(string, int , int );//constructor
		void obtener();
};
//constructor
Empleado::Empleado(string _nombre,int _edad,int _salario){
	nombre = _nombre;
	edad = _edad;
	salario = _salario;
}
//metodos
void Empleado::obtener(){
	cout<<"Hola me llamo "<<nombre<<" y tengo "<<edad<<" anios"<<" y gano un sueldo de "<<salario<<endl;
}



int main(int argc, char *argv[]) {
	Empleado mostrar = Empleado("David",25,30000);
	mostrar.obtener();
	return 0;
}

