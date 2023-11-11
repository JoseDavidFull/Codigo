#include <iostream>
using namespace std;

string Nombres[100];
int frente=-1,trasera=-1;


void IngresarNombres(){
	if(trasera < 99){
		cout<<"Ingresa Nombres"<<endl;
		cin>>Nombres[frente ];
		frente++;
	}else{
		cout<<"La Cola esta llena"<<endl;
	}
}

void BorrarNombres(){
	if(frente > -1){
		cout<<"Elemento Borrado "<<Nombres[trasera +1 ];
		trasera++;
	}else{
		cout<<"No hay Datos Por Ende No se BorraNada"<<endl;
	}
}

void MostrarDatos(){
	
}


int main() {
	int op;
	do{
		cout<<"[1] IngresarDatos"<<endl;
		cout<<"[2] BorrarDatos"<<endl;
		cout<<"[3] MostrarDatos"<<endl;
		cout<<"[0] salir"<<endl;
		cin>>op;
		switch(op){
		case 1:
			IngresarNombres();
			break;
		case 2:
			break;
		case 3:
			break;
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(op!=0);
	return 0;
}
