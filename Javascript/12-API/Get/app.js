//* 1 on stock l'URL qui sera utilisé avec AJAX
const btcUrl = 'https://blockchain.info/ticker';

 //* 2 creer une requete
function prixActualise(url){
    let request = new XMLHttpRequest;

    request.open('GET',url) //? premier parametre GET/POSTE, deuxieme^argument  URL

    request.responseType = "json"//? Nous attendont du json
    request.send() //? nous envoyons nps requette 

    request.onload = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status !==200) {
                alert('Un probleme est survenue, veillez revenir plus tard');

            }else{
                let reponse = request.response
                let prix = reponse.EUR.last
                console.log(prix)
                document.querySelector('#price_label').textContent = prix
            }
        }
    }
}

async function fetchPrixActualise(url){
    const request = await fetch(url,{
        methode: "GET"
    })

    if (!request.ok) {
        alert('un problme est survenu')
    }else{
        let donnees = await request.json()
        let prix = donnees.EUR.last
        document.querySelector('#price_label').textContent = prix
    }
}




// setInterval(prixActualise(btcUrl),1000)

let reload = setInterval(()=> fetchPrixActualise(btcUrl),1000)
