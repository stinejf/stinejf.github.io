function checkNumber() {
    var text = document.getElementById("text");

    if (text.innerText != "") {
        text.innerText == "";
    }
    var number = document.getElementById("number").value; 
    var rand = Math.random()*10;
    rand = parseInt(rand);

    console.log(number + " " + rand);

    if (number == rand) {
        alert("Tallet er likt!");
        console.log("LIKT");
    }
}