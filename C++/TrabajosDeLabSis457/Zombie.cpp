#include <iostream>
using namespace std;

class Zombie {
private:
	int posicionX;
	int posicionY;
	int velocidad;
	int nivelVida;
	int alto;
	int ancho;
	
public:
	Zombie(int, int, int, int, int, int); 
	void avanzar() {
		posicionX += velocidad;
	}
	int getPosicionX() {
		return posicionX;
	}
	int getPosicionY() {
		return posicionY;
	}
	int getVelocidad() {
		return velocidad;
	}
	void setVelocidad(int vel) {
		velocidad = vel;
	}
	int getVida() {
		return nivelVida;
	}
	int getAlto() {
		return alto;
	}
	int getAncho() {
		return ancho;
	}
};

Zombie::Zombie(int posX, int posY,int altura, int ancho ,int vida, int vel) {
	posicionX = posX;
	posicionY = posY;
	nivelVida = vida;
	velocidad = vel;
	alto = altura; 
	ancho = ancho; 
}

int main() {
	Zombie Z1(3,  4, 0  ,  0,0, 5); // Aquí, Z1 no tiene valores para alto y ancho
	Zombie Z2(0,  0, 70 , 70,0, 5); // x, y, vida, velocidad, alto, ancho
	
	cout << "Zombie 1" << endl;
	cout << "Posicion X: " << Z1.getPosicionX() << endl;
	cout << "Posicion Y: " << Z1.getPosicionY() << endl;
	cout << "Vida      : " << Z1.getVida() << endl;
	cout << "Velocidad : " << Z1.getVelocidad() << endl;
	
	cout << "Zombie 2" << endl;
	cout << "Posicion X: " << Z2.getPosicionX() << endl;
	cout << "Posicion Y: " << Z2.getPosicionY() << endl;
	cout << "Vida      : " << Z2.getVida() << endl;
	cout << "Alto      : " << Z2.getAlto() << endl;
	cout << "Ancho     : " << Z2.getAncho() << endl;
	cout << "Velocidad : " << Z2.getVelocidad() << endl;
	
	return 0;
}
