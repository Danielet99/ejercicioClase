

window.addEventListener("load", () => {
  m = 1;
  w = 1;
  e = 1;

  let ruta = window.location.pathname;
  ruta = ruta.split("/");
  let nombre = ruta[ruta.length - 1];
  let cookies = document.cookie.split(";");

  if (cookies.includes("Aceptar=true")) {
    if (nombre == "guerrero.html") {
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("Guerrero")) {
          let nG = cookies[i].split("=");
          let G = nG[1];
          G = parseInt(G);
          G++;
          document.cookie = `Guerrero = ${G}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        } else {
          document.cookie = `Guerrero = ${w}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        }
      }
    } else if (nombre == "mago.html") {
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("Mago")) {
          let nM = cookies[i].split("=");
          let M = nM[1];
          M = parseInt(M);
          M++;
          document.cookie = `Mago = ${M}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        } else {
          document.cookie = `Mago= ${m}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        }
      }
    } else if(nombre == "explorador.html"){
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("Explorador")) {
          let nE = cookies[i].split("=");
          let E = nE[1];
          E = parseInt(E);
          E++;
          document.cookie = `Explorador = ${E}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        } else {
          document.cookie = `Explorador = ${e}; expires=Mon, 01 Jan 2024 00:00:01 GMT;path:/;`;
        }
      }
    }
  }
  console.log(document.cookie);
  console.log(cookies)
});

