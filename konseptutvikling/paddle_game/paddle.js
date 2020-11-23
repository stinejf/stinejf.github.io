var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var paddleHeight = 5;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var particle = {
	x: canvas.width/2,
	y: canvas.height-50,
	radius: 5,
	color: "#013b3b", 
	xSpeed: 2,
	ySpeed: -2, 
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
	//document.getElementById("hiddenText").style.display = ""
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(particle.x + particle.xSpeed > canvas.width-particle.radius || particle.x + particle.xSpeed < particle.radius) {
        particle.xSpeed = -particle.xSpeed;
    }
    if(particle.y + particle.ySpeed < particle.radius) {
        particle.ySpeed = -particle.ySpeed;
    }
    else if(particle.y + particle.ySpeed > canvas.height-particle.radius) {
        if(particle.x > paddleX && particle.x < paddleX + paddleWidth) {
            particle.ySpeed = -particle.ySpeed;
        }
        else {
            document.getElementById("gametext").innerHTML = "<h2>GAME OVER</h2>"; 
            clearInterval(interval); // Needed for Chrome to end game
			document.getElementById("hiddenText").style.display = "block"; 
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    particle.x += particle.xSpeed;
    particle.y += particle.ySpeed;
}

var interval = setInterval(draw, 10);