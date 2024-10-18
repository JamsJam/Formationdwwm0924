// Le lien vers les donnée de tout les pokémon
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

function createCard(pokeName, pokeInfo){
    let {sprites, stats, id, types,abilities} = pokeInfo
        // console.log(pokeInfo)

        //todo  il faut creer une carte pour chaque pokémon avec les information demandé. (conseil : creer deja une carte dans l'html et le css et reporter le code dans une fonction "createHtmlCard" pour creer la carte) 
        let cardImg =  sprites.other.showdown.front_default|| sprites.front_default
        let carte = document.createElement('div')
        carte.classList.add('carte')


        carte.setAttribute('id' , `#carte-${id}`)
        carte.setAttribute('data-name',pokeName)
        carte.setAttribute('data-attack',stats[1].base_stat)
        carte.setAttribute('data-type',types[0].type.name)
        carte.setAttribute('data-def',stats[2].base_stat)


        carte.innerHTML = "<img src="+cardImg+" alt=\"\"><p>"+pokeName+"</p><button id=\"btn-"+id+"\">Plus d'info</button>"
        document.querySelector('.container').append(carte)


        document.querySelector("#btn-"+id).addEventListener('click',(event)=>{
            let targetId = event.target.id
            let carteId = targetId.split('-').at(-1)
            console.log(`#carte-${carteId}`)
            
        })
 }

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

        createCard(name,pokeInfo)

        
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
        console.log(pokemons.results)
        
        // pour chaque pokemon, on applique la fonction fetchEachPokemon()
        pokemons.results.forEach(pokemon => {
            fetchEachPokemon(pokemon)
        });



    }


}


 fetchAllPokemon(pokeUrl)

  //todo A chaque fois click sur les boutons "précédent" et "suivant", il faut supprimé toutes les cartes de l'HTML pour réexécuter "fetchAllPokemon"
  //todo A chaque fois click sur les boutons "précédent" et "suivant", il faut supprimé toutes les cartes de l'HTML pour réexécuter "fetchAllPokemon"
