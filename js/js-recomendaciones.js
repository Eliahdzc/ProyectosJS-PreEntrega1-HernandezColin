// Seleccion de elementos
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const nombreSaludo = document.querySelector("#logo");
const numeroProductos = document.querySelector("#numeroProductos");
// botenesAgregar es una array dinamico en el codigo
let botonesAgregar = document.querySelectorAll(".producto-agregar");
// Inicializacion de array de productos
let productos = []
// Se traen los datos del archivo json
fetch('data/productos.json')
    .then(response => response.json())
    .then(data => {
        cargarProductos(data)
        productos = data

    })
// Se genera nombre llamando cliente desde localStorages
function construirNombreUsuario () {
    let objetoCliente = JSON.parse(localStorage.getItem("cliente"))
    const nombre = objetoCliente.nombre
    nombreSaludo.innerText = `Es un gusto saludarte, ${nombre} `
}

construirNombreUsuario()

// Se generan las tarjetas de productos en el DOM
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

// Se activa evenlistener de acuerdo a categorias de producto
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

// Se activa boton para agragar productos al carrito de compra
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

const carritoCompraLS = JSON.parse(localStorage.getItem("carrito"));
let productosEnCarrito;

if (carritoCompraLS) {
    productosEnCarrito = carritoCompraLS;
    actualizarNumeroProductosCarrito()
}else {
    productosEnCarrito = []
}

// Se agragan productos al carrito
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if  (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
        productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad
    } else {
        productoAgregado.cantidad = 1
        productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad
        productosEnCarrito.push(productoAgregado)
    }

    Toastify({
        text: "Se agregó un producto al carrito",
        duracion: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #8B0000,  #FFE4E1)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem",
            padding: "20px"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function () { }
    }).showToast();

    actualizarNumeroProductosCarrito();
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumeroProductosCarrito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numeroProductos.innerText = nuevoNumerito;
}