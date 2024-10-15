//todo La zone B dois devenir verte 
//todo la zone "bas" dois se décaler de 150px vers le bas
//todo la zone A doit retrecire a une echelle de 1/2
//todo il dois y avoir 4 carré noirs dans la zone menu, les carres doivent etre espacé a une distance egal les uns des autre


//todo La zone B dois devenir verte 
document.querySelector('.b').style.backgroundColor = 'green';

//todo la zone "bas" dois se décaler de 150px vers le bas
let bas = document.querySelector('footer span')
bas.style.transform = 'translateY(150px)'

//todo la zone A doit retrecire a une echelle de 1/2
//* je cree une class a--scale
let a = document.querySelector('.a')
a.classList.add('a--scale')


//todo il dois y avoir 4 carré noirs dans la zone menu, les carres doivent etre espacé a une distance egal les uns des autre
let menu = document.querySelector('nav')
menu.style.display = 'flex'
menu.style.flexDirection = 'row'
menu.style.justifyContent = 'space-evenly'
menu.style.alignItems = 'center'

let i = 0

while (i < 4) {
    let carre = document.createElement('div')
    
    //? carre.classList.add('carre')
    carre.style.height = "50px"
    carre.style.width = "50px"
    carre.style.backgroundColor = "black"

    menu.append(carre)
    i++
}