var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdicenumber= "images/dice" + randomnumber1 + ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomdicenumber);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdicenumber= "images/dice" + randomnumber2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomdicenumber);

if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if(randomnumber1 >  randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else {  
    document.querySelector("h1").innerHTML="It's a tie!";
}
document.getElementById("refresh-btn").addEventListener("click", function () {
    location.reload(); // Reloads the current page
});