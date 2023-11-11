#include <iostream>
using namespace std;
/*Crear una clase base Empleado, que tenga dos clases derivadas : 
Gerente y Vendedor. La clase base debe tener al menos un método 
virtual (sin ser puramente virtual esta vez). Cada clase derivada 
debe tener su propia implementación del método virtual. Luego, 
usar un vector de punteros a Empleado, que apunte a objetos de las 
clases Gerente y Vendedor. Finalmente, usando polimorfismo, llamar 
al método virtual implementado en cada objeto y mostrar su resultado.*/
class Empleado{
public:
	virtual void Informacion(){
		cout<<"Los Empleados Tienen Que ser Capacez"<<"\n";
	}
};

class Gerente : public Empleado{
public:
	void Informacion() override{
		cout<<"El gerente debe ser Capaz De controlar y dirigir "<<"\n";
	}
};

class Vendedor : public Empleado{
public:
	void Informacion() override{
		cout<<"El Vendedor debe ser Capaz De Atender con gentileza "<<"\n";
	}
};




int main() {
	Empleado* Mostrar[3];
	Empleado empleado;
	Gerente gerente;
	Vendedor vendedor;
	Mostrar[0] = &empleado;
	Mostrar[1] = &gerente;
	Mostrar[2] = &vendedor;
	for(int i=0;i<3;i++){
		Mostrar[i] ->Informacion();
	}
	return 0;
}

