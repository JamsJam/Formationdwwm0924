let h1 = document.querySelector('h1');

//Ajouter un element a la fin de l'element séléctionné
h1.append('test');
//Ajouter un element a la fin de l'element séléctionné
h1.prepend('test');


//* Ajouter un element HTML

//* 1- creer l'element

let helloWord = document.createElement('div')

//* 2- Personnaliser l'element

helloWord.innerHTML = `
<button>
    NEW!!
</button>
`

//*3- ON l'ajoute a la page

document.querySelector('.container').prepend(helloWord) 
