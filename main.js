/* MENU HAMBURGUESA */

const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbarDesktop = document.getElementById("navbar_desktop");

//Mostrar menu

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  navbarDesktop.classList.add("hidden");
});

//Ocultar menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "auto";
  navbarDesktop.classList.remove("hidden");
});

/* TABS */

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

// Función para cambiar de tab
function switchTab(tabNumber) {
  // Remover clase 'active' de todos los tabs
  tabButtons.forEach((btn) => {
    btn.classList.remove("active", "border-secondary");
    btn.classList.add("border-transparent");
  });

  // Ocultar todos los panels
  tabPanels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Activar el tab clickeado
  const activeTab = document.querySelector(`[data-tab="${tabNumber}"]`);
  activeTab.classList.add("active", "border-secondary");
  activeTab.classList.remove("border-transparent");

  // Mostrar el panel correspondiente
  const activePanel = document.querySelector(`[data-panel="${tabNumber}"]`);
  activePanel.classList.remove("hidden");
}

// Agregar event listeners a cada tab
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabNumber = button.getAttribute("data-tab");
    switchTab(tabNumber);
  });
});

/* VERIFICAR EMAIL */

const form = document.getElementById("contactForm");
const emailInput = document.getElementById("emailInput");
const errorIcon = document.getElementById("errorIcon");
const errorText = document.getElementById("error-text");
const buttonContact = document.getElementById("button-contact");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    // Email inválido
    emailInput.classList.remove("rounded");
    emailInput.classList.add("border-4", "border-secondary", "rounded-t-md");
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
    buttonContact.classList.add("mt-6");
  } else {
    // Email válido
    emailInput.classList.remove("border-4", "border-secondary", "rounded-t-md");
    emailInput.classList.add("rounded");
    errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
    buttonContact.classList.remove("mt-6");
  }
});
