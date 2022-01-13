//ciclos e iteracciones

// do{
//     console.log(num);
//     num++;
// } while (num <=10);

//BOOKLET
//actividad 1 - el pizarron

// let cant = parseInt(prompt("ingresa repeticiones"));
// let text = prompt("ingrese un texto a repetir");

// for(i = 0 ; i < cant ; i++){
//     alert(text);
// }


//actividad 2 - el cuadrado

// let solicitud = parseInt(prompt("ingrese un numero"));

// for(i = 0; i <= solicitud; i++){    
//     if(i > 3){
//         break;
//     }
//     alert("lado");
// }

//actividad 3 - registro alumnos

// let carga = 1;

// while( carga <=10){
//     let nombre = prompt("ingresa nombre alumno");
//     alert(nombre);
//     carga ++;
// }
//------------------------------

let alumnos = "";

for(i=0; i < 10; i++){
    alumnos += prompt("ingresa el nombre de alumno") + "\n";
}
alert(alumnos);

//actividad 4 - el innombrable.

// let entrada = prompt("ingrese nombre");
// let ingreso = "";

// while ( entrada !== "veldemort"){
//    ingreso += entrada + "\n";
//    entrada = prompt("ingrese nombre");
// }
// alert(ingreso);

//actividad 5 - comprando productos.

// let num = parseInt(prompt("ingrese un num"));

// switch(num){
//     case 1:
//         alert("tomate");
//         break;
//     case 2:
//         alert("papa");
//         break;
//     case 3:
//         alert("carne");
//         break;
//     case 4:
//         alert("pollo");
//         break;
//     default:
//         alert("el numero ingresado no existe en la lista")
//         break;
// }



// PRACTICANDO SWITCH
//Elije un numero del 1 al 10 para conocer el descuento

let eleccion = parseInt(prompt("Con tu compra ganaste un descuento. Elige un numero del 1 al 10 para conocer el descuento"));

switch (eleccion){
    case 1:
        alert("Tienes un 5% de descuento");
        break
    case 2:
        alert("Tienes un 10% de descuento");
        break;
    case 3:
        alert("Tienes 15% descuento");
        break;
    case 4:
        alert("Tienes un 5% de descuento");
        break;
    case 5:
        alert("Tienes un 5% de descuento");
        break;
    case 6:
        alert("Tienes un 50% de descuento");
        break;
    case 7:
        alert("Tienes un 5% de descuento");
        break;
    case 8:
        alert("Tienes un 5% de descuento");
        break;
    case 9:
        alert("Tienes un 15% de descuento");
        break;
    case 10:
        alert("Tienes un 25% de descuento");
        break;
    default:
        alert("el numero ingresado no es valido")
        break;
}