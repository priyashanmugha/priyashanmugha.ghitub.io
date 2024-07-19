var compteur = document.getElementById("compteur");
var bouton = document.getElementById("btn");
var boutonvert = document.getElementById("btnvert");
var nombre = 0;
var color = document.getElementById("toggleblack");

bouton.addEventListener("click", ajouter);

function ajouter() {
  nombre = nombre + 1;
  compteur.innerText = nombre;
  console.log(nombre);
  if (nombre == 10) {
    compteur.style.color = "red";
    compteur.style.fontSize = "50px";
  }
}

boutonvert.addEventListener("click", soustraire);
function soustraire() {
  nombre = nombre - 1;
  compteur.innerText = nombre;
  console.log(nombre);
  if (nombre == -10) {
    compteur.style.color = "green";
    compteur.style.fontSize = "50px";
  }
}

function darkmode() {
  compteur.classList.toggle("toggleblack");
}
