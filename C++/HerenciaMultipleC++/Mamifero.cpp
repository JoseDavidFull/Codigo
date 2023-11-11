#include <iostream>
using namespace std;

// Clase base "Mamifero"
class Mamifero {
public:
	void darALuz() {
		cout << "El mamífero da a luz a crías vivas." << endl;
	}
};

// Clase base "Oviparo"
class Oviparo { 
public:
	void ponerHuevos() {
		cout << "El ovíparo pone huevos para reproducirse." << endl;
	}
};

// Clase derivada "Ornitorrinco" que hereda de "Mamifero" y "Oviparo"
class Ornitorrinco : public Mamifero, public Oviparo {
public:
	void nadar() {
		cout << "El ornitorrinco es capaz de nadar en el agua." << endl;
	}
};

int main() {
	Ornitorrinco ornitorrinco;
	ornitorrinco.darALuz(); // Heredado de "Mamifero"
	ornitorrinco.ponerHuevos(); // Heredado de "Oviparo"
	ornitorrinco.nadar(); // Propio de "Ornitorrinco"
	
	return 0;
}
