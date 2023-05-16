
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const nombreSaludo = document.querySelector("#logo");
const numerito = document.querySelector("#numerito");

let productos = []

fetch('../data/productos.json')
    .then(response => response.json())
    .then(data => {
        cargarProductos(data)
        productos = data

    })

function construirNombre () {
    let objetoCliente = JSON.parse(localStorage.getItem("cliente"))
    const nombre = objetoCliente.nombre
    nombreSaludo.innerText = `Es un gusto saludarte, ${nombre} `
}

construirNombre()


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <div class="contenedor-imagen">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            </div>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar()
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.tipo

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;

const carritoCompraLS = JSON.parse(localStorage.getItem("carrito"));

if (carritoCompraLS) {
    productosEnCarrito = carritoCompraLS;
    actulizarNumerito()
}else {

    productosEnCarrito = []
}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    console.log("botom", idBoton)
    // console.log(id)
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    console.log(productoAgregado)
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
        // Agregamos subtotal
        productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad
    }else {
        productoAgregado.cantidad = 1
        // Agregamos subtotal
        productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad

        productosEnCarrito.push(productoAgregado)
        console.log(productosEnCarrito)
    }
    actulizarNumerito();
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function actulizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    console.log(nuevoNumerito);
}