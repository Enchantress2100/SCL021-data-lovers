import { example } from "./data.js";
import data from "./data/ghibli/ghibli.js";
import movies from "./data/ghibli/titulos.js";

//menú colapsable
let menu = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//busca id en la URL
let filmId = new URLSearchParams(location.search).get('id')
//guarda la película que necesitamos
let film = data.films.find(element => element.id === filmId) 
//imprime la info en la card
    document.getElementById("info").innerHTML +=
    `<h1>${film.title} (${film.release_date})</h1>
  <p>Director: ${film.director}<p>
  <p>Producer: ${film.producer}</p>
  <p>Description: ${film.description}</p>
  <p>Rate: ${film.rt_score}</p>`;

  document.getElementById("img").innerHTML +=
  `<img class="picture" src=" ${film.poster} ">`;