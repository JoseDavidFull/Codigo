/*Control de inventario:
Crea una clase Producto con atributos 
para el nombre del producto, el precio 
y la cantidad disponible en el 
inventario. Implementa métodos get 
y set para cada atributo y un método 
actualizarInventario que permita
 agregar o restar unidades del 
 inventario.*/


class Inventario{
    constructor(nombreProducto,precio,cantidad){
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getNombreProducto(){
        return this.nombreProducto;
    }
    setNombreProducto(newProducto){
        this.nombreProducto = newProducto;
    }

    getPrecio(){
        return this.precio;
    }
    setPrecio(newPrecio){
        this.precio = newPrecio;
    }
    getCantidad(){
        return this.cantidad;
    }
    setCantidad(newCantidad){
        this.cantidad = newCantidad
    }
    getActualizarInventario(){
        
    }
}