// Seleccion de elementos
const nombreUsuario = document.querySelector("#nombre-usuario");
const claveUsuario = document.querySelector("#clave-usuario");
const botonConfirmar = document.querySelector("#boton-confirmar");
const botonRegistrar = document.querySelector("#boton-registrar");
const botonSweetAlert = document.querySelector('swal2-confirm');

// Verificacion para iniciar login

botonConfirmar.addEventListener("click", login);

function login() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) ?? []
  usuario = clientes.find(elem => elem.nombre === nombreUsuario.value && elem.clave === claveUsuario.value)

  if (usuario) {
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

    //Verifica que se ejecute sweetAlert para asignarle el eventlistener 
    botonSweetAlert && botonSweetAlert.addEventListener("click", registro)
  }

}

function registro() {
  location.href = "registro.html"
}
