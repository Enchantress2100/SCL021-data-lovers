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

//obtener data de las peliculas (titulo, release date, director, producer, description, rate)
data.films.forEach((element) => {
document.getElementById("info").innerHTML +=
`<h1>Title: ${element.title}</h1>
<h2>Release date: ${element.release_date}</h2>
<p>Director: ${element.director}<p>
<p>Producer: ${element.producer}</p>
<p>Description: ${element.description}</p>
<p>Rate: ${element.rt_score}</p>`;
});


