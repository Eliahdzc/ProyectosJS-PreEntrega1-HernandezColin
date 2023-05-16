
const registro = document.querySelector("#registro")
const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const tipoPiel = document.querySelector("#tipo-piel")
const claveInicio = document.querySelector("#clave-usuario")
const botonGuardar = document.querySelector("#boton-guardar")
const checkboxPiSeca = document.querySelector("#piel-seca")
const checkboxPiMixta = document.querySelector("#piel-mixta")
const checkboxPiGrasa = document.querySelector("#piel-grasa")


botonGuardar.addEventListener("click", agregarNuevoCliente)


function agregarNuevoCliente () {
    const cliente = {
        nombre: nombre.value,
        edad: edad.value,
        tipoPiel: {
            pielSeca:checkboxPiSeca.checked,
            pielMixta: checkboxPiMixta.checked,
            pielGrasa: checkboxPiGrasa.checked,
        },
        clave: claveInicio.value
    }
    let clientes
    if(!localStorage.getItem("clientes")){
        clientes = []
    } else {

        clientes = JSON.parse(localStorage.getItem("clientes"))
    }
    clientes.push(cliente)
    localStorage.setItem("clientes", JSON.stringify(clientes))
    localStorage.setItem("cliente", JSON.stringify(cliente))
    console.log(cliente.nombre)
    location.href = "recomendaciones.html"
}

let objetoCliente = JSON.parse(localStorage.getItem("cliente"))
console.log(objetoCliente.nombre)
