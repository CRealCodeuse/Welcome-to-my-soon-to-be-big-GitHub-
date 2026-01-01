//TRADUCTION FRANCAIS/ANGLAIS
const button = document.querySelector('.English');
let isTranslated = false;

button.addEventListener('click', function() {
    const translations = {
        // Header
        'English': 'Français',
        
        // Sections
        'Langages utilisés': 'Used languages',
        'Points positifs': 'Positive points',
        'Points négatifs': 'Negative points',
        'TO DO LIST': 'TO DO LIST',
        'Fonctionnalités': 'Features',
        'TIC TAC TOE': 'TIC TAC TOE',
        'COMPETENCES': 'SKILLS',
        'Maîtrise sur 5': 'Knowledge out of 5',
        'OUTILS INFORMATIQUES': 'COMPUTER TOOLS',

        // Présentation
        'Bienvenue sur mon portfolio !': 'Welcome to my portfolio!',
        "Je m'appelle Elise, j'ai 29 ans et je suis actuellement en": "My name is Elise, I am 29 years old and I am currently in a",
        "en alternance.": "in work-study.",
        "Concernant les": "Regarding",
        "j'ai pu apprendre le": "I learned",
        "et le": "and",
        "lors de mon début de formation en": "at the beginning of my training in",
        "Par la suite": "Subsequently", 
        "j'ai appris de manière": "I learned in a",
        "le": "the", 
        "et bien d'autres afin d'avoir toutes les": "and many others to have all the", 
        "nécessaires au": "necessary for",
        "Ici": "Here", 
        "vous pourrez voir les": "you will be able to see the", 
        "que j'ai": "I have", 
        "qui vous permettront de comprendre mon": "which will allow you to understand my", 
        "viendront s'ajouter au fur et à mesure de mon": "will be added as I progress in my ",
        'Bonne visite !': 'Enjoy your visit!',
        
        // Projets
        'MES PROJETS :': 'MY PROJECTS:',
        'PIPOUNES CREATION VERSION BTS': 'PIPOUNES CREATION BTS VERSION',
        "C'est un site que j'ai créé au début du BTS SIO pour m'entraîner à coder un site de A à Z, avec seulement les bases apprises, mais pas complètes.": "This is a website that I created at the beginning of the BTS SIO to practice coding a website from A to Z, with only the basics learned, but not complete.",
        '- Tous les liens redirigent vers leur page correspondante.': '- Every links redirect to their corresponding page.',
        "- Il est possible de s'inscrire à la Newsletter du site via un formulaire d'inscription.": "- It is possible to subscribe to the site's Newsletter via a registration form.",
        '- Un endroit pour se connecter ou créer un compte client.': '- A place to log in or create a customer account.',
        '- Code basique, manque de structure et de lisibilité.': '- Basic code, lack of structure and readability.',
        
        
        
        // ToDoList
        
    
        
        
        // Tic Tac Toe
        
        
        
        // Compétences
        
        
        'A VENIR': 'COMING SOON',
        
        // Outils
        

        //Footer
        'Rejoins-moi sur': 'Join me on',
        'et': 'and',
    };

    // Créer l'objet inverse
    const reverseTranslations = {};
    for (const key in translations) {
        reverseTranslations[translations[key]] = key;
    }

    const dictionary = isTranslated ? reverseTranslations : translations;

    // Fonction pour traduire TOUS les nœuds texte récursivement
    function translateAllTextNodes(node) {
        // Si c'est un nœud texte
        if (node.nodeType === 3) {
        let text = node.textContent.trim();
        // Normaliser les espaces multiples
        text = text.replace(/\s+/g, ' ');
        
        if (text && dictionary[text]) {
            // Préserver les espaces originaux avant/après
            const leadingSpace = node.textContent.match(/^\s*/)[0];
            const trailingSpace = node.textContent.match(/\s*$/)[0];
            node.textContent = leadingSpace + dictionary[text] + trailingSpace;
        }
    }
        // Si c'est un élément, parcourir ses enfants
        else if (node.nodeType === 1) {
            // Ne pas traduire le bouton ni le nom
            if (node === button || node.classList.contains('NomPrenom')) {
                return;
            }
            
            // Parcourir tous les enfants
            node.childNodes.forEach(child => {
                translateAllTextNodes(child);
            });
        }
    }

    // Démarrer la traduction depuis le body
    translateAllTextNodes(document.body);

    // Changer le texte du bouton
    button.textContent = isTranslated ? 'English' : 'Français';
    
    isTranslated = !isTranslated;
});