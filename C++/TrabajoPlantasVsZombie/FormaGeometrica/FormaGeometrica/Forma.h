#include <iostream>

using namespace std;

class Forma {
public:
    string nombre;
    Forma();
    virtual void dibujar() = 0;
    virtual float getArea() = 0;
};



class Cuadrado : public Forma {
public:
    int lado;
    Cuadrado();
    void dibujar();
    float getArea();
};


class Rectangulo : public Forma {
public:
    int a;
    int b;
    Rectangulo();
    void dibujar();
    float getArea();
};


class TrianguloRectangulo : public Forma {
public:
    int a;
    int b;
    TrianguloRectangulo();
    void dibujar();
    float getArea();
};