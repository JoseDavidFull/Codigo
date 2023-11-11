'''
class Persona:
    # Constructor de la clase
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    # Método de instancia
    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")

# Crear un objeto de la clase Persona
persona1 = Persona("Juan", 30)

# Acceder a los atributos y llamar al método de instancia
print(persona1.nombre)  # Salida: "Juan"
print(persona1.edad)    # Salida: 30
persona1.saludar()      # Salida: "Hola, mi nombre es Juan y tengo 30 años."
'''

'''
Crea una clase llamada Persona que tenga el 
atributo nombre.
 Luego, crea un objeto de la clase 
 Persona y muestra su nombre.


class Persona:
    def __init__(self, nombre):
        self.nombre = nombre
    def mostrar(self):
        print(f"Hola mi nombre es {self.nombre}")
    
ver = Persona("David")
ver.mostrar()'''


'''
Clase Persona: Crea una clase llamada 
Persona con atributos como nombre, edad
 y correo. Crea varios objetos de esta 
 clase y muestra sus atributos.


class Persona:
    def __init__(self, nombre,edad,correo):
        self.nombre = nombre
        self.edad = edad
        self.correo = correo

    def MostrarNombre(self):
        print(f"Nombre es: {self.nombre}")            
    
    def MostrarEdad(self):
        print(f"Edad es: {self.edad}")
    
    def MostrarCorreo(self):
        print(f"Correo es: {self.correo}")



MostrarDatos = Persona("David",25,"josesucullani@gmail.com")

MostrarDatos.MostrarNombre()
MostrarDatos.MostrarEdad()
MostrarDatos.MostrarCorreo()'''

'''
Clase Libro: Define una clase llamada 
Libro con atributos como titulo, autor 
y año. Crea objetos de esta clase y 
muestra la información de los libros.

class Libro:
    def __init__(self,titulo,autor,anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
    
    def Informacion(self):
        print(f"titulo: {self.titulo}")
        print(f"autor: {self.autor}")
        print(f"año: {self.anio}")

titul = str(input("ingresa titulo: "))
auto = str(input("ingresa autor: "))
ani = int(input("ingresa el año de publicidad: "))

Resultado = Libro(titul,auto,ani)
Resultado.Informacion()'''

'''
Calculadora Simple: Escribe una función 
que tome dos números y un operador 
(+, -, *, /) como argumentos y devuelva 
el resultado de la operación.

def Suma(a,b):
    return a+b


def Resta(a,b):
    return a-b
def Mul(a,b):
    return a*b

def Div(a,b):
    return a/b

print(Suma(5,5))
print(Resta(5,5))
print(Mul(5,5))
print(Div(5,5))'''

'''
Contador de Palabras: Crea una función 
que cuente cuántas palabras hay en una 
cadena dada.

def Contar():
    cadena = "Hola"
    resultado = len(cadena)
    print(resultado)
Contar()'''

'''
Suma de Series: Utiliza un bucle for 
para calcular y mostrar la suma de la 
serie 1 + 2 + 3 + ... + N

n = int(input("ingresa un num: "))
suma=0
for i in range(1,n+1,1):
    suma+=i

print(suma)'''

'''
Contador de Vocales: Crea un bucle for 
que cuente cuántas vocales hay en una 
cadena dada.

cadena = "Hola"
for i in cadena:
    contar  = len(cadena)
print("Hay ",contar," Letras en La palabra")'''


'''
Imprimir Caracteres: Escribe un bucle 
for que imprima cada carácter de una 
cadena.

cadena = "EstoEsUnaCadena"
for i in cadena:
    print(i)'''

'''
Potencias de 2: Utiliza un bucle for 
para imprimir las primeras 10 potencias 
de 2 (2^0, 2^1, ..., 2^9).

# alt + 94 => ^

x = 2
for i in range(1,10+1,1):
    print(pow(x,i)) '''



'''
Contar Pares e Impares: Crea un bucle 
for que cuente cuántos números pares 
e impares hay en una lista dada.

for i in range(1,100+1,1):
    if(i%2==0):
        print("Par",i)
    else:
        print("Impar",i)'''


'''Crear una Clase Tienda: Crea una clase llamada Tienda con 
atributos como nombre, productos, y métodos para agregar y 
mostrar productos en la tienda. Crea instancias de tiendas
y administra productos.

class Tienda:
    def __init__(self,nombre,producto):
        self.nombre = nombre
        self.producto = producto

    def Mostrar(self):
        return f"El nombre es: {self.nombre} Producto es: {self.producto}"



name = str(input("Ingresa Nombre \n"))
producto = str(input("Ingresa Producto: \n"))

dato = Tienda(name,producto)
print(dato.Mostrar())'''