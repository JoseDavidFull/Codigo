#include <iostream>
using namespace std;
/*Funci�n suma: Escribe una funci�n llamada suma
que reciba dos n�meros enteros como par�metros 
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

