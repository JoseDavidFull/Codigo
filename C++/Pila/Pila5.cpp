#include <iostream>
using namespace std;

/*Revertir una cadena: Escribe un programa 
que use una pila para revertir una cadena 
de caracteres. Por ejemplo, si se ingresa 
"hola", el programa deber�a mostrar "aloh".*/

char pila[100],cima = -1;

void InsertarPila(){
	if(cima < 99){
		cout<<"Ingresa Dato a La pila "<<endl;
		cin>>pila[cima +1];
		cima++;
	}else{
		cout<<"La pila esta llena"<<endl;
	}
}

void BorrarDatosPila(){
	if(cima > -1){
		cout<<"Elemento borrado es: "<<pila[cima];
		cima--;
	}else{
		cout<<"No hay datos para borrar "<<endl;
	}
}

void MostrarPila(){
	if(cima > -1){
		for(int i=cima;i> -1 ;i--){
			cout<<pila[i]<<" , ";
		}cout<<endl;
	}
}

void Pilavacia(){
	if(cima == -1){
		cout<<"Esta Vacia"<<endl;
	}else{
		cout<<"La pila aun tiene datos.."<<endl;
	}
}

int main(int argc, char *argv[]) {
	int opcion;
	do{
		cout<<"[1] Inserta Pila"<<endl;
		cout<<"[2] Borrar Pila"<<endl;
		cout<<"[3] Mostrar Pila"<<endl;
		cout<<"[4] Vacia Pila"<<endl;
		cout<<"[0] Salir"<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			InsertarPila();
			break;
		case 2:
			BorrarDatosPila();
			break;
		case 3:
			MostrarPila();
			break;
		case 4:
			Pilavacia();
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion != 0);
	return 0;
}