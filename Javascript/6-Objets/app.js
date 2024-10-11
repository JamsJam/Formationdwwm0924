//***** Déclarer un objet


//un objet se compose de proprités et de méthode
let mark = {
    //les proprieté
    prenom: "mark",
    nom: "zuckerberg",
    email: "mark@facebook.fr",

    //les méthodes
    sePresenter: ()=>{
        console.log('Bonjours')// bonjour
        console.log("Bonjours, je m'appelle "+ this.prenom )// this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    }
}





// On peux passer par une fonction pour creer un objet


function getCoordonner(long, lat){
    return{
        longitude: long,
        latitude: lat
    }
}

let coordonnees = getCoordonner(54, 124)

console.log(coordonnees) 
/*
    coordonnees{
        longitude: 54,
        latitude: 124
    }
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

    this.sePresenter = () => {
        console.log("Bonjour, je m'appelle " + this.nom +" "+ this.prenom+" et je suis joingnable a "+ this.email+". ")
    } 

}

// on cree un objet
// on utilise ici un var pour ne pas que la valeur de mark se fasse ecraser
var markz = new Utilisateur("mark", "zuckerberg","mark@facebook.com");
console.log(markz)

mark.sePresenter()


function Logement(type,annee, placeDeParking, proprietaire) {
    this.type                =  type
    this.annee               =  annee
    this.placeDeParking      =  placeDeParking
    this.proprietaire        =  proprietaire
}

var appartA = new Logement('appartement', 2014, true, mark)

console.log(appartA)
