
let envio=document.getElementsByClassName("btn-check");
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
let costoSoloENvio=0;
let costoEnvio=0;
 for(let i = 0; i < precios.length; i++){
     subtotal+=parseFloat(precios[i].innerHTML)*parseFloat(cantidad[i].value);
     document.getElementById("subColum"+i).innerHTML = `UYU`+(parseFloat(precios[i].innerHTML)*parseFloat(cantidad[i].value)).toFixed(2);
     
    }

for(let i=0; i<envio.length; i++){
    if(envio[i].checked){
        costoEnvio = subtotal+(subtotal * (parseFloat(envio[i].value)/100));
        costoSoloENvio = subtotal * (parseFloat(envio[i].value)/100);
    }
}

 document.getElementById("subtotal").innerHTML=(subtotal).toFixed(2);
 document.getElementById("subtotalTicket").innerHTML=(subtotal).toFixed(2);
 document.getElementById("totalFinal").innerHTML=(subtotal).toFixed(2);
 document.getElementById("totalFinal2").innerHTML=(subtotal).toFixed(2);
 document.getElementById("totalFinal3").innerHTML=(subtotal).toFixed(2);
 document.getElementById("totalFinal").innerHTML=(costoEnvio).toFixed(2);
 document.getElementById("totalFinal2").innerHTML=(costoEnvio).toFixed(2);
 document.getElementById("costoSoloEnvio").innerHTML=(costoSoloENvio).toFixed(2);
 document.getElementById("totalFinal3").innerHTML=(costoEnvio).toFixed(2);
}


document.addEventListener("DOMContentLoaded", function(e){
    let preview=document.getElementById("fotoCart");
    let fotoPerfil=JSON.parse(localStorage.getItem("fotoGuardada"));
    
    if(fotoPerfil!=null){
        preview.src=fotoPerfil.imagen;
    }
    if(fotoPerfil===null){
        preview.src="img/avataaars.png"
    }

getJSONData(CARRITO_JAP_URL).then(function(resultObj){
    
         carritoArray=resultObj.data;
        mostrarCarrito(carritoArray);
});

});
function valorEnvio(value){
    let costo=document.getElementById("subtotal").innerText;
    let costoEnvio= parseFloat(costo)+((parseFloat(costo)*value)/100);
    let costoSoloENvio=(parseFloat(costo)*value)/100;
    document.getElementById("totalFinal").innerHTML=(costoEnvio).toFixed(2);
    document.getElementById("totalFinal2").innerHTML=(costoEnvio).toFixed(2);
    document.getElementById("costoSoloEnvio").innerHTML=(costoSoloENvio).toFixed(2);
    document.getElementById("totalFinal3").innerHTML=(costoEnvio).toFixed(2);
}
function cerrarSesion(){
    localStorage.clear();
}

$(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (var i = 0, len = sanitizedValue.length; i < len; i +=4) { parts.push(sanitizedValue.substring(i, i + 4)); } for (var i=caretPosition - 1; i>= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c> '9') {
            caretPosition--;
            }
            }
            caretPosition += Math.floor(caretPosition / 4);
    
            this.value = this.lastValue = parts.join(' ');
            this.selectionStart = this.selectionEnd = caretPosition;
            }
    
            //For Date formatted input
            var expDate = document.getElementById('exp');
            expDate.onkeyup = function (e) {
            if (this.value == this.lastValue) return;
            var caretPosition = this.selectionStart;
            var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
            var parts = [];
    
            for (var i = 0, len = sanitizedValue.length; i < len; i +=2) { parts.push(sanitizedValue.substring(i, i + 2)); } for (var i=caretPosition - 1; i>= 0; i--) {
                var c = this.value[i];
                if (c < '0' || c> '9') {
                    caretPosition--;
                    }
                    }
                    caretPosition += Math.floor(caretPosition / 2);
    
                    this.value = this.lastValue = parts.join('/');
                    this.selectionStart = this.selectionEnd = caretPosition;
                    }
    
                    });

