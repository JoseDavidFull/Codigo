#include <iostream>
using namespace std;

/*Suma con clases ingresando datos por teclado*/

class Sumando{//clase
	private://atributos
	    int a,b;
    public://metodos
		Sumando(int , int);//constructor
	    void sumar();
};
//constructor
Sumando::Sumando(int _a,int _b){
	a = _a;
	b = _b;
}

void Sumando::sumar(){//metodos
	cout<<"la suma es: "<<a+b<<endl;
}


int main() {
	int x,y;
	cout<<"ingresa x ",cin>>x;
	cout<<"ingresa y ",cin>>y;
	
	Sumando Total (x,y);
	Total.sumar();
	return 0;
}

