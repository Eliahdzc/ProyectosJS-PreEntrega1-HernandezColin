

const nombreCompra = document.querySelector("#logo");

function compraNombre() {
    let objetoClienteCompra = JSON.parse(localStorage.getItem("cliente"))
    const nombre = objetoClienteCompra.nombre
    nombreCompra.innerText = `Gracias por tu compra, ${nombre} `
}

compraNombre()

const carritoCompra = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoCompra);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
const totalCompra = document.querySelector("#carrito-acciones-total")
const botonCompra = document.querySelector("#comprar")

function cargarProductosCarrito() {
if (carritoCompra) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    carritoCompra.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
             <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
             </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
        `;

        contenedorCarritoProductos.append(div);
    })

} else {

    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}
}
cargarProductosCarrito()


function total(){
    let compra = carritoCompra.reduce((acc, producto)=> acc + producto.subtotal, 0);
    const totalNuevo = document.getElementById("total");
    totalNuevo.innerText = `$ ${compra}`
    console.log(compra)
}
total()

botonCompra.addEventListener("click", compra)

function compra() {
    localStorage.setItem("carrito", JSON.stringify([]))
    localStorage.removeItem("carrito")
    location.href = "index.html"
}
