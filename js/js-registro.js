// Se asignan elementos
const registro = document.querySelector("#registro")
const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const tipoPiel = document.querySelector("#tipo-piel")
const claveInicio = document.querySelector("#clave-usuario")
const botonGuardar = document.querySelector("#boton-guardar")
const checkboxPiSeca = document.querySelector("#piel-seca")
const checkboxPiMixta = document.querySelector("#piel-mixta")
const checkboxPiGrasa = document.querySelector("#piel-grasa")

// Se activa boton para agregar clientes
botonGuardar.addEventListener("click", agregarNuevoCliente)

function agregarNuevoCliente () {
    // Se verifica que los inputs no esten vacios
    if(nombre.value === "" || edad.value === "" || claveInicio.value === "") {
        Swal.fire({
            title: 'Lo sentimos',
            text: 'Debes ingresar los datos para completar el Registro',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
        }).then((result) => {
            location.href = "registro.html"
        })
        return
    }
    // Si los valores no estan vacios se continua con el registro
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
    location.href = "recomendaciones.html"

}
