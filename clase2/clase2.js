// let num = parseInt(prompt("ingrese un numero"));

// if (num > 1000){
//     alert("el numero es mayor a 1000");
// }

//----------------------------------

// let pregunta = prompt("es mayor de edad");

// if (pregunta === "si"){
//     let edad = parseInt(prompt("ingrese su edad"));
//     alert ("Bienvenido");
// }
// else{
//     alert("usted no puede ingresar")
// }

//----------------------------------

// let pregunta = prompt("ingrese un textop");

// if (pregunta === "hola"){
  
//     console.log ("usted ingreso hola ");
// }
// else{
//     alert("usted no puede ingresar")
// }


// BOOKLET 2

// ACTIVIDAD 1 - YO NO FUI

// let solicitudNombre = prompt("ingrese un nombre");
// let nombre = "laura";

// console.log(solicitudNombre.toLocaleLowerCase());

// if (solicitudNombre.toLocaleLowerCase() === nombre){
//     alert("FUI YO");
// }
// else{
//     alert("YO NO FUI ");
// }

// ACTIVIDAD 2 - Presionar Y

// let tecla = prompt("presione una tecla");

// if (tecla === "y" || tecla === "Y"){
//     alert("Correcto!")
// }
// else {
//     alert("Error")
// }

// ACTIVIDAD 3 - escoger personaje

let numUsuario = parseInt(prompt("ingrese un numero"));

if (numUsuario === 1){
    alert("elegiste a Homero");
}
else if(numUsuario === 2){
    alert("elegiste a Marge");
}
else if(numUsuario === 3){
    alert("elegiste a Bart");
}
else if (numUsuario === 4){
    alert("elegiste a Lisa");
}
else{
    alert("el numero ingresado no corresponde a ningun personaje");
}

// ACTIVIDAD 4 - presupuesto

let valor = prompt("ingrese un valor");

if ((valor >= 0) && (valor <= 1000)){
    alert("presupuesto bajo");
}
else if((valor >= 1001) && (valor <= 3000)){
    alert("presupuesto medio");
}
else{
    alert("presupuesto alto");
}

// ACTIVIDAD 5 - vacio

alert("Te vamos a pedir que ingreses 4 productos");
let producto1 = prompt("ingrese el producto 1");
let producto2 = prompt("ingrese el producto 2");
let producto3 = prompt("ingrese el producto 3");
let producto4 = prompt("ingrese el producto 4");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    let todosProductos= "1- " + producto1 + " 2- " + producto2 + " 3- "  + producto3 + " 4- " + producto4;
    alert(todosProductos);
}
else{
    alert("es necesario ingresar todos los productos, intente nuevamente");
}

