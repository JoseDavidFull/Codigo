#include <iostream>
using namespace std;
/*Función factorial: Escribe una función 
llamada factorial que reciba un número 
entero como parámetro y devuelva su factorial.*/

void factorial(int n,int facto=1){
	for(int i=1;i<=n;i++){
		facto*=i;
	}
	cout<<"El factorial de "<<n<<" es "<<facto<<"\n";
}



int main() {
	int x;
	cin>>x;
	factorial(x); 
	return 0;
}

