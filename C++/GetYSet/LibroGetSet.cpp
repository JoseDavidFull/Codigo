#include <iostream>
using namespace std;

/*Ejercicio 1: Gesti�n de una biblioteca:
Dise�a una clase llamada Libro que tenga atributos para el t�tulo
autor y el n�mero de copias disponibles en una biblioteca. Implementa 
m�todos get y set para cada atributo y un m�todo adicional llamado 
prestarLibro que reduzca el n�mero de copias 
disponibles en 1 cada vez que se preste un libro.*/

//Completar

class Libro{
private:
	string titulo;
	string autor;
	int numeroCopias;
public:
	Libro(string newTitulo, string newAutor,int numeroCopias)
	{
		titulo = newTitulo;
		autor = newAutor;
		numeroCopias = 0;
	}
	
	string getTitulo(){
		return titulo;
	}
	void setTitulo(string newTitulo){
		titulo = newTitulo;
	}
	string getAutor(){
		return autor;
	}
	void setAutor(string newAutor){
		autor = newAutor;
	}
	int getNumeroCopias(){
		return numeroCopias;
	}
	void setNumeroCopias(int newCopias){
		numeroCopias = newCopias;
	}
	void prestarLibro(){
		numeroCopias = numeroCopias -1;
	}
};



int main() {
	string Titulo;
	string autor;
	int copias;
	Libro d1(Titulo,autor,copias);
	int opcion;
	do{
		cout<<"[1] Ingresar Titulo "<<endl;
		cout<<"[2] Insertar Autor "<<endl;
		cout<<"[3] Numero De Copias "<<endl;
		cout<<"[0] salir"<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			cout<<"Ingresa El Titulo"<<endl;
			cin>>Titulo;
			cout<<d1.getTitulo()<<endl;
			break;
		case 2:
			cout<<"Ingresa Autor "<<endl;
			cin>>autor;
			cout<<d1.getAutor()<<endl;
			break;
		case 3:
			cout<<"Ingresa Numero De Copias "<<endl;
			cin>>copias;
			cout<<d1.getNumeroCopias()<<endl;
			break;
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}
