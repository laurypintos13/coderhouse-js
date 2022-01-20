// function calcularDescuento(precio) {
//     // let des10 = (precio * 0.1);
//     // let totalDescuento = precio - des10;
//     // return totalDescuento;
//     return precio - (precio * 0.1);
// }

// function calcularRecargo(precio) {
//     // let rec5 = (precio * 0.05);
//     // let totalRecargo = precio + rec5;
//     // return totalRecargo;
//     return precio - (precio * 0.05);
// }

// function procesar(precio, tipoPago) {
    
//     const descuento = precio - (precio * 0.1);
//     const recargo = precio - (precio * 0.05);
    
//     if (tipoPago === "efectivo") {           
//         alert("el valor a pagar con descuento es " + descuento);
//     } else if (tipoPago === "tarjeta") {  
//         alert("el valor a pagar con recargo es " + recargo);
//     } else {
//         alert("la palabra ingresada es incorrecta");
//     }
// }

// let termine = false;

// while (!termine) {
//     let precio = parseInt(prompt("ingrese el valor del producto"));
//     let tipoPago = prompt("indique: efectivo o tarjeta");   
    
//     procesar(precio, tipoPago);

//     termine = prompt("desea continuar?") === "no"; 
// }

// function calcularDescuento(precio) {    
//     return precio - (precio * 0.1);
// }
// function calcularRecargo(precio) {  
//     return precio + (precio * 0.05);
// }

// let continuar = true;

// while (continuar) {

//     let precio = parseInt(prompt("ingrese el valor del producto"));
//     let tipoPago = prompt("indique: efectivo o tarjeta");   
    
//     const totalDescuento = calcularDescuento(precio);
//     const totalRecargo = calcularRecargo(precio);

//     if (tipoPago === "efectivo") {           
//         alert("El valor a pagar con descuento es " + totalDescuento + " pesos.");
//     } else if (tipoPago === "tarjeta") {        
//         alert("El valor a pagar con recargo es " + totalRecargo + " pesos.");
//         let cantCuotas = prompt ("cantidad de cuotas?");
//         alert("Debera abonar: " + cantCuotas + " cuotas de " + (totalRecargo/cantCuotas) + " pesos.");
//     } else {
//         alert("La palabra ingresada es incorrecta");
//     }

//     continuar = prompt("Desea continuar? ingrese si o no") === "si";
// }

//BOOKLET 1

