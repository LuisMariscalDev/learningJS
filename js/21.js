
// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");





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
meses.forEach( mes => {
    if(mes == "Marzo"){
        console.log("Sí está el mes")
    }
});

let resultado;

// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre === "Tablet");


// Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(producto => producto.precio < 400);
resultado = carrito.filter(producto => producto.nombre !== "Tablet");

console.log(resultado);
