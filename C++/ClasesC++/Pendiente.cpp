#include <iostream>
using namespace std;
/*Ejercicio 2: Empleados
	
	Crea una clase base llamada Empleado con los siguientes atributos y m�todos:
	
	Atributos: nombre (cadena de texto) y salario (n�mero).
	M�todo calcularSalario(): Este m�todo debe devolver el salario del empleado.
	Luego, crea las siguientes clases derivadas de Empleado:
	
Programador: Esta clase debe tener un atributo lenguaje y debe implementar
el m�todo calcularSalario() para calcular el salario de un programador. 
El salario base es de $5000 y se incrementa en $1000 por cada a�o de experiencia.
Gerente: Esta clase debe tener un atributo departamento y debe implementar 
el m�todo calcularSalario() para calcular el salario de un gerente. 
El salario base es de $8000 y se incrementa en $2000 por cada a�o de experiencia.
�Espero que te diviertas resolviendo los ejercicios! Si necesitas ayuda 
con alguna parte espec�fica, no dudes en preguntar. Estar� encantado de ayudarte.*/


class Empleados{
	private:
		string nombre;
		float salario;
	public:
		void CalcularSalario();
};

Empleados::Empleados(string _nombre,float salario){
	nombre  = _nombre;
	salario = _salario;
}

void Empleados::CalcularSalario(){
	
}

int main() {
	
	return 0;
}

