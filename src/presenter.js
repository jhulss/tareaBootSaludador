import bootsaludador from "./sumador";



const first = document.querySelector("#nombre");
const second = document.querySelector("#genero");
const tird = document.querySelector("#edad");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const saludo = new bootsaludador();

  div.innerHTML = "<b>"  + "<p>" + saludo.saludar(first.value, second.value, tird.value) + "</p>"  + "</>";
});
