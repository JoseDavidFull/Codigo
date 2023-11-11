#include <iostream>
#include <string>

class Dibujo2 {
private:
	int n;
	
public:
	void dibujo(int n) {
		this->n = n-1;
		double mitad = (this->n / 2) + 0.5;
		
		for (int k =  0; k < n; k++) {
			for (int i = 0; i <= this->n - 1; i++) {
				std::cout << "_";
			}
			std::cout << "*\n";
			
			int aux = this->n - 1;
			int esp = 0;
			for (int i = 0; i <= this->n - 1; i++) {
				if (i != mitad) {
					aux--;
					for (int j = 0; j <= aux; j++) {
						std::cout << "_";
					}
					std::cout << "*";
					if (i < mitad) {
						for (int j = 0; j <= esp; j++) {
							std::cout << "_";
						}
					} else {
						for (int j = 0; j <= esp; j++) {
							std::cout << "_";
						}
					}
					std::cout << "*\n";
					esp += 2;
				}
			}
		}
	}
};

int main() {
	int n;
	std::cout << "Ingrese un número : ";
	std::cin >> n;
	
	Dibujo2 dibujo2;
	dibujo2.dibujo(n);
	
	return 0;
}


