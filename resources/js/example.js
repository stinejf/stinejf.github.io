// Variabler
var antallKunder = 10; // Kor mange kunder det er i butikken no
var maksAntall = 10; // Maks antall kunder i butikken 
var welcomeText = document.getElementById("welcome"); 

/*
    Sjekker om det er meir kunder enn tillatt i 
    butikken. Dette er ein kommentar på fleire linjer. 
*/
if (antallKunder <= maksAntall) {
    welcomeText.style.color = "green";
    welcomeText.innerText = "OK";
}
else {
    
}








