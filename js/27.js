// POO 

/** Object literal **/
const producto = {
    nombre: "Tablet",
    precio: 800
}

// Object constructor
function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto("Tele 4K", 800);
const producto3 = new Producto("Tablet", 800);

console.log(producto2);
console.log(producto3);