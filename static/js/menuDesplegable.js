function toggleSublista(id) {
    var sublista = document.getElementById(id);

    // Cerrar todas las sublistas antes de abrir la seleccionada
    var sublistas = document.querySelectorAll('.sublista');
    sublistas.forEach(function (item) {
      if (item.id !== id) {
        item.style.display = 'none';
      }
    });

    if (sublista.style.display === 'none' || sublista.style.display === '') {
      sublista.style.display = 'block';
    } else {
      sublista.style.display = 'none';
    }
  }