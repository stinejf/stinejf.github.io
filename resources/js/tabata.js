var countdown = document.getElementById("countdown"); 
var x; 
var y; 

function start() {
    var countdownseconds = 7; 
      // Update the count down every 1 second
      y = setInterval(function() {
 
        if (parseInt(countdownseconds) < 10) {
            countdownseconds = "0" + countdownseconds;
        }
            
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = "00:" + countdownseconds;
            
        console.log(parseInt(countdownseconds)); 
        // If the count down is over, write some text 
        if (parseInt(countdownseconds) <= 0) {
            clearInterval(y);
            document.getElementById("countdown").innerHTML = "00:00";
            startWorkout();
        }
        countdownseconds--;
        }, 1000);
        
}

function startWorkout() {
    document.getElementById("workouttext").innerHTML = "workout";
    document.getElementById("workouttext").style.color = "orange"; 
    document.getElementById("countdown").style.color = "orange"; 
    var seconds = document.getElementById("seconds").value; 

    // Update the count down every 1 second
    x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    if (parseInt(seconds) < 10) {
        seconds = "0" + seconds;
    }
        
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = "00:" + seconds;
        
    console.log(parseInt(seconds)); 
    // If the count down is over, write some text 
    if (parseInt(seconds) <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "00:00";
    }
    seconds--;
    }, 1000);
}

function stopCountdown() {
    location.reload();
}