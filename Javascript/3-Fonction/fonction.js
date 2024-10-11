//******************************************************************Les fonction

// Pour creer une fonction on utilise le mot clé 'function'
// Le nom de la fonction (direBonjour) permet de l'identifier. Le nom est ecrit en camelCase ( premiers mot en minuscule et premiere lettre de chaque nouveau mot en majuscule)

// function direBonjour() {
//     alert('Bonjour User')
// }

// //cette fonction n'est pas executer a l'etat. elle est seulement creer.

// // si la page se charge.....
// window.addEventListener('load',

// //j'execute ma fonction
// direBonjour()
// )


//****************************************************************** La structure des fonctions


//voila la structure d'une fonction.
//name -> le nom de la fonction qui permettrra de l'appeler plus tard. ! une fonction peut etre anonyme !
//params, le paramettre de la fonction. il peu y en avoir plusieurs. c'est une variable qui sera modifier par la fonction et lui servira a s'executer.


function name(params) {
    // # code
}
//exemple : 

function addition(nb1,nb2)  { // la fonction addition demande pour fonctionner 2 paramettre (nb1 et nb2) qui seront additionner.

    console.log (nb1 + nb2)
}

addition(5,6.8) // lorsque j'appel ma fonction, je mets la valeur des argument(ou paramettez) dans les parenthese dans l'ordre de declaration


function askAge(){
    let age = prompt("quel est votre age")
    age = age*2/3
    console.log(age)
}

// askAge()

//***************************************  Le Scoop (ou la porté d'une variable)
let cri= "EN ARRIERE !!"
function criDeGuerre() {
    // let cri ; 

    cri = "EN AVANT !!"; 


    console.log(cri)
    
}

criDeGuerre(); 

console.log(cri); 

// ********************************************************** Les fonction qui retourne quelquechose

let nb1 = 4
let nb2 = 7

//? Exemple :
function addition(nombreA, nombreB) {
    
    let result = nombreA + nombreB
    // console.log(nombreA + nombreB) // --> sert a afficher quelquechose
    
    return result // 11
    //le code apres un "return" dans une fonction n'est apas executer
    // !!!! Le return n'affiche pas mais il donne un resultat en sortie qui peut etre reutiliser en appelant la fonction  avec les paramettre!!!!
    
}



console.log(addition(nb1, nb2))




function sphere(rayon){
    let volume = (4/3)*3.14*rayon**3

    return volume
}

console.log(sphere())


//? Pour 500g de beurre --> 1,75g de farine
//? Ecrire un script telque pour n'importe quel grammage de beurre, on obtienne le grammage de farine correspondant.

function grammeFarine(beurre = 500 ){

    let farine = (beurre * 1750)/500

    return farine
}

console.log(grammeFarine(1))


//? ecrire un fonction qui retourne le nombre d'oeuf a ajouter dans une recette sachant que: 
//? Pour 500g de farine je dois ajouter 2 oeufs


function grammeoeuf(farine = 500 ){

    let oeuf = (farine * 2)/500

    return oeuf
}

console.log(grammeoeuf(1))


//? Pour encadrer un ensemble de 13 enfant il fault 2 adulte.
//? ecrivez une fonction qui  retourne le nombre d'adulte en fonction du nombre d'enfant 


/* 
Un fonction anonyme n'a pas de nom
il y  a plusieux moyen de l'excecuter

*/

//****************************Les fonction annonymes
function(){
    console.log('helloword');
}

function(){
    console.log('fonction annonyme');
}

let fonctionAnonyme = function(){

    console.log("je suis une fonction anonyme dans une variable")
}

fonctionAnonyme()



//cette ecriture permet d'indigquer au navigateur que la fonction doit s'executer immediatement
// (function(){console.log("je suis une fonction anonyme auto-executer")})()

// n°3 : Grace a un evenement ( sera vu plus tard)