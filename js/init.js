const CATEGORIES_URL = "http://127.0.0.1:3000/categoryCategorias";
const PUBLISH_PRODUCT_URL = "http://127.0.0.1:3000/mensajePublicado";
const CATEGORY_INFO_URL = "http://127.0.0.1:3000/categoryAuto";
const PRODUCTS_URL = "http://127.0.0.1:3000/todosAutos";
const PRODUCT_INFO_URL = "http://127.0.0.1:3000/auto";
const PRODUCT_INFO_COMMENTS_URL = "http://127.0.0.1:3000/productoComentarios";
const CART_INFO_URL = "http://127.0.0.1:3000/carritoArticulo";
const CART_BUY_URL = "http://127.0.0.1:3000/compraRealizada";
const CARRITO_JAP_URL = "http://127.0.0.1:3000/articulos";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});
function cerrarSesion(){
  localStorage.clear();
  
}