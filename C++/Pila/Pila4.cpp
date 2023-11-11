#include <iostream>
using namespace std;

int pila[5] , cima = -1; // creas la pila 

void insertarPila(){
	if(cima <4 ){
		cout<<"Ingresa datos a la pila: "<<endl;
		cin>>pila[cima +1];
		cima++;
	}else{
		cout<<"La pila esta llena "<<endl;
	}
}


void MostraPila(){
	if(cima > -1){
		for(int i=cima;i> -1 ;i--){
			cout<<pila[i]<<" , ";
		}cout<<"end"<<endl;
	}
}


void PilaVacia(){
	if(cima == -1){
		cout<<"La pila esta vacia "<<endl;
	}else{
		cout<<"La pila esta con datos aun "<<endl;
	}
}

void SacarDatos(){
	if(cima > -1){
		cout<<"La pila sacada es :"<<pila[cima  ]<<endl;
		cima--;
	}else{
		cout<<"La pila esta vacia no puede SacarDatos "<<endl;
	}
}


int main() {
	int opcion;
	do{
		cout<<"BIENBENIDO A PILA "<<endl;
		cout<<"[1] insertar pila "<<endl;
		cout<<"[2] mostrar pila "<<endl;
		cout<<"[3] pila vacia "<<endl;
		cout<<"[4] sacarDatos "<<endl;
		cout<<"[5] salir "<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			insertarPila();
			break;
		case 2:
			MostraPila();
			break;
		case 3:
			PilaVacia();
			break;
		case 4:
			SacarDatos();
			break;
		case 5:
			break;
		default:
			cout<<"No valido "<<endl;
		}
	} while(opcion!=5);
	return 0;
}
