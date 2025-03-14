
const URLBase= " https://rickandmortyapi.com/api/"
const endpointPersonajes= "character/"
let pagina= 1

let containerCard = document.querySelector('#container-card')
let siguiente = document.querySelector('#siguiente')

const obtenerPersonajes= () => {
        fetch(`${URLBase} ${endpointPersonajes}?page=${pagina}`)
        .then(response => response.json()
        .then(data => createCards(data.results))
        .catch(error=>{
            console.log('Error al llamar los personajes',error)

        })
        //si algun error sucede, el catch se mostraria automaticamente 
    )
 }
