#include <iostream>
using namespace std;

/*Define una clase Estudiante con atributos para el nombre, 
la edad y el promedio de calificaciones. Implementa métodos 
getter y setter para cada atributo.*/

class Estudiante{
private:
	string nombre;

public:
	string getNombre(){
		return nombre;
	}
		
	void setNombre(string newNombre){
		this->nombre = newNombre;
	}
	
};

int main() {
	Estudiante estudiante; // objeto
	estudiante.setNombre("David");
	cout<<"nombre "<<estudiante.getNombre()<<endl;
	return 0;
}

