// ***************************************************************Boucle while


let i = 0;
// tant que la condition est verifier , la boucle continue
while (i < 8){

    console.log("Ligne : " + ++i) //incrementation de i pour sortir de la condition a un moment donner
}

/*
?   ++i != i++
?  

*/


// ***************************************************************Boucle Do.....while


// let prenom 

// do {

//     prenom = prompt("quels est votre prenom ?")
//     console.log(prenom)

// } while (prenom == "" || prenom ==null || prenom == false);


// alert("bonjour " + prenom)



//todo Ecrire un prompt qui va redemander l'age de l'utilisateur tant que celui-ci n'est pas majeur


// let age

// do {
//     age = prompt (" Veuillez saisir votre âge")
//     console.log(age)
// }while (!(age >=18 &&  age <=62) );
// }while (age <= 17 || age =="" || age ==null || age == false );


// ***************************************************************Boucle for



for (let index = 0; index < 20; index++) {
    // console.log(index)
    
}


// *************************************************************** Casser une boucle




//? break        --> casse la boucle et en sort
//? continue     --> permet de passer a l'iteration suivante de la boucle

//exemple

const tableau = [
    'continue',
     'display',
     'display',
     'continue',
     'continue',
     'continue',
     'display',
     'display',
     'display',
     'display',
     'display',
     'continue',
     'continue',
     'continue',
     'display',
     'display',
     'continue',
     'continue',
     'display',
     'display',
     'continue',
     'display',
     'continue',
     'display',
     'display',
     'continue',
     'continue',
     'display',
     'display',
     'display',
     'break',
     'continue',
     'continue',
     'continue',
     'display',
     'continue',
     'display',
     'continue',
     'display',
     'display',
    'continue',
    'display',
    'display',
    'display',
    'continue',
    'continue',
    'display',
    'continue',
    'continue',
    'display'
  ];
console.clear()

// for (let index = 0; index < tableau.length + 1; index++) {
    
//     let element = tableau.at(index)
    
    
    
//     if (element === 'display' ) {
    
//         console.log('iteml n°' + index)
    
//     } else if( element === 'continue'){
        
//         console.log('suivant')
//         continue // passe a l'iteration suivante
    
//     } else if(element === 'break'){
//         console.log('BREAK !!!!!!')
//         alert( "la boucle est cassée a l'item n° " + index)
//         break // casse la boucle
//     }

//     console.log('je fais une boucle')


// }







