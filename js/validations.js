var nom=document.getElementById("nombre");
var errNom=document.getElementById("error-nombre");

nom.addEventListener("focus",limpiaNom);
nom.addEventListener("blur",verifNom);

function verifNom(){
    var bEspacio=false
    var longName=nom.value.length;
    if(nom.value.length<6){
        errNom.innerHTML="El mínimo de letras es seis";
    }
    else{
        for(var i=1;i<nom.value.length-1;i++){
            if(nom.value[i]==" "){
                bEspacio=true;
            }
        }
        if(!bEspacio){
            errNom.innerHTML="El nombre debde tener un formato válido";
        }
    }
}
function limpiaNom(){
    errNom.innerHTML="";
}

var mail=document.getElementById("email");
var errMail=document.getElementById("error-mail");

mail.addEventListener("focus",limpiaMail);
mail.addEventListener("blur",verifMail);

function verifMail(){
    if(mail.value.length<8){
        errMail.innerHTML="El mínimo de letras es ocho";
    }
}
function limpiaMail(){
    errMail.innerHTML="";
}

var pass=document.getElementById("passwd");
var errPass=document.getElementById("error-pass");

pass.addEventListener("focus",limpiaPass);
pass.addEventListener("blur",verifPass);

function verifPass(){
    if(pass.value.length<8){
        errPass.innerHTML="El mínimo de letras es ocho";
    }
}
function limpiaPass(){
    errPass.innerHTML="";
}

var age=document.getElementById("edad");
var errAge=document.getElementById("error-edad");

age.addEventListener("focus",limpiaEdad);
age.addEventListener("blur",verifEdad);

function verifEdad(){
    if(age.value.length<=2 && age.value.length>0){
        if(age.value<18 ){
            errAge.innerHTML="La edad debe ser mayor a 18";
        }
    }else{
        errAge.innerHTML="Ingrese una edad válida";
    }
}
function limpiaEdad(){
    errAge.innerHTML="";
}

var tel=document.getElementById("telefono");
var errTel=document.getElementById("error-tel");

tel.addEventListener("focus",limpiaTel);
tel.addEventListener("blur",verifTel);

function verifTel(){
    if(tel.value.length<7){
        errTel.innerHTML="El mínimo de letras es siete";
    }
}
function limpiaTel(){
    errTel.innerHTML="";
}

var dir=document.getElementById("direccion");
var errDir=document.getElementById("error-dir");

dir.addEventListener("focus",limpiaDir);
dir.addEventListener("blur",verifDir);

function verifDir(){
    if(dir.value.length<5){
        errDir.innerHTML="El mínimo de letras es seis";
    }
}
function limpiaDir(){
    errDir.innerHTML="";
}

var city=document.getElementById("ciudad");
var errCity=document.getElementById("error-city");

city.addEventListener("focus",limpiaCity);
city.addEventListener("blur",verifCity);

function verifCity(){
    if(city.value.length<3){
        errCity.innerHTML="El mínimo de letras es tres";
    }
}
function limpiaCity(){
    errCity.innerHTML="";
}

var code=document.getElementById("codigopos");
var errCod=document.getElementById("error-cod");

code.addEventListener("focus",limpiaCod);
code.addEventListener("blur",verifCod);

function verifCod(){
    if(code.value.length<3){
        errCod.innerHTML="El mínimo de letras es tres";
    }
}
function limpiaCod(){
    errCod.innerHTML="";
}

var dni=document.getElementById("dni");
var errDni=document.getElementById("error-dni");

dni.addEventListener("focus",limpiaDNI);
dni.addEventListener("blur",verifDNI);

function verifDNI(){
    if(dni.value.length<7 || dni.value.length>8){
        errDni.innerHTML="El DNI debee tener entre 7 y 8 dígitos";
    }
}
function limpiaDNI(){
    errDni.innerHTML="";
}
