import data from "./data/ghibli/ghibli.js";
import { sortFilms, filterFilms } from "./data.js";

//funcion para ordenar de forma descendente (inicialmente se asigna a director, posteriormente se va reasignando a los otros valores)
let criteria = 'director';
let order = true;

document.getElementById("order").addEventListener("click", function(){
order = !order 
print(criteria, order);
    
});

//funcion global para imprimir informacion
function print() {
    document.getElementById("allFilms").innerHTML = ""
    sortFilms(data.films, criteria, order).forEach((element) => {
      document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
         <!--imprime imagenes de personajes-->
         <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
         <div id="info-people"><h3>${element.title}</h3></div>
        </div>`;
    });
}
//se muestra de forma predeterminada el nombre del director de forma ascendente
print("director", true); 

//evento click para imprimir ordenado por nombre (ascendente predeterminado)
document.getElementById("name").addEventListener("click", sortByName);
function sortByName() {
criteria= "title"
print() 
}

//evento click para imprimir ordenado por fecha (ascendente predeterminado)
document.getElementById("date").addEventListener("click", sortByDate)
function sortByDate() {
criteria="release_date"
print()
}

//evento click para imprimir ordenado por rating (ascendente predeterminado)
document.getElementById("rating").addEventListener("click", sortByRate);
function sortByRate() {
criteria ='rt_score'
print() 
}





