// El Sitio a construir para el Proyecto será una marca personal en donde se darán tips de belleza, cuidado personal y se recomendarán y comercializarán diversos productos.
// Primero se solicita algunos datos al cliente
// En relación a los datos ingresados se realizarán algunas sugerencias de productos
// Se le otorgara cupon de descuento
// Si compra productos se le efectuará el descuento
// IMPORTANTE los datos aun son ficticios es por eso que se repiten en cada caso

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
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y seca te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n"  + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "2":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y grasa te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n" + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "3":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + " Para una piel joven y mixta te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n" + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
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
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y seca te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n"  + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "2":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y grasa te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n" + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
                        graciasCompra()
                        opcion = "x"
                        break;
                    case "3":
                        producto = prompt("🌷  " + this.nombre.toUpperCase() + "\nPara una piel madura y mixta te recomendamos los siguientes productos\n" + "1) Crema Hidratante $ 520.00\n" + "2) Protector Solar Hidratante $ 740.00\n" + "3) Suero de Vitmina E $ 825.00\n" + "Para salir preciona (x)\n" + "Que Producto deseas?")
                        compra(producto)
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


    function graciasCompra(){
        alert( "🌷  " + nombre.toUpperCase() + " GRACIAS POR TU COMPRA!!   😉 ")
    }
function compra(producto) {
    this.compra = producto

        let opProducto = ""
        let producto1 = 520;
        let costo = producto1 * 85 / 100 ;
        let producto2 = 740;
        let costo2 = producto2 * 85 / 100 ;
        let producto3 = 825;
        let costo3 = producto3 * 85 / 100 ;
        while(opProducto !== "x") {
            switch(this.compra) {
                case "1":
                    alert("Por ser nuevo cliente te regalamos 🎁  un bono de 15% de descuento\n " +  "Tu pago sera de $ " + costo)
                    opProducto = "x"
                    break;
                case "2":
                    alert("Por ser nuevo cliente te regalamos 🎁  un bono de 15% de descuento\n " +  "Tu pago sera de $ " + costo2)
                    opProducto = "x"
                    break;
                case "3":
                    alert("Por ser nuevo cliente te regalamos 🎁  un bono de 15% de descuento\n " +  "Tu pago sera de $ " + costo3)
                    opProducto = "x"
                    break;
                default:
                    alert("opcion no valida")
                    opProducto = "x"
                    break;
            }
    }
}


let nombre = prompt("Queremos que tu experiencia sea personalizada\n " + "Escribe tu nombre  🌷  ");
let edad = prompt("Que edad tienes\n " +  "🌷  " + nombre);
let piel = prompt("Que tipo de piel tienes " + "🌷  " +nombre + "\n1) Seca" + "\n2) Grasa" + "\n3) Mixta");

const cliente1 = new DatosCliente(nombre, edad, piel);
console.log(cliente1);