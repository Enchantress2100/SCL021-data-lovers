import data from "./data/ghibli/titulos.js";

data.films.forEach((element) => {
  document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
 <!--imprime imagenes de personajes-->
<div id="image-people"><img class="detailsImg" src=" ${element.img} "></div>
 <div id="info-people"><h3>${element.title}</h3></div>
</div>`;
});