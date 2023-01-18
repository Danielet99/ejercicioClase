/****************************************************
****************COOKIES INICIO***********************
*****************************************************/
//CREACIÓN DE LAS COOKIES
//document.cookie = "usuario = Natalia Escrivá; expires = Sun, 01 Jan 2023 12:00:00 GMT; path =/;";
document.cookie = "usuario = Natalia Escrivá;";
document.cookie = "sexo = mujer;";

//LEER UNA COOKIE
let miCookie = document.cookie;
console.log(miCookie);

//MODIFICAR UNA COOKIE
document.cookie = "usuario = Natalia Escrivá Nunez;";
console.log(document.cookie);

//BORRAR COOKIE
document.cookie = "usuario = Natalia Escrivá Nunez; expires=Thu, 01 Jan 1970 00:00:01 GMT";
document.cookie = "sexo = mujer; expires=Thu, 01 Jan 1970 00:00:01 GMT";
console.log(document.cookie);

/****************************************************
****************COOKIES CON EVENTOS******************
*****************************************************/
window.addEventListener("load",inicio);
function inicio(){
    document.getElementById("verTodas").addEventListener("click",verTodas);
    document.getElementById("crearCookie1").addEventListener("click",crearCookie);
    document.getElementById("crearCookie2").addEventListener("click",crearCookie);
    document.getElementById("borrarCookie1").addEventListener("click",borrarCookie);
    document.getElementById("borrarCookie2").addEventListener("click",borrarCookie);
}

function verTodas(){
    alert(document.cookie);
}

function crearCookie(e){
    //navegador Microsoft
    if(!e) e = window.event;
    if (e.target.id == "crearCookie1"){
        document.cookie = "nombre = Natalia;"; 
    }else if (e.target.id == "crearCookie2"){
        document.cookie = "apellido = Escrivá;"; 
    }   
}

function borrarCookie(e){
    //navegador Microsoft
    if(!e) e = window.event;
    if (e.target.id == "borrarCookie1"){
        document.cookie = "nombre = Natalia; expires=Thu, 01 Jan 1970 00:00:01 GMT"; 
    }else if (e.target.id == "borrarCookie2"){
        document.cookie = "apellido = Escrivá; expires=Thu, 01 Jan 1970 00:00:01 GMT"; 
    }   
}

/****************************************************
**************AUTOMATIZAR ADMON COOKIES**************
*****************************************************/
document.getElementById("verCookies").addEventListener("click",verCookies);
document.getElementById("crearCookie").addEventListener("click",crearModificarCookie);
document.getElementById("modificarCookie").addEventListener("click",crearModificarCookie);
document.getElementById("leerCookie").addEventListener("click",leerCookies);
document.getElementById("borrarCookie").addEventListener("click",borrarCookies);

function verCookies(){
    alert("Cookies actuales:\n" + document.cookie);
}

function crearModificarCookie(){
    let nombre = prompt("Introduce nombre de cookie");
    let valor = prompt("Introduce valor de cookie");
    let expiracion = parseInt(prompt("Introduce número días hasta su expiración"));
    setCookie(nombre, valor, expiracion);
    verCookies();
}

function leerCookies(){
    let nombre = prompt("Introduce el nombre de la cookie a consultar");
    alert(getCookie(nombre));
}

function borrarCookies(){
    let nombre = prompt("Introduce el nombre de la cookie a borrar");
    deleteCookie(nombre);
}


//PARTE REUTILIZABLE

//función para crear/modificar una cookie
function setCookie(nombre, valor, diasExpiracion){
    let hoy = new Date();
    //a la fecha de hoy le sumamos en milisegundos los dias del argumento expiracion
    hoy.setTime(hoy.getTime()+ diasExpiracion*24*60*60*1000);
    diasExpiracion = "expires=" + hoy.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + diasExpiracion +";path=/";
}

//función para obtener los datos de la cookie
function getCookie(nombre){
    let nom = nombre + "=";
    //split separa una cadena por el elemento indicado y lo almacena en un array
    let array = document.cookie.split(";");
    for (let i=0; i<array.length; i++){
        let c = array[i];
        //a partir del 2º elemento del array, hay un espacio al inicio
        //lo podemos solucionar así:
        //charAt devuelve el primer caracter
        /*while(c.charAt(0) == " "){
            //quitamos el primer caracter y el resto lo pasamos a c
            c = c.substring(1);
        }*/
        //O lo solucionamos así:
        c = c.trim();
        //comprobamos si en la primera posición encontramos nom
        if (c.indexOf(nom) == 0){
            //le pasamos desde y hasta
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

function deleteCookie(nombre){
    //ponemos como valor nada y expira en la fecha más lejana 
    //con la que javascript trabaja: 01/01/1970
    setCookie(nombre, "",0);
}


