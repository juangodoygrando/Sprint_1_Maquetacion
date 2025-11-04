

/* Validacion del email, para que aparezca el mensaje e icono de error
 */
const form_email = document.querySelector(".form_email");
const inputEmail = document.getElementById("input_email");
const iconoError = document.querySelector(".error_icon");
const mensajeError = document.querySelector(".error_message");
const contactButton = document.querySelector(".button_contact");
form_email.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = inputEmail.value;
  let esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (esValido) {
    inputEmail.classList.remove("error");
    iconoError.classList.remove("show");
    mensajeError.classList.remove("show");
    contactButton.classList.remove("has_error");
  } else {
    inputEmail.classList.add("error");
    iconoError.classList.add("show");
    mensajeError.classList.add("show");
    contactButton.classList.add("has_error");
  }
});
