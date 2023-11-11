#include <iostream>
using namespace std;

class CuentaBancaria{
private:
	int numeroCuenta;
	float saldo;
	string nombre;
public:
	CuentaBancaria(int newNumeroCuenta,float newSaldo,string newNombre)
	{
		numeroCuenta = newNumeroCuenta;
		saldo = newSaldo;
		nombre = newNombre;
	}
	int getNumeroCuenta(){
		return numeroCuenta;
	}
	void setNumeroCuenta(int newNumeroCuenta){
		nombre = newNumeroCuenta;
	}
	float getSaldo(){
		if(saldo > 0){
			return saldo;
		}
	}
	void setSaldo(int newSaldo){
		if(newSaldo > 0){
			saldo = newSaldo;
		};
	}
	string getNombre(){
		return nombre;
	}
	void setNombre(string newNombre){
		nombre = newNombre;
	}
	
	int realizarTransferencia(int n){
		return saldo-n;
	}
	void MostrarDatos(){
		cout<<"Nombre "<<nombre<<endl;
		cout<<"Numero De Cuenta "<<numeroCuenta<<endl;
		cout<<"saldo "<<saldo<<endl;
	}
};


int main() {
	int numeroCuenta;
	float saldo;
	string nombre;
	cout<<"Ingresa Numero Cuenta"<<endl;
	cin>>numeroCuenta;
	cout<<"Ingresa Saldo "<<endl;
	cin>>saldo;
	cout<<"Ingresa Nombre "<<endl;
	cin>>nombre;
	int opcion;
	CuentaBancaria C(numeroCuenta,saldo,nombre);
	do{
		cout<<"[1] Realizar Transferencia"<<endl;
		cout<<"[2] Mostrar Datos "<<endl;
		cout<<"[0] Salir "<<endl;
		cin>>opcion;
		int Sal;
		switch(opcion){
		case 1:
			cout<<"Cuanto Dinero quieres Realizar"<<endl;
			cin>>Sal;
			C.realizarTransferencia(Sal);
			break;
		case 2:
			C.MostrarDatos();
			break;
		case 0:
			break;
		}
	} while(opcion!=0);
	return 0;
}



/*Ejercicio 2: Administración de cuentas bancarias:
Crea una clase CuentaBancaria con atributos para el 
número de cuenta, el saldo y el titular de la 
cuenta. Implementa métodos get y set para 
cada atributo y un método realizarTransferencia 
que permita transferir dinero desde una cuenta 
a otra.*/













