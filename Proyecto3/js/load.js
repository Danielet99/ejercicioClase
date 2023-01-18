window.addEventListener("load", pantallaCarga());

function pantallaCarga() {
  let barra = document.getElementById("barraFront");
  let txtbarra = document.getElementById("contador");
  let carga = document.getElementById("loading");
  let porcent = 0;

  let loading = setInterval(function () {
    if (porcent >= 100) {
      clearInterval(loading);
    } else {
      porcent++;
      switch (porcent) {
        case 15:
          carga.innerHTML = "Loading.";
          break;

        case 45:
          carga.innerHTML = "Loading..";
          break;
        case 70:
          carga.innerHTML = "Loading...";
          break;
        case 99:
          window.location.replace("ficha.pdf");
          break;
        default:
          break;
      }
      barra.style.width = porcent + "%";
      txtbarra.style.transform = "rotate(" + porcent * 5 + "deg)";
    }
  }, 20);
}
