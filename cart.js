let cartData = JSON.parse(localStorage.getItem("cart"))||[]
console.log(cartData)

let total_product=document.createElement("div")

let xyz = document.querySelector(".products");

 let payAmount=0;
console.log(cartData)

displayData(cartData);




 total=0


function displayData(bag){ 

    xyz.innerHTML = null;
    total_product.innerHTML=null;

  // let sum=0
    
    bag.forEach((item,index) => {
        let div=document.createElement("div");
        div.setAttribute("class","product");
        

        div.innerHTML=
        `

        <img src="${item.image}"
        <b> <p class="=brand">${item.brand}
        </p>
       </b>
       <p class="name">${item.name}</p>
       <p class="price">
         
         <span>$${+item.price}</span>
       </p>
       <p class="rating">
         
       </p>
       
      
       
       
        <input id="myInp" class="inc-dec itemQty" onchange="" index_number="${index}" value="1" type="number"/>
     
       `;

       
    
     
    
      // total=+item.price;

// function qtyInc(){
//   const element = document.getElementById("myInp")
//   let indexAtttr = element.getAttribute("index_number");
//   let localStoredITems = JSON.parse(localstorage.getItem('cart'));
// /* 
//  declare a variable and get its value by class
// */
// let itemQty = documebt.getElementByClass('itemQty').value;

// let changeQty = localStoredITems[indexNumber]['qty'] = itemQty;


// localStorage.setItem('cart',localStoredITems);

// totalQty();
//   console.log(indexAtttr)
// }


function totalQty(){
  let total = document.getElementById("total");
  let cartItem = JSON.parse(localStorage.getItem('cart'))
  let tItems = cartItem.length;
  console.log(cartItem[0])
 let totalAmt = 0;
  for (let i=0;i<cartItem.length;i++){
    const cartItems = cartItem[i]
    if((cartItems.qty!==undefined || cartItems.qty!==null) && cartItems.qty >0 ){
      totalAmt = (parseInt(cartItems.price)*cartItems.qty) + totalAmt;
    }else{
      totalAmt=parseInt(cartItems.price)+totalAmt
    }
      
     
      console.log("cartItems",cartItems.price)
  }
  console.log(totalAmt,"totalAmt")
  let str = 'Total Quantity is : ' + tItems +  
  '  Your total Amount is : ' +totalAmt;
  total.innerText =str;

}

function showTotal(){
  let total = document.getElementById("total");
  let str = localStorage.getItem('cartTotal')
  total.innerText =str;
}
showTotal()
       
    let btn=document.createElement("button");
    btn.setAttribute("class","button")
    btn.innerText="Purchase"
    btn.addEventListener("click",function(){
     
        cartData.push(item);
        localStorage.setItem("purchase",JSON.stringify(cartData))
       alert('Your Order is Placed')
      });
      xyz.append(div);
let cancel = document.createElement('button');
cancel.setAttribute('class',"button-17")
cancel.innerText="Cancel"
cancel.addEventListener("click", () => {
  let cancel = cartData.filter(function (el, i) {
    if (i === index) {
      return false;
    } else {
      return true;
    }

  });
  alert(`Click Ok to Cancel Your Product`);
  cartData = cancel;


  displayData(cartData);

  payAmount+=Number(item.price)
  total.innerText=payAmount
  localStorage.setItem("cart", JSON.stringify(cartData));
  totalQty()
});
div.append(btn,cancel);

  
})
}
console.log(cartData)


// let t=cartData.reduce(function(ele,ind){
//   let sum=0;
//   sum+=ele.price
//   return sum
// })
// makePayment(payAmount)
//console.log(t)

console.log(payAmount)

// function makePayment(payAmount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (payAmount <= walletBalance) {
//         resolve("Payment Successfull");
//       } else {
//         reject("Payment Failed");
//       }
//     }, 2000);
//   });
// }
// payButton.addEventListener("click", function (e) {
//   feedbackText.innerText = "Loading";
//   makePayment(payAmt.value)
//     .then((message) => {
//       feedbackText.innerText = message;
//       walletBalance += payAmt.value;
//       balanceAmt.innerText = walletBalance;
//     })
//     .catch((msg) => {
//       feedbackText.innerText = msg;
//     });
// });




 // <input type="number">
        // <input type="number">
        console.log(cartData)
        let t=0
        for(let i=0;i<cartData.lengt;i++){
          console.log(cartData[i].price)
        }


        
       