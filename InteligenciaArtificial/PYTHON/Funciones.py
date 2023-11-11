'''
Calificaciones promedio Escribe una función 
llamada calificacion_promedio que tome una 
lista de calificaciones como parámetro y 
devuelva el promedio de las calificaciones

def Promedio():
    a = int(input("ingresa 1er num"))
    b = int(input("ingresa 1er num"))
    c = int(input("ingresa 1er num"))
    d = (a+b+c)/3
    print("Promedio: ",d)

Promedio()'''


'''
Verificador de Número Par: Escribe una 
función llamada es_par que tome un 
número como argumento y devuelva 
True si es par, y False si no lo es.

def ParImpar(a):
    if(a%2==0):
        return True
    else:
        return False
    

print(ParImpar(5))'''

'''
Generador de Saludos: Crea una función 
saludar que tome un nombre como
 argumento y devuelva un saludo 
 personalizado (por ejemplo, 
 "¡Hola, Juan!").

def Saludos(a):
    print("Hola,",a)


nombre = str(input("ingrtesa tu nombre"))

Saludos(nombre)'''


'''Conteo de Caracteres: Define una 
función contar_caracteres que tome 
una cadena como entrada y devuelva 
un diccionario con la cantidad de 
veces que aparece cada carácter.

def Caracteres():
    cadena = "HolaComoEstasElisabeth"
    print(len(cadena))
Caracteres()

x = int(input("ingresa un numero"))

while x!=10:
    x = int(input("Vuelve a intentarlo: "))

print("EStas en lo correcto")
name = input("Ingresa tu nombre: ")
while name != "David":
    name = input("Ingresalo Otra vez")

print("Esta Correcto")

'''


'''
Suma de dos números: Crea una función que tome dos números 
como argumentos y devuelva la suma de esos números.

def Suma(a,b):
    return a+b

print(Suma(5,5))'''


'''Calcular la potencia: Escribe una función que tome dos 
números como argumentos y calcule la potencia de uno elevado al otro.

def Potencia(a,b):
    return a**b

print(Potencia(5,2))'''