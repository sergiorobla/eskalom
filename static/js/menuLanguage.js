const select = document.querySelector('.select');
const options = document.querySelector('.options');
const lang = document.querySelector('.lang');

const closeDropdown = () => {
    select.classList.remove('active');
    options.style.opacity = '0';
    options.style.visibility = 'hidden';
    options.classList.remove('active');
    options.classList.add('out');
};

document.querySelectorAll('#options > .option').forEach(option =>
    option.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = e.currentTarget.getAttribute('href');
    })
);

const toggleMenu = () => {
    const isOpen = select.classList.toggle('active');
    Object.assign(options.style, { opacity: isOpen ? '1' : '0', visibility: isOpen ? 'visible' : 'hidden' });
    options.classList.toggle('active');
    options.classList.toggle('out', !isOpen);
};

select.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
    if (!lang.contains(e.target) && !options.contains(e.target)) closeDropdown();
});

options.addEventListener('animationend', (event) => {
    if (!options.classList.contains('active') && event.animationName === 'fadeOut') {
        Object.assign(options.style, { opacity: '1' });
        options.classList.add('out');
    }
});
