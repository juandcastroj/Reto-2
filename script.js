import { movieDetails } from "./data/data.js";

//declaracion de las variables a usar 
let contenedorCards = document.querySelector('.contenedorCards');
let items = document.getElementById('items');
let templateCard = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment(); 

let contenedor = document.getElementById('pruebaModal');



     //seleccionamos los datos que se veran en las cards 
    movieDetails.forEach(movie => {
    const {id, nombre, imagen } = movie;

    templateCard.querySelector('h2').textContent = nombre;
    templateCard.querySelector('img').setAttribute('src', imagen);
    templateCard.querySelector('button').setAttribute('id',id);
    
    const otraTarjeta = templateCard.cloneNode(true);
    fragment.appendChild(otraTarjeta);

    items.appendChild(fragment);
})



items.addEventListener('click', (e) =>{
    //console.log(e.target.classList.contains('btn'))

     if(e.target.classList.contains('btn')){
      let idmovie = e.srcElement.id;

        //console.log(idmovie)

        movieDetails.forEach(movie => {
            const { id, nombre, director, genero, año, duracion, imagen} = movie
        
            if (idmovie == id){
                contenedor.innerHTML = ` 
                <h3 class="modal-title" id="exampleModalLabel">${nombre}</h3>
             <div class="modal-body">
                <center>
                    <img src=" ${imagen}" width="75%" >
                </center>
                <h3>Director: ${director}</h3>
                <h3>Año: ${año}</h3>
                <h3>Genero: ${genero}</h3>
                <h3>Duración: ${duracion}</h3>
            </div>`
            }
         } )
   
    }

} )





