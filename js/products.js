const ORDER_ASC_BY_COST = "Menor precio";
const ORDER_DESC_BY_COST = "Mayor precio";
const ORDER_BY_SOLD_COUNT = "Relevancia";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;

function ordenarProductos(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_SOLD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}


function mostrarProductos(){

    let htmlContentToAppend = "";
    for(let i = 0; i <currentProductsArray.length; i++){
        let product =currentProductsArray[i];
         if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){ 
         

             htmlContentToAppend += `
             <div class="col-md-4">
              <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src=${product.imgSrc} alt="${product.description}">
                <h3 class="m-3">${product.name} (122)</h3>
                <div class="card-body">
                  <p class="card-text">${product.description}</p>
                  <small class="text-muted">${product.currency} ${product.cost}</small>
                  <small><p align="right">${product.soldCount} vendidos</p></small>
                </div>
              </a>
            </div>
            `
            
           
        }
    }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    
}

function ordenarYMostrarProductos(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = ordenarProductos(currentSortCriteria, currentProductsArray);

   
    mostrarProductos();
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(productData){
         if (productData.status === "ok"){
            ordenarYMostrarProductos(ORDER_ASC_BY_COST, productData.data);
        } 
        
    });
    document.getElementById("sortAsc").addEventListener("click", function(){
        ordenarYMostrarProductos(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        ordenarYMostrarProductos(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortBySoldCount").addEventListener("click", function(){
        ordenarYMostrarProductos(ORDER_BY_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        mostrarProductos();
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        mostrarProductos();
    });
});
function cerrarSesion(){
    localStorage.clear();
    
}
    