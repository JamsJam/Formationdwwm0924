// ************************************************* Faire un tableau simple


let oldMonTableau1 = new Array('un', 'deux', 'trois');



let oldMonTableau2 = Array('un', 'deux', 'trois');


//? Meilleur pratique !!
let monTableau = ['un', 'deux', 'trois'];


// ***************************************************** Faire un tableau a plusieurs dimention

let OldMonTableau2D = new Array(
    'un',
    Array('Mark','Jeff','bill'),
    Array('Zukerberg', 'Dezos', 'Gates')
);



//plus simple et plus actuelle
let monTableau2D = [
    'un',
    ['Mark','Jeff','bill'],
    ['Zukerberg', 'Dezos', 'Gates']
];


// ********************************************** Faire un tableau associatif

let monTableauAssociatif = [
    
    {
        'prenom'  : 'Mark',
        'nom'     : 'Zukerberg',
        'poste'   : 'PDG'
    },

    {
    
    'prenom'  : 'Jeff',
    'nom'     : 'Besos',
    'poste'   : 'PDG'
    },
]

// *********************************************** Acceder aux elements

//? Tableau simple :

console.log(monTableau[0])
//* ou
console.log(monTableau.at(0))


//? Tableau a plusieur dimention :

console.log(monTableau2D[1][0])
//* ou
console.log(monTableau2D.at(1).at(0))


//? Tableau associatif :

console.log(monTableauAssociatif['nom'])

//?le '.length' permet de recuperer la taille du tableau
console.log(monTableau.length)


// *************************************************** Ajouter un element.....


monTableau = ['un', 'deux', 'trois'];


monTableau2D = [
    'un',
    ['Mark','Jeff','bill'],
    ['Zukerberg', 'Dezos', 'Gates']
];


monTableauAssociatif = {
    'prenom'  : 'Mark',
    'nom'     : 'Zukerberg',
    'poste'   : 'PDG'
}

// *************** ...A  la fin 


console.table(monTableau ) // ['un', 'deux', 'trois'];
//? 'push' permet d'ajouter un element a la fin d'un tabeau simple
monTableau.push('quatre','cinq')


monTableau2D.at(1).push('elomn')
console.table(monTableau2D)

console.table(monTableau ) // ['un', 'deux', 'trois','quatre','cinq'];


// *************** ...Au debut

monTableau = ['un', 'deux', 'trois'];


monTableau.unshift('quatre','cinq')
console.table(monTableau) 


// *********************** Cas du tableau associatif :


monTableauAssociatif = {
    'prenom'  : 'Mark',
    'nom'     : 'Zukerberg',
    'poste'   : 'PDG'
}

monTableauAssociatif['age'] = 40
console.table(monTableauAssociatif) 


// *********************************** Supprimer un element


//? pour supprimer un element au debut d'un tableau : .shift
//? pour supprimer un element a la fin d'un tableau : .pop
//? pour supprimer un elementd'un tableau tableau associatif :  delete(tableau.nom)


delete(monTableauAssociatif.age)
console.table(monTableauAssociatif)



//todo Sur un lorem 20 , transformer la chaine de caractere en tableau, puis compter le nombre de "e" dans la chaine.

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur eaque nobis dicta nemo tenetur id expedita maxime deserunt a?"

//? 1 regarder les lettres une par une en transformant le String en Array 

let arrayLorem = lorem.split("")
console.log(arrayLorem)


//? 2 on va faire une boucle  
let compteE = 0

for (let index = 0; index < arrayLorem.length ; index++) {
    const lettre = arrayLorem[index];

    //? comparer chaque élément a la letre "e"


    if(lettre.toUpperCase() == "e"){
        compteE++
    }
}

console.log('Il y a '+compteE+' e dans ce paragraphe')


//todo Sur un lorem 20 , compter le nombre de mot qui commence par "d"

// let arrayWordLorem = lorem.split(" ")

// let dFirst = 0
// console.clear()
// for (let index = 0; index < arrayWordLorem.length; index++) {
    
//     const word = arrayWordLorem[index];
//     index == 2 && console.log(word,word.split(""),word.split("")[0])
    
// }

//*******************Methode de manipulation de tableau modern
//! les fonction suivantes retournent un nouveau tableaux
//? .map((element,index)=>{}) il permet d'executer du code pour charque element d'un tableau
//exemple

let exemple = [1, 2 , 3]

let exempleMap = exemple.map((nombre)=>{
    
    nombre = nombre + 10

    return nombre
})

console.log(exempleMap)

//? .filter filter permet de retourner les element d'un tabeau qui satisfassent une condition
//exemple

let tableauConsecutif = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];

  let filterArray = tableauConsecutif.filter((nombre)=>{
    return nombre % 6 == 0
  })

  console.log(filterArray)

  //? includes qui permet de veriefier si un element est preset dans le tabeleau
  //? find qui permet de permet de retourne la premiere ocurrence d'une valeur dans un tableau

    console.log(tableauConsecutif.find((nombre)=>{return nombre == 12}))



    //todo  trouver le nombre de pokémon de type: eau, psy  et vol

const pokemons = [
    { name: "Pikachu", types: ["Électrique"], attack: "Éclair" },
    { name: "Bulbizarre", types: ["Plante", "Poison"], attack: "Fouet Lianes" },
    { name: "Salamèche", types: ["Feu"], attack: "Flammèche" },
    { name: "Carapuce", types: ["Eau"], attack: "Pistolet à O" },
    { name: "Roucool", types: ["Normal", "Vol"], attack: "Tornade" },
    { name: "Chenipan", types: ["Insecte"], attack: "Charge" },
    { name: "Aspicot", types: ["Insecte", "Poison"], attack: "Dard-Venin" },
    { name: "Rattata", types: ["Normal"], attack: "Vive-Attaque" },
    { name: "Piafabec", types: ["Normal", "Vol"], attack: "Picpic" },
    { name: "Abo", types: ["Poison"], attack: "Morsure" },
    { name: "Raichu", types: ["Électrique"], attack: "Tonnerre" },
    { name: "Rapasdepic", types: ["Normal", "Vol"], attack: "Cru-Aile" },
    { name: "Arbok", types: ["Poison"], attack: "Lance-Boue" },
    { name: "Sabelette", types: ["Sol"], attack: "Griffe" },
    { name: "Sandslash", types: ["Sol"], attack: "Tranche" },
    { name: "Nidoran♀", types: ["Poison"], attack: "Griffe" },
    { name: "Nidorina", types: ["Poison"], attack: "Morsure" },
    { name: "Nidoran♂", types: ["Poison"], attack: "Dard-Venin" },
    { name: "Nidorino", types: ["Poison"], attack: "Double-Pied" },
    { name: "Mélofée", types: ["Fée"], attack: "Vague Psy" },
    { name: "Goupix", types: ["Feu"], attack: "Flammèche" },
    { name: "Feunard", types: ["Feu"], attack: "Lance-Flammes" },
    { name: "Rondoudou", types: ["Normal", "Fée"], attack: "Berceuse" },
    { name: "Nosferapti", types: ["Poison", "Vol"], attack: "Vampirisme" },
    { name: "Paras", types: ["Insecte", "Plante"], attack: "Tranch'Herbe" },
    { name: "Parasect", types: ["Insecte", "Plante"], attack: "Spore" },
    { name: "Venonat", types: ["Insecte", "Poison"], attack: "Poudre Toxik" },
    { name: "Mimitoss", types: ["Insecte", "Poison"], attack: "Psyko" },
    { name: "Canarticho", types: ["Normal", "Vol"], attack: "Coupe" },
    { name: "Doduo", types: ["Normal", "Vol"], attack: "Bec Vrille" },
    { name: "Dodrio", types: ["Normal", "Vol"], attack: "Triplattaque" },
    { name: "Machoc", types: ["Combat"], attack: "Balayette" },
    { name: "Machopeur", types: ["Combat"], attack: "Coup-Croix" },
    { name: "Machamp", types: ["Combat"], attack: "Poing Karaté" },
    { name: "Abra", types: ["Psy"], attack: "Téléport" },
    { name: "Kadabra", types: ["Psy"], attack: "Psyko" },
    { name: "Alakazam", types: ["Psy"], attack: "Choc Mental" },
    { name: "Taupiqueur", types: ["Sol"], attack: "Tunnel" },
    { name: "Triopikeur", types: ["Sol"], attack: "Séisme" },
    { name: "Miaouss", types: ["Normal"], attack: "Griffe" },
    { name: "Persian", types: ["Normal"], attack: "Combo-Griffe" },
    { name: "Psykokwak", types: ["Eau"], attack: "Pistolet à O" },
    { name: "Akwakwak", types: ["Eau"], attack: "Hydrocanon" },
    { name: "Ferosinge", types: ["Combat"], attack: "Coup d'Boule" },
    { name: "Colossinge", types: ["Combat"], attack: "Poing-Karaté" },
    { name: "Arcanin", types: ["Feu"], attack: "Danseflammes" },
    { name: "Tentacool", types: ["Eau", "Poison"], attack: "Acide" },
    { name: "Tentacruel", types: ["Eau", "Poison"], attack: "Hydroqueue" }
  ];

  //? Pour résoudre l'exercice plusieur methode sont possible
  //? Dans un premier temps on va creer les variables  permettant de compter nos pokémons
  
  let typeEau = 0, 
      typePsy = 0,
      typeVol = 0;
  //? Puis il va falloir faire une boucle sur le tableau (on utilisera .map() )

    pokemons.map((pokemon)=>{
        //le code ici sera executer pour chaque pokemon

        let types = pokemon['types'] // cette variable contiendra la valeur type de chaque pokémon qui est un tableau

        // type etant un tableau je peux reboucler dessus

        types.map((type)=>{
            // maintenant je vais faire une comparaison avec un switch-case


            switch (type) {
                case 'Eau':
                    typeEau++
                    break;
                case 'Psy':
                    typePsy++
                    break;
                case 'Vol':
                    typeVol++
                    break;
            
                default:
                    break;
            }



        // avec un if ça donnerais ça (ce code est moins performant) :
            //* if (type == 'Eau') {
            //*     typeEau++
            //* } else if(type == 'Psy'){
            //*     typePsy++
            //* } else if(type == 'Vol'){
            //*     typeVol++
            //* }
        })
    })
    //? une autre maniere d'ecrir des chaine de caractere
    console.log(`Il y a ${typeEau} pokémons de type eau ${typeVol} pokémons de type vol ${typeEau} pokémons de type psy`)


  //? ici je vais utiliser une methode qui allie Filter et includes

  // je reinitialisa mes variables
  typeEau = 0, 
  typePsy = 0,
  typeVol = 0;

  typeEau = pokemons.filter((pokemon)=>{ // La fonction filter retourn un tableau avec uniquement les element qui valide la condition donnée
    return pokemon['types'].includes('Eau')// includes verifie si dans le t'ableau 'Types' il y a l'item "Eau" 
  }).length

  //* Resumons les lignes au dessus. Je vais placer dans ma variable TypeEau la longueur du tableau pokémons apres avoir filtré tout les pokémon de type Eau
  

  
  //todo Utiliser la meme méthode pour les type Vol, et psy

