#include <iostream>
using namespace std;
/*Ejercicio de funci�n para encontrar el m�ximo de tres n�meros:
Escribe una funci�n llamada "encontrarMaximo" que tome tres 
n�meros como par�metros y devuelva el valor m�ximo de los tres.
Dentro de la funci�n, compara los tres n�meros utilizando 
condicionales para determinar cu�l es el mayor. Prueba la funci�n
con diferentes conjuntos de n�meros.*/


void Mayor(float a,float b,float c);




int main() {
	float x,y,z;
	cout<<"ingresa los tres nums";cin>>x>>y>>z ;
	Mayor(x,y,z);
	return 0;
}

void Mayor(float a,float b,float c){
	if(a>b && a > c){
		cout<<"El mayor es : "<<a<<"\n";
	}
	else{
		if(b>a && b>c){
			cout<<"El mayor es :"<<b<<"\n";
		}
		else{
			cout<<"El mayor es: "<<c<<"\n";
		}
	}
}
