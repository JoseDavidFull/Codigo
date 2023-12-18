import torch
import torch.nn as nn
import torch.optim as optim

# Datos de entrada y salida de ejemplo
x = torch.tensor([[1.0], [2.0], [3.0]])
y = torch.tensor([[2.0], [4.0], [6.0]])

# Definir una red neuronal simple
class SimpleModel(nn.Module):
    def __init__(self):
        super(SimpleModel, self).__init__()
        self.linear = nn.Linear(1, 1)  # Una capa lineal

    def forward(self, x):
        return self.linear(x)

# Instanciar el modelo
model = SimpleModel()

# Definir la función de pérdida (criterio) y el optimizador
criterion = nn.MSELoss()  # Error cuadrático medio
optimizer = optim.SGD(model.parameters(), lr=0.01)  # Descenso de gradiente estocástico

# Entrenamiento del modelo
epochs = 1000
for epoch in range(epochs):
    optimizer.zero_grad()  # Reiniciar gradientes
    outputs = model(x)  # Obtener predicciones
    loss = criterion(outputs, y)  # Calcular la pérdida
    loss.backward()  # Retropropagación
    optimizer.step()  # Actualizar parámetros

    if (epoch + 1) % 100 == 0:
        print(f'Epoch [{epoch+1}/{epochs}], Loss: {loss.item():.4f}')

# Probar el modelo entrenado
test_input = torch.tensor([[4.0]])
predicted_output = model(test_input)
print(f'Predicción para entrada 4.0: {predicted_output.item():.4f}')
