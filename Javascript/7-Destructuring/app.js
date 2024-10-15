let informations = ['superSayen', '25', 'homme', 180];

// let pseudo = informations[0];
// let age = informations[1];
// let sexe = informations[2];

let [pseudo, age, sexe, taille] = informations
console.log(pseudo, age,sexe)

const utilisateur = {
    // Propriétés
    prenom: "John",
    nom: "Doe",
    age: 30,
    email: "john.doe@example.com",
    adresse: {
        rue: "123 Rue Principale",
        ville: "Paris",
        codePostal: "75001",
        pays: "France"
    },
    numeroTelephone: "0102030405",
    genre: "Masculin",
    dateDeNaissance: "1993-04-15",
    nationalite: "Française",
    emploi: "Développeur Web",
    entreprise: "Tech Corp",
    salaire: 50000,
    etatCivil: "Célibataire",
    langues: ["Français", "Anglais"],
    niveauEtudes: "Master",
    abonnementActif: true,
    roles: ["Utilisateur", "Admin"],
    dernierLogin: "2024-10-10",
    inscription: "2020-06-15",
    hobbies: ["Lecture", "Voyage", "Musique"],

    // Méthodes

    // Mettre à jour l'email
    mettreAJourEmail(nouvelEmail) {
        this.email = nouvelEmail;
        console.log(`Email mis à jour : ${this.email}`);
    },

    // Afficher les informations personnelles
    afficherDetails() {
        console.log(`Nom: ${this.prenom} ${this.nom}`);
        console.log(`Email: ${this.email}`);
        console.log(`Téléphone: ${this.numeroTelephone}`);
        console.log(`Adresse: ${this.adresse.rue}, ${this.adresse.ville}, ${this.adresse.codePostal}, ${this.adresse.pays}`);
    },

    // Activer ou désactiver l'abonnement
    changerAbonnement(status) {
        this.abonnementActif = status;
        const etat = this.abonnementActif ? "activé" : "désactivé";
        console.log(`Abonnement ${etat}.`);
    }
};

let {hobbies, salaire, emploi, langues, afficherDetails} = utilisateur

console.log(salaire, hobbies, emploi,langues)


