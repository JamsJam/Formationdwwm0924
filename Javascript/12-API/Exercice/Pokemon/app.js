const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

let pokeArray = []
async function fetchEachPokemon(pokemon){
    let {name, url} = pokemon
    const request = await fetch(url,{
        methode: "GET"
    })

    if (!request.ok) {
        alert('un probleme est survenu')
    }else{
        let pokeInfo = await request.json()
        console.log(pokeInfo)
    }

 }
async function fetchAllPokemon(url){
    const request = await fetch(url,{
        methode: "GET"
    })

    if (!request.ok) {
        alert('un problme est survenu')
    }else{
        let pokemons = await request.json()
        console.log(pokemons,pokemons.results)

        pokemons.results.forEach(pokemon => {
            fetchEachPokemon(pokemon)
        });
    }


}
 fetchAllPokemon(pokeUrl)

 
