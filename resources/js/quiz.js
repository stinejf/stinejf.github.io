/* KODE HENTET FRA BOKEN KODE 2 INFORMASJONSTEKNOLOGI AV CAPPELEN DAMM */

var question1 = "Hvem skrev Et Dukkehjem?";
var question2 = "Hva heter bilmerke som har modellen Corolla?"; 
var question3 = "Hvor mange fylker er det i Norge i dag?";

var question = 1; 

function startQuiz() {
    document.getElementById("hideWhenActive").style.display = "none"; 
    document.getElementById("question1").style.display = "block"; 
    document.getElementById("labelQuestion").innerHTML = question1;
}

function loadAnswer(elementId) {
    var svar = document.getElementById(elementId).value;
    checkAnswer(svar)
}

function checkAnswer(svar) {
    var rett = false; 
    if (question == 1) {
        if (svar === "Henrik Ibsen" || svar === "Ibsen" || svar === "henrik ibsen" || svar === "ibsen") {
            rett = true;
        }
    } 
    if (question == 2){
        if (svar === "Toyota" || svar === "toyota") {
            rett = true; 
        }
    }
    if (question == 3){
        if (svar == 11) {
            rett = true; 
        }
    }
    trueOrFalse(rett);
    document.getElementById("nextquestion").style.display = "block";  
    question++; 
    console.log(question);     
}

function trueOrFalse(svar) {
    if (svar == true) {
        document.getElementById("rettgalt").innerHTML = "RIKTIG!";  
        document.getElementById("rettgalt").style.color = "green"; 
     }
     else {
        document.getElementById("rettgalt").innerHTML = "FEIL!";  
        document.getElementById("rettgalt").style.color = "red";      
    }
}

function loadNewQuestion() {
    document.getElementById("nextquestion").style.display = "none";
    document.getElementById("labelQuestion").innerHTML = "";
    document.getElementById("hideWhenActive").style.display = "none"; 
    document.getElementById("question1").style.display = "block"; 
    if (question == 2) {
        document.getElementById("labelQuestion").innerHTML = question2;
    }
    if (question == 3) {
        document.getElementById("labelQuestion").innerHTML = question3;
    }
    document.getElementById("svar1").value = ""; 
    document.getElementById("rettgalt").innerHTML = ""; 
}

