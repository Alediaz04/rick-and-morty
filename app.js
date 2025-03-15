
const URLBase= " https://rickandmortyapi.com/api/"
const endpointPersonajes= "character/"
let pagina= 1

let containerCard = document.querySelector('#container-card')
let siguiente = document.querySelector('#siguiente')

const obtenerPersonajes= () => {
        fetch(`${URLBase}${endpointPersonajes}?page=${pagina}`)
        .then(response => response.json()
        .then(data => createCards(data.results))
        .catch(error=>{
            console.log('Error al llamar los personajes',error)

        })
        //el .then dice entonces hace esto
        //si algun error sucede, el catch se mostraria automaticamente 
    )
 }
 
 obtenerPersonajes()

 const createCards = (personajes) => {
    containerCard.innerHTML = ''
        for(let personaje of personajes){
            const {name,gender,image} = personaje
            containerCard.innerHTML+=`<div class="card" style="width: 18rem;">
            <img src="${image} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name} </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         </div>`
    
    
         console.log(name)
        }
 }

 siguiente= document.addEventListener('click',()=>{
    pagina++
    obtenerPersonajes()
})