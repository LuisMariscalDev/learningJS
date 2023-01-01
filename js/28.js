// Clases


class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return  `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
}

const producto2 = new Producto("Tele 8K", 5600);
const producto3 = new Producto("Xbox", 4000);

/** Herencia */
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn} `;
    }
}

const libro = new Libro("JavaScript la Revolución", 600, "68416984804");
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());