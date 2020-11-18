/* KODE HENTET FRA BOKEN KODE 2 INFORMASJONSTEKNOLOGI AV CAPPELEN DAMM */

function startQuiz() {
    var svar = prompt("Hvem skrev 'Et dukkehjem'?"); 
    if (svar === "Henrik Ibsen" || svar === "Ibsen" || svar === "henrik ibsen" || svar === "ibsen") {
       alert("RIKTIG!"); 
    }
    else {
        alert("Feil!"); 
    }
}
