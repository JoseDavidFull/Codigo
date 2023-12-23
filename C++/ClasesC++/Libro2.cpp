#include <iostream>
using namespace std;

/*Crea una aplicación de gestión de libros. Define una clase llamada Libro 
con los siguientes atributos: titulo, autor, anioPublicacion y isbn. 
Implementa métodos para establecer y obtener estos atributos.*/

class Libro{
private:
	string titulo;
	string autor;
	int anioPublicacion;
public:
	Libro(string,string,int);
	void MostrarDatos();
};

Libro::Libro(string _titulo, string _autor,int _anio){
	this->titulo = _titulo;
	this->autor = _autor;
	this->anioPublicacion = _anio;
}


void Libro::MostrarDatos(){
	cout<<"Titilo : "<<this->titulo<<"\n"<<"Autor: "<<this->autor<<"\n"<<"Año Publicacion: "<<this->anioPublicacion<<endl;
}


int main() {
	Libro Mostrar("Iliana","Homero",1998);
	Mostrar.MostrarDatos();
	return 0;
}

