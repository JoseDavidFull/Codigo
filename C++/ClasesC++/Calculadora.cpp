#include <iostream>
using namespace std;

/*Ejercicio: Crea una clase llamada "Calculadora" que tenga métodos
para realizar operaciones matemáticas básicas, como suma, resta, 
multiplicación y división. La clase debe tener atributos para 
almacenar los operandos y métodos para establecer los valores de 
los operandos, realizar las operaciones y obtener los resultados.*/

class Calculadora{//clase
protected: //metodo protected que pueden usar las clases hijos
	int a,b;
public:
	Calculadora(int a ,int b);
	void suma();
	void resta();
	void mul();
	void div();
};

Calculadora::Calculadora(int a,int b){
	this->a = a;
	this->b = b;
}

void Calculadora::suma(){
	cout<<"suma "<<a+b<<"\n";
}


void Calculadora::resta(){
	cout<<"resta "<<a-b<<"\n";
}

void Calculadora::mul(){
	cout<<"mul "<<a*b<<"\n";
}

void Calculadora::div(){
	cout<<"div "<<a/b<<"\n";
}



int main() {
	int x,y;
	cin>>x>>y;
	
	Calculadora mostrar(x,y);
	
	mostrar.suma();
	mostrar.resta();
	mostrar.mul();
	mostrar.div();
	return 0;
}

