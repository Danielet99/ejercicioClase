//Verificamos que el navegador soporta Web Storage
if (typeof(Storage) !== "undefined"){
    alert("El navegador soporta webStorage");
}


/***********************************************
 ****************localStorage*******************
 ***********************************************/
//Crear elemento (son cadenas). Podemos omitir window.
window.localStorage.setItem("nombre","Natalia");
window.localStorage.setItem("mayorEdad",true);
window.localStorage.setItem("dto",25);
//Este método aunque válido NO es el más correcto pq no utiliza el método
//propio de localStorage
window.localStorage.apellido = "Escrivá";

//Consultar elemento
alert(localStorage.getItem("nombre"));
alert(localStorage.mayorEdad);
alert(localStorage.getItem("dto"));

//Borrar elemento
localStorage.removeItem("nombre");
alert(localStorage.getItem("nombre"));//null
delete localStorage.mayorEdad;
alert(localStorage.mayorEdad);//undefined

//borrar todos los elementos
localStorage.clear();
alert(localStorage.getItem("dto"));//null
alert(localStorage.dto);//undefined


/***********************************************
 ****************sessionStorage*******************
 ***********************************************/

 //Funciona igual que localStorage