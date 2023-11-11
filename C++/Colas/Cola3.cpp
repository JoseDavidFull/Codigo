#include <iostream>
using namespace std;

int Cola[100],frente = -1,trasera = -1;void InsertarDatos(){
	if(frente < 99){
		cout<<"Ingresa Datos"<<endl;
		cin>>Cola[frente +1];
		frente++;
		cout<<"Se ha insertado "<<Cola[frente]<<endl;
	}
	else{
		cout<<"Esta Llena la cola"<<endl;
	}
}

void BorrarDatos(){
	if(frente > -1){
		cout<<"Elemento Borrado es "<<Cola[trasera +1]<<endl;
		trasera++;
	}
}

void MostrarDatos(){
	if(frente > -1){
		for(int i=frente;i>trasera;i--){
			cout<<Cola[i]<<" , ";
		}cout<<"end"<<endl;
		
	}else{
		cout<<"La cola esta vacia"<<endl;
	}
}

void ColaVacia(){
	if(frente == -1 && trasera == -1){
		cout<<"La cola esta vacia"<<endl;
	}else{
		cout<<"Aun hay datos en la Cola"<<endl;
	}
}

void InvertirCola(){
	if(frente > -1){
		for(int j=trasera;j<frente;j++){
			cout<<Cola[j+1]<<" , ";
		}cout<<"end"<<endl;
	}else{
		cout<<"La cola esta vacia"<<endl;
	}
}

void SumaCola()	{
	int suma=0;
	for(int i=trasera;i< frente;i++){
		suma+=Cola[i]+1;
		
	}cout<<"Suma es: "<<suma<<endl;
}
	
int main() {
	int opcion;
	do
	{
		cout<<"[1] Insertar Datos a la Cola "<<endl;
		cout<<"[2] Borrar Datos a la Cola "<<endl;
		cout<<"[3] Mostrar Datos a la Cola "<<endl;
		cout<<"[4] Cola Vacia "<<endl;
		cout<<"[5] MostrarColaInvertida"<<endl;
		cout<<"[6] SumarCola"<<endl;
		cout<<"[0] salir "<<endl;
		cin>>opcion;
		switch (opcion)
		{
		case 1:
			InsertarDatos();
			break;
		case 2:
			BorrarDatos();
			break;
		case 3:
			MostrarDatos();
			break;
		case 4:
			ColaVacia();
			break;
		case 5:
			InvertirCola();
		case 6:
			SumaCola();
		default:
			break;
		}
	} while (opcion!=0);
	return 0;
}
