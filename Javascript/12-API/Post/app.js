const infoUrl = 'https://lesoublisdelinfo.com/api.php'

function postData(url,prenom){
    let request = new XMLHttpRequest()
    request.open('POST',url)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded' )
    request.responseType = 'json'
    request.send('prenom=Pelo')

    request.addEventListener('load',()=>{
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let {response} = request
                // let response = request.response

                console.log(response)
                    //? {
                    //? "prenom": "Pelo",
                    //? "resultat": "Bonjour Pelo ! Voici la requête AJAX !"
                    //? }


            } else {
                alert('Un probleme est survenu')
            }
        }
    })

}

async function fetchPostDate(url, prenom){

    const request = await fetch(url,{
        method: 'POST',
        header:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            prenom
        })
    })

    if(!request.ok){
        alert('une erreur est survenue')
    }else {
        const donnees = await request.json()
        console.log(donnees)
        
    }
}

fetchPostDate(infoUrl,"bart")
