#include <iostream>
using namespace std;
/*Funci�n factorial: Escribe una funci�n 
llamada factorial que reciba un n�mero 
entero como par�metro y devuelva su factorial.*/

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

