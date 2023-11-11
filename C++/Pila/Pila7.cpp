#include <iostream>
using namespace std;

/*Implementa una pila utilizando un arreglo 
(array) y proporciona funciones para push 
(agregar elemento) y pop (quitar elemento)
elementos.*/

int pila[100],cima = -1; 
/*crea una pila con 100 datos para insertar
se insertar por la cima 
*/

void InsertarPila(){
	if(cima < 99){
		cout<<"Ingresa Datos a la Pila "<<endl;
		cin>>pila[cima +1 ];
		cima++;
	}else{
		cout<<"La Pila esta llena"<<endl;
	}
}

void BorrarPila(){
	if(cima > -1){
		cout<<"Elemento Borrado es: "<<pila[cima--];
	}else{
		cout<<"La pila esta Vacia "<<endl;
	}
}

void MostrarDatos(){
	if(cima > -1){
		for(int i=cima;i> 0;i--){
			cout<<pila[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"No hay datos en la Pila"<<endl;
	}
}


int main() {
	int opcion;
	do{
		cout<<"BIENBENIDO A LA PILA "<<endl;
		cout<<"[1] Ingresar Pila "<<endl<<endl;
		cout<<"[2] sacar  Pila "<<endl<<endl;
		cout<<"[3] mostrarPila "<<endl<<endl;
		cout<<"[0] salir "<<endl<<endl;
		cin>>opcion ;
		switch(opcion){
		case 1:
			InsertarPila();
			break;
		case 2:
			BorrarPila();
			break;
		case 3:
			MostrarDatos();
			break;
		case 0:
			break;
		default:
			cout<<"Numero no valido "<<endl;
		}
		
	} while(opcion!=0);
	return 0;
}
