/*
?    L'objet window a pour fonction d'englober l'ensemble des fonctions, et autres objets de JavaScript. C'est de lui que tout part.
*/

// ********************************************************************** 

//.open permet d'ouvrir une fenettre
window.open('https://believemy.com');


//.resizeTo Permet de redimentionner la page
let fenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
fenetre.resizeTo(700, 470);
}



//.close permet de fermer la fenetre
let closeFenetre = window.open('https://believemy.com', '', 'width=900, height=700');

function resize() {
    closeFenetre.close();
}