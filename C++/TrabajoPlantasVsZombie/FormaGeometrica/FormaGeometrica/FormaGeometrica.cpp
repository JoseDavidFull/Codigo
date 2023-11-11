#include <iostream>
#include "Forma.h"

using namespace std;

void verInfo(Forma* f1) {
    cout << "Nombre: " << f1->nombre << endl;
    f1->dibujar();
    cout << "Area: " << f1->getArea() << endl;
    cout << endl;
}

int main() {

    Cuadrado c1;
    Rectangulo r1;
    TrianguloRectangulo tr1;

    verInfo(&c1);

    verInfo(&r1);

    verInfo(&tr1);


    system("pause");
    return 0;
}
