'''import matplotlib.pyplot as plt
import numpy as np

# Crear un rango de valores x
x = np.linspace(-5, 5, 100)

# Calcular los valores y correspondientes a la función y = x^2
y = x ** 2

# Crear el gráfico
plt.plot(x, y, label='y = x^2')

# Agregar etiquetas y título
plt.xlabel('x')
plt.ylabel('y')
plt.title('Gráfico de y = x^2')

# Agregar leyenda
plt.legend()

# Mostrar el gráfico
plt.show()'''



import matplotlib.pyplot as plt
import numpy as np

# Crear un rango de valores x
x = np.linspace(-2 * np.pi, 2 * np.pi, 400)
y1 = np.sin(x)
y2 = np.cos(x)

# Crear el gráfico con dos líneas
plt.plot(x, y1, label='y = sin(x)', color='blue', linestyle='--')
plt.plot(x, y2, label='y = cos(x)', color='red', linewidth=2)

# Agregar etiquetas y título
plt.xlabel('x')
plt.ylabel('y')
plt.title('Gráfico de Funciones Trigonométricas')

# Agregar leyenda en la esquina superior izquierda
plt.legend(loc='upper left')

# Cambiar los límites de los ejes x e y
plt.xlim(-2 * np.pi, 2 * np.pi)
plt.ylim(-1.5, 1.5)

# Agregar una cuadrícula
plt.grid(True)

# Añadir texto anotativo
plt.annotate('Punto máximo', xy=(np.pi / 2, 1), xytext=(np.pi / 2, 1.3),
             arrowprops=dict(facecolor='black', shrink=0.05),
             )

# Mostrar el gráfico
plt.show()
