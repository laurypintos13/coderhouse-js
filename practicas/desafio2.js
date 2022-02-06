const contenedorComida = document.getElementById("contenedor-comida");
const seleccionComida = document.getElementById("seleccion-comida");

let carrito = [];

seleccionComida.addEventListener("change", ()=>{
    console.log(seleccionComida.value);
    if(seleccionComida.value == "all"){
        mostrarComida(stockMenu);
    }else{
        mostrarComida(stockMenu.filter(el => el.tipo == seleccionComida.value));
    }
})

mostrarComida(stockMenu);

function mostrarComida(arrayComida){
    contenedorComida.innerHTML="";
    arrayComida.forEach(comidas => {
        let div1 = document.createElement("div")
        div1.className = "divCards"
        div1.innerHTML += `
                        <div class="card" style="width: 18rem;">
                            <img src = ${comidas.img}>
                            <div class="card-body">
                                <h5>${comidas.nombre}</h5>
                                <p>${comidas.descripcion}</p>
                                <h5> $ ${comidas.precio}</h5>
                                <button id="${comidas.id}"class="botonAgregar">Agregar</button>
                            </div>                            
                        </div>                        
                        `
        contenedorComida.appendChild(div1);
    });
}

btnAgregar = document.getElementsByClassName("botonAgregar");

    for(const btn of btnAgregar){    
        btn.addEventListener("click",()=>{
            console.log(btn.id);
            let comidas = stockMenu.find(item => item.id == btn.id)
            carrito.push(comidas);
        })
    }
console.log(carrito)





// //---- manera num 1 de hacer el contador para agregar al stock----

//  contenedorCards.addEventListener("click",(e) =>{    
//          if(e.target.classList.contains('btnRestar')){
//              contador --
//              span.textContent = contador;
//          }
//          if(e.target.classList.contains('btnSumar')){
//              contador ++
//              span.textContent = contador;
//         }
//          if(e.target.classList.contains('btnSumarStock')){
//                 span2.innerHTML = `<h5>Se agrego al stock:  ${contador} productos<h5>
//                                     <button id="btnCarritoStock" class="btn-dark">ingresar al stock</button>`;
//                 carritoStock.push(contador);                
//                 console.log(carritoStock);
//                 let btnStock = document.getElementById("btnCarritoStock")
//     btnStock.addEventListener('click', ()=>{
//         arrayProductos.forEach(e=>{
//         contenedorCarritoStock.innerHTML=`
//                                         <div class="alert alert-success" role="alert">
//                                             Producto Ingresado: ${e.nombre} -- 
//                                             Cantidad: ${contador}
//                                         </div>                
//                                         `
//         })
//     })                
             
// }
// })
