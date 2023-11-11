#include <iostream>
using namespace std;
/*Crear una clase Libro con atributos de título, 
autor y año de publicación, y métodos para obtener 
información y verificar si es un libro clásico 
(publicado hace más de 50 años).*/

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

