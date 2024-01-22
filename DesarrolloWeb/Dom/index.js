var numeroElement = document.getElementById('numero');
        
// Inicializar la variable de número
var numero = 0;

// Función para incrementar el número y actualizar el contenido del elemento
function incrementarNumero() {
    numero++;
    numeroElement.textContent = numero;
}