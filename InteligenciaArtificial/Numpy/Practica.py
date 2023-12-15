'''# Importa la biblioteca NumPy
import numpy as np

# Crea un array NumPy
arr = np.array([1, 2, 3, 4, 5])

# Imprime el array
print("Array original:")
print(arr)

# Realiza algunas operaciones básicas
# Suma de todos los elementos del array
suma = np.sum(arr)
print("Suma de los elementos:", suma)

# Promedio de los elementos del array
promedio = np.mean(arr)
print("Promedio de los elementos:", promedio)

# Máximo valor en el array
maximo = np.max(arr)
print("Máximo valor:", maximo)

# Mínimo valor en el array
minimo = np.min(arr)
print("Mínimo valor:", minimo)

# Elevar al cuadrado cada elemento del array
cuadrados = np.square(arr)
print("Cuadrados de los elementos:")
print(cuadrados)
'''

'''import numpy as np

matriz = np.array([1,2,3,4,5,6,7,8,9,10])
print(matriz)'''


'''
Crear un array NumPy: Crea un array 
NumPy que contenga los números del 
1 al 10.

import numpy as np

Numeros = np.array([1,2,3,4,5,6,7,8,9,10])
print(Numeros)'''


'''
Suma de elementos: Calcula la suma de todos 
los elementos en el array que creaste en el 
ejercicio anterior.

import numpy as np

Numeros = np.array([1,2,3,4,5,6,7,8,9,10])
suma = np.sum(Numeros)
print(suma)'''

'''
Array de números pares: Crea un array 
NumPy que contenga los números pares 
del 2 al 20.

import numpy as np

Pares = np.array([1,2,3,4,5,6,7,8,9,10])
for n in Pares:
    if n%2==0:
        print(n)
'''


'''usar matrices mas faciles y sencillos
import numpy as np

m = np.arange(15).reshape(3,5)
print(m)'''
'''
import numpy as np

matriz = np.arange(20).reshape(4,5) siempre comienxa por 0 hasta n-1
print(matriz)'''
'''
import numpy as np

def Matriz():
    valor = np.arange(15).reshape(3,5)
    return valor

print(Matriz()) '''


'''import numpy as np

matriz = np.array([1,2,3,4,5,6,7])
print(matriz)'''


'''import numpy as np    /// crea una matriz de 3 dimensiones
matriz = np.arange(27).reshape(3,3,3)
print(matriz) '''


'''import numpy as np

arra = np.array([1,2,3],[4,5,6])
print(arra)'''

'''
Suma por Filas y Columnas: Crea una matriz NumPy 
(2D) y calcula la suma de sus elementos por 
filas y por columnas.

import numpy as np

matriz12d = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
matriz22d = np.array([[1,2,3,4,5],[6,7,8,9,10]])
print(matriz12d+matriz22d)'''


'''Generación de Datos Aleatorios: Utiliza las funciones de 
generación de números aleatorios de NumPy para crear un array 
de 100 números aleatorios entre 0 y 1.

import numpy as np

NumeroAleatorios = np.random.randint(0,7,6)
print(NumeroAleatorios)'''

'''Creación de un Array: Utiliza la función numpy.zeros para crear 
un array NumPy de tamaño 5x5 lleno de ceros.

import numpy as np

ceros = np.zeros(25).reshape(5,5)
print(ceros)'''


'''Creación de un Array con un Valor Específico: Crea un array 
NumPy de tamaño 4x4 lleno de unos utilizando la función numpy.ones.

import numpy as np

Array = np.ones(64).reshape(4,4,4)
print(Array)'''

'''Creación de un Array con una Secuencia de Números: Crea un 
array NumPy que contenga los números del 1 al 10 utilizando la función numpy.arange.

import numpy as np

array = np.arange(0,10)
print(array)'''

'''
Redimensionar un Array: Crea un array NumPy de tamaño 1x12 y luego 
redimenciónalo para que tenga forma 3x4 utilizando la función numpy.reshape
import numpy as np

Matriz = np.arange(12).reshape(3,4)
print(Matriz)'''

'''
import numpy as np

Matriz = np.array([5,2,1,4,6,7,9,8])
print(np.sort(Matriz))'''

''' 
import numpy as np

Matriz = np.array([[1,2,3],[4,5,6]])
print(Matriz)'''


'''Reshape de arrays: Crea un array NumPy de 1 dimensión con 12 
elementos. Reshape el array en una matriz de 3x4.

import numpy as np

array = np.zeros(12).reshape(3,4)
print(array)'''


'''
Crear un array NumPy de 2 dimensiones: Crea una matriz NumPy de 2x3 con números enteros aleatorios.

import numpy as np

array2d = np.randint(16).reshape(4,4)
print(array2d)'''


'''
Estadísticas básicas: Crea un array NumPy de 1 dimensión con números enteros
 aleatorios. Calcula la media, la desviación estándar, el valor máximo y el 
 valor mínimo de los elementos del array.

import numpy as np

array = np.arange(15).reshape(15)
print(array)
print(np.max(array))'''


'''Filtrado de datos: Crea un array NumPy de 1 dimensión con números 
aleatorios entre 0 y 1. Filtra los valores mayores que 0.5.
import numpy as np

array = np.random.rand(15).reshape(15)
print(array)'''

'''Generar un número aleatorio entre 1 y 100: Utiliza el módulo random 
de Python para generar un número aleatorio entre 1 y 100 y muestra el resultado.

import numpy as np

Aleatorio = np.random.randint(1,101)
print(Aleatorio)

'''

'''Generar una lista de números aleatorios: Crea una lista que 
contenga 10 números aleatorios entre 1 y 50 utilizando un bucle.
import numpy as np

for i in range(1,50,1):
    i = np.random.randint(i)
    print(i)'''



'''
Simulación de lanzamiento de dados: Simula el lanzamiento de un 
dado de 6 caras e imprime el resultado.

import numpy as np

Dado = np.random.randint(0,7)
print("Cayo El Dado y el Resultado es : ",Dado)

print(" _____")
if Dado == 1 :
    print("|     |")
    print("|  *  |")
    print("|     |")

elif Dado == 2:
    print("|     |")
    print("| * * |")
elif Dado == 3:
    print("|  *  |")
    print("| * * |")
elif Dado == 4:
    print("| * * |")
    print("| * * |")
elif Dado == 5:
    print("|  *  |")
    print("| * * |")
    print("| * * |")
elif Dado == 6:
    print("| * * |")
    print("| * * |")
    print("| * * |")
print(" -----")'''


'''numero aleatorio con size que te da la cantidad de elementos 

import numpy as np

m = np.random.randint(10, size=(3))
print(m)'''

'''matriz de dos dimensiones
import numpy as np

array = np.arange(100).reshape(10,10)
print(array)'''


'''Crear un array con valores aleatorios: Utiliza NumPy 
para generar un array de 5x5 con números aleatorios.

import numpy as np

NumsAleatorios = np.random.randint(0,25,25).reshape(5,5)

print(NumsAleatorios)'''



'''Dadas dos matrices matrix1 y matrix2, calcula el producto de matrices.'''

'''Crea una lista vacía llamada mi_lista y añade los elementos 1, 2, y 3.
Extiende la lista agregando los elementos 4 y 5.
Elimina el elemento 3 de la lista.

mi_lista = list([])

mi_lista.append([1,2,3])
mi_lista.extend([4,5])
mi_lista.pop(0)
 
print(mi_lista)'''

'''
Cambia la forma de un arreglo 1D a una matriz 2x3.
Concatena dos matrices horizontalmente.
Agrega una nueva dimensión a un arreglo existente.
import numpy as np


array1 = np.arange(1,7).reshape(2,3)
array2 = np.arange(7,13).reshape(2,3)

concatenar = np.concatenate(( array1, array2), axis=1)
print(concatenar)'''


'''
=======
Dada una lista de números, encuentra el máximo y el mínimo.
Calcula la suma de todos los elementos en una lista.
Cuenta cuántas veces aparece un elemento específico en una lista.

>>>>>>> 90687153c6d733443b3452cdfa755d717a56e5c3

Crea una lista con los números del 1 al 5.
Añade el número 6 al final de la lista.
Inserta el número 0 al principio de la lista.

lista = list([1,2,3,4,5])
lista.append(6)
lista.insert(0,0)
print(lista)
'''


'''import numpy as np

m = np.array([[1,2,3],[4,5,6],[7,8,9]])

print(m)
print("\n")
print(np.ptp(m)) #ptp agarra el punto maximo y resta el punto minimo 9-1 = 8

'''

'''Escribe un programa en Python que utilice la función ptp
 para calcular el rango de un arreglo unidimensional.
import numpy as np

uni = np.array([1,2,3,4,5,6,7,8,9,10])
print(np.ptp(uni))
'''

'''Crea un arreglo bidimensional y utiliza la función amin para 
encontrar el valor mínimo en todo el arreglo.

import numpy as np

arreglo = np.arange(1,26).reshape(5,5)

print(arreglo)
print("\n")
print(np.amin(arreglo))

'''

'''Desarrolla un código que emplee la función amax para 
determinar el valor máximo en una matriz tridimensional.

import numpy as np

tridimensional = np.arange(1,126).reshape(5,5,5)
print(np.amax(tridimensional))'''

'''Implementa un script en Python que utilice la función mean 
para calcular la media de un arreglo unidimensional

import numpy as np

arreglo = np.array([1,2,3,4,5,6,7,8,9,10])
print(np.median(arreglo))'''

'''
Desarrolla un programa que utilice la función axis junto con otras funciones NumPy 
para calcular la suma a lo largo del eje especificado en un arreglo tridimensional,
 y luego encuentre el valor máximo en el resultado obtenido.

import numpy as np

tridimensional = np.arange(1,126).reshape(5,5,5)
print("Suma de las columnas")
print(np.sum(tridimensional, axis=1))

print("Suma de las filas")
print(np.sum(tridimensional, axis=0))'''


'''
Implementa un código en Python que utilice la función axis para calcular la media a 
lo largo del eje 0 y la desviación estándar a lo largo del eje 1 en un arreglo tridimensional.
import numpy as np

tridimensional = np.arange(1,28).reshape(3,3,3)
print(tridimensional)
print(np.median(tridimensional, axis=0))'''

'''Escribe una función en Python que tome una lista de números como entrada 
y devuelva una nueva lista que contenga solo los números pares
lista = list([1,2,3,4,5,6,7,8,9,10])
def Pares():
    for i in lista:
        if i%2==0:
            print(i)

Pares()'''



'''Desarrolla un programa que solicite al usuario ingresar una cadena 
de texto y luego imprima la misma cadena pero con todas las vocales en mayúscula.
cadena = str(input("Ingresa Una Cadena: "))

print(cadena.upper())'''



'''Crea una clase llamada Libro con los atributos titulo, titulo y paginas. 
Implementa métodos get_titulo, get_autor y get_paginas para obtener la 
información actual del libro, y métodos set_titulo, set_autor y 
set_paginas para actualizar estos valores.
class Libro: # la clase
    def __init__(self,titulo): # el contructor
        self.titulo = titulo # los atrubutos
        

    def getAutor(self):
        return self.titulo
    
    def set_autor(self,Title):
        self.titulo = Title


mostrar = Libro("La Odisea")

print(mostrar.getAutor())

mostrar.set_autor("La Iliada")
print(mostrar.getAutor())'''



'''
Crea dos matrices NumPy de tamaño (3, 3). La primera matriz 
debe contener los números del 1 al 9, y la segunda matriz 
debe contener los números del 10 al 18. A continuación, 
concatena las dos matrices en una sola matriz de tamaño (6, 3).

import numpy as np

matriz1 = np.arange(1,10).reshape(3, 3)

matriz2 = np.arange(10, 19).reshape(3, 3)

concatenacion = np.concatenate((matriz1, matriz2))
print(concatenacion)
'''

'''Crea dos matrices NumPy de tamaño (2, 2). La primera matriz 
debe contener los números del 1 al 4, y la segunda matriz debe 
contener los números del 5 al 8. A continuación, concatena las
 dos matrices en una sola matriz de tamaño (4, 2), de forma que 
 la primera matriz quede en la primera fila y la segunda matriz 
 quede en la segunda fila.
import numpy as np
matriz1 = np.arange(1,5).reshape(2,2)
matriz2 = np.arange(5,9).reshape(2,2)
concatenar = np.vstack((matriz1, matriz2))
print(concatenar)'''




'''Crea un array unidimensional con números enteros aleatorios.

import numpy as np

aleatorios = np.random.randint(10)
print(aleatorios)'''


'''Genera un array NumPy con 15 elementos enteros aleatorios entre 5 y 50.
Calcula y muestra el rango de valores en el array utilizando la función ptp.
import numpy as np
aleatorios = np.random.randint(5,50,15)
rango = np.ptp(aleatorios)
print(rango)
'''
'''Crea un array NumPy con 11 elementos, todos números enteros.
Calcula e imprime la mediana del array utilizando la función median.

import numpy as np
array = np.array([1,2,3,4,5,6,7,8,9,10,11])
Mediana = np.mean(array)
print(Mediana)
'''


'''Crea dos arrays NumPy de una dimensión con al menos 5 elementos cada uno.
Utiliza la función concatenate o vstack para concatenar los dos arrays y muestra el resultado
import numpy as np
array1 = np.array([1,2,3,4,5])
array2 = np.array([1,2,3,4,5])

Concatenar = np.concatenate([array1, array2])
print(Concatenar)'''



'''Crea una matriz bidimensional (por ejemplo, 4x5) con números aleatorios enteros.
Calcula e imprime el rango de valores para cada columna utilizando ptp con axis.
Calcula e imprime la mediana para cada fila utilizando median con axis.'''

import numpy as np

bidimensional = np.random.randint(1,20,20).reshape(4,5)
rango = np.ptp(bidimensional,axis=1)
mediana = np.median(rango)

print("Bidimencional")
print("\n")
print(bidimensional)
print("Rango")
print("\n")
print(rango)
print("\n")
print("Mediana")
print(mediana)