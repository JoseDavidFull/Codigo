'''
Ejercicio 6: Categoría de edad
Escribe un programa que tome una edad ingresada por el usuario y muestre en qué categoría se encuentra:

Menor de 12 años: Niño
12-17 años: Adolescente
18-64 años: Adulto
65 años o más: Adulto mayor

edad = int(input("ingresa su edad:  "))
if edad < 12:
    print("Eres un niño")
elif edad >= 12 and edad<=17:
    print("Eres un adolecente")
elif edad >=18 and edad <=64:
    print("Eres un adulto")
elif edad >=65:
    print("Eres adulto mayor")'''