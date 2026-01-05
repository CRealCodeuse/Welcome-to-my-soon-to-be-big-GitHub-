//VARIABLES DES BOUTONS DU FORMULAIRE DE CONTACT
const Connexion = document.querySelector('.Connexion');
const PopUp = document.querySelector('.PopUp');
const Fermer = document.querySelector('.Fermer');
const FormulaireContact = document.querySelector('.FormulaireContact');

//OUVRIR POP UP DE CONTACT
Connexion.addEventListener('click', () => {
    PopUp.style.display = 'block';   
});

//FERMER POP UP DE CONTACT
Fermer.addEventListener('click', () => {
   PopUp.style.display = 'none'; 
});

//FERMER POP UP EN CLIQUANT EN DEHORS DE CELLE-CI
window.addEventListener('click', (e) => {
    if (e.target === PopUp) {
        PopUp.style.display = 'none';
    }
});