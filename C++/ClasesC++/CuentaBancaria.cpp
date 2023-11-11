#include <iostream>
using namespace std;


/*Crea una clase "CuentaBancaria" que tenga atributos para 
almacenar el número de cuenta y el saldo. Implementa métodos
para depositar dinero, retirar dinero y mostrar el saldo actual.*/

class CuentaBancaria{//clase
	private://atributos
		int deposito;
		int retiro;
		int saldo;
	public:
		CuentaBancaria(int,int,int);//constructor
		void depositarDinero();//metodo
		void RetirarDinero();//metodo
		void SaldoActual();//metodo
};

CuentaBancaria::CuentaBancaria(int deposito,int retiro,int saldo){//constructor
	this->deposito = deposito;
	this->retiro = retiro;
	this->saldo = saldo;
}

void CuentaBancaria::depositarDinero(){ //metodo
	cout<<"Depositaste "<<deposito<<"\n";
}


void CuentaBancaria::RetirarDinero(){//metodo
	cout<<"El retiro de dinero es"<<retiro<<"\n";
}


void CuentaBancaria::SaldoActual(){//metodo
	saldo = deposito-retiro;
	cout<<"Saldo"<<saldo<<"\n";
}


int main(){
	int d,r;
	cout<<"Saldo a depositar: ";cin>>d;
	cout<<"Saldo a retirar: ";cin>>r;
	CuentaBancaria ver(d,r,0);
	ver.SaldoActual();
	return 0;
}


