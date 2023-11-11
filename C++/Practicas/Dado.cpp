#include <iostream>
#include <cstdlib> 
#include <ctime> 
using namespace std;

class Dado {
private:
	int lanzar;
	
public:
	Dado(int);
	int lanzarDado(); // Cambiado el tipo de retorno a int
	void imprimirDado();
};

Dado::Dado(int lanzar) {
	this->lanzar = lanzar;
}

int Dado::lanzarDado() { // Cambiado el tipo de retorno a int
	int valor = rand() % 6 + 1;
	cout << valor << endl;
	return valor; // Devuelve el valor del dado
}

void Dado::imprimirDado() {
	int valor = lanzarDado(); // Obtener el valor del dado
	
	cout << "---" << endl;
	
	switch (valor) {
	case 1:
		cout << " * " << endl;
		break;
	case 2:
		cout << "* * " << endl;
		break;
	case 3:
		cout << " * " << endl;
		cout << "* * " << endl;
		break;
	case 4:
		cout << "* * " << endl;
		cout << "* * " << endl;
		break;
	case 5:
		cout << "* * " << endl;
		cout << " *  " << endl;
		cout << "* * " << endl;
		break;
	case 6:
		cout << "* * " << endl;
		cout << "* * " << endl;
		cout << "* * " << endl;
		break;
	default:
		cout << "Error" << endl;
	}
	
	cout << "---" << endl;
}

int main() {
	srand(static_cast<unsigned int>(std::time(nullptr)));
	Dado d1(0);
	int opcion;
	do {
		cout << "[1] Lanzar Dado " << endl;
		cout << "[2] ImprimirDado " << endl;
		cout << "[0] salir " << endl;
		cin >> opcion;
		switch (opcion) {
		case 1:
			d1.lanzarDado();
			break;
		case 2:
			d1.imprimirDado();
			break;
		case 0:
			break;
		}
	} while (opcion != 0);
	return 0;
}
