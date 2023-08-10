import saludar from "./sumador";


const first = document.querySelector("#saludo");
const form = document.querySelector("#saludo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(first.value) + "</p>";
});
