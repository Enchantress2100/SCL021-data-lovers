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


//busca id en la URL como parametro unico dado en la url de index.js
let filmId = new URLSearchParams(location.search).get('id')

//guarda la película que necesitamos
let film = data.films.find(element => element.id === filmId)

//imprime la info principal en la card
    document.getElementById("info").innerHTML +=
    `<h1>${film.title} (${film.release_date})</h1>
  <p>Director: ${film.director}<p>
  <p>Producer: ${film.producer}</p>
  <p>Description: ${film.description}</p>
  <p>Rate: ${film.rt_score}</p>`;

//imprime poster en la card
  document.getElementById("img").innerHTML +=
    `<img class="poster" src=" ${film.poster} ">`;

//imprimir en desplegable people:name, gender, age, hair color, specie, img
if (film.people.length === 0) {
  //document.getElementById("content1").innerHTML =`No information available`
  document.getElementById("boton1").style.display = "none";
} else {
  film.people.forEach((element) => {
    document.getElementById("content1").innerHTML += `<div class="detailsCard card">
   <!--imprime imagenes de personajes-->
  <div id="image-people"><img class="detailsImg" src=" ${element.img} "></div>
   <div id="info-people"><h3>${element.name}</h3>
  <p>Gender: ${element.gender}</p>
    <p>Age: ${element.age}</p>
    <p>Eye color: ${element.eye_color}</p>
    <p>Hair color: ${element.hair_color}</p>
    <p>Specie: ${element.specie}</p></div>
 </div>`;
  });
}

//imprimir en desplegable locations: name, climate, terrain, surface water, residents, img

if (film.locations.length === 0) {
  //document.getElementById("content2").innerHTML += `No information available`;
  document.getElementById("boton2").style.display = "none";
} else {
  film.locations.forEach((element) => {
    document.getElementById(
      "content2"
    ).innerHTML += `<div class="detailsCard card">
   <!--imprime imagenes de ubicaciones-->
  <div id="image-location"><img class="detailsImg" src=" ${element.img} "></div>
   <div id="info-location"><h3>${element.name}</h3>
  <p>Climate: ${element.climate}</p>
    <p>Terrain: ${element.terrain}</p>
    <p>Surface water: ${element.surface_water}</p>
 </div>`;
  });
}

//imprimir en desplegable vehicles: name, description, vehicle_class, length, pilot, name of the pilot.
if (film.vehicles.length === 0) {
   //document.getElementById("content3").innerHTML += `No information available`;
  document.getElementById('boton3').style.display="none"
} else {
  film.vehicles.forEach((element) => {
    document.getElementById(
      "content3"
    ).innerHTML += `<div class="detailsCard card">
   <!--imprime imagenes de vehículos-->
  <div id="image-vehicle"><img class="detailsImg" src=" ${element.img} "></div>
   <div id="info-vehicle"><h3>${element.name}</h3>
  <p>Description: ${element.description}</p>
    <p>Vehicle class: ${element.vehicle_class}</p>
    <p>Length: ${element.length}</p>
    <p>Pilot: ${element.pilot.name}</p>
 </div>`;
  });
}




