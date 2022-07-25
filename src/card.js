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

/*data.films.forEach((element) => {
fetch(`http://localhost:3000/card?title=${element.title}`).then(function (response) {
  document.getElementById("info").innerHTML +=
  `<h1>Title: ${element.title}</h1>
<h2>Release date: ${element.release_date}</h2>
<p>Director: ${element.director}<p>
<p>Producer: ${element.producer}</p>
<p>Description: ${element.description}</p>
<p>Rate: ${element.rt_score}</p>`;
});
});*/

data.films.forEach((element) => {
  fetch(`http://localhost:3000/card?title=${element.title}`).then(function (response) {
    document.getElementById("info").innerHTML +=
    `<h1>Title: ${element.title}</h1>
  <h2>Release date: ${element.release_date}</h2>
  <p>Director: ${element.director}<p>
  <p>Producer: ${element.producer}</p>
  <p>Description: ${element.description}</p>
  <p>Rate: ${element.rt_score}</p>`;
  });
  });
  
  Object.keys(my_criteria).every(function(c) {
    return obj[c] == my_criteria[c];
  });


/*filter(word => word.length > 6);


let dataMovie = data.films.filter((title===data.films.title) => {
  fetch(`http://localhost:3000/card?title=${element.title}`).then(function (response) {
    document.getElementById("info").innerHTML +=
      `<h1>Title: ${element.title}</h1>
<h2>Release date: ${element.release_date}</h2>
<p>Director: ${element.director}<p>
<p>Producer: ${element.producer}</p>
<p>Description: ${element.description}</p>
<p>Rate: ${element.rt_score}</p>`;
  })
})
return dataMovie*/
