// Sélection des éléments nécessaires
const menu = document.getElementById('mainNav');
const menuButton = document.querySelector('.menu__logo'); // Bouton d'ouverture/fermeture

// État du menu : ouvert ou fermé
let isMenuOpen = false;

// Gestionnaire d'événements pour le bouton
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Inverse l'état
    menu.setAttribute('aria-hidden', !isMenuOpen); // Actualise l'attribut aria-hidden
    menu.setAttribute('aria-expanded', isMenuOpen); // Pour l'accessibilité
});

// Gestion de la fermeture en cliquant à l'extérieur (optionnel)
document.addEventListener('click', (e) => {
    if (isMenuOpen && !menu.contains(e.target) && !menuButton.contains(e.target)) {
        isMenuOpen = false;
        menu.setAttribute('aria-hidden', 'true');
        menu.setAttribute('aria-expanded', 'false');
    }
});