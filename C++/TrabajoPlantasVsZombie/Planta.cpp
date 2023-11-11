#include "Planta.h"

//constructores
Planta::Planta() {
	posicion_x = 0;
	posicion_y = 0;
	tamano_ancho = 3;
	tamano_alto = 3;
	velocidadDisparo = 3;
	danio = 2;
	vida = 10;
}
//getters
float Planta::getTamano_alto() {
	return tamano_alto;
}
float Planta::getTamano_ancho() {
	return tamano_ancho;
}
//metodos
void Planta::crecer(float incremento) {
	tamano_alto += incremento;
	tamano_ancho += incremento;
}