function chargerScript(script) {
    return new Promise((resolve, reject) => {
        
        let element = document.createElement('script');
        element.src = script +'.js';
        document.head.append(element)

        element.addEventListener('load', () => {
            resolve('fichier ' + script + ' a été chargé')
        })

        element.addEventListener('error', () => {
            reject(new Error('Operation impossible! Le fichier ' + script + ' n\'a pas été chargé'))
        })
    })
}

// ! ancienne ecriture 
// const promesse = chargerScript('test')
// promesse.then(
//     function(result){
//         console.log(result)
//     },
//     function(error){
//         console.error(error)
//     }
// )

//! ecriture moderne

async function resultat(){
    try {
        const scriptA = await chargerScript("scriptA")
        console.log(scriptA)
        const scriptB = await chargerScript("scriptB")
        console.log(scriptB)
    } catch (error) {
        console.error(error)
        document.head.lastChild.remove()
    }
}

resultat()


