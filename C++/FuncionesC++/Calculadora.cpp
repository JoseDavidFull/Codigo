#include <iostream>
using namespace std;


void suma(int x,int y);
void resta(int x,int y);
void mul(int x,int y);
void divicion(int x,int y);


int main() {
	int a,b;
	cin>>a>>b;
	suma(a,b);
	resta(a,b);
	mul(a,b);
	divicion(a,b);
	return 0;
}


void suma(int x,int y){
	cout<<"La suma es :"<<x+y<<"\n";
}
	
void resta(int x,int y){
	cout<<"La resta es :"<<x-y<<"\n";
}

void mul(int x,int y){
	cout<<"La multiplicacion es :"<<x*y<<"\n";
}
	
void divicion(int x,int y){
	cout<<"La div es :"<<x/y<<"\n";
}
	
	
	
	
	
	
	
	
