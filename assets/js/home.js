// Menu burger responsive
$(".fas").on("click", function () {
  $(".home_nav002").fadeToggle(600);
  $(".home_section_two").slideToggle(1200);
  $("#homeMain").toggleClass("displayNone");
});

// Bars change for cross
$("#iconBars").on("click", function () {
  $("#iconBars").toggleClass("fa-bars");
  $("#iconBars").toggleClass("fa-times");
});

// HOME => TUITAH => ON

let arrayDeTweets = [];

let btnSend = document.querySelector(".send");
btnSend.addEventListener("click", crearTweet);

function crearTweet() {
  let escribirTweet = document.querySelector(".home_escribir_tweet");
  if (escribirTweet.value == "") return;
  let usuario = localStorage.getItem("userUser");

  loadTweets();

  const objCrearTweet = {
    usuario: usuario,
    tweet: escribirTweet.value,
    id: Date.now(),
    // id: generarNumeroRandom(),
  };

  arrayDeTweets.push(objCrearTweet);

  localStorage.setItem("tweetsGuardados", JSON.stringify(arrayDeTweets));

  escribirTweet.value = "";
  mostrarTweet(objCrearTweet);
}

function mostrarTweet(objCrearTweet) {
  let sectionTwo = document.querySelector(".home_section_two");
  let fila = document.createElement("div");
  fila.id = objCrearTweet.id;
  let deletear = document.createElement("div");
  deletear.innerHTML = "Eliminar";
  deletear.style.cursor = "pointer";
  deletear.classList.add("eliminarEsteTweet");
  deletear.addEventListener("click", eliminarTweet);

  fila.classList.add("tweet");
  fila.innerHTML = `<p class="user">@${objCrearTweet.usuario}</p>
                    <p>${objCrearTweet.tweet}</p>`;

  sectionTwo.appendChild(fila);
  fila.appendChild(deletear);
}

function eliminarTweet(e) {
  let hijo = e.target;
  let padre = hijo.parentNode;
  eliminarTweetDelLocalStorage(padre.id);
  padre.remove();
}

function generarNumeroRandom() {
  return Math.floor(Math.random() * 10000);
}

function loadTweets() {
  let tweetsGuardados = localStorage.getItem("tweetsGuardados");

  if (tweetsGuardados) {
    tweetsGuardados = JSON.parse(tweetsGuardados);
    arrayDeTweets = tweetsGuardados;
  }
}

function iniciarPrograma() {
  loadTweets();
  imprimirArrayDeTweets(arrayDeTweets);
}

function imprimirArrayDeTweets(array) {
  for (let i = 0; i < array.length; i++) {
    mostrarTweet(array[i]);
  }
}

function eliminarTweetDelLocalStorage(tweetId) {
  let tweetsGuardados = JSON.parse(localStorage.getItem("tweetsGuardados"));

  const nuevoArray = tweetsGuardados.filter((tweet) => tweetId != tweet.id);
  localStorage.setItem("tweetsGuardados", JSON.stringify(nuevoArray));
}

iniciarPrograma();

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
  let modalWhite = document.querySelector(".modalWhite");
  modalContainer.classList.add("modalContainerON");
}