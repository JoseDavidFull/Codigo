#include <iostream>
using namespace std;

/*Clase Tiempo: Crea una clase llamada Tiempo que
represente una hora del día. La clase debe tener
atributos para horas, minutos y segundos
Implementa métodos para establecer y obtener
los valores de estos atributos.*/


class Tiempo{
	private:
		float hora,minuto,segundo;
	public:
		Tiempo(float,float,float);
		void Obtener();
};


Tiempo::Tiempo(float _hora,float _minuto,float _segundo){
	hora = _hora;
	minuto = _minuto;
	segundo = _segundo;
}



void Tiempo::Obtener(){
	cout<<"Hora "<<hora<<"\n";
	cout<<"minuto "<<minuto<<"\n";
	cout<<"segundo "<<segundo<<"\n";
}



int main() {
	int a,b,c;
	cin>>a>>b>>c;
	Tiempo p(a,b,c);
	p.Obtener();
	return 0;
}

