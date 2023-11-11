#include <iostream>
using namespace std;

/*Crea una función llamada "comparar()" que acepte 
dos parámetros enteros, los compare entre sí y muestre
en la consola si el primer número es mayor, menor o igual al segundo.*/

void comparar(int a,int b);
	
	



int main() {
	int x,y;
	cin>>x>>y;
	comparar(x,y);
	return 0;
}


void comparar(int a,int b){
	
	if(a>b){
		cout<<"El mayor es: "<<a<<"\n";
	}else{
		if(b>a){
			cout<<"El mayor es: "<<b<<"\n";
		}else{
			cout<<"los numeros "<<a<<" y "<<b<<" son iguales "<<"\n";
		}
	}
}
