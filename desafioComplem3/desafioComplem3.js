//obtener datos de inputs
document.getElementById("ingresoCodigo").value = "b70";
document.getElementById("ingresoPrecio").value = 5000;
document.getElementById("formaPago").value = "tarjeta";


//Creando elementos desde objetos
const productosLista =[{codigo: "a10", precio: 600},
                       {codigo: "a20", precio: 700},
                       {codigo: "a30", precio: 800},
                       {codigo: "a40", precio: 900},];

for(const prod of productosLista){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Lista de Productos en Stock</h3>
                            <h4>codigo: ${prod.codigo}</h4>
                            <p>$ ${prod.precio}</p>`;
    document.body.appendChild(contenedor);
}

//Simulador
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
            return `El valor con un descuento del 10% es ${this.descuento()}`;      
        }
        else if (this.tipoPago === "tarjeta") {
            return `El valor con un recargo del 5% es ${this.recargo()}`;       
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

for (let procesoPago of productosVenta){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Informacion de venta:</h3>
                            <p> codigo: ${procesoPago.codigo} </p>
                            <p> precio: ${procesoPago.precio}</p>
                            <p> tipo pago: ${procesoPago.tipoPago}</p>`;
    document.body.appendChild(contenedor);
}

let fecha = new Date().toLocaleDateString();
let guardarDatos = prompt("GUARDAR LA VENTA EN LA BASE DE DATOS?").toLocaleLowerCase();

    if(guardarDatos === "si") {
    
        for (const baseDatosVendido of productosVenta){
            let baseDatos = document.createElement("div");
            baseDatos.innerHTML = `<h3>Base de datos de productos vendidos</h3>
                                   <p>fecha de venta: ${fecha}</p>
                                   <p>Cantidad de productos vendidos: ${productosVenta.length}</p>
                                   <p>Codigo de producto vendido: ${baseDatosVendido.codigo}</p>
                                   <p>Tipo de pago seleccionado: ${baseDatosVendido.tipoPago}</p>`;
            document.body.appendChild(baseDatos);
        } 
    } else {
        let noBaseDatos = document.createElement("div");
        noBaseDatos.innerHTML= `<h3>Base de datos de productos vendidos</h3>
                                <p>fecha de venta: ${fecha}</p>
                                <p>Datos de venta no guardados</p>`;
        document.body.appendChild(noBaseDatos);
    }

//querySelector
let selectores = document.querySelectorAll(`#formulario .inputFormulario`);
console.log(selectores);