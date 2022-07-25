import { example } from "./data.js";
import data from "./data/ghibli/ghibli.js";
import movies from "./data/ghibli/titulos.js";



//iteracion a traves del array titulos.js para desplegar imagenes y titulos en index.html.
movies.films.forEach((element) => {
  document.getElementById("containerBox").innerHTML +=
`<div><a class="link1" href="./card.html"><img class="picture" src=" ${element.img} "</div><h2 class="title"> ${element.title}</h2></a>`;
});

