// Sélectionner l'élément
const nomPrenom = document.querySelector('.NomPrénom a'); //
let clickCount = 0; // Initialisation du compteur de clics
const clicksRequired1 = 1; // Nombre de clics nécessaires
const clicksRequired3 = 3; // Nombre de clics nécessaires

// Fonction pour créer et afficher le toast
function showToast(message) {
    // Créer l'élément toast
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #333;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Ajouter au body
    document.body.appendChild(toast);
    
    // Retirer après 3 secondes
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Ajouter l'écouteur d'événements
nomPrenom.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche la navigation
    clickCount++;
    
    if (clickCount === clicksRequired1) {
        showToast(`🎉 Vous êtes dejà sur mon portfolio !`);
        clickCount = 0; // Réinitialiser le compteur
    }
    else if (clickCount === clicksRequired3) {
        showToast(`🎉 Ca n'a pas changé...`);
        clickCount = 0; // Réinitialiser le compteur
    }
});

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);