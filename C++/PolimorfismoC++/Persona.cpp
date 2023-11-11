#include <iostream>
using namespace std;
/*Clase Persona y clases derivadas: Crea una clase 
base llamada "Persona" con métodos virtuales como 
"saludar()" y "despedirse()". Luego, crea clases 
derivadas como "Estudiante", "Profesor" y "Empleado" 
que hereden de "Persona" y sobrescriban los métodos 
virtuales para saludar y despedirse de manera 
apropiada según su rol.*/

class Persona{
public:
	virtual void saludar(){
		cout<<"Las persona Saludan"<<"\n";
	}
};


class Estudiante : public Persona{
public:
	void saludar() override{
		cout<<"Los estudiantes saludan al profesor"<<"\n";
	}
};



int main() {
	Estudiante* mostrarE[2];
	Estudiante estudiante;
	mostrarE[0] = &estudiante;
	for(int i=0;i<1;i++){
		mostrarE[i]->saludar();
	}
	return 0;
}

