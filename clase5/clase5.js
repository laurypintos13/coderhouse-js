// class Producto {
//     constructor (id, nombre, precio, stock, descripcion){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio; 
//         this.stock = stock;
//         this.descripcion = descripcion;
//     }
//     calcularIva(){
//         return this.precio*0.21;
//     }
//     calcularPrecioAPagar(){
//         return this.precio - this.calcularIva; // tambien puedo poner "this.precio*0.21"
//     }
// }

// const Producto1 = new Producto ("1", "rascador", 3000, 20, "Rascador de piso");
// const Producto2 = new Producto ("2", "camita", 2000, 20, "cama", "cama de dormir");

// console.log(Producto1);
// console.log(Producto2);

// console.log(`el iva es ${Producto1.calcularIva()}`);
// console.log(`el total a pagar con iva es ${producto1.calcularPrecioAPagar()}`)

// console.log(`el iva es ${Producto2.calcularIva()}`);
// console.log(`el total a pagar con iva es ${producto2.calcularPrecioAPagar()}`)

// //forma de sacar una variable del objeto
// //creando una sola variable para todos en vez de una para cada uno 

// const {id, nombre, precio, stock, descripcion} = prodcuto1;
// console.log(id, nombre, precio, stock, descripcion);

function calcularDescuento(precio) {    
         return precio - (precio * 0.1);
}
    
class productos{
    constructor(nombre, precio, informacion){
    this.nombre = nombre;
    this.precio = precio;
    this.informacion = informacion;
    }
    descuento(){
        return  this.precio - this.precio*0.1; 
    }
}

const producto1 = new productos("taza",50,"negra");
const producto2 = new productos("termo",1000,"verde");

console.log(producto1);
console.log(producto2);

console.log(producto1.nombre);
console.log(producto2.precio);

console.log(producto1.descuento());