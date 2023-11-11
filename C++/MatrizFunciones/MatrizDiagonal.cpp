#include <iostream>
using namespace std;
// Funci�n para crear y mostrar una matriz diagonal
void crearMatrizDiagonal(int size) {
	// Crear la matriz como un arreglo est�tico bidimensional
	int matriz[10][10];
	
	// Asignar 1 en la diagonal principal y 0 en los dem�s elementos
	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			if (i == j) {
				matriz[i][j] = 1;
			} else {
				matriz[i][j] = 0;
			}
		}
	}
	
	// Mostrar la matriz
	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			std::cout << matriz[i][j] << " ";
		}
		cout << std::endl;
	}
}

// Funci�n principal
int main() {
	int size;
	cout << "Ingrese el tama�o de la matriz: ";
	cin >> size;
	
	// Llamar a la funci�n para crear y mostrar la matriz diagonal
	crearMatrizDiagonal(size);
	
	return 0;
}

