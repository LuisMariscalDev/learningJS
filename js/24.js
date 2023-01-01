// Foor loop

// for (let i = 0; i < 10; i++) {
//     console.log("Sí es menor" + i)
// }

// for (let i = 0; i < 10; i++) {
//     if( i % 2 === 0 ){
//     console.log(`El número ${i} Es Par`);
//     } else {
//         console.log(`Este numero ${i} es impar`);
//     }
// }

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

for( let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}



// While loop

// let i = 0;      // Indice o index

// while( i < 10){   // Condición

//     console.log("Desde el while loop");

//     i++; //incremento
// }



// Do While loop

let i = 100;

do {
    console.log(i);

    i++;
} while ( i < 10);