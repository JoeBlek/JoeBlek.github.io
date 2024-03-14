

function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}

var imagen = 400;

function cambiarTamano(){    
    var elements = document.getElementsByClassName("imagen2");
    for (var i = 0; i < elements.height; i++) {
        elements[i].style.width=(imagen2+"px");
    }
   imagen2++;
    if(imagen2 === 900){
         clearInterval(intervalId);
    }
}

var intervalId = setInterval(cambiarTamano,1);
