#include <iostream>
using namespace std;

/*Sumatoria de los pares e impares de 1 hasta n Ingresado por teclado*/

class ParImpar{
private:
	int n;
public:
	ParImpar(int);
	void Par();
	void Impar();
};


ParImpar::ParImpar(int _n){
	n = _n;
}


void ParImpar::Par(){
	int suma=0;
	for(int i=1;i<=n;i++){
		if(i%2==0){
			suma+=i;
		}
	}cout<<"la suma de los pares es: "<<suma<<"\n";
}

void ParImpar::Impar(){
	int suma=0;
	for(int i=1;i<=n;i++){
		if(i%2==1){
			suma+=i;
		}
	}cout<<"la suma de los impares es: "<<suma<<"\n";
}

int main() {
	int x;
	cin>>x;
	ParImpar Resultado(x);
	Resultado.Par();
	Resultado.Impar();
	return 0;
}

