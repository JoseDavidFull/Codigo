#include <iostream>
#include <cmath>
#include <Math.h>
using namespace std;

/*Función cuadrado: Escribe una función llamada 
cuadrado que reciba un número entero como parámetro 
y devuelva su valor al cuadrado.*/

void cuadrado(int n){
	int valor = n * n; // Eleva 'n' al cuadrado usando el operador de multiplicación '*'
	cout << "El resultado es: " << valor << "\n";
}



int main() {
	int a;
	cin>>a;
	cuadrado(a);
	return 0;
}
