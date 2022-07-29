import data from "./data/ghibli/ghibli.js";
import sortFilms from "./data.js";

//agregar botones que elijan parametro (criteria es el parametro que se va a ordenar)

let displayFilms = sortFilms(data.films, 'director', true)
console.log(displayFilms)

displayFilms.forEach((element) => {
    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
         <!--imprime imagenes de personajes-->
         <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
         <div id="info-people"><h3>${element.title}</h3></div>
        </div>`
});

