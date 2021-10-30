/* avatarArray=[
  img/avataaars (1).png,
  img/avataaars (2).png,
  img/avataaars (3).png,
  img/avataaars (4).png,
  img/avataaars (5).png,
  img/avataaars (6).png,
  img/avataaars (7).png,
  img/avataaars (8).png,
  img/avataaars (9).png,
  img/avataaars (10).png,
  img/avataaars (11).png,
  img/avataaars (12).png,
] */

let perfil={};
let fotoPerfil={};
let preview = document.querySelector("img");
function cerrarSesion(){
  localStorage.clear();
  
}

function previewFile() {
    
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      document.getElementById("foto").innerHTML = reader.result;
      
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "img/avataaars.png";
    }
  }
   /*function insertarAvatar(){
     for(let i=0; i<avatarArray.lenght; i++);
     if(document.getElementsByClassName("btn-check")!=false){
      document.getElementById("foto").innerHTML=avatarArray[i];
     }
     else {
      preview.src = "img/avataaars.png";
    }
 
  
} */
  function guardarFoto(){
   fotoPerfil.imagen = document.getElementById("foto").src;
  
    localStorage.setItem("fotoGuardada", JSON.stringify(fotoPerfil));
}
function guardar(){
    
    perfil.nombre = document.getElementById("nombreGuardado").value
    perfil.edad = document.getElementById("edadGuardada").value
    perfil.email = document.getElementById("mailGuardado").value
    perfil.telefono = document.getElementById("telGuardado").value
    perfil.direccion = document.getElementById("direGuardada").value
    
    localStorage.setItem("usuario", JSON.stringify(perfil));
    
}
  
function mostrarDatos(){
    let perfil=JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("nombrePerfil").innerHTML=perfil.nombre;
         document.getElementById("edadPerfil").innerHTML=perfil.edad;
         document.getElementById("emailPerfil").innerHTML=perfil.email;
         document.getElementById("telPerfil").innerHTML=perfil.telefono;
         document.getElementById("direPerfil").innerHTML=perfil.direccion;  
         document.getElementById("nombreUsuario").innerHTML=`¡Hola ${perfil.nombre}!`
}
document.addEventListener("DOMContentLoaded",()=>{
    let preview=document.getElementById("foto");
    let fotoPerfil=JSON.parse(localStorage.getItem("fotoGuardada"));
    let email=localStorage.getItem("emailLogin");
    let username=localStorage.getItem("nombreLogin");
    let perfil=JSON.parse(localStorage.getItem("usuario"));
    if(username===null){
     location.href="index.html"
     alert("Debes registrarte para poder ingresar :)")
    }if(username!=null){
        document.getElementById("nombreUsuario").innerHTML=`¡Hola ${username}!`}
        
      if(perfil!=null){
          mostrarDatos();
        
     }  
     if(perfil===null){
         document.getElementById("nombrePerfil").innerHTML=username;
         document.getElementById("emailPerfil").innerHTML=email;
         }
    if(fotoPerfil!=null){
        preview.src=fotoPerfil.imagen;
    }
    if(fotoPerfil===null){
        preview.src="img/avataaars.png"
    }
      
    
});
