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

//let option= 'producer'
//let filterBy = "Isao Takahata"

//console.log(filterFilms(data.films, option, filterBy))

function check(location, category) {
  //transformar el set filterCriteria a un array, se le asigna el nombre buttons, para ordenar los años.
  let buttons = Array.from(filterCriteria(data.films, category))
  buttons = buttons.sort(function (a, b) {
    //para ordenar valores numericos dentro de un string dentro de un arreglo
      if (!isNaN(Number(a)))
      {a = new Number(a)
        b = new Number(b)}
       return a == b ? 0 : a > b ? 1 : -1; 
     })

  //console.log(buttons)
  buttons.forEach((element) => {
         document.getElementById([location]).innerHTML += `
       <label><input type="radio" name="${[category]}" id="${element}" value="${element}">${element}</label><br>`;
    });
 }

check("filter1", "director");
check("filter2", "producer");
check("filter3", "release_date");

//filtrar por director

let filterDirector = document.getElementById('director')
filterDirector.addEventListener("submit", filter1)

function filter1() {
    event.preventDefault();
  let fullName = document.querySelector('input[name="director"]:checked').value;
  //funcion global para imprimir informacion filtrada
  document.getElementById("allFilms").innerHTML = "";
  filterFilms(data.films, "director", fullName).forEach((element) => {
    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
       <!--imprime imagenes de personajes-->
       <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
       <div id="info-people"><h3>${element.title}</h3></div>
      </div>`;
  });
}

//filtrar por productor
let filterProducer = document.getElementById("producer");
filterProducer.addEventListener("submit", filter2);

function filter2() {
  event.preventDefault();
  let fullName = document.querySelector('input[name="producer"]:checked').value;
  //funcion global para imprimir informacion filtrada
  document.getElementById("allFilms").innerHTML = "";
  filterFilms(data.films, "producer", fullName).forEach((element) => {
    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
       <!--imprime imagenes de personajes-->
       <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
       <div id="info-people"><h3>${element.title}</h3></div>
      </div>`;
  });
}

//filtrar por año
let filterByYear = document.getElementById("year");
filterByYear.addEventListener("submit", filter3);

function filter3() {
  event.preventDefault();
  let fullName = document.querySelector('input[name="release_date"]:checked').value;
  //funcion global para imprimir informacion filtrada
  document.getElementById("allFilms").innerHTML = "";
  filterFilms(data.films, "release_date", fullName).forEach((element) => {
    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
       <!--imprime imagenes de personajes-->
       <div id="image-people"><img class="detailsImg" src=" ${element.poster} "></div>
       <div id="info-people"><h3>${element.title}</h3></div>
      </div>`;
  });
}