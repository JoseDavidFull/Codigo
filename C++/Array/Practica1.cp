#include <iostream>
#include <string>
using namespace std;

/*Suma de Elementos: Escribe un programa 
que calcule la suma de todos los elementos 
en un arreglo de números enteros*/

int main() {
	int array[100] ={1,2,3,4,5,6,7,8,9,10};
	int suma=0;
	for(int i=0;i<10;i++){
		suma+=array[i];
	}
	cout<<"La suma es: "<<suma<<endl;
	return 0;
}

