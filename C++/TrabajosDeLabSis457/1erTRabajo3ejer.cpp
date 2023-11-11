#include <iostream>


using namespace std;

void formatear(short h,short m,short s){
	if (h < 10) {
		cout << "0";
	}
	cout << h << ":";
	
	if (m < 10) {
		cout << "0";
	}
	cout << m << ":";
	
	if (s < 10) {
		cout << "0";
	}
	cout << s << endl;
}

void esPalindromo(short h2,short m2, short s2){
	if(h2 == s2 || m2 == m2 || s2 == h2){
		cout<<true<<"\n";
	}
	else{
		cout<<false<<"\n";
	}
}
	

	
int main() {
	short h,m,s,h2,m2,s2;
	cin>>h>>m>>s>>h2>>m2>>s2;
	formatear(h,m,s);
	esPalindromo(h2,m2,s2);
	system("pause");
	return 0;
}

