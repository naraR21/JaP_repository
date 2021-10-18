const CARRITO_JAP_URL="https://japdevdep.github.io/ecommerce-api/cart/654.json";
function precio(costo, moneda){
    if(moneda=="USD"){
        costo = costo * 40;
    }
    return costo;
}
function mostrarCarrito(array){
    let articulo=array.articles
    let htmlContentToAppend = "";
    for(let i = 0; i < articulo.length; i++){
        let producto=articulo[i];
          htmlContentToAppend+=
          `<tr>
              <td class="text-center p-4"><img src="${producto.src}" class= "img-responsive" width = "150 px"></td>
              <td class="text-center p-4">${producto.name}</td>
              <td class="text-center p-4"><input type="number" value=${producto.count} min="1" id="cantidad${i}" onchange="subtotal()"></td>
              <td class="text-center p-4">UYU<span class="costo">${precio(producto.unitCost, producto.currency)}</span></td>
              <td class="text-center p-4" id="subColum${i}"></td>
            </tr>
            `
    }
    document.getElementById("carrito").innerHTML=htmlContentToAppend;
    subtotal();
}
function subtotal(){
 let precios=document.getElementsByClassName("costo");
 let cantidad=document.getElementsByTagName("input");
 let subtotal=0;
 for(let i = 0; i < precios.length; i++){
     subtotal+=parseFloat(precios[i].innerHTML)*parseFloat(cantidad[i].value);
     document.getElementById("subColum"+i).innerHTML = `UYU`+(parseFloat(precios[i].innerHTML)*parseFloat(cantidad[i].value)).toFixed(2);
     
    }

 document.getElementById("subtotal").innerHTML=(subtotal).toFixed(2);
 document.getElementById("totalFinal").innerHTML=(subtotal).toFixed(2);
}


document.addEventListener("DOMContentLoaded", function(e){
getJSONData(CARRITO_JAP_URL).then(function(resultObj){
    
         carritoArray=resultObj.data;
        mostrarCarrito(carritoArray);
});

});
function valorEnvio(value){
    let costo=document.getElementById("subtotal").innerText;
    let costoEnvio= parseFloat(costo)+((parseFloat(costo)*value)/100);
    document.getElementById("totalFinal").innerHTML=(costoEnvio).toFixed(2);
}

