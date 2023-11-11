#include <iostream>
using namespace std;

/*FIFO: Implementa una cola simple para 
simular un proceso de atención en una 
tienda. Agrega elementos a la cola 
(clientes) y luego procesa los elementos 
en el orden en que se agregaron.*/


int cola[100],frontal = -1, trasera = -1; 

void InsertarCola(){ 
	if(frontal < 99){
		cout<<"Ingresa Datos A Cola "<<endl;
		cin>>cola[frontal];
		frontal++;
	}else{
		cout<<"esta llena la cola "<<endl;
	}
}

void MostrarCola(){
	if(frontal > -1){
		for(int i=trasera;i<frontal;i++){
			cout<<cola[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"la cola esta vacia "<<endl;
	}
}

void BorrarCola(){
	if(frontal > -1){
		cout<<"Elemento borrado "<<cola[trasera]<<endl;
		trasera++;
	}
}

void ColaVacia(){
	if(frontal == -1 && trasera == -1){
		cout<<"Esta vacia "<<endl;
	}else{
		cout<<"Aun esta con datos la cola "<<endl;
	}
}


	
int main(int argc, char *argv[]) {
	int opcion;
	do{
		cout<<"[1] Insertar cola "<<endl;
		cout<<"[2] Mostrar Cola "<<endl;
		cout<<"[3] Borrar Cola "<<endl;
		cout<<"[4] Cola Vacia "<<endl;
		cout<<"[0] Salir "<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			InsertarCola();
			break;
		case 2:
			MostrarCola();
			break;
		case 3:
			BorrarCola();
			break;
		case 4:
			ColaVacia();
			break;
		case 0:
			break;
		default:
			cout<<"error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}

