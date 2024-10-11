/********** Operateur de comparaison
 *?     == : égal à
 *?     === : strictement égale à
 *?     != : different de
 *?     !== : strictement different de
 *?     > : strictement superieur à
 *?     < : strictement inferieur à
 *?     >= : superieur ou égal à
 *?     <= : inferieur ou égal
 */ 

 // **************************************** condition : If --> else


if (true) {
    //* code executé si et seulement si la condition (entre parenthese) est renvoi true
} else {
    //* code executé si et seulement si la condition (entre parenthese) est renvoi false
}

//todo ecrire une fonction qui en fonction de l'heure retourne "C'est le matin" ou "c'est le l'apres-midi" 
//todo on execute la fonction dans la console

/*
heure = 12 --> heure prend la valeur 12
heure == 12 --> heure est egale a 12
heure === 12 --> heure est strictement egale a 12 (meme valeur et meme type)
heure != 12 --> heure est strictement different a 12 
heure !== 12 --> heure est strictement different a 12 (differente valeur et differente type)
heure < 12 --> heure est strictement inferieur a 12 
heure <= 12 -->heure est inferieur ou egale a 12 
*/


function time(hour){

    let message

    if(hour <= 12){
        message = "c'est le matin"

    }else{
        
        message = "c'est l'apres-midi"
    }

    return message
}

// console.log(time())


 // **************************************** condition : switch


 function time2(hour){

    let message

    // if(hour > 6 && hour <= 12){

    //     message = "c'est le matin"

    // }else if(hour <= 18){
        
    //     message = "c'est l'apres-midi"
    // }else if(hour <= 21){
        
    //     message = "c'est le soir"
    
    // }else {
    //     message = "c'est la nuit"
    // }

    switch (hour) {
    
        case hour > 6 || hour <=12:
            message = "c'est le matin"
            break;
        case  hour > 12 || hour <= 18:
            message = "c'est l'apres midi"
            break;
        case hour > 18|| hour <= 21:
            message = "c'est le soir"
            break;
            
        default:
            message = "c'est la nuit"
    
            break;
    }

    return message
}


// switch (hour) {
    
//     case hour > 6 || hour <=12:
//         message = "c'est le matin"
//         break;
//     case  hour > 12 || hour <= 18:
//         message = "c'est l'apres midi"
//         break;
//     case hour > 18|| hour <= 21:
//         message = "c'est le soir"
//         break;
        
//     default:
//         message = "c'est la nuit"

//         break;
// }


console.log(time2(20))




 // **************************************** Verifier plusieurs conditions d'un coups 

 /*

?   && = et
?   || = ou
?   ! = not ( le contraire de la condition)


*/
//todo ecrire une condition telleque on puisse savoir si on peux boire du café
//todo on peux boire du café si la tasse est remplis et si le café est chaud 

let isFull = true
let isHot = false

if (isFull  && isHot) {

    console.log("On peux boire le café")
}else{
    
    console.log("On ne peux pas boire le café")
}



//**** Operateur &&

//? && verifie que les condition a sa droite et a sa gauche sont true en meme temps 
true && true === true
true && false === false
false && false === false

//**** Operateur ||

//? \\ verifie que au moins une condition a sa droite et a sa gauche est true  
true || true === true
true || false === true
false || false === false

//**** Operateur !

//? \\ l'operateur ! inverse la condition 
!true === false
!false === true


//todo creer une fonction qui renvois true si il reste plus de 2000ml de lait dans le frigo et false si il en reste moins

function laitRestant(vMilk){

    if(vMilk >= 2000){
        return true
    }else{
        return false
    }
}

let hasMilk = laitRestant(1000)

console.log(hasMilk)

//todo ecriere une condition qui pertmet de savoir si il temps d'aller acheter du lait

if (hasMilk) {
    console.log("il y a deja du lait")
} else {
    console.log("il faut acheter du lait")
    
}


 // **************************************** Condition ternaire 

 let a = 5;

//  [CONDITION] ? [TRUE] : [FALSE] ; // --> syntaxe d'(une condition ternaire)


 a > 3 ? console.log('a est superieur a trois') : console.log('a est inferieur à trois')

// if(a > 3 ){
//     console.log('a est superieur a trost');

// }else {
//     console.log('a est inferieur à trois');
// }

// *************************************************************** Les exeptions

let recompense = prompt("Choisissez une récompense : épée, arc, haches");
let degats;

try{

    switch(recompense) {
        case 'épée':
            degats = 40;
            break;
        case 'arc':
            degats = 30;
            break;
        case 'haches':
            degats = 20;
            break;
        default:
            throw new Error('Vous ne pouvez pas prendre ça ')
            break
        }
            
        
    alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
}catch(error) {
    alert(error)
    console.error(error)
 }
