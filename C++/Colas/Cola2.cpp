#include <iostream>
#include <string>

using namespace std;


string Cola[100];
int frente = -1, trasera = -1;


void InsertarDatos(){
	if(frente < 99){
		cout<<"Ingresa datos a la cola "<<endl;
		cin>>Cola[frente +1];
		frente++;
		cout<<"Se ha insertado "<<Cola[frente]<<endl;
	}
}

void BorrarDatos(){
	if(frente > -1){
		cout<<"Elemento Borrado es "<<Cola[trasera]<<endl;
		trasera++;
	}else{
		cout<<"No hay datos en la Cola"<<endl;
	}
}

		void MostrarDatos(){
			if(frente > -1){
				for(int i=trasera;i< frente;i++){
					cout<<Cola[i]<<" , ";
				}cout<<"end";
			}else{
				cout<<"La cola esta vacia"<<endl;
			}
		}
		
		void ColaVacia(){
			if(frente == -1 && trasera == -1){
				cout<<"La cola esta vacia"<<endl;
			}else{
				cout<<"La cola aun tiene datos "<<endl;
			}
		}
			
			
			int main(){
				int opcion;
				do
				{
					cout<<"[1] Insertar Datos a la Cola "<<endl;
					cout<<"[2] Borrar Datos a la Cola "<<endl;
					cout<<"[3] Mostrar Datos a la Cola "<<endl;
					cout<<"[4] Cola Vacia "<<endl;
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
						break;;
					default:
						break;
					}
				} while (opcion!=0);
				return 0;
			}
