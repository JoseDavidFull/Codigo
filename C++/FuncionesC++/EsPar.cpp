#include <iostream>
using namespace std;
/*Ejercicio de funci�n para verificar si un n�mero es par o impar:
Escribe una funci�n llamada "esPar" que tome un n�mero 
entero como par�metro y devuelva true si el n�mero es 
par, o false si es impar. Puedes verificar si un n�mero 
es par dividi�ndolo por 2 y comprobando si el residuo es igual a cero.*/

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
