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
    continuar= prompt("Desea agregar mas productos? Ingrese si o no.").toLowerCase() === "si";
}

console.log(productos);
console.log(`Cantidad de productos vendidos: ${productos.length}`);

for (const baseDatosVendido of productos){
    console.log(`Codigo de producto vendido: ${baseDatosVendido.codigo}`);
    console.log(`Tipo de pago seleccionado: ${baseDatosVendido.tipoPago}`);
}
