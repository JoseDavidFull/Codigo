#include <iostream>
using namespace std;

int pila[3],cima= -1; // declaracion de pila

void meterDatos(){
	if(cima < 2){
		cout<<"introdusca un dato a pila "<<endl;
		cin>>pila[cima+1];
		cima++;
	}
	else{
		cout<<"esta llena "<<endl;
	}
}

void sacarDatos(){
	
}

void pilaVacia(){
	if(cima == -1){
		cout<<"La pila esta vacia : "<<endl;
	}
	else{
		cout<<"Ingresa datos a pila "<<endl;
	}
}

void mostrarPila(){
	if(cima > -1){
		for(int i=cima;i > -1 ;i--){
			cout<<pila[i]<<" , ";
		}cout<<"Fin "<<endl;
	}
}




int main(){
	int opcion;
	do{
		cout<<"BIENBENIDO A LA PILA "<<endl;
		cout<<"[1] Ingresar Pila "<<endl<<endl;
		cout<<"[2] sacar  Pila "<<endl<<endl;
		cout<<"[3] ¿Pila vacia ? "<<endl<<endl;
		cout<<"[4] mostrarPila "<<endl<<endl;
		cout<<"[5] salir "<<endl<<endl;
		cin>>opcion ;
		switch(opcion){
		case 1:
			meterDatos();
			break;
		case 2:
			sacarDatos();
			break;
		case 3:
			pilaVacia();
			break;
		case 4:
			mostrarPila();
			break;
		case 5:
			break;
		default:
			cout<<"Numero no valido "<<endl;
		}
		
	} while(opcion!=5);
	return 0;
}

