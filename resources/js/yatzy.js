// JavaScript Document
var timesClicked = 0; 
button.onclick = function() {
    timesClicked++;
    var results = []; 
    for (var i=1; i<=5; i++) {
        var dice = parseInt(Math.random()*6+1); 
        document.getElementById("dice"+i).src = "resources/images/dice"+dice+".png"; 
        results += dice; 
    }
    if (results[0] == results[1] == results[2] == results[3] == results[4])
    {
        document.getElementById("result").innerHTML = "HURRA! <br> DU HAR FÅTT 5 LIKE! <br> Du klarte det på: " + timesClicked + " forsøk."; 
        console.log("HURRA");
    }
     
    document.getElementById("times").innerHTML = "Antall forsøk: " + timesClicked;
}   
