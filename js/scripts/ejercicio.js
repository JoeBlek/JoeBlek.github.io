

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}

function cambiarTamano(){
    var myImg = document.getElementByclass("imagen2");
       var currWidth = myImg.clientWidth;
    if(currWidth >= 50){
           myImg.style.width = (currWidth—100) + "px";
    }
}



