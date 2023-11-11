#include <iostream>
#include <string>
using namespace std;

/*Multiplicar Elementos por un Número:
Crea un programa que multiplique cada elemento 
de un array por un número ingresado por el 
usuario y luego muestre el array resultante.*/




int main() {
	int n,array[10] = {1,2,3,4,5,6,7,8,9,10};
	cin>>n;
	int aux = 0;
	for(int i=0;i<10;i++){
		aux = array[i] * n;
		cout<<aux<<endl;
	}
	return 0;
}

