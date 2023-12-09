const select = document.querySelector('#select');
const options = document.querySelector('#options');
const contentSelect = document.querySelector('#select .content-select');
const hiddenInput = document.querySelector('#inputSelect');
const lang = document.querySelector('.lang');

function closeDropdown() {
    select.classList.remove('active');
    options.classList.remove('active');
}

// Evento de clic en las opciones
document.querySelectorAll('#options > .option').forEach((option) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.currentTarget.getAttribute('href'); // Obtén la URL del enlace
        window.location.href = targetUrl; // Cambia la ubicación de la página
    });
});

// Evento de clic en el selector para alternar las clases "active"
select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});

// Evento de clic en cualquier lugar de la pantalla
document.addEventListener('click', (e) => {
    // Si el clic no está dentro de .change-lang, cierra el menú desplegable
    if (!lang.contains(e.target)) {
        closeDropdown();
    }
});