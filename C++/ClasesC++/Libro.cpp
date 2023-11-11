#include <iostream>
using namespace std;
/*Crear una clase Libro con atributos de t�tulo, 
autor y a�o de publicaci�n, y m�todos para obtener 
informaci�n y verificar si es un libro cl�sico 
(publicado hace m�s de 50 a�os).*/

class Libro{
	private:
		string autor;
	    int anio;
	public:
	    Libro(string,int);//contructor
	    void informacion();//metodo
};

Libro::Libro(string _autor,int _anio){//constructor
	autor = _autor;
	anio = _anio;
}

void Libro::informacion(){
	cout<<"El autor es: "<<this->autor<<"\n";
	if(this->anio >= 50 ){
		cout<<"El libro es Clasico"<<"\n";
	}
	else{
		cout<<"El libro no es clasico"<<"\n";
	}
}


int main() {
	string autorr;
	int anio;
	cin>>autorr>>anio;
	Libro mostrar(autorr,anio);
	mostrar.informacion();
	return 0;
}

