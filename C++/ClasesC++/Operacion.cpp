#include <iostream>
using namespace std;


class Operacion{//clase
	private://atributos
		int a,b;
	public://metodos
		Operacion(int,int);//constructor
		void suma();
		void resta();
		void multiplicacion();
		void divicion();
};

Operacion::Operacion(int a,int b){//constructor
	this->a = a;
	this->b = b;
}


void Operacion::suma(){
	cout<<"La suma es: "<<a+b<<"\n";
}

void Operacion::resta(){
	cout<<"La resta es: "<<a-b<<"\n";
}
	
void Operacion::multiplicacion(){
	cout<<"La multiplicacion es: "<<a*b<<"\n";
}
	
void Operacion::divicion(){
	cout<<"La divicion es: "<<a/b<<"\n";
}



int main() {
	int x,y;
	cin>>x>>y;
	
	Operacion Mostrar(x,y);
	Mostrar.suma(); 
	Mostrar.resta();
	Mostrar.multiplicacion();
	Mostrar.divicion();
	return 0;
}

