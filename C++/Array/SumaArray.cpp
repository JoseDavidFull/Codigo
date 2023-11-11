#include <iostream>
using namespace std;
/*Sumar Elementos: Una función que recorre 
un array y devuelve la suma de todos sus 
elementos.*/

int main() {
	int array[100] = {1,2,3,4,5,6,7,8,9,10};
	
	int suma=0;
	for(int i=0;i<=10;i++){
		suma+=array[i];
	}
	cout<<"La suma es: "<<suma<<endl;
	return 0;
}
