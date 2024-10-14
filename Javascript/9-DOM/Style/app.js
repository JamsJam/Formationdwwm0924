/*

* 1- selectionner un element

* 2- utiliser une proprieter CSS

* 3- assigner une valeur a la proprieter


*/

//1ere methode : décomposée


//1- selectionner un element
let header = document.querySelector("header");

//2- utiliser une proprieter CSS
//3- assigner une valeur a la proprieter
header.style.backgroundColor = '#ffbd69';



//2e methode : direct 

document.querySelector("h1").style.color = "#111d5e"
document.querySelector("h1").style.textAlign = "center"

//3e methode : avec une class

document.querySelector("header").classList.add("ma_class") ;
document.querySelector("header").classList.remove("ma_class") ;
document.querySelector("header").classList.contains("ma_class") ;
document.querySelector("header").classList.toggle("ma_class") ;
document.querySelector("header").classList.replace("ma_class","ma_new_class") ;