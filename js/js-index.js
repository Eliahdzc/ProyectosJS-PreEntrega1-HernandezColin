
const nombreUsuario = document.querySelector("#nombre-usuario");
const claveUsuario = document.querySelector("#clave-usuario");
const botonConfirmar = document.querySelector("#boton-confirmar");
const botonRegistrar = document.querySelector("#boton-registrar");
const botonSweetAlert = document.querySelector('swal2-confirm');

botonConfirmar.addEventListener("click", login)
function login() {
  console.log(nombreUsuario.value)
  console.log(claveUsuario.value)

  const clientes = JSON.parse(localStorage.getItem("clientes"))
  usuario = clientes.find(elem => elem.nombre === nombreUsuario.value && elem.clave === claveUsuario.value)

  if (usuario) {
    console.log("si existe")
    localStorage.setItem("cliente", JSON.stringify(usuario))
    location.href = "recomendaciones.html"
  } else {
    Swal.fire({
      title: 'Lo sentimos',
      text: 'El usuario no existe, favor de registrarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Regístrate',
    }).then((result) => {
      if (result.isConfirmed) {
        location.href = "registro.html"
      } else {
        location.href = "index.html"
      }
    })

    botonSweetAlert && botonSweetAlert.addEventListener("click", registro)

    nombreUsuario.value = ""
    claveUsuario.value = ""
  }

}

function registro() {
  location.href = "registro.html"
}
