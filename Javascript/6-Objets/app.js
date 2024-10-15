//***** Déclarer un objet


//un objet se compose de proprités et de méthode
let mark = {
    //! les proprieté
    prenom: "mark",
    nom: "zuckerberg",
    email: "mark@facebook.fr",

    //! les méthodes
    sePresenter: function(){
        console.log('Bonjours')// bonjour
        console.log("Bonjours, je m'appelle "+ this.nom )// this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    }
}




// On peux passer par une fonction pour creer un objet

function getCoordonnees(long, lat){
    return {
        longitude: long,
        latitude: lat
    }
}

let coordonnees = getCoordonnees(54, 124)

console.log(coordonnees) 
/*
*    coordonnees{
*        longitude: 54,
*        latitude: 124
*    }
 */

// pour appeler les propriété : 

console.log(coordonnees.longitude)

// pour appeler les méthodes :

console.log(mark.sePresenter())


//*********** Les fonctions constructeur

//on cree une fonction constructeur pour nos utilisatuers
//une fonction constructeur commence par une majuscule
function Utilisateur(prenom,nom,email) {
    this.prenom = prenom; // this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    this.nom = nom;
    this.email = email;

    this.sePresenter = function(){
        console.log("Bonjour, je m'appelle " + this.nom +" "+ this.prenom+" et je suis joingnable a "+ this.email+". ")
    } 

}

// on cree un objet

let markz = new Utilisateur("mark", "zuckerberg","mark@facebook.com");
let user23543 = new Utilisateur("jeremy", "antoine","jeremy@antoine.com");

console.log(markz)
console.log(user23543)


markz.sePresenter()


function Logement(type,annee, placeDeParking, proprietaire) {
    this.type                =  type
    this.annee               =  annee
    this.placeDeParking      =  placeDeParking
    this.proprietaire        =  proprietaire
}

let appartA = new Logement('appartement', 2014, true, mark)

console.log(appartA)
