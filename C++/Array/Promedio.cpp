#include <iostream>
using namespace std;

/*Promedio de Notas: Haz un programa que 
calcule el promedio de notas almacenadas 
en un arreglo.*/

int main() {
	int Promedio[100] ={66,55,80,90,55,66,75,59,25,88};
	
	int suma=0;
	for(int i=0;i<10;i++){
		suma+=Promedio[i];
	}
	cout<<suma/9<<endl;
	return 0;
}

