#include "Forma.h"


Forma::Forma() {
    nombre = "Forma";
}



Cuadrado::Cuadrado() {
    nombre = "Cuadrado";
    lado = 6;
}
float Cuadrado::getArea() {
    return lado * lado;
}
void Cuadrado::dibujar() {
    if (lado > 0) {
        // Iterar para imprimir las filas del cuadrado
        for (int i = 0; i < lado; i++) {
            // Imprimir una fila de asteriscos
            for (int j = 0; j < lado; j++) {
                cout << "* ";
            }
            cout << endl;
        }
    }
    else {
        cout << "El valor ingresado debe ser mayor que 0." << endl;
    }
}



Rectangulo::Rectangulo() {
    nombre = "Rectangulo";
    a = 4;
    b = 8;
}
float Rectangulo::getArea() {
    return a * b;
}

void Rectangulo::dibujar() {
    // Verificar si el ancho y la altura ingresados son mayores que 0
    if (b > 0 && a > 0) {
        // Imprimir un rectángulo de asteriscos con el ancho y la altura especificados
        for (int i = 1; i <= a; i++) {
            for (int j = 1; j <= b; j++) {
                cout << "* ";
            }
            cout << endl;
        }
    }
    else {
        cout << "El ancho y la altura ingresados deben ser mayores que 0." << endl;
    }
}



TrianguloRectangulo::TrianguloRectangulo() {
    nombre = "Triangulo Rectangulo";
    a = 4;
    b = 6;
}
float TrianguloRectangulo::getArea() {
    return (a * b) / 2;
}

void TrianguloRectangulo::dibujar() {
    // Verificar si el ancho y la altura ingresados son mayores que 0
    if (b > 0 && a > 0) {
        // Imprimir un rectángulo de asteriscos con el ancho y la altura especificados
        for (int i = 1; i <= a; i++) {
            for (int j = 1; j <= i; j++) {
                cout << "* ";
            }
            cout << endl;
        }
    }
    else {
        cout << "El ancho y la altura ingresados deben ser mayores que 0." << endl;
    }
}
