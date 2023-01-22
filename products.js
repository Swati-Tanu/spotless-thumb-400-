// Accessing all the elements from HTML
let tbody=document.getElementById("ProductDetails");



// Fetching Data From API

fetch("https://63c2fb80b0c286fbe5f73c53.mockapi.io/Products")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    console.log(actData);
    Products(actData)
})
.catch((error)=>{
    console.log(error)
})



// Creating Dom

function Products(Data){

    // Creating elements For Each Products

    Data.forEach(function(product,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=product.id;
        let Brand=document.createElement("td");
        Brand.innerText=product.Brand;
        let Name=document.createElement("td");
        Name.innerText=product.name;
        let ProductType=document.createElement("td");
        ProductType.innerText=product.ProductType;
        let Price=document.createElement("td");
        Price.innerText=product.price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("img");
        Image.setAttribute("src",product.image);


        // Appending Created Elements
        Imagetd.append(Image);
        div.append(ID,Brand,Name,ProductType,Price,Imagetd);
        tbody.append(div);

    })

    
}

