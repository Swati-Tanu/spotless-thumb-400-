// Accesing All The elements From Html
let baseurl="https://63c2fb80b0c286fbe5f73c53.mockapi.io"
let TotalProductCount=document.getElementById("totalProducts")




// Getting Number of Products
fetch(`${baseurl}/Products`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
})