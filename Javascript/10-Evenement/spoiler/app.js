/*
!Exercice 2 : Faire un bouton "spoiler"

todo        Dans cet exercice, vous allez réaliser un bouton Spoiler !

todo        Nous allons pouvoir réviser les notions de conditions, et de styles.




todo    Voici comment va se dérouler notre bouton Spoiler :

 todo      Un bouton s’affiche sur la page proposant d’afficher le message

todo        L’utilisateur clique sur le bouton, ce qui va activer une condition

todo            La variable hidden vaut true ? Dans ce cas, on affiche le message, 
todo            on change le texte du bouton en « Cacher », et on passe la variable hidden en false

todo            La variable hidden vaut false ? Dans ce cas, on cache le message, 
todo            on change le texte du bouton en « Afficher », et on passe la variable hidden en true
*/

let btn = document.querySelector('button')
let text = document.querySelector('p')
let hidden = false

btn.addEventListener('click',()=>{

    if(hidden){

        btn.textContent = "Cacher"
        text.style.display = 'block'
        hidden = false
    }else{
        btn.textContent = "Affichez"
        text.style.display = 'none'
        hidden = true
    }
})