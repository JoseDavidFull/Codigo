#include <iostream>
using namespace std;

/*Crea una funci�n llamada "imprimirTablaMultiplicar()" que
acepte un par�metro entero y muestre en la consola la
tabla de multiplicar del n�mero desde 1 hasta 10.*/


void imprimirTablaMultiplicar(int n);

	
int main(int argc, char *argv[]) {
	int x;
	cin>>x;
	imprimirTablaMultiplicar(x);
	return 0;
}

void imprimirTablaMultiplicar(int n){
	
	for(int i=1;i<=n;i++){
		for(int j=1;j<=10;j++){
			cout<<i<<" * "<<j<<"="<<i*j<<"\n" ;
		}cout<<"\n";
	}
}
