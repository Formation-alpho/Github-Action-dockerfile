// Sélectionner tous les titres de section
const sectionHeaders = document.querySelectorAll('h2');

// Ajouter un événement de clic à chaque titre de section
sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Trouver le parent de l'en-tête (section) et basculer la visibilité
        const section = header.parentElement;
        const content = section.querySelector('p, ul, div');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

// Initialiser toutes les sections à masquées sauf le résumé
document.querySelectorAll('.summary + section').forEach(section => {
    const content = section.querySelector('p, ul, div');
    content.style.display = 'none';
});