var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2"); 
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4"); 
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");  
var img9 = document.getElementById("img9");

var array = [1,2,3,4,5,6,7,8,9]; 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  shuffle(array);
  console.log(array);
  var selectedArray = [];

  function openCard(cardnr) {
        var img = document.getElementById("img"+cardnr); 
        if (selectedArray.length < 2) {
            selectedArray = [cardnr];
        }
        img.style.display = "none";
        var buttonClicked = 1; 
        if (buttonClicked > 2) {
            console.log("hei");
        }
  }

  function checkIfAlike(img, img2) {
    if (selectedArray[0] == selectedArray[1]) {
        console.log("like");
    }
  }