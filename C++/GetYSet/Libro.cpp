#include <iostream>
using namespace std;

/*Clase Libro: Crea una clase "Libro" con atributos 
privados para el título, el autor y el año de 
publicación. Implementa los getters y setters 
correspondientes para acceder y modificar estos 
atributos.*/

class Libro{
private:
	string titulo;
	string autor;
public:
	string getTitulo(){
		return titulo;
	}
	void setTitulo(string newTitle){ 
		titulo = newTitle;
	}
	string getAutor(){
		return autor;
	}
	void setAutor(string newAutor){
		autor = newAutor;
	}
};

int main() {
	Libro libro;
	libro.setTitulo("Las odisea");
	libro.setAutor("Homero");
	cout<<"Titulo: "<<libro.getTitulo()<<"\n";
	cout<<"Autor: "<<libro.getAutor()<<"\n";
	
	return 0;
}

