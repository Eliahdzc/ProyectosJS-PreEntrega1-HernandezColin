
// El Sitio a construir para el Proyecto será una marca personal en donde se darán tips de belleza, cuidado personal y se recomendarán y comercializarán diversos productos.
// Primero se solicita algunos datos al cliente
// En relación a los datos ingresados se realizarán algunas sugerencias de productos
// Se le otorgara cupon de descuento
// Si compra productos se le efectuará el descuento




// function DatosCliente (nombre, edad, piel) {
//         this.nombre = nombre;
//         this.edad = parseFloat(edad);
//         this.piel = piel;
//         alert("Bienvenide " + this.nombre + "  🤗 "  +"\nTe queremos hacer algunas recomendaciones   😉 ");

//         if (this.edad <= 35){
//             let producto = '';
//             let opcion = "";
//             while(opcion !== "x") {
//                 switch(this.piel){
//                     case "1":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y seca te recomendamos los siguientes productos\n" + mostrarListaProductos(pielJovenSeca)  + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielJovenSeca)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     case "2":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y grasa te recomendamos los siguientes productos\n" +mostrarListaProductos(pielJovenGrasa) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielJovenGrasa)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     case "3":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y mixta te recomendamos los siguientes productos\n" + mostrarListaProductos(pielJovenMixta) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielJovenMixta)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     default:
//                         alert("opcion no valida")
//                         opcion = "x"
//                         break;
//                 }
//             }
//         } else {
//             let producto = '';
//             let opcion = "";
//             while(opcion !== "x") {
//                 switch(this.piel){
//                     case "1":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y seca te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraSeca) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielMaduraSeca)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     case "2":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y grasa te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraGrasa) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielMaduraGrasa)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     case "3":
//                         producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y mixta te recomendamos los siguientes productos\n" + mostrarListaProductos(pielMaduraMixta) + "\nPara salir preciona (x)\n" + "Que Producto deseas?")
//                         ordenarProductos(producto, pielMaduraMixta)
//                         graciasCompra()
//                         opcion = "x"
//                         break;
//                     default:
//                         alert("opcion no valida");
//                         opcion = "x"
//                         break;
//                 }
//             }
//         }
// }

// const pielJovenSeca = [
//     {id: "1", producto:"Protector solar con vitamina E", precio: "589" },
//     {id: "2", producto:"Crema hidratante para día y noche", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel seca ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel seca", precio: "2870" },
//     {id: "5", producto:"Desmaquillante para piel seca", precio: "490" }
// ]

// const pielJovenGrasa = [
//     {id: "1", producto:"Protector solar con vitamina E para piel grasa", precio: "589" },
//     {id: "2", producto:"Crema para día y noche", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel grasa ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel grasa", precio: "2870" },
//     {id: "5", producto:"Gel limpiador para piel grasa", precio: "490" }
// ]

// const pielJovenMixta = [
//     {id: "1", producto:"Protector solar con vitamina E para piel mixta", precio: "589" },
//     {id: "2", producto:"Crema para día y noche piel mixta", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel mixta ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel mixta", precio: "2870" },
//     {id: "5", producto:"Gel limpiador para piel mixta", precio: "490" }
// ]

// const pielMaduraSeca = [
//     {id: "1", producto:"Protector solar con vitamina E", precio: "589" },
//     {id: "2", producto:"Crema hidratante para día y noche", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel seca ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel seca", precio: "2870" },
//     {id: "5", producto:"Desmaquillante para piel seca", precio: "490" }
// ]

// const pielMaduraGrasa = [
//     {id: "1", producto:"Protector solar con vitamina E para piel grasa", precio: "589" },
//     {id: "2", producto:"Crema para día y noche", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel grasa ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel grasa", precio: "2870" },
//     {id: "5", producto:"Gel limpiador para piel grasa", precio: "490" }
// ]

// const pielMaduraMixta = [
//     {id: "1", producto:"Protector solar con vitamina E para piel mixta", precio: "589" },
//     {id: "2", producto:"Crema para día y noche piel mixta", precio: "756" },
//     {id: "3", producto:"Mascarilla para piel mixta ", precio: "1350" },
//     {id: "4", producto:"Kit completo para cuidado piel mixta", precio: "2870" },
//     {id: "5", producto:"Gel limpiador para piel mixta", precio: "490" }
// ]

// const mostrarListaProductos = (arr) => {
//     const lista = arr.map((elem)=>{
//         return `${elem.id}) ${elem.producto} $${elem.precio}`
//     })
//     return lista.join('\n')
// }



// function graciasCompra(){
//     alert( "🌷  " + nombre.toUpperCase() + " GRACIAS POR TU COMPRA!!   😉 ")
// }


// const carritoCompra = []


// const ordenarProductos = (numProducto, arr) => {
//     agregarProductosAlCarrito(numProducto, arr)

//     let comprarOtroProducto = prompt("Escogiste el siguiente Producto\n" + mostrarListaProductos(carritoCompra) + "\nDeseas ordenar otro Pruducto?" + "\nSI " + "o" + " NO")
//     while(comprarOtroProducto.toUpperCase() === 'SI'){
//         let otroProducto = prompt("🌷  " + "\nPor favor escoge otro producto de la lista\n" + mostrarListaProductos(arr) + "\nPara salir presiona (x)\n" + "Que Producto deseas?")
//         agregarProductosAlCarrito(otroProducto, arr)
//         const nuevoProductoCarrito = arr.find((elem) => elem.id === otroProducto)
//         comprarOtroProducto = prompt("Escogiste el siguiente Producto\n" + nuevoProductoCarrito.producto + ' ' + nuevoProductoCarrito.precio + "\nDeseas ordenar otro Pruducto?" + "\nSI " + "o" + " NO")
//     }

//     let totalCompraProductos = carritoCompra.reduce((acum, current) => acum + Number(current.precio), 0)
//     console.log('Total de Compra', carritoCompra, totalCompraProductos)

//     alert("Escogiste los siguientes Productos\n" + mostrarListaProductos(carritoCompra) + "\nPor ser nuevo cliente te regalamos  🎁 un BONO de 15% de Descuento\n" + "El total de tu compra es de " + totalCompraProductos * .85)

// }

// const agregarProductosAlCarrito = (numProducto, arr)  => {
//     const producto = arr.find((elem) => elem.id === numProducto)
//     carritoCompra.push(producto)
// }



// let nombre = prompt("Queremos que tu experiencia sea personalizada\n " + "Escribe tu nombre  🌷  ");
// let edad = prompt("Que edad tienes\n " +  "🌷  " + nombre);
// let piel = prompt("Que tipo de piel tienes " + "🌷  " +nombre + "\n1) Seca" + "\n2) Grasa" + "\n3) Mixta");

// const cliente1 = new DatosCliente(nombre, edad, piel);
// console.log(cliente1);
// const TIPO_PIEL = {
//     JOVENSECA: "Piel Jóven Seca",
//     JOVENMIXTA: "Piel Jóven Mixta",
//     JOVENGRASA: "Piel Jóven Grasa",
//     MADURASECA: "Piel Madura Seca",
//     MADURAMIXTA: "Piel Madura Mixta",
//     MADURAGRASA: "Piel Madura Grasa"
// }




// const productos = [
//     {
//         id:"producto p_j_s 01",
//         titulo: "Agua Micelar en Aceite",
//         imagen: "assets/piel-joven-seca/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 02",
//         titulo: "Agua Micelar Agua de Rosas",
//         imagen: "assets/piel-joven-seca/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 03",
//         titulo: "Crema Hidratante Anti-brillo",
//         imagen: "assets/piel-joven-seca/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-joven-seca/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 05",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-joven-seca/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 06",
//         titulo: "Toleraine Cream",
//         imagen: "assets/piel-joven-seca/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 07",
//         titulo: "Toleraine Sensitive",
//         imagen: "assets/piel-joven-seca/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 08",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-joven-seca/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 09",
//         titulo: "Acido Hialuronico Anti-brillo",
//         imagen: "assets/piel-joven-seca/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_s 10",
//         titulo: "Agua Micelar con Acido Hialuronico",
//         imagen: "assets/piel-joven-seca/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENSECA,
//             id:"joven-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 01",
//         titulo: "Crema Hidratante piel Mixta",
//         imagen: "assets/piel-joven-mixta/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 02",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-joven-mixta/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 03",
//         titulo: "Agua Micelar con activos de Carbon",
//         imagen: "assets/piel-joven-mixta/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-joven-mixta/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 05",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-joven-mixta/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 06",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-joven-mixta/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 07",
//         titulo: "Acido hialuronico",
//         imagen: "assets/piel-joven-mixta/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 08",
//         titulo: "Tolerine",
//         imagen: "assets/piel-joven-mixta/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 09",
//         titulo: "Tolerine",
//         imagen: "assets/piel-joven-mixta/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_m 10",
//         titulo: "Tolerine Hidratante Mixta",
//         imagen: "assets/piel-joven-mixta/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENMIXTA,
//             id:"joven-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 01",
//         titulo: "Crema Hidratante piel Grasa",
//         imagen: "assets/piel-joven-grasa/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 02",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-joven-grasa/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 03",
//         titulo: "Agua Micelar con activos de Carbon",
//         imagen: "assets/piel-joven-grasa/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-joven-grasa/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 05",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-joven-grasa/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 06",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-joven-grasa/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 07",
//         titulo: "Acido hialuronico",
//         imagen: "assets/piel-joven-grasa/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 08",
//         titulo: "Tolerine",
//         imagen: "assets/piel-joven-grasa/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 09",
//         titulo: "Tolerine",
//         imagen: "assets/piel-joven-grasa/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_j_g 10",
//         titulo: "Tolerine Hidratante",
//         imagen: "assets/piel-joven-grasa/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.JOVENGRASA,
//             id:"joven-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 01",
//         titulo: "Agua Micelar en Aceite",
//         imagen: "assets/piel-madura-seca/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 02",
//         titulo: "Agua Micelar Agua de Rosas",
//         imagen: "assets/piel-madura-seca/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 03",
//         titulo: "Crema Hidratante Anti-brillo",
//         imagen: "assets/piel-madura-seca/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-madura-seca/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 05",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-madura-seca/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 06",
//         titulo: "Toleraine Cream",
//         imagen: "assets/piel-madura-seca/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 07",
//         titulo: "Toleraine Sensitive",
//         imagen: "assets/piel-madura-seca/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 08",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-madura-seca/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 09",
//         titulo: "Acido Hialuronico Anti-brillo",
//         imagen: "assets/piel-madura-seca/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_s 10",
//         titulo: "Agua Micelar con Acido Hialuronico",
//         imagen: "assets/piel-madura-seca/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURASECA,
//             id:"madura-seca"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 01",
//         titulo: "Crema Hidratante piel Mixta",
//         imagen: "assets/piel-madura-mixta/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 02",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-madura-mixta/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 03",
//         titulo: "Agua Micelar con activos de Carbon",
//         imagen: "assets/piel-madura-mixta/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-madura-mixta/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 05",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-madura-mixta/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 06",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-madura-mixta/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 07",
//         titulo: "Acido hialuronico",
//         imagen: "assets/piel-madura-mixta/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 08",
//         titulo: "Tolerine",
//         imagen: "assets/piel-madura-mixta/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 09",
//         titulo: "Tolerine",
//         imagen: "assets/piel-madura-mixta/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_m 10",
//         titulo: "Tolerine Hidratante Mixta",
//         imagen: "assets/piel-madura-mixta/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAMIXTA,
//             id:"madura-mixta"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 01",
//         titulo: "Crema Hidratante piel Grasa",
//         imagen: "assets/piel-madura-grasa/01.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 02",
//         titulo: "Agua Micelar",
//         imagen: "assets/piel-madura-grasa/02.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 03",
//         titulo: "Agua Micelar con activos de Carbon",
//         imagen: "assets/piel-madura-grasa/03.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 04",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-madura-grasa/04.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 05",
//         titulo: "Dermo-Cleanser",
//         imagen: "assets/piel-madura-grasa/05.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 06",
//         titulo: "Acido Hialuronico",
//         imagen: "assets/piel-madura-grasa/06.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 07",
//         titulo: "Acido hialuronico",
//         imagen: "assets/piel-madura-grasa/07.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 08",
//         titulo: "Tolerine",
//         imagen: "assets/piel-madura-grasa/08.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 09",
//         titulo: "Tolerine",
//         imagen: "assets/piel-madura-grasa/09.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     },
//     {
//         id:"producto p_m_g 10",
//         titulo: "Tolerine Hidratante",
//         imagen: "assets/piel-madura-grasa/10.jpg",
//         categoria:{
//             tipo:TIPO_PIEL.MADURAGRASA,
//             id:"madura-grasa"
//         },
//         precio: 750
//     }
// ]

const nombreUsuario = document.querySelector("#nombre-usuario");
const claveUsuario = document.querySelector("#clave-usuario");
const botonConfirmar = document.querySelector("#boton-confirmar");
const botonRegistrar = document.querySelector("#boton-registrar");
// const contenedorProductos = document.querySelector("#contenedor-productos");
// const botonesCategorias = document.querySelectorAll(".boton-categoria");
// const tituloPrincipal = document.querySelector("#titulo-principal");
// let botonesAgregar = document.querySelectorAll(".producto-agregar");

botonConfirmar.addEventListener("click", login)
function login() {
   console.log(nombreUsuario.value)
   console.log(claveUsuario.value)

   const clientes = JSON.parse(localStorage.getItem("clientes"))
const usuario = clientes.find(elem => elem.nombre === nombreUsuario.value && elem.clave === claveUsuario.value)

console.log(usuario)

if (usuario) {
    console.log("si existe")
    localStorage.setItem("cliente", JSON.stringify(usuario))
    location.href = "recomendaciones.html"
} else {
   alert("Lo sentimos, el usuario no existe" + "\nFavor de Registrarse" )
    nombreUsuario.value = ""
    claveUsuario.value = ""
}

}
login()

// const clientes = [
//     {
//         nombre: "Lu",
//         clave: "1234"
//     }
// ]

// localStorage.setItem("clientes", JSON.stringify(clientes))
// botonRegistrar.addEventListener("click" , )


// function cargarProductos(productosElegidos) {

//     contenedorProductos.innerHTML = ""

//     productosElegidos.forEach(producto => {

//         const div = document.createElement("div")
//         div.classList.add("producto")
//         div.innerHTML = `
//             <div class="contenedor-imagen">
//                 <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//             </div>
//             <div class="producto-detalles">
//                 <h3 class="producto-titulo">${producto.titulo}</h3>
//                 <p class="producto-precio">$${producto.precio}</p>
//                 <button class="producto-agregar" id="${producto.id}">Agregar</button>
//             </div>
//         `
//         contenedorProductos.append(div)
//     })
//     actualizarBotonesAgregar()
//     // console.log(botonesAgregar)
// }

// cargarProductos(productos)

// botonesCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         botonesCategorias.forEach(boton => boton.classList.remove("active"))
//         e.currentTarget.classList.add("active")

//         if (e.currentTarget.id != "todos") {
//             const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
//             tituloPrincipal.innerText = productoCategoria.categoria.tipo

//             const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
//             cargarProductos(productosBoton)
//         } else {
//             tituloPrincipal.innerText = "Todos los productos"
//             cargarProductos(productos)
//         }
//     })
// })

// function actualizarBotonesAgregar() {
//     botonesAgregar = document.querySelectorAll(".producto-agregar")

//     botonesAgregar.forEach(boton => {
//         boton.addEventListener("click", agregarAlCarrito)
//     })
// }

// const productosEnCarrito = []

// function agregarAlCarrito(e) {

//     const idBoton = e.currentTarget.id
//     // console.log(id)
//     const productoAgregado = productos.find(producto => producto.id === idBoton)
//     console.log(productoAgregado)
//     productosEnCarrito.push(productoAgregado)
//     console.log(productosEnCarrito)
// }