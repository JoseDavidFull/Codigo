#include <iostream>
using namespace std;

/*Implementa una cola usando un arreglo 
(array) y proporciona funciones para enqueue 
(agregar elemento) y dequeue (quitar elemento) 
elementos.*/


int Cola[100],frente = -1,trasera = -1;


void AgregarElementos(){
	if(frente < 99){
		cout<<"Ingresa Un Dato"<<endl;
		cin>>Cola[frente +1];
		frente++;
	}else{
		cout<<"La Cola esta llena"<<endl;
	}
}

void QuitarElementos(){
	if(frente > -1){
		cout<<"Elemento Borrado "<<Cola[trasera +1]<<endl;
		trasera++;
	}else{
		cout<<"ya no hay datos en la cola"<<endl;
	}
}



int main() {
	int opcion;
	do{
		cout<<"[1] Insertar cola "<<endl;
		cout<<"[2] Borrar Cola "<<endl;
		cout<<"[0] Salir "<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			AgregarElementos();
			break;
		case 2:
			QuitarElementos();
			break;
		case 0:
			break;
		default:
			cout<<"error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}

