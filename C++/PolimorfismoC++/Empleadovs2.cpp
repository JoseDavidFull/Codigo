#include <iostream>
using namespace std;

/*Crea una clase base llamada "Empleado" con un método virtual 
"calcularSalario" que devuelva el salario base de un empleado.
Luego, crea clases derivadas como "Vendedor" y "Gerente" que
hereden de "Empleado" y sobrescriban el método "calcularSalario"
para calcular el salario específico de cada tipo de empleado,
considerando comisiones para los vendedores o bonificaciones para los gerentes*/

class Empleado{
protected:
	int salario;
public:
	Empleado(int);
	virtual void CalcularSalario();
};

Empleado::Empleado(int salario){
	this->salario = salario;
}

void Empleado::CalcularSalario(){
	cout<<"Salario "<<this->salario<<"\n";
}



class Vendedor : public Empleado{
protected:
	string nombre;
public:
	Vendedor(int,string);
	void CalcularSalario() override;
};

Vendedor::Vendedor(int salario,string nombre) :  Empleado(salario){
	this->nombre = nombre;
}

void Vendedor::CalcularSalario(){
	cout<<" nombre "<<this->nombre<<"\n";
}



int main() {
	int salarioE;
	string nombreV;
	cin >> salarioE >> nombreV;
	
	Empleado* informacion[1];
	Empleado* empleado = new Empleado(salarioE);
	informacion[0] = empleado;
	
	Vendedor* informacion2[1];
	Vendedor* vendedor = new Vendedor(salarioE, nombreV);
	informacion2[0] = vendedor;
	
	for (int i = 0; i < 1; i++) {
		informacion[i]->CalcularSalario();
	}
	
	for (int i = 0; i < 1; i++) {
		informacion2[i]->CalcularSalario();
	}
	return 0;
}

