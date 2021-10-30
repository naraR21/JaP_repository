
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});
function guardarDatos(){
    var usuario=document.getElementById("nombre").value;
    localStorage.setItem("nombreLogin", usuario);
    var email=document.getElementById("email").value;
    localStorage.setItem("emailLogin", email);
}
function cerrarSesion(){
    localStorage.clear();
    
}