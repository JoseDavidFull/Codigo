#include <iostream>
using namespace std;
/*Escribe un programa que solicite al usuario ingresar un número e imprima si es positivo, negativo o cero.*/


int main(int argc, char *argv[]) {
	int num;
	cout<<"Ingresa Un numero: ";cin>>num;
	if(num > 0){
		cout<<"El numero es Positivo"<<endl;
	}
	else{
	   if(num == 0){
		cout<<"El numero Es Cero"<<endl;
	   }else{
		   cout<<"El numero es Negativo"<<endl;
	   }
	}
	return 0;
}

