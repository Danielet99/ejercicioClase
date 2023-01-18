let selector = document.getElementById("selector");
let clases = document.getElementsByTagName("li");

let numGuerrero;
let numMago;
let numExplorador;

//Evento que sirve para mostrar y ocultar la lisa desplegable de clases
selector.addEventListener("click", () => {
  let lista = document.getElementById("lista");
  let imagen = document.getElementById("img");
  imagen.classList.toggle("rotar");
  imagen.classList.toggle("rotar2");
  lista.classList.toggle("oculto");
});

clases[0].addEventListener("click", redirect);
clases[1].addEventListener("click", redirect);
clases[2].addEventListener("click", redirect);

function redirect(e) {
  if (!e) e = window.event;

  if (e.target.id == "li1") {
    window.location.replace("guerrero.html");
  } else if (e.target.id == "li2") {
    window.location.replace("mago.html");
  } else if (e.target.id == "li3") {
    window.location.replace("explorador.html");
  }
}

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  console.log(currentScroll);
});


  window.addEventListener("load", () => {
    let cookies = document.cookie.split(";");
    if (!document.cookie.includes("Aceptar=true")) {
      if (confirm("Aceptar cookies")) {
        document.cookie = `Aceptar=true;`;
        
        if (cookies.length > 1) {
          
        }
      } else {
        alert("No dispondra de todas la funcionalidades de la pagina");
      }
      
    }
    mostrar(cookies);
  });



function mostrar(cookies) {
  
  let label = document.getElementById("cooky");
  let arraynum = new Array();
  for (let i = 0; i < cookies.length; i++) {
    arraynum.push(cookies[i].split("="));
  }
  
 
  

  switch (cookies.length) {
    case 2:
      console.log("chuflo?2")
      label.innerHTML = `<ul><li>${arraynum[1][0]} --> ${arraynum[1][1]}</li></ul>`;
      
      break;
    case 3:
      console.log("chuflo?3")
      if (parseInt(arraynum[1][1])>parseInt(arraynum[2][1])) {

        label.innerHTML = 
        `<ul>
          <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
          <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
        </ul>`;



      } else {

        label.innerHTML = 
        `<ul>
          <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
          <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
        </ul>`;
      }
      break;
    case 4:
      console.log("chuflo?4")
      if (
          arraynum[1][1] > arraynum[2][1] &&
          arraynum[1][1] > arraynum[3][1] &&
          arraynum[2][1] > arraynum[3][1]
        ) {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
          </ul>`;
         
        } else if (
          arraynum[2][1] > arraynum[1][1] &&
          arraynum[2][1] > arraynum[3][1] &&
          arraynum[1][1] > arraynum[3][1]
        ) {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
          </ul>`;
        } else if (
          arraynum[3][1] > arraynum[1][1] &&
          arraynum[3][1] > arraynum[2][1] &&
          arraynum[2][1] > arraynum[1][1]
        ) {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
          </ul>`;

        } else if (
          arraynum[2][1] > arraynum[1][1] &&
          arraynum[2][1] > arraynum[3][1] &&
          arraynum[3][1] > arraynum[1][1]
        ) {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
          </ul>`;
          
        } else if (
          arraynum[1][1] > arraynum[2][1] &&
          arraynum[1][1] > arraynum[3][1] &&
          arraynum[3][1] > arraynum[2][1]
        ) {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
          </ul>`;
        } else {
          label.innerHTML = 
          `<ul>
            <li>${arraynum[3][0]} --> ${arraynum[3][1]}</li>
            <li>${arraynum[1][0]} --> ${arraynum[1][1]}</li>
            <li>${arraynum[2][0]} --> ${arraynum[2][1]}</li>
          </ul>`;
        }
      break;
    default:
      console.log("chuflo?basico");
      console.log(cookies.length);
      console.log(cookies);
      break;
  }
  // arraynum[1][1] = parseInt(arraynum[1][1]);
  // arraynum[2][1] = parseInt(arraynum[2][1]);
  // arraynum[3][1] = parseInt(arraynum[3][1]);

  // if (
  //   arraynum[1][1] > arraynum[2][1] &&
  //   arraynum[1][1] > arraynum[3][1] &&
  //   arraynum[2][1] > arraynum[3][1]
  // ) {
  //   document.write(cookies[1] + "<br>" + cookies[2] + "<br>" + cookies[3]);
  // } else if (
  //   arraynum[2][1] > arraynum[1][1] &&
  //   arraynum[2][1] > arraynum[3][1] &&
  //   arraynum[1][1] > arraynum[3][1]
  // ) {
  //   document.write(cookies[2] + "<br>" + cookies[1] + "<br>" + cookies[3]);
  // } else if (
  //   arraynum[3][1] > arraynum[1][1] &&
  //   arraynum[3][1] > arraynum[2][1] &&
  //   arraynum[2][1] > arraynum[1][1]
  // ) {
  //   document.write(cookies[3] + "<br>" + cookies[2] + "<br>" + cookies[1]);
  // } else if (
  //   arraynum[2][1] > arraynum[1][1] &&
  //   arraynum[2][1] > arraynum[3][1] &&
  //   arraynum[3][1] > arraynum[1][1]
  // ) {
  //   document.write(cookies[2] + "<br>" + cookies[3] + "<br>" + cookies[1]);
  // } else if (
  //   arraynum[1][1] > arraynum[2][1] &&
  //   arraynum[1][1] > arraynum[3][1] &&
  //   arraynum[3][1] > arraynum[2][1]
  // ) {
  //   document.write(cookies[1] + "<br>" + cookies[3] + "<br>" + cookies[2]);
  // } else {
  //   document.write(cookies[3] + "<br>" + cookies[1] + "<br>" + cookies[2]);
  // }
   // if (arraynum[1][0] == "guerrero") {
  //   numGuerrero = parseInt(arraynum[1][1]);
  // } else if (arraynum[2][0]== "guerrero") {
  //   numGuerrero = parseInt(arraynum[2][1]);
  // } else if(arraynum[3][0]== "guerrero"){
  //   numGuerrero = parseInt(arraynum[3][1]);
  // }
  // if (arraynum[1][0] == "mago") {
  //   numMago = parseInt(arraynum[1][1]);
  // } else if (arraynum[2][0]== "mago") {
  //   numMago = parseInt(arraynum[2][1]);
  // } else if(arraynum[3][0]== "mago"){
  //   numMago = parseInt(arraynum[3][1]);
  // }
  // if (arraynum[1][0] == "explorador") {
  //   numExplorador = parseInt(arraynum[1][1]);
  // } else if (arraynum[2][0]== "explorador") {
  //   numExplorador = parseInt(arraynum[2][1]);
  // } else if(arraynum[3][0]== "explorador"){
  //   numExplorador = parseInt(arraynum[3][1]);
  // }
}
