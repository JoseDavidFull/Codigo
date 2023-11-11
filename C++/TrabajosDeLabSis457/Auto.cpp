#include <iostream>
using namespace std;

class Auto{
private:
	int espacio;
	int velocidad;
	int carril;
public:
	Auto(){
		espacio = 0;
		velocidad = 1;
		carril = 2;
	}
	void subir(){
		
	}
	void bajar(){
		
	}
	void retroceder(){
		espacio = espacio - velocidad;
	}
	void avanzar(){
		espacio = espacio + velocidad;
	}
	
	int getVelocidad(){
		return velocidad;
	}
	
	void setVelocidad(int newVelocidad){
		velocidad = newVelocidad;
	}

};


int main() {
	Auto d1;
	int opcion;
	cout<<"Espacio recorrido: "<<endl;
	cout<<"velocidad: "<<endl;
	cout<<"Carril: "<<endl;
	cin>>opcion;
	while(opcion!=0){
		for(int i=1;i<=50;i++){
			cout<<"=";
		}
		cout<<"\n\n";
		
		for(int x=0;x<=25;x++){
			cout<<"-"<<" ";
		}
		
		cout<<"\n\n";
		
		for(int y=0;y<=25;y++){
			cout<<"-"<<" ";
		}
		
		cout<<"\n\n";
		
		for(int j=1;j<=50;j++){
			cout<<"=";
		}
		opcion++;
	}
	
		cout<<"\n";
		cout<<"\n";
		cout<<"\n";
		cout<<"\n";
		cout<<"[8] subir izquierda "<<endl;
		cout<<"[2] bajar derecha "<<endl;
		cout<<"[5] acelerar "<<endl;
		cout<<"[6] avanzar"<<endl;
		cout<<"[4] retroceder "<<endl;
		cout<<"[0] salir"<<endl;
		switch(opcion){
		case 8:
			d1.subir();
			break;
		case 2:
			d1.bajar();
			break;
		case 6:
			d1.getVelocidad();
			break;
		case 4:
			d1.retroceder();
			break;
		case 0:
			break;
		default:
			cout<<"---Error---"<<endl;
		}
	return 0;
}

