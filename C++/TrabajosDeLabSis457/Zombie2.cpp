#include <iostream>
#include <memory>

class Actor {
private:
	int PosicionX;
	int PosicionY;
	bool vida;
	
public:
	Actor(int x, int y, bool v) : PosicionX(x), PosicionY(y), vida(v) {}
	
	int getPosicionX() const { return PosicionX; }
	int getPosicionY() const { return PosicionY; }
	bool getVida() const { return vida; }
	
	void setPosicionX(int x) { PosicionX = x; }
	void setPosicionY(int y) { PosicionY = y; }
	void setVida(bool v) { vida = v; }
};

class Planta : public Actor {
private:
	int danio;
	int disparar;
	
public:
	Planta(int x, int y, bool v, int d, int disp) : Actor(x, y, v), danio(d), disparar(disp) {}
	

	int getDanio() const { return danio; }
	int getDisparar() const { return disparar; }

	void setDanio(int d) { danio = d; }
	void setDisparar(int disp) { disparar = disp; }
};

class Zombie : public Actor {
private:
	int danio;
	int avanzar;
	
public:
	Zombie(int x, int y, bool v, int d, int av) : Actor(x, y, v), danio(d), avanzar(av) {}
	

	int getDanio() const { return danio; }
	int getAvanzar() const { return avanzar; }
	

	void setDanio(int d) { danio = d; }
	void setAvanzar(int av) { avanzar = av; }
};

class Proyectil : public Actor {
public:
	Proyectil(int x, int y, bool v) : Actor(x, y, v) {}
	

};

class Sol : public Actor {
public:
	Sol(int x, int y, bool v) : Actor(x, y, v) {}
	
};

int main() {

	std::unique_ptr<Planta> planta = std::make_unique<Planta>(10, 5, true, 20, 2);
	std::unique_ptr<Zombie> zombie = std::make_unique<Zombie>(50, 3, true, 15, 1);
	std::unique_ptr<Proyectil> proyectil = std::make_unique<Proyectil>(0, 0, true);
	std::unique_ptr<Sol> sol = std::make_unique<Sol>(0, 0, true);
	
	
	planta->setPosicionX(2);
	planta->setPosicionY(3);
	planta->setVida(true);
	
	zombie->setPosicionX(8);
	zombie->setPosicionY(4);
	zombie->setVida(true);
	
	proyectil->setPosicionX(5);
	proyectil->setPosicionY(2);
	proyectil->setVida(true);
	
	sol->setPosicionX(1);
	sol->setPosicionY(1);
	sol->setVida(true);
	

	std::cout << "Planta en (" << planta->getPosicionX() << ", " << planta->getPosicionY() << ")" << std::endl;
	std::cout << "Zombie en (" << zombie->getPosicionX() << ", " << zombie->getPosicionY() << ")" << std::endl;
	std::cout << "Proyectil en (" << proyectil->getPosicionX() << ", " << proyectil->getPosicionY() << ")" << std::endl;
	std::cout << "Sol en (" << sol->getPosicionX() << ", " << sol->getPosicionY() << ")" << std::endl;
	

	std::cout << "Daño de Planta: " << planta->getDanio() << std::endl;
	std::cout << "Avance de Zombie: " << zombie->getAvanzar() << std::endl;
	
	return 0;
}
