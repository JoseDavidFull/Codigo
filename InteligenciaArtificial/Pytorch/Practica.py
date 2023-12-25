''''
#Generación de Tensores Aleatorios en GPU:
#Genera un tensor aleatorio de tamaño (3, 4) con valores 
#flotantes utilizando torch.randn y muévelo a la GPU.

import torch

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

tensor = torch.randn(3,4)


X = tensor'''



'''Operaciones Básicas en GPU y CPU:
Crea dos tensores, a y b, con valores específicos.
Realiza una operación de suma de matrices (mm) en GPU y CPU por separado.
Compara los resultados.
import torch
# Genera matrices aleatorias de tamaño (4, 4) con valores enteros en el rango [0, 4)
a = torch.randint(0, 4, (4, 4))
b = torch.randint(0, 4, (4, 4))

# Realiza la multiplicación de matrices
suma = torch.mm(a, b)
# Imprime el resultado a gpu
suma = suma.to('cuda')
print(suma)'''
