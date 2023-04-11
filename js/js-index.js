// El Sitio a construir para el Proyecto será una marca personal en donde se darán tips de belleza, cuidado personal y se recomendarán y comercializarán diversos productos.
// Primero se solicita algunos datos al cliente
// En relación a los datos ingresados se realizarán algunas sugerencias de productos
// Se le otorgara cupon de descuento
// Si compra productos se le efectuará el descuento




function DatosCliente (nombre, edad, piel) {
        this.nombre = nombre;
        this.edad = parseFloat(edad);
        this.piel = piel;
        alert("Bienvenide " + this.nombre + "  🤗 "  +"\nTe queremos hacer algunas recomendaciones   😉 ");

        if (this.edad <= 35){
            let producto = '';
            let opcion = "";
            while(opcion !== "x") {
                switch(this.piel){
                    case "1":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y seca te recomendamos los siguientes productos\n" + mostrarListaProductos(pielJovenSeca)  + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielJovenSeca)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "2":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y grasa te recomendamos los siguientes productos\n" +mostrarListaProductos(pielJovenGrasa) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielJovenGrasa)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "3":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y mixta te recomendamos los siguientes productos\n" + mostrarListaProductos(pielJovenMixta) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielJovenMixta)
                        graciasCompra()
                        opcion = "x"
                        break;
                    default:
                        alert("opcion no valida")
                        opcion = "x"
                        break;
                }
            }
        } else {
            let producto = '';
            let opcion = "";
            while(opcion !== "x") {
                switch(this.piel){
                    case "1":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y seca te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraSeca) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielMaduraSeca)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "2":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y grasa te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraGrasa) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielMaduraGrasa)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "3":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y mixta te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraMixta) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
                        ordenarProductos(producto, pielMaduraMixta)
                        graciasCompra()
                        opcion = "x"
                        break;
                    default:
                        alert("opcion no valida");
                        opcion = "x"
                        break;
                }
            }
        }
}

const pielJovenSeca = [
    {id: "1", producto:"Protector solar con vitamina E", precio: "589" },
    {id: "2", producto:"Crema hidratante para día y noche", precio: "756" },
    {id: "3", producto:"Mascarilla para piel seca ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel seca", precio: "2870" },
    {id: "5", producto:"Desmaquillante para piel seca", precio: "490" }
]

const pielJovenGrasa = [
    {id: "1", producto:"Protector solar con vitamina E para piel grasa", precio: "589" },
    {id: "2", producto:"Crema para día y noche", precio: "756" },
    {id: "3", producto:"Mascarilla para piel grasa ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel grasa", precio: "2870" },
    {id: "5", producto:"Gel limpiador para piel grasa", precio: "490" }
]

const pielJovenMixta = [
    {id: "1", producto:"Protector solar con vitamina E para piel mixta", precio: "589" },
    {id: "2", producto:"Crema para día y noche piel mixta", precio: "756" },
    {id: "3", producto:"Mascarilla para piel mixta ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel mixta", precio: "2870" },
    {id: "5", producto:"Gel limpiador para piel mixta", precio: "490" }
]

const pielMaduraSeca = [
    {id: "1", producto:"Protector solar con vitamina E", precio: "589" },
    {id: "2", producto:"Crema hidratante para día y noche", precio: "756" },
    {id: "3", producto:"Mascarilla para piel seca ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel seca", precio: "2870" },
    {id: "5", producto:"Desmaquillante para piel seca", precio: "490" }
]

const pielMaduraGrasa = [
    {id: "1", producto:"Protector solar con vitamina E para piel grasa", precio: "589" },
    {id: "2", producto:"Crema para día y noche", precio: "756" },
    {id: "3", producto:"Mascarilla para piel grasa ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel grasa", precio: "2870" },
    {id: "5", producto:"Gel limpiador para piel grasa", precio: "490" }
]

const pielMaduraMixta = [
    {id: "1", producto:"Protector solar con vitamina E para piel mixta", precio: "589" },
    {id: "2", producto:"Crema para día y noche piel mixta", precio: "756" },
    {id: "3", producto:"Mascarilla para piel mixta ", precio: "1350" },
    {id: "4", producto:"Kit completo para cuidado piel mixta", precio: "2870" },
    {id: "5", producto:"Gel limpiador para piel mixta", precio: "490" }
]

const mostrarListaProductos = (arr) => {
    const lista = arr.map((elem)=>{
        return `${elem.id}) ${elem.producto} $${elem.precio}`
    })
    return lista.join('\n')
}



function graciasCompra(){
    alert( "🌷  " + nombre.toUpperCase() + " GRACIAS POR TU COMPRA!!   😉 ")
}


const carritoCompra = []


const ordenarProductos = (numProducto, arr) => {
    agregarProductosAlCarrito(numProducto, arr)

    let comprarOtroProducto = prompt("Escogiste el siguiente Producto\n" + mostrarListaProductos(carritoCompra) + "\nDeseas ordenar otro Pruducto?" + "\nSI " + "o" + " NO")
    while(comprarOtroProducto.toUpperCase() === 'SI'){
        let otroProducto = prompt("🌷  " + "\nPor favor escoge otro producto de la lista\n" + mostrarListaProductos(arr) + "\nPara salir presiona (x)\n" + "Que Producto deseas?")
        agregarProductosAlCarrito(otroProducto, arr)
        const nuevoProductoCarrito = arr.find((elem) => elem.id === otroProducto)
        comprarOtroProducto = prompt("Escogiste el siguiente Producto\n" + nuevoProductoCarrito.producto + ' ' + nuevoProductoCarrito.precio + "\nDeseas ordenar otro Pruducto?" + "\nSI " + "o" + " NO")
    }

    let totalCompraProductos = carritoCompra.reduce((acum, current) => acum + Number(current.precio), 0)
    console.log('Total de Compra', carritoCompra, totalCompraProductos)

    alert("Escogiste los siguientes Productos\n" + mostrarListaProductos(carritoCompra) + "\nPor ser nuevo cliente te regalamos  🎁 un BONO de 15% de Descuento\n" + "El total de tu compra es de " + totalCompraProductos * .85)

}

const agregarProductosAlCarrito = (numProducto, arr)  => {
    const producto = arr.find((elem) => elem.id === numProducto)
    carritoCompra.push(producto)
}



let nombre = prompt("Queremos que tu experiencia sea personalizada\n " + "Escribe tu nombre  🌷  ");
let edad = prompt("Que edad tienes\n " +  "🌷  " + nombre);
let piel = prompt("Que tipo de piel tienes " + "🌷  " +nombre + "\n1) Seca" + "\n2) Grasa" + "\n3) Mixta");

const cliente1 = new DatosCliente(nombre, edad, piel);
console.log(cliente1);

