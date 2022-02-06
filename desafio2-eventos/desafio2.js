const contenedorCards = document.getElementById("contenedor-card");
const contenedorCarritoStock = document.getElementById("contendor-carritoStock")
const contenedorCardCompra = document.getElementById("contenedor-cardCompra");
const contenedorInfoCompra = document.getElementById("contenedor-infoCompra");

let carritoStock = [];

//--------Simulador de compra de un producto

arrayProductos.forEach(e=>{
    contenedorCardCompra.innerHTML += `
                                    <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${e.nombre}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${e.descripcion}</h6>
                                        <h5 class="card-title">$ ${e.precio}</h5>
                                        <button id="btnRestaCompra" class="btnRestaCompra btn-danger">Quitar</button>
                                        <button id="btnSumaCompra" class="btnSumaCompra btn-success">Agregar</button>
                                        <h4 class="ingreso"> Cantidad: <span id="spanCompra">0</span></h4>
                                        <button id="Comprar" class="btnComprar btn-primary">COMPRAR</button><br><br>
                                        <p id="span2"></p>
                                        </div>
                                </div> `
})

btnRestaCompra = document.getElementById("btnRestaCompra");
btnSumaCompra = document.getElementById("btnSumaCompra");

btnComprar = document.getElementById("Comprar")
spanCompra = document.getElementById("spanCompra")
contadorCompra = 0;

btnRestaCompra.addEventListener("click", ()=>{    
    if(contadorCompra <= 0 ){
        spanCompra.textContent = 0;
    }else{
        contadorCompra --;
        spanCompra.textContent = contadorCompra;
    }
})

btnSumaCompra.addEventListener("click", ()=>{
    contadorCompra ++;
    spanCompra.textContent = contadorCompra;
})

btnComprar.addEventListener("click", ()=>{
    arrayProductos.forEach(e=>{
        contenedorCardCompra.innerHTML = `
                                <div class="alert alert-warning" role="alert">
                                    <h3>CARRITO<h3>
                                    <h4>Cantidad de productos:   ${contadorCompra} </h4>
                                    <h4>Total a abonar: $ ${contadorCompra * e.precio} </h4>
                                    <h5>Forma de pago:<h5>
                                    <button id="btnEfectivo" class=" btnefectivo btn-dark">EFECTIVO</button>
                                    <button id="btnTarjeta" class=" btntarj btn-dark">TARJETA</button>
                                </div>`
    const btnEfectivo = document.getElementById("btnEfectivo");
    const btnTarjeta = document.getElementById("btnTarjeta");

    btnEfectivo.addEventListener('click', () =>{
        contenedorCardCompra.innerHTML = `<div class="alert alert-success" role="alert">
                                                <h4>Pago en efectivo con un 10% de descuento</h4>
                                                <h3> TOTAL A PAGAR: $ ${(contadorCompra *e.precio) - ((contadorCompra *e.precio)*0.1)}</h3>
                                                <h6>MUCHAS GRACIAS POR SU COMPRA</h6>
                                            </div>    `
    })
    btnTarjeta.addEventListener('click', () =>{
        contenedorCardCompra.innerHTML = `
                                        <div class="alert alert-primary" role="alert">
                                                <h4>Pago con tarjeta con un recargo del 10%</h4>
                                                <h3> TOTAL A PAGAR: $ ${(contadorCompra *e.precio) + ((contadorCompra *e.precio)*0.1)}</h3>
                                                <h5>Ingrese Cantidad de cuotas:
                                                    <select id="selectCuotas">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <button id="btnCuotas" class=" btncuota btn-primary">FINALIZAR COMPRA</button>
                                                </h5>                                        
                                                </div>`
    const btnCuotas = document.getElementById("btnCuotas")
    const selectCuotas = document.getElementById("selectCuotas")
            btnCuotas.addEventListener('click', ()=> {
            contenedorCardCompra.innerHTML = `
                                    <div class="alert alert-success" role="alert">
                                        <h3> TOTAL A PAGAR: <br> ${selectCuotas.value} cuotas de $ ${((contadorCompra *e.precio) + ((contadorCompra *e.precio)*0.1)) / (selectCuotas.value)}</h3>
                                        <h6>MUCHAS GRACIAS POR SU COMPRA</h6>`
            })
    
        })   
    })
})

//----Simulador de agregar un producto al stock

arrayProductos.forEach(e=>{
    contenedorCards.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${e.nombre}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${e.descripcion}</h6>
                                        <h5 class="card-title">$ ${e.precio}</h5>
                                        <button id="btnResto" class="btnRestar btn-danger">Quitar</button>
                                        <button id="btnSumo" class="btnSumar btn-success">Agregar</button>
                                        <h4 class="ingreso"> Ingreso: <span id="span">0</span></h4>
                                        <button id="sumarStock" class="btnStock btn-primary">Sumar al Stock</button><br><br>
                                        <p id="span2"></p>
                                        </div>
                                </div> `
})

const btnAumento = document.getElementById("btnSumo");
const btnResto = document.getElementById("btnResto");
const btnSumarStock = document.getElementById("sumarStock")
let contador = 0;

btnAumento.addEventListener("click", ()=>{
    contador ++;
   span.textContent= contador;
})

btnResto.addEventListener("click", ()=>{
    if(contador <=0){
        span.textContent = 0
    } else{    
        contador --;
        span.textContent= contador;
    }
})

btnSumarStock.addEventListener("click", ()=>{
    span2.innerHTML = `<h5>Se agrego al stock:  ${contador} productos<h5>
                       <button id="btnCarritoStock" class=" btnStock btn-dark">ingresar al stock</button>`;
    carritoStock.push(contador);                  
    console.log(carritoStock);
    
    let btnStock = document.getElementById("btnCarritoStock")
    btnStock.addEventListener('click', ()=>{
        arrayProductos.forEach(e=>{
        contenedorCarritoStock.innerHTML=`
                                        <div class="alert alert-success" role="alert">
                                            Producto Ingresado: ${e.nombre} -- 
                                            Cantidad: ${contador}
                                        </div>                
                                        `
        })
    })
})


