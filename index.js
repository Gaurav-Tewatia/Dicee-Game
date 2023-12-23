var random_number=Math.floor(Math.random()*6)+1;

var imgsrc="images/dice"+random_number+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);
var random2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+random2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);


if(random_number>random2){
    document.querySelector("h1").innerHTML="player 1 wins";

}
else if(random_number<random2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="it is a draw";
}