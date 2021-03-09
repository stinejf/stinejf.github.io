var header = document.getElementById("header");
header.innerText = "Velkommen"; 

header.style = "background-color: yellow; color:white;";  

var date = new Date(); 
var time = date.getHours(); 

if (time >= 5 && time < 10) {
    header.innerText = "God morgen"; 
}

if (time >= 10 && time < 15) {  
    header.innerText = "God dag"; 
}

if (time >= 15 && time < 18) {
    header.innerText = "God ettermiddag"; 
}

if (time >= 18) {
    header.innerText = "God kveld"; 
}

if (time < 5) {
    header.innerText = "God natt"; 
}   
function button_clicked() {
    var welcome = document.getElementById("welcome"); 
    welcome.innerText = "Knappen er trykket på.";
}

