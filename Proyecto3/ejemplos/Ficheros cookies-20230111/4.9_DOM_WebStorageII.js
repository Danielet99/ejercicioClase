//Verificamos que el navegador soporta Web Storage
if (typeof(Storage) !== "undefined"){
    alert("El navegador soporta WebStorage");
    //vemos si el usuario se ha logueado o no en la página
    //comprobamos si existe en localStorage el usuario
    if(localStorage.getItem("usuario") != null){
        document.getElementById("saludo").innerHTML = `Bienvenida/o de nuevo, ${localStorage.getItem("usuario")}!!`;
    }else{
        localStorage.setItem("usuario", prompt("¿Cómo te llamas?"));
        document.getElementById("saludo").innerHTML = `Bienvenida/o, ${localStorage.getItem("usuario")}!!`;
    }
    //vemos si existe el contador de visitas o no
    if(!sessionStorage.getItem("contador")){
        sessionStorage.setItem("contador","0");
    }
    document.getElementById("contador").innerHTML = "Contador " + sessionStorage.getItem("contador");

    //Botones incrementar y decrementar
    document.getElementById("incrementar").addEventListener("click",incrementar);
    document.getElementById("decrementar").addEventListener("click",decrementar);
    document.getElementById("logout").addEventListener("click",logout);
}else{
    alert("El navegador NO soporta WebStorage");
}

function incrementar(){
    sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))+1);
    document.getElementById("contador").innerHTML = "Contador  " + sessionStorage.getItem("contador");
}

function decrementar(){
    sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))-1);
    document.getElementById("contador").innerHTML = "Contador  " + sessionStorage.getItem("contador");   
}

function logout(){
    alert("Se ha cerrado la sesión de " + localStorage.getItem("usuario"));
    localStorage.removeItem("usuario");
    localStorage.clear();
    document.getElementById("saludo").innerHTML = "Hasta la próxima!!"
}


