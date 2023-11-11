#include <iostream>
using namespace std;
/*diseña una función en pregunta que permita determinar 
si una fecha corresponde a un año bisiesto
resp = esBisiesto(d,m,a)(funcion en forma de pregunta)*/
/*Si un año es divisible por 4 y no es divisible por 100, es un año bisiesto.
	Si un año es divisible por 100 pero no por 400, no es un año bisiesto.
	Si un año es divisible por 400, es un año bisiesto.*/


bool esBisiesto(int dia,int mes,int year){
	return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) || (dia<=28) || (mes <= 12);
}

int main() {
	int d,m,a;
	cin>>d>>m>>a;
	if(esBisiesto(d,m,a)){
		cout<<"Es bisiesto"<<endl;
	}
	else{
		cout<<"No es Bisiesto"<<endl;
	}
	return 0;
}

