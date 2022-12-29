// Arreglos

const numeros = [10,20,30,40,50];
console.table(numeros);





// Acceder a valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// //Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero) {
//     console.log(numero);
// })

numeros.push(60,70,80); //Agrga elementos al final del arreglo
numeros.unshift(-10, -12, -13); // Agrega elementos al inicio del arreglo

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// meses.pop(); //Elimina el último dato del arreglo
// meses.shift();//Elimina el primer dato del arreglo

meses.splice(2, 1); // Elimina un dato específico del arreglo. nota: en el primer dato pones a partir de qué dato vas a eliminar
                    // y en el segundo dato cuantos a partir del primer dato
// console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = ["Luis", ...meses];
console.log(nuevoArreglo);