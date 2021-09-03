
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let username=sessionStorage.getItem("nombreLogin")
    document.getElementById("nombreUsuario").innerHTML=`¡HOLA ${username}!`
});
function guardarDatos(){
    var usuario=document.getElementById("nombre").value;
    sessionStorage.setItem("nombreLogin", usuario);
}
