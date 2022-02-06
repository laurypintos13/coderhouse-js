// const contenedor = document.getElementById("ingresoStock")
// const btnAumento = document.getElementById("btnSumo");
// const btnResto = document.getElementById("btnResto");
// let span = document.getElementById("span");
// const btnIngreso = document.getElementById("Ingresar"); 
// let span2 = document.getElementById("spanSuma")
// let contador = 0;


// //----manera num 1 de hacerlo----
// contenedor.addEventListener("click",(e) =>{
    
//     if(e.target.classList.contains('btnRestar')){
//         contador --
//         span.textContent = contador;
//     }
//     if(e.target.classList.contains('btnSumar')){
//         contador ++
//         span.textContent = contador;
//     }
//     if(e.target.classList.contains('btnStock')){
//         span2.textContent = contador;

//     }
// })


// //----manera num 2 de hacer lo mismo----
// btnAumento.addEventListener("click", ()=>{
//     contador ++;
//    span.textContent= contador;
// })

// btnResto.addEventListener("click", ()=>{
//     contador --;
//    span.textContent= contador;
// })

// btnIngreso.addEventListener("click", ()=>{
//     const parrafo = document.createElement('p')
//     parrafo.textContent = 'Se agrego correctamente'
//     contenedor.appendChild(parrafo)
// })



// //-----BASE DE DATOS
// const productosLista =[{codigo: "a10", precio: 600},
//                        {codigo: "a20", precio: 700},
//                        {codigo: "a30", precio: 800},
//                        {codigo: "a40", precio: 900},];

// const btnStock = document.getElementById("btnBD")

// btnStock.addEventListener('click',() =>{
//     for(const prod of productosLista){
//         let contenedor = document.createElement("div");
//         contenedor.innerHTML += `<h3> Lista de Productos en Stock</h3>
//                                 <h4>codigo: ${prod.codigo}</h4>
//                                 <p>$ ${prod.precio}</p>`;
//         document.body.appendChild(contenedor).style.color="red";
//     }
// })
// //fin base de datos en stock


const btnFinalizar = document.getElementById("btnPagar")
const seleccionPago = document.getElementById("seleccionPago")


seleccionPago.addEventListener('change',()=>{
    if(seleccionPago.value == "efectivo"){
        console.log("el pago es en efectivo")
    }else{
        console.log("el pago es en tarjeta")
    }
})
