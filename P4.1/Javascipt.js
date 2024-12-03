function cambiarColor() {
    var div = document.getElementById("iddeldiv");
    var divColor = div.style.backgroundColor;
    setInterval(divColor == "black"){
        div.style.backgroundColor = "pink";
    } sinosi(divColor == "pink"){
        div.style.backgroundColor = "blue";
    }sinosi{
        div.style.backgroundColor = "black";
    }
}

