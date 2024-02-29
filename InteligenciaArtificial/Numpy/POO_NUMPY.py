

'''import numpy as np

class OperacionesArray:
    def __init__(self, shape):
        self.array = np.random.random(shape)

    def obtener_array(self):
        return self.array

    def suma(self):
        return np.sum(self.array)

    def producto(self):
        return np.prod(self.array)

    def media(self):
        return np.mean(self.array)

    def desviacion_estandar(self):
        return np.std(self.array)

# Uso de la clase
operaciones = OperacionesArray((3, 3))
print("Array Aleatorio:", operaciones.obtener_array())
print("Suma:", operaciones.suma())
print("Producto:", operaciones.producto())
print("Media:", operaciones.media())
print("Desviación Estándar:", operaciones.desviacion_estandar())
'''


'''Clase para Operaciones Básicas:
Crea una clase llamada OperacionesBasicas que tenga un método para inicializar 
un array NumPy con números aleatorios.
Agrega métodos para calcular la suma, el producto, la media y 
la desviación estándar de este array.

import numpy as np

class OperacionesBasicas:
    def __init__(self,shape):
        self.array = np.random.randint(shape)
    
    def suma(self):
        return np.sum(self.array)
    
    def producto(self,producto=1):
        for i in self.array:
            producto*=i
        return producto





Mostrar = OperacionesBasicas((5,5))
print(Mostrar.suma())
print(Mostrar.producto())
'''

'''
Crea una clase llamada Estadisticas que tenga métodos para calcular la media,
 la mediana y la desviación estándar de un conjunto de datos utilizando NumPy. 
 La clase debe recibir el conjunto de datos en su constructor.

import numpy as np

class Estadisticas:
    def __init__(self,nums):
        self.array =  np.arange(nums)
    
    def Desviacion(self):
        return np.std(self.array)
    


Mostrar = Estadisticas((1,9))
print(Mostrar.Desviacion())'''




'''
Clase Matriz:
Crea una clase llamada Matriz que tenga un constructor 
para inicializar una matriz NumPy y métodos para realizar 
operaciones como la suma, resta y multiplicación de matrices.

import numpy as np
class Matriz:
    def __init__(self, filas=5, columnas=10):
        self.M = np.random.randn(filas, columnas)

    def suma(self):
        suma_total = np.sum(self.M)
        print("Suma total de la matriz:")
        print(suma_total)

# Crear una instancia de la clase Matriz
mi_matriz = Matriz(filas=5, columnas=10)

# Llamar al método suma
mi_matriz.suma()'''


