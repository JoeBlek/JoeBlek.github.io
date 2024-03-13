var loadingBar = 200;

function cambiarTamano(){    
    var elements = document.getElementsByClassName("loading-bar");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width=(loadingBar+"px");
    }
    loadingBar++;
    if(loadingBar === 400){
         clearInterval(intervalId);
    }
}
var intervalId = setInterval(animationBarOne,1);

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}
