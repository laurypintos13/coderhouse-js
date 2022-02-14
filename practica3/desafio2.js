//------------------------------------------

// let button = document.querySelector(".boton");

// //mostrar el evento que esta generando con event(e)
// //si quiero mostrar el objeto del evento uso .target
// button.addEventListener("click", (e)=>{
//     console.log(e.target);
// });

// button.addEventListener("click", (saludar));

// function saludar(){
//     alert("holiiis");
//     button.removeEventListener("click", saludar);
// }

// //------------------------------------------
// let cont1= document.querySelector(".contenedor1");
// let cont2= document.querySelector(".contenedor2");
// let button= document.querySelector(".boton");

// cont1.addEventListener("click", (e)=>{
//     alert("contenedor1");
//     e.stopPropagation(); //solo muestra el boton y para ahi, los demas no se ven 
// },true); //con ,true); primero se va a ver el alert del contendor1

// cont2.addEventListener("click", (e)=>{
//     alert("contenedor2");
// })

// button.addEventListener("click", (e)=>{
//     alert("boton");
// })

// //----------eventos del mouse--------------------
// let button= document.querySelector(".boton");

// //doble click
// button.addEventListener("dblclick", (e)=>{
//     alert("boton");
// })

// //mouseover - funciona al pasar el mouse por el boton
// button.addEventListener("mouseover", (e)=>{
//     alert("boton");
// })

// //mouseout - funciona al salir del boton con el mouse
// button.addEventListener("mouseout", (e)=>{
//     alert("boton");
// })

// //contextmenu - al hacer click derecho en el boton
// button.addEventListener("contextmenu", (e)=>{
//     alert("boton");
// })

// //mousemove - al pasar el mouse por el boton
// button.addEventListener("mousemove", (e)=>{
//     alert("boton");
// })

// //mouseleave - cuando entra al boton el mouse y desp sale.
// button.addEventListener("mouseleave", (e)=>{
//     alert("boton");
// })

//tambien esta el mousedown y mouseup.

// //----------eventos del teclado--------------------

// let inputHtml = document.querySelector(".input1");

// inputHtml.addEventListener("keydown",(e)=>{
//     console.log("cuando una tecla se presiona");
// });

// inputHtml.addEventListener("keypress",(e)=>{
//     console.log("cuando una tecla se presiona y se suelta");
// });

// inputHtml.addEventListener("keyup",(e)=>{
//     console.log("solo cuando la tecla se suelta");
// });

// //----------eventos de la interfaz--------------------
