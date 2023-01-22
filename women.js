let bag = [];
fetch("women.json")
.then((res)=>res.json())
.then((data)=>{
    bag=data;
    displayData(bag);
})

let cartarr=[];
function displayData(bag){ 
    let xyz = document.querySelector(".products");
    xyz.innerHTML = "";
    
    bag.forEach((item) => {
        let div=document.createElement("div");
        div.setAttribute("class","product");
        div.innerHTML=
        `<img src="${item.image}" alt="${item.image}"> 
        <b> <p class="brand">${item.brand}</p> </b>
        <p class="name">${item.name}</p>
        <p class="price">
            <span>$${item.price}</span> 
        </p>  `;
    let btn=document.createElement("button");
    btn.setAttribute("class","button")
    btn.innerText="QUICK ADD"
    btn.addEventListener("click",function(){
        alert("Product Added To Cart!");
        cartarr.push(item)
            localStorage.setItem("cart",JSON.stringify(cartarr));
            totalQty();
        });
    div.append(btn);
    xyz.append(div);
})
}

function totalQty(){
    let total = document.getElementById("total");
    let cartItem = JSON.parse(localStorage.getItem('cart'))
    let tItems = cartItem.length;
    console.log(cartItem[0])
   let totalAmt = 0;
  
    for (let i=0;i<cartItem.length;i++){
      const cartItems = cartItem[i]
        totalAmt=parseFloat(cartItems.price)+totalAmt
       
        console.log("cartItems",cartItems.price)
    }
    console.log(totalAmt,"totalAmt")
    let str = 'Total Quantity is:' + tItems +  
    '    Your total Amount is: ' +totalAmt;
    // total.innerText =str;
  
  localStorage.setItem('cartTotal',str)
  }
  

document.querySelector("#reset").addEventListener("click",function(event){
    document.querySelector("#brand-filter").value = "all";
    document.querySelector("#product-type-filter").value = "all";
    document.querySelector("#color-filter").value = "all";
    document.querySelector("#size-filter").value = "all";
    document.querySelector("#price").value = "price";
    displayData(bag);    
});


let brandFilter = document.querySelector("#brand-filter");
brandFilter.addEventListener("change", function() {
    let selectedBrand = brandFilter.value;
    let filteredProducts = bag;
    if (selectedBrand !== "all") {
        filteredProducts = bag.filter(item => item.brand === selectedBrand);
    }
    displayData(filteredProducts);
});

let productTypeFilter = document.querySelector("#product-type-filter");
productTypeFilter.addEventListener("change", function() {
    let selectedBrand = productTypeFilter.value;
    let filteredProducts = bag;
    if (selectedBrand !== "all") {
        filteredProducts = bag.filter(item => item.ProductType === selectedBrand);
    }
    displayData(filteredProducts);
});

let colorFilter = document.querySelector("#color-filter");
colorFilter.addEventListener("change", function() {
    let selectedBrand = colorFilter.value;
    let filteredProducts = bag;
    if (selectedBrand !== "all") {
        filteredProducts = bag.filter(item => item.color === selectedBrand);
    }
    displayData(filteredProducts);
});

let sizeFilter = document.querySelector("#size-filter");
sizeFilter.addEventListener("change", function() {
    let selectedBrand = sizeFilter.value;
    let filteredProducts = bag;
    if (selectedBrand !== "all") {
        filteredProducts = bag.filter(item => item.size.includes(parseFloat(selectedBrand)));
    }
    displayData(filteredProducts);
});

let priceSort = document.querySelector("#price");
priceSort.addEventListener("change", function (){
    let selected = priceSort.value;
    let filteredProducts = bag;
    if (selected=="HTL"){
        filteredProducts.sort((a,b)=>(b.price)-(a.price));
    }
    if (selected=="LTH"){
        filteredProducts.sort((a,b)=>(a.price)-(b.price));
    }
    displayData(filteredProducts);
})
function search(){
    let query = document.querySelector("#search").value;
    console.log(query);
    let newData = bag.filter(function(element){
        return element.brand.toLowerCase().includes(query.toLowerCase());
    });
    console.log(newData);
    displayData(newData);
}