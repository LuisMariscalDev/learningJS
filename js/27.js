// POO 

/** Object literal **/
const producto = {
    nombre: "Tablet",
    precio: 800
}

// Object constructor
function Cliente (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Formatear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto("Tele 4K", 800);
const producto3 = new Producto("Tablet", 800);
const cliente = new Cliente("Luis", "Mariscal");


console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());