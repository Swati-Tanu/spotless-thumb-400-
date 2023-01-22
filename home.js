var right = 0;
var maxMargin=2000;
var jumpMargin = 200;

function setWidth(){
  var boxwidth = document.querySelector(".container2").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  // var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container2").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function slideLeft(event){
  var rowcont = document.querySelector(".row-container");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
}

function slideRight(event){
  var rowcont = document.querySelector(".row-container");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
   
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
}

window.onload=setWidth;


