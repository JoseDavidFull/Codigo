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

'''Suma de elementos: Calcula la suma de todos 
los elementos en un array NumPy.

import numpy as np

suma = np.arange(1,26)
print(sum(suma))

'''


'''Operaciones matriciales: Realiza una multiplicación de dos matrices utilizando NumPy.'''

def mostrar():
    return "Hola Como estas"

print(mostrar())