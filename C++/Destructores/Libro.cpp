#include <iostream>
using namespace std;

/*Clase de Libro: Crea una clase llamada 
"Libro" que tenga un destructor para 
liberar la memoria ocupada por un objeto 
"Libro" cuando se destruye.*/



class Libro{//clase Libro
private:
	string autor;
	int Ejemplares;
public:
	Libro(string,int);//constructor
	void MostrarDatos(); //metodo
	~Libro(){ // destructores
	}
};

Libro::Libro(string Autor,int Ejemplares){//constructores
	this->autor = Autor;
	this->Ejemplares = Ejemplares;
}

void Libro::MostrarDatos(){
	cout<<"Autor "<<autor<<endl;
	cout<<"Ejemplares "<<Ejemplares<<endl;
}

int main() {
	Libro L("Odisea",50);
	L.MostrarDatos();
	
	return 0;
}

