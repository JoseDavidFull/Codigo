//proyecto de cajero automatico 
#include <iostream>
using namespace std;


int main(){
	int cod,saldo=10101010;
	int opc;
	int dep,dep1;
	cout<<"---Bienvenido---"<<endl;
	cout<<"Ingresa tu codigo: ",cin>>cod;
	for(int i=10;i>=1;i--){
		if(cod!=69691114){
			cout<<"tienes "<<i<<" intentos: ";cin>>cod;
		}
	}if(cod==69691114){
		cout<<"elige una opcion"<<endl;
		cout<<"1� consulta saldo "<<endl;
		cout<<"2� depositar a otra cuenta "<<endl;
		cout<<"3� recarga"<<endl;
		cout<<"4� pago "<<endl;
		cout<<"5� retiro "<<endl;
		cout<<"6� salir "<<endl;
		cin>>opc;
		switch(opc){
		case 1:
			cout<<"tu saldo es: "<<saldo<<endl;
			break;
		case 2:
			cout<<"Ingresa numero : ";cin>>dep;
			while(dep!=75798104){
				cout<<"Intentalo de nuevo: ";cin>>dep;
			}
			cout<<"cuanto deseas depositar: ",cin>>dep1;
			cout<<"logrado depositaste "<<dep1<<endl;
			cout<<"tu saldo es: "<<saldo-dep1<<endl;
			break;
		case 3:
			cout<<"tu saldo es: "<<saldo<<endl;
			break;
		case 4:
			cout<<"tu saldo es: "<<saldo<<endl;
			break;
		case 5:
			cout<<"tu saldo es: "<<saldo<<endl;
			break;
		case 6:
			cout<<"gracias y hasta luego "<<endl;
			break;
		}
	}
	return 0;
}
