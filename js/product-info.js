var productAutos = {};
function showImagesGallery(array){

    let htmlContentToAppend = "";

      for(let i = 0; i < array.length ; i++){
        let imageSrc = array[i];
        
        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
 function mostrarComentarios(){
    
    
     let htmlContentToAppend = "";
      for(let i = 0; i < comentarios.length ; i++){
          let comments = comentarios[i];
          var estrellitas = "";
          if (comments.score == 1) {
            estrellitas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>`
          } else if (comments.score == 2){
              estrellitas = `<span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>`
            }else if (comments.score == 3){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>`
    
            }else if (comments.score == 4){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>`
            }else if (comments.score == 5){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
            } 
          htmlContentToAppend +=  
          
                        
                        `
        <div class="list-group-item list-group-item-action">             
            <div class="row">
                <div class="col">
                    <div class="comentario">${comments.user}</div>
                    <div>${comments.description}</div>
                    <div class="rating">${estrellitas}</div>
                    <div>${comments.dateTime}</div>
                </div>
            </div>
        </div>
            
                    
          `
          document.getElementById("productComments").innerHTML=htmlContentToAppend;
      }  
}

// Función para mostrar productos recomendados tomando los datos del JSON de productos y desplegándolos dependiendo de
// qué productos se indiquen en el objeto "related products" del JSON de productos-info

  function mostrarRecomendados(array){
    let htmlContentToAppend = "";
    
     for (let i = 0  ;  i < productInfo.relatedProducts.length;  i++ ){
        let product = array[productInfo.relatedProducts[i]];
        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6"><a href="products.html">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + product.imgSrc + `" alt="">
                <p class="mb-2">`+ product.name + `</p>
                <p class="mb-1">` + product.description + `</p>
            </div>

            </a>
        </div>
        
        `
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
}   


// Función para fecha de comentario nuevo

function fecha(objetoFecha){
    const date= {
        año: objetoFecha.getFullYear(),
        mes: (objetoFecha.getMonth()+1).toString().padStart(2, "0"),
        dia: objetoFecha.getDate(),
        hora: objetoFecha.getHours().toString().padStart(2, "0"),
        minutos: objetoFecha.getMinutes().toString().padStart(2, "0"),
        segundos: objetoFecha.getSeconds().toString().padStart(2, "0")
    }
return `${date.año}-${date.mes}-${date.dia} ${date.hora}:${date.minutos}:${date.segundos}`
};
const fechaHoy = new Date();
const fechaComentario= fecha(fechaHoy);

//Función para agregar un comentario en base al contenido del input de id "comentario" y el número
//ingresado en el select de id "estrellas"

function comentar(){
     const comentario=document.getElementById("comentario").value.trim();
     const estrellas=document.getElementById("estrellas").value;
     let addObj = {
         comment : comentario,
         stars: estrellas
     }
     var estrellitas = "";
          if (estrellas == 1) {
            estrellitas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>`
          } else if (estrellas == 2){
              estrellitas = `<span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>`
            }else if (estrellas == 3){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>`
    
            }else if (estrellas == 4){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>`
            }else if (estrellas == 5){
                estrellitas = `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>`
            } 
     let vals = Object.values(addObj);
     let info="";
     info= `<div class="list-group-item list-group-item-action">             
     <div class="row">
         <div class="col">
             <div>${localStorage.getItem("nombreLogin")}</div>
             <div>${vals[0]}</div>
             <div class="rating">${estrellitas}</div>
             <div>${fechaComentario}</div>
         </div>
     </div>
 </div>`
     document.getElementById("newComment").innerHTML=info;
     document.getElementById("comentario").value=""; //Para que la casilla de comentarios aparezca vacía luego de enviar uno
    
    
} 
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    //Función para mostrar la información del producto en la página en base al JSON de product_info
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productInfo = resultObj.data;

            let productInfoNameHTML  = document.getElementById("productInfoName");
            let productInfoCost = document.getElementById("productInfoCost");
            let productInfoDescriptionHTML = document.getElementById("productInfoDescription");
            let productInfoCategoria = document.getElementById("productInfoCategoria");
            let productCountHTML = document.getElementById("productCount");
            
        
            productInfoNameHTML.innerHTML = productInfo.name;
            productInfoCost.innerHTML = productInfo.currency + productInfo.cost;
            productInfoDescriptionHTML.innerHTML = productInfo.description;
            productInfoCategoria.innerHTML = productInfo.category;
            productCountHTML.innerHTML = productInfo.soldCount;
            

            //Muestro las imagenes en forma de galería
            showImagesGallery(productInfo.images);
        }
    });
    //Se extrae la data del JSON de product_info_comments. Luego de esto se llama a la función mostrarComentarios
    //que ya tiene los datos necesarios para funcionar
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(commentsData){

        comentarios=commentsData.data;
        mostrarComentarios();

    });
    //Se extraen los datos de productos para que la función de mostrarRecomendados pueda funcionar
     getJSONData(PRODUCTS_URL).then(function(productData){
        
        productsArray=productData.data;
        mostrarRecomendados(productsArray);


    });
    let username=sessionStorage.getItem("nombreLogin");
        document.getElementById("usernameComentarios").innerHTML= `¡${username}, danos tu opinión!`;

    

});
function cerrarSesion(){
    localStorage.clear();
    
}

