#include <iostream>
#include <cmath>
#include <Math.h>
using namespace std;

/*Funci�n cuadrado: Escribe una funci�n llamada 
cuadrado que reciba un n�mero entero como par�metro 
y devuelva su valor al cuadrado.*/

void cuadrado(int n){
	int valor = n * n; // Eleva 'n' al cuadrado usando el operador de multiplicaci�n '*'
	cout << "El resultado es: " << valor << "\n";
}



int main() {
	int a;
	cin>>a;
	cuadrado(a);
	return 0;
}
