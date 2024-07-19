var container = document.getElementById("container");
var buttonFonce = document.getElementById("dark");
var buttonMenu = document.getElementById("menu");
var navlink = document.getElementById("navlink");
var main = document.getElementById("main");
var image = document.getElementById("image");

function changer() {
  container.classList.toggle("fonce");
}

function open() {
  navlink.classList.toggle("menu");
}
