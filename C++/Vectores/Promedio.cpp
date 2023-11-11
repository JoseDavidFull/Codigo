#include <iostream>
using namespace std;

int main() {
    int v[100], n, suma = 0, promedio = 0;

    cout << "Ingresa el total de números: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "Ingrese el número " << i + 1 << ": ";
        cin >> v[i];
        suma += v[i];
    }

    if (n > 0) {
        promedio = suma / n;
        cout << "El promedio es: " << promedio << endl;
    } else {
        cout << "No se puede calcular el promedio para 0 números." << endl;
    }

    return 0;
}
