#include <iostream>
using namespace std;

/*Clase de Transacci�n Bancaria: Dise�a una 
clase "TransaccionBancaria" que modele una 
transacci�n bancaria. En el constructor, 
realiza la transacci�n y, en el destructor, 
revierte autom�ticamente la transacci�n si 
no se complet� correctamente. Esto garantizar� 
la integridad de las transacciones bancarias 
incluso en caso de errores.
*/


class TransaccionBancaria{ // clase
private:
	int dinero; // atributos
	double numeroTransaccion;
public:
	TransaccionBancaria(int,double);//constructor
	void MostrarDatos();
	~TransaccionBancaria(){
	}
	
};



TransaccionBancaria::TransaccionBancaria(int dinero,double numeroTransaccion){
	this->dinero = dinero;
	this->numeroTransaccion = numeroTransaccion;
}

void TransaccionBancaria::MostrarDatos(){
	cout<<"Total dinero "<<this->dinero<<endl;
	cout<<"Numero Del Depositante "<<this->numeroTransaccion<<endl;
}



int main() {
	TransaccionBancaria T(5000,15963214567);
	T.MostrarDatos();
	return 0;
}

