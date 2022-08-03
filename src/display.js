import data from "./data/ghibli/ghibli.js";
import { sortFilms, filterCriteria, filterFilms } from "./data.js";

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

let option= 'producer'
let filterBy = "Isao Takahata"

//console.log(filterFilms(data.films, option, filterBy))

function check(location, category) {
    filterCriteria(data.films, category).forEach((element) => {
         document.getElementById([location]).innerHTML += `
       <label><input type="radio" name="${[category]}" id="${element}" value="${element}">${element}</label><br>`;
    });
 }

check("filter1", "director");
check("filter2", "producer");
check("filter3", "release_date");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  let fullName = document.querySelector('input[name="director"]:checked').value
  console.log('holaaaaaaaaa ' + fullName)
  //funcion global para imprimir informacion filtrada
  document.getElementById("allFilms").innerHTML = ""
  filterFilms(data.films, 'director', fullName).forEach((element) => {
    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
       <!--imprime imagenes de personajes-->
       <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
       <div id="info-people"><h3>${element.title}</h3></div>
      </div>`;
  });

});

