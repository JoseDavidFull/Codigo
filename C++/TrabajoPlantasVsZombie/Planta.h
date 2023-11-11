class Planta {
private:
    float posicion_x;
    float posicion_y;
    float tamano_alto;
    float tamano_ancho;
    int danio;
    int velocidadDisparo;
public:
    int vida;
    //constructor
    Planta();
    //Getters
    float getTamano_alto();
    float getTamano_ancho();
    //metodos (Comportamiento)
    void crecer(float incremento);
};