'''
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")

class Trabajador:
    def __init__(self, salario):
        self.salario = salario

    def trabajar(self):
        print(f"Estoy trabajando y ganando {self.salario}.")

class Estudiante:
    def __init__(self, institucion):
        self.institucion = institucion

    def estudiar(self):
        print(f"Estoy estudiando en {self.institucion}.")

class EstudianteTrabajador(Persona, Trabajador, Estudiante):
    def __init__(self, nombre, edad, salario, institucion):
        Persona.__init__(self, nombre, edad)
        Trabajador.__init__(self, salario)
        Estudiante.__init__(self, institucion)

    def gestionar_vida(self):
        self.saludar()
        self.trabajar()
        self.estudiar()


    class EstudianteTrabajador(Persona, Trabajador, Estudiante):
    def __init__(self, nombre, edad, salario, institucion):
        Persona.__init__(self, nombre, edad)
        Trabajador.__init__(self, salario)
        Estudiante.__init__(self, institucion)

    def gestionar_vida(self):
        self.saludar()
        self.trabajar()
        self.estudiar()

# Crear una instancia de EstudianteTrabajador
estudiante_trabajador = EstudianteTrabajador("Alice", 25, 1500, "Universidad XYZ")

# Acceder a métodos y atributos de las clases base
estudiante_trabajador.gestionar_vida()

'''


'''
clase Acuatico Y terrestre 
luego crea clase ornitorrinco
'''

'''class Acuatico:
    def __init__(self,TiempoRespiro):
        self.TiempoRespiro = TiempoRespiro
    
    def MostrarA(self):
        print(f"El tiempo de respiro es: {self.TiempoRespiro} segundos")


class Terrestre:
    def __init__(self,Patas):
        self.Patas = Patas

    def MostrarT(self):
        print(f"Total de Patas es: {self.Patas}")


class Ornitorrinco(Acuatico,Terrestre):
    def __init__(self, TiempoRespiro,Patas,Nombre,Edad):
        Acuatico.__init__(self,TiempoRespiro)
        Terrestre.__init__(self,Patas)
        self.Nombre = Nombre
        self.Edad = Edad
    
    def MostrarO(self):
        print(f"Hombre: {self.Nombre}")
        print(f"Edad: {self.Edad}")


Mostrar = Ornitorrinco(50, 4, "Romino", 5)
Mostrar.MostrarO()
Mostrar.MostrarA() 
Mostrar.MostrarT()'''

