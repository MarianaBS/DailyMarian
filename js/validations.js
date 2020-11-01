function esDigito(num){
    if(num=="0" ||num=="1" ||num =="2" ||
    num=="3" ||num=="4" ||num=="5" ||
    num=="6" ||num=="7" ||num=="8" ||num=="9"){
        return true;
    }
    else{
        return false;
    }
}
function esLetra(le){
    patronLetras=/[A-Za-z]/;
    if(patronLetras.test(le)){
        return true;
    }
    else{
        return false;
    }
}

var nom=document.getElementById("nombre");
var errNom=document.getElementById("error-nombre");

nom.addEventListener("focus",limpiaNom);
nom.addEventListener("blur",verifNom);

function verifNom(){
    var bEspacio=false;
    var bLetra=true;
    if(nom.value.length<6){
        errNom.innerHTML="El mínimo de letras es seis";
    }
    else{
        //la idea seria: primero chequea que el primero y ultimo caracter sean letras
        //luego pregunta que si entre medio hay alguno q no sea letra, solo puede ser espacio,
        // y no consecutivos (xej M               L)
        //Al final valida que ya sea por espacio inexistente (o consecutivos) y por no letra,
        //el formato no es válido
        if(esLetra(nom.value[0]) && esLetra(nom.value[nom.value.length-1])){
            for(var i=1;i<nom.value.length-1;i++){
                if(!esLetra(nom.value[i])){
                    if(nom.value[i]==" " && nom.value[i-1]!=" "){
                        bEspacio=true;
                    }
                    else{
                        bLetra=false;
                    }
                }
            }
        }
        if(!bEspacio || !bLetra){
            errNom.innerHTML="El nombre debe tener un formato válido";
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
    else{
        //usamos una expresion regular para definir el patrón de formato válido del campo
        emailEReg= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailEReg.test(mail.value)) {
            errMail.innerHTML="Ingrese un formato valido de mail";
        }
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
    else{
        patron = /[A-Za-z0-9]/; //expresion regular para solo letras y numeros
        for (var i=0; i<pass.value.length;i++){
            if(!patron.test(pass.value[i])){
                errPass.innerHTML="La contraseña solo puede estar formada por letras y números";
                break;
            }
        }

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
console.log(typeof(age.value));
function limpiaEdad(){
    errAge.innerHTML="";
}

var tel=document.getElementById("telefono");
var errTel=document.getElementById("error-tel");

tel.addEventListener("focus",limpiaTel);
tel.addEventListener("blur",verifTel);

function verifTel(){
    var bCaracterEsp=false;
    if(tel.value.length<7){
        errTel.innerHTML="El mínimo de dígitos es siete";
    }else{
        //se fija que no tenga caracteres especiales, y q los caracteres sean solo digitos
        //En realidad con la validacion de solo digitos alcanzaria, pero como la consigna
        // dice especificamente: validar q no se ingresen guiones, espacios o parentesis...
        for(var i=0;i<tel.value.length;i++){
            if(tel.value[i]=="-" || tel.value[i]==" "|| tel.value[i]== "_" ||tel.value[i]=="(" ||tel.value[i]==")"){
                bCaracterEsp=true;
                break;}
            else if(!esDigito(tel.value[i])){
                    bCaracterEsp=true;
                    break;
                }
        }
        if (bCaracterEsp){
            errTel.innerHTML="El campo admite sólo números";
        }
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
    var bEspacioDir=false;
    if(dir.value.length<5){
        errDir.innerHTML="El mínimo de letras es seis";
    }
    for(var i=1;i<dir.value.length-1;i++){
        if(dir.value[i]==" "){
            bEspacioDir=true;
        }
    }
    if(!bEspacioDir){
        errNom.innerHTML="El nombre debe tener un formato válido";
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
    //En este caso no aclara qué clase de caracteres ingresar
    //Si es por sentido comun sería letras y tal vez numeros, pero como no hay formato definido lo dejo así
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
    //En este caso no aclara qué clase de caracteres ingresar
    //Si es por sentido comun serían letras y numeros, pero como no hay formato definido lo dejo así
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
        errDni.innerHTML="El DNI debe tener entre 7 y 8 dígitos";
    }
    else{
        for (var i=0; i<dni.value.length;i++){
            if(!esDigito(dni.value[i])){
                errDni.innerHTML="Debe ingresar únicamente dígitos";
                break;
            }
        }
    }
}
function limpiaDNI(){
    errDni.innerHTML="";
}

var errores=document.querySelectorAll(".error");
var items=document.querySelectorAll(".item");

function verificarErrores(){
    for (var i=0;i<errores.length;i++){
        for (var j=0; j<items.length;j++){
            if(errores[i].innerHTML!="" && i==j){
                items[j].value=errores[i].innerHTML;
            }
        }
    }   
}

var btnEnviar=document.getElementById("submit");

btnEnviar.addEventListener("click",enviarDatos);

function enviarDatos(){
   verificarErrores();
   window.alert("Nombre y Apellido: " + nom.value + "\nMail: " + mail.value +
                "\nContraseña: " + pass.value + "\nEdad: " + age.value +
                "\nTeléfono: " + tel.value + "\nDirección: " + dir.value +
                "\nCiudad: " + city.value + "\nCódigo Postal: " + code.value +
                "\nDNI: " + dni.value);
}