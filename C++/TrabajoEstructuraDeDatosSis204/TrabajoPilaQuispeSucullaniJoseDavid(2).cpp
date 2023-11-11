#include <iostream>
using namespace std;

/**implemente una pila con la informacion a gusto 
operaciones 
	insertar un elemento
	eliminar un elemento
	mostrar toda la pila 
	opcion salir**/

int pila[5],cima = -1;

void InsertarElemento(){
	if(cima < 4){
		cout<<"Ingresa datos a la Pïla "<<endl;
		cin>>pila[cima +1 ];
		cima++;
	}else{
		cout<<"La pila esta llena "<<endl;
	}
}

void EliminarElementos(){
	if(cima > -1){
		cout<<"La pila eliminada "<<pila[cima ]<<endl;
		cima--;
	}
	else{
		cout<<"No hay datos "<<endl;
	}
}

void MostrarPila(){
	if(cima > -1){
		for(int i=cima;i> -1 ;i--){
			cout<<pila[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"No hay datos en la pila "<<endl;
	}
}




int main(int argc, char *argv[]) {
	int opcion;
	do{
		cout<<"[1] InsertarElemento: "<<endl;
		cout<<"[2] Eliminar un elemento: "<<endl;
		cout<<"[3] MostrarPila: "<<endl;
		cout<<"[4] Salir "<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			InsertarElemento();
			break;
		case 2:
			EliminarElementos();
			break;
		case 3:
			MostrarPila();
			break;
		default:
			cout<<"Error "<<endl;
		}
	} while(opcion!=4);
	return 0;
}

