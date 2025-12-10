// for button click
var nbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<nbutton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var btext=this.innerHTML;
    makesound(btext);
    animation(btext)
   
});
}
// for keyboard press
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
});
// function to play sound
function makesound(key){
    switch (key) {
    case "w":
        var tom1=new Audio("./sounds/tom-1.mp3").play();
        break;
    case "a":
        var crash=new Audio("./sounds/crash.mp3").play();
    break;
    case "s":
        var tom3=new Audio("./sounds/tom-3.mp3").play();
    break;
    case "d":
        var tom4=new Audio("./sounds/tom-4.mp3").play();
    break;
    case "j":
        var snare=new Audio("./sounds/snare.mp3").play();
    break;
    case "k":
        var tom2=new Audio("./sounds/tom-2.mp3").play();
    break;
    case "l":
        var kick=new Audio("./sounds/kick-bass.mp3").play();
    default:
        break;
   }
}

//animation part 
function animation(currentkey){
    var active=document.querySelector("."+currentkey);
active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
}