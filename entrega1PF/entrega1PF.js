//INGRESO DE PRODUCTOS AL STOCK

class procesoStock{
    constructor(codigo,precio){
        this.codigo = codigo.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

const productosStock = [];

productosStock.push(new procesoStock("b60", "500"));
productosStock.push(new procesoStock("g40", "1500"));
productosStock.push(new procesoStock("y70", "16000"));
productosStock.push(new procesoStock("b80", "50000"));
productosStock.push(new procesoStock("a20", "8000"));
productosStock.push(new procesoStock("t90", "900"));
productosStock.push(new procesoStock("u80", "30000"));
productosStock.push(new procesoStock("b20", "7000"));
productosStock.push(new procesoStock("t90", "700"));

console.log(productosStock);


//ORDEN DE PRECIO DE MENOR A MAYOR
function ordenPrecio(){
    productosStock.sort((a,b) =>{
        return a.precio - b.precio;
    })
}
ordenPrecio();

// BUSQUEDA DE PRODUCTOS CON CODIGO (busca el producto con codigo G40)
const busquedaPorCodigo = productosStock.find((el) => el.codigo === "G40");
console.log(busquedaPorCodigo);

// PRODUCTOS CON UN AUMENTO DEL 20%
const aumentoStock = productosStock.map((el) => {
    return{
        codigo: el.codigo,
        precio: el. precio + el.precio * 0.2
    }
})
console.log(aumentoStock);

// FILTRO PARA AGRUPAR PRODUCTOS CON LA MISMA LETRA DE CODIGO
const filtro = productosStock.filter((el) => el.codigo.includes('B'));
console.log(filtro);



//SIMULADOR DEL PROCESO DE VENTAS

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

let productosVenta = [];
let continuar = true;

while (continuar) {

    let capturaCodigo = prompt("Ingrese el codigo del producto");
    let capturaPrecio = prompt("Ingrese el precio");
    let capturaTipoPago = prompt("Indique: efectivo - tarjeta"); 
    
    let pago = new procesoPago(capturaCodigo, capturaPrecio, capturaTipoPago);
    productosVenta.push(pago);

    alert(pago.mostrar());
    
    continuar = prompt("Desea agregar mas productos? Ingrese si o no.").toLowerCase() === "si";
}

// BASE DE DATOS DE PRODUCTOS INGRESADOS EN EL PROCESO DE VENTA.

let fecha = new Date().toLocaleDateString();
let guardarDatos = prompt("GUARDAR LA VENTA EN LA BASE DE DATOS?").toLocaleLowerCase();

    if(guardarDatos === "si") {
        alert("LA VENTA HA SIDO GUARDADA EXITOSAMENTE");
        console.log(productosVenta);
        console.log(`fecha de venta: ${fecha} - Cantidad de productos vendidos: ${productosVenta.length}`);
    
        for (const baseDatosVendido of productosVenta){
        console.log(`Codigo de producto vendido: ${baseDatosVendido.codigo}`);
        console.log(`Tipo de pago seleccionado: ${baseDatosVendido.tipoPago}`);
    } 
    } else {
        alert("VENTA NO GUARDADA EN BASE DE DATOS");
    }