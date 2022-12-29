// Arrays Methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

// forEach
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Sí está el mes")
    }
});

// Includes
let resultado = meses.includes("Diciembre");

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === "Tablet"
});

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);


//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== "Tablet"
});



console.log(resultado);
