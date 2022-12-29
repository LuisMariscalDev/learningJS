// "use strict"; //Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 500,
    disponible : true
}

Object.seal(producto);

producto.precio = "Nuevo Precio"; // .freeze . seal ninguno te permite agregar o eliminar propiedades pero seal te permite
                                  // modificar esas propiedades, cosa que freeze no

delete producto.precio;

console.log(producto);