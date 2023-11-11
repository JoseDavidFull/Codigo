#include <iostream>
using namespace std;
/*Crea una función llamada "multiplicarPorDos()"
que acepte un parámetro entero, lo multiplique 
por 2 y luego imprima el resultado en la consola.*/

void multiplicarPorDos(int n);



int main() {
	int a;
	cin>>a;
	
	multiplicarPorDos (a);
	return 0;
}


void multiplicarPorDos(int n){
	int x;
	x =n*2;
	cout<<"La mul es: "<<x<<"\n";
}
