// POO 

/** Object literal **/
const producto = {
    nombre: "Tablet",
    precio: 800
}

// Object constructor
function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto("Tele 4K", 800, true);
const producto3 = new Producto("Tablet", 800, false);

console.log(producto2);
console.log(producto3);