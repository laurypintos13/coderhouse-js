//ARRAYS//

// class procesoPago{
//     constructor(nombre, precio, tipoPago){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.tipoPago = tipoPago.toLowerCase();
//     }
//     descuento(){
//         return this.precio - this.precio*0.1;
//     }
//     recargo(){
//         return this.precio + this.precio*0.05;
//     }
// }
// let productos = [];

// productos.push(new procesoPago("rascador1", "1200", ""));
// productos.push(new procesoPago("rascador2", "1600", ""));
// productos.push(new procesoPago("rascador3", "1700", ""));
// productos.push(new procesoPago("rascador4", "1900", ""));

// for(const aPagar of productos){
//     console.log(aPagar.descuento());
// }

// for(const aPagar of productos){
//     console.log(aPagar.recargo());
// }
//---------------------------------------
//SIMULADOR 1

// class procesoPago {
//     constructor(codigo, precio, tipoPago){
//         this.codigo = codigo.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.tipoPago = tipoPago.toLowerCase();
//     }

//     descuento() {
//         return this.precio - this.precio*0.1;
//     }

//     recargo() {
//         return this.precio + this.precio*0.05;
//     }
// }

// let productos = [];
// let continuar = true;

// while (continuar) {
//     let capturaCodigo = prompt("Ingrese el codigo del producto");
//     let capturaPrecio = prompt("Ingrese el precio");
//     let capturaTipoPago = prompt("Indique: efectivo - tarjeta"); 
    
//     let pago = new procesoPago(capturaCodigo, capturaPrecio, capturaTipoPago);
//     productos.push(pago);

 
//     if (capturaTipoPago === "efectivo") {        
//             alert(`El valor a abonar con un descuento del 10% es ${pago.descuento()}`);        
//     }
//     else if(capturaTipoPago === "tarjeta") {
//             alert(`El valor a abonar con un recargo del 5% es ${pago.recargo()}`);       
//     }
//     else {
//         alert("La palabra ingresada es incorrecta");
//     }
    
//     continuar= prompt("Desea agregar mas productos?").toLowerCase() === "si";
// }

// console.log(productos);
// console.log(productos.length);
//FIN SIMULADOR 1

//SIMULADOR 2


class procesoPago {
    constructor(codigo, precio, tipoPago){
        this.codigo = codigo.toUpperCase();
        this.precio = parseFloat(precio);
        this.tipoPago = tipoPago.toLowerCase();
    }

    descuento() {
        return this.precio - this.precio*0.1;
    }

    recargo() {
        return this.precio + this.precio*0.05;
    }
    mostrar() {
        if (this.tipoPago === "efectivo") {        
            return `El valor a abonar con un descuento del 10% es ${this.descuento()}`;        
        }
        else if (this.tipoPago === "tarjeta") {
            return `El valor a abonar con un recargo del 5% es ${this.recargo()}`;       
        }
        else {
            return "La palabra ingresada es incorrecta";
        }
    }
}

let productos = [];
let continuar = true;

while (continuar) {
    let capturaCodigo = prompt("Ingrese el codigo del producto");
    let capturaPrecio = prompt("Ingrese el precio");
    let capturaTipoPago = prompt("Indique: efectivo - tarjeta"); 
    
    let pago = new procesoPago(capturaCodigo, capturaPrecio, capturaTipoPago);
    productos.push(pago);

    alert(pago.mostrar());
    continuar = prompt("Desea agregar mas productos? Ingrese si o no.").toLowerCase() === "si";
}

console.log(productos);
console.log(`Cantidad de productos vendidos: ${productos.length}`);

for (const baseDatosVendido of productos){
    console.log(`Codigo de producto vendido: ${baseDatosVendido.codigo}`);
    console.log(`Tipo de pago seleccionado: ${baseDatosVendido.tipoPago}`);
}
