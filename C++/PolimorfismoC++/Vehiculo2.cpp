#include <iostream>
using namespace std;
/*Implementa una clase base llamada "Vehiculo" con un método virtual 
puro llamado "acelerar". Luego, crea clases derivadas como "Automovil",
que hereden de la clase "Vehiculo" y proporcionen
implementaciones específicas del método "acelerar".*/

class Vehiculo{
protected:
	string cilindrada;
public:
	Vehiculo(string);//constructor
	virtual void acelerar();//metodo virtual
};

Vehiculo::Vehiculo(string cilindrada){//constructor
	this->cilindrada = cilindrada;
}

void Vehiculo::acelerar(){//metodo
	cout<<"Cilindrada "<<this->cilindrada<<" Cc "<<"\n";
}


class Automovil : public Vehiculo{
protected:
	string color;
public:
	Automovil(string,string);
	void acelerar() override;
};


Automovil::Automovil(string cilindrada,string color) : Vehiculo(cilindrada){
	this->color = color;
}


void Automovil::acelerar(){
	cout<<"cilindrada Automovil "<<this->cilindrada<<"\n";
	cout<<"Color Automovil "<<this->color<<"\n";
}




int main() {
	string cilindradaV;
	string cilindradaA;
	string colorA;
	cin>>cilindradaV;
	cin>>cilindradaA;
	cin>>colorA;
	
	
	Vehiculo* informacion[1];
	Automovil* informacion2[2];
	
	Vehiculo* vehiculo = new Vehiculo(cilindradaV);
	informacion[0] = vehiculo;
	
	Automovil* automovil = new Automovil(cilindradaA,colorA);
	informacion2[0] = automovil;
	informacion2[1] = automovil;
	
	for(int i=0;i<1;i++){
		informacion[i]->acelerar();
	}
	
	for(int j=0;j<1 ;j++){
		informacion2[j]->acelerar();
	}
	return 0;
}

