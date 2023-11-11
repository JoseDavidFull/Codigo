#include <iostream>
using namespace std;

/*Clase Punto: Crea una clase Punto con 
atributos x e y. Implementa 
métodos GetX() y GetY() para obtener 
las coordenadas, y métodos 
SetX() y SetY() para establecer las coordenadas.*/


class Punto{//clases
private://atrubutos privados
	int x; //atributo a
	int y; //atributo b
	int z; //atributo c
public:
	int getX(){
		return x;
	}
	void setX(int newX){
		this->x = newX;
	}
	
	int getY(){
		return y;
	}
	
	void setY(int newY){
		this->y = newY;
	}
		
	int getZ(){
		return z;
	}
		
	void setZ(int newZ){
		this->z = newZ;
	}
	
};


int main() {
	Punto Mostrar;
	Mostrar.setX(5);
	Mostrar.setY(5);
	cout<<Mostrar.getX()<<endl;
	cout<<Mostrar.getY()<<endl;
	return 0;
}
