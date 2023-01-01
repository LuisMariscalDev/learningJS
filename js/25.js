const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 2000},
    { nombre: "Televisión 50 Pulgadas", precio: 16000},
    { nombre: "Tablet", precio: 300},
    { nombre: "Ereader", precio: 500},
    { nombre: "Audifonos", precio: 200},
    { nombre: "Celular", precio: 5000},
    { nombre: "Cable HDMI", precio: 100},
    { nombre: "Xbox Series X", precio: 6000},
]

// ForEach
carrito.forEach( producto => console.log(producto.nombre));

// map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);