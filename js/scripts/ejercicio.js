

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}

function cambiarcambiarTamano(){
    var myImg = document.getElementById("zoom_img");
       var currWidth = myImg.clientWidth;
    if(currWidth >= 50){
           myImg.style.width = (currWidth—100) + "px";
    }
}



