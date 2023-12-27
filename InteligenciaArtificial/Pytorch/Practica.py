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


'''
Creación y Transferencia:
Crea un tensor con valores aleatorios utilizando torch.randn con dimensiones (3, 4, 5).
Verifica si la GPU está disponible y, si es así, transfiere el tensor a la GPU utilizando el truco mencionado (to(device)).
import torch

torch.cuda.is_available()

device = torch.device('cuda' if torch.cuda.is_available else 'cpu') #hace que use tanto cpu como gpu

tensor = torch.randn(3,4,5)


#convetir de cpu a gpu

tensor = tensor.to(device)
print(tensor)

'''


'''
Creación y Acceso:
Crea un tensor de tamaño (3, 4, 2) con valores aleatorios utilizando torch.randn.
Accede al elemento en la posición (1, 2, 1) del tensor.
import torch
tensor = torch.randn(3,4,2)
print(tensor)
tensor[1,2,1]'''


'''
Dimensiones y Tipo de Dato:

Crea un tensor de unos con dimensiones (2, 5, 3) utilizando torch.ones.
Utiliza la función size para obtener las dimensiones del tensor.
Utiliza la función dtype para obtener el tipo de dato del tensor.

import torch

tensor = torch.ones(3,5,3)
print(tensor)

tensor.size()

print(tensor.dtype)'''



'''
Operaciones 

Crea un tensor de ceros con dimensiones (4, 3, 3) utilizando torch.randint.
Realiza una operación matemática simple (por ejemplo, suma o multiplicación) entre el tensor de ceros y el tensor creado en el primer ejercicio.

import torch

tensor = torch.randint(2,(4,3,3))

mul = 
for n in tensor:
  mul+=n

print(mul)'''




'''
Generación de Números Enteros:
Genera un tensor de números enteros aleatorios en el rango de 0 a 10 (inclusive) con dimensiones (2, 3) utilizando torch.randint.
import torch 
tensor = torch.randint(0,11,(2,3))
print(tensor)'''

