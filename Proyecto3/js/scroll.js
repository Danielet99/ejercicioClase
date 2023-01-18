let posAnt = 0;
let img = document.getElementById("imagen");
let ficha = document.getElementById("ficha");

window.addEventListener("scroll", () => {
  img = document.getElementById("imagen");
  let currentScrollPos = window.pageYOffset;

  //Si el scroll es hacia abajo
  if (posAnt <= currentScrollPos) {
    img.style.opacity = "0.6";
  }
  //Si el scroll es hacia arriba
  else {
    img.style.opacity = "1";
  }

  posAnt = currentScrollPos;
});

ficha.addEventListener("click", () => {
  window.location.replace("load.html");
});
