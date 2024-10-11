/*
todo        Ce que vous devez réaliser :
todo    
todo    Créer une fonction abracadabra qui ne contiendra aucun paramètre.
todo    
todo    Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.
todo    
todo    Stocker ces trois informations grâce à trois variables : prenom, nom et age (ne compliquons pas les choses !)
todo    
todo    Afficher, toujours grâce à une boîte de dialogue, la phrase :
todo        "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] ! Euh... Je veux dire... Monsieur le grand magicien [nom] !
todo        Cela fait déjà [age] ans que vous faites rayonner notre contrée !".
*/

function abracadabra(){
    let prenom = prompt('quel est votre prenom')
    let nom = prompt('quel est votre nom')
    let age = prompt('quel est votre age')

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "+ prenom +" ! Euh... Je veux dire... Monsieur le grand magicien "+ nom +"  ! Cela fait déjà "+ age +"  ans que vous faites rayonner notre contrée !")
}

// abracadabra()


/*
todo Voici ce que nous allons faire : un calculateur d'IMC !
todo 
todo Nous allons récupérer deux valeurs grâce à notre utilisateur : 
todo poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. 
todo Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. 
todo Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.
todo 
toodo Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres.
 


* note : IMC = poid(kg) / taille(cm)^2 
 */


/**
 * 
 * @param {Number} p le poid en kg
 * @param {Number} t la taille en cm
 * @returns {Number|String}
 */
function calculImc(p, t)
{
    
    if (typeof(p) == "number" & typeof(t) == "number" ) {
        

    
    let taille = t/100
    let imc = p/Math.pow(taille,2)
    //? let imc = p/(taille*taille)
    //? let imc = p/(taille**2)

    return Math.round(imc)
    //? calculeImc() == imc


    } else {
        return  'Valeur incorrect' 
    }
    }


let poids = prompt("quel est votre poids")
let taille = prompt("quel est votre taille")


console.log(calculImc(poids, taille))