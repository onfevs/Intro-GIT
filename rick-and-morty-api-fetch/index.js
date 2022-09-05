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
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            <div class="body-card">
                <h3>Rick Sanchez</h3>
                <span>Status: Alive</span>
                <span>Specie: Human</span>
                <span>Gender: Male</span>
                <span>Origin: Earth</span>
            </div>
        </article>
        `
    }
    // Adiccionar tarjetas al section
    document.getElementById('section-card').innerHTML = cards
}

function main(){
    const url = 'https://rickandmortyapi.com/api/character'
    obtener_personajes(url)
}
main()
