#include <iostream>
using namespace std;

/*insertar Nombres Para una Pila*/

string Nombres[100];
int cima=-1;

void IngresarNombres(){
	if(cima < 99){
		cout<<"Ingresa Nombre: "<<endl;
		cin>>Nombres[cima+1];
		cima++;
	}else{
		cout<<"La pila esta llena"<<endl;
	}
}

void BorrarNombres(){
	cout<<"Elemento borrado: "<<Nombres[cima--]<<endl;
}

void MostrarDatos(){
	if(cima > -1){
		for(int i=cima;i> -1 ;i--){
			cout<<Nombres[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"La pila esta Vacia"<<endl;
	}
}

void InvertirDatos(){
	if(cima > -1){
		for(int i= 0 ;i< cima ; i++){
			cout<<"Pisicion "<<i<<" "<<Nombres[i]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"La pila esta Vacia"<<endl;
	}
}
	
int main() {
	int opcion;
	do{
		cout<<"[1] InsertarDatos"<<endl;
		cout<<"[2] BorrarDatos"<<endl;
		cout<<"[3] MostrarDatos"<<endl;
		cout<<"[4] InvertirDatos"<<endl;
		cout<<"[0] Salir"<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			IngresarNombres();
			break;
		case 2:
			BorrarNombres();
			break;
		case 3:
			MostrarDatos();
			break;
		case 4:
			InvertirDatos();
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}


