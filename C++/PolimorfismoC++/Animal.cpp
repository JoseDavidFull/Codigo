#include <iostream>

class Animal {
public:
	virtual void hacerSonido() {
		std::cout << "El animal hace un sonido" << std::endl;
	}
};

class Perro : public Animal {
public:
	void hacerSonido() override {
		std::cout << "El perro ladra" << std::endl;
	}
};

class Gato : public Animal {
public:
	void hacerSonido() override {
		std::cout << "El gato maulla" << std::endl;
	}
};

int main() {
	Animal* animal = new Animal();
	Animal* perro = new Perro();
	Animal* gato = new Gato();
	
	animal->hacerSonido();  // El animal hace un sonido
	perro->hacerSonido();   // El perro ladra
	gato->hacerSonido();    // El gato maulla
	return 0;
}

