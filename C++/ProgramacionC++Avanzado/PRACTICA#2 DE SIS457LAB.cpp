#include <iostream>
#include <sstream>
#include <string>
#include <iterator>
#include <list>
#include <cstdlib>
#include <vector>
using namespace std;
class Cuenta{
private:
	int id;
	string nombre;
	int numero;
	float saldo;
public:
	Cuenta(int id,//constructor
	   string nombre,
	   int numero,
	   float saldo)
{ 
	this->id=id; // contrctor
	this->nombre=nombre;
	this->numero=numero;
	this->saldo=saldo;
}
	
	
	~Cuenta(){
		//this->id=NULL;
	}          //virgulilla alt+126
	
	
		int getId(){
			return id;
		}
		string getNombre(){
			return nombre;
		}
		int getNumero(){
			return numero;
		}
		float getSaldo(){
			return saldo;
		}
						
		void setId(int id){
			this->id=id;
		}
		void setNombre(string nombre){
			this->nombre=nombre;
		}
		void setNumero(int numero){
			this->numero=numero;
		}
		void setSaldo(float saldo){
			this->saldo=saldo;
		}
		void detalle(){
		    cout<<"EL ID ES:" <<this->id<<endl;
			cout<<"EL NOMBRE ES:" <<this->nombre<<endl;
			cout<<"EL NUMERO ES:" <<this->numero<<endl;
			cout<<"EL SALDO ES:" +to_string(this->saldo)<<" Bs. "<<endl;
											
		}
};
											
			class CuentaCorriente : public Cuenta {
									
			private:
					int id;
					string descripcion;
					string tipo;
			public:
					CuentaCorriente(int idCuenta,string nombreCuenta,int numeroCuenta, float saldoCuenta, int id, string descripcion, string tipo)
					:Cuenta(idCuenta,nombreCuenta,numeroCuenta,saldoCuenta)
				{
					this->id=id;
					this->descripcion =descripcion;
					this->tipo=tipo;
					}	
					
					int getId(){
						return id;
					};
					string getDescripcion(){
						return descripcion;
					}
					string getTipo(){
						return tipo;
					}
			
						
						
						////////
					void setId(int id){
						this->id=id;
					}	
					void setDescripcion(string descripcion){
						this->descripcion=descripcion;
					}	
					void setTipo(string tipo){
						this->tipo=tipo;
					}	
											
			void detalleCC() {
					this->detalle();
					cout<<"EL ID DE CC ES: " <<this->id<<endl;
					cout<<"LA DESCRIPCION DE CC ES: " <<this->descripcion<<endl;
					cout<<"EL TIPO DE CC ES: " <<this->tipo<<endl;
													
			}
			
			
				
			
												
	};
											
												
											
	int main(){
			//int i=0;									
		// Declaring an iterator
		//list<CuentaCorriente>::iterator i;
												
		CuentaCorriente *CuentaCorriente1= new CuentaCorriente(1, "Cuenta BNB ", 21231,5000,1, "Cuenta Corriente","CC" );
		CuentaCorriente *CuentaCorriente2= new CuentaCorriente(2, "Cuenta UNION ", 3422,3000,2, "Cuenta Corriente","CC" );
		CuentaCorriente *CuentaCorriente3= new CuentaCorriente(3, "Cuenta GANADERO ", 234234,550,3, "Cuenta Corriente","CC" );
								
		
		
		
		
		
		
		/*for (i = CuentaCorriente.begin(); i != CuentaCorriente.end(); ++i) {
			cout << *i << " ";
		}*/
		
		//CuentaCorriente1->detalleCC();
		//CuentaCorriente2->detalleCC();
		//CuentaCorriente3->detalleCC();
		
	
		list<CuentaCorriente> *listaCC=new list<CuentaCorriente>();
		listaCC->push_back(*CuentaCorriente1);
		listaCC->push_back(*CuentaCorriente2);
		listaCC->push_back(*CuentaCorriente3);
		
		//list<CuentaCorriente>::iterator listaC;
		//listaC=listaCC.end();
		//listaC--;
		//listaC=3;
		
		//Utilizando un iterador que su funcion es mostrar el principio y final de una lista con las funciones begin y end podemos recorrer una lista 
		for (list<CuentaCorriente>::iterator RECORRER = listaCC->begin(); RECORRER != listaCC->end(); RECORRER++)
		{
			cout << " " << endl;
			RECORRER->detalleCC();
		}
		system("pause");
		return 0;
	
	}

