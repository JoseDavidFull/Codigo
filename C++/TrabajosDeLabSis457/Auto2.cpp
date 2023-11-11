#include <iostream>
using namespace std;

class Auto {
private:
	int espacio;
	int velocidad;
	int carril;
	
public:
	Auto() {
		espacio = 0;
		velocidad = 1;
		carril = 2;
	}
	
	void subir() {
		if (carril > 1) {
			carril--;
		}
	}
	
	void bajar() {
		if (carril < 4) {
			carril++;
		}
	}
	
	void retroceder() {
		espacio = espacio - velocidad;
	}
	
	void avanzar() {
		espacio = espacio + velocidad;
	}
	
	int getVelocidad() {
		return velocidad;
	}
	
	void setVelocidad(int newVelocidad) {
		velocidad = newVelocidad;
	}
	
	int getEspacio() {
		return espacio;
	}
	
	int getCarril() {
		return carril;
	}
};

int main() {
	Auto d1;
	int opcion;
	
	do {
		// Dibuja el tablero
		for (int i = 1; i <= 50; i++) {
			cout << "=";
		}
		cout << "\n\n";
		
		for (int y = 0; y <= 4; y++) {
			for (int x = 0; x <= 50; x++) {
				if (y == d1.getCarril()) {
					if (x == d1.getEspacio()) {
						cout<<"[##>]"<<endl;
					} else {
						cout << " ";
					}
				} else {
					cout << " ";
				}
			}
			cout << endl;
		}
		
		for (int i = 1; i <= 50; i++) {
			cout << "=";
		}
		
		cout << "\n\n";
		cout << "Espacio recorrido: " << d1.getEspacio() << endl;
		cout << "Carril: " << d1.getCarril() << endl;
		cout << "Velocidad: " << d1.getVelocidad() << endl;
		
		cout << "[8] Subir carril\n";
		cout << "[2] Bajar carril\n";
		cout << "[9] Acelerar\n";
		cout << "[4] Retroceder\n";
		cout << "[6] Avanzar \n"; // Nueva opci�n
		cout << "[0] Salir\n";
		
		cin >> opcion;
		
		switch (opcion) {
		case 8:
			d1.subir();
			break;
		case 2:
			d1.bajar();
			break;
		case 9:
			int nuevaVelocidad;
			cout << "Nueva velocidad: ";
			cin >> nuevaVelocidad;
			d1.setVelocidad(nuevaVelocidad);
			break;
		case 4:
			d1.retroceder();
			break;
		case 6:
			d1.avanzar(); // Agregamos la opci�n de avanzar hacia la derecha
			break;
		case 0:
			break;
		default:
			cout << "---Error---" << endl;
		}
	} while (opcion != 0);
	
	return 0;
}
