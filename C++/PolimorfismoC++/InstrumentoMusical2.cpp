#include <iostream>
using namespace std;
/*Crea una clase base llamada InstrumentoMusical con una función virtual 
pura llamada Tocar(). Deriva tres clases: Guitarra, Piano y Bateria. 
Implementa la función Tocar() en cada una de las clases derivadas para 
que reproduzcan el sonido característico de cada instrumento.*/


class InstrumentoMusical{
protected:
	string color;
public:
	InstrumentoMusical(string);
	virtual void Tocar();
};

InstrumentoMusical::InstrumentoMusical(string color){
	this->color = color;
}

void InstrumentoMusical::Tocar(){
	cout<<"Color Instrumento "<<this->color<<"\n";
}
 


class Bateria : public InstrumentoMusical{
protected:
	int precio;
public:
	Bateria(string , int);
	void Tocar() override;
};


Bateria::Bateria(string color, int precio) : InstrumentoMusical(color) {
	this->precio = precio;
}

void Bateria::Tocar(){
	cout<<"Color Bateria "<<this->color<<"\n";
	cout<<"Precio Bateria "<<this->precio<<"\n";
}



int main() {
	string colorI;
	string colorB;
	int precioB;
	cout<<"Ingresa color Intrumento: ";cin>>colorI;
	cout<<"Ingresa Color De Bateria: ";cin>>colorB;
	cout<<"Ingresa Precio Bateria: ";cin>>precioB;
	
	InstrumentoMusical* instrumentos[1];
	Bateria* baterias[2];
	
	InstrumentoMusical* instrumentoMusical = new InstrumentoMusical(colorI);
	Bateria* bateria = new Bateria(colorB,precioB);

	instrumentos[0] = instrumentoMusical;

	baterias[0] =  bateria;
	baterias[1] =  bateria;
	
	for(int i=0;i<=1;i++){
		instrumentos[i] ->Tocar();
	}
	for(int j=0;j<2;j++){
		baterias[j] ->Tocar();
	}
	return 0;
}

