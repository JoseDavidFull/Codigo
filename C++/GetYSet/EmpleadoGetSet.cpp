#include <iostream>
#include <cstdlib>
using namespace std;


class Empleado{
private:
	string nombre;
	float salario;
	int fecha;
public:
	Empleado(string newNombre,float newSalario,int newFecha)
	{
		nombre = newNombre;
		salario = newSalario;
		fecha = newFecha;
	}
	string getNombre(){
		return nombre;
	}
	void setNombre(string newNombre){
		nombre = newNombre;
	}
	float getSalario(){
		return salario;
	}
	void setSalario(float newSalario){
		salario = newSalario;
	}
	int getFecha(){
		return fecha;
	}
	void setFecha(int newFecha){
		fecha  = newFecha;
	}
	void Calcularantiguedad(){
		int fechaActual = 2023;
		int resultado = fechaActual - fecha;
		cout<<"Tiene "<<abs(resultado)<<" de antiguedad"<<endl;
	}
	void MostrarDatos(){
		cout<<"Nombre : "<<nombre<<endl;
		cout<<"Salario: "<<salario<<endl;
		cout<<"fecha  : "<<fecha<<endl;
	}
};


int main() {
	string nombre;
	float salario;
	int fecha;
	cout<<"Ingresa Nombre"<<endl;
	cin>>nombre;
	cout<<"Ingresa Salario "<<endl;
	cin>>salario;
	cout<<"Ingresa fecha"<<endl;
	cin>>fecha;
	int opcion;
	Empleado E(nombre,salario,fecha);
	do{
		cout<<"[1] Cambiar Nombre"<<endl;
		cout<<"[2] Cambiar Salario"<<endl;
		cout<<"[3] Cambiar Fecha"<<endl;
		cout<<"[4] Calcular Antiguedad"<<endl;
		cout<<"[5] MostrarDatos"<<endl;
		cout<<"[0] salir "<<endl;
		cin>>opcion;
		switch(opcion){
		case 1:
			cout<<"Nuevo Nombre"<<endl;
			cin>>nombre;
			E.setNombre(nombre);
			break;
		case 2:
			cout<<"Nuevo salario"<<endl;
			cin>>salario;
			E.setSalario(salario);
			break;
		case 3:
			cout<<"Nueva Fecha"<<endl;
			cin>>fecha;
			E.setFecha(fecha);
			break;
		case 4:
			E.Calcularantiguedad();
			break;
		case 5:
			E.MostrarDatos();
			break;
		case 0:
			break;
		default:
			cout<<"Error"<<endl;
		}
	} while(opcion!=0);
	return 0;
}
/*
Ejercicio 5: Registro de empleados:
Diseña una clase Empleado con atributos para 
el nombre, el salario mensual y la fecha de 
contratación de un empleado. Implementa métodos 
get y set para cada atributo y un método 
calcularAntigüedad que determine cuántos 
años ha estado empleado el trabajador.
*/
