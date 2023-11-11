#include <iostream>
using namespace std;
/*Función suma: Escribe una función llamada suma
que reciba dos números enteros como parámetros 
y devuelva la suma de ambos*/
void Suma(int a,int b);

void Suma(int a,int b){
	cout<<"La suma es: "<<a+b<<"\n";
}


int main() {
	int a,b;
	cin>>a>>b;
	Suma(a,b);
	return 0;
}

