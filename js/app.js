AOS.init();

function toggleMenu(){
    const menu = document.querySelector('.menuIcon');
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
}