#include <iostream>
using namespace std;

/*Crea una clase base llamada "Mascota" con atributos 
como nombre y edad. Luego, crea clases derivadas como 
"Perro" y "Gato" que hereden de la clase base. La clase
"Perro" debe tener un m�todo adicional llamado "jugar()"
y la clase "Gato" debe tener un m�todo adicional llamado "ronronear()".*/

class Mascota{
	private:
		string nombre;
		int edad;
		public:
			Mascota(string,int);
			void Mostrar();
};

Mascota::Mascota(string _nombre,int _edad){
	nombre = _nombre;
	edad = _edad;
}

void Mascota::Mostrar(){
	cout<<"nombre "<<nombre<<"\n";
	cout<<"edad "<<edad<<"\n";
}



class Perro : public Mascota{
	private:
		string color;
	public:
		Perro(string,int ,string);
		void jugar();
};


Perro::Perro(string _nombre,int _edad,string _color): Mascota(_nombre, _edad){
	Mostrar();
	color = _color;
}

void Perro::jugar(){
	cout<<"color "<<color<<"\n";
}


class Gato : public Mascota{
private:
	string color;
public:
	Gato(string,int ,string);
	void ronronear();
};


Gato::Gato(string _nombre,int _edad,string _color): Mascota(_nombre, _edad){
	Mostrar();
	color = _color;
}

void Gato::ronronear(){
	cout<<"color "<<color<<"\n";
}




int main() {
	string n1,n2;
	int e1,e2;
	string c1,c2;
	cout<<"Datos Perro"<<"\n";
	cout<<"nombre ";cin>>n1;
	cout<<"edad ";cin>>e1;
	cout<<"color ";cin>>c1;
	cout<<"Datos Gato"<<"\n";
	cout<<"nombre ";cin>>n2;
	cout<<"edad ";cin>>e2;
	cout<<"color ";cin>>c2;
	Perro p(n1,e1,c1);
	p.jugar();
	Gato g(n2,e2,c2);
	g.ronronear();
	return 0;
}

