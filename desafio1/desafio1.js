// simulador interactivo donde se le pide al usuario que ingrese el valor de un producto
// y la forma de abonarlo. De acuerdo a eso aplica un descuento o un recargo y cuotas.

function calcularDescuento(precio) {    
    return precio - (precio * 0.1);
}
function calcularRecargo(precio) {  
    return precio + (precio * 0.05);
}

let continuar = true;

while (continuar) {
    let precio = parseInt(prompt("Ingrese el valor del producto"));
    let tipoPago =  prompt("Indique: efectivo - tarjeta").toLowerCase();   
    const totalDescuento = calcularDescuento(precio);
    const totalRecargo = calcularRecargo(precio);

    if (tipoPago === "efectivo") {           
        alert("El valor a abonar con un descuento del 10% es " + totalDescuento + " pesos.");
    } else if (tipoPago === "tarjeta") {        
        alert("El valor a abonar con un recargo del 5% es " + totalRecargo + " pesos.");
        let cantCuotas = parseInt(prompt("cantidad de cuotas?"));
        alert("Debe abonar: " + cantCuotas + " cuotas de " + (totalRecargo/cantCuotas) + " pesos.");
    } else {
        alert("La palabra ingresada es incorrecta");
    }

    continuar = prompt("Desea continuar? Ingrese si o no").toLowerCase() === "si";
}


//OTRA MANERA DE REALIZARLO LLEGANDO AL MISMO RESULTADO:

function procesoPago(precio, tipoPago) {
    
    const totalDescuento = precio - (precio * 0.1);
    const totalRecargo = precio + (precio * 0.05);
        
    if (tipoPago === "efectivo") {           
        alert("El valor a abonar con un descuento del 10% es " + totalDescuento + " pesos.");
    } else if (tipoPago === "tarjeta") {        
        alert("El valor a abonar con un recargo del 5% es " + totalRecargo + " pesos.");
        let cantCuotas = parseInt(prompt("cantidad de cuotas?"));
        alert("Debe abonar: " + cantCuotas + " cuotas de " + (totalRecargo/cantCuotas) + " pesos.");
    } else {
        alert("La palabra ingresada es incorrecta");
    }
}

let continuar = true;

while (continuar) {
    let precio = parseInt(prompt("Ingrese el valor del producto"));
    let tipoPago =  prompt("Indique: efectivo - tarjeta").toLowerCase();

    procesoPago(precio, tipoPago);

    continuar = prompt("Desea continuar? Ingrese si o no").toLowerCase() === "si";
}