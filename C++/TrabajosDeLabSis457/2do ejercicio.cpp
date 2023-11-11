#include <iostream>
using namespace std;
/*dise�a una funci�n en pregunta que permita determinar 
si una fecha corresponde a�un�a�o�bisiesto
resp = esBisiesto(d,m,a)(funcion en forma de pregunta)*/
/*Si un a�o es divisible por 4 y no es divisible por 100, es un a�o bisiesto.
	Si un a�o es divisible por 100 pero no por 400, no es un a�o bisiesto.
	Si un a�o es divisible por 400, es un a�o bisiesto.*/


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

