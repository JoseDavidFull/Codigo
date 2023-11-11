#include <iostream>
#include <cmath>

using namespace std;
                   // valor normal - valr lectura
/**error relativo =  ------------------------------ x100                 **//
	 //                       valor normal


double calcularErrorRelativo(double valorNormal, double valorLectura) {
	// Usamos la función fabs para obtener el valor absoluto
	double diferencia = fabs(valorNormal - valorLectura);
	double errorRelativo = (diferencia / fabs(valorNormal)) * 100.0;
	return errorRelativo;
}

int main() {
	double valorNormal, valorLectura;
	
	cout << "Ingrese el valor normal: ";
	cin >> valorNormal;
	
	cout << "Ingrese el valor de lectura: ";
	cin >> valorLectura;
	
	double error = calcularErrorRelativo(valorNormal, valorLectura);
	
	cout << "El error relativo es: " << error << "%" << endl;
	
	return 0;
}
