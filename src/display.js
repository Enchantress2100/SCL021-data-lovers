import data from "./data/ghibli/ghibli.js";
import sortFilms from "./data.js";


//imprimir cards en display en orden alfabetico ascendente de forma automatica

// data.films.sort(function (a, b) {
//         a = a.title.toUpperCase(),
//         b = b.title.toUpperCase();
//     return a == b ? 0 : a > b ? 1 : -1;
// })
// data.films.forEach(function (data) {document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//          <!--imprime imagenes de personajes-->
//          <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//          <div id="info-people"><h3>${data.title}</h3></div>
//         </div>`;   
// })

      
//crear evento que desencadene que se ordenen de forma descendente


//imprimir cards en display en orden alfabetico descendente
// data.films.sort(function (a, b) {
//     (a = a.title.toUpperCase()), (b = b.title.toUpperCase());
//     return a == b ? 0 : a > b ? 1 : -1;
//  });
//  data.films.reverse().forEach(function (data) {
//    document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//           <!--imprime imagenes de personajes-->
//           <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//           <div id="info-people"><h3>${data.title}</h3></div>
//          </div>`;
//  });
     

//crear evento que desencadene que las fechas se ordenen de forma ascendente


//imprimir cards en display en orden de fecha ascendente
// data.films.sort(function (a, b) {
//     let x = new Date(a.release_date)
//     let y = new Date(b.release_date)
//     return x-y
// });

// data.films.forEach(function (data) {
//   document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//          <!--imprime imagenes de personajes-->
//          <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//          <div id="info-people"><h3>${data.title}</h3></div>
//         </div>`;
// });


//crear evento que desencadene que las fechas se ordenen de forma descendente


//imprimir cards en display en orden de fecha descendente
// data.films.sort(function (a, b) {
//   let x = new Date(a.release_date);
//   let y = new Date(b.release_date);
//   return y - x;
// });

// data.films.forEach(function (data) {
//   document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//          <!--imprime imagenes de personajes-->
//          <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//          <div id="info-people"><h3>${data.title}</h3></div>
//         </div>`;
// });



//crear evento que desencadene que el ranking se ordene de forma ascendente


//imprimir cards en display en orden de ranking ascendente
// data.films.sort(function (a, b) {
//     let i = new Number(a.rt_score)
//     let j = new Number(b.rt_score)
//     return i-j
// });

// data.films.forEach(function (data) {
//   document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//          <!--imprime imagenes de personajes-->
//          <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//          <div id="info-people"><h3>${data.title}</h3></div>
//         </div>`;
// });


//crear evento que desencadene que el ranking se ordene de forma descendente


//imprimir cards en display en orden de ranking descendente
// data.films.sort(function (a, b) {
//     let t = new Number(a.rt_score)
//     let s = new Number(b.rt_score)
//     return s-t
// });

// data.films.forEach(function (data) {
//   document.getElementById("allFilms").innerHTML += `<div class="card detailsCard insidecard">
//          <!--imprime imagenes de personajes-->
//          <div id="image-people"><img class="detailsImg" src=" ${data.poster} "></div>
//          <div id="info-people"><h3>${data.title}</h3></div>
//         </div>`;
// });
