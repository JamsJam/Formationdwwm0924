const API_KEY = '784f0a3b817e2404ce30af097624532c'


async function fetchMeteo(key, lieu){
    
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${lieu}&appid=${key}&units=metric`

    const request = await fetch(API_URL,{
        methode: 'GET'
    })

    if(!request.ok){
        alert('un probleme est survenu')
    }else{
        let response = await request.json()
        console.log(response)
        let temp = response.main.temp
        console.log(temp)

        //todo ajouter la temperature dans le html en remplacant xx.xx par la temperature
        //todo changer le nom de la ville dans le html par la ville actuelle

        document.querySelector('#temperature_label').textContent = temp
        let {name} = response
        document.querySelector('#ville').textContent = name
    }

}

fetchMeteo(API_KEY, 'Pointe-a-pitre')

//todo si je click sur le bouton "changer de ville" j'affiche dans la console "CHANGE !"

let btnChanger = document.querySelector('#changer')
btnChanger.addEventListener('click',()=>{
    let ville = prompt('Quelle ville ?')
    fetchMeteo(API_KEY, ville)
})
