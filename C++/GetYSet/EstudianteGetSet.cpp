#include <iostream>
#include <string>
using namespace std;

class Estudiante {
private:
	string nombre;
	int edad;
	float calificacion;
	int numInscripcion;
	
public:
	Estudiante(string newNombre, int newEdad, float newCalificacion, int newNumeroInscripcion)
		: nombre(newNombre), edad(newEdad), calificacion(newCalificacion), numInscripcion(newNumeroInscripcion) {}
	
	string getNombre() {
		return nombre;
	}
	
	void setNombre(string newNombre) {
		nombre = newNombre;
	}
	
	int getEdad() {
		return edad;
	}
	
	void setEdad(int newEdad) {
		edad = newEdad;
	}
	
	float getCalificacion() {
		return calificacion;
	}
	
	void setCalificacion(float newCalificacion) {
		calificacion = newCalificacion;
	}
	
	int getNumeroInscripcion() {
		return numInscripcion;
	}
	
	void setNumeroInscripcion(int newNumeroInscripcion) {
		numInscripcion = newNumeroInscripcion;
	}
	
	void CalcularPromedio() {
		// No necesitas un bucle para calcular el promedio, simplemente acumula las calificaciones
		cout << "El promedio de las calificaciones es: " << calificacion << endl;
	}
	
	void MostrarDatos() {
		cout << "---Datos---" << endl;
		cout << "Nombre: " << nombre << endl;
		cout << "Edad: " << edad << endl;
		cout << "Calificacion: " << calificacion << endl;
		cout << "Numero de Inscripcion: " << numInscripcion << endl;
	}
};

int main() {
	int opcion;
	string nombre;
	int edad;
	float calificacion;
	int numeroInscripcion;
	
	cout << "Ingrese los datos del estudiante:" << endl;
	cout << "Nombre: ";
	cin >> nombre;
	cout << "Edad: ";
	cin >> edad;
	cout << "Calificacion: ";
	cin >> calificacion;
	cout << "Numero de Inscripcion: ";
	cin >> numeroInscripcion;
	
	Estudiante E(nombre, edad, calificacion, numeroInscripcion);
	
	do {
		cout << "[1] Cambiar Nombre" << endl;
		cout << "[2] Cambiar Edad" << endl;
		cout << "[3] Cambiar Calificacion" << endl;
		cout << "[4] Cambiar Numero de Inscripcion" << endl;
		cout << "[5] Calcular Promedio" << endl;
		cout << "[6] Mostrar Datos" << endl;
		cout << "[0] Salir" << endl;
		cin >> opcion;
		
		switch (opcion) {
		case 1:
			cout << "Inserta el nuevo Nombre: ";
			cin >> nombre;
			E.setNombre(nombre);
			break;
		case 2:
			cout << "Inserta la nueva Edad: ";
			cin >> edad;
			E.setEdad(edad);
			break;
		case 3:
			cout << "Inserta la nueva Calificacion: ";
			cin >> calificacion;
			E.setCalificacion(calificacion);
			break;
		case 4:
			cout << "Inserta el nuevo Numero de Inscripcion: ";
			cin >> numeroInscripcion;
			E.setNumeroInscripcion(numeroInscripcion);
			break;
		case 5:
			E.CalcularPromedio();
			break;
		case 6:
			E.MostrarDatos();
			break;
		case 0:
			break;
		default:
			cout << "Opción incorrecta" << endl;
		}
	} while (opcion != 0);
	
	cout << "Gracias Por Usar el Programa" << endl;
	return 0;
}
