// Menu burger responsive
$(".fa-bars").on("click", function () {
  $(".home_nav002").fadeToggle(600);
  $(".aboutSectionOne").slideToggle(1400);
  $("#newsMain").toggleClass("displayNone");
});

// Esta función se encarga de cambiar el ícono del menu hamburguesa por una cruz.
$("#iconBars").on("click", function () {
  $("#iconBars").toggleClass("fa-bars");
  $("#iconBars").toggleClass("fa-times");
});

// Dark Mode

let isDarkMode = false;

// Se comprueba si el darkMode está activo.
$(document).ready(function () {
  if (localStorage.getItem("darkMode")) {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
      darkModeFunction();
    }
  }

  $(".darkModeBtn").on("click", darkModeFunction);
});

// Realiza los cambios de clase del darkMode.
function darkModeFunction() {
  $("#body").toggleClass("darkMode");
  $("#darkMode").toggleClass("fa-moon");
  $("#darkMode").toggleClass("fa-sun");
  $(".btn10").toggleClass("fa-moon");
  $(".btn10").toggleClass("fa-sun");

  isDarkMode = !isDarkMode;
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
}

// LOGOUT
let logout = document.querySelectorAll(".logout");

logout.forEach(function (logoutItem) {
  logoutItem.addEventListener("click", cerrarSesion);
});

// Función que se encarga de eliminar los datos del local storage y redirecciona al usuario hacia la página principal.
function cerrarSesion() {
  modalCierreDeSesion();
  window.localStorage.clear();
}

// Crear una función que abra un modal, y que hasta que no cierre el modal, no se ejecute la limpieza del Local Storage y el redireccionamiento.

function modalCierreDeSesion() {
  let modalContainer = document.querySelector(".modalContainer");
  modalContainer.classList.add("modalContainerON");
}

// API => DOLARSI

let urlNYT = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$("#botonNYT").click(function () {
  $.get(urlNYT, function (datos) {
    $(
      ".articleOne"
    ).prepend(`<div class='dolar'>Compra: ${datos[0].casa.compra}</div>
                              <div class='dolar'>Venta: ${datos[0].casa.venta}</div>`);
  });
});
