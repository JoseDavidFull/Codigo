#include <iostream>
using namespace std;
/*Crea una clase "Estudiante" que tenga atributos para almacenar
el nombre, la edad y el promedio de calificaciones. Implementa
métodos para obtener y establecer estos atributos, así como
para calcular si el estudiante está aprobado 
(promedio mayor o igual a 60) o reprobado.*/

class Estudiante{//clase
private://atributos encapsulados
	string nombre;
	int edad;
	float promedio;
public://metodos
	Estudiante(string,int,float);//constructor
	void establecer();
};

Estudiante::Estudiante(string nombre,int edad,float promedio){//constructor
	this->nombre = nombre;
	this->edad = edad;
	this->promedio = promedio;
}
	

void Estudiante::establecer(){
	cout<<"nombre "<<nombre<<"\n";
	cout<<"edad "<<edad<<"\n";
	if(promedio >=60){
		cout<<"Aprobado";
	}else{
		cout<<"Reprobado";
	}
}



int main() {
	string name;
	int age;
	float promide;
	cout<<"Ingresa tu nombre: ";cin>>name;
	cout<<"Ingresa tu edad: ";cin>>age;
	cout<<"Ingresa tu promedio: ";cin>>promide;
	Estudiante Promedio(name,age,promide);
	Promedio.establecer();
	return 0;
}

