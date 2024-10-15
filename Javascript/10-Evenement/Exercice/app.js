/*
 
! Avant de commencer
todo Vérifiez que vous avez bien lié votre fichier html avec votre fichier JavaScript. 
todo Si vous le souhaitez, vous pouvez partir de  ce fichier CodePen créé pour l’occasion.


!    Etape 1
todo Créez un bouton, avec le texte « Lancer le décompte », dans votre page HTML.


!    Etape 2
todo Récupérez grâce à JavaScript, votre élément button, et stockez-le dans une variable btn.



!    Etape 3
todo Ajoutez un évènement sur votre bouton, qui se déclenchera au clic, et qui appellera la fonction start().


!    Etape 4
todo Créez une fonction start() qui aura pour but de créer une variable stockant un intervalle. 
todo Cet intervalle devra appeler une fonction decompte() toutes les secondes. 
todo Je vous conseille d’initialiser toutes vos variables à l’extérieur de vos fonctions pour pouvoir les utiliser partout
todo (hors, évidemment, la variable qui contient notre intervalle).



!    Etape 5
todo Créez une fonction decompte() qui décrémentera dans un premier temps la variable secondes. 
todo Créez cette variable en-dehors de votre fonction. Puis, vérifiez si secondes vaut 0. 
todo Si c’est le cas, appelez la fonction stop(), sinon, affichez dans la page HTML, grâce à JavaScript, 
todo le nombre de secondes restantes (par exemple, s’il reste 5 secondes, 
todo     écrivez « 5 » dans la page, à la suite des autres secondes, comme dans l’exemple ci-dessus).


!    Etape 6
todo Créez une fonction stop() qui arrêtera l’intervalle et qui se chargera d’écrire « Stop ! » dans la page.
todo 
todo 
todo 
todo Amusez-vous bien !
todo 

*/


let elmtHtml = document.createElement('p')
document.querySelector('body').prepend(elmtHtml)





//!    Etape 2

let btn = document.querySelector("button")
let secondes = 10
let timer
//!    Etape 3

btn.addEventListener('click', ()=>{
    start()
})



//! Etape 4 : creer un interval : fonction setInterval()


function start(){
    timer = setInterval(() => {

        decompte()

    }, 1000 );
    
}


//! Etape 5

function decompte(){

    secondes--;
    if (secondes === 0) {
        stop()
    }

    elmtHtml.textContent = secondes

}

//! Etape 6 

function stop(){
    clearInterval(timer)
    elmtHtml.remove()
}