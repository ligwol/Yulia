const burger = document.getElementById('burger-menu');
const menu = document.getElementById('main-menu');
const header = document.getElementById('header-nav');

const toggleMenu = () => {
    menu.classList.toggle('open');
    header.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);