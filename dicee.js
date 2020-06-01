var x = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+x+".png");
var x1 = Math.floor(Math.random() * 6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+x1+".png");
if (x>x1) {
	document.querySelector("h3").innerHTML="<h3>PLAYER 1 WINS 🚩🥳</h3>";
}
else if (x1>x) {
	document.querySelector("h3").innerHTML="PLAYER 2 WINS 🚩🥳";
}
else {
	document.querySelector("h3").innerHTML="It's a DRAW 😑😑";
}