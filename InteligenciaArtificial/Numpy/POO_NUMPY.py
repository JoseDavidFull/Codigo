

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
            producto-=i
        return producto





Mostrar = OperacionesBasicas((3,3))
print(Mostrar.suma())
print(Mostrar.producto())'''


