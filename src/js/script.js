// Sélection des éléments nécessaires
const menu = document.getElementById('mainNav'); // Menu déroulant
const menuButton = document.querySelector('.menu__hamburger'); // Bouton hamburger

// État du menu
let isMenuOpen = false;

// Gestionnaire d'événement pour le bouton hamburger
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Inverse l'état

    // Toggle des classes pour les animations
    menu.classList.toggle('menu--open', isMenuOpen);
    menuButton.classList.toggle('menu--open', isMenuOpen);

    // Mise à jour des attributs d'accessibilité
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

prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});