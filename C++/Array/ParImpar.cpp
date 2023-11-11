#include <iostream>
using namespace std;

/*Contar N�meros Pares e Impares: Dise�a 
un programa que cuente cu�ntos n�meros 
pares e impares hay en un arreglo de enteros.*/


int main(int argc, char *argv[]) {
	int array[100] ={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

	for(int i=0;i<15;i++){
		if(array[i]%2==0){
			cout<<"Par: "<<array[i]<<endl;
		}else{
			cout<<"Impar: "<<array[i]<<endl;
		}
	}

	return 0;
}
