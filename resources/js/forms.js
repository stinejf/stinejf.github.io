function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var colorSelect = document.getElementById("fcolor");    
    body.style.color = colorSelect.options[colorSelect.selectedIndex].value; 
}