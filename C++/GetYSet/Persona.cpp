#include <iostream>
using namespace std;

class Persona {
private:
	string nombre;
	int edad;
	
public:
	// Getter para obtener el nombre
	string getNombre() {
		return nombre;
	}
	
	// Setter para establecer el nombre
	void setNombre(string nuevoNombre) {
		nombre = nuevoNombre;
	}
	
	// Getter para obtener la edad
	int getEdad() {
		return edad;
	}
	
	// Setter para establecer la edad
	void setEdad(int nuevaEdad) {
		if (nuevaEdad >= 0) {
			edad = nuevaEdad;
		} else {
			cout << "La edad no puede ser negativa." << endl;
		}
	}
};

int main() {
	Persona persona;
	
	// Establecer el nombre utilizando el setter
	persona.setNombre("Juan");
	
	// Obtener el nombre utilizando el getter y mostrarlo en pantalla
	cout << "Nombre: " << persona.getNombre() << endl;
	
	// Establecer la edad utilizando el setter
	persona.setEdad(-25);
	
	// Obtener la edad utilizando el getter y mostrarla en pantalla
	cout << "Edad: " << persona.getEdad() << endl;
	
	return 0;
}
