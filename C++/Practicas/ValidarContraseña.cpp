#include <iostream>
#include <string>
using namespace std;

/*Validaci�n de Contrase�a: Escribe una 
funci�n que valide si una contrase�a 
ingresada cumple con ciertos requisitos, 
como tener al menos 8 caracteres y 
contener al menos un n�mero 
y un car�cter especial.*/

void ValidarContrasea(string contrasea){
	if(contrasea.length() > 8){
		cout<<"Se valida La contrase�a "<<endl;
	}
	else{
		cout<<"No se Valida la Contrase�a "<<endl;
	}
}

int main() {
	ValidarContrasea("HolaComoEstas");
	return 0;
}
