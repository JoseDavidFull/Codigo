#include <iostream>
using namespace std;

/*Definir una clase Estudiante con atributos de nombre, edad y 
promedio, y métodos para obtener información y determinar si 
el estudiante está aprobado (promedio mayor o igual a 70).*/

class Estudiante{//clase
private:
	string nombre;//atributos
	int edad;
	float promedio;
public:
	Estudiante(string,int,float);//contructor
	void informacion();//metodos
};

Estudiante::Estudiante(string nombre,int edad,float promedio){//contructor
	this->nombre = nombre;
	this->edad = edad;
	this->promedio = promedio;
}

void Estudiante::informacion(){//metodo
	cout<<"Tu nombre es "<<this->nombre<<"\n";
	if(this->edad <= 18){
		cout<<"Eres menor de edad esta bien"<<"\n";
	}
	else{
		cout<<"bien pero puedes superarte"<<"\n";
	}
	if(this->promedio <70){
		cout<<"Estas reprobado"<<"\n";
	}
	else{
		cout<<"Aprobaste eres un Crack"<<"\n";
	}
}






int main() {
	Estudiante mostrar("David",25,70.5);
	mostrar.informacion();
	return 0;
}

