// JavaScript Document
button.onclick = function() {
	switch(parseInt(Math.random()*6+1)) {
		case 1:
		// code block
			document.getElementById("dice").src = "../resources/images/dice1.png"; 
			break;
		case 2:
		// code block
			document.getElementById("dice").src = "../resources/images/dice2.png"; 
			break;
		case 3: 
			document.getElementById("dice").src = "../resources/images/dice3.png"; 
			break; 
		case 4: 
			document.getElementById("dice").src = "../resources/images/dice4.png"; 
			break; 
		case 5:
			document.getElementById("dice").src = "../resources/images/dice5.png"; 
			break; 
		case 6: 
			document.getElementById("dice").src = "../resources/images/dice6.png"; 
		break
	}
}