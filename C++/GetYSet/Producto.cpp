#include <iostream>
using namespace std;
/*Crear una clase "Producto":
Define una clase "Producto" con los atributos 
"nombre" y "precio". Implementa los métodos 
"getNombre", "setNombre", "getPrecio" y "setPrecio" 
para obtener y establecer los valores de los 
atributos.*/

class Producto{
private:
	string nombre;
	float precio;
public:
	string getNombre(){
		return nombre;
	}
	void setNombre(string newNombre){
		this->nombre = newNombre;
	}
	float getPrecio(){
		return precio;
	}
	void setPrecio(float newprecio){
		this->precio = newprecio;
	}
};

int main() {
	Producto producto;
	producto.setNombre("David");
	producto.setPrecio(105000);
	cout<<"nombre "<<producto.getNombre()<<"\n"<<"precio "<<producto.getPrecio()<<"\n";
	return 0;
}
