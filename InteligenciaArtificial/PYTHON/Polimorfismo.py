class Animal:
    def hacer_sonido(self):
        pass

class Perro(Animal):
    def hacer_sonido(self):
        return "Woof!"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau!"

# Función que recibe un objeto Animal y llama al método hacer_sonido()
def hacer_ruido(animal):
    return animal.hacer_sonido()

# Crear objetos de las clases Perro y Gato
perro = Perro()
gato = Gato()

# Usar la función hacer_ruido() con diferentes objetos
print(hacer_ruido(perro))  # Salida: "Woof!"
print(hacer_ruido(gato))   # Salida: "Miau!"
