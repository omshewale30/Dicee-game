var randomNumber1=Math.ceil(Math.random()*6);
var imgsrc="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgsrc);


var randomNumber2=Math.ceil(Math.random()*6);
var imgsrc2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);
var winner=" ";

if(randomNumber1>randomNumber2){
  winner="Player1 wins!";
}
else{
  winner="Player2 wins!";
}

document.querySelectorAll("h1")[0].innerHTML=winner;
