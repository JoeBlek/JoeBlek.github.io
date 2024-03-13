

var loadingBar = 200;

function cambiarTamano(){
    document.getElementsByClassName("imagen").style.width=(imagen+"px");
    imagen++;
    if(inmagen === 900){
         clearInterval(intervalId);
    }
}
var intervalId = setInterval(cambiarTamano,1);

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}
