var antallPersoner = 13; 
var antallKunder = 20; 
var tekst = document.getElementById("antallKunder");

function LeggeSammen(personer, kunder) {
    var totalt = personer + kunder; 
    console.log(totalt); 
    return totalt; 
}

// Rekner ut antall personer 
LeggeSammen(antallPersoner, antallKunder); 







function sjekkMaksAntall(personer, kunder) {
    if (kunder <= personer) {
        tekst.innerHTML = "OK"; 
    }
    else if (kunder > personer) {
        tekst.innerHTML = "OBS! For mange kunder!";
        tekst.style.color = "red"; 
        
    }
}

sjekkMaksAntall(50, 30);
sjekkMaksAntall(13, 40);