

(async function getApi (){
    var ahmed = await fetch ("https://dummyjson.com/products/search?q=phone");
    var element = await ahmed.json();
    var data = element.products;
    var myText="";
    for (var i=0; i<data.length ;i++){

        var cartoona =      `<div class="col-md-4 text-center mb-4  ">
                            <img src="${data[i].images[0]}" style=" height:400px" class ="img-fluid">
                            <h3>${data[i].title}</h3>
                            <h3>${data[i].brand}</h3>
                            <h5>${data[i].price}$</h5>
                            <h5>${data[i].discountPercentage}</h5>
                            <h6>${data[i].description}$</h6>
                            
                            </div>
                            `;

            myText= myText +cartoona;              
        } 
        
    document.querySelector(".test").innerHTML = myText;                    
})();