const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('header nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

document.addEventListener('click', function() {
    if (!menu.contains (event.target) && !nav.contains (event.target)) {
        nav.classList.remove('slide');
    };
});