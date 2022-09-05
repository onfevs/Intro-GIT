async function obtener_personajes(url_api) {  //async function se vuelve asincronica
    // Realizar peticion de tipo GET
    const resp = await fetch(url_api,{ // await es para que espere
        method: 'GET' // Solo se envia un metodo "POST", "PUT" or "DELETE"
    })
    //Obtener datos de la peticion
    const data = await resp.json()
    return data.results
}

// Mostrar informacion -  Crear muchas tarjetas
function mostrar_personajes (personajes) {
    let cards = ''
    for (let i = 0; i < personajes.length; i++) {
        cards += ` 
        <article class="card">
            <img src="${personajes[i].image}" />
            <div class="body-card">
                <h3>${personajes[i].name}</h3>
                <span>Status: ${personajes[i].status}</span> 
                <span>Specie: ${personajes[i].species}</span>
                <span>Gender: ${personajes[i].gender}</span>
                <span>Origin: ${personajes[i].origin.name}</span>
            </div>
        </article>
        `
        //Modificar informacion se colocan simbolo pesos se revisa la base y se adiccionan los campos.
    }
    // Adiccionar tarjetas al section
    document.getElementById('section-cards').innerHTML = cards
}

async function main (){
    const url = 'https://rickandmortyapi.com/api/character'
    const personajes = await obtener_personajes(url)
    mostrar_personajes(personajes)
}
main()
