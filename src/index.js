import movies from "./data/ghibli/titulos.js";

//iteracion a traves del array titulos.js para desplegar imagenes y titulos en index.html. Agregar titulo de la pelicula como parametro url para establecer su ruta.
movies.films.forEach((element) => {
  document.getElementById("containerBox").innerHTML += `<div><a class="link1" href="./card?id=${element.id}"><img class="picture" src=" ${element.img} "</div><h2 class="title"> ${element.title}</h2></a>`;
});
