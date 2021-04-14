function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var colorSelect = document.getElementById("fcolor");    
    body.style.color = colorSelect.options[colorSelect.selectedIndex]; 
}

function changeBackgroundColor(){ 
    var body = document.getElementsByTagName("body")[0]; 
    var colorSelect = document.getElementById("bcolor"); 
    body.style.backgroundColor = colorSelect.options[colorSelect.selectedIndex].value; 
    console.log("går eg inn");
}