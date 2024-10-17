// Le lien vers les donnée de tout les pokémon
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// fonction qui permet de recupéré les données de chaque pokémon
async function fetchEachPokemon(pokemon){
    let {name, url} = pokemon
    const request = await fetch(url,{
        methode: "GET"
    })

    if (!request.ok) {
        alert('un probleme est survenu')
    }else{
        // si ça se passe bien, on recupere les données au format json dans la variable pokeinfo
        let pokeInfo = await request.json()
        // console.log(pokeInfo)

        //todo  il faut creer une carte pour chaque pokémon avec les information demandé. (conseil : creer deja une carte dans l'html et le css et reporter le code dans une fonction "createHtmlCard" pour creer la carte) 

        
    }

 }
 // fonction qui recupere les données de tout les pokémon
 //todo recupérer les liens dans "suivant" et "precedent" pour le placer dans un bouton suivant et précédent dans l'html

async function fetchAllPokemon(url){
    const request = await fetch(url,{
        methode: "GET"
    })

    // si ça se passe mal
    if (!request.ok) {
        alert('un problme est survenu')
    }else{
        // si ça se passe bien, on recupere les données au format json dans la variable pokemons
        let pokemons = await request.json()
        // console.log(pokemons,pokemons.results)
        
        // pour chaque pokemon, on applique la fonction fetchEachPokemon()
        pokemons.results.forEach(pokemon => {
            fetchEachPokemon(pokemon)
        });
    }


}
 fetchAllPokemon(pokeUrl)

  //todo A chaque fois click sur les boutons "précédent" et "suivant", il faut supprimé toutes les cartes de l'HTML pour réexécuter "fetchAllPokemon"
  //todo A chaque fois click sur les boutons "précédent" et "suivant", il faut supprimé toutes les cartes de l'HTML pour réexécuter "fetchAllPokemon"
