#include <iostream>
using namespace std;
/*Ejercicio de función para verificar si un número es par o impar:
Escribe una función llamada "esPar" que tome un número 
entero como parámetro y devuelva true si el número es 
par, o false si es impar. Puedes verificar si un número 
es par dividiéndolo por 2 y comprobando si el residuo es igual a cero.*/

void esPar(int n);




int main() {
	int x;
	cin> >x;
	esPar(x);
	return 0;
}

void esPar(int n){
	if(n%2==0){
		cout<<"El numero es Par"<<"\n";
	}
	else{
		cout<<"El numero es ImPar"<<"\n";
	}
}
