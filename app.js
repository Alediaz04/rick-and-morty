
const URLBase= " https://rickandmortyapi.com/api/"
const endpointPersonajes= "character/"
let pagina= 1

let containerCard = document.querySelector('#container-card')

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
            const {name,gender,image,status,species} = personaje
            containerCard.innerHTML+=`<div class="card" style="width: 25rem;">
            <img src="${image} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name} </h5>
                <button class="state" id="type">${status}</button>
                
                <button class="gender">${gender}</button>
                
                <button class="species">${species}</button>
                

             
            </div>
         </div>`
    
    
         console.log(name)
        }
}


let numberPage= document.getElementById('page')

function anterior(){
    if(pagina >1){
      pagina--
      obtenerPersonajes()
      numberPage.innerHTML = pagina
    }
    
}

function siguiente(){
    pagina++
    obtenerPersonajes()
    numberPage.innerHTML = pagina
}

