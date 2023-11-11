#include <iostream>
using namespace std;

int pila[100],cima = -1; 

void InsertarDatos(){
	if(cima < 99){
		cout<<"Ingresa Datos"<<endl;
		cin>>pila[cima +1];
		cima++;
	}else{
		cout<<"la pila esta llena"<<endl;
	}
}

void PilaVacia(){
	if(cima == -1){
		cout<<"La pila esta vacia"<<endl;
	}else{
		cout<<"Aun hay datos en la pila"<<endl;
	}
}

void SacarDatosPila(){
	if(cima > -1){
		cout<<"El dato Eliminado es: "<<pila[cima--]<<endl;
	}
	else{
		cout<<"No hay datos en la pila"<<endl;
	}
}

void MostrarDatos(){
	if(cima > -1){
		for(int i=cima;i> -1;i--){
			cout<<pila[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"no hay datos en la pila"<<endl;
	}
}


int main() {
	int opcion;
	do{
		cout<<"[1] InsertarDatos"<<endl;
		cout<<"[2] VerificarPilaVacia"<<endl;
		cout<<"[3] SacarDatosDePila"<<endl;
		cout<<"[4] MostrarDatos"<<endl;
		cout<<"[0] Salir"<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			InsertarDatos();
			break;
		case 2:
			PilaVacia();
			break;
		case 3:
			SacarDatosPila();
			break;
		case 4:
			MostrarDatos();
			break;
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}
