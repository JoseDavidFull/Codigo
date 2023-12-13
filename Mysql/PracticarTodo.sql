create database Practica
use Practica

CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100),
    telefono VARCHAR(15)
);

INSERT INTO Clientes (id_cliente, nombre, apellido, email, telefono)
VALUES
    (1, 'Juan', 'Gomez', 'juan@gmail.com', '123-456-7890'),
    (2, 'Ana', 'Lopez', 'ana@gmail.com', '987-654-3210'),
    (3, 'Pedro', 'Martinez', 'pedro@gmail.com', '555-123-4567');



CREATE TABLE Pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    fecha_pedido DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

INSERT INTO Pedidos (id_pedido, id_cliente, fecha_pedido, total)
VALUES
    (101, 1, '2023-01-15', 50.25),
    (102, 2, '2023-01-16', 75.50),
    (103, 3, '2023-01-17', 30.00);
CREATE TABLE Productos (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    stock INT
);

INSERT INTO Productos (id_producto, nombre, precio, stock)
VALUES
    (501, 'Producto A', 10.99, 100),
    (502, 'Producto B', 25.50, 50),
    (503, 'Producto C', 5.75, 200);



CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY,
    nombre_categoria VARCHAR(50)
);

INSERT INTO Categorias (id_categoria, nombre_categoria)
VALUES
    (1, 'Electrónicos'),
    (2, 'Ropa'),
    (3, 'Hogar');


CREATE TABLE DetallesPedido (
    id_detalle INT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

INSERT INTO DetallesPedido (id_detalle, id_pedido, id_producto, cantidad, subtotal)
VALUES
    (201, 101, 501, 2, 21.98),
    (202, 101, 502, 1, 25.50),
    (203, 102, 503, 3, 17.25);

/*Muestra los detalles de los clientes cuyos correos electrónicos contienen "gmail.com".*/

select * from Clientes
where email like '%@gmail.com'

/*Muestra los productos cuyos nombres comienzan con "Producto".*/

select * from productos
where nombre like 'Producto%'

/*Muestra los clientes cuyos números de teléfono no contienen el carácter "-" */

select * from Clientes
where telefono not like '%-%-%'