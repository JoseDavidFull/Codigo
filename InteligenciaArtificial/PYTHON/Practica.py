'''Ejercicio 2: Suma de dos números
Escribe un programa que tome dos números 
ingresados por el usuario y muestre la 
suma de ambos.
A = int(input("Ingresa El primer num: "))
B = int(input("Ingresa el segundo num: "))
C = A+B
print("LA suma es: ",C)'''

'''
Ejercicio 3: Números pares e impares
Escribe un programa que recorra los números 
del 1 al 10 y determine si cada número es par 
o impar.


array = ["Hola","Como","Estas","Elisabeth"]
for a in (array):
    print(a)'''

'''
Ejercicio 4: Factorial
Escribe una función que calcule el factorial 
de un número ingresado por el usuario. El 
factorial de un número n se calcula como 
n! = n * (n-1) * (n-2) * ... * 1.

def Factorial():
    suma = 0
    for i in range(0,101,1):
        suma = suma+i
    print("La suma es: ",suma)
Factorial()'''


'''
Ejercicio 1: Número positivo o negativo
Escribe un programa que tome un número ingresado 
por el usuario y determine si es positivo,
 negativo o cero.

nUM = int(input("Ingresa un numero "))
if nUM < 0:
    print("El numero", nUM , "Es negativo")
else:
    print("El numero", nUM , "Es positivo")'''


'''
Ejercicio 2: Mayor de tres números
Escribe un programa que tome tres números 
ingresados por el usuario y muestre cuál de 
ellos es el mayor.
a = int(input("ingresa 1er num: "))
b = int(input("ingresa 2do num: "))
c = int(input("ingresa 3er num: "))

if a>b and a>c:
    print("El mayor es: ",a)
elif b>a and b>c:
    print("El mayor es ",b)
else:
    print("El mayor es: ",c)'''


'''
/*Ejercicio de len():
Dada una lista de palabras, utiliza 
len() para contar cuántas palabras 
tienen una longitud mayor que 5.

palabras = "HolaComoEstas"
palabra = palabras.__len__()
print(palabra)'''


'''
Ejercicio de append():
Crea un programa que tome una lista 
de números y, utilizando append(), 
agregue el cuadrado de cada número 
a la lista original.

palabras = list([1,2,3,4,5,6])
palabras.append(7)
print(palabras)'''

'''


Ejercicio de extend():
Crea dos listas de colores diferentes 
y utiliza extend() para combinarlas 
en una única lista de colores.

nums = list([1,2,3,4,5,6,7])
nums.extend([8,9,10,11,12])
print(nums)'''

'''

Ejercicio de pop():
Dada una lista de valores, utiliza 
pop() para eliminar el último valor 
de la lista y luego imprime la lista 
resultante.

valorTotal = list([1,2,3,4,5,6,7,8,9,10])
valorTotal.pop()
print(valorTotal)'''


'''
Ejercicio de clear():
Escribe un programa que tenga una 
lista de números. Utiliza clear() 
para vaciar la lista y luego 
verifica si está vacía.

valor = list([1,2,3,4,5,6,7,8,9,10])
valor.clear()
print(valor)
valor.append(1)
print(valor)'''


'''
Ejercicio de sort():
Toma una lista de números desordenados 
y utiliza sort() para ordenarlos en 
orden ascendente. Luego, toma otra 
lista de números y ordénalos en 
orden descendente.

numeros = list([5,4,3,2,1,6,5,7,8,9])
numeros.sort(reverse=True)
print(numeros)'''


'''
Ejercicio de reverse(): Dada una lista 
de nombres, utiliza reverse() para 
invertir el orden de los nombres y 
luego imprime la lista resultante.

nombres = list(["Oj","Jose","Elisabeth"])
nombres.reverse()
print(nombres)'''


'''numeros = list([1,2,3,4,5,6,7,8])
valor = max(numeros)
print("El valor maximo es: ",valor)'''




# clase padre y madre y clase hijo

'''class Padre:
    def __init__ (self,ojos,caracter):
        self.ojos = ojos
        self.caracter= caracter

    def MostrarP(self):
        print(f"Color de Ojos {self.ojos}")
        print(f"Caracter {self.caracter}")


class Madre:
    def __init__(self,sentimientos):
        self.sentimientos = sentimientos
    
    def MostrarM(self):
        print(f"Los sentimientos son Buenos {self.sentimientos}")


class Hijo(Padre,Madre):
    def __init__(self,ojos,caracter,sentimientos,nombre):
        Padre.__init__(self,ojos,caracter)
        Madre.__init__(self,sentimientos)
        self.nombre = nombre
    
    def MostrarH(self):
        print(f"Nombre: {self.nombre}")



Mostrar = Hijo("Cafes","Trankilo","Amoroso","David")
Mostrar.MostrarP()
Mostrar.MostrarM()
Mostrar.MostrarH()'''

'''Ordenar una lista: Escribe un programa que
 ordene una lista de números de menor a mayor.


lista = list({6,5,4,1,2,3,9,8,7})

for i in lista:
    lista.sort(reverse=True)
    print(i)'''


'''def Saludo(a):
    return "Hola me llamo "+a

print(Saludo("David"))'''


'''Crea un diccionario llamado frutas que contenga 
tres pares clave-valor donde las claves son nombres
 de frutas y los valores son la cantidad de esas frutas disponibles

diccionario = {
    "Durazno" : 1,
    "Pera" : 2,
    "Manzana" : 3
}

print(diccionario)'''

'''
Libro:

Atributos: título, autor, año de publicación, género, número de copias 
disponibles, número total de copias.
Métodos:
__init__: Constructor para inicializar los atributos.
prestar_copia: Decrementa el número de copias disponibles.
devolver_copia: Incrementa el número de copias disponibles.
__str__: Retorna una cadena que muestra información sobre el libro.
'''

'''
class Libro:
    def __init__(self,titulo,autor,anio,genero,NumeroCopias,CopiasDisponibles):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.genero = genero
        self.NumeroCopias = NumeroCopias
        self.CopiasDisponibles = CopiasDisponibles

    def MostrarDatos():


    def PrestarCopias():


    def DevolverCopias():




opcion = -1

while opcion!=0:
    print("[1] MostrarDatos")




    opcion = int(input)
    if 

'''


'''Clase Persona:
Crea una clase Persona con atributos como nombre, edad y dirección.
 Agrega métodos para imprimir los detalles de la persona y para 
 calcular su edad en años bisiestos.

class Persona:#clase persona
    def __init__(self,nombre,edad,direccion):
        self.nombre = nombre
        self.edad = edad
        self.direccion = direccion

    def Informacion(self):
        return f"Nombre: {self.nombre} Edad: {self.edad} Direccion: {self.direccion}"
    


Ver = Persona("David",25,"AbdonJurado")
print(Ver.Informacion())'''



'''
Herencia de Animales:
Crea una clase base llamada Animal con atributos como nombre y edad.
Deriva clases específicas como Perro, Gato y Pájaro que hereden de 
Animal con atributos adicionales y métodos específicos.
'''


