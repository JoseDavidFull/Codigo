#include <iostream>
using namespace std;

/*Crea una clase base llamada "Empleado" con un m�todo virtual 
"calcularSalario" que devuelva el salario base de un empleado.
Luego, crea clases derivadas como "Vendedor" y "Gerente" que
hereden de "Empleado" y sobrescriban el m�todo "calcularSalario"
para calcular el salario espec�fico de cada tipo de empleado,
considerando comisiones para los vendedores o bonificaciones para los gerentes*/

class Empleado{
public:
	virtual void CalcularSalario(){
		cout<<"Salario de 1000bs"<<"\n";
	}
};



class Vendedor : public Empleado{
public:
	void CalcularSalario(){
		cout<<"Salario Vendedor es de 3000bs "<<"\n";
	}
};




int main() {
	Empleado* informacion[2];
	Empleado empleado;
	Vendedor vendedor;
	informacion[0] = &empleado;
	informacion[1] = &vendedor;
	for(int i=0;i<2;i++){
		informacion[i] ->CalcularSalario();
	}
	return 0;
}
