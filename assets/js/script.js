let nombre = document.getElementById("Nombre");
let apellio = document.getElementById("apellido");
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

let btnEnviar = document.getElementById("btnEnviar");

let nombreV= "";
let apellidoV= "";
let rutV = "";
let emailV = "";

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    
    nombreV = Nombre.value;
    apellidoV = apellido.value;
    rutV = rut.value;
    emailV = email.value;

    //console.log("Nombre : "+ nombreV + " , apellido: "+ apellidoV); 
    //console.log(`Nombre : " ${nombreV} , apellido ${apellidoV}`) /*Es lo mismo que lo de arriba pero mas simple */

    if(nombreV === ""){
        error1.innerHTML = "Debe ingresar el nombre";
        error1.style.color = "red";
        return;
    }
    if(apellidoV === ""){
        error2.innerHTML = "Debe ingresar el apellido";
        error2.style.color = "red";
        return;
    }
    if(rutV === ""){
        error3.innerHTML = "Debe ingresar el rut";
        error3.style.color = "red";
        return;
    }
    if(emailV === ""){
        error4.innerHTML = "Debe ingresar el email";
        error4.style.color = "red";
        return;
    }

    console.log('Envio de datos exitosos')

});