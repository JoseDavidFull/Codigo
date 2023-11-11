#include <iostream>
#include <cmath>
	
	using namespace std;

class FiguraGeometrica {
public:
	virtual float calcularArea() = 0;
};

class Rectangulo : public FiguraGeometrica {
private:
	float base;
	float altura;
public:
	Rectangulo(float b, float a) {
		base = b;
		altura = a;
	}
	float calcularArea() {
		return base * altura;
	}
};

class Triangulo :  public FiguraGeometrica {
private:
	float base;
	float altura;
public:
	Triangulo(float b, float a) {
		base = b;
		altura = a;
	}
	float calcularArea() {
		return base * altura/2.0;
	}
};

class Circulo : public FiguraGeometrica {
private:
	float radio;
public:
	Circulo(float r) {
		radio = r;
	}
	float calcularArea() {
		return M_PI * pow(radio, 2);
	}
};

int main() {
	FiguraGeometrica *figuras[3];
	
	figuras[0] = new Rectangulo(5, 10);
	figuras[1] = new Triangulo(5, 10);
	figuras[2] = new Circulo(5);
	
	cout << figuras[0]->calcularArea() << endl;
	cout << figuras[1]->calcularArea() << endl;
	cout << figuras[2]->calcularArea() << endl;
	
	return 0;
}

