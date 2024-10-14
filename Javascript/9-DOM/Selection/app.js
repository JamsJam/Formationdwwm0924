//**************** Les selecteurs

//* La selection par balise

let header = document.getElementsByTagName('header');

//* la selection par la class

let container = document.getElementsByClassName('container')

//* selection par l'ID

let logo = document.getElementById('logo')


//* Selecteur universel


let byTags = document.querySelectorAll('p')
let byClass = document.querySelector('.container')

let byTag = document.querySelector('p')




console.log(header)
console.log(container)
console.log(logo)
console.log(byTags)
console.log(byTag)
console.log(byClass)