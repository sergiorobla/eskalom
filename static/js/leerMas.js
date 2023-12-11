function alternarContenido() {
    var contenido = document.getElementById("contenido");
    var botonVerMas = document.getElementById("ver-mas");

    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
      botonVerMas.innerHTML = "Leer más...";
    } else {
      contenido.style.maxHeight = "4500px";
      botonVerMas.innerHTML = "Leer menos...";
    }
  }