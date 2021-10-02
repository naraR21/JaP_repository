//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let username=sessionStorage.getItem("nombreLogin")
    if(username===null){
        location.href="index.html"
        alert("Debes registrarte para poder ingresar :)")
    }else{
        document.getElementById("nombreUsuario").innerHTML=`¡Hola ${username}!`
    }
});
function cerrarSesion(){
    sessionStorage.removeItem("nombreLogin");
}