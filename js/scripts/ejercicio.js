
function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}
  
function cambiarTamano() {
    var imagenes = document.getElementsByClassName('imagen');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.width = (parseFloat(imagenes[i].style.width || getComputedStyle(imagenes[i]).width) * 2) + 'px';
    }
}


