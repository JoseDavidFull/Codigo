#include <iostream>
using namespace std;
/*Ejercicio de función para encontrar el máximo de tres números:
Escribe una función llamada "encontrarMaximo" que tome tres 
números como parámetros y devuelva el valor máximo de los tres.
Dentro de la función, compara los tres números utilizando 
condicionales para determinar cuál es el mayor. Prueba la función
con diferentes conjuntos de números.*/


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
