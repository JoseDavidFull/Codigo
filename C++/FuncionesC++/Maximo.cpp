#include <iostream>
using namespace std;
/*Funci�n m�ximo: Escribe una funci�n llamada 
maximo que reciba dos n�meros enteros como 
par�metros y devuelva el mayor de ellos*/


int Maximo(int a,int b);

int Maximo(int a,int b){
	int valor;
	if(a>b){
		valor = a;
	}
	else{
		valor = b;
	}
	return valor;
}

int main() {
	int x,y;
	cout<<"ingrese el primer num: ";
	cin>>x;
	cout<<"ingrese el segundo num: ";
	cin>>y;
	cout<<"El mayor es: "<<Maximo(x,y)<<"\n";
	return 0;
}

