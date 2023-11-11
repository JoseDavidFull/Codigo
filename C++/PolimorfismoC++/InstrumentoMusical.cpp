#include <iostream>
using namespace std;
/*Define una clase base InstrumentoMusical con una función virtual 
pura tocar(). Luego, crea clases derivadas Piano, Guitarra y Batería 
que implementen la función tocar() para producir el sonido característico 
de cada instrumento. Crea un vector de punteros a la clase base y asigna 
objetos de las clases derivadas a los elementos del vector. Luego, itera 
sobre el vector y llama a la función tocar() en cada objeto.*/


class InstrumentoMusical{
public:
	virtual void tocar(){
		cout<<"Los intrumentos se tocan con Amor"<<"\n";
	}
};

class Piano : public InstrumentoMusical{
public:
	void tocar() override{
		cout<<"El piano se toca con las teclas"<<"\n";
	}
};

class Guitarra : public InstrumentoMusical{
public:
	void tocar() override{
		cout<<"La guitarra se toca Con rudeza"<<"\n";
	}
};




int main() {
	InstrumentoMusical* mostrar[3];
	
	InstrumentoMusical instrumentoMusical;
	Piano piano;
	Guitarra guitarra;
	
	mostrar[0] = &instrumentoMusical;
	mostrar[1] = &piano;
	mostrar[2] = &guitarra;
	for(int i=0;i<3;i++){
		mostrar[i]->tocar();
	}
	return 0;
}

