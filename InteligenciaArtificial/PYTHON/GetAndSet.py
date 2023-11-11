'''class Persona:
    def __init__(self, nombre, edad):
        self._nombre = nombre  # Atributo protegido (convenio de un solo guión bajo)
        self._edad = edad

    # Getter para el nombre
    def get_nombre(self):
        return self._nombre

    # Setter para el nombre
    def set_nombre(self, nuevo_nombre):
        if isinstance(nuevo_nombre, str):
            self._nombre = nuevo_nombre
        else:
            print("Error: El nombre debe ser una cadena de caracteres.")

    # Getter para la edad
    def get_edad(self):
        return self._edad

    # Setter para la edad
    def set_edad(self, nueva_edad):
        if isinstance(nueva_edad, int) and nueva_edad >= 0:
            self._edad = nueva_edad
        else:
            print("Error: La edad debe ser un número entero no negativo.")


# Crear un objeto de la clase Persona
persona1 = Persona("Juan", 30)

# Obtener el nombre utilizando el getter
print("Nombre:", persona1.get_nombre())

# Cambiar el nombre utilizando el setter
persona1.set_nombre("María")

# Obtener la edad utilizando el getter
print("Edad:", persona1.get_edad())

# Cambiar la edad utilizando el setter
persona1.set_edad(25)'''




'''
Clase de Empleado:
Crea una clase llamada Empleado con atributos como el 
nombre, el salario y el ID del empleado. Implementa
 métodos "getter" y "setter" para estos atributos. 
 Asegúrate de que el salario no pueda ser un valor negativo.

class Empleado:
    def __init__(self,nombre,salario,id):
        self.nombre = nombre
        self.salario = salario
        self.id = id
    
    def GetNombre(self):
        return self.nombre

    def SetNombre(self,newNombre):
        self.nombre = newNombre

    def GetSalario(self):
        return self.salario

    def SetSalario(self,newSalario):
        self.salario = newSalario

    def GetId(self):
        return self.id
    
    def SetId(self,newId):
        self.id = newId

    def MostrarDatos(self):
        print(f"Nombre: {self.nombre}")
        print(f"Salario: {self.salario}")
        print(f"Id: {self.id}")


nombre = str(input("Ingresa Nombre "))
salario = int(input("Ingresa Salario "))
id = int(input("Ingresa ID "))
E = Empleado(nombre,salario,id)

opcion = -1  

while opcion != 0:
    print("[1] Cambiar Nombre")
    print("[2] Cambiar Salario")
    print("[3] Cambiar ID")
    print("[4] Mostrar Datos")
    print("[0] Salir")
    opcion = int(input("Selecciona una opción: "))

    if opcion == 1:
        print("Inserta Nuevo Nombre")
        nombre = input()
        E.SetNombre(nombre)
    elif opcion == 2:
        print("Inserta Nuevo Salario")
        salario = float(input())
        E.setSalario(salario)
    elif opcion == 3:
        print("Inserta Nuevo ID")
        id = int(input())
        E.setId(id)
    elif opcion == 4:
        E.MostrarDatos()

print("Gracias Por Jugar")'''



'''Ejercicio 16: Gestión de cuentas de usuario
Diseña una clase llamada CuentaUsuario que represente la 
información de una cuenta de usuario en un sitio web. La 
clase debe tener atributos como nombre de usuario, contraseña, 
correo electrónico y fecha de registro. Implementa métodos 
get y set para todos estos atributos y un método cambiarContraseña 
que permita a los usuarios cambiar su contraseña.

class CuentaUsuario:
    def __init__(self,nombre,contrasenia,correo,fecha):
        self.nombre = nombre
        self.contrasenia = contrasenia
        self.correo = correo
        self.fecha = fecha

    def getNombre(self):
        return self.nombre

    def setNombre(self,newNombre):
        self.nombre = newNombre

    def getContrasenia(self):
        return self.contrasenia

    def setContrasenia(self,newContrasenia):
        self.contrasenia = newContrasenia

    def getCorreo(self):
        return self.correo

    def setCorreo(self,newCorreo):
        self.correo = newCorreo

    def getFecha(self):
        return self.fecha

    def setFecha(self,newFecha):
        self.fecha = newFecha

    def cambiarContraseña(self):
        contrasenia = contrasenia

    def MostraDatos(self):
        print(f"Nombre {self.nombre}")
        print(f"Correo {self.correo}")
        print(f"Contraseña {self.contrasenia}")
        print(f"Fehca {self.fecha}")



nombre = str(input("Ingresa Nombre "))
contrasenia = str(input("Ingresa Contraseña "))
correo = str(input("Ingresa Correo "))
fecha= int (input("Ingresa Fecha "))


opcion = -1
E = CuentaUsuario(nombre,contrasenia,correo,fecha)
while opcion != 0:
    print("[1] Cambiar Contraseña")
    print("[2] Mostra Datos ")
    print("[0] Salir")
    opcion = int(input("Selecciona una opción: "))
    if opcion == 1:
        print("Inserta Nuevo Contraseña")
        contrasenia = input()
        E.setContrasenia(contrasenia)
    elif opcion == 2:
        E.MostraDatos()
    elif opcion == 3:
        print("Inserta Nuevo ID")
        id = int(input())
        E.setId(id)
    elif opcion == 4:
        E.MostrarDatos()

print("Gracias Por Jugar")'''