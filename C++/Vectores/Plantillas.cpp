#include <iostream>
#include <string>
#include <vector>
using namespace std;



int main() {
	vector<int> valor;
	valor.push_back(50);
	valor.pop_back();
	valor.push_back(100);
	
	valor.push_back(150);
	for(int i=0;i<valor.size();i++){
		
		cout<<valor[i]<<endl;
	}
	return 0;
}
