//esto es un comentario

const nombre1 = prompt("ingrese nombre");
const apellido1 = prompt ("ingrese apellido")
const edad1 = prompt ("ingrese edad")

console.log ("mi nombre es " + nombre1 + apellido1 + " y mi edad es " + edad1 + " anios")

//ejercicios booklet
//actividad 1

let nombre = "homero";
let apellido = "Simpsons";
let edad = 40;

console.log(nombre);
console.log(apellido);
console.log(edad);

//actividad 2
const cuidad1 = "Springfield";
const cuidad2 = "Cordoba";
const cuidad3 = "Bsas";
const cuidad4 = "Mendoza";
const cuidad5 = "formosa";

console.log(cuidad1);
console.log(cuidad2);
console.log(cuidad3);
console.log(cuidad4);
console.log(cuidad5);


//actividad 3

alert("Vamos a pedirte unos datos para tu carnet");

let nombreCarnet = prompt("cual es tu nombre?");
let fechaNac = prompt("fecha de nac?");
let cuidad = prompt("cual es tu cuidad?");
let carnet = "tu nombre es " + nombreCarnet + " tu fecha de nacimiento es " + fechaNac + " y tu cuidad es " + cuidad;

console.log (carnet);


//actividad 4
let solicitud = alert("debes ingresar el nombre de 5 integrantes de tu familia");
let integrante1 = prompt("ingrese el integrante numero 1");
let integrante2 = prompt("ingrese el integrante numero 2");
let integrante3 = prompt("ingrese el integrante numero 3");
let integrante4 = prompt("ingrese el integrante numero 4");
let integrante5 = prompt("ingrese el integrante numero 5");

let totalIntegrantes = "tus integrantes de la familia son: " + integrante1 + "-" + integrante2 + "-" + integrante3 + "-" + integrante4 + "-" + integrante5;
alert(totalIntegrantes);

//actividad 5

let precio1 = prompt("ingrese un precio");
let precio2 = prompt("ingrese otro precio");
let porcentaje20 = precio1 - (precio1 * 0.2);
let porcentaje30 = precio2 - (precio2 * 0.3);


alert ("sobre el primer precio te hacemos un descuento y abonaras  " + porcentaje20 + " y sobre el segundo te hacemos un descuento tambien y abonaras " + porcentaje30)
