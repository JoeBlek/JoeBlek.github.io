

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}

var imagen = 400;

function cambiarTamano(){    
    var elements = document.getElementsByClassName("imagen");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width=(imagen+"px");
    }
   imagen++;
    if(imagen === 500){
         clearInterval(intervalId);
    }
}

var intervalId = setInterval(cambiarTamano,1);
