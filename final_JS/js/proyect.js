const containerCards = document.getElementById('containerCards');
const templateCards =  document.getElementById('templateCards').content //se usa .content para acceder a los elementos
const fragment = document.createDocumentFragment()

let miCarrito = []

document. addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})
containerCards.addEventListener('click', e =>{
    addCarrito(e)
})

//acceder al json
const fetchData = async() =>{
    try{
        const resp = await fetch('js/stock.json')
        const data = await resp.json()
        printCards(data)
    } catch (error){
        console.log(error);
    }
}
//imprimimos las tarjetas
const printCards = data =>{
   data.forEach(e => {
       templateCards.querySelector('h5').textContent = e.nombre
       templateCards.querySelector('p').textContent = e.descripcion
       templateCards.querySelector('h4').textContent = `$ ${e.precio}`
       templateCards.querySelector('img').setAttribute("src", e.img)
       templateCards.querySelector('button').dataset.id = e.id    

    const clone = templateCards.cloneNode(true);
    fragment.appendChild(clone);
   });
    containerCards.appendChild(fragment);
}

const addCarrito = e=>{    
    if(e.target.classList.contains('btn-success')){
        allCarrito(e.target.parentElement)
    }
    e.stopPropagation(); //detiene cualquier otro evento que se genere en el contenedor
}

const allCarrito = e =>{    
    const producto = {
        id: e.querySelector('.btn-success').dataset.id,
        nombre: e.querySelector('h5').textContent,
        precio: e.querySelector('h4').textContent,
        cantidad: 1,
    }
    if(miCarrito.hasOwnProperty(producto.id)){   //con has... nos indica si el objeto tiene la propiedad (si existe quiere decir que el producto se esta duplicando)
        producto.cantidad = miCarrito[producto.id].cantidad + 1
    }
    miCarrito[producto.id] = {...producto}
    console.log(miCarrito)
}

//  deje en min 40:59
