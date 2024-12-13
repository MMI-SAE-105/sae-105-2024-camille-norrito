// Sélection des éléments nécessaires
const menu = document.getElementById('mainNav'); // Menu déroulant
const menuButton = document.querySelector('.menu__hamburger'); // Bouton hamburger

// État du menu
let isMenuOpen = false;

// Gestionnaire pour bouton hamburger
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Inverse l'état

    menu.classList.toggle('menu--open', isMenuOpen);
    menuButton.classList.toggle('menu--open', isMenuOpen);

    menu.setAttribute('aria-hidden', !isMenuOpen);
    menu.setAttribute('aria-expanded', isMenuOpen);
});

// Gestion de la fermeture en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (isMenuOpen && !menu.contains(e.target) && !menuButton.contains(e.target)) {
        isMenuOpen = false;
        menu.classList.remove('menu--open');
        menuButton.classList.remove('menu--open');
        menu.setAttribute('aria-hidden', 'true');
        menu.setAttribute('aria-expanded', 'false');
    }
});

const carousel = document.querySelector('.carousel');


// Définit la largeur d'un item pour le défilement
const scrollAmount = carousel.offsetWidth;



// Accordéons partenaires
const accordionHeader = document.querySelector('.accordion-header'); 
const partnersSection = document.querySelector('.partners');

// Gestionnaire de clic pour ouvrir/fermer l'accordéon
accordionHeader.addEventListener('click', () => {
    partnersSection.classList.toggle('open'); 
});