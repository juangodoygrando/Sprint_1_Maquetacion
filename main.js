

/* Validacion del email, para que aparezca el mensaje e icono de error
 */
/* const form_email = document.querySelector(".form_email");
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
 */

/* MENU HAMBURGUESA */

const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbarDesktop = document.getElementById('navbar_desktop')


hamburgerBtn.addEventListener('click' ,()=>{
  mobileMenu.classList.remove('hidden')
  document.body.style.overflow='hidden'
  navbarDesktop.classList.add('hidden')
})

closeBtn.addEventListener('click',()=>{
  mobileMenu.classList.add('hidden')
  document.body.style.overflow='auto'
  navbarDesktop.classList.remove('hidden')
})


/* TABS */

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

// Función para cambiar de tab
function switchTab(tabNumber) {
  // Remover clase 'active' de todos los tabs
  tabButtons.forEach(btn => {
    btn.classList.remove('active', 'border-secondary');
    btn.classList.add('border-transparent');
  });
  
  // Ocultar todos los panels
  tabPanels.forEach(panel => {
    panel.classList.add('hidden');
  });
  
  // Activar el tab clickeado
  const activeTab = document.querySelector(`[data-tab="${tabNumber}"]`);
  activeTab.classList.add('active', 'border-secondary');
  activeTab.classList.remove('border-transparent');
  
  // Mostrar el panel correspondiente
  const activePanel = document.querySelector(`[data-panel="${tabNumber}"]`);
  activePanel.classList.remove('hidden');
}

// Agregar event listeners a cada tab
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabNumber = button.getAttribute('data-tab');
    switchTab(tabNumber);
  });
});