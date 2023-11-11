#include <iostream>
using namespace std;
/*Calculadora Simple: Crea una calculadora 
que pueda realizar operaciones básicas como 
suma, resta, multiplicación y división. 
Implementa una función para cada operación.*/

void Suma(int a,int b){
	cout<<"La suma es: "<<a+b<<endl;
}
	
	void Resta(int a,int b){
		cout<<"La Resta es: "<<a-b<<endl;
	}
		
		void Multi(int a,int b){
			cout<<"La Multiplicacion es: "<<a*b<<endl;
		}
			
			void Div(int a,int b){
				cout<<"La Divicion es: "<<a/b<<endl;
			}

int main() {
	int x,y;
	cin>>x>>y;
	Suma(x,y);
	Resta(x,y);
	Multi(x,y);
	Div(x,y);
	return 0;
}
