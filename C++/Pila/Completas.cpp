#include <iostream>
#include <stdlib.h>
using namespace std;
//Pila


struct Nodo{// 
	int dato; // tipo de datos
	Nodo *siguiente; // puntero
};


void agregarPila(Nodo *&,int); //Prototipo

int main(int argc, char *argv[]) {
	Nodo *pila = NULL;  // que puntero pila es igual a cero que no tiene valor aun
	int x,y,z; // creacion de variables
	cin>>x>>y>>z; //  pedir datos por teclado
	agregarPila(pila,x); // llamas a la funcion agregarPila con los parametros pila, x;
	agregarPila(pila,y); // llamas a la funcion agregarPila con los parametros pila, y;
	agregarPila(pila,z); // llamas a la funcion agregarPila con los parametros pila, z;
	return 0;
}

void agregarPila(Nodo *&pila,int n){ //tiene dos parametros // 1er Nodo por referencia // 2do variable n para agregar a pila
	Nodo *nuevo_nodo = new Nodo(); // 1erPaso(crear el espacio en memoria para un nuevo nodo)//
	nuevo_nodo->dato = n; //2do paso rellenar el dato
	nuevo_nodo->siguiente = pila; // 3er paso 
	pila = nuevo_nodo; // 4to paso igualar pila a nuevo_nodo
}


/*struct Nodo{
	int dato; // puede ser tambien float,string o char,etc
	Nodo *siguiente//Tipo puntero
};
						dato
void agregarPila(Nodo *&,int);// funcion agregarPila que es el prototype
void agregarPila(Nodo *&,int){

}
*/
