// Variables

let nombre = document.querySelector("#nombre");
let usuario = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");
let singup = document.querySelector(".singup__button");
let input = document.querySelectorAll("input");
let errorDiv = document.querySelector(".errorDiv");

// MODAL => SINGUP => ON

let modalBg = document.querySelector(".modal-bg");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal-close");
let singup_link = document.querySelector(".singup_link");

// LISTENERS

singup.addEventListener("click", validacion);
modalClose.addEventListener("click", modalOff);

// FUNCIONES

function validacion() {
  errorDiv.classList.add("error");
  if (
    nombre.value === "" ||
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirm_password.value === ""
  ) {
    errorDiv.innerHTML = `No se permiten campos vacíos.`;
  } else if (nombre.value.length >= 14 || username.value.length >= 14) {
    errorDiv.innerHTML = `El máximo es de 14 caracteres.`;
  } else if (password.value != confirm_password.value) {
    errorDiv.innerHTML = `La contraseña no es la misma.`;
  } else {
    errorDiv.innerHTML = "";
    errorDiv.remove("error");
    modalOn();
  }
}

// MODAL

function modalOn() {
  localStorage.setItem("userUser", usuario.value);

  modalBg.classList.add("bg-active");
  let datos = document.createElement("p");

  modal.appendChild(singup_link);
  modal.appendChild(datos);
  modal.innerHTML = `<p>Welcome <b>${nombre.value}</b>!</p>
                      <a href="${singup_link}">Ir al inicio</a>`;
  modal.appendChild(modalClose);
  modalClose.style.color = "black";
}

function modalOff() {
  modalBg.classList.remove("bg-active");
}
