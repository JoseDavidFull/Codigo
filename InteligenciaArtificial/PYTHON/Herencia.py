'''
class Animal:
    def __init__(self, nombre, tipo):
        self.nombre = nombre
        self.tipo = tipo
    
    def hacer_sonido(self):
        pass

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre, "Perro")
        self.raza = raza
    
    def hacer_sonido(self):
        return "Woof!"

class Gato(Animal):
    def __init__(self, nombre, color):
        super().__init__(nombre, "Gato")
        self.color = color
    
    def hacer_sonido(self):
        return "Meow!"

perro1 = Perro("Rex", "Labrador")
gato1 = Gato("Whiskers", "Gris")

print(perro1.nombre, perro1.tipo, perro1.raza)
print(perro1.hacer_sonido())

print(gato1.nombre, gato1.tipo, gato1.color)
print(gato1.hacer_sonido())
'''
'''
Animales: Define una clase base Animal 
con atributos como nombre y edad, y 
subclases como Perro, Gato y Pajaro 
que hereden de ella y tengan atributos 
adicionales.'''

class Animal:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad
    

class Perro(Animal):
    def __init__(self,nombre,edad,raza):
        super().__init__(nombre,edad)
        self.raza = raza
    
    def Mostrar(self):
        return f"Nombre es {self.nombre} edad {self.edad} raza {self.raza}"
    

MostrarPerro  = Perro("rambo",5,"Dover")
print(MostrarPerro.Mostrar())
