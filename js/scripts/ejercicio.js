
function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "red";

}
  
function cambiarTamano() {
    // Obtener todos los elementos con la clase 'imagen'
    var imagenes = document.getElementsByClassName('imagen');
    // Recorrer cada elemento y cambiar su tamaño
    for (var i = 0; i < imagenes.length; i++) {
        // Cambiar el tamaño del elemento (por ejemplo, duplicar su ancho)
        imagenes[i].style.width = (parseFloat(imagenes[i].style.width || getComputedStyle(imagenes[i]).width) * 2) + 'px';
        // Puedes ajustar el factor de cambio según tus necesidades
    }
}


