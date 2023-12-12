function alternarContenido() {
    var contenido = document.getElementById("contenido, contenido2, contenido3");
    var botonVerMas = document.getElementById("ver-mas");

    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
      botonVerMas.innerHTML = "Leer más...";
    } else {
      contenido.style.maxHeight = "5000px";
      botonVerMas.innerHTML = "Leer menos...";
    }
  }