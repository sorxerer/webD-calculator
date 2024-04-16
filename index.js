
let buttons = document.querySelectorAll(".drum").length;

for(var i=0; i<buttons ;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}
function handleclick(){
    let clickInnerHTML= this.innerHTML ;
    makeSound(clickInnerHTML);
    buttonAnimation(clickInnerHTML);
};


document.addEventListener("keypress", function(event){
    makeSound(event.key);
    // console.log(event); makeSound(clickInnerHTML);
    buttonAnimation(event.key);
});


function makeSound(key){
    // const volumeLevel =1;
    switch(key){
        case "w" : 
        let crash= new Audio("./sounds/crash.mp3") ;
        crash.play(); 
        // crash.volume = volumeLevel;
        break;
   
        case "a" : 
        let snare= new Audio("./sounds/snare.mp3") ;
        snare.play();
        break;
   
        case "s" : 
        let kick= new Audio("./sounds/kick-bass.mp3") ;
        kick.play();
        break;
   
        case "d" : 
        let tom1= new Audio("./sounds/tom-1.mp3") ;
        tom1.play();
        break;
   
        case "j" : 
        let tom2= new Audio("./sounds/tom-2.mp3") ;
        tom2.play();
        break;
   
        case "k" : 
        let tom3= new Audio("./sounds/tom-3.mp3") ;
        tom3.play();
        break;
   
        case "l" : 
        let tom4= new Audio("./sounds/tom-4.mp3") ;
        tom4.play();
        break;
   
        default: console.log(clickInnerHTML);
       }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}