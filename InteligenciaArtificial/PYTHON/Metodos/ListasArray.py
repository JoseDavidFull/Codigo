'''
Agregar Elemento: Escribe un programa que tome un 
número como entrada y lo agregue al final de una lista.

lista = list([1,2,3,4,5,6,7,8,9,10])
resultado = lista.insert(10,11)
print(lista)'''

'''
Eliminar Elemento: Crea un programa que tome un valor como 
entrada y elimine todas las ocurrencias de ese valor en la lista.

lista = list([1,2,3,4,5,6,7,8,9,10])
lista.clear()
print(lista)'''


'''
Insertar en Posición: Escribe 
un programa que tome un 
valor y una posición como 
entrada, y inserte el valor 
en la posición dada de la lista.

Lista = list([1,2,3,4,5,6])
Valor = Lista.insert(0,0)
print(Lista)'''

'''
Ordenar Lista: Crea un programa
 que tome una lista de números y 
 la ordene en orden ascendente.

lista = list([5,4,6,7,1,2,3,4,5])
lista.sort()
print(lista)'''

'''
Eliminar Último Elemento: Crea un 
programa que elimine el último 
elemento de la lista.

lista = list([1,2,3,4,5,6,7,8,9,10])
lista.pop()
print(lista)'''

'''
Extender Lista: Crea un programa 
que tome una lista y una segunda 
lista, y agregue los elementos de 
la segunda lista al final de la 
primera.

lista = list(["hola","David"])
lista.extend(["jajja",21,True])
print(lista)

lista = list(["Hola","Como"])
lista.reverse()
print(lista) '''


'''
Ordenar Descendente: Escribe un programa 
que tome una lista de números y la 
ordene en orden descendente.


lista = list([6,4,2,1,5,8,8,3,1,2])
lista.sort(reverse=True)
print(lista)'''

'''

Eliminación de Elementos: Crea un programa que tome una lista 
y elimine todos los elementos que sean menores que un valor específico.

lista  = list([1,2,3,4,5,6])
resultad = lista.pop()
print(lista)'''



'''
borrar todo de una lista

lista = list([1,2,3,4,5])
lista.clear()
print(lista)
'''


'''
Inversión de Palabras: Escribe un programa que tome una lista 
de palabras y genere una nueva lista con las palabras invertidas.

Lista = list([["Hola"],["Como"],["Estas"]])
Lista.reverse()
print(Lista)'''

'''
Ordenar y Filtrar Números: Escribe un programa que tome 
una lista de números y devuelva una nueva lista ordenada 
de manera ascendente, pero solo con los números pares.

lista  = list([5,2,1,6,7,3])
lista.sort()
print(lista)'''

'''
Lista de Cuadrados: Escribe un programa 
que tome un número N y genere una lista 
de los cuadrados de los primeros N 
números naturales.

lista = ([1,2,3,4,5,6,7,8,9,10])
for i in lista:
    print(i^2)'''


'''
Separación de Positivos y Negativos: 
Escribe un programa que tome una lista 
de números y devuelva dos listas 
separadas, una con los números 
positivos y otra con los números 
negativos.

lista = list([1,-1,2,-2,3,-3])
for i in lista:
    if i < 0:
        print("Menores: ",i)
    else:
        print("Mayores: ",i)'''

'''
Suma de Listas: Define una función que 
tome dos listas del mismo tamaño y 
devuelva una nueva lista con la suma 
de los elementos correspondientes.

lista1 = list([1,2,3,4,5])
lista2 = list([1,2,3,4,5])

lista3 = lista1+ lista2

for i in lista3:
    print(i)'''


'''
Lista de Factores: Define una 
función que tome un número y genere 
una lista de sus factores.

lista = list([1,2,3,4,5])
fac = 1
for i in lista:
    fac = fac *i
    print(fac)'''

'''
Unión de Listas Ordenadas: Escribe un 
programa que tome dos listas ordenadas 
y genere una nueva lista que sea la 
unión de ambas, también ordenada.

lista = list([1,6,2,4])
lista1 = list([2,7,3,1])

lista2 = lista + lista1

lista2.sort()
print(lista2)'''



'''
Conteo de Elementos en Lista: Escribe un programa que cuente la 
cantidad de elementos en una lista y muestre el resultado.
lista = list(["hola","que","tal"])
res = len(lista)
print("Hay ",res, " En la lista")
'''


'''
Agregar Elemento al Final: Crea un programa que tome una 
lista y un elemento como entrada, y agregue ese 
elemento al final de la lista.

lista = list([5,2,1,4,6,3,1])
lista.append(9)
print(lista)

resultado = lista

resultado.sort()
print(resultado)'''

'''
Eliminar Último Elemento: Escribe un programa que tome una 
lista y elimine el último elemento de la misma.

lista = list([1,2,3,4,5,6])
lista.pop(5)
print(lista)'''


'''
Listas de Sumas Acumulativas: Define una función que 
tome una lista de números y devuelva una nueva lista 
que contenga las sumas acumulativas de los elementos.
def Suman():
    suma = 0
    lista = list([1,2,3,4,5])
    for i in lista:
        suma+=i
    return suma

print("la suma de la lista es: ",Suman())'''

'''
Suma de Elementos: Dada una lista de 
números, calcula la suma de todos 
los elementos.

numeros = list([1,2,3,4,5,6,7,8,9,10])
suma=0
for i in numeros:
    suma+=i
print(suma)

print(max(numeros))'''


'''Separar pares e impares:
Implementa un programa que tome una lista de números 
y la divida en dos listas separadas, una con números 
pares y otra con números impares.

numeros = list([1,2,3,4,5,6,7,8,9,10])
print("Pares")
for i in numeros:
    if i%2==0:
        print(i)


print("Impares")
for i in numeros:
    if i%2==1:
        print(i)'''


'''
Operaciones Básicas:
Crea una lista con nombres de ciudades. Realiza las siguientes operaciones:

Imprime la lista.
Añade una nueva ciudad al final de la lista.
Inserta otra ciudad en la segunda posición.
Elimina una ciudad de tu elección.
Imprime la lista resultante.

lista = list(["LaPaz","Oruro","Potosi","Beni","Pando","Tarija","SantaCruz","Trinidad"])
print(lista)
lista.append("laciudadmexico")
print(lista)

lista.insert(1,"Posicion2")
print(lista)

lista.pop(1)
print(lista)
'''




'''Define una lista de números enteros. Calcula la suma de todos los elementos de la lista e imprime el resultado.
nums = list([1,2,3,4,5,6,7,8,9,10])
suma = 0
for n in nums:
    suma+=n

print(suma)'''


