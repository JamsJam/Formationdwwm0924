// *******************************************************  Méthode la plus ancienne


//* Déconseillé car vieillissante
//* On insère un attribut HTML lié à l'évènement qu'on veut capturer
//* onClick, onMouseOver, onMouseOut

// *******************************************************  Méthode en utilisant les proprietés javascript

let a = document.querySelectorAll('a');
let button = document.querySelectorAll('button');



a[1].onclick = () => {
    if(confirm('etes-vous-sure ?')){
        location.href="https://www.google.com"
    }
}

button[1].onmouseover = () => {
    document.body.style.backgroundColor = 'orange'
    setTimeout(() => {
        document.body.style.backgroundColor = 'white'
        
    }, 2000);
}

button[1].onmouseout = () => {
    document.body.style.backgroundColor = 'white'
}

// *******************************************************  Méthode len utilisant le gestionnaire d'evenement

a[2].addEventListener('click',(event)=>{ //? mettre un argument permet de reutiliser une ou plusieurs proprieter de l'evenement
    console.log(event.target)
    if(confirm('etes-vous-sure ?')){
        location.href="https://www.google.com"
    }
})

button[2].addEventListener('mouseover',()=>{
    document.body.style.backgroundColor = "orange"

})
button[2].addEventListener('mouseout',()=>{
    document.body.style.backgroundColor = "white"

})