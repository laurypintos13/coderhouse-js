const contenedorCards = document.getElementById('contenedorCards');
const select = document.getElementById('select');

const contenedorCarrito = document.getElementById('contenedorCarrito');
const contadorCarrito = document.getElementById('contadorCarrito');

const btnModal1 = document.getElementById('btnModal1');
const totalPagar = document.getElementById('totalPago');
const btnFinalizar = document.getElementById('btnFinalizar')
const contenedorModal2 = document.getElementById('ModalBody2')

carritodecompras = [];

//procedimiento de imprimir cards en el main de html
function imprimirProductos(arrayPlantas){
    contenedorCards.innerHTML="";
    arrayPlantas.forEach(e => {
        let div1 = document.createElement("div")
        div1.className = "divCards"
        div1.innerHTML += ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                            <div class="col-md-4">
                                <img id= "imgTamano" src="${e.img}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${e.nombre}</h5>
                                <p class="card-text">${e.descripcion}</p>
                                <h4 class="card-text"> $ ${e.precio}</h4>
                                <button type="button" id="btnAgregar${e.id}" class="btn btn-success">AGREGAR AL CARRITO</button>
                            </div>
                            </div>
                            </div>
                            </div>`   
        contenedorCards.appendChild(div1);

        let botonAgregar = document.getElementById(`btnAgregar${e.id}`) 
            botonAgregar.addEventListener('click', ()=>{
                agregarCarrito(e.id)
            })     
        });
}
//llamo a la funcion imprimirProductos y le doy como parametro el array de los productos
imprimirProductos(arrayPlantas)

//procedimiento de filtro del select
select.addEventListener('change',()=>{  
    if(select.value === "menor"){
        arrayPlantas.sort(function(a,b) {
            return a.precio - b.precio           
        })
        imprimirProductos(arrayPlantas);
    }if(select.value === "mayor"){
        arrayPlantas.sort(function(a,b) {
            return a.precio + b.precio
    })
        imprimirProductos(arrayPlantas);      
    } 
})

//procedimiento para actualizar carrito
function actualizoCarrito(){
    //se actualiza el num del carrito de compra 
    // al acumulador le sumo la cantidad que se va agregando y el acumulador aumenta de acuerdo a esa cantidad.
    contadorCarrito.textContent = carritodecompras.reduce((acum, el)=> acum + el.cantidad, 0);
    //se actualiza el precio total
    // al acumulador(preciototal) le sumo el precio x la cantidad de cada producto y suma al acumulador
    totalPagar.textContent = carritodecompras.reduce((acum, el) => acum + (el.precio*el.cantidad),0);
} 

//procedimiento para agregar al carrito
function agregarCarrito(id){
  //mediante .find encuentra el prod que tenga el mismo id y lo sumo al carrito.
    let mismoProducto = carritodecompras.find(i => i.id == id);
        if (mismoProducto) {
            mismoProducto.cantidad = mismoProducto.cantidad +1;
            document.getElementById(`cantidad${mismoProducto.id}`).innerHTML = `<p id=cantidad${mismoProducto.id}>
                                                                                    Cantidad: ${mismoProducto.cantidad} 
                                                                                </p>`
        actualizoCarrito();
    }else{
        //creo una variable y digo que me encuentre un parametro que sea igual al id de ese parametro
        let agregarPlanta = arrayPlantas.find(e => e.id == id);        
        carritodecompras.push(agregarPlanta);
     
        //agregar toda la info del producto al modal del carrito
        let div = document.createElement('div');
            div.className = 'productoEnCarrito'          
            div.innerHTML = `
                            <h4>${agregarPlanta.nombre}</h4>
                            <h5>Precio: $ ${agregarPlanta.precio}</h5>
                            <h6 id=cantidad${agregarPlanta.id}> Cantidad: ${agregarPlanta.cantidad} </h6>
                            <button id=btneliminar${agregarPlanta.id} class="btn btn-danger">Eliminar</button><hr>
                            `                
        contenedorCarrito.appendChild(div);
        actualizoCarrito();
       
        //eliminar un producto del carrito.        
        let btnEliminar = document.getElementById(`btneliminar${agregarPlanta.id}`);
            btnEliminar.addEventListener('click',()=>{      
                btnEliminar.parentElement.remove();   //con parentELement elimino al padre de ese boton     
                carritodecompras = carritodecompras.filter(el => el.id != agregarPlanta.id); //de cada elemento del carrito se filtra los que sean diferentes al id y se crea un nuevo array donde solo muestra los que son diferentes (elimnando asi el que yo quiero) 

                localStorage.setItem('carrito', JSON.stringify(carritodecompras));
                actualizoCarrito()
    })  
}
        localStorage.setItem('carrito', JSON.stringify(carritodecompras));
}

//Procedimiento de finalizar compra
let div1 = document.createElement("div");
    div1.className = "div1demodal2";
    div1.innerHTML = `  
                    <div class="alert alert-warning" role="alert">
                        <p>Su pedido se encuentra en proceso de preparacion</p><br>
                        <h5>¡MUCHAS GRACIAS POR SU COMPRA!<h5>
                        <h6>PLANTAS DE INTERIOR<h6><br>         
                        <button id="finalizar" data-bs-dismiss="modal" class="btn btn-success">VOLVER A INICIO</button>
                    </div>
                    `
    contenedorModal2.appendChild(div1)
    let btnsalir= document.getElementById('finalizar');
        btnsalir.addEventListener('click', ()=>{           
            localStorage.clear()
            contadorCarrito.textContent=0;
        })

//Recuperar Datos
function recuperarDatos(){
    let recuperarDatosLS= JSON.parse(localStorage.getItem('carrito'));
    if(recuperarDatosLS){
        recuperarDatosLS.forEach(e=>{
            agregarCarrito(e.id);
            actualizoCarrito();

        })
    }
}
recuperarDatos();
