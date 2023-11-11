#include <iostream>
using namespace std;
/*Función máximo: Escribe una función llamada 
maximo que reciba dos números enteros como 
parámetros y devuelva el mayor de ellos*/


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

