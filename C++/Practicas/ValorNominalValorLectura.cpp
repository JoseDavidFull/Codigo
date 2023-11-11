#include <iostream>
#include <cmath> // Necesario para la función fabs

using namespace std;

// Función para calcular el error relativo
double calcularErrorRelativo(double valorNominal, double valorLectura) {
	// Usamos la función fabs para obtener el valor absoluto
	double diferencia = fabs(valorNominal - valorLectura);
	double errorRelativo = (diferencia / fabs(valorNominal)) * 100.0;
	return errorRelativo;
}

int main() {
	double valorNominal, valorLectura;
	
	cout << "Ingrese el valor nominal: ";
	cin >> valorNominal;
	
	cout << "Ingrese el valor de lectura: ";
	cin >> valorLectura;
	
	double error = calcularErrorRelativo(valorNominal, valorLectura);
	
	cout << "El error relativo es: " << error << "%" << endl;
	
	return 0;
}

