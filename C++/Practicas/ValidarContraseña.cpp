#include <iostream>
#include <string>
using namespace std;

/*Validación de Contraseña: Escribe una 
función que valide si una contraseña 
ingresada cumple con ciertos requisitos, 
como tener al menos 8 caracteres y 
contener al menos un número 
y un carácter especial.*/

void ValidarContrasea(string contrasea){
	if(contrasea.length() > 8){
		cout<<"Se valida La contraseña "<<endl;
	}
	else{
		cout<<"No se Valida la Contraseña "<<endl;
	}
}

int main() {
	ValidarContrasea("HolaComoEstas");
	return 0;
}
