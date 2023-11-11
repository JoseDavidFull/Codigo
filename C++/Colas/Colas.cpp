#include <iostream>
using namespace std;

int cola[100]
	,Frontal = -1 , Trasera = -1;


void InsertarCola(){
	if(Frontal < 99){
		cout<<"Ingresa dato A la cola "<<endl;
		cin>>cola[Frontal];
		Frontal++;
	}else{
		cout<<"La cola esta llena"<<endl;
	}
}

void BorrarCola(){
	if(Frontal > -1){
		cout<<"El dato que salio es: "<<cola[Trasera]<<endl;
		Trasera++;
	}else{
		cout<<"La cola esta vacia no puede SacarDatos"<<endl;
	}
}

void ColaVacia(){
	if(Frontal == -1 && Trasera == -1){
		cout<<"Esta vacia "<<endl;
	}
	else{
		cout<<"La pila con datos aun "<<endl;
	}
}

void MostrarCola() {
	if (Frontal > -1) {
		for (int i = Trasera; i <= Frontal; ++i) {
			cout << cola[i] << " , ";
		}
		cout << "end" << endl;
	} else {
		cout << "La cola est� vac�a." << endl;
	}
}


int main() {
	int opcion;
	do{
		cout<<"[1] InsertarPila"<<endl;
		cout<<"[2] BorrarCola"<<endl;
		cout<<"[3] ColaVacia"<<endl;
		cout<<"[4] MostrarCola"<<endl;
		cout<<"[0] Salir"<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			InsertarCola();
			break;
		case 2:
			BorrarCola();
			break;
		case 3:
			ColaVacia();
			break;
		case 4:
			MostrarCola();
			break;
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}
