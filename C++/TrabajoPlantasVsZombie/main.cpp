#include <iostream>
#include "Planta.h"

int main() {
    Planta miPlanta;
    
    std::cout << "Tamaño alto inicial: " << miPlanta.getTamano_alto() << std::endl;
    std::cout << "Tamaño ancho inicial: " << miPlanta.getTamano_ancho() << std::endl;

    miPlanta.crecer(2.0);

    std::cout << "Tamaño alto después de crecer: " << miPlanta.getTamano_alto() << std::endl;
    std::cout << "Tamaño ancho después de crecer: " << miPlanta.getTamano_ancho() << std::endl;

    return 0;
}
